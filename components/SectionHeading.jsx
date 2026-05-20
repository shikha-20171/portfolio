export function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.32em] text-cyan/75">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300">{text}</p>
    </div>
  );
}
