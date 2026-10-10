import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  index,
  children,
  tone = "light",
  className,
}: {
  index?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.2em] uppercase",
        tone === "dark" ? "text-muted-night" : "text-muted",
        className,
      )}
    >
      <span aria-hidden="true" className="bg-accent inline-block h-px w-8" />
      {index ? <span className="text-accent">{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}