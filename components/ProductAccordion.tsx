"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Check, ExternalLink } from "lucide-react";
import type { Product } from "@/lib/data";
import { i18n, type Locale } from "@/lib/i18n";

export function ProductAccordion({
  products,
  locale = "hr",
}: {
  products: Product[];
  locale?: Locale;
}) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const t = i18n[locale];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const isOpen = openSlug === product.slug;
        return (
          <div key={product.slug} className="border border-line bg-paper">
            <div className="relative aspect-square w-full overflow-hidden border-b border-line">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-ink">{product.title}</h3>
              <p className="mt-1 font-mono text-sm text-brand-green-dark">
                {product.price}
              </p>

              <button
                type="button"
                onClick={() => setOpenSlug(isOpen ? null : product.slug)}
                aria-label={isOpen ? t.closeDescription : t.openDescription}
                className={`mt-4 flex h-9 w-9 items-center justify-center border border-line text-ink transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <Plus className="h-4 w-4" />
              </button>

              {isOpen && (
                <div className="mt-4 space-y-3 border-t border-line pt-4">
                  {product.description && (
                    <p className="text-sm leading-relaxed text-ink-light/70">
                      {product.description}
                    </p>
                  )}

                  {product.features && (
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-ink-light"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {product.note && (
                    <div className="space-y-1">
                      {product.note.map((line) => (
                        <p key={line} className="text-xs leading-relaxed text-ink-light/50">
                          {line}
                          {product.demoUrl && (
                            <>
                              {" "}
                              <a
                                href={product.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-medium text-brand-green-dark hover:text-ink"
                              >
                                {product.demoUrl.replace(/^https?:\/\//, "")}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </>
                          )}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
