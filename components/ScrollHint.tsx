"use client";

import { ChevronDown } from "lucide-react";

export function ScrollHint({ targetId }: { targetId: string }) {
  return (
    <button
      type="button"
      onClick={() =>
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
      }
      aria-label="Idi na sljedeću sekciju"
      className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-light/40 transition-colors hover:text-ink-light"
    >
      Scroll
      <ChevronDown className="h-4 w-4 animate-bounce" />
    </button>
  );
}
