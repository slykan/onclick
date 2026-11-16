import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, BarChart3, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import type { Locale } from "@/lib/i18n";

const copy = {
  hr: {
    badge: "Novo · Puls aplikacija",
    title1: "Znajte tko vam je",
    title2: "sada na stranici.",
    lead: "Puls prati posjete bez kolačića, pokazuje odakle ljudi dolaze i omogućuje vam da im odgovorite dok su još na stranici. Na webu i na mobitelu.",
    features: [
      { icon: Activity, t: "Uživo", d: "tko je na stranici i što gleda" },
      { icon: BarChart3, t: "Statistika", d: "dan, tjedan, mjesec, izvori" },
      { icon: MessageCircle, t: "Chat", d: "odgovorite posjetitelju odmah" },
      { icon: ShieldCheck, t: "Bez kolačića", d: "nema cookie bannera" },
    ],
    perSite: "po web stranici",
    month: "/ mj",
    yearly: (y: string) => `ili ${y} godišnje`,
    plans: [
      { name: "Puls Statistika", price: "9 €", year: "90 €", items: ["Posjetitelji uživo", "Statistika i izvori", "Push obavijesti"] },
      { name: "Puls Pro", price: "19 €", year: "190 €", items: ["Sve iz Statistike", "Chat widget na stranici", "Slanje datoteka, e-mail odgovori"], hot: "Najpopularnije" },
    ],
    trial: "14 dana besplatne probe, bez obveze.",
    ctaTry: "Isprobaj besplatno",
    ctaMore: "Detalji i cjenik",
    ctaOpen: "Otvori Puls",
    contact: "/kontakt",
    products: "/proizvodi",
    alt: "Puls: statistika posjeta uživo na računalu i mobitelu",
  },
  en: {
    badge: "New · Puls app",
    title1: "Know who is on",
    title2: "your website now.",
    lead: "Puls tracks visits without cookies, shows where people come from and lets you reply while they are still on the page. On the web and on your phone.",
    features: [
      { icon: Activity, t: "Live", d: "who is on the site and what they see" },
      { icon: BarChart3, t: "Analytics", d: "day, week, month, sources" },
      { icon: MessageCircle, t: "Chat", d: "reply to visitors instantly" },
      { icon: ShieldCheck, t: "No cookies", d: "no cookie banner needed" },
    ],
    perSite: "per website",
    month: "/ mo",
    yearly: (y: string) => `or ${y} yearly`,
    plans: [
      { name: "Puls Analytics", price: "€9", year: "€90", items: ["Live visitors", "Analytics and sources", "Push notifications"] },
      { name: "Puls Pro", price: "€19", year: "€190", items: ["Everything in Analytics", "Chat widget on your site", "File sharing, e-mail replies"], hot: "Most popular" },
    ],
    trial: "14-day free trial, no commitment.",
    ctaTry: "Try it free",
    ctaMore: "Details and pricing",
    ctaOpen: "Open Puls",
    contact: "/en/kontakt",
    products: "/en/proizvodi",
    alt: "Puls: live visitor analytics on desktop and mobile",
  },
};

/** Istaknuta sekcija za Puls na naslovnoj (HR i EN). */
export function PulsHighlight({ locale = "hr" }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <section id="puls" className="relative scroll-mt-20 overflow-hidden bg-[#0a0f0b] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-green/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 right-0 h-[480px] w-[480px] rounded-full bg-brand-green/15 blur-[120px]" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 border border-brand-green/40 bg-brand-green/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-brand-green">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
              </span>
              {t.badge}
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {t.title1} <span className="text-brand-green">{t.title2}</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">{t.lead}</p>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {t.features.map(({ icon: Ico, t: naslov, d }) => (
                <li key={naslov} className="flex items-start gap-3 border border-white/10 bg-white/[0.03] p-3">
                  <Ico className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>
                    <span className="block text-sm font-semibold">{naslov}</span>
                    <span className="block text-xs text-white/55">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden border border-white/10 shadow-2xl shadow-brand-green/10">
              <Image
                src="/images/puls-uzivo.jpg"
                alt={t.alt}
                width={1672}
                height={941}
                sizes="(min-width: 1024px) 700px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.plans.map((p) => (
            <div
              key={p.name}
              className={`relative border p-6 ${p.hot ? "border-brand-green bg-brand-green/[0.07]" : "border-white/10 bg-white/[0.03]"}`}
            >
              {p.hot && (
                <span className="absolute -top-3 left-6 bg-brand-green px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
                  {p.hot}
                </span>
              )}
              <p className="text-sm font-semibold text-white/80">{p.name}</p>
              <p className="mt-2 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                <span className="text-sm text-white/55">{t.month}</span>
              </p>
              <p className="mt-1 text-xs text-white/45">
                {t.perSite} · {t.yearly(p.year)}
              </p>
              <ul className="mt-5 space-y-2">
                {p.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/75">
                    <Check className="h-4 w-4 shrink-0 text-brand-green" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col justify-center gap-3 border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-white/70">{t.trial}</p>
            <Link
              href={t.contact}
              className="inline-flex items-center justify-center gap-2 bg-brand-green px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              {t.ctaTry}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex gap-3">
              <Link
                href={t.products}
                className="inline-flex flex-1 items-center justify-center border border-white/20 px-3 py-2.5 text-sm font-semibold transition-colors hover:border-brand-green hover:text-brand-green"
              >
                {t.ctaMore}
              </Link>
              <a
                href="https://puls.on-click.hr"
                target="_blank"
                rel="noopener"
                className="inline-flex flex-1 items-center justify-center border border-white/20 px-3 py-2.5 text-sm font-semibold transition-colors hover:border-brand-green hover:text-brand-green"
              >
                {t.ctaOpen}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
