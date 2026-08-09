import type { ReactNode } from "react";
import type { Theme } from "@/types";

export function SectionShell({
  theme,
  title,
  onBack,
  children,
}: {
  theme: Theme;
  title: string;
  onBack: () => void;
  children: ReactNode;
}) {
  return (
    <div className="flex-1 w-full max-w-[760px] mx-auto px-6 pt-28 pb-[150px] animate-[in_.35s_both]">
      <button
        onClick={onBack}
        className={`inline-flex items-center gap-1.5 h-7 px-3 mb-9 rounded-full border text-[12px] font-medium hover:opacity-80 ${
          theme === "dark"
            ? "bg-[#1a1a1a] border-[#2a2a2a] text-white/80"
            : "bg-white border-[#e8e8e6] text-black/70 shadow-sm"
        }`}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back
      </button>
      <h2 className="text-[30px] leading-none tracking-[-0.03em] font-medium mb-9">
        {title}
      </h2>
      {children}
    </div>
  );
}
