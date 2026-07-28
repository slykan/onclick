import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProductAccordion } from "@/components/ProductAccordion";
import { CTASection } from "@/components/CTASection";
import { products } from "@/lib/data.en";

export const metadata: Metadata = {
  title: "Products | On-Click",
  description: "Our products — ready-made solutions for your business.",
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
