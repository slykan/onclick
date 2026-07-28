import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CTASection } from "@/components/CTASection";
import { portfolioProjects } from "@/lib/data.en";

export const metadata: Metadata = {
  title: "Portfolio | On-Click",
  description: "An overview of the projects we've built — websites, webshops and apps.",
  alternates: {
    canonical: "https://www.on-click.hr/en/portfolio",
    languages: {
      hr: "https://www.on-click.hr/portfolio",
      en: "https://www.on-click.hr/en/portfolio",
    },
  },
};

export default function PortfolioPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Some of our projects"
        description="A selection of projects we've worked on. We keep adding new projects to the portfolio as we complete them."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </Container>
        <p className="mt-12 text-center text-2xl font-semibold text-brand-green-dark">
          ...and much more...
        </p>
      </section>

      <CTASection locale="en" />
    </>
  );
}
