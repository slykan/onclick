import { RotatingMesh } from "./RotatingMesh";
import {
  pyramidPoints,
  pyramidEdges,
  cubePoints,
  cubeEdges,
  meshPoints,
  meshEdges,
} from "@/lib/shapes3d";

const scatterDots: readonly (readonly [number, number])[] = [
  [70, 60], [180, 110], [340, 40], [470, 90], [610, 55], [1120, 90], [1010, 40],
  [60, 260], [230, 300], [380, 230], [520, 300], [660, 250], [1080, 230], [980, 300],
  [110, 420], [330, 470], [470, 430], [610, 470], [720, 420],
  [90, 610], [260, 640], [420, 600], [560, 650], [700, 610], [880, 640], [1030, 600], [1150, 560],
  [1140, 340], [1160, 470], [990, 500], [720, 120], [400, 130],
  [850, 210], [900, 380], [200, 400], [150, 200],
];

const scatterEdges: readonly (readonly [number, number])[] = [
  [0, 1], [1, 3], [3, 5], [7, 8], [8, 10], [10, 12],
  [14, 15], [15, 17], [19, 20], [20, 22], [22, 24], [24, 25], [25, 26],
  [4, 30], [30, 5], [9, 31], [27, 28], [28, 6], [32, 33], [33, 12], [34, 8],
];

export function NetworkBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="absolute right-[8%] top-[10%] h-72 w-72 rounded-full bg-brand-green/20 blur-3xl" />

      <svg
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <g stroke="var(--color-brand-green)" strokeWidth="0.75" opacity="0.2">
          {scatterEdges.map(([a, b], i) => (
            <line
              key={`sc-${i}`}
              x1={scatterDots[a][0]}
              y1={scatterDots[a][1]}
              x2={scatterDots[b][0]}
              y2={scatterDots[b][1]}
            />
          ))}
        </g>

        <g fill="var(--color-brand-green)">
          {scatterDots.map(([x, y], i) => (
            <circle key={`sd-${i}`} cx={x} cy={y} r={2} opacity="0.4" />
          ))}
        </g>
      </svg>

      {/* Rotating 3D wireframe shapes — only these spin, the flat network stays static */}
      <RotatingMesh
        points={pyramidPoints}
        edges={pyramidEdges}
        size={220}
        speed={0.35}
        className="left-[6%] top-[8%]"
      />
      <RotatingMesh
        points={cubePoints}
        edges={cubeEdges}
        size={240}
        speed={0.28}
        reverse
        className="right-[10%] top-[10%]"
      />
      <RotatingMesh
        points={meshPoints}
        edges={meshEdges}
        size={300}
        speed={0.22}
        className="right-[4%] top-[50%]"
      />
    </div>
  );
}
