import { SectionShell } from "@/components/layout/SectionShell";
import { TimelineItem } from "@/components/shared/TimelineItem";
import type { Theme } from "@/types";

export function ExperienceView({
  theme,
  onBack,
}: {
  theme: Theme;
  onBack: () => void;
}) {
  return (
    <SectionShell theme={theme} title="Experience" onBack={onBack}>
      <TimelineItem
        theme={theme}
        title="Project Associate I"
        company="CSIR - Traditional Knowledge Digital Library Unit"
        period="Oct 2024 - Present"
        location="New Delhi, India"
        employmentType="Full-time"
        website={{
          label: "Traditional Knowledge Digital Library Unit",
          href: "https://www.tkdl.res.in/",
        }}
        technologies={["TypeScript", "Redis", "PostgreSQL", "Spring Security"]}
        points={[
          "Architected a secure, multi-tenant platform using TypeScript, Redis, and PostgreSQL for internal use.",
          "Designed RBAC and fine-grained permissions with Spring Security, plus optimistic concurrency controls for safe concurrent writes.",
          "Improved backend response performance by 20% through PostgreSQL optimisation, Redis caching, and REST API tuning.",
          "Delivered a high-throughput Excel ingestion pipeline that cut data-entry errors by 30% for 20 users.",
        ]}
      />

      <TimelineItem
        theme={theme}
        title="Full Stack Developer Intern"
        company="Dignique Techlabs"
        period="Jul 2023 - Sep 2023"
        location="Noida, India"
        employmentType="Internship"
        website={{
          label: "Dignique Techlabs",
          href: "https://diginique.com",
        }}
        technologies={["React", "REST APIs", "JavaScript", "Analytics"]}
        points={[
          "Delivered an admin dashboard with authentication, REST APIs, analytics, and user monitoring.",
          "Built reusable React components and introduced code reviews that reduced testing-phase bugs by 15%.",
        ]}
      />
    </SectionShell>
  );
}
