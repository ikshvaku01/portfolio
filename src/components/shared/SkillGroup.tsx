export function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="mb-8 last:mb-0">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-[13px] font-semibold tracking-[-0.01em]">
          {title}
        </h3>
        <span className="skill-count text-[11px] tabular-nums text-black/35 dark:text-white/30">
          {items.length}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="skill-card min-h-12 px-3.5 py-3 rounded-[11px] border border-black/8 bg-white flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-px hover:border-black/18 hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)] dark:border-white/9 dark:bg-white/[0.035] dark:hover:border-white/15 dark:hover:bg-white/5.5"
          >
            <span className="skill-dot w-[5px] h-[5px] shrink-0 rounded-full bg-black/25 dark:bg-white/25" />
            <span className="text-[13px] font-medium tracking-[-0.01em] leading-tight">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
