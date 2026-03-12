"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "aruba-site-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-7 items-center gap-1 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-soft)] px-2 text-[11px] font-medium text-[color:var(--foreground)] shadow-sm hover:border-[color:var(--accent-strong)]"
      aria-label="Cambiar tema claro/oscuro"
    >
      <span
        aria-hidden
        className="flex h-4 w-4 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[10px]"
      >
        {isDark ? "🌙" : "☀️"}
      </span>
      <span>{isDark ? "Oscuro" : "Claro"}</span>
    </button>
  );
}

