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
import { services, techStack, heroStats, portfolioProjects } from "@/lib/data.en";

export const metadata: Metadata = {
  title: "On-Click IT Solutions",
  description:
    "On-Click — website, webshop and mobile app development for businesses and sole traders in Osijek and across Croatia.",
  alternates: {
    canonical: "https://www.on-click.hr/en",
    languages: {
      hr: "https://www.on-click.hr/",
      en: "https://www.on-click.hr/en",
    },
  },
};

export default function HomeEn() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-muted">
        <NetworkBackground />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-none border border-line bg-paper px-4 py-1.5 font-mono text-xs text-ink-light">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              25+ years of experience in IT
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              IT solutions that power{" "}
              <span className="text-brand-green-dark">your business</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-light/70">
              We build, maintain and fix websites, webshops and mobile apps.
              Fast, reliable and hassle-free.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/en/kontakt"
                className="inline-flex items-center gap-2 rounded-none bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
              >
                Request a quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/en/usluge"
                className="inline-flex items-center gap-2 rounded-none border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                View services
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
              // About
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              We build IT solutions that{" "}
              <span className="text-brand-green-dark">power your business</span>{" "}
              since 2011.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-light/70">
              <p>
                On-Click is an IT company dedicated to building reliable
                digital solutions that help businesses and sole traders grow
                and run more smoothly in a fast-changing world.
              </p>
              <p>
                We build{" "}
                <span className="font-semibold text-ink">websites</span>,{" "}
                <span className="font-semibold text-ink">webshops</span> and{" "}
                <span className="font-semibold text-ink">mobile apps</span>,
                with years of experience working with WordPress, Joomla,
                PrestaShop, Magento and custom PHP solutions.
              </p>
              <p>
                We take an individual approach to every project — from the
                first conversation to long-term support after launch, because
                we consider your success our success too.
              </p>
            </div>

            <p className="mt-6 border-l-2 border-brand-green py-1 pl-4 text-base font-medium text-ink">
              Websites, webshops, mobile apps and custom-built CMS systems —
              all in one place, with one partner.
            </p>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-none border border-line bg-paper p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-green-dark">
                Web & digital solutions
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
                Support & growth
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
                // Services
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Our <span className="text-brand-green-dark">services</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-light/70">
                Complete IT solutions tailored to your business — from the
                first idea to long-term support.
              </p>
            </div>
            <Link
              href="/en/usluge"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-green-dark"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12">
            <ServicesShowcase services={services} locale="en" />
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
            Platforms and <span className="text-brand-green-dark">technologies</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-light/70">
            Tools we use for web, webshop, mobile apps and infrastructure —
            proven in practice and production-ready.
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
                // Our work
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Some of <span className="text-brand-green-dark">our projects</span>
              </h2>
            </div>
            <Link
              href="/en/portfolio"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-green-dark"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10">
            <WorkTabs projects={portfolioProjects} />
          </div>
        </Container>
      </section>

      <ContactSection locale="en" />
    </>
  );
}
