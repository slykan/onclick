import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FeatureItem } from "@/components/FeatureItem";
import { CTASection } from "@/components/CTASection";
import { whyUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "On-Click je IT obrt iz Osijeka s dugogodišnjim iskustvom u izradi web stranica, webshopova i mobilnih aplikacija.",
  alternates: {
    canonical: "https://www.on-click.hr/o-nama",
    languages: {
      hr: "https://www.on-click.hr/o-nama",
      en: "https://www.on-click.hr/en/o-nama",
    },
  },
};

export default function ONamaPage() {
  return (
    <>
      <PageHero
        eyebrow="O nama"
        title="Mali tim, veliki fokus na vaš uspjeh"
        description="Mi smo IT obrt koji voli ono što radi. Svakom projektu pristupamo individualno i s maksimalnom pažnjom — vaš uspjeh je i naš uspjeh."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-green-dark">
              Naša priča
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
              Pozdrav, mi smo tim web dizajnera i programera iz Osijeka
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-light/70">
              <p>
                On-Click je nastao iz jednostavne želje — raditi moderne,
                pregledne web stranice i aplikacije kojima se naši klijenti
                rado pohvale drugima. Svakom projektu pristupamo s puno pažnje
                i profesionalnosti, trudeći se prikazati ono najvažnije za
                svaku tvrtku ili ideju, uz najnovije web tehnologije i
                trendove.
              </p>
              <p>
                Pouzdanost i poštovanje rokova naš su zaštitni znak — to
                potvrđuju brojni projekti i zadovoljni klijenti diljem
                Hrvatske. Radimo sve, od jednostavnih predstavljačkih
                stranica do webshopova, desktop i mobilnih aplikacija,
                prilagođavajući se sustavu koji najviše odgovara vama i
                vašem poslovanju.
              </p>
              <p>
                Prepustite nama svoju ideju, a rješenje ćete dobiti u svoje
                ruke po principu ključ u ruke, u kratkom roku. Ni nakon
                lansiranja vas ne ostavljamo — sitne izmjene i redovito
                održavanje uključeni su, bez dodatnih briga s vaše strane.
              </p>
              <p className="border-l-2 border-brand-green py-1 pl-4 font-medium text-ink">
                Vaš uspjeh je i naš uspjeh — to je moto koji nas pokreće već
                dugi niz godina.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {whyUs.map((item) => (
              <FeatureItem key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
