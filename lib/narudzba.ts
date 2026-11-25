import type { Product } from "@/lib/data";

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

/** Naručiti se može proizvod s fiksnom jednokratnom cijenom (ne pretplata "/ mj", ne "Na upit", ne besplatni download). */
export function mozeNaruciti(p: Product): boolean {
  return /\d/.test(p.price) && !p.price.includes("/") && !p.downloadUrl;
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
