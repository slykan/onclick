export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-green-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-light/70">
          {description}
        </p>
      )}
      {!description && (
        <div
          className={`mt-4 h-1 w-12 rounded-full bg-brand-gold ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      )}
    </div>
  );
}
