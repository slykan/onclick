<?php
/**
 * Narudžba proizvoda s on-click.hr/proizvodi → ponuda s podacima za uplatu (25.11.2026.)
 *  - cijena i naziv iz narudzba-proizvodi.json (generira Next.js build), ne iz preglednika
 *  - broj ponude = DDMMGGGG-N (N = redni broj tog dana), isto je poziv na broj (model HR00)
 *  - spremanje: /home/onclick/narudzbe/GGGG/<broj>.json (izvan weba)
 *  - mail kupcu (ponuda) i na info@on-click.hr (podaci za račun)
 */
declare(strict_types=1);
date_default_timezone_set('Europe/Zagreb');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const PRODAVATELJ = [
	'naziv' => 'ON CLICK, obrt za računalne djelatnosti', 'adresa' => 'Ilirska 27, 31000 Osijek', 'oib' => '92443986086',
	'iban' => 'HR7923600001102753633', 'banka' => 'Zagrebačka banka d.d.', 'email' => 'info@on-click.hr', 'telefon' => '+385 98 987 66 97',
];
const MODEL = 'HR00';
const ROK_DANA = 8;
const MAX_PO_SATU = 5;

function odgovor(bool $ok, array $x = [], int $kod = 200): void {
	http_response_code($kod);
	echo json_encode(['ok' => $ok] + $x, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
	exit;
}
function jedanRed(string $s, int $max): string {
	$s = trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $s) ?? '');
	return mb_substr($s, 0, $max);
}
function oibIspravan(string $oib): bool {   // ISO 7064, MOD 11,10
	if (!preg_match('/^\d{11}$/', $oib)) return false;
	$a = 10;
	for ($i = 0; $i < 10; $i++) { $a = ($a + (int) $oib[$i]) % 10; $a = ($a === 0 ? 10 : $a) * 2 % 11; }
	return ((11 - $a) % 10) === (int) $oib[10];
}
function eur(float $n, string $j): string {
	return ($j === 'en' ? number_format($n, 2, '.', ',') : number_format($n, 2, ',', '.')) . ' €';
}
function h(string $s): string { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') odgovor(false, ['poruka' => 'Neispravan zahtjev.'], 405);
$d = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($d)) odgovor(false, ['poruka' => 'Neispravan zahtjev.'], 400);
$j = ($d['jezik'] ?? 'hr') === 'en' ? 'en' : 'hr';
$P = $j === 'en'
	? ['nedostaje' => 'Please fill in all required fields.', 'oib' => 'Please enter a valid OIB / VAT ID.', 'email' => 'Please enter a valid e-mail address.', 'privola' => 'Please confirm the consent.', 'brzo' => 'Please try again.', 'previse' => 'Too many orders from your address. Please email us at info@on-click.hr.', 'proizvod' => 'Unknown product.', 'greska' => 'The order could not be saved. Please email us at info@on-click.hr.']
	: ['nedostaje' => 'Molimo ispunite sva obavezna polja.', 'oib' => 'Molimo upišite ispravan OIB.', 'email' => 'Molimo upišite ispravnu e-mail adresu.', 'privola' => 'Molimo potvrdite privolu.', 'brzo' => 'Pokušajte ponovno.', 'previse' => 'Previše narudžbi s vaše adrese. Pišite nam na info@on-click.hr.', 'proizvod' => 'Nepoznat proizvod.', 'greska' => 'Narudžbu nije moguće spremiti. Pišite nam na info@on-click.hr.'];

// zamke za robote
if (!empty($d['web'])) odgovor(true, ['poruka' => 'OK']);
if (isset($d['t']) && (time() - (int) floor((int) $d['t'] / 1000)) < 3) odgovor(false, ['poruka' => $P['brzo']], 429);

// proizvod i cijena sa servera
$popis = json_decode((string) @file_get_contents(__DIR__ . '/narudzba-proizvodi.json'), true) ?: [];
$slug = (string) ($d['proizvod'] ?? '');
if (!isset($popis[$slug])) odgovor(false, ['poruka' => $P['proizvod']], 422);
$proizvod = $popis[$slug][$j] ?? $popis[$slug]['hr'];
$iznos = (float) $popis[$slug]['cijena'];

$tip = ($d['tip'] ?? '') === 'osoba' ? 'osoba' : 'tvrtka';
$k = [
	'tip' => $tip,
	'naziv' => $tip === 'tvrtka' ? jedanRed((string) ($d['naziv'] ?? ''), 160) : '',
	'oib' => $tip === 'tvrtka' ? strtoupper(preg_replace('/\s+/', '', jedanRed((string) ($d['oib'] ?? ''), 20))) : '',
	'ime' => jedanRed((string) ($d['ime'] ?? ''), 120),
	'email' => jedanRed((string) ($d['email'] ?? ''), 200),
	'adresa' => jedanRed((string) ($d['adresa'] ?? ''), 160),
	'mjesto' => jedanRed((string) ($d['mjesto'] ?? ''), 120),
	'telefon' => jedanRed((string) ($d['telefon'] ?? ''), 50),
];
$napomena = mb_substr(trim(preg_replace('/[\x00-\x09\x0B-\x1F\x7F]+/u', ' ', (string) ($d['napomena'] ?? '')) ?? ''), 0, 2000);

foreach (['ime', 'email', 'adresa', 'mjesto'] as $x) if ($k[$x] === '') odgovor(false, ['poruka' => $P['nedostaje']], 422);
if ($tip === 'tvrtka' && $k['naziv'] === '') odgovor(false, ['poruka' => $P['nedostaje']], 422);
if (!filter_var($k['email'], FILTER_VALIDATE_EMAIL)) odgovor(false, ['poruka' => $P['email']], 422);
if ($tip === 'tvrtka') {
	$okOib = preg_match('/^\d{11}$/', $k['oib']) ? oibIspravan($k['oib']) : ($j === 'en' && preg_match('/^[A-Z0-9]{4,20}$/', $k['oib']));   // strani kupci: VAT ID
	if (!$okOib) odgovor(false, ['poruka' => $P['oib']], 422);
}
if (empty($d['privola'])) odgovor(false, ['poruka' => $P['privola']], 422);

// spremište izvan weba (public_html = /home/onclick/web/on-clik.hr/public_html)
$baza = dirname(__DIR__, 3) . '/narudzbe';
if (!is_dir($baza) && !@mkdir($baza, 0750, true)) odgovor(false, ['poruka' => $P['greska']], 500);

// ograničenje po IP-u
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
$rf = $baza . '/.ip-' . md5($ip);
$hits = array_filter(explode(',', (string) @file_get_contents($rf)), fn($t) => (int) $t > time() - 3600);
if (count($hits) >= MAX_PO_SATU) odgovor(false, ['poruka' => $P['previse']], 429);
$hits[] = (string) time();
@file_put_contents($rf, implode(',', $hits), LOCK_EX);

// broj ponude: DDMMGGGG-N
$fh = fopen($baza . '/.brojac', 'c+');
if (!$fh || !flock($fh, LOCK_EX)) odgovor(false, ['poruka' => $P['greska']], 500);
$br = json_decode((string) stream_get_contents($fh), true) ?: [];
$dan = date('dmY');
$n = (int) ($br[$dan] ?? 0) + 1;
$br = [$dan => $n];   // brojač samo za današnji dan
ftruncate($fh, 0); rewind($fh); fwrite($fh, json_encode($br)); fflush($fh); flock($fh, LOCK_UN); fclose($fh);
$broj = "$dan-$n";

$ponuda = [
	'broj' => $broj, 'datum' => date('d.m.Y.'), 'rok' => date('d.m.Y.', strtotime('+' . ROK_DANA . ' days')),
	'proizvod' => $proizvod, 'slug' => $slug, 'iznos' => $iznos, 'kupac' => $k, 'napomena' => $napomena,
	'poziv' => $broj, 'model' => MODEL, 'iban' => PRODAVATELJ['iban'], 'primatelj' => PRODAVATELJ['naziv'] . ', ' . PRODAVATELJ['adresa'],
	'opis' => ($j === 'en' ? 'Offer ' : 'Ponuda ') . $broj, 'jezik' => $j,
];
$god = $baza . '/' . date('Y');
@mkdir($god, 0750, true);
if (@file_put_contents("$god/$broj.json", json_encode($ponuda + ['vrijeme' => date('c'), 'ip' => $ip], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)) === false) {
	odgovor(false, ['poruka' => $P['greska']], 500);
}

/* ---------------------------------------------------------------- mailovi */
$L = $j === 'en'
	? ['ponuda' => 'Offer', 'datum' => 'Date', 'rok' => 'Payment due', 'kupac' => 'Buyer', 'stavka' => 'Item', 'kol' => 'Qty', 'cijena' => 'Price', 'ukupno' => 'Total to pay', 'pdv' => 'Not registered for VAT — no VAT charged.', 'jednokratno' => 'One-time price.', 'uplata' => 'Payment details', 'primatelj' => 'Payee', 'model' => 'Model', 'poziv' => 'Reference', 'iznos' => 'Amount', 'opis' => 'Description', 'nakon' => 'After payment we will send you the invoice digitally (by e-mail).', 'hvala' => 'Thank you for your order! Below is your offer with the payment details.', 'napomena' => 'Note', 'pitanja' => 'Questions? Just reply to this e-mail.']
	: ['ponuda' => 'Ponuda', 'datum' => 'Datum', 'rok' => 'Rok plaćanja', 'kupac' => 'Kupac', 'stavka' => 'Stavka', 'kol' => 'Kol.', 'cijena' => 'Cijena', 'ukupno' => 'Ukupno za platiti', 'pdv' => 'Nismo u sustavu PDV-a — PDV nije obračunat.', 'jednokratno' => 'Jednokratna cijena.', 'uplata' => 'Podaci za uplatu', 'primatelj' => 'Primatelj', 'model' => 'Model', 'poziv' => 'Poziv na broj', 'iznos' => 'Iznos', 'opis' => 'Opis plaćanja', 'nakon' => 'Račun ćemo vam nakon uplate dostaviti digitalno (e-mailom).', 'hvala' => 'Hvala na narudžbi! U nastavku je vaša ponuda s podacima za uplatu.', 'napomena' => 'Napomena', 'pitanja' => 'Pitanja? Samo odgovorite na ovaj e-mail.'];
$kupacHtml = '<b>' . h($tip === 'tvrtka' ? $k['naziv'] : $k['ime']) . '</b><br>' . ($tip === 'tvrtka' ? h($k['ime']) . '<br>' : '')
	. h($k['adresa']) . ', ' . h($k['mjesto']) . '<br>' . ($k['oib'] ? 'OIB: ' . h($k['oib']) . '<br>' : '') . h($k['email']) . ($k['telefon'] ? ' · ' . h($k['telefon']) : '');
$red = fn($a, $b, $mono = false) => '<tr><td style="padding:4px 18px 4px 0;color:#6b6b66">' . $a . '</td><td style="padding:4px 0;color:#111110' . ($mono ? ';font-family:monospace' : '') . '">' . $b . '</td></tr>';
$html = '<!doctype html><html><body style="margin:0;background:#f6f4ef"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f4ef"><tr><td align="center" style="padding:28px 12px">'
	. '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#fff;border:1px solid #e4e0d6;font:14px/1.55 Arial,sans-serif;color:#111110">'
	. '<tr><td style="padding:24px 30px;background:#111110;color:#fff"><b style="font-size:20px">On-Click</b><br><span style="color:#7cb63f">' . h($L['ponuda']) . ' ' . h($broj) . '</span></td></tr>'
	. '<tr><td style="padding:26px 30px 6px">' . h($L['hvala']) . '</td></tr>'
	. '<tr><td style="padding:14px 30px"><table width="100%"><tr><td valign="top" style="font-size:13px;color:#6b6b66">' . h($L['kupac']) . '<br><span style="color:#111110;font-size:14px">' . $kupacHtml . '</span></td>'
	. '<td valign="top" align="right" style="font-size:13px;color:#6b6b66">' . h(PRODAVATELJ['naziv']) . '<br>' . h(PRODAVATELJ['adresa']) . '<br>OIB: ' . PRODAVATELJ['oib'] . '<br>' . h($L['datum']) . ': ' . $ponuda['datum'] . '<br>' . h($L['rok']) . ': ' . $ponuda['rok'] . '</td></tr></table></td></tr>'
	. '<tr><td style="padding:10px 30px"><table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tr style="color:#6b6b66;font-size:13px"><td style="padding:8px 0;border-bottom:1px solid #e4e0d6">' . h($L['stavka']) . '</td><td align="center" style="border-bottom:1px solid #e4e0d6">' . h($L['kol']) . '</td><td align="right" style="border-bottom:1px solid #e4e0d6">' . h($L['cijena']) . '</td></tr>'
	. '<tr><td style="padding:10px 10px 10px 0;border-bottom:1px solid #e4e0d6">' . h($proizvod) . '<br><span style="font-size:12px;color:#6b6b66">' . h($L['jednokratno']) . '</span></td><td align="center" style="border-bottom:1px solid #e4e0d6">1</td><td align="right" style="border-bottom:1px solid #e4e0d6;font-family:monospace">' . eur($iznos, $j) . '</td></tr>'
	. '<tr><td colspan="2" align="right" style="padding:12px 10px 0 0"><b>' . h($L['ukupno']) . '</b></td><td align="right" style="padding-top:12px;font:bold 16px monospace">' . eur($iznos, $j) . '</td></tr></table>'
	. '<p style="text-align:right;font-size:12px;color:#6b6b66;margin:6px 0 0">' . h($L['pdv']) . '</p>'
	. ($napomena !== '' ? '<p style="font-size:13px;color:#444">' . h($L['napomena']) . ': ' . nl2br(h($napomena)) . '</p>' : '') . '</td></tr>'
	. '<tr><td style="padding:14px 30px 26px"><div style="border:1px solid #c5dfaa;background:#f1f8e9;padding:16px 18px"><b>' . h($L['uplata']) . '</b><table style="margin-top:8px;font-size:14px">'
	. $red(h($L['primatelj']), h($ponuda['primatelj'])) . $red('IBAN', PRODAVATELJ['iban'] . ' <span style="color:#6b6b66;font-family:Arial">(' . h(PRODAVATELJ['banka']) . ')</span>', true)
	. $red(h($L['model']), MODEL, true) . $red(h($L['poziv']), h($broj), true) . $red(h($L['iznos']), eur($iznos, $j), true) . $red(h($L['opis']), h($ponuda['opis']))
	. '</table><p style="margin:12px 0 0"><b>' . h($L['nakon']) . '</b></p></div><p style="font-size:13px;color:#6b6b66">' . h($L['pitanja']) . ' · ' . PRODAVATELJ['telefon'] . '</p></td></tr>'
	. '</table></td></tr></table></body></html>';

$tekst = $L['ponuda'] . " $broj\n" . $L['datum'] . ': ' . $ponuda['datum'] . ', ' . $L['rok'] . ': ' . $ponuda['rok'] . "\n\n"
	. "$proizvod — " . eur($iznos, $j) . "\n" . $L['pdv'] . "\n\n" . $L['uplata'] . ":\n"
	. $L['primatelj'] . ': ' . $ponuda['primatelj'] . "\nIBAN: " . PRODAVATELJ['iban'] . "\n" . $L['model'] . ': ' . MODEL . "\n" . $L['poziv'] . ": $broj\n" . $L['iznos'] . ': ' . eur($iznos, $j) . "\n" . $L['opis'] . ': ' . $ponuda['opis'] . "\n\n" . $L['nakon'] . "\n";

function posalji(string $za, string $naslov, string $html, string $tekst, string $replyTo): bool {
	$g = 'oc-' . bin2hex(random_bytes(8));
	$zag = implode("\r\n", [
		'From: =?UTF-8?B?' . base64_encode('On-Click') . '?= <' . PRODAVATELJ['email'] . '>',
		'Reply-To: ' . $replyTo,
		'MIME-Version: 1.0',
		'Content-Type: multipart/alternative; boundary="' . $g . '"',
	]);
	$tijelo = "--$g\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n" . chunk_split(base64_encode($tekst))
		. "--$g\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n" . chunk_split(base64_encode($html)) . "--$g--";
	return mail($za, '=?UTF-8?B?' . base64_encode($naslov) . '?=', $tijelo, $zag, '-f ' . PRODAVATELJ['email']);
}

$okKupac = posalji($k['email'], $L['ponuda'] . " $broj — On-Click", $html, $tekst, PRODAVATELJ['email']);
$adminTekst = "Nova narudžba s on-click.hr — podaci za račun\n\nPonuda: $broj (" . $ponuda['datum'] . ")\nProizvod: " . $popis[$slug]['hr'] . "\nIznos: " . eur($iznos, 'hr') . "\nPoziv na broj: HR00 $broj\n\n"
	. 'Kupac: ' . ($tip === 'tvrtka' ? $k['naziv'] . ' (tvrtka)' : 'privatna osoba') . "\nOIB: " . ($k['oib'] ?: '-') . "\nKontakt: " . $k['ime'] . "\nAdresa: " . $k['adresa'] . ', ' . $k['mjesto']
	. "\nE-mail: " . $k['email'] . "\nTelefon: " . ($k['telefon'] ?: '-') . "\nJezik: $j\nNapomena: " . ($napomena ?: '-') . "\n\nMail kupcu: " . ($okKupac ? 'poslan' : 'NIJE POSLAN') . "\nZapis: $god/$broj.json\n";
posalji(PRODAVATELJ['email'], "Nova narudžba $broj: " . $popis[$slug]['hr'] . ' — ' . ($tip === 'tvrtka' ? $k['naziv'] : $k['ime']), '<pre style="font:14px/1.5 monospace">' . h($adminTekst) . '</pre>' . $html, $adminTekst, $k['email']);

unset($ponuda['jezik'], $ponuda['slug']);
odgovor(true, ['ponuda' => $ponuda, 'mail' => $okKupac]);
