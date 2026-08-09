import { useEffect, useState } from "react";
import type { Theme } from "@/types.ts";

const ROLES = [
    "& system architect",
    "& backend specialist",
    "& problem solver",
    "& API craftsman",
    "& system administrator",
];

const INTERVAL_MS = 2600;

export function RoleRotator({ theme }: { theme: Theme }) {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const fadeOutTimer = setInterval(() => {
            setIsVisible(false);
            const swapTimer = setTimeout(() => {
                setIndex((prev) => (prev + 1) % ROLES.length);
                setIsVisible(true);
            }, 280);
            return () => clearTimeout(swapTimer);
        }, INTERVAL_MS);

        return () => clearInterval(fadeOutTimer);
    }, []);

    return (
        <span
            className={`block transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[6px]"
            } ${theme === "dark" ? "text-white/90" : "text-black/90"}`}
        >
      {ROLES[index]}
    </span>
    );
}