import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Izrada web stranica, webshopova, mobilnih aplikacija, održavanje, hosting i SEO optimizacija.",
  alternates: {
    canonical: "https://www.on-click.hr/usluge",
    languages: {
      hr: "https://www.on-click.hr/usluge",
      en: "https://www.on-click.hr/en/usluge",
    },
  },
};

export default function UslugePage() {
  return (
    <>
      <PageHero
        eyebrow="Usluge"
        title="Što možemo napraviti za vas?"
        description="Pružamo kompletna IT rješenja prilagođena vašem poslovanju — od izrade stranice do dugoročne podrške."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 grid grid-cols-1 gap-8 border-b border-line pb-10 last:border-b-0 md:grid-cols-3"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-brand-green">
                  <Icon name={service.icon} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-green-dark">
                    Usluga {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-ink">
                    {service.title}
                  </h2>
                </div>
              </div>

              <div className="md:col-span-2">
                <p className="text-base leading-relaxed text-ink-light/70">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-ink-light">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
