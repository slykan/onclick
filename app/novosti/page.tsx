import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { newsPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Novosti",
  description: "Novosti, savjeti i korisne informacije iz svijeta web razvoja i IT-a.",
  alternates: {
    canonical: "https://www.on-click.hr/novosti",
    languages: {
      hr: "https://www.on-click.hr/novosti",
      en: "https://www.on-click.hr/en/novosti",
    },
  },
};

export default function NovostiPage() {
  return (
    <>
      <PageHero
        eyebrow="Novosti"
        title="Novosti i korisni savjeti"
        description="Povremeno dijelimo korisne informacije iz svijeta web razvoja, webshopova i IT podrške."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {newsPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/novosti/${post.slug}`}
              className="group rounded-2xl border border-line bg-paper p-6 transition-shadow hover:shadow-lg hover:shadow-black/5"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-ink-light/50">
                {new Date(post.date).toLocaleDateString("hr-HR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-ink">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-light/70">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-green-dark group-hover:text-ink">
                Pročitaj više
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
