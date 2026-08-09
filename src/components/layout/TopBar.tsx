import type { Theme, View } from "@/types";

export function TopBar({
  theme,
  view,
  onToggleTheme,
  onToggleAbout,
}: {
  theme: Theme;
  view: View;
  onToggleTheme: () => void;
  onToggleAbout: () => void;
}) {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-[22px] pointer-events-none">
      <div
        className={`pointer-events-auto inline-flex items-center h-8 rounded-full border backdrop-blur-lg shadow-[0_1px_1px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.06)] px-1 ${
          theme === "dark"
            ? "bg-[#1b1b1b]/80 border-[#2a2a2a]"
            : "bg-[#f6f6f5]/90 border-[#e3e3e1]"
        }`}
      >
        <button
          aria-label="Toggle theme"
          onClick={onToggleTheme}
          className={`w-6 h-6 rounded-full grid place-items-center cursor-pointer transition-colors ${
            theme === "dark" ? "hover:bg-white/10" : "hover:bg-black/5"
          }`}
        >
          {theme === "light" ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="3.5" strokeWidth="1.4" />
              <path
                strokeWidth="1.2"
                strokeLinecap="round"
                d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                strokeWidth="1.4"
              />
            </svg>
          )}
        </button>

        <div
          className={`w-px h-3.5 mx-[7px] ${theme === "dark" ? "bg-white/15" : "bg-black/10"}`}
        />

        <button
          onClick={onToggleAbout}
          className={`text-[12px] tracking-[-0.01em] font-medium px-2.5 h-6 rounded-full cursor-pointer transition-colors flex items-center ${
            theme === "dark"
              ? "text-white/80 hover:bg-white/10"
              : "text-black/70 hover:bg-black/5"
          }`}
        >
          {view === "home" ? "about" : "back"}
        </button>
      </div>
    </div>
  );
}
