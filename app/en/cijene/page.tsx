import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { MaintenancePlans } from "@/components/MaintenancePlans";
import { pricingPlans, hostingPlans, maintenancePlans } from "@/lib/data.en";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible website, webshop and mobile app packages with no hidden costs.",
  alternates: {
    canonical: "https://www.on-click.hr/en/cijene",
    languages: {
      hr: "https://www.on-click.hr/cijene",
      en: "https://www.on-click.hr/en/cijene",
    },
  },
};

export default function CijenePageEn() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Fair pricing, no hidden costs"
        description="Every project is different, so this is a reference price list. We put together the final quote based on your project's scope and needs."
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
              {/\d/.test(plan.price) && (
                <p
                  className={`mt-1 text-xs ${
                    plan.highlighted ? "text-white/70" : "text-ink"
                  }`}
                >
                  Anchor price: {plan.anchorPrice ?? plan.price}
                </p>
              )}
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
                href="/en/kontakt"
                className={`mt-8 inline-flex items-center justify-center rounded-none px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-brand-green text-ink hover:bg-brand-green-dark hover:text-white"
                    : "bg-ink text-white hover:bg-ink-light"
                }`}
              >
                Request a quote
              </Link>
            </div>
          ))}

          <div className="flex flex-col gap-8 rounded-2xl bg-brand-green p-8 text-ink lg:col-span-3 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="h-4 w-4" />
                Tailor-made
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                AI-driven custom CMS for webshops and websites
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                A CMS built exactly around your business, or a proven engine
                (WooCommerce, Shopify, Laravel…) combined with fast AI-built
                front pages. We connect everything you already use.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm font-medium">
                {[
                  "Custom CMS",
                  "Proven engine + AI front",
                  "Connectivity and integrations",
                  "ERP, fiscalization, payments, shipping",
                ].map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5 bg-ink/10 px-3 py-1.5">
                    <Check className="h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 lg:text-right">
              <p className="text-sm font-medium text-ink/70">Price</p>
              <p className="text-3xl font-semibold">On request</p>
              <Link
                href="/en/kontakt"
                className="mt-4 inline-flex items-center justify-center rounded-none bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
              >
                Let&apos;s talk about your project
              </Link>
            </div>
          </div>
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
                  Price: {plan.price}
                  {/\d/.test(plan.price) && (
                    <p className="mt-0.5 text-xs font-normal text-white/70">
                      Anchor price: {plan.price}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-ink-light/70">
            Backup is included with every plan — created automatically
            once every 7 days.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Website <span className="text-brand-green-dark">maintenance</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-light/70">
              Every system needs regular attention. We make sure your website,
              webshop or app runs smoothly, securely and stays up to date — with
              ongoing annual maintenance or one-off help whenever you need it.
            </p>
          </div>
          <MaintenancePlans
            plans={maintenancePlans}
            labels={{ anchorPrice: "Anchor price", cta: "Let's set up maintenance", contactHref: "/en/kontakt" }}
          />
        </Container>
      </section>
    </>
  );
}
