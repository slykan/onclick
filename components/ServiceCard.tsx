import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import type { Service } from "@/lib/data";

export function ServiceCard({ service, href }: { service: Service; href: string }) {
  return (
    <div className="group rounded-2xl border border-line bg-paper p-6 transition-shadow hover:shadow-lg hover:shadow-black/5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brand-green">
        <Icon name={service.icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-light/70">
        {service.description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-green-dark transition-colors group-hover:text-ink"
      >
        Saznaj više
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
