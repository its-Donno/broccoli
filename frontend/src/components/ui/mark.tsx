type MarkProps = {
  className?: string;
  title?: string;
};

/**
 * ArithmeticalNepal mark: a precise triangle with a crossbar that terminates
 * in a node. Reads as an "A" and as a single connection in a graph.
 */
export function Mark({ className, title }: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M16 4.2 28.4 27.8H3.6L16 4.2Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M9.6 20.4h12.2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={21.8} cy={20.4} r={2.5} fill="currentColor" />
    </svg>
  );
}

/** Wordmark: text with a hairline division between the two words. */
export function Wordmark({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={className}>
      <Mark className={markClassName} />
      <span className="text-[0.98rem] font-medium tracking-[-0.02em]">
        Arithmetic<span className="text-muted">al</span>Nepal
      </span>
    </span>
  );
}