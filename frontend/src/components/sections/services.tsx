import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="border-line border-t">
      <div className="shell grid gap-12 py-[var(--spacing-section)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            index="02"
            eyebrow="Capabilities"
            title={
              <>
                What we <em className="text-accent font-serif italic">build</em>
              </>
            }
            lede="These are the areas we work in. Much of our work sits inside schools: student apps, teacher workflows, and the systems that connect them."
          />
        </div>

        <ul className="flex flex-col">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 60} className="border-line border-t">
              <article className="group relative grid gap-3 py-7 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-6 sm:py-8">
                <span
                  aria-hidden="true"
                  className="bg-accent absolute top-7 bottom-7 left-0 w-px origin-top scale-y-0 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100 sm:top-8 sm:bottom-8"
                />

                <p className="font-mono text-muted pl-4 text-[0.7rem] tracking-[0.18em] transition-colors duration-300 group-hover:text-accent sm:pl-5">
                  {service.index}
                </p>

                <div className="flex flex-col gap-3 sm:pl-2">
                  <h3 className="flex items-center gap-3 text-[1.45rem] leading-tight font-medium tracking-[-0.025em] sm:text-[1.6rem]">
                    <span className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
                      {service.title}
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="text-accent hidden size-4 opacity-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0 group-hover:opacity-100 sm:block"
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
                  </h3>

                  <p className="max-w-[54ch] text-[0.98rem] leading-relaxed text-ink-soft">
                    {service.summary}
                  </p>

                  <ul className="text-muted mt-2 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.68rem] tracking-[0.14em] uppercase">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex items-center gap-5">
                        <span aria-hidden="true" className="bg-line-strong inline-block h-px w-3" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
          <li aria-hidden="true" className="border-line border-t" />
        </ul>
      </div>
    </section>
  );
}