import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FeatureItem } from "@/components/FeatureItem";
import { CTASection } from "@/components/CTASection";
import { whyUs } from "@/lib/data.en";

export const metadata: Metadata = {
  title: "About | On-Click",
  description:
    "On-Click is an IT company from Osijek with years of experience building websites, webshops and mobile apps.",
  alternates: {
    canonical: "https://www.on-click.hr/en/o-nama",
    languages: {
      hr: "https://www.on-click.hr/o-nama",
      en: "https://www.on-click.hr/en/o-nama",
    },
  },
};

export default function ONamaPageEn() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small team, a big focus on your success"
        description="We're an IT company that loves what it does. We take an individual approach to every project, with maximum care — your success is our success too."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-green-dark">
              Our story
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
              Hi, we're a team of web designers and developers from Osijek
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-light/70">
              <p>
                On-Click grew out of a simple wish — to build modern, clean
                websites and apps our clients are happy to show off. We
                approach every project with care and professionalism, aiming
                to showcase what matters most for each business or idea,
                using the latest web technologies and trends.
              </p>
              <p>
                Reliability and keeping deadlines are our trademark — proven
                by numerous projects and satisfied clients across Croatia.
                We do it all, from simple presentation sites to webshops,
                desktop and mobile apps, adapting to whichever system suits
                you and your business best.
              </p>
              <p>
                Hand us your idea, and you'll get the finished solution in
                your hands, turnkey, in a short timeframe. We don't leave you
                after launch either — small changes and regular maintenance
                are included, with no extra worries on your end.
              </p>
              <p className="border-l-2 border-brand-green py-1 pl-4 font-medium text-ink">
                Your success is our success too — that's the motto that's
                driven us for many years.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <FeatureItem key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection locale="en" />
    </>
  );
}
