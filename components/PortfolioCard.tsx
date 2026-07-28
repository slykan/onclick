import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/lib/data";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <a
      href={project.url}
      target={project.url ? "_blank" : undefined}
      rel={project.url ? "noopener noreferrer" : undefined}
      tabIndex={project.url ? 0 : -1}
      aria-disabled={!project.url}
      className={`group block overflow-hidden rounded-2xl border border-line bg-paper ${
        !project.url ? "pointer-events-none" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden bg-muted-dark">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-ink-light/30">
            <span className="text-xs uppercase tracking-widest">Slika uskoro</span>
          </div>
        )}
      </div>
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <h3 className="font-semibold text-ink">{project.title}</h3>
          <p className="text-sm text-ink-light/60">{project.category}</p>
        </div>
        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-ink-light/40 transition-colors group-hover:text-brand-green-dark" />
      </div>
    </a>
  );
}
