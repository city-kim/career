"use client";

import { BriefcaseBusiness, Code2, Home, Mail, Moon, Sun, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "처음", icon: Home },
  { id: "about", label: "소개", icon: UserRound },
  { id: "work", label: "작업", icon: BriefcaseBusiness },
  { id: "stack", label: "기술", icon: Code2 },
  { id: "contact", label: "연락", icon: Mail },
];

export function PortfolioNavigation() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55%", threshold: [0.1, 0.4, 0.7] },
    );
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-3.5 left-1/2 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 sm:bottom-auto sm:top-6 sm:w-auto" aria-label="페이지 섹션">
      <div className="flex items-center justify-between gap-1.5 rounded-2xl border border-line bg-elevated/85 p-2.5 shadow-dock backdrop-blur-lg sm:rounded-[18px]">
        {navItems.map(({ id, label, icon: Icon }) => (
          <a key={id} href={`#${id}`} className={`grid size-10 place-items-center rounded-xl transition hover:-translate-y-0.5 hover:bg-surface-hover hover:text-foreground sm:size-[42px] ${active === id ? "bg-gradient-to-br from-[#7048ff] to-[#a955ff] text-white shadow-active" : "text-faint"}`} aria-label={`${label} 섹션으로 이동`} title={label}>
            <Icon size={18} strokeWidth={1.8} />
          </a>
        ))}
        <span className="mx-0.5 h-6 w-px bg-line" aria-hidden="true" />
        <button type="button" className="grid size-10 cursor-pointer place-items-center rounded-xl text-faint transition hover:-translate-y-0.5 hover:bg-surface-hover hover:text-foreground sm:size-[42px]" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "밝은 테마로 전환" : "어두운 테마로 전환"} title="테마 전환">
          {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}
