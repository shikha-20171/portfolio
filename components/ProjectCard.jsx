import Image from "next/image";

export function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-card backdrop-blur">
      <div className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(98,243,255,0.18),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] p-4">
        <Image
          src={project.image}
          alt={`${project.title} preview illustration`}
          width={1200}
          height={720}
          className="h-auto w-full rounded-[1.4rem] border border-white/10 transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="space-y-6 p-7">
        <div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan/20 bg-cyan/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-5 font-display text-3xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-300">
            {project.summary}
          </p>
        </div>

        <div className="space-y-3">
          {project.details.map((detail) => (
            <div
              key={detail}
              className="rounded-2xl border border-white/8 bg-black/15 p-4 text-sm leading-7 text-slate-200"
            >
              {detail}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
