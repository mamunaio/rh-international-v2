"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState, useEffect } from "react";

const options = [
  { value: "light" as const, icon: Sun, label: "Light" },
  { value: "dark" as const, icon: Moon, label: "Dark" },
  { value: "system" as const, icon: Monitor, label: "System" },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed bottom-6 left-6 z-50 flex items-center gap-1 p-1.5 rounded-2xl bg-background/80 backdrop-blur-2xl border border-border/50 h-[46px] w-[114px]" />;
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-1 p-1.5 rounded-2xl bg-background/80 backdrop-blur-2xl border border-border/50 shadow-xl hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-shadow duration-300">
      {options.map((opt) => {
        const Icon = opt.icon;
        const active = theme === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => setTheme(opt.value)}
            title={opt.label}
            className={`p-2 rounded-xl transition-all duration-200 ${
              active
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            <Icon className="w-4 h-4" />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
