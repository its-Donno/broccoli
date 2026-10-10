import { AboutGraphic } from "@/components/ui/about-graphic";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { principles } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="on-dark bg-night relative isolate overflow-hidden text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 -z-10 hidden opacity-70 md:block lg:right-[4%] lg:w-[34rem]"
      >
        <AboutGraphic className="h-auto w-full" />
      </div>

      <div className="shell relative py-[var(--spacing-section)]">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow index="03" tone="dark">
              About the team
            </Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-7 text-[clamp(2.1rem,5.2vw,3.6rem)] leading-[1.02] font-medium tracking-[-0.035em]">
              Small team.
              <br />
              Serious <em className="text-accent-bright font-serif italic tracking-[-0.02em]">engineering.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-8 max-w-[54ch] text-[1.05rem] leading-[1.7] text-muted-night">
              ArithmeticalNepal is a Nepal based software development team. We combine technical
              thinking with creative problem solving, and we care about the part of the work most
              teams skip: keeping a product dependable long after it ships.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-[1.7] text-muted-night">
              The team stays deliberately small so that the people who scope the work are the people
              who build it. Decisions are made close to the problem, feedback loops are short, and
              nothing is passed along and forgotten about.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <ButtonLink href="#contact" variant="inverse" className="mt-9">
              Work with us
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-px border-t border-line-night sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 70} className="border-line-night border-b">
              <div className="py-7">
                <p className="font-mono text-accent-bright text-[0.68rem] tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[1.1rem] font-medium tracking-[-0.02em] text-paper">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-muted-night">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}