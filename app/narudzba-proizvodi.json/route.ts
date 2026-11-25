// Statični JSON (out/narudzba-proizvodi.json) iz kojeg narudzba.php uzima naziv i cijenu — cijena se ne uzima od preglednika.
import { products } from "@/lib/data";
import { products as productsEn } from "@/lib/data.en";
import { mozeNaruciti, iznos } from "@/lib/narudzba";

export const dynamic = "force-static";

export function GET() {
  const en = new Map(productsEn.map((p) => [p.slug, p.title]));
  const popis = Object.fromEntries(
    products.filter(mozeNaruciti).map((p) => [p.slug, { hr: p.title, en: en.get(p.slug) ?? p.title, cijena: iznos(p.price) }]),
  );
  return Response.json(popis);
}
