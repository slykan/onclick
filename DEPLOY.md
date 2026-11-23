# Deploy on-click.hr

Stranica je statički Next.js export. Server sam povlači kod s GitHuba (`slykan/onclick`, grana `main`), builda ga i kopira u web mapu.

## Brzo (s ovog računala)

```bash
git push                 # server deploya samo ono što je na GitHubu
bash deploy-live.sh      # spoji se na server i pokrene deploy
```

`deploy-live.sh` odbija pokrenuti deploy ako imaš lokalne commitove koji nisu pushani.

## Ručno

```bash
ssh onclick@vps.on-click.hr
bash ~/deploy.sh
```

## Gdje je što na serveru (Hestia, od 23.11.2026.)

| Što | Putanja |
|---|---|
| Server | `vps.on-click.hr` (173.212.235.127), korisnik `onclick` |
| Deploy skripta | `/home/onclick/deploy.sh` (kopija `deploy.sh` iz ovog repoa) |
| Git kopija i build | `/home/onclick/onclick-site` |
| Web mapa (odredište) | `~/public_html` → `/home/onclick/web/on-clik.hr/public_html` (on-click.hr i www su aliasi) |
| Panel | https://vps.on-click.hr:8083 |

Stari cPanel server (`old.on-click.hr`) više se ne koristi za deploy. Tamo je repo bio u `~/web`; na Hestiji je `~/web` mapa s web domenama, zato je repo sada u `~/onclick-site`.

## Pristup

- Prijava lozinkom (korisnik `onclick` nema SSH ključ).
- Lozinka je u `ssh.txt` (u `.gitignore`, nikad ne ide na GitHub), s redovima `host:`, `user:`, `pass:`. Red `host:` je zastario (`on-click.hr:22`); `deploy-live.sh` ga ignorira i uvijek koristi `vps.on-click.hr`.
- **Pazi:** nekoliko pogrešnih pokušaja lozinke zaključa IP (fail2ban + CrowdSec, i do 4 sata). `deploy-live.sh` zato šalje samo vrijednost iz retka `pass:` i pokušava samo jednom. Za otključavanje: Hestia panel (admin) → Server → Firewall → Banned IPs, ili na serveru `fail2ban-client unban IP` i `cscli decisions delete -i IP`.
- Nakon selidbe servera SSH javlja da se ključ promijenio: `ssh-keygen -R vps.on-click.hr`, zatim ponovno spajanje.

## Ne dirati

`deploy.sh` rsyncom briše sve što nije u buildu, **osim** ovih mapa, koje su linkovi na druge stranice:
`invoice`, `oldweb`, `pzvrbnik`, `geotopo`, `puls`, `vrebac`, `apps`, `agro-log.on-click.hr`, `agrolog.on-click.hr`, `.well-known`.
Kad se doda nova podstranica u `public_html`, dodaj je i u `--exclude` u `deploy.sh`.

## Nakon deploya

- Provjeri na **www.on-click.hr** (on-click.hr bez www preusmjerava sve na naslovnicu).
- Cloudflare kešira 404 oko 4 sata: novu sliku ne otvaraj prije nego je deploy gotov. Kod zamjene slike koristi novo ime datoteke.
