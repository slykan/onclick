import { Icon } from "./Icon";
import type { WhyUsItem } from "@/lib/data";

export function FeatureItem({ item }: { item: WhyUsItem }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold-light text-brand-green-dark">
        <Icon name={item.icon} className="h-4 w-4" />
      </div>
      <div>
        <h3 className="font-semibold text-ink">{item.title}</h3>
        <p className="mt-0.5 text-sm leading-relaxed text-ink-light/70">
          {item.description}
        </p>
      </div>
    </div>
  );
}
