/**
 * Single source of truth for company facts.
 * Nothing here is invented: no clients, awards, metrics or social profiles
 * that are not verified.
 */

export const site = {
  name: "ArithmeticalNepal",
  tagline: "Thoughtful software. Built for what comes next.",
  description:
    "ArithmeticalNepal is an independent software development team from Nepal building digital products with precision, purpose, and a commitment to quality.",
  location: "Nepal",
  url: "https://arithmeticalnepal.com",
} as const;

/** Verified presence only. Add handles here once they exist. */
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/its-Donno" },
] as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    id: "web",
    index: "01",
    title: "Web Development",
    summary:
      "Modern, responsive websites and web applications designed for usability, performance, and maintainability.",
    capabilities: ["Design systems", "Front end architecture", "Performance budgets"],
  },
  {
    id: "mobile",
    index: "02",
    title: "Mobile Applications",
    summary:
      "Mobile experiences built around real user needs, smooth interactions, and reliable functionality.",
    capabilities: ["Cross platform apps", "Offline behaviour", "Release pipelines"],
  },
  {
    id: "engineering",
    index: "03",
    title: "Software Engineering",
    summary:
      "Custom software, application architecture, integrations, and practical solutions to complex problems.",
    capabilities: ["Service architecture", "API design", "Third party integrations"],
  },
  {
    id: "design",
    index: "04",
    title: "UI and UX Design",
    summary:
      "Intuitive interfaces, thoughtful user journeys, and visual systems that make software easier to use.",
    capabilities: ["Interface design", "Prototyping", "Accessibility review"],
  },
  {
    id: "automation",
    index: "05",
    title: "Automation and Digital Solutions",
    summary:
      "Tools and workflows that reduce repetitive work and improve efficiency.",
    capabilities: ["Workflow automation", "Internal tooling", "Reporting"],
  },
  {
    id: "consulting",
    index: "06",
    title: "Technical Consulting",
    summary:
      "Practical guidance on technology choices, architecture, development strategy, and product direction.",
    capabilities: ["Architecture reviews", "Stack selection", "Delivery planning"],
  },
] as const;

export const founders = [
  {
    id: "sijan-bahadur-kunwar",
    index: "01",
    name: "Sijan Bahadur Kunwar",
    role: "Chief Executive Officer",
    initials: "SK",
    focus: "Company direction, strategy, product vision, and business development.",
    note: "Decides what we build and why, then makes sure the conditions to build it well exist.",
    /** Add real profile URLs here. Nothing is rendered until a link exists. */
    links: [] as ReadonlyArray<{ label: string; href: string }>,
  },
  {
    id: "abhinav-singh",
    index: "02",
    name: "Abhinav Singh",
    role: "Chief Technology Officer",
    initials: "AS",
    focus: "Technical direction, software architecture, engineering quality, and implementation.",
    note: "Owns how the system is built, from structure and tooling through to the last review before release.",
    /** Add real profile URLs here. Nothing is rendered until a link exists. */
    links: [] as ReadonlyArray<{ label: string; href: string }>,
  },
] as const;

export const principles = [
  {
    title: "Purposeful problem solving",
    body: "Understand the actual constraint before reaching for a solution. Most hard problems are not solved by adding more code.",
  },
  {
    title: "Clean, maintainable code",
    body: "Readable structure, honest naming, and fewer moving parts. Code is read far more often than it is written.",
  },
  {
    title: "Thoughtful user experiences",
    body: "Interfaces that respect attention. Fast responses, clear states, and nothing on screen that does not need to be there.",
  },
  {
    title: "Performance and reliability",
    body: "Speed is a feature. We measure it, budget for it, and treat unexpected failure as a design problem to solve.",
  },
  {
    title: "Continuous learning",
    body: "The craft changes quickly. Regular reading, small experiments, and sharing what did not work keep the work sharp.",
  },
  {
    title: "Long term thinking",
    body: "Decisions are checked against what they cost later. Shortcuts that only look cheap up front are the expensive ones.",
  },
] as const;