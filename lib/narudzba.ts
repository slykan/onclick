import type { Product, HostingPlan } from "@/lib/data";

/** Podaci obrta za ponudu i uplatu (isti kao u ponudama). */
export const prodavatelj = {
  naziv: "ON CLICK, obrt za računalne djelatnosti",
  adresa: "Ilirska 27, 31000 Osijek",
  oib: "92443986086",
  iban: "HR7923600001102753633",
  banka: "Zagrebačka banka d.d.",
  email: "info@on-click.hr",
  model: "HR00",
  rokDana: 8,
};

/** Stavka koja se može naručiti (proizvod, hosting paket, godišnje održavanje). */
export type Stavka = { slug: string; title: string; price: string; napomena: string };

/** Naručiti se može proizvod s fiksnom jednokratnom cijenom (ne pretplata "/ mj", ne "Na upit", ne besplatni download). */
export function mozeNaruciti(p: Product): boolean {
  return /\d/.test(p.price) && !p.price.includes("/") && !p.downloadUrl;
}

type Odrzavanje = { slug?: string; name: string; price: string };

/** Sve što se može naručiti, istim redom kao na stranicama. */
export function stavkeZaNarudzbu(
  products: Product[],
  hosting: HostingPlan[],
  odrzavanje: Odrzavanje[],
  locale: "hr" | "en",
): Stavka[] {
  const en = locale === "en";
  return [
    ...products.filter(mozeNaruciti).map((p) => ({ slug: p.slug, title: p.title, price: p.price, napomena: en ? "One-time price." : "Jednokratna cijena." })),
    ...hosting.map((h) => ({ slug: h.slug, title: (en ? "Web hosting " : "Web hosting ") + h.name, price: h.price, napomena: en ? "Hosting for 12 months." : "Hosting na 12 mjeseci." })),
    ...odrzavanje.filter((o) => o.slug).map((o) => ({ slug: o.slug as string, title: o.name, price: o.price, napomena: en ? "Maintenance for 12 months." : "Održavanje na 12 mjeseci." })),
  ];
}

/** "1.250,00 €" → 1250 */
export function iznos(cijena: string): number {
  const m = cijena.replace(/\s/g, "").match(/[\d.,]+/);
  if (!m) return 0;
  return Number(m[0].replace(/\./g, "").replace(",", ".")) || 0;
}

export function eur(n: number, locale: "hr" | "en" = "hr"): string {
  return n.toLocaleString(locale === "en" ? "en-GB" : "hr-HR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}
