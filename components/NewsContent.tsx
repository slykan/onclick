import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { NewsPost } from "@/lib/data";

/** Sadržaj članka: odlomci (string) i blokovi (podnaslov, popis, napomena, poveznice, CTA). */
export function NewsContent({ content }: { content: NewsPost["content"] }) {
  return (
    <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-light/80">
      {content.map((block, i) => {
        if (typeof block === "string") return <p key={i}>{block}</p>;
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="pt-4 text-xl font-semibold tracking-tight text-ink">
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-1.5 pl-5 marker:text-brand-green">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "note":
            return (
              <p key={i} className="border-l-4 border-brand-green bg-brand-green/10 px-4 py-3 text-ink">
                {block.text}
              </p>
            );
          case "links":
            return (
              <ul key={i} className="divide-y divide-line border border-line">
                {block.items.map((item, j) => (
                  <li key={j} className="px-4 py-3">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-start gap-1.5 font-medium text-ink underline decoration-brand-green underline-offset-4 hover:text-brand-green-dark"
                    >
                      {item.label}
                      <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" />
                    </a>
                    {item.note && <span className="mt-0.5 block text-sm text-ink-light/70">{item.note}</span>}
                  </li>
                ))}
              </ul>
            );
          case "cta":
            return (
              <div key={i} className="mt-8 border border-line bg-paper p-6">
                <p className="text-ink">{block.text}</p>
                <Link
                  href={block.href}
                  className="mt-4 inline-flex items-center gap-2 bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
                >
                  {block.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
        }
      })}
    </div>
  );
}
