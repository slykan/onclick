import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { NarudzbaForm } from "@/components/NarudzbaForm";
import { products, hostingPlans, maintenancePlans } from "@/lib/data.en";
import { stavkeZaNarudzbu } from "@/lib/narudzba";

export const metadata: Metadata = {
  title: "Order",
  description: "Order an On-Click product and get an offer with payment details right away.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.on-click.hr/en/narudzba" },
};

export default function OrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Order"
        title="Order a product"
        description="Enter your invoicing details — you will get an offer with payment details on screen and by e-mail right away. After payment we send the invoice digitally."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Suspense>
            <NarudzbaForm stavke={stavkeZaNarudzbu(products, hostingPlans, maintenancePlans, "en")} locale="en" />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
