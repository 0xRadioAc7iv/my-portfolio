"use client";

import { useState, useRef } from "react";
import { AchievementToast } from "./achievement-toast";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&~";

const NAV_SOCIALS = [
  { label: "X", href: "https://x.com/radioac7iv" },
  { label: "GitHub", href: "https://github.com/0xRadioAc7iv" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manavgadhiya" },
  { label: "Email", href: "mailto:manav18gadhiya@gmail.com" },
  { label: "Resume", href: "/my_resume.pdf" },
];

const TEXT_DEFAULT = "radioac7iv";
const TEXT_HOVER = "manav gadhiya";

function ScrambleName({ onFirstReveal }: { onFirstReveal: () => void }) {
  const [displayed, setDisplayed] = useState(TEXT_DEFAULT);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrambleTo = (target: string) => {
    if (frameRef.current) clearInterval(frameRef.current);

    const indices = target
      .split("")
      .map((_, i) => i)
      .filter((i) => target[i] !== " ")
      .sort(() => Math.random() - 0.5);

    const resolved = new Set<number>();
    let step = 0;
    const revealPerTick = Math.max(1, Math.ceil(indices.length / 12));

    frameRef.current = setInterval(() => {
      for (let k = 0; k < revealPerTick; k++) {
        if (step < indices.length) resolved.add(indices[step++]);
      }
      setDisplayed(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (resolved.has(i)) return target[i];
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join(""),
      );
      if (resolved.size >= indices.length) {
        clearInterval(frameRef.current!);
        setDisplayed(target);
        if (
          target === TEXT_HOVER &&
          !localStorage.getItem("achievement_revealed")
        ) {
          localStorage.setItem("achievement_revealed", "1");
          onFirstReveal();
        }
      }
    }, 40);
  };

  return (
    <span
      onMouseEnter={() => scrambleTo(TEXT_HOVER)}
      onMouseLeave={() => scrambleTo(TEXT_DEFAULT)}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {displayed}
    </span>
  );
}

export default function Nav() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleFirstReveal = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  return (
    <>
      <AchievementToast
        visible={toastVisible}
        emoji="🏆"
        text="Too Curious For Your Own Good"
      />
      <div className="flex flex-col items-center pt-16 pb-8 gap-5">
        <p
          className="font-mono text-4xl sm:text-5xl tracking-widest uppercase text-center hover:cursor-pointer"
          style={{ color: "var(--text-1)" }}
        >
          <ScrambleName onFirstReveal={handleFirstReveal} />
        </p>

        <div className="flex items-center gap-5 flex-wrap justify-center">
          {NAV_SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={
                href.startsWith("mailto:") || href.startsWith("/")
                  ? undefined
                  : "_blank"
              }
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-[#8888a8] hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
