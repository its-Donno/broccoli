import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, socialLinks } from "@/lib/site";

/**
 * Wireframe of a project entry. It shows exactly what a real card will carry,
 * so the placeholder can be swapped for content without guessing.
 */
function ProjectSpecimen() {
  return (
    <div
      aria-hidden="true"
      className="border-line bg-paper w-full border border-dashed p-5 sm:p-7"
    >
      <div className="border-line flex aspect-[16/9] items-center justify-center border border-dashed">
        <div className="text-muted flex flex-col items-center gap-3">
          <svg viewBox="0 0 32 32" fill="none" className="size-7 opacity-60">
            <rect x="3.5" y="5.5" width="25" height="21" rx="2" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="11" cy="12" r="1.6" fill="currentColor" />
            <path
              d="m6 22 6.5-6 4.5 4.5 3.5-3 5 4.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase">
            Project screenshot
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <span className="text-ink text-[1.15rem] font-medium tracking-[-0.02em]">Project name</span>
        <span className="font-mono text-muted text-[0.62rem] tracking-[0.18em] uppercase">
          Year
        </span>
      </div>
      <p className="text-muted mt-2 text-[0.92rem] leading-relaxed">
        One or two lines on the problem, the approach, and what shipped.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {["Stack", "Stack", "Stack"].map((tag) => (
          <span
            key={tag}
            className="border-line text-muted rounded-full border px-3 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase"
          >
            {tag}
          </span>
        ))}
        <span className="text-accent ml-1 inline-flex items-center gap-1.5 font-mono text-[0.62rem] tracking-[0.14em] uppercase">
          Repository
          <svg viewBox="0 0 12 12" className="size-2.5" fill="none" aria-hidden="true">
            <path
              d="M4.5 2h5.5v5.5M10 2 4 8"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="border-line border-t">
      <div className="shell py-[var(--spacing-section)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="05"
            eyebrow="Work"
            title="Built with purpose."
            lede="We would rather show one project we can explain properly than a wall of logos. This space is reserved for work we are happy to stand behind."
          />
          <Reveal delay={120} className="shrink-0">
            <ButtonLink href="#contact" variant="outline">
              Discuss a project
            </ButtonLink>
          </Reveal>
        </div>

        {projects.length > 0 ? (
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-20">
            {projects.map((project, i) => (
              <Reveal as="li" key={project.slug} delay={i * 90}>
                <article className="group border-line bg-paper-raised h-full border p-6">
                  <h3 className="text-[1.25rem] font-medium tracking-[-0.02em]">{project.title}</h3>
                  <p className="text-ink-soft mt-3 text-[0.95rem] leading-relaxed">{project.summary}</p>
                  <ul className="text-muted mt-5 flex flex-wrap gap-2 font-mono text-[0.65rem] tracking-[0.14em] uppercase">
                    {project.stack.map((item) => (
                      <li key={item} className="border-line rounded-full border px-3 py-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-accent mt-6 inline-flex items-center gap-2 text-[0.92rem]"
                    >
                      View project
                    </a>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <Reveal className="flex flex-col items-start gap-6">
              <p className="font-mono text-accent text-[0.68rem] tracking-[0.2em] uppercase">
                Nothing published yet
              </p>
              <p className="max-w-[42ch] text-[1.02rem] leading-relaxed text-ink-soft">
                We have not published case studies yet. The layout below is the entry format we
                will use: a screenshot, a short description of the problem, the stack, and a
                repository or live link where we are allowed to share one.
              </p>
              <p className="text-muted max-w-[42ch] text-[0.93rem] leading-relaxed">
                In the meantime, the code we ship in public is the clearest record of how we work.
              </p>
              <ButtonAnchor
                href={socialLinks[0].href}
                variant="outline"
                className="mt-1"
                external
              >
                Public repositories on GitHub
              </ButtonAnchor>
            </Reveal>

            <Reveal delay={120}>
              <ProjectSpecimen />
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}