import Image from "next/image";

export function ExperienceCard({ experience }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-card backdrop-blur transition duration-500 hover:-translate-y-2">
      <div className="relative border-b border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5">
        <Image
          src={experience.image}
          alt={`${experience.company} internship illustration`}
          width={1200}
          height={700}
          className="h-auto w-full rounded-[1.4rem] border border-white/10"
        />
      </div>

      <div className="space-y-5 p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-amber-300/80">
              {experience.period}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-white">
              {experience.company}
            </h3>
            <p className="mt-2 text-lg text-slate-200">{experience.role}</p>
          </div>
          <div className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Experience
          </div>
        </div>

        <div className="space-y-3">
          {experience.points.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/8 bg-black/15 p-4 text-sm leading-7 text-slate-200"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
