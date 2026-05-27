import Image from "next/image";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const stats = [
  { value: "8+", label: "Projects explored and shipped" },
  { value: "2", label: "Internships completed" },
  { value: "14+", label: "Tools and technologies used" },
  { value: "100%", label: "Focus on product polish" }
];

const proofPoints = [
  {
    title: "Better first impression",
    text: "I like interfaces that immediately feel premium, clear, and trustworthy instead of generic."
  },
  {
    title: "Motion with purpose",
    text: "Animations should guide attention, create depth, and support storytelling without making the UI feel noisy."
  },
  {
    title: "Practical full-stack thinking",
    text: "From frontend structure to backend flows, I aim for projects that look sharp and work reliably."
  }
];

const capabilityGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive UI", "Animation"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication", "MongoDB"]
  },
  {
    title: "Delivery",
    items: ["Reusable Components", "UI Architecture", "Git Workflow", "Vercel", "Product Thinking"]
  }
];

const spotlightCards = [
  {
    label: "Visual Direction",
    title: "Executive dark theme with richer glow",
    text: "A more premium palette with cleaner contrast and stronger section rhythm."
  },
  {
    label: "Interaction Layer",
    title: "More animation, but controlled",
    text: "Floating cards, animated beams, subtle hover lift, and smoother transitions across sections."
  },
  {
    label: "Portfolio Signal",
    title: "Work shown with more intent",
    text: "Projects now read like real product case studies instead of simple placeholders."
  }
];

const projects = [
  {
    title: "AI Audit Platform",
    category: "AI operations and review workflow",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    tags: ["Next.js", "AI UX", "Dashboards", "MongoDB"],
    summary:
      "An AI audit workflow product designed to review outputs, flag issues, and make model evaluation easier for teams.",
    details: [
      "Structured a dashboard flow for tracking audits, findings, confidence levels, and review actions.",
      "Focused on information hierarchy so heavy AI data still feels readable and easy to act on.",
      "Designed the experience to balance modern product polish with practical operational clarity."
    ],
    impact: "Strong showcase of AI-native UI thinking and audit-style product architecture."
  },
  {
    title: "Lead Distribution System",
    category: "Sales workflow and routing product",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    tags: ["React", "Node.js", "Automation", "Role Flows"],
    summary:
      "A lead management product built around fair routing, visibility, and faster sales follow-up across teams.",
    details: [
      "Mapped how leads move between admins, sales teams, and individual contributors with better transparency.",
      "Designed allocation and tracking screens so performance data remains useful without feeling cluttered.",
      "Focused on workflow efficiency, accountability, and dashboard-style visibility."
    ],
    impact: "Highlights real business workflow thinking around lead assignment and operational clarity."
  },
  {
    title: "E-Commerce Platform",
    category: "Conversion-focused storefront",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*M8kXp4qm0_wfzxcQN-E6-A.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    summary:
      "A modern commerce experience built around product discovery, cart confidence, and a clean purchase journey.",
    details: [
      "Designed product listing and detail flows that keep browsing fast and visually clear.",
      "Built backend endpoints for products, carts, orders, and customer account flows.",
      "Structured the system to reflect real inventory and order-management thinking."
    ],
    impact: "Strong example of full-stack commerce UX with practical business logic."
  },
  {
    title: "Coaching Management System",
    category: "Role-based dashboard product",
    image: "https://techior.com/assets/img/feature/cims-images.jpg",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    summary:
      "An institute workflow platform with dedicated experiences for students, teachers, and administrators.",
    details: [
      "Mapped modules for attendance, batch operations, announcements, and fee workflows.",
      "Built dashboard-oriented layouts so information stays easy to scan and act on.",
      "Focused on role clarity and smoother academic operations across the product."
    ],
    impact: "Shows product thinking for multi-user systems with structured information architecture."
  },
  {
    title: "Cloud Storage App",
    category: "Utility product UX",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    tags: ["React", "Node.js", "File Workflows"],
    summary:
      "A cloud file experience centered on upload clarity, organization, and lightweight collaboration patterns.",
    details: [
      "Explored dashboard flows for file access, folder structure, and quick user actions.",
      "Practiced building reliable upload-oriented interfaces with a simple, clear visual system.",
      "Improved how I think about utility products where speed and clarity matter most."
    ],
    impact: "Highlights practical thinking around file management and usability-heavy products."
  },
  {
    title: "Job Portal",
    category: "Marketplace workflow",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    tags: ["MERN", "Search UX", "Forms"],
    summary:
      "A job discovery and application platform designed around credibility, discoverability, and clean applicant flows.",
    details: [
      "Created interfaces for posting jobs, browsing roles, and applying with structured forms.",
      "Considered how recruiters and applicants move through the platform differently.",
      "Focused on information density without making the experience feel overwhelming."
    ],
    impact: "Demonstrates handling of search, filters, forms, and multi-sided user flows."
  }
];

const experiences = [
  {
    company: "Amdox",
    role: "Full Stack Development Intern",
    period: "Internship Experience",
    image: "/images/amdox.svg",
    points: [
      "Worked across practical web tasks that improved my understanding of frontend-backend coordination.",
      "Strengthened how I structure reusable components, connect APIs, and keep application flow maintainable.",
      "Learned more about team delivery, version control, review cycles, and communicating technical progress."
    ]
  },
  {
    company: "Innovexis",
    role: "Web Development Intern",
    period: "Internship Experience",
    image: "/images/innovexis.svg",
    points: [
      "Contributed to project environments where responsive implementation and clean design details mattered.",
      "Refined how I translate requirements into working interfaces and practical product logic.",
      "Gained more confidence in debugging, iteration, collaboration, and shipping with discipline."
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Understand the user and workflow",
    text: "I start by identifying what the product must communicate clearly and which actions matter most."
  },
  {
    number: "02",
    title: "Create visual hierarchy",
    text: "Layouts, color, spacing, and typography are shaped so the interface feels premium and easy to scan."
  },
  {
    number: "03",
    title: "Build with reusable structure",
    text: "I keep implementation clean so future edits, scaling, and feature additions remain manageable."
  },
  {
    number: "04",
    title: "Refine the motion layer",
    text: "I use animation to add energy, guide the eye, and make the final experience feel intentional."
  }
];

const highlights = [
  "Available for frontend, full-stack, and internship opportunities",
  "Comfortable with dashboards, AI interfaces, admin tools, and product landing pages",
  "Focused on mixing professional visuals with practical implementation quality"
];

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
      {children}
    </span>
  );
}

function SignalCard({ title, value, note, className = "" }) {
  return (
    <div
      className={`rounded-[1.6rem] border border-white/10 bg-white/6 p-5 shadow-card backdrop-blur transition duration-500 hover:-translate-y-1 ${className}`}
    >
      <div className="text-xs uppercase tracking-[0.28em] text-cyan/70">{title}</div>
      <div className="mt-3 font-display text-3xl font-bold text-white">{value}</div>
      <div className="mt-2 text-sm leading-6 text-slate-300">{note}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_22%),radial-gradient(circle_at_84%_16%,_rgba(245,158,11,0.12),_transparent_26%),radial-gradient(circle_at_78%_82%,_rgba(148,163,184,0.08),_transparent_22%),linear-gradient(180deg,_#05070c_0%,_#0b1220_38%,_#121821_100%)]" />
      <div className="bg-noise pointer-events-none fixed inset-0 -z-30 opacity-[0.16]" />
      <div className="bg-radial-wave pointer-events-none fixed inset-0 -z-20 opacity-80" />
      <div className="fixed inset-0 -z-20 bg-hero-grid bg-[length:62px_62px] opacity-[0.07] animate-pulse-grid" />
      <div className="pointer-events-none fixed left-1/2 top-[-18rem] -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full border border-white/10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.12),rgba(148,163,184,0.08),rgba(245,158,11,0.12),rgba(56,189,248,0.12))] blur-3xl animate-[spin_30s_linear_infinite]" />
      <div className="pointer-events-none fixed left-[-8rem] top-20 -z-10 h-80 w-80 rounded-full bg-sky-400/8 blur-3xl animate-float-slow" />
      <div className="pointer-events-none fixed right-[-6rem] top-40 -z-10 h-96 w-96 rounded-full bg-slate-300/8 blur-3xl animate-float-delay" />
      <div className="pointer-events-none fixed bottom-10 right-24 -z-10 h-72 w-72 rounded-full bg-amber-300/8 blur-3xl animate-drift" />
      <div className="pointer-events-none fixed bottom-[-8rem] left-[-2rem] -z-10 h-80 w-80 rounded-full bg-blue-300/6 blur-3xl animate-[float_13s_ease-in-out_infinite]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#050c17]/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="font-display text-xl font-semibold tracking-[0.12em] text-white">
            SG
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-emerald-300">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="mailto:gourshikha2001@gmail.com"
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-emerald-300/50 hover:bg-white/10 sm:inline-flex"
            >
              Email Me
            </a>
            <a
              href="https://github.com/shikha-20171"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-emerald-300 via-cyan to-amber-300 px-4 py-2 text-sm font-semibold text-[#04111b] shadow-glow transition hover:scale-[1.03]"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl flex-col justify-center px-6 py-20 lg:px-10"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(134,239,172,0.9)]" />
              Upgraded Visual Theme
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.38em] text-sky-300/90 sm:text-base">
                Shikha Gour
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl xl:text-7xl">
                I build modern digital products that feel premium, animated, and professionally structured.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Full Stack Developer focused on MERN and Next.js, combining interface quality, product thinking, and practical implementation. I enjoy building dashboards, AI workflows, and business tools that feel sharp from the first scroll.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-300 via-cyan to-amber-300 px-7 py-3.5 font-semibold text-[#06131d] shadow-glow transition hover:scale-[1.03]"
              >
                <span className="relative z-10">Explore Featured Work</span>
                <span className="absolute inset-y-0 left-0 w-20 bg-white/60 opacity-0 blur-md transition group-hover:opacity-100 group-hover:animate-shine" />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/12 bg-white/6 px-7 py-3.5 font-semibold text-white transition hover:border-sky-300/60 hover:bg-white/10"
              >
                Let&apos;s Work Together
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Chip>AI Products</Chip>
              <Chip>MERN Stack</Chip>
              <Chip>Next.js</Chip>
              <Chip>Dashboards</Chip>
              <Chip>Motion UI</Chip>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-3xl border border-white/10 bg-white/6 p-5 shadow-card backdrop-blur-sm transition duration-500 hover:-translate-y-1 ${
                    index % 2 === 1 ? "xl:translate-y-5" : ""
                  }`}
                >
                  <div className="font-display text-3xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute left-6 top-6 h-36 w-36 rounded-full border border-emerald-300/20 bg-emerald-300/10 blur-3xl" />
            <div className="absolute bottom-14 right-0 h-40 w-40 rounded-full border border-cyan/20 bg-cyan/10 blur-3xl" />
            <div className="absolute inset-x-12 top-8 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent animate-beam" />
            <div className="absolute inset-x-24 bottom-12 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent animate-beam-delay" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-card backdrop-blur-xl animate-tilt">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(52,211,153,0.12),transparent_32%,transparent_60%,rgba(250,204,21,0.12))]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#06111d]">
                <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/8 bg-white/5 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.26em] text-slate-400">
                    Live Portfolio System
                  </div>
                </div>
                <div className="relative p-6 pt-16">
                  <Image
                    src="/images/hero-dev.svg"
                    alt="Developer workspace illustration"
                    width={900}
                    height={860}
                    priority
                    className="h-auto w-full rounded-[1.4rem] transition duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-16 w-56 animate-float-slow">
              <SignalCard
                title="Featured"
                value="AI Audit"
                note="A workflow-led product showing structured review, insights, and AI-focused dashboard design."
              />
            </div>
            <div className="absolute -right-3 top-44 w-56 animate-float-delay">
              <SignalCard
                title="Featured"
                value="Lead Distribution"
                note="A business system built around lead routing, accountability, and sales-team visibility."
              />
            </div>
            <div className="absolute bottom-[-2rem] left-10 right-10 rounded-[1.8rem] border border-white/10 bg-[#071220]/92 p-5 shadow-card backdrop-blur">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-300/80">
                    Portfolio Upgrade
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                    Stronger theme, cleaner hierarchy, richer motion, and better featured projects
                  </h2>
                </div>
                <div className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-amber-300">
                  Open to work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/10 py-6">
        <div className="overflow-hidden">
          <div className="flex min-w-max animate-marquee gap-4 px-6">
            {[...capabilityGroups.flatMap((group) => group.items), ...capabilityGroups.flatMap((group) => group.items)].map(
              (item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-full border border-white/12 bg-white/5 px-5 py-2 text-sm font-medium uppercase tracking-[0.24em] text-slate-200"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="About Me"
          title="I want products to feel impressive, useful, and easy to trust."
          text="My approach combines visual polish, product structure, and motion that feels intentional. I enjoy building experiences that look premium, read clearly, and stay practical under real user workflows."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {proofPoints.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/6 p-7 shadow-card backdrop-blur transition duration-500 hover:-translate-y-2 ${
                index === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300 via-cyan to-amber-300" />
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-300/10 blur-2xl transition group-hover:scale-125" />
              <h3 className="font-display text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="highlights" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-8 shadow-card backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
              Why This Theme Works
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              More premium than before, but still energetic and modern.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The update pushes the site toward a more polished product aesthetic. It uses darker surfaces, cleaner spacing, animated light beams, floating cards, and stronger featured-project storytelling.
            </p>
            <div className="mt-8 grid gap-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/15 p-4 text-slate-200 transition duration-300 hover:border-emerald-300/20 hover:bg-white/5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {spotlightCards.map((card, index) => (
              <article
                key={card.title}
                className={`group rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-7 shadow-card backdrop-blur transition duration-500 hover:-translate-y-2 ${
                  index === 1 ? "lg:translate-x-6" : index === 2 ? "lg:translate-x-12" : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 font-display text-lg font-bold text-emerald-300">
                    {card.label}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {card.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.8rem] border border-white/10 bg-[#081321]/85 p-7 shadow-card transition duration-500 hover:-translate-y-1 hover:border-cyan/20"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300/90">
                {group.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects that show stronger product thinking, workflow design, and implementation range."
          text="I added your AI Audit and Lead Distribution projects here as featured case studies, alongside your other builds, so the portfolio better reflects the kind of products you want to be known for."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on internship exposure that improved both delivery quality and confidence."
          text="Real project environments helped me sharpen responsiveness, collaboration, debugging habits, and the discipline required to move from ideas to stable implementation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-card backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
              Build Process
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              I like projects with clean thinking, strong motion, and visible polish.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              My workflow starts with understanding the user flow, then shaping interface hierarchy, interaction details, and implementation structure so the final product feels complete.
            </p>
          </div>

          <div className="grid gap-5">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-7 shadow-card backdrop-blur transition duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl border border-cyan/20 bg-cyan/10 px-4 py-3 font-display text-2xl font-bold text-cyan">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {step.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(52,211,153,0.14),rgba(255,255,255,0.04)_40%,rgba(250,204,21,0.12))] p-[1px] shadow-card">
          <div className="rounded-[2.1rem] bg-[#07101d]/96 px-8 py-10 md:px-12 md:py-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">
                  Contact
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
                  Let&apos;s build something sharp, useful, and memorable.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  If you&apos;re looking for a developer who cares about visuals, workflow clarity, and full-stack execution, I&apos;d love to connect.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:gourshikha2001@gmail.com"
                  className="rounded-3xl border border-white/10 bg-[#091221] p-5 transition hover:border-emerald-300/40 hover:bg-[#0b1829]"
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Email
                  </div>
                  <div className="mt-3 font-display text-xl font-semibold text-white">
                    gourshikha2001@gmail.com
                  </div>
                </a>
                <a
                  href="tel:+917067680063"
                  className="rounded-3xl border border-white/10 bg-[#091221] p-5 transition hover:border-emerald-300/40 hover:bg-[#0b1829]"
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Phone
                  </div>
                  <div className="mt-3 font-display text-xl font-semibold text-white">
                    +91 7067680063
                  </div>
                </a>
                <a
                  href="https://github.com/shikha-20171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-white/10 bg-[#091221] p-5 transition hover:border-emerald-300/40 hover:bg-[#0b1829]"
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    GitHub
                  </div>
                  <div className="mt-3 font-display text-xl font-semibold text-white">
                    shikha-20171
                  </div>
                </a>
                <div className="rounded-3xl border border-white/10 bg-[#091221] p-5">
                  <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Focus
                  </div>
                  <div className="mt-3 font-display text-xl font-semibold text-white">
                    Full Stack Web Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
