import { PortraitPlate } from "@/components/ui/portrait-plate";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { founders } from "@/lib/site";

export function Team() {
  return (
    <section id="team" className="border-line border-t">
      <div className="shell py-[var(--spacing-section)]">
        <SectionHeading
          index="04"
          eyebrow="The team"
          title={
            <>
              Two people, <em className="text-accent font-serif italic">accountable</em> for the work.
            </>
          }
          lede="ArithmeticalNepal is led by two founders. One sets the direction, the other makes sure the engineering can carry it."
        />

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:gap-x-16">
          {founders.map((founder, i) => (
            <Reveal key={founder.id} delay={i * 110} as="article" className="group/founder flex flex-col">
              <PortraitPlate initials={founder.initials} />

              <div className="mt-7 flex items-baseline gap-4">
                <p className="font-mono text-accent text-[0.68rem] tracking-[0.2em]">
                  {founder.index}
                </p>
                <h3 className="text-[1.5rem] leading-tight font-medium tracking-[-0.025em]">
                  {founder.name}
                </h3>
              </div>

              <p className="text-muted mt-1.5 font-mono text-[0.7rem] tracking-[0.16em] uppercase sm:pl-[2.1rem]">
                {founder.role}
              </p>

              <div className="rule mt-6" />

              <p className="mt-6 max-w-[42ch] text-[1rem] leading-relaxed text-ink-soft">
                {founder.focus}
              </p>
              <p className="text-muted mt-3 max-w-[42ch] text-[0.93rem] leading-relaxed">
                {founder.note}
              </p>

              {founder.links.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {founder.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link text-ink inline-flex items-center gap-2 text-[0.9rem] transition-colors duration-300 hover:text-accent"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="bg-accent absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-400 ease-[var(--ease-out-expo)] group-hover/link:origin-left group-hover/link:scale-x-100" />
                        </span>
                        <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3">
                          <path
                            d="M4.5 2h5.5v5.5M10 2 4 8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}