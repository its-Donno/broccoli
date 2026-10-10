import Link from "next/link";
import { Suspense } from "react";
import { CopyrightYear } from "@/components/ui/copyright-year";
import { Mark } from "@/components/ui/mark";
import { navigation, site, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-dark bg-night border-line-night border-t text-paper">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col items-start gap-5">
            <Link
              href="#home"
              className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-75"
            >
              <Mark className="size-[1.15rem] text-accent-bright" />
              <span className="text-[0.98rem] font-medium tracking-[-0.02em]">
                Arithmetic<span className="text-muted-night">al</span>Nepal
              </span>
            </Link>
            <p className="text-muted-night max-w-[38ch] text-[0.93rem] leading-relaxed">
              An independent software development team in Nepal, building digital products with
              precision, purpose, and a commitment to quality.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-start gap-4">
            <p className="font-mono text-muted-night text-[0.64rem] tracking-[0.2em] uppercase">
              Navigate
            </p>
            <ul className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex text-[0.93rem] text-paper/85 transition-colors duration-300 hover:text-paper"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="bg-accent-bright absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-400 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-4">
            <p className="font-mono text-muted-night text-[0.64rem] tracking-[0.2em] uppercase">
              Elsewhere
            </p>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 text-[0.93rem] text-paper/85 transition-colors duration-300 hover:text-paper"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="bg-accent-bright absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-400 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-100" />
                    </span>
                    <svg viewBox="0 0 12 12" aria-hidden="true" className="size-2.5 opacity-60">
                      <path
                        d="M4.5 2h5.5v5.5M10 2 4 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-line-night mt-14 flex flex-col gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-night text-[0.8rem]">
            &copy;{" "}
            <Suspense fallback={null}>
              <CopyrightYear />
            </Suspense>{" "}
            {site.name}. All rights reserved.
          </p>
          <p className="text-muted-night flex items-center gap-2.5 text-[0.8rem]">
            <span aria-hidden="true" className="bg-accent-bright inline-block size-1.5 rounded-full" />
            Made in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}