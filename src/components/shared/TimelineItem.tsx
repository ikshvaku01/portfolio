import type { Theme } from "@/types";

type Website = {
  label: string;
  href: string;
};

export function TimelineItem({
  theme,
  title,
  company,
  period,
  location,
  employmentType,
  website,
  technologies,
  points,
}: {
  theme: Theme;
  title: string;
  company: string;
  period: string;
  location: string;
  employmentType: string;
  website?: Website;
  technologies?: string[];
  points: string[];
}) {
  const isDark = theme === "dark";

  const colors = {
    title: isDark ? "text-white" : "text-neutral-950",
    company: isDark ? "text-neutral-300" : "text-neutral-700",
    meta: isDark ? "text-neutral-400" : "text-neutral-600",
    body: isDark ? "text-neutral-300" : "text-neutral-700",
    line: isDark ? "border-white/20" : "border-black/15",
    dot: isDark ? "bg-white" : "bg-neutral-950",
    pill: isDark
      ? "border-white/15 bg-white/[0.06] text-neutral-300"
      : "border-black/10 bg-black/[0.035] text-neutral-700",
    link: isDark
      ? "text-neutral-200 hover:text-white"
      : "text-neutral-800 hover:text-black",
  };

  return (
    <article
      className={`
                relative pl-6 pb-10
                border-l ${colors.line}
                last:pb-0
            `}
    >
      {/* Timeline dot */}
      <span
        className={`
                    absolute -left-[4.5px] top-1.5
                    h-2 w-2
                    rounded-full
                    ${colors.dot}
                    ring-4
                    ${isDark ? "ring-[#0b0b0b]" : "ring-[#f5f5f5]"}
                `}
      />

      {/* Title */}
      <h3
        className={`
                    text-[16px]
                    font-semibold
                    leading-tight
                    tracking-[-0.02em]
                    ${colors.title}
                `}
      >
        {title}
      </h3>

      {/* Company */}
      <p
        className={`
                    mt-1
                    text-[14px]
                    font-medium
                    leading-tight
                    ${colors.company}
                `}
      >
        {company}
      </p>

      {/* Metadata */}
      <div
        className={`
                    mt-2.5
                    flex flex-wrap items-center gap-x-2.5 gap-y-1
                    text-[12px]
                    ${colors.meta}
                `}
      >
        <span>{period}</span>

        <span className={isDark ? "text-white/20" : "text-black/20"}>•</span>

        <span>{location}</span>

        <span className={isDark ? "text-white/20" : "text-black/20"}>•</span>

        <span>{employmentType}</span>

        {website && (
          <>
            <span className={isDark ? "text-white/20" : "text-black/20"}>
              •
            </span>

            <a
              href={website.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                                underline
                                underline-offset-2
                                transition-colors
                                ${colors.link}
                            `}
            >
              {website.label}
            </a>
          </>
        )}
      </div>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {technologies.map((technology) => (
            <span
              key={technology}
              className={`
                                rounded-md
                                border
                                px-2 py-[3px]
                                text-[10px]
                                font-medium
                                leading-none
                                ${colors.pill}
                            `}
            >
              {technology}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <ul
        className={`
                    mt-4
                    space-y-2
                    text-[14px]
                    leading-[1.55]
                    ${colors.body}
                `}
      >
        {points.map((point) => (
          <li key={point} className="relative pl-3">
            <span
              className={`
                                absolute
                                left-0
                                top-[9px]
                                h-1
                                w-1
                                rounded-full
                                ${isDark ? "bg-neutral-400" : "bg-neutral-500"}
                            `}
            />

            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
