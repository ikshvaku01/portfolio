export function AboutView({ theme }: { theme: import("@/types").Theme }) {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-[132px] pb-[150px] animate-[in_.35s_both]">
      <div className="w-full max-w-[500px]">
        <p className="text-[16px] leading-[1.6] font-[450] tracking-[-0.01em]">
          Hi, I'm Yash.
        </p>
        <div className="mt-[18px] space-y-[22px] text-[16px] leading-[1.58] tracking-[-0.01em] font-[400]">
          <p>
            I'm a software engineer with two years of experience building
            production-grade backend systems, enterprise web applications, and
            developer platforms.
          </p>
          <p>
            I work with Java, Spring Boot, TypeScript, Next.js, PostgreSQL,
            Redis, Docker, REST APIs, and Linux. My work spans software
            architecture, database optimisation, secure authorization, and
            cloud-ready enterprise applications.
          </p>
          <p className="relative pl-[14px]">
            <span className="absolute left-0 top-[10px] w-[6px] h-[6px] rounded-full bg-black dark:bg-white" />
             Currently working at CSIR - Traditional Knowledge Digital Library Unit.
          </p>
          <p className="relative pl-[14px]">
            <span className="absolute left-0 top-[10px] w-[6px] h-[6px] rounded-full bg-black dark:bg-white" />
            Open to remote opportunities and thoughtful engineering problems.
          </p>
          <p className="relative pl-[14px]">
            <span className="absolute left-0 top-[2px] text-[10px] text-black dark:text-white">★</span>
            Improved backend performance by 20% through PostgreSQL, Redis, and API tuning.
          </p>

          <p className="relative pl-[14px]">
            <span className="absolute left-0 top-[2px] text-[10px] text-black dark:text-white">★</span>
            Built an Excel ingestion pipeline that reduced data-entry errors by 30%.
          </p>

          <p className="relative pl-[14px]">
            <span className="absolute left-0 top-[2px] text-[10px] text-black dark:text-white">★</span>
            Standardised Docker deployments to improve deployment consistency.
          </p>

          <p>Based in 📍 New Delhi, India.</p>
          <div className="mt-3.5 flex flex-wrap gap-3.5 text-[14px]">
            <a
              href="https://github.com/ikshvaku01"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-[6px] hover:opacity-60 transition-opacity ${
                theme === "dark" ? "text-white/70" : "text-black/55"
              }`}
            >
              <span className="opacity-70">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.8 4.2L2.9 11.5c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 11.3-7.1c.5-.3 1-.1.6.2l-9.2 8.3-.3 4.8c.4 0 .6-.2.8-.4l2-1.9 4.1 3c.8.4 1.3.2 1.5-.7l2.7-12.8c.3-1.2-.4-1.7-1.3-1.4z" />
                </svg>
              </span>
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yash-singh-bajetha"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-[6px] hover:opacity-60 transition-opacity ${
                theme === "dark" ? "text-white/70" : "text-black/55"
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <path d="M6 8.5V17M6 6.5v.5M10 17v-4.2c0-1.1.9-2 2-2s2 .9 2 2V17" />
              </svg>
              LinkedIn
            </a>

            <a
              href="mailto:yashsingh1318@gmail.com"
              className={`inline-flex items-center gap-[6px] hover:opacity-60 transition-opacity ${
                theme === "dark" ? "text-white/70" : "text-black/55"
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="2" y="4" width="20" height="16" rx="1.5" />
                <path d="M2 6l10 7L22 6" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
