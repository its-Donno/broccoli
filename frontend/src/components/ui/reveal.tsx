"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Read once on the client so no observer hooks are needed in the fallback. */
const OBSERVER_SUPPORTED = typeof IntersectionObserver !== "undefined";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger, in milliseconds. */
  delay?: number;
  as?: ElementType;
  id?: string;
};

/**
 * Fades content up the first time it enters the viewport.
 * One observer per element, disconnected after the first pass so scrolling
 * back and forth never replays the animation.
 */
export function Reveal({ children, className, delay = 0, as, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !OBSERVER_SUPPORTED) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      data-state={visible ? "visible" : "hidden"}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(
        "reveal",
        !OBSERVER_SUPPORTED && "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </Tag>
  );
}