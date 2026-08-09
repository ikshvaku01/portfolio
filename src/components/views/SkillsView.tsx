import { SectionShell } from "@/components/layout/SectionShell";
import { SkillGroup } from "@/components/shared/SkillGroup";
import type { Theme } from "@/types";

const SKILL_GROUPS = [
  {
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Node.js",
      "RESTful API Design",
      "Spring Security",
    ],
  },
  {
    title: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Redux", "ShadCN"],
  },
  {
    title: "Data and Storage",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RustFS", "Cloudinary"],
  },
  {
    title: "DevOps and Tools",
    items: [
      "Docker",
      "Linux",
      "RHEL",
      "Windows Server",
      "Git",
      "GitHub",
      "GitLab",
    ],
  },
];

export function SkillsView({
  theme,
  onBack,
}: {
  theme: Theme;
  onBack: () => void;
}) {
  return (
    <SectionShell theme={theme} title="Skills" onBack={onBack}>
      <div
        className={`max-w-[680px] ${
          theme === "light"
            ? "[&_.skill-count]:text-black/50 [&_.skill-card]:border-black/13 [&_.skill-card]:bg-white [&_.skill-card]:shadow-[0_1px_2px_rgba(0,0,0,0.02)] [&_.skill-dot]:bg-black/35"
            : ""
        }`}
      >
        {SKILL_GROUPS.map((group) => (
          <SkillGroup
            key={group.title}
            title={group.title}
            items={group.items}
          />
        ))}
      </div>
    </SectionShell>
  );
}
