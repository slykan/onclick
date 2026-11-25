import Link from "next/link";
import { Check, Sparkles, ShoppingCart } from "lucide-react";
import { Container } from "@/components/Container";
import { MaintenancePlans } from "@/components/MaintenancePlans";
import { pricingPlans, hostingPlans, maintenancePlans } from "@/lib/data";

/** Cijene (premješteno s /cijene na /usluge#cijene 25.11.2026.) */
export function CijeneSekcije() {
  return (
    <>
      <section id="cijene" className="scroll-mt-24 border-t border-line bg-paper pt-16 sm:pt-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-green-dark">Cijene</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Poštene cijene, bez skrivenih troškova</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-light/70">Svaki projekt je drugačiji, zato je ovo orijentacijski cjenik. Konačnu ponudu radimo prema opsegu i potrebama vašeg projekta.</p>
        </Container>
      </section>

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
                  Sidrena cijena: {plan.anchorPrice ?? plan.price}
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

          <div className="flex flex-col gap-8 rounded-2xl bg-brand-green p-8 text-ink lg:col-span-3 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="h-4 w-4" />
                Po mjeri
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                AI driven custom CMS za webshopove i stranice
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                Vlastiti CMS izrađen točno prema vašem poslovanju ili kombinacija
                provjerenog enginea (WooCommerce, Shopify, Laravel…) s brzim
                AI front stranicama. Povezujemo sve što koristite.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm font-medium">
                {[
                  "Custom CMS",
                  "Provjereni engine + AI front",
                  "Povezivost i integracije",
                  "ERP, fiskalizacija, plaćanja, dostava",
                ].map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5 bg-ink/10 px-3 py-1.5">
                    <Check className="h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 lg:text-right">
              <p className="text-sm font-medium text-ink/70">Cijena</p>
              <p className="text-3xl font-semibold">Po dogovoru</p>
              <Link
                href="/kontakt"
                className="mt-4 inline-flex items-center justify-center rounded-none bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
              >
                Razgovarajmo o projektu
              </Link>
              <Link
                href="/novosti/ai-webshop-ili-provjereni-engine-s-ai-frontom"
                className="mt-3 block text-sm font-semibold underline underline-offset-4 hover:text-white"
              >
                Pročitajte zašto engine + AI front →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-muted py-16 sm:py-20">
        <Container>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Web hosting <span className="text-brand-green-dark">s panelom</span>
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
                  Cijena: {plan.price} / godišnje
                  {/\d/.test(plan.price) && (
                    <p className="mt-0.5 text-xs font-normal text-white/70">
                      Sidrena cijena: {plan.price}
                    </p>
                  )}
                </div>
                <Link
                  href={`/narudzba?proizvod=${plan.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-green px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-green-dark hover:text-white"
                >
                  <ShoppingCart className="h-4 w-4" /> Naruči
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-ink-light/70">
            Uključeno u svaki paket: panel za upravljanje domenama, e-mailom i bazama, SSL certifikati te dnevni backup koji se čuva 7 dana. Cijene paketa su godišnje.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Održavanje <span className="text-brand-green-dark">web stranica</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-light/70">
              Svaki sustav treba redovitu pažnju. Brinemo se da vaša stranica,
              webshop ili aplikacija radi glatko, sigurno i ažurno — uz stalno
              održavanje na godinu dana ili jednokratno, kad vam zatreba.
            </p>
          </div>
          <MaintenancePlans
            plans={maintenancePlans}
            labels={{ anchorPrice: "Sidrena cijena", cta: "Dogovorimo održavanje", contactHref: "/kontakt", order: "Naruči", orderHref: "/narudzba?proizvod=" }}
          />
        </Container>
      </section>
    </>
  );
}
