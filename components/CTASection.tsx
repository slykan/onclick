import Link from "next/link";
import { Send } from "lucide-react";
import { i18n, type Locale } from "@/lib/i18n";

export function CTASection({
  title,
  description,
  locale = "hr",
}: {
  title?: string;
  description?: string;
  locale?: Locale;
}) {
  const t = i18n[locale];
  const href = locale === "en" ? "/en/kontakt" : "/kontakt";

  return (
    <section className="bg-ink">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green text-ink">
            <Send className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {title ?? t.ctaDefaultTitle}
            </h3>
            <p className="mt-1 text-sm text-white/60">
              {description ?? t.ctaDefaultDescription}
            </p>
          </div>
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-2 rounded-none bg-brand-green px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-green-dark hover:text-white"
        >
          {t.requestQuote}
        </Link>
      </div>
    </section>
  );
}
