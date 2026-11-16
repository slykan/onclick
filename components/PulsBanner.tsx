import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const copy = {
  hr: {
    badge: "Novo · Puls aplikacija",
    title: "Znajte tko vam je sada na stranici.",
    lead: "Posjetitelji uživo, statistika bez kolačića i chat s posjetiteljima. Na webu i na mobitelu.",
    plans: [
      { name: "Statistika", price: "9 € / mj" },
      { name: "Pro + chat", price: "19 € / mj" },
    ],
    trial: "Isprobaj 14 dana besplatno",
    more: "Više o Pulsu",
    open: "Otvori Puls",
    trialHref: "/kontakt",
    moreHref: "/#puls",
    alt: "Puls: statistika posjeta uživo na računalu i mobitelu",
  },
  en: {
    badge: "New · Puls app",
    title: "Know who is on your website right now.",
    lead: "Live visitors, cookie-free analytics and chat with your visitors. On the web and on your phone.",
    plans: [
      { name: "Analytics", price: "€9 / mo" },
      { name: "Pro + chat", price: "€19 / mo" },
    ],
    trial: "Try it free for 14 days",
    more: "More about Puls",
    open: "Open Puls",
    trialHref: "/en/kontakt",
    moreHref: "/en#puls",
    alt: "Puls: live visitor analytics on desktop and mobile",
  },
};

/** Vodoravni banner za Puls iznad popisa proizvoda (HR i EN). */
export function PulsBanner({ locale = "hr" }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <div className="relative mb-10 overflow-hidden border border-brand-green/30 bg-[#0a0f0b] text-white">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand-green/25 blur-[100px]" />

      <div className="relative grid grid-cols-1 items-center lg:grid-cols-12">
        <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
          <span className="inline-flex items-center gap-2 border border-brand-green/40 bg-brand-green/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand-green">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
            </span>
            {t.badge}
          </span>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{t.title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">{t.lead}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {t.plans.map((p) => (
              <span key={p.name} className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-sm">
                <span className="text-white/70">{p.name}</span>
                <span className="font-mono font-semibold text-brand-green">{p.price}</span>
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={t.trialHref}
              className="inline-flex items-center gap-2 bg-brand-green px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-green-dark hover:text-white"
            >
              {t.trial}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={t.moreHref} className="px-2 py-3 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline">
              {t.more}
            </Link>
            <a
              href="https://puls.on-click.hr"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 px-2 py-3 text-sm font-semibold text-white/60 hover:text-white"
            >
              {t.open}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative h-56 sm:h-72 lg:col-span-5 lg:h-full lg:min-h-[340px]">
          <Image
            src="/images/puls-uzivo.jpg"
            alt={t.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-left lg:object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f0b] via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>
      </div>
    </div>
  );
}
