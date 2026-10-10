import { ButtonAnchor } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { socialLinks } from "@/lib/site";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export function Contact() {
  return (
    <section id="contact" className="on-dark bg-night relative isolate overflow-hidden text-paper">
      <div
        aria-hidden="true"
        className="bg-accent/12 pointer-events-none absolute -bottom-52 left-1/2 -z-10 size-[46rem] -translate-x-1/2 rounded-full blur-[130px]"
      />

      <div className="shell py-[var(--spacing-section)]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20">
          <div className="flex flex-col items-start">
            <Reveal>
              <Eyebrow index="06" tone="dark">
                Contact
              </Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-7 max-w-[16ch] text-[clamp(2.1rem,5.2vw,3.6rem)] leading-[1.02] font-medium tracking-[-0.035em]">
                Have an idea worth building?
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-7 max-w-[44ch] text-[1.05rem] leading-[1.7] text-muted-night">
                Tell us what you are working on. We would love to explore how we can help turn your
                idea into something real.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-9 flex flex-wrap items-center gap-3">
              {CONTACT_EMAIL ? (
                <ButtonAnchor href={`mailto:${CONTACT_EMAIL}`} variant="accent">
                  Email us directly
                </ButtonAnchor>
              ) : null}
              <ButtonAnchor href={socialLinks[0].href} variant="inverse" external>
                Find us on GitHub
              </ButtonAnchor>
            </Reveal>

            <Reveal delay={260} className="mt-12 w-full">
              <dl className="border-line-night grid gap-px border-t text-[0.92rem] sm:grid-cols-2">
                <div className="border-line-night border-b py-4 sm:border-r sm:pr-6">
                  <dt className="font-mono text-muted-night text-[0.64rem] tracking-[0.2em] uppercase">
                    Based in
                  </dt>
                  <dd className="mt-2 text-paper">Kathmandu, Nepal</dd>
                </div>
                <div className="border-line-night border-b py-4 sm:pl-6">
                  <dt className="font-mono text-muted-night text-[0.64rem] tracking-[0.2em] uppercase">
                    Time zone
                  </dt>
                  <dd className="mt-2 text-paper">UTC+05:45, Nepal time</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={120} className="border-line-night bg-night-raised self-start border p-6 sm:p-9">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}