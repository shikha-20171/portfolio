import Image from "next/image";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Next.js",
  "SQL",
  "Vercel"
];

const strengths = [
  {
    title: "Frontend That Feels Alive",
    text: "I craft responsive interfaces with clean component structure, animation-rich storytelling, and strong attention to user flow."
  },
  {
    title: "Backend That Solves Real Problems",
    text: "From REST APIs to authentication, database modeling, file workflows, and production-ready logic, I enjoy building systems that are practical and scalable."
  },
  {
    title: "Full Project Ownership",
    text: "I move from idea to deployment with Git, GitHub, Vercel, reusable code, testing mindset, and collaboration learned through internships."
  }
];

const projects = [
  {
    title: "E-Commerce Website",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*M8kXp4qm0_wfzxcQN-E6-A.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    summary:
      "A shopping platform with product browsing, category filtering, cart management, secure checkout flow, and a polished admin-friendly structure.",
    details: [
      "Designed responsive product listing and detail pages with a user-friendly purchase flow.",
      "Built backend APIs for products, orders, user accounts, and cart persistence.",
      "Used database-driven inventory and customer data handling to simulate real business workflows."
    ]
  },
  {
    title: "Coaching Management System",
    image: "https://techior.com/assets/img/feature/cims-images.jpg",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    summary:
      "A role-based academic management app for coaching institutes with dashboards for students, teachers, and administrators.",
    details: [
      "Structured modules for attendance, batch management, announcements, and fee tracking.",
      "Focused on clean information architecture so institute workflows stay easy to manage.",
      "Added dashboard-style layouts that help users track operations quickly."
    ]
  },
  {
    title: "Cloud Storage App",
    image: "data:image/jpeg;base64,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",
    tags: ["React", "Node.js", "Express"],
    summary:
      "A file-focused application that helps users upload, organize, and manage personal documents through a modern interface.",
    details: [
      "Created flows for file upload, file grouping, and accessible document organization.",
      "Planned the app around simple navigation and useful status visibility.",
      "Showcased practical experience with backend APIs and data-connected UI."
    ]
  },
  {
    title: "Job Portal",
    image: "data:image/png;base64,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",
    tags: ["MERN", "Authentication", "REST API"],
    summary:
      "A recruitment platform that connects applicants and recruiters with job discovery, posting, and profile-based workflows.",
    details: [
      "Handled user registration, login, job posting, and application management flows.",
      "Created separate experiences for job seekers and recruiters.",
      "Applied full-stack patterns for forms, validation, protected routes, and backend logic."
    ]
  },
  {
    title: "Document Signature App",
    image: "https://cdn.dribbble.com/userupload/3941387/file/original-944268579407cf25f02d60f8dc474b31.jpg?crop=0x0-4800x3600&format=webp&resize=400x300&vertical=center",
    tags: ["React", "Node.js", "Workflow UI"],
    summary:
      "A document workflow product focused on signing experiences, document approval movement, and trust-oriented UI.",
    details: [
      "Built screens that guide users through upload, review, signing, and completion.",
      "Explored document lifecycle thinking and action-based dashboard design.",
      "Balanced usability with a professional visual tone for business-style interactions."
    ]
  },
  {
    title: "Freelance Marketplace",
    image: "https://oyelabs.com/wp-content/uploads/2024/08/Top-Freelance-Marketplace-Apps.png",
    tags: ["React", "MongoDB", "Node.js"],
    summary:
      "A service marketplace concept where clients and freelancers can connect, post work, and manage communication around project delivery.",
    details: [
      "Mapped out profile management, gig listings, and project discovery features.",
      "Created layouts that support credibility, browsing, and conversion.",
      "Demonstrated understanding of marketplace-style data relationships and UX needs."
    ]
  }
];

const experiences = [
  {
    company: "Amdox",
    role: "Full Stack Development Intern",
    period: "Internship Experience",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4Gwi36QvOnmL40on-3BLWDo5DqWMcOMTWQ&s",
    points: [
      "Worked on practical web development tasks that strengthened my understanding of frontend and backend collaboration.",
      "Improved how I structure components, connect APIs, and think about maintainable application flow.",
      "Learned how team-based development works with version control, feedback cycles, and delivery expectations."
    ]
  },
  {
    company: "Innovexis",
    role: "Web Development Intern",
    period: "Internship Experience",
    image: "data:image/png;base64,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",
    points: [
      "Contributed to real project environments where design clarity, responsiveness, and implementation discipline mattered.",
      "Refined my ability to translate requirements into working interfaces and scalable logic.",
      "Gained exposure to professional collaboration, debugging, iteration, and product-focused thinking."
    ]
  }
];

const stats = [
  { value: "13+", label: "Core technologies learned" },
  { value: "6", label: "Portfolio-ready full-stack projects" },
  { value: "2", label: "Industry internships completed" },
  { value: "100%", label: "Commitment to shipping polished work" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(98,243,255,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(255,122,24,0.14),_transparent_22%),linear-gradient(180deg,_#09101d_0%,_#08111f_42%,_#050913_100%)]" />
      <div className="fixed inset-0 -z-10 bg-hero-grid bg-[length:54px_54px] opacity-[0.08] animate-pulse-grid" />
      <div className="fixed left-[-6rem] top-24 -z-10 h-72 w-72 rounded-full bg-cyan/20 blur-3xl animate-float-slow" />
      <div className="fixed right-[-4rem] top-48 -z-10 h-80 w-80 rounded-full bg-coral/20 blur-3xl animate-float-delay" />

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-mist backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_18px_rgba(202,255,112,0.9)]" />
              Full Stack Developer Portfolio
            </div>
            <a
  href="https://github.com/shikha-20171"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-[#091221] border border-white/10 px-4 py-2 rounded-full hover:bg-cyan-500/10 transition text-white"
>
  <span className="text-sm">GitHub</span>
</a>

            <div className="space-y-5">
              <p className="text-2xl uppercase tracking-[0.38em] text-cyan/80">
                Shikha Gour
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl xl:text-7xl">
                Building vibrant web experiences with modern full-stack tools and
                a strong product mindset.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200/88">
              I'm a Full Stack Developer who loves turning ideas into real, working products. 
    I specialize in the MERN stack and Next.js, building fast, scalable, and 
    responsive web applications.

    I enjoy solving complex problems, optimizing performance, and creating 
    clean UI/UX experiences. Whether it's developing APIs, managing databases, 
    or deploying apps on platforms like Vercel, I aim to deliver complete 
    end-to-end solutions.

    Currently, I'm focused on building impactful projects and exploring new 
    technologies to grow as a developer.
                 I enjoys turning ideas into
                attractive, responsive, and useful digital products. I work with
                HTML, CSS, JavaScript, Python, React, Node.js, Express, MongoDB,
                Git, GitHub, Next.js, SQL, and Vercel to create interfaces that
                feel exciting and backends that stay practical.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan via-sky-300 to-lime px-7 py-3.5 font-semibold text-ink shadow-glow transition hover:scale-[1.02]"
              >
                <span className="relative z-10">Explore Projects</span>
                <span className="absolute inset-y-0 left-0 w-20 bg-white/60 opacity-0 blur-md transition group-hover:opacity-100 group-hover:animate-shine" />
              </a>
              <a
                href="#experience"
                className="rounded-full border border-white/15 bg-white/6 px-7 py-3.5 font-semibold text-white transition hover:border-cyan/60 hover:bg-white/10"
              >
                View Internships
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/6 p-5 shadow-card backdrop-blur-sm"
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

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-6 top-12 h-32 w-32 rounded-full border border-cyan/30 bg-cyan/10 blur-2xl" />
            <div className="absolute -right-8 bottom-4 h-36 w-36 rounded-full border border-coral/30 bg-coral/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-4 shadow-card backdrop-blur-md animate-tilt">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,transparent_65%,rgba(98,243,255,0.12))]" />
              <div className="relative rounded-[1.6rem] border border-white/10 bg-[#08101a] p-5">
                <Image
                  src="/images/hero-dev.svg"
                  alt="Illustration showing a developer workspace with dashboards and code"
                  width={900}
                  height={860}
                  className="h-auto w-full rounded-[1.2rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/10 py-6">
        <div className="overflow-hidden">
          <div className="flex min-w-max animate-marquee gap-4 px-6">
            {[...stack, ...stack].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-full border border-white/12 bg-white/5 px-5 py-2 text-sm font-medium uppercase tracking-[0.24em] text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="About Me"
          title="A developer focused on useful products, strong visuals, and scalable logic."
          text="My learning journey covers both the creative and technical sides of web development. I like building interfaces that feel modern and energetic, while also shaping APIs, data models, and workflows that make products reliable behind the scenes."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/6 p-7 shadow-card backdrop-blur transition hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan via-lime to-ember" />
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

      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects that reflect my full-stack learning across real product ideas."
          text="Each project helped me practice a different combination of interface design, API thinking, database structure, and workflow planning. Together they show how I approach building digital products from frontend to backend."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <SectionHeading
          eyebrow="Internships"
          title="Industry exposure that strengthened my workflow, confidence, and team collaboration."
          text="My internship experiences gave me the chance to work in more professional environments, understand delivery expectations, and improve both technical execution and communication."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-card backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan/75">
              Why Hire Me
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              I bring curiosity, consistency, and a builder’s mindset.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              I enjoy learning fast, shipping with care, and improving details
              that make products more enjoyable to use. My work spans
              responsive layouts, API-driven applications, database-connected
              features, and deployment-oriented thinking with GitHub and Vercel.
            </p>
            <div className="mt-8 space-y-4 text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                Strong foundation in frontend, backend, databases, version
                control, and deployment.
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                Comfortable turning business ideas into practical web products.
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                Passion for modern UI, animation, and better user experience.
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 shadow-card backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-coral/80">
              Contact Snapshot
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              Let’s build meaningful digital experiences.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              This portfolio is designed as a strong personal brand page for a
              growing full stack developer. It can be extended with live links,
              resume download, contact form integration, GitHub activity, blog
              posts, or project case studies whenever you want.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#091221] p-5">
                <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Primary Focus
                </div>
                <div className="mt-2 font-display text-2xl font-semibold text-white">
                  Full Stack Web Development
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#091221] p-5">
                <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Tools
                </div>
                <div className="mt-2 font-display text-2xl font-semibold text-white">
                  MERN, Next.js, SQL, Vercel
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#091221] p-5">
                <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Workflow
                </div>
                <div className="mt-2 font-display text-2xl font-semibold text-white">
                  Git, GitHub, Team Collaboration
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#091221] p-5">
                <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Ready To Add
                </div>
                <div className="mt-2 font-display text-2xl font-semibold text-white">
                  Resume, Links, Live Demos
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
  <div className="rounded-3xl border border-white/10 bg-[#091221] p-6 w-full max-w-md text-center shadow-lg">
    
    <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
      Contact
    </div>

    <div className="mt-4 text-xl font-semibold text-white">
      📞 +91 7067680063
    </div>

    <div className="mt-2 text-xl font-semibold text-white">
      📧 gourshikha2001@gmail.com
    </div>

  </div>
</div>
      </section>
      

    </main>
  );
}
