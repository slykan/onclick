"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/lib/data";

export function WorkTabs({ projects }: { projects: PortfolioProject[] }) {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line">
        {projects.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setActive(i)}
            className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              i === active
                ? "border-brand-green text-ink"
                : "border-transparent text-ink-light/60 hover:text-ink"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand-green-dark">
            {project.category}
          </p>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold text-ink">{project.title}</h3>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-green-dark hover:text-ink"
              >
                {project.url.replace(/^https?:\/\//, "")}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
          <p className="mt-3 text-base leading-relaxed text-ink-light/70">
            {project.description}
          </p>
          <ul className="mt-5 space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-light">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-none border border-line bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs uppercase tracking-widest text-ink-light/40">
              Slika projekta uskoro
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
