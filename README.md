# on-click.hr

Next.js (App Router) + Tailwind CSS, static-exportirana stranica za On-Click IT Solutions. Hrvatska verzija bez prefiksa (`/usluge`, `/portfolio`...), engleska pod `/en/...` (isti slugovi).

## Razvoj

```bash
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Sadržaj

- Hrvatski sadržaj (usluge, platforme, portfolio, cjenik, proizvodi, novosti, kontakt podaci): [lib/data.ts](lib/data.ts)
- Engleski sadržaj (isti oblik, prevedeno): [lib/data.en.ts](lib/data.en.ts)
- Zajednički UI stringovi (naslovi formi, gumbi i sl.) za komponente koje se koriste na oba jezika: [lib/i18n.ts](lib/i18n.ts)
- Slike idu u `public/images/` (portfolio, proizvodi).

## Kontakt forma

Forma šalje na Formspree (`components/ContactSection.tsx`, `FORMSPREE_ENDPOINT`). Koristi se i na naslovnoj i na `/kontakt` (+ `/en/kontakt`).

## Build (static export)

```bash
npm run build
```

Rezultat je statični sajt u `out/` mapi (`output: "export"` u `next.config.ts`).

## Deploy (cPanel/Apache — isti server kao ostali projekti)

`./deploy.sh` radi sve u jednom:
1. Klonira/pull-a repo u `~/web`
2. `npm install` + `npm run build` (izlaz u `~/web/out`)
3. `rsync` izlaza u `~/public_html` (bez diranja `invoice/` i `oldweb/`)
4. `chown` na `www-data` (CloudLinux SuExec workaround — Apache za ovu domenu ne prebacuje na `onclick` korisnika ispravno, pa fajlovi moraju biti u vlasništvu istog usera pod kojim Apache stvarno radi)

Prvi put: `git clone https://github.com/slykan/onclick.git ~/web && cd ~/web && chmod +x deploy.sh && ./deploy.sh`
Nakon toga: `cd ~/web && ./deploy.sh`

Čisti URL-ovi (`/usluge` bez `.html`) i 301 redirect sa starih Joomla ruta (`/our-services`, `/contact`) rješava `public/.htaccess` — ide automatski u `out/` pri buildu.

## Napomene

- `ssh.txt` (ako postoji lokalno) je namjerno u `.gitignore` — nikad ne commitati pristupne podatke.
