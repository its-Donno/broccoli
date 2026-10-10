# ArithmeticalNepal website

Frontend for [ArithmeticalNepal](https://github.com/its-Donno/broccoli), an
independent software development team in Nepal building software for schools:
homework, classwork, attendance, results, and announcements in one place for
students.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 and TypeScript
- Tailwind CSS v4 with design tokens defined in `src/app/globals.css`
- Fonts self hosted at build time through `next/font`: Inter, Instrument Serif,
  JetBrains Mono

No other runtime dependencies. No backend, no database, no API calls.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # eslint
npm run build   # production build
```

Type checking runs inside `npm run build`. To run it alone:

```bash
npx tsc --noEmit
```

## Layout

```
src/
  app/
    layout.tsx          fonts, metadata, skip link
    page.tsx            section order
    globals.css         design tokens, motion primitives, reduced motion
    opengraph-image.tsx social card, generated at build time
    robots.ts           robots.txt
    sitemap.ts          sitemap.xml
  components/
    sections/           one file per section
    site/               header and footer
    ui/                 buttons, reveal, headings, SVG graphics
  lib/
    fonts.ts            font loading
    site.ts             all copy and content, single source of truth
    cn.ts               class name helper
```

## Editing content

Almost every string lives in `src/lib/site.ts`. Nothing in the page invents
facts: no clients, awards, statistics or testimonials are listed.

| What                | Where                                  |
| ------------------- | -------------------------------------- |
| Company description | `site.description`                     |
| Navigation          | `navigation`                           |
| Services            | `services`                             |
| Founders            | `founders`                             |
| Principles          | `principles`                           |
| Student facing list | `studentView`                          |
| Social links        | `socialLinks`                          |
| Published projects  | `projects`                             |

### Adding a project

Fill in the `projects` array in `src/lib/site.ts`. While it is empty the work
section shows a labelled empty state; as soon as it has an entry it renders real
cards instead. Nothing else needs to change.

### Founder photographs and profile links

`PortraitPlate` is a typographic placeholder. To use a real photograph, replace
the component body with a `next/image` element and keep the `aspect-square`
frame so the grid does not move.

Each founder has a `links` array. It renders nothing until a real URL is added,
so no placeholder profile links are ever shown.

## Contact form

The form validates in the browser and then says plainly that nothing was sent,
because there is no backend. To make it useful, either:

- set `NEXT_PUBLIC_CONTACT_EMAIL` to a real inbox, and the confirmation step
  hands the message to the visitor's mail app, or
- point the submit handler at your own endpoint when one exists.

Remove the preview note in `src/components/sections/contact-form.tsx` once a
real delivery path is in place.

## Environment variables

Both are optional and read at build time.

| Variable                   | Purpose                                     |
| -------------------------- | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | Canonical URL for metadata and the sitemap   |
| `NEXT_PUBLIC_CONTACT_EMAIL`| Enables the mail hand off in the contact form |

## Design notes

- Palette and spacing tokens live in `@theme` inside `src/app/globals.css`.
  Change them there, not in the components.
- Motion is CSS only. `.reveal` fades content up once, driven by an
  IntersectionObserver in `components/ui/reveal.tsx`.
- `prefers-reduced-motion: reduce` disables every entrance, draw in and
  parallax, and a `noscript` block keeps content visible without JavaScript.
- Contrast meets WCAG AA on both the paper and charcoal surfaces.

## Deployment

Any host that runs Next.js works. `npm run build` emits a fully static site, with
the social card, robots and sitemap generated at build time.