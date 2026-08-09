import type { Theme } from "@/types";
import { RoleRotator } from "@/components/shared/RoleRotator";

export function HomeView({ theme }: { theme: Theme }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[100dvh] px-6 pb-[140px] pt-[110px] animate-[in_.35s_both]">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="/avatar.webp"
            alt="Yash Singh Bajetha"
            width={108}
            height={108}
            fetchPriority="high"
            className={`w-27 h-27 rounded-full object-cover grayscale-[0.12] shadow-[0_0_0_1px_rgba(0,0,0,0.06)] ${
              theme === "dark" ? "brightness-[0.9]" : ""
            }`}
          />
          <div
            className={`absolute inset-0 rounded-full pointer-events-none ${
              theme === "dark"
                ? "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                : "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
            }`}
          />
        </div>
        <p
          className={`mt-[14px] text-[14px] font-[500] tracking-[-0.01em] ${theme === "dark" ? "text-white/90" : "text-black/90"}`}
        >
          Yash Singh Bajetha
        </p>
      </div>

      <h1 className="mt-[34px] text-center font-[500] tracking-[-0.03em] leading-[0.96] max-w-[680px] text-[clamp(28px,5.2vw,52px)]">
        <span className="inline-flex flex-wrap justify-center gap-x-[12px] gap-y-[1px] items-center">
          <span>Software engineer</span>
          <span className="inline-flex items-center -mt-[2px]">
            <svg
              width="38"
              height="38"
              viewBox="0 0 28 28"
              fill="none"
              className={theme === "dark" ? "stroke-white" : "stroke-black"}
            >
              <path
                d="M14 4.5L4 9l10 4.5L24 9 14 4.5z"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M4 14l10 4.5L24 14"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M4 18.5L14 23l10-4.5"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M20 20.5v3M18.5 22h3"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </span>
        <RoleRotator theme={theme} />
      </h1>
    </div>
  );
}