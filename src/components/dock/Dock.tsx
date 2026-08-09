import { useRef } from "react";
import { DockIcon } from "./DockIcon";
import { DOCK_ITEMS } from "@/data/dockItems";
import type { DockItem, Theme } from "@/types";

export function Dock({
  theme,
  onItemClick,
}: {
  theme: Theme;
  onItemClick: (item: DockItem) => void;
}) {
  const dockRef = useRef<HTMLDivElement>(null);
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-3.5 md:pb-[22px] px-2.5">
      <div
        ref={dockRef}
        className={`pointer-events-auto flex items-center gap-1.5 md:gap-[7px] px-2 md:px-2.5 py-2 md:py-[9px] rounded-[18px] md:rounded-[20px] border backdrop-blur-[22px] shadow-[0_12px_32px_rgba(0,0,0,0.13),0_2px_6px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] max-w-[95vw] overflow-visible transition-colors ${
          theme === "dark"
            ? "bg-[#1D1D1F]/85 border-[#2C2C2E] shadow-[0_12px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-[rgba(252,252,252,0.92)] border-[rgba(230,230,230,0.9)]"
        }`}
      >
        <div className="flex items-center gap-1.5 md:gap-[7px]">
          {DOCK_ITEMS.slice(0, 4).map((item) => (
            <DockIcon
              key={item.id}
              item={item}
              onClick={() => onItemClick(item)}
            />
          ))}
        </div>

        <div
          className={`w-px h-[26px] md:h-7 mx-0.5 md:mx-1 shrink-0 ${
            theme === "dark" ? "bg-white/12" : "bg-black/8"
          }`}
        />

        <div className="flex items-center gap-1.5 md:gap-[7px]">
          {DOCK_ITEMS.slice(4, 8).map((item) => (
            <DockIcon
              key={item.id}
              item={item}
              onClick={() => onItemClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
