"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { ServiceMockup } from "./ServiceMockup";
import type { Service } from "@/lib/data";
import { i18n, type Locale } from "@/lib/i18n";

export function ServicesShowcase({
  services,
  locale = "hr",
}: {
  services: Service[];
  locale?: Locale;
}) {
  const [active, setActive] = useState(0);
  const t = i18n[locale];
  const service = services[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line/70">
        {services.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setActive(i)}
            className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              i === active
                ? "border-brand-green text-ink"
                : "border-transparent text-ink-light/60 hover:text-ink"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="rounded-none border border-ink/10 bg-ink p-4 shadow-xl shadow-black/10">
            <div className="flex items-center gap-1.5 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <ServiceMockup slug={service.slug} />
          </div>
          <div className="absolute -bottom-6 -right-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-ink shadow-lg shadow-black/10">
            <Icon name={service.icon} className="h-7 w-7" />
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand-green-dark">
            {t.serviceLabel} {String(active + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-ink">{service.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-ink-light/70">
            {service.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.details.map((detail) => (
              <span
                key={detail}
                className="rounded-none border border-line bg-paper px-3 py-1.5 text-xs text-ink-light"
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
