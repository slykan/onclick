import { products, pricingPlans, hostingPlans } from "@/lib/data";

/**
 * Converts a price string like "100,00 €", "od 990 €" or "Besplatno" into the
 * plain numeric-comma format required by NN 101/2026 ("100,00", no € sign).
 * Returns null for prices that aren't a fixed amount (e.g. "po dogovoru"),
 * which are left out of the cjenik since there's nothing fixed to report.
 */
function toNumericPrice(price: string): string | null {
  if (price.trim().toLowerCase() === "besplatno") return "0,00";
  const cleaned = price.replace(/[^0-9.,]/g, "").trim();
  if (!cleaned) return null;
  return cleaned.includes(",") ? cleaned : `${cleaned},00`;
}

function csvField(value: string): string {
  if (/[;"\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function csvRow(fields: string[]): string {
  return fields.map(csvField).join(";");
}

const BOM = "﻿";

export function generateProizvodiCsv(): string {
  const header = csvRow([
    "Naziv",
    "Šifra",
    "Marka",
    "Jedinica mjere",
    "Cijena za jedinicu mjere",
    "Maloprodajna cijena",
    "Posebni oblik prodaje",
    "Naziv posebnog oblika prodaje",
    "Sidrena cijena",
    "Barkod",
    "Dostupnost",
  ]);

  const rows = products.map((product) => {
    const price = toNumericPrice(product.price) ?? "0,00";
    return csvRow([
      product.title,
      product.slug,
      "On-Click",
      "kom",
      price,
      price,
      "NE",
      "",
      price,
      "",
      "Dostupno",
    ]);
  });

  return BOM + [header, ...rows].join("\r\n") + "\r\n";
}

export function generateUslugeCsv(): string {
  const header = csvRow([
    "Naziv usluge",
    "Maloprodajna cijena",
    "Posebni oblik prodaje",
    "Naziv posebnog oblika prodaje",
    "Sidrena cijena",
  ]);

  const rows = [...pricingPlans, ...hostingPlans].flatMap((plan) => {
    const price = toNumericPrice(plan.price);
    if (price === null) return [];
    return [csvRow([plan.name, price, "NE", "", price])];
  });

  return BOM + [header, ...rows].join("\r\n") + "\r\n";
}
