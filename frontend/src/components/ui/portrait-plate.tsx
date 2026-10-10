import { cn } from "@/lib/cn";

/**
 * Portrait placeholder built from the company mark. It is deliberately
 * typographic: initials set in the display serif inside the construction.
 * Drop a photograph in place of this plate when one exists.
 */
export function PortraitPlate({
  initials,
  name,
  className,
}: {
  initials: string;
  name: string;
  className?: string;
}) {
  const tick = "absolute size-3 border-accent/60 transition-colors duration-500";

  return (
    <div
      className={cn(
        "plate-grid group/plate bg-paper-raised border-line relative aspect-square overflow-hidden border",
        className,
      )}
    >
      <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="absolute inset-0 size-full">
        <path
          d="M200 74 320 306H80L200 74Z"
          stroke="currentColor"
          strokeOpacity="0.14"
          strokeWidth={1.25}
          strokeLinejoin="round"
        />
        <path
          d="M133 236h112"
          stroke="#1f45e0"
          strokeWidth={1.5}
          strokeLinecap="round"
          pathLength={1}
          className="draw"
          style={{ "--draw-delay": "500ms" } as React.CSSProperties}
        />
        <circle cx={245} cy={236} r={4} fill="#1f45e0" className="graphic-node-pop" style={{ animationDelay: "900ms" } as React.CSSProperties} />
        <circle cx={200} cy={200} r={128} stroke="currentColor" strokeOpacity="0.08" strokeWidth={1} strokeDasharray="1 7" />
      </svg>

      <span
        aria-hidden="true"
        className={cn(tick, "top-3 left-3 border-t border-l", "opacity-0 group-hover/plate:opacity-100")}
      />
      <span
        aria-hidden="true"
        className={cn(tick, "top-3 right-3 border-t border-r", "opacity-0 group-hover/plate:opacity-100")}
      />
      <span
        aria-hidden="true"
        className={cn(tick, "bottom-3 left-3 border-b border-l", "opacity-0 group-hover/plate:opacity-100")}
      />
      <span
        aria-hidden="true"
        className={cn(tick, "right-3 bottom-3 border-r border-b", "opacity-0 group-hover/plate:opacity-100")}
      />

      <span
        aria-hidden="true"
        className="font-serif absolute inset-0 flex items-center justify-center text-[clamp(3.5rem,9vw,5.5rem)] leading-none tracking-[-0.02em] text-ink/85 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover/plate:scale-[1.03]"
      >
        {initials}
      </span>

      <span className="sr-only">{name}</span>
    </div>
  );
}