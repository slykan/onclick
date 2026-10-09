import Link from "next/link";
import {
  CircleArrowUp,
  Info,
  Mail,
  Palette,
  PencilLine,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { MaintenancePlan, MaintenanceIcon } from "@/lib/data";

const icons: Record<MaintenanceIcon, LucideIcon> = {
  content: PencilLine,
  design: Palette,
  cms: CircleArrowUp,
  mail: Mail,
  scan: ScanSearch,
  shield: ShieldCheck,
};

type Labels = {
  anchorPrice: string;
  cta: string;
  contactHref: string;
};

/** Maintenance packages on the price list (HR and EN pages share it). */
export function MaintenancePlans({ plans, labels }: { plans: MaintenancePlan[]; labels: Labels }) {
  return (
    <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
      {plans.map((plan) => {
        const dark = plan.highlighted;
        return (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-8 text-left ${
              dark ? "border-ink bg-ink text-white" : "border-line bg-paper text-ink"
            }`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className={`mt-2 text-3xl font-semibold ${dark ? "text-brand-green" : "text-ink"}`}>
              {plan.price}
              <span className={`ml-1.5 text-base font-medium ${dark ? "text-white/70" : "text-ink-light/70"}`}>
                / {plan.unit}
              </span>
            </p>
            <p className={`mt-1 text-xs ${dark ? "text-white/70" : "text-ink"}`}>
              {labels.anchorPrice}: {plan.price}
            </p>
            <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/70" : "text-ink-light/70"}`}>
              {plan.tagline}
            </p>

            <ul className="mt-6 flex-1 space-y-3.5">
              {plan.features.map((feature) => {
                const Icon = icons[feature.icon];
                return (
                  <li key={feature.text} className="flex items-start gap-3 text-sm">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        dark ? "bg-white/10 text-brand-green" : "bg-muted text-brand-green-dark"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="pt-1.5 leading-snug">
                      {feature.text}
                      {feature.detail && (
                        <span className={`ml-1.5 whitespace-nowrap text-xs font-semibold ${dark ? "text-brand-green" : "text-brand-green-dark"}`}>
                          · {feature.detail}
                        </span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>

            {plan.note && (
              <p className={`mt-6 flex items-start gap-2 border-t pt-4 text-xs leading-relaxed ${
                dark ? "border-white/15 text-white/70" : "border-line text-ink-light/70"
              }`}
              >
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {plan.note}
              </p>
            )}

            <Link
              href={labels.contactHref}
              className={`mt-6 inline-flex items-center justify-center rounded-none px-5 py-3 text-sm font-semibold transition-colors ${
                dark
                  ? "bg-brand-green text-ink hover:bg-brand-green-dark hover:text-white"
                  : "bg-ink text-white hover:bg-ink-light"
              }`}
            >
              {labels.cta}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
