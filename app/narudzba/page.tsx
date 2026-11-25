import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { NarudzbaForm } from "@/components/NarudzbaForm";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Narudžba",
  description: "Naručite proizvod On-Clicka i odmah dobijte ponudu s podacima za uplatu.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.on-click.hr/narudzba" },
};

export default function NarudzbaPage() {
  return (
    <>
      <PageHero
        eyebrow="Narudžba"
        title="Naručite proizvod"
        description="Upišite podatke za račun — ponudu s podacima za uplatu dobit ćete odmah na ekranu i na e-mail. Nakon uplate račun vam šaljemo digitalno."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Suspense>
            <NarudzbaForm products={products} locale="hr" />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
