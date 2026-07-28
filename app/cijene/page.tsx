import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { pricingPlans, hostingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cijene",
  description:
    "Fleksibilni paketi izrade web stranica, webshopova i mobilnih aplikacija bez skrivenih troškova.",
  alternates: {
    canonical: "https://www.on-click.hr/cijene",
    languages: {
      hr: "https://www.on-click.hr/cijene",
      en: "https://www.on-click.hr/en/cijene",
    },
  },
};

export default function CijenePage() {
  return (
    <>
      <PageHero
        eyebrow="Cijene"
        title="Poštene cijene, bez skrivenih troškova"
        description="Svaki projekt je drugačiji, zato je ovo orijentacijski cjenik. Konačnu ponudu radimo prema opsegu i potrebama vašeg projekta."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-paper text-ink"
              }`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p
                className={`mt-2 text-3xl font-semibold ${
                  plan.highlighted ? "text-brand-green" : "text-ink"
                }`}
              >
                {plan.price}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  plan.highlighted ? "text-white/70" : "text-ink-light/70"
                }`}
              >
                {plan.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-brand-green" : "text-brand-green-dark"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className={`mt-8 inline-flex items-center justify-center rounded-none px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-brand-green text-ink hover:bg-brand-green-dark hover:text-white"
                    : "bg-ink text-white hover:bg-ink-light"
                }`}
              >
                Zatraži ponudu
              </Link>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-line bg-muted py-16 sm:py-20">
        <Container>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Web server <span className="text-brand-green-dark">cPanel</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hostingPlans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col rounded-none border border-line bg-paper"
              >
                <div className="flex-1 p-6 text-center">
                  <h3 className="font-semibold text-ink">{plan.name}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-ink-light/70">
                    {plan.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-ink px-6 py-4 text-center text-sm font-semibold text-white">
                  Cijena: {plan.price}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-ink-light/70">
            Backup je uključen u svaki paket — automatski se izrađuje 2x u 14 dana.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Održavanje <span className="text-brand-green-dark">prema dogovoru</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-light/70">
            Svaki sustav treba redovitu pažnju. Bez obzira radi li se o
            mobilnoj aplikaciji, serveru, webshopu ili web stranici — brinemo
            se da sve radi glatko, sigurno i ažurno. Preuzimamo redovito
            ažuriranje sadržaja, sustava i dodataka, praćenje sigurnosnih
            nadogradnji te manje izmjene i nadogradnje kada zatrebaju — sve
            po dogovoru koji odgovara vama i vašem poslovanju.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center justify-center rounded-none bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
          >
            Dogovorimo održavanje
          </Link>
        </Container>
      </section>
    </>
  );
}
