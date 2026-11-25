// Statični JSON (out/narudzba-proizvodi.json) iz kojeg narudzba.php uzima naziv, cijenu i napomenu — cijena se ne uzima od preglednika.
import { products, hostingPlans, maintenancePlans } from "@/lib/data";
import { products as productsEn, hostingPlans as hostingEn, maintenancePlans as maintenanceEn } from "@/lib/data.en";
import { stavkeZaNarudzbu, iznos } from "@/lib/narudzba";

export const dynamic = "force-static";

export function GET() {
  const en = new Map(stavkeZaNarudzbu(productsEn, hostingEn, maintenanceEn, "en").map((s) => [s.slug, s]));
  const popis = Object.fromEntries(
    stavkeZaNarudzbu(products, hostingPlans, maintenancePlans, "hr").map((s) => [
      s.slug,
      { hr: s.title, en: en.get(s.slug)?.title ?? s.title, cijena: iznos(s.price), napomena_hr: s.napomena, napomena_en: en.get(s.slug)?.napomena ?? s.napomena },
    ]),
  );
  return Response.json(popis);
}
