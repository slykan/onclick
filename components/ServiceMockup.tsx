function CodeLines() {
  return (
    <div className="space-y-2.5">
      <div className="h-2.5 w-1/3 rounded-full bg-brand-green/60" />
      <div className="h-2.5 w-2/3 rounded-full bg-white/15" />
      <div className="h-2.5 w-1/2 rounded-full bg-brand-gold/60" />
      <div className="h-2.5 w-3/4 rounded-full bg-white/15" />
      <div className="h-2.5 w-1/4 rounded-full bg-white/15" />
      <div className="h-2.5 w-2/3 rounded-full bg-brand-green/60" />
      <div className="h-2.5 w-1/2 rounded-full bg-white/15" />
    </div>
  );
}

function ShopGrid() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-none border border-white/10 p-2.5">
            <div className="h-10 w-full rounded-none bg-white/10" />
            <div className="mt-2 h-2 w-3/4 rounded-full bg-white/15" />
            <div className="mt-1.5 h-2 w-1/2 rounded-full bg-brand-gold/60" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-none border border-white/10 px-3 py-2">
        <div className="h-2 w-1/3 rounded-full bg-white/15" />
        <div className="h-2 w-10 rounded-full bg-brand-green/70" />
      </div>
    </div>
  );
}

function TerminalLines() {
  const lines = [
    { text: "update system...", status: "OK" },
    { text: "backup baze podataka...", status: "OK" },
    { text: "scan malware...", status: "CLEAN" },
    { text: "provjera SSL certifikata...", status: "OK" },
  ];
  return (
    <div className="space-y-2.5 font-mono text-[11px]">
      {lines.map((line) => (
        <div key={line.text} className="flex items-center gap-2">
          <span className="text-brand-green">$</span>
          <span className="flex-1 text-white/50">{line.text}</span>
          <span className="text-brand-green">{line.status}</span>
        </div>
      ))}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-24 rounded-none border border-white/15 p-2">
        <div className="h-1.5 w-8 rounded-full bg-white/20" />
        <div className="mt-3 space-y-2">
          <div className="h-8 w-full rounded-none bg-white/10" />
          <div className="h-2 w-full rounded-full bg-white/15" />
          <div className="h-2 w-2/3 rounded-full bg-white/15" />
        </div>
        <div className="mt-3 h-6 w-full rounded-none bg-brand-green/70" />
      </div>
    </div>
  );
}

function ServerRack() {
  return (
    <div className="space-y-2.5">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-none border border-white/10 px-3 py-2.5"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-brand-green" />
          <div className="h-2 flex-1 rounded-full bg-white/15" />
          <span className="font-mono text-[10px] text-white/30">
            {i === 0 ? "VPS-01" : i === 1 ? "VPS-02" : i === 2 ? "DB" : "CDN"}
          </span>
        </div>
      ))}
    </div>
  );
}

function GrowthChart() {
  const bars = [30, 45, 40, 60, 75, 95];
  return (
    <div className="flex h-32 items-end gap-2.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-none ${
            i === bars.length - 1 ? "bg-brand-green" : "bg-white/15"
          }`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export function ServiceMockup({ slug }: { slug: string }) {
  switch (slug) {
    case "webshop":
      return <ShopGrid />;
    case "odrzavanje":
      return <TerminalLines />;
    case "mobilne-aplikacije":
      return <PhoneMockup />;
    case "hosting":
      return <ServerRack />;
    case "seo":
      return <GrowthChart />;
    default:
      return <CodeLines />;
  }
}
