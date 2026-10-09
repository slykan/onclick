import Link from "next/link";
import {
  CalendarClock,
  CircleArrowUp,
  Info,
  Mail,
  Palette,
  PencilLine,
  ScanSearch,
  ShieldCheck,
  Zap,
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
              <p className={`mt-6 flex items-start gap-2 text-xs leading-relaxed ${
                dark ? "text-white/60" : "text-ink-light/60"
              }`}
              >
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {plan.note}
              </p>
            )}

            {(() => {
              const Deadline = plan.turnaround.kind === "priority" ? Zap : CalendarClock;
              return (
                <div
                  className={`mt-4 flex items-start gap-3 rounded-xl border p-4 ${
                    dark ? "border-brand-green/40 bg-brand-green/10" : "border-brand-green-dark/30 bg-muted"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      dark ? "bg-brand-green text-ink" : "bg-ink text-brand-green"
                    }`}
                  >
                    <Deadline className="h-4 w-4" />
                  </span>
                  <div>
                    <p className={`text-sm font-semibold ${dark ? "text-brand-green" : "text-ink"}`}>
                      {plan.turnaround.title}
                    </p>
                    <p className={`mt-0.5 text-xs leading-relaxed ${dark ? "text-white/75" : "text-ink-light/70"}`}>
                      {plan.turnaround.text}
                    </p>
                  </div>
                </div>
              );
            })()}

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
