import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  tone = "light",
  className,
  children,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <Reveal>
        <Eyebrow index={index} tone={tone}>
          {eyebrow}
        </Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={cn(
            "max-w-[20ch] text-[clamp(2rem,4.6vw,3.35rem)] leading-[1.04] font-medium",
            tone === "dark" ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={140}>
          <p
            className={cn(
              "max-w-[52ch] text-[1.02rem] leading-relaxed",
              tone === "dark" ? "text-muted-night" : "text-ink-soft",
            )}
          >
            {lede}
          </p>
        </Reveal>
      ) : null}
      {children}
    </div>
  );
}