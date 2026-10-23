import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProductAccordion } from "@/components/ProductAccordion";
import { CTASection } from "@/components/CTASection";
import { products } from "@/lib/data.en";

export const metadata: Metadata = {
  title: "Products – anchor & base price modules",
  description:
    "Anchor price and base price modules with an online price list for OpenCart, PrestaShop and Joomla (VirtueMart and J2Store) — compliant with the Croatian requirement from 1 October 2026. Plus ready-made webshop solutions.",
  keywords: ["anchor price", "base price", "sidrena cijena", "bazna cijena", "OpenCart", "PrestaShop", "Joomla", "VirtueMart", "J2Store"],
  alternates: {
    canonical: "https://www.on-click.hr/en/proizvodi",
    languages: {
      hr: "https://www.on-click.hr/proizvodi",
      en: "https://www.on-click.hr/en/proizvodi",
    },
  },
};

export default function ProizvodiPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Our products"
        description="Solutions we've built that are ready to apply to your business."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ProductAccordion products={products} locale="en" />
        </Container>
      </section>

      <CTASection
        title="Need a custom-built solution?"
        description="If a ready-made product doesn't fit, get in touch and we'll build something tailored to you."
        locale="en"
      />
    </>
  );
}
