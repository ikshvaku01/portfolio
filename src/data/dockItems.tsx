import type { DockItem } from "@/types";

export const DOCK_ITEMS: DockItem[] = [
  {
    id: "experience",
    label: "Experience",
    color: "#FFD540",
    fg: "#111",
    content: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Briefcase */}
        <rect x="3.5" y="7.5" width="17" height="12.5" rx="2" />
        <path d="M8.5 7.5V5.8a1.8 1.8 0 0 1 1.8-1.8h3.4a1.8 1.8 0 0 1 1.8 1.8v1.7" />
        <path d="M3.5 11.5h17" />
        <path d="M10 11.5v1.2h4v-1.2" />
      </svg>
    ),
    view: "experience",
  },
  {
    id: "projects",
    label: "Projects",
    color: "#0DBA6E",
    fg: "white",
    content: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Project window */}
        <rect x="3.5" y="4" width="17" height="16" rx="2" />

        {/* Header */}
        <path d="M3.5 8h17" />
        <circle cx="6.5" cy="6" r="0.65" fill="currentColor" stroke="none" />
        <circle cx="9" cy="6" r="0.65" fill="currentColor" stroke="none" />

        {/* Code/project mark */}
        <path d="m8 12-2.5 2 2.5 2" />
        <path d="m16 12 2.5 2-2.5 2" />
        <path d="m13.5 11-3 6" />
      </svg>
    ),
    view: "projects",
  },
  {
    id: "skills",
    label: "Skills",
    color: "#0A0A0A",
    fg: "white",
    content: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 5v14M12 5v14M19 5v14"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M3.5 8h3M10.5 15h3M17.5 10h3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    view: "skills",
  },
  {
    id: "profiles",
    label: "Profiles",
    color: "#FF3333",
    fg: "white",
    content: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.2" stroke="white" strokeWidth="1.7" />
        <path
          d="M5.5 20c.7-3.7 3.1-5.6 6.5-5.6s5.8 1.9 6.5 5.6"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    view: "links",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    color: "#D6ECFF",
    fg: "#1E6CB5",
    content: (
      <span className="font-bold text-[19px] tracking-tight leading-none">
        in
      </span>
    ),
    external: true,
    href: "https://linkedin.com/in/yash-singh-bajetha",
  },
  {
    id: "github",
    label: "GitHub",
    color: "#111111",
    fg: "white",
    content: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          fill="white"
          d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.08 1.54 1.07 1.54 1.07.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.15 9.15 0 0 1 12 7.84c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.59 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    ),
    external: true,
    href: "https://github.com/ikshvaku01",
  },
  {
    id: "email",
    label: "Email",
    color: "#FFFFFF",
    fg: "#E20813",
    content: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="1.8"
          y="4.2"
          width="20.4"
          height="15.6"
          rx="2.2"
          fill="white"
        />
        <path
          d="M2.2 5.2L12 12.6L21.8 5.2"
          stroke="#3AB2FF"
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
      </svg>
    ),
    external: true,
    href: "mailto:yashsingh1318@gmail.com",
  },
  {
    id: "resume",
    label: "Resume",
    color: "#0A66C2",
    fg: "white",
    external: true,
    href: import.meta.env.VITE_RESUME_URL,
    content: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="2.5" width="16" height="19" rx="2" fill="white" />
          <path
              d="M15 2.5V7H20"
              stroke="#3AB2FF"
              strokeWidth="1.5"
              strokeLinejoin="round"
          />
          <path
              d="M15 2.8L19.7 7"
              stroke="#3AB2FF"
              strokeWidth="1.5"
              strokeLinejoin="round"
          />
          <path
              d="M7.5 11H16.5M7.5 14.5H16.5M7.5 18H13.5"
              stroke="#3AB2FF"
              strokeWidth="1.5"
              strokeLinecap="round"
          />
        </svg>
    ),
  },
];
