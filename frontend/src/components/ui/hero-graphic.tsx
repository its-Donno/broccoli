"use client";

import { useCallback, useRef } from "react";

const CX = 300;
const CY = 300;
const R = 200;
const TICK_INNER = 268;
const RING_RADIUS = 252;

function point(angle: number, radius = R) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY - radius * Math.sin(rad) };
}

const NODES = [30, 90, 150, 210, 270, 330].map((angle) => ({ angle, ...point(angle) }));

const APEX = point(90);
const LEFT = point(210);
const RIGHT = point(330);

const CHORDS = NODES.map((node, index) => {
  const next = NODES[(index + 1) % NODES.length];
  return { x1: node.x, y1: node.y, x2: next.x, y2: next.y, key: `chord-${node.angle}` };
});

const TICKS = Array.from({ length: 60 }, (_, i) => {
  const major = i % 5 === 0;
  const from = point(i * 6, TICK_INNER);
  const to = point(i * 6, TICK_INNER + (major ? 16 : 8));
  return { key: `tick-${i}`, major, x1: from.x, y1: from.y, x2: to.x, y2: to.y };
});

/**
 * The hero diagram: an equilateral triangle inscribed in a circle, the hexagon
 * it generates, a measurement ring and a crosshair. It is the same geometry as
 * the ArithmeticalNepal mark, drawn at full resolution.
 */
export function HeroGraphic({ className }: { className?: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const node = frame.current;
    if (!node) return;
    if (event.pointerType !== "mouse") return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    if (raf.current !== null) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = null;
      node.style.setProperty("--px", x.toFixed(3));
      node.style.setProperty("--py", y.toFixed(3));
    });
  }, []);

  const reset = useCallback(() => {
    const node = frame.current;
    if (!node) return;
    node.style.setProperty("--px", "0");
    node.style.setProperty("--py", "0");
  }, []);

  return (
    <div
      ref={frame}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={className}
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 600" fill="none" className="h-full w-full">
        <defs>
          <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1f45e0" stopOpacity="0.1" />
            <stop offset="70%" stopColor="#1f45e0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hero-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1f45e0" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1f45e0" stopOpacity="0" />
          </radialGradient>
          <clipPath id="hero-clip">
            <circle cx={CX} cy={CY} r={RING_RADIUS} />
          </clipPath>
        </defs>

        <circle cx={CX} cy={CY} r={290} fill="url(#hero-glow)" />

        {/* Measurement ring and ticks drift less than the inner construction. */}
        <g className="graphic-layer graphic-layer-outer">
          <line
            x1={CX - 288}
            y1={CY}
            x2={CX + 288}
            y2={CY}
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth={1}
          />
          <line
            x1={CX}
            y1={CY - 288}
            x2={CX}
            y2={CY + 288}
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth={1}
          />

          <circle
            cx={CX}
            cy={CY}
            r={RING_RADIUS}
            stroke="currentColor"
            strokeOpacity="0.16"
            strokeWidth={1}
            strokeDasharray="1 7"
            className="graphic-fade"
            style={{ animationDelay: "1200ms" } as React.CSSProperties}
          />

          <g className="graphic-ticks">
            {TICKS.map((tick) => (
              <line
                key={tick.key}
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                stroke="currentColor"
                strokeOpacity={tick.major ? 0.34 : 0.16}
                strokeWidth={1}
              />
            ))}
          </g>
        </g>

        {/* Inner construction */}
        <g className="graphic-layer graphic-layer-inner">
          <circle cx={CX} cy={CY} r={R} stroke="currentColor" strokeOpacity="0.1" strokeWidth={1} />

          {CHORDS.map((chord, i) => (
            <line
              key={chord.key}
              x1={chord.x1}
              y1={chord.y1}
              x2={chord.x2}
              y2={chord.y2}
              stroke="currentColor"
              strokeOpacity="0.18"
              strokeWidth={1}
              className="draw"
              style={
                { "--len": `${R}`, "--draw-delay": `${620 + i * 90}ms` } as React.CSSProperties
              }
            />
          ))}

          <path
            d={`M${APEX.x} ${APEX.y}L${LEFT.x} ${LEFT.y}L${RIGHT.x} ${RIGHT.y}Z`}
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth={2}
            strokeLinejoin="round"
            className="draw"
            style={
              {
                "--len": `${(R * Math.sqrt(3)).toFixed(2)}`,
                "--draw-delay": "260ms",
              } as React.CSSProperties
            }
          />

          {/* Crossbar: the mark of the wordmark, ending in a node. */}
          <path
            d="M184.5 300H398"
            stroke="#1f45e0"
            strokeWidth={2}
            strokeLinecap="round"
            className="draw"
            style={{ "--len": "213.5", "--draw-delay": "780ms" } as React.CSSProperties}
          />
          <circle cx={398} cy={300} r={6} fill="#1f45e0" className="graphic-node-pop" />

          {NODES.map((node, i) => (
            <circle
              key={`node-${node.angle}`}
              cx={node.x}
              cy={node.y}
              r={4}
              fill={node.angle === 210 ? "#1f45e0" : "#f6f5f1"}
              stroke={node.angle === 210 ? "none" : "currentColor"}
              strokeOpacity={0.45}
              strokeWidth={1.5}
              className="graphic-node-pop"
              style={{ animationDelay: `${1000 + i * 70}ms` } as React.CSSProperties}
            />
          ))}

          {/* A signal moving along one edge of the hexagon. */}
          <circle r={3.5} fill="#1f45e0" className="signal">
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              path={`M${APEX.x} ${APEX.y}L${RIGHT.x} ${RIGHT.y}L${point(270).x} ${point(270).y}Z`}
            />
          </circle>

          <circle cx={CX} cy={CY} r={78} fill="url(#hero-core)" clipPath="url(#hero-clip)" />
        </g>
      </svg>
    </div>
  );
}