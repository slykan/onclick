import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { WorkTabs } from "@/components/WorkTabs";
import { TechStackGrid } from "@/components/TechStackGrid";
import { ContactSection } from "@/components/ContactSection";
import { NetworkBackground } from "@/components/NetworkBackground";
import { StatCounter } from "@/components/StatCounter";
import { ScrollHint } from "@/components/ScrollHint";
import { RotatingMesh } from "@/components/RotatingMesh";
import { pyramidPoints, pyramidEdges, meshPoints, meshEdges } from "@/lib/shapes3d";
import { services, techStack, heroStats, portfolioProjects } from "@/lib/data";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.on-click.hr/",
    languages: {
      hr: "https://www.on-click.hr/",
      en: "https://www.on-click.hr/en",
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-muted">
        <NetworkBackground />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-none border border-line bg-paper px-4 py-1.5 font-mono text-xs text-ink-light">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              25+ godina iskustva u IT-u
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              IT rješenja koja pokreću{" "}
              <span className="text-brand-green-dark">vaš posao</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-light/70">
              Izrađujemo, održavamo i popravljamo web stranice, webshopove i
              mobilne aplikacije. Brzo, sigurno i bez komplikacija.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-none bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
              >
                Zatraži ponudu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/usluge"
                className="inline-flex items-center gap-2 rounded-none border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                Pogledaj usluge
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </Container>

        <ScrollHint targetId="about" />
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <span className="inline-flex items-center rounded-none border border-line bg-muted px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-light">
              // O nama
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Gradimo IT rješenja koja{" "}
              <span className="text-brand-green-dark">pokreću vaš posao</span>{" "}
              od 2011.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-light/70">
              <p>
                On-Click je IT tvrtka posvećena izradi pouzdanih digitalnih
                rješenja koja tvrtkama i obrtnicima pomažu da rastu i
                jednostavnije posluju u svijetu koji se brzo mijenja.
              </p>
              <p>
                Bavimo se izradom{" "}
                <span className="font-semibold text-ink">web stranica</span>,{" "}
                <span className="font-semibold text-ink">webshopova</span> i{" "}
                <span className="font-semibold text-ink">mobilnih aplikacija</span>,
                uz dugogodišnje iskustvo u radu s WordPressom, Joomlom,
                PrestaShopom, Magentom i rješenjima po mjeri u PHP-u.
              </p>
              <p>
                Svakom projektu pristupamo individualno — od prvog razgovora
                do dugoročne podrške nakon lansiranja, jer vaš uspjeh
                smatramo i svojim uspjehom.
              </p>
            </div>

            <p className="mt-6 border-l-2 border-brand-green py-1 pl-4 text-base font-medium text-ink">
              Web stranice, webshopovi, mobilne aplikacije i vlastiti CMS
              sustavi po mjeri — sve na jednom mjestu, kod jednog partnera.
            </p>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-none border border-line bg-paper p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-green-dark">
                Web i digitalna rješenja
              </p>
              <ul className="mt-4 space-y-2.5">
                {services.slice(0, 3).map((s) => (
                  <li key={s.slug} className="flex items-start gap-2 text-sm text-ink-light">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-none border border-line bg-paper p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-green-dark">
                Podrška i rast
              </p>
              <ul className="mt-4 space-y-2.5">
                {services.slice(3).map((s) => (
                  <li key={s.slug} className="flex items-start gap-2 text-sm text-ink-light">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden border-t border-line bg-muted py-20 sm:py-24">
        <RotatingMesh
          points={pyramidPoints}
          edges={pyramidEdges}
          size={140}
          speed={0.3}
          className="left-[4%] top-[6%] hidden lg:block"
        />
        <RotatingMesh
          points={meshPoints}
          edges={meshEdges}
          size={170}
          speed={0.2}
          reverse
          className="bottom-[6%] right-[3%] hidden lg:block"
        />

        <Container className="relative">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center rounded-none border border-line bg-paper px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-light">
                // Usluge
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Naše <span className="text-brand-green-dark">usluge</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-light/70">
                Kompletna IT rješenja prilagođena vašem poslovanju — od prve
                ideje do dugoročne podrške.
              </p>
            </div>
            <Link
              href="/usluge"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-green-dark"
            >
              Sve usluge
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12">
            <ServicesShowcase services={services} />
          </div>
        </Container>
      </section>

      {/* Platforms & tech stack */}
      <section className="border-y border-line bg-muted py-20 sm:py-24">
        <Container>
          <span className="inline-flex items-center rounded-none border border-line bg-paper px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-light">
            // Stack
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Platforme i <span className="text-brand-green-dark">tehnologije</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-light/70">
            Alati koje koristimo za web, webshop, mobilne aplikacije i
            infrastrukturu — provjereni u praksi i spremni za produkciju.
          </p>

          <div className="mt-10">
            <TechStackGrid groups={techStack} />
          </div>
        </Container>
      </section>

      {/* Our work */}
      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center rounded-none border border-line bg-paper px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-light">
                // Naši radovi
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Neki od <span className="text-brand-green-dark">naših projekata</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-green-dark"
            >
              Pogledaj sve projekte
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10">
            <WorkTabs projects={portfolioProjects} />
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
