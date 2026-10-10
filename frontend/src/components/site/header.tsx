"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { navigation, site } from "@/lib/site";
import { Mark } from "@/components/ui/mark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [progress, setProgress] = useState(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Border, blur and shadow appear only once the page moves. */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(y / height, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently under the header. */
  useEffect(() => {
    const ids = navigation.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Menu behaviour: lock the page, close on Escape, return focus. */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => panelRef.current?.focus(), 60);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open]);

  const go = useCallback((event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    setOpen(false);
    window.history.replaceState(null, "", href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-[var(--ease-standard)]",
        scrolled || open
          ? "border-line bg-paper/85 border-b backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 lg:h-[4.75rem]">
        <a
          href="#home"
          onClick={(event) => go(event, "#home")}
          className="text-ink flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-70"
        >
          <Mark className="size-[1.15rem] text-accent" title={`${site.name} mark`} />
          <span className="text-[0.98rem] font-medium tracking-[-0.02em]">
            Arithmetic<span className="text-muted">al</span>Nepal
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              onClick={(event) => go(event, item.href)}
              className={cn(
                "relative px-3.5 py-2 text-[0.9rem] transition-colors duration-300",
                active === item.href ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={cn(
                  "bg-accent absolute bottom-0.5 left-3.5 h-px origin-left transition-transform duration-500 ease-[var(--ease-out-expo)]",
                  active === item.href ? "w-[calc(100%-1.75rem)] scale-x-100" : "w-0 scale-x-0",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(event) => go(event, "#contact")}
            className="group text-ink hover:bg-ink hover:text-paper hidden h-10 items-center gap-2 rounded-full border border-line-strong px-5 text-[0.88rem] font-medium transition-all duration-300 ease-[var(--ease-standard)] active:scale-[0.98] sm:inline-flex"
          >
            Start a Project
            <span
              aria-hidden="true"
              className="bg-accent inline-block size-1.5 rounded-full transition-transform duration-300 group-hover:scale-125"
            />
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="border-line text-ink hover:border-ink inline-flex size-10 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden"
          >
            <span className="relative block h-3 w-4.5">
              <span
                className={cn(
                  "bg-current absolute left-0 block h-px w-full transition-all duration-400 ease-[var(--ease-standard)]",
                  open ? "top-1.5 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "bg-current absolute left-0 block h-px w-full transition-all duration-400 ease-[var(--ease-standard)]",
                  open ? "top-1.5 -rotate-45" : "top-2.5",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Reading progress, one hairline above the edge of the header. */}
      <div
        aria-hidden="true"
        className={cn(
          "bg-accent absolute inset-x-0 bottom-0 h-px origin-left transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0",
        )}
        style={{ transform: `scaleX(${progress})` }}
      />

      <div
        id="mobile-menu"
        ref={panelRef}
        tabIndex={-1}
        hidden={!open}
        className="border-line bg-paper fixed inset-x-0 top-16 bottom-0 z-40 border-t outline-none lg:hidden"
      >
        <nav
          aria-label="Mobile"
          className="shell flex h-full flex-col justify-between gap-8 pt-10 pb-10"
        >
          <ul className="flex flex-col">
            {navigation.map((item, i) => (
              <li key={item.href} className="border-line border-b">
                <a
                  href={item.href}
                  onClick={(event) => go(event, item.href)}
                  className="group flex items-baseline gap-4 py-5"
                  style={{
                    animation: open
                      ? `rise-in 0.6s var(--ease-out-expo) ${i * 55}ms both`
                      : undefined,
                  }}
                >
                  <span className="font-mono text-[0.68rem] tracking-[0.2em] text-accent">
                    0{i + 1}
                  </span>
                  <span className="text-[1.75rem] leading-none font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-accent">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <a
              href="#contact"
              onClick={(event) => go(event, "#contact")}
              className="text-paper hover:bg-night flex h-12 items-center justify-center rounded-full bg-ink text-[0.95rem] font-medium transition-colors duration-300"
            >
              Start a Project
            </a>
            <p className="text-muted text-center text-[0.82rem]">
              Independent software development team, based in Nepal.
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}