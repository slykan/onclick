import { Container } from "./Container";
import { RotatingMesh } from "./RotatingMesh";
import { pyramidPoints, pyramidEdges, cubePoints, cubeEdges } from "@/lib/shapes3d";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-muted">
      <RotatingMesh
        points={cubePoints}
        edges={cubeEdges}
        size={110}
        speed={0.3}
        className="right-[6%] top-[10%] hidden lg:block"
      />
      <RotatingMesh
        points={pyramidPoints}
        edges={pyramidEdges}
        size={90}
        speed={0.22}
        reverse
        className="right-[22%] bottom-[8%] hidden lg:block"
      />

      <Container className="relative py-16 sm:py-20">
        <span className="inline-flex items-center rounded-none border border-line bg-paper px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-light">
          // {eyebrow}
        </span>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-light/70">
          {description}
        </p>
      </Container>
    </section>
  );
}
