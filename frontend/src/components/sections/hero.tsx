import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroGraphic } from "@/components/ui/hero-graphic";
import { site } from "@/lib/site";

const meta = ["Nepal", "Software engineering", "Product design"];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="bg-accent/8 pointer-events-none absolute -top-40 -right-32 -z-10 size-[38rem] rounded-full blur-[110px]"
      />

      <div className="shell grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
        <div className="flex flex-col items-start">
          <div className="rise" style={{ "--rise-delay": "40ms" } as React.CSSProperties}>
            <Eyebrow>Independent software development team</Eyebrow>
          </div>

          <h1 className="mt-7 text-[clamp(2.55rem,7.2vw,5rem)] leading-[0.98] font-medium tracking-[-0.035em] text-ink">
            <span className="line-mask">
              <span style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
                Thoughtful software.
              </span>
            </span>
            <span className="line-mask">
              <span style={{ "--rise-delay": "230ms" } as React.CSSProperties}>
                Built for what comes{" "}
                <em className="text-accent font-serif italic tracking-[-0.02em]">next.</em>
              </span>
            </span>
          </h1>

          <p
            className="rise mt-7 max-w-[46ch] text-[1.06rem] leading-[1.65] text-ink-soft"
            style={{ "--rise-delay": "360ms" } as React.CSSProperties}
          >
            {site.description}
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ "--rise-delay": "450ms" } as React.CSSProperties}
          >
            <ButtonLink href="#contact" variant="accent" size="lg">
              Start a Project
            </ButtonLink>
            <ButtonLink href="#work" variant="outline" size="lg">
              Explore Our Work
            </ButtonLink>
          </div>

          <div
            className="rise text-muted mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.7rem] tracking-[0.16em] uppercase"
            style={{ "--rise-delay": "560ms" } as React.CSSProperties}
          >
            {meta.map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                {i > 0 ? <span aria-hidden="true" className="bg-line-strong size-1 rounded-full" /> : null}
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="rise relative w-full max-w-[30rem] text-ink"
            style={{ "--rise-delay": "260ms" } as React.CSSProperties}
          >
            <HeroGraphic className="aspect-square w-full" />

            <p className="font-mono text-muted pointer-events-none absolute top-4 left-0 text-[0.65rem] tracking-[0.18em] uppercase sm:top-8 sm:left-2">
              Fig. 01
              <span className="mt-1 block">Inscribed construction</span>
            </p>
            <p className="font-mono text-muted pointer-events-none absolute right-0 bottom-4 text-[0.65rem] tracking-[0.18em] uppercase sm:right-2 sm:bottom-8">
              27.7172&deg; N
              <span className="mt-1 block">85.3240&deg; E</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}