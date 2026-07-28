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

## Deploy (VPS)

1. Git repo na serveru: `~/onclick` (git clone ovog repoa)
2. `./deploy.sh` — povlači zadnji `main`, `npm install`, `npm run build`
3. Nginx servira `~/onclick/out` — primjer konfiguracije: [nginx.conf.example](nginx.conf.example)

## Napomene

- Stari Joomla URL-ovi (`/our-services`, `/contact`) imaju 301 redirect na nove (`/usluge`, `/kontakt`) — vidi `nginx.conf.example`.
- `ssh.txt` (ako postoji lokalno) je namjerno u `.gitignore` — nikad ne commitati pristupne podatke.
