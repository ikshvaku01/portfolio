import type { Theme } from "@/types";
import braidsIcon from "@/assets/braids.ico";
import braidsScreenshot from "@/assets/braids.png";
import dwarpalaIcon from "@/assets/dwarpala.ico";
import dwarpalaScreenshot from "@/assets/dwarpala.png";

export function ProjectsView({
                                 theme,
                                 onBack: _onBack,
                             }: {
    theme: Theme;
    onBack: () => void;
}) {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-[1140px] px-[24px] md:px-[40px] pt-[120px] md:pt-[140px]">
                <h2 className="text-[22px] md:text-[33px] leading-[1.35] tracking-[-0.02em] font-[450] max-w-[900px]">
                    I enjoy building software that makes complex systems easier to
                    understand, work with, and scale{" "}
                    <span className="inline-flex align-middle -translate-y-[1px] mx-[2px]">
      <span className="inline-flex w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-[9px] bg-[#7DD3C0]/15 text-[#1D9A80] dark:text-[#7DD3C0] items-center justify-center border border-[#7DD3C0]/25 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </span>
    </span>{" "}
                    - from developer tools and data-heavy applications to{" "}
                    <span className="inline-flex align-middle -translate-y-[1px] mx-[2px]">
      <span className="inline-flex w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-full bg-[#FFE49A]/15 text-[#B9860A] dark:text-[#FFE49A] items-center justify-center border border-[#FFE49A]/25 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
    </span>{" "}
                    systems that turn large amounts of technical information into something
                    people can actually use.
                </h2>
            </div>

            <div className="w-full max-w-[1140px] px-[12px] md:px-[32px] mt-[54px] pb-[140px]">
                <div className="flex flex-col gap-6 md:gap-8">
                <div
                    className={`rounded-[16px] md:rounded-[20px] border p-[24px] md:p-[32px] grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center ${
                        theme === "dark"
                            ? "bg-[#151515] border-[#232323]"
                            : "bg-white border-[#ececea] shadow-[0_1px_1px_rgba(0,0,0,0.02)]"
                    }`}
                >
                    <div>
                        <div className="flex items-center gap-2.5">
                            <img
                                src={braidsIcon}
                                alt="Braid icon"
                                width={22}
                                height={22}
                                className="rounded-[6px] shrink-0"
                            />

                            <a
                                href="https://gitbraids.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-[600] text-[17px] tracking-[-0.02em] underline decoration-black/20 underline-offset-[3px] hover:decoration-black"
                            >
                                Braid — Git Commit Graph Explorer
                            </a>

                            <span
                                className={`text-[10px] px-2 py-1 rounded-full border ${
                                    theme === "dark"
                                        ? "border-white/10 bg-white/5 text-white/45"
                                        : "border-black/10 bg-black/[0.03] text-black/45"
                                }`}
                            >
                                Open Source
                            </span>
                        </div>

                        <p
                            className={`mt-[12px] text-[13.5px] leading-[1.55] max-w-[540px] ${
                                theme === "dark" ? "text-white/60" : "text-black/60"
                            }`}
                        >
                            An interactive commit-graph explorer for public GitHub
                            repositories. Braid reconstructs Git history into a readable,
                            lane-based graph that makes branches, merges, tags, and commits
                            easier to understand.
                        </p>

                        <p
                            className={`mt-[10px] text-[13.5px] leading-[1.55] max-w-[540px] ${
                                theme === "dark" ? "text-white/50" : "text-black/55"
                            }`}
                        >
                            It uses the GitHub REST API to build the commit graph, PostgreSQL
                            and Drizzle ORM for cached repository snapshots, and provides a
                            commit inspector with metadata, changed files, and diff
                            statistics.
                        </p>

                        <div className="mt-[18px] flex flex-wrap gap-2">
                            {[
                                "Next.js",
                                "React",
                                "TypeScript",
                                "GitHub REST API",
                                "PostgreSQL",
                                "Drizzle ORM",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className={`text-[11px] px-[8px] py-[4px] rounded-full border ${
                                        theme === "dark"
                                            ? "border-white/10 bg-white/5 text-white/60"
                                            : "border-black/10 bg-black/[0.03] text-black/60"
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-[20px] flex items-center gap-4 text-[12px]">
                            <a
                                href="https://gitbraids.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`underline underline-offset-2 transition-opacity hover:opacity-60 ${
                                    theme === "dark" ? "text-white/70" : "text-black/60"
                                }`}
                            >
                                Live project ↗
                            </a>

                            <a
                                href="https://github.com/ikshvaku01/Braids"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`underline underline-offset-2 transition-opacity hover:opacity-60 ${
                                    theme === "dark" ? "text-white/70" : "text-black/60"
                                }`}
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </div>

                    <div
                        className={`relative min-h-[220px] rounded-[14px] border overflow-hidden ${
                            theme === "dark"
                                ? "border-white/10 bg-[#101010]"
                                : "border-black/8 bg-[#f7f7f5]"
                        }`}
                    >
                        <div
                            className={`absolute top-0 left-0 right-0 h-8 border-b flex items-center px-3 gap-1.5 ${
                                theme === "dark"
                                    ? "border-white/10 bg-white/[0.025]"
                                    : "border-black/8 bg-white/70"
                            }`}
                        >
                            <span className="w-2 h-2 rounded-full bg-red-400/70" />
                            <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                            <span className="w-2 h-2 rounded-full bg-green-400/70" />
                        </div>

                        <div className="absolute inset-x-0 top-8 bottom-0">
                            <img
                                src={braidsScreenshot}
                                alt="Braid — Git Commit Graph Explorer screenshot"
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>


            {/*Project Two*/}
                <div
                    className={`rounded-[16px] md:rounded-[20px] border p-[24px] md:p-[32px] grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center ${
                        theme === "dark"
                            ? "bg-[#151515] border-[#232323]"
                            : "bg-white border-[#ececea] shadow-[0_1px_1px_rgba(0,0,0,0.02)]"
                    }`}
                >
                    <div>
                        <div className="flex items-center gap-2.5">
                            <img
                                src={dwarpalaIcon}
                                alt="Dwarpala icon"
                                width={22}
                                height={22}
                                className="rounded-[6px] shrink-0"
                            />
                            <a
                                href="https://github.com/ikshvaku01/dwarpala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-[600] text-[17px] tracking-[-0.02em] underline decoration-black/20 underline-offset-[3px] hover:decoration-black"
                            >
                                Dwarpala - Code-to-AI-Context Compiler
                            </a>
                            <span
                                className={`text-[10px] px-2 py-1 rounded-full border ${
                                    theme === "dark"
                                        ? "border-white/10 bg-white/5 text-white/45"
                                        : "border-black/10 bg-black/[0.03] text-black/45"
                                }`}
                            >
                                Open Source
                            </span>
                        </div>

                        <p
                            className={`mt-[12px] text-[13.5px] leading-[1.55] max-w-[540px] ${
                                theme === "dark" ? "text-white/60" : "text-black/60"
                            }`}
                        >
                            A Rust terminal application that scans a codebase, applies
                            GitIgnore-aware and language-specific filtering, and compiles the
                            project into a single structured document ready for AI context
                            windows.
                        </p>

                        <p
                            className={`mt-[12px] text-[13.5px] leading-[1.55] max-w-[540px] ${
                                theme === "dark" ? "text-white/60" : "text-black/60"
                            }`}
                        >
                            Built as a learning project end to end — including an offline
                            Ed25519 license-signing and verification module, developed as its
                            own crate via a git submodule, to understand how licensed
                            software is architected in practice.
                        </p>

                        <div className="mt-[18px] flex flex-wrap gap-2">
                            {[
                                "Rust",
                                "ratatui",
                                "Cargo Workspaces",
                                "Ed25519",
                                "crossterm",
                                "serde",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className={`text-[11px] px-[8px] py-[4px] rounded-full border ${
                                        theme === "dark"
                                            ? "border-white/10 bg-white/5 text-white/60"
                                            : "border-black/10 bg-black/[0.03] text-black/60"
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-[20px] flex items-center gap-4 text-[12px]">
                            <a
                                href="https://dwarpala.ikshvaku01.workers.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`underline underline-offset-2 transition-opacity hover:opacity-60 ${
                                    theme === "dark" ? "text-white/70" : "text-black/60"
                                }`}
                            >
                                Live project ↗
                            </a>

                            <a
                                href="https://github.com/ikshvaku01/dwarpala/releases/tag/v0.1.0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`underline underline-offset-2 transition-opacity hover:opacity-60 ${
                                    theme === "dark" ? "text-white/70" : "text-black/60"
                                }`}
                            >
                                Release ↗
                            </a>

                            <a
                                href="https://github.com/ikshvaku01/dwarpala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`underline underline-offset-2 transition-opacity hover:opacity-60 ${
                                    theme === "dark" ? "text-white/70" : "text-black/60"
                                }`}
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </div>

                    <div
                        className={`relative min-h-[220px] rounded-[14px] border overflow-hidden ${
                            theme === "dark"
                                ? "border-white/10 bg-[#101010]"
                                : "border-black/8 bg-[#f7f7f5]"
                        }`}
                    >
                        <div
                            className={`absolute top-0 left-0 right-0 h-8 border-b flex items-center px-3 gap-1.5 ${
                                theme === "dark"
                                    ? "border-white/10 bg-white/[0.025]"
                                    : "border-black/8 bg-white/70"
                            }`}
                        >
                            <span className="w-2 h-2 rounded-full bg-red-400/70" />
                            <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                            <span className="w-2 h-2 rounded-full bg-green-400/70" />
                        </div>

                        <div className="absolute inset-x-0 top-8 bottom-0">
                            <img
                                src={dwarpalaScreenshot}
                                alt="Braid — Git Commit Graph Explorer screenshot"
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
