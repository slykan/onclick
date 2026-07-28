import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CTASection } from "@/components/CTASection";
import { portfolioProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Pregled projekata koje smo izradili — web stranice, webshopovi i aplikacije.",
  alternates: {
    canonical: "https://www.on-click.hr/portfolio",
    languages: {
      hr: "https://www.on-click.hr/portfolio",
      en: "https://www.on-click.hr/en/portfolio",
    },
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Neki od naših projekata"
        description="Izbor projekata na kojima smo radili. Portfolio dopunjujemo novim projektima kako ih završavamo."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </Container>
        <p className="mt-12 text-center text-2xl font-semibold text-brand-green-dark">
          ...i još mnogo više...
        </p>
      </section>

      <CTASection />
    </>
  );
}
