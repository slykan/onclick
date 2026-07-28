import { TechIcon } from "./TechIcon";
import type { TechStackGroup } from "@/lib/data";

export function TechStackGrid({ groups }: { groups: TechStackGroup[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title} className="rounded-none border border-line bg-paper">
          <div className="h-1 w-10 bg-brand-green" />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-ink-light/50">
              {group.subtitle}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-muted px-3 py-1.5 text-xs font-medium text-ink-light"
                >
                  <TechIcon name={item} className="h-3.5 w-3.5" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
