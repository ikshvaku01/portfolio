import { useState } from "react";
import { Dock } from "@/components/dock/Dock";
import { TopBar } from "@/components/layout/TopBar";
import { HomeView } from "@/components/views/HomeView";
import { AboutView } from "@/components/views/AboutView";
import { ExperienceView } from "@/components/views/ExperienceView";
import { SkillsView } from "@/components/views/SkillsView";
import { LinksView } from "@/components/views/LinksView";
import { ProjectsView } from "@/components/views/ProjectsView";
import { useTheme } from "@/hooks/useTheme";
import type { DockItem, View } from "@/types";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [view, setView] = useState<View>("home");

  const goHome = () => setView("home");

  const handleDockClick = (item: DockItem) => {
    // @ts-ignore
    if (navigator.vibrate) navigator.vibrate(10);
    if (item.external && item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }
    if (item.view) {
      setView(item.view);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
      <div
          className={`min-h-dvh w-full antialiased selection:bg-black/10 transition-colors duration-300 flex flex-col ${
              theme === "dark" ? "bg-[#0d0d0d] text-[#eeeeee]" : "bg-[#eeeeee] text-[#111]"
          }`}
          style={{ fontFamily: "Inter, ui-sans-system, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}
      >
        <TopBar theme={theme} view={view} onToggleTheme={toggleTheme} onToggleAbout={() => setView(view === "home" ? "about" : "home")} />

        <main className="flex-1 flex flex-col relative">
          {view === "home" && <HomeView theme={theme} />}
          {view === "about" && <AboutView theme={theme} />}
          {view === "experience" && <ExperienceView theme={theme} onBack={goHome} />}
          {view === "skills" && <SkillsView theme={theme} onBack={goHome} />}
          {view === "links" && <LinksView theme={theme} onBack={goHome} />}
          {view === "projects" && <ProjectsView theme={theme} onBack={goHome} />}
        </main>

        <Dock theme={theme} onItemClick={handleDockClick} />

        <style>{`
        @keyframes in {
          from { opacity:0; transform: translateY(8px); }
          to { opacity:1; transform: translateY(0); }
        }
      `}</style>
      </div>
  );
}