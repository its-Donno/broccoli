import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroGraphic } from "@/components/ui/hero-graphic";
import { site, studentView } from "@/lib/site";

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
            <Eyebrow>School software, built in Nepal</Eyebrow>
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
            className="rise mt-12 flex flex-col gap-3 font-mono text-[0.7rem] tracking-[0.16em] uppercase"
            style={{ "--rise-delay": "560ms" } as React.CSSProperties}
          >
            <span className="text-muted">Students see</span>
            <span className="flex flex-wrap gap-x-6 gap-y-2">
              {studentView.map((item) => (
                <span key={item} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="bg-accent inline-block h-px w-3" />
                  {item}
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="rise w-full max-w-[30rem] text-ink"
            style={{ "--rise-delay": "260ms" } as React.CSSProperties}
          >
            <HeroGraphic className="aspect-square w-full" />

            <div className="text-muted mt-5 flex flex-col gap-1 font-mono text-[0.62rem] tracking-[0.18em] uppercase sm:flex-row sm:items-center sm:justify-between">
              <p>Fig. 01, inscribed construction</p>
              <p>27.7172&deg; N / 85.3240&deg; E</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}