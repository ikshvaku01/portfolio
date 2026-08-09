import type { ReactNode } from "react";
import type { Theme } from "@/types";

export function ProfileLink({
  label,
  href,
  detail,
  theme,
  icon,
}: {
  label: string;
  href: string;
  detail: string;
  theme: Theme;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-px ${
        theme === "dark"
          ? "border-white/10 bg-white/[0.035] hover:bg-white/6 hover:border-white/15"
          : "border-black/8 bg-white hover:border-black/[0.14] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
      }`}
    >
      <div
        className={`w-[42px] h-[42px] shrink-0 rounded-xl grid place-items-center ${
          theme === "dark" ? "bg-white/[0.07]" : "bg-black/4.5"
        }`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold tracking-[-0.01em]">
            {label}
          </span>

          <span
            className={`w-1.5 h-1.5 rounded-full ${
              detail === "Placeholder URL" || detail === "Profile coming soon"
                ? "bg-black/20 dark:bg-white/20"
                : "bg-[#18A558]"
            }`}
          />
        </div>

        <p
          className={`mt-[3px] text-[12px] truncate ${
            theme === "dark" ? "text-white/45" : "text-black/45"
          }`}
        >
          {detail}
        </p>
      </div>

      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={`shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
          theme === "dark" ? "text-white/35" : "text-black/30"
        }`}
      >
        <path d="M7 17L17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </a>
  );
}
