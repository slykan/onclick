"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Printer, ShoppingCart, Check } from "lucide-react";
import { iznos, eur, prodavatelj, type Stavka } from "@/lib/narudzba";

type Ponuda = {
  broj: string; datum: string; rok: string; proizvod: string; iznos: number;
  kupac: { tip: string; naziv: string; oib: string; adresa: string; mjesto: string; ime: string; email: string; telefon: string };
  napomena: string; poziv: string; model: string; iban: string; primatelj: string; opis: string;
};

const T = {
  hr: {
    proizvod: "Proizvod", tip: "Kupac", tvrtka: "Tvrtka / obrt", osoba: "Privatna osoba", naziv: "Naziv tvrtke / obrta", oib: "OIB",
    adresa: "Ulica i kućni broj", mjesto: "Poštanski broj i mjesto", ime: "Ime i prezime", email: "E-mail", telefon: "Telefon",
    napomena: "Napomena (npr. domena za hosting ili adresa webshopa)", privola: "Prihvaćam da se navedeni podaci koriste za izradu ponude i računa.",
    posalji: "Naruči i preuzmi ponudu", saljem: "Šaljem…", obavezno: "obavezno",
    greska: "Narudžbu nije moguće poslati. Pokušajte ponovno ili nam pišite na info@on-click.hr.",
    iznos: "Iznos", ponuda: "Ponuda", broj: "Broj ponude", datum: "Datum", vrijediDo: "Rok plaćanja", kupac: "Kupac",
    stavka: "Stavka", kolicina: "Kol.", cijena: "Cijena", ukupno: "Ukupno za platiti", pdv: "Nismo u sustavu PDV-a — PDV nije obračunat.",
    uplata: "Podaci za uplatu", primatelj: "Primatelj", ibanL: "IBAN", modelL: "Model", pozivL: "Poziv na broj", opisL: "Opis plaćanja",
    nakon: "Račun ćemo vam nakon uplate dostaviti digitalno (e-mailom).", poslano: "Ponuda je poslana i na vaš e-mail.",
    ispis: "Ispiši / spremi PDF", jos: "Jednokratna cijena.",
  },
  en: {
    proizvod: "Product", tip: "Buyer", tvrtka: "Company", osoba: "Private person", naziv: "Company name", oib: "Croatian OIB / VAT ID",
    adresa: "Street and number", mjesto: "Postcode and city", ime: "Full name", email: "E-mail", telefon: "Phone",
    napomena: "Note (e.g. domain for hosting or webshop address)", privola: "I agree that this data is used to prepare the offer and the invoice.",
    posalji: "Order and get the offer", saljem: "Sending…", obavezno: "required",
    greska: "The order could not be sent. Please try again or email us at info@on-click.hr.",
    iznos: "Amount", ponuda: "Offer", broj: "Offer no.", datum: "Date", vrijediDo: "Payment due", kupac: "Buyer",
    stavka: "Item", kolicina: "Qty", cijena: "Price", ukupno: "Total to pay", pdv: "Not registered for VAT — no VAT charged.",
    uplata: "Payment details", primatelj: "Payee", ibanL: "IBAN", modelL: "Model", pozivL: "Reference", opisL: "Payment description",
    nakon: "After payment we will send you the invoice digitally (by e-mail).", poslano: "The offer has also been sent to your e-mail.",
    ispis: "Print / save PDF", jos: "One-time price.",
  },
};

export function NarudzbaForm({ stavke, locale = "hr" }: { stavke: Stavka[]; locale?: "hr" | "en" }) {
  const t = T[locale];
  const params = useSearchParams();
  const ponudivi = useMemo(() => stavke, [stavke]);
  const [slug, setSlug] = useState(ponudivi[0]?.slug ?? "");
  const [tip, setTip] = useState<"tvrtka" | "osoba">("tvrtka");
  const [salje, setSalje] = useState(false);
  const [greska, setGreska] = useState("");
  const [ponuda, setPonuda] = useState<Ponuda | null>(null);
  const [t0] = useState(() => Date.now());

  useEffect(() => {
    const p = params.get("proizvod");
    if (p && ponudivi.some((x) => x.slug === p)) setSlug(p);
  }, [params, ponudivi]);

  const odabran = ponudivi.find((p) => p.slug === slug);

  async function posalji(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGreska("");
    const f = new FormData(e.currentTarget);
    const podaci = Object.fromEntries(f.entries());
    setSalje(true);
    try {
      const r = await fetch("/narudzba.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...podaci, proizvod: slug, tip, jezik: locale, t: t0 }),
      });
      const j = await r.json();
      if (!r.ok || !j.ok) throw new Error(j.poruka || t.greska);
      setPonuda(j.ponuda);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setGreska(err instanceof Error ? err.message : t.greska);
    } finally {
      setSalje(false);
    }
  }

  const polje = "mt-1 w-full border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-brand-green";
  const oznaka = "block text-sm font-medium text-ink";

  if (ponuda) {
    const k = ponuda.kupac;
    return (
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 flex items-center gap-2 text-sm text-brand-green-dark print:hidden">
          <Check className="h-4 w-4" /> {t.poslano}
        </p>
        <div className="border border-line bg-white p-6 sm:p-10 print:border-0 print:p-0" id="ponuda">
          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-green-dark">{t.ponuda}</p>
              <h2 className="mt-1 text-2xl font-semibold text-ink">{ponuda.broj}</h2>
              <p className="mt-2 text-sm text-ink-light/70">{t.datum}: {ponuda.datum} · {t.vrijediDo}: {ponuda.rok}</p>
            </div>
            <div className="text-right text-sm text-ink-light/80">
              <p className="font-semibold text-ink">{prodavatelj.naziv}</p>
              <p>{prodavatelj.adresa}</p>
              <p>OIB: {prodavatelj.oib}</p>
              <p>{prodavatelj.email}</p>
            </div>
          </div>
          <div className="mt-6 text-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-light/60">{t.kupac}</p>
            <p className="mt-1 font-semibold text-ink">{k.tip === "tvrtka" ? k.naziv : k.ime}</p>
            {k.tip === "tvrtka" && <p>{k.ime}</p>}
            <p>{k.adresa}, {k.mjesto}</p>
            {k.oib && <p>OIB: {k.oib}</p>}
            <p>{k.email}{k.telefon ? ` · ${k.telefon}` : ""}</p>
          </div>
          <table className="mt-6 w-full text-sm">
            <thead><tr className="border-b border-line text-left text-ink-light/60"><th className="py-2 font-medium">{t.stavka}</th><th className="py-2 text-center font-medium">{t.kolicina}</th><th className="py-2 text-right font-medium">{t.cijena}</th></tr></thead>
            <tbody><tr className="border-b border-line"><td className="py-3 pr-4 text-ink">{ponuda.proizvod}<br /><span className="text-xs text-ink-light/60">{ponudivi.find((p) => p.title === ponuda.proizvod)?.napomena ?? t.jos}</span></td><td className="py-3 text-center">1</td><td className="py-3 text-right font-mono">{eur(ponuda.iznos, locale)}</td></tr></tbody>
            <tfoot><tr><td colSpan={2} className="pt-4 text-right font-semibold text-ink">{t.ukupno}</td><td className="pt-4 text-right font-mono text-lg font-semibold text-ink">{eur(ponuda.iznos, locale)}</td></tr></tfoot>
          </table>
          <p className="mt-2 text-right text-xs text-ink-light/60">{t.pdv}</p>
          {ponuda.napomena && <p className="mt-4 text-sm text-ink-light/80">{t.napomena}: {ponuda.napomena}</p>}
          <div className="mt-8 border border-brand-green/40 bg-brand-green/10 p-5 text-sm">
            <p className="font-semibold text-ink">{t.uplata}</p>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5">
              <dt className="text-ink-light/70">{t.primatelj}</dt><dd className="text-ink">{ponuda.primatelj}</dd>
              <dt className="text-ink-light/70">{t.ibanL}</dt><dd className="font-mono text-ink">{ponuda.iban}</dd>
              <dt className="text-ink-light/70">{t.modelL}</dt><dd className="font-mono text-ink">{ponuda.model}</dd>
              <dt className="text-ink-light/70">{t.pozivL}</dt><dd className="font-mono text-ink">{ponuda.poziv}</dd>
              <dt className="text-ink-light/70">{t.iznos}</dt><dd className="font-mono text-ink">{eur(ponuda.iznos, locale)}</dd>
              <dt className="text-ink-light/70">{t.opisL}</dt><dd className="text-ink">{ponuda.opis}</dd>
            </dl>
            <p className="mt-4 text-ink">{t.nakon}</p>
          </div>
        </div>
        <button type="button" onClick={() => window.print()} className="mt-6 inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink hover:text-white print:hidden">
          <Printer className="h-4 w-4" /> {t.ispis}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={posalji} className="mx-auto max-w-3xl space-y-5 border border-line bg-white p-6 sm:p-10">
      <div>
        <label className={oznaka} htmlFor="n-proizvod">{t.proizvod}</label>
        <select id="n-proizvod" className={polje} value={slug} onChange={(e) => setSlug(e.target.value)}>
          {ponudivi.map((p) => <option key={p.slug} value={p.slug}>{p.title} — {eur(iznos(p.price), locale)}</option>)}
        </select>
        {odabran && <p className="mt-2 text-sm text-ink-light/70">{t.iznos}: <span className="font-mono font-semibold text-ink">{eur(iznos(odabran.price), locale)}</span> · {odabran.napomena}</p>}
      </div>

      <fieldset>
        <legend className={oznaka}>{t.tip}</legend>
        <div className="mt-2 flex gap-3">
          {(["tvrtka", "osoba"] as const).map((v) => (
            <button key={v} type="button" onClick={() => setTip(v)} className={`border px-4 py-2 text-sm ${tip === v ? "border-ink bg-ink text-white" : "border-line text-ink"}`}>{v === "tvrtka" ? t.tvrtka : t.osoba}</button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        {tip === "tvrtka" && (
          <>
            <div><label className={oznaka} htmlFor="n-naziv">{t.naziv} *</label><input id="n-naziv" name="naziv" required maxLength={160} className={polje} autoComplete="organization" /></div>
            <div><label className={oznaka} htmlFor="n-oib">{t.oib} *</label><input id="n-oib" name="oib" required maxLength={20} className={polje} inputMode="numeric" /></div>
          </>
        )}
        <div><label className={oznaka} htmlFor="n-ime">{t.ime} *</label><input id="n-ime" name="ime" required maxLength={120} className={polje} autoComplete="name" /></div>
        <div><label className={oznaka} htmlFor="n-email">{t.email} *</label><input id="n-email" name="email" type="email" required maxLength={200} className={polje} autoComplete="email" /></div>
        <div><label className={oznaka} htmlFor="n-adresa">{t.adresa} *</label><input id="n-adresa" name="adresa" required maxLength={160} className={polje} autoComplete="street-address" /></div>
        <div><label className={oznaka} htmlFor="n-mjesto">{t.mjesto} *</label><input id="n-mjesto" name="mjesto" required maxLength={120} className={polje} autoComplete="address-level2" /></div>
        <div><label className={oznaka} htmlFor="n-telefon">{t.telefon}</label><input id="n-telefon" name="telefon" type="tel" maxLength={50} className={polje} autoComplete="tel" /></div>
      </div>
      <div><label className={oznaka} htmlFor="n-napomena">{t.napomena}</label><textarea id="n-napomena" name="napomena" rows={3} maxLength={2000} className={polje} /></div>
      <div className="hidden" aria-hidden="true"><input name="web" tabIndex={-1} autoComplete="off" /></div>
      <label className="flex gap-3 text-sm text-ink-light/80"><input type="checkbox" name="privola" value="1" required className="mt-1 h-4 w-4 accent-[var(--color-brand-green)]" />{t.privola}</label>
      {greska && <p className="text-sm font-medium text-red-700" role="alert">{greska}</p>}
      <button type="submit" disabled={salje} className="inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green hover:text-ink disabled:opacity-60">
        <ShoppingCart className="h-4 w-4" /> {salje ? t.saljem : t.posalji}
      </button>
    </form>
  );
}
