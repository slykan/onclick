"use client";

import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix = "+",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [value]);

  return (
    <div className="border-t-2 border-brand-green bg-paper px-6 py-5 shadow-sm shadow-black/[0.03]">
      <p className="font-mono text-3xl font-semibold text-ink">
        {display}
        <span className="text-brand-green">{suffix}</span>
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-light/60">
        {label}
      </p>
    </div>
  );
}
