import type { ReactNode } from "react";

export type View = "home" | "about" | "experience" | "projects" | "skills" | "links";
export type Theme = "light" | "dark";

export type DockItem = {
    id: string;
    label: string;
    color: string;
    fg: string;
    content: ReactNode;
    external?: boolean;
    href?: string;
    view?: View;
    tone?: string;
};