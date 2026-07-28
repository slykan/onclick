import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProductAccordion } from "@/components/ProductAccordion";
import { CTASection } from "@/components/CTASection";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proizvodi",
  description: "Naši proizvodi u ponudi — gotova rješenja spremna za vaše poslovanje.",
  alternates: {
    canonical: "https://www.on-click.hr/proizvodi",
    languages: {
      hr: "https://www.on-click.hr/proizvodi",
      en: "https://www.on-click.hr/en/proizvodi",
    },
  },
};

export default function ProizvodiPage() {
  return (
    <>
      <PageHero
        eyebrow="Proizvodi"
        title="Naši proizvodi u ponudi"
        description="Rješenja koja smo razvili i koja su spremna za primjenu u vašem poslovanju."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ProductAccordion products={products} />
        </Container>
      </section>

      <CTASection
        title="Trebate rješenje po mjeri?"
        description="Ako vam ne odgovara gotov proizvod, javite nam se i napravit ćemo nešto po vašoj mjeri."
      />
    </>
  );
}
