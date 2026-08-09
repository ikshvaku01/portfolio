import { useState } from "react";
import type { DockItem } from "@/types";

export function DockIcon({
  item,
  onClick,
}: {
  item: DockItem;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-[7px] text-[11px] font-[550] whitespace-nowrap pointer-events-none z-20 shadow-[0_4px_12px_rgba(0,0,0,0.12)] bg-[#1A1A1A] text-white">
          {item.label}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-[#1A1A1A] rotate-45" />
        </div>
      )}
      <button
        onClick={onClick}
        aria-label={item.label}
        className="relative w-11 h-11 md:w-[46px] md:h-[46px] rounded-xl flex items-center justify-center cursor-pointer select-none will-change-transform transition-[transform,box-shadow,filter] duration-130 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-0.5 hover:scale-[1.04] hover:brightness-[1.02] active:translate-y-0 active:scale-[0.97]"
        style={{
          background: item.color,
          color: item.fg,
          boxShadow:
            item.id === "email"
              ? "0 1px 2px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.9)"
              : "0 1px 2px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06)",
        }}
      >
        <span className="drop-shadow-[0_0.5px_0_rgba(0,0,0,0.12)] flex items-center justify-center">
          {item.content}
        </span>
      </button>
    </div>
  );
}
