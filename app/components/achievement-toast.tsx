"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function AchievementToast({
  visible,
  emoji,
  text,
}: {
  visible: boolean;
  emoji: string;
  text: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      className="achievement-toast fixed top-6 z-50 flex items-center gap-4 px-5 py-4 rounded-lg border border-indigo-500/30 bg-[#0e0e1a]/90 backdrop-blur-sm shadow-xl transition-all duration-500 whitespace-nowrap"
      style={{
        opacity: visible ? 1 : 0,
        ["--toast-ty" as string]: visible ? "0px" : "-12px",
        pointerEvents: "none",
      }}
    >
      <span className="text-2xl">{emoji}</span>
      <div className="flex flex-col gap-0.5">
        <span className="font-mono text-xs uppercase tracking-widest text-indigo-400">
          Achievement Unlocked
        </span>
        <span className="font-mono text-sm text-[#e4e4f0]">{text}</span>
      </div>
    </div>,
    document.body,
  );
}
