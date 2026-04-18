import { AppWindow, Blocks, Rocket, Sparkles } from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Product Engineering",
    description:
      "End-to-end web and mobile product delivery, from architecture to production support.",
    icon: Rocket,
  },
  {
    title: "Custom App Development",
    description:
      "High-performance applications tailored to your workflows, customers, and growth roadmap.",
    icon: AppWindow,
  },
  {
    title: "Platform Modernization",
    description:
      "Incremental modernization for legacy stacks with measurable UX and engineering velocity gains.",
    icon: Blocks,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    body: "We align on business goals, user needs, and technical constraints to shape a practical roadmap.",
  },
  {
    number: "02",
    title: "Design + Validate",
    body: "Interactive prototypes and technical spikes de-risk the build before full implementation begins.",
  },
  {
    number: "03",
    title: "Build + Launch",
    body: "We ship in short, observable cycles with quality gates, performance checks, and release confidence.",
  },
  {
    number: "04",
    title: "Scale",
    body: "Post-launch optimization, analytics-led iteration, and platform hardening keep momentum high.",
  },
];

export const caseStudies = [
  {
    title: "FinFlow Mobile",
    client: "Fintech Startup",
    impact: "47% increase in weekly active users after redesign and rebuild.",
    tags: ["React Native", "Node.js", "AWS"],
  },
  {
    title: "OpsVision Dashboard",
    client: "B2B SaaS",
    impact: "Reduced report generation time from minutes to seconds.",
    tags: ["Next.js", "Data Viz", "PostgreSQL"],
  },
  {
    title: "CarePulse Platform",
    client: "HealthTech",
    impact: "Launched MVP in 9 weeks with enterprise-ready architecture.",
    tags: ["Web App", "Security", "CI/CD"],
  },
  {
    title: "RetailSync Suite",
    client: "Commerce",
    impact: "Unified multichannel operations and improved conversion by 21%.",
    tags: ["Microservices", "Eventing", "Monitoring"],
  },
];

export const contactHighlights = [
  "Response within 1 business day",
  "NDA-friendly process",
  "Flexible engagement models",
];

export const heroContent = {
  badge: "Software + App Development Studio",
  title: "We Build Reliable Digital Products That Scale",
  subtitle:
    "EasyRabbitSolutions partners with startups and teams to design, engineer, and launch modern products with speed and precision.",
  ctaPrimary: "Book a Discovery Call",
  ctaSecondary: "View Case Studies",
  trust: "Trusted by growing startups and product-led teams.",
  accentIcon: Sparkles,
};
