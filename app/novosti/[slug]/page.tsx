import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { newsPosts } from "@/lib/data";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.on-click.hr/novosti/${slug}`,
      languages: {
        hr: `https://www.on-click.hr/novosti/${slug}`,
        en: `https://www.on-click.hr/en/novosti/${slug}`,
      },
    },
  };
}

export default async function NovostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-2xl">
        <Link
          href="/novosti"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-light hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Sve novosti
        </Link>

        <p className="mt-6 text-xs font-medium uppercase tracking-widest text-ink-light/50">
          {new Date(post.date).toLocaleDateString("hr-HR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-light/80">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
