import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "accent" | "outline" | "inverse" | "quiet";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-[0.92rem] font-medium tracking-[-0.01em] transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-[var(--ease-standard)] active:scale-[0.98]";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-paper hover:bg-night hover:shadow-[0_10px_30px_-12px_rgba(16,17,19,0.6)]",
  accent:
    "bg-accent text-white hover:bg-accent-deep hover:shadow-[0_12px_34px_-14px_rgba(31,69,224,0.9)]",
  outline:
    "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-paper",
  inverse:
    "border border-line-night text-paper hover:border-paper hover:bg-paper hover:text-night",
  quiet: "text-ink hover:text-accent",
};

const sizes = {
  md: "h-11 px-6",
  lg: "h-13 px-7 text-[0.98rem]",
  sm: "h-9 px-4 text-[0.85rem]",
};

function Content({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="size-3.5 shrink-0 transition-transform duration-300 ease-[var(--ease-standard)] group-hover:translate-x-0.5"
      >
        <path
          d="M3 8h9.5M9 4.5 12.5 8 9 11.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function ButtonLink({
  children,
  href,
  variant = "solid",
  size = "md",
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <Content>{children}</Content>
    </Link>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
} & ComponentProps<"button">;

export function Button({
  children,
  variant = "solid",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <Content>{children}</Content>
    </button>
  );
}