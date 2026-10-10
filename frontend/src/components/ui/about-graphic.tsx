const CENTER = 250;

const RINGS = [
  { r: 190, opacity: 0.16, delay: 120 },
  { r: 142, opacity: 0.14, delay: 240 },
  { r: 95, opacity: 0.12, delay: 360 },
  { r: 48, opacity: 0.1, delay: 480 },
];

const OUTER_R = RINGS[0].r;

const triangles = RINGS.map(({ r, opacity, delay }) => ({
  key: `tri-${r}`,
  delay,
  opacity,
  d: `M${CENTER} ${CENTER - r}L${CENTER - r * 0.866} ${CENTER + r / 2}L${CENTER + r * 0.866} ${CENTER + r / 2}Z`,
  apexY: CENTER - r,
}));

/**
 * Nested triangles inside a circle, drawn the way a compass construction is:
 * same centre, shrinking radius. Used as a quiet background for the about
 * section.
 */
export function AboutGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <circle
        cx={CENTER}
        cy={CENTER}
        r={RINGS[0].r}
        stroke="#ffffff"
        strokeOpacity="0.12"
        strokeWidth={1}
        strokeDasharray="2 8"
        className="graphic-fade"
        style={{ animationDelay: "80ms" } as React.CSSProperties}
      />

      {triangles.map((triangle) => (
        <g key={triangle.key}>
          <path
            d={triangle.d}
            stroke="#ffffff"
            strokeOpacity={triangle.opacity}
            strokeWidth={1}
            pathLength={1}
            className="draw"
            style={{ "--draw-delay": `${triangle.delay}ms` } as React.CSSProperties}
          />
          <circle
            cx={CENTER}
            cy={triangle.apexY}
            r={2.2}
            fill="#ffffff"
            fillOpacity="0.22"
            className="graphic-node-pop"
            style={{ animationDelay: `${triangle.delay + 420}ms` } as React.CSSProperties}
          />
        </g>
      ))}

      <circle
        cx={CENTER}
        cy={CENTER - OUTER_R}
        r={4.5}
        fill="#4a6bff"
        className="graphic-node-pop"
        style={{ animationDelay: "620ms" } as React.CSSProperties}
      />

      <line
        x1={CENTER}
        y1={CENTER - RINGS[0].r}
        x2={CENTER}
        y2={CENTER + RINGS[0].r / 2}
        stroke="#4a6bff"
        strokeOpacity="0.5"
        strokeWidth={1.5}
        pathLength={1}
        className="draw"
        style={{ "--draw-delay": "560ms" } as React.CSSProperties}
      />
    </svg>
  );
}