"use client";

import { useEffect, useRef, useState } from "react";
import { AchievementToast } from "./achievement-toast";

const GAMES = [
  { name: "Sleeping Dogs: Definitive Edition", appId: "307690" },
  { name: "Far Cry 3", appId: "220240" },
  { name: "Battlefield 1", appId: "1238840" },
  { name: "Detroit: Become Human", appId: "1222140" },
  { name: "Just Cause 3", appId: "225540" },
];

const BLENDER_IMAGES = [
  "/blender/render-1.png",
  "/blender/render-2.jpg",
  "/blender/render-3.jpg",
  "/blender/render-4.jpg",
];

const TABS = ["Gaming", "Blender"] as const;
type Tab = (typeof TABS)[number];

export function OtherAccordion() {
  const [active, setActive] = useState<Tab>("Gaming");
  const [expandedBlenderImage, setExpandedBlenderImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [blenderToastVisible, setBlenderToastVisible] = useState(false);

  const handleBlenderImageClick = (index: number, src: string, alt: string) => {
    setExpandedBlenderImage({ src, alt });
    const seen = JSON.parse(
      localStorage.getItem("blender_seen") ?? "[]",
    ) as number[];
    if (!seen.includes(index)) {
      localStorage.setItem("blender_seen", JSON.stringify([...seen, index]));
    }
  };

  const blenderDialogRef = useRef<HTMLDialogElement | null>(null);
  const blenderDialogCloseTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [isBlenderDialogVisible, setIsBlenderDialogVisible] = useState(false);

  useEffect(() => {
    return () => {
      if (blenderDialogCloseTimeoutRef.current) {
        clearTimeout(blenderDialogCloseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const dialog = blenderDialogRef.current;
    if (!dialog) return;
    if (expandedBlenderImage && !dialog.open) {
      dialog.showModal();
      requestAnimationFrame(() => setIsBlenderDialogVisible(true));
    }
  }, [expandedBlenderImage]);

  const closeBlenderDialog = () => {
    const dialog = blenderDialogRef.current;
    if (!dialog?.open) return;

    setIsBlenderDialogVisible(false);

    const seen = JSON.parse(
      localStorage.getItem("blender_seen") ?? "[]",
    ) as number[];
    if (
      seen.length >= BLENDER_IMAGES.length &&
      !localStorage.getItem("achievement_blender")
    ) {
      localStorage.setItem("achievement_blender", "1");
      setBlenderToastVisible(true);
      setTimeout(() => setBlenderToastVisible(false), 3500);
    }

    if (blenderDialogCloseTimeoutRef.current) {
      clearTimeout(blenderDialogCloseTimeoutRef.current);
    }
    blenderDialogCloseTimeoutRef.current = setTimeout(() => {
      blenderDialogCloseTimeoutRef.current = null;
      if (dialog.open) dialog.close();
    }, 220);
  };

  return (
    <>
      <AchievementToast
        visible={blenderToastVisible}
        emoji="🎨"
        text="Unsolicited Art Critic"
      />

      {/* Tabs */}
      <div className="flex items-center gap-1.5 flex-wrap mb-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-all duration-200 ${
              active === tab
                ? "border-indigo-500/50 text-white bg-indigo-500/10"
                : "border-white/10 text-[#8888a8] hover:text-white/80 hover:border-white/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        key={active}
        className="rounded-2xl border border-white/[0.07] bg-[#0d0d1a] overflow-hidden px-5 py-4 animate-fade-up"
      >
        {active === "Gaming" && (
          <>
            <div className="flex gap-3 overflow-x-auto pb-3">
              {GAMES.map((game) => (
                <a
                  key={game.appId}
                  href={`https://store.steampowered.com/app/${game.appId}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${game.name} on Steam`}
                  className="shrink-0 aspect-[2/3] w-[106px] overflow-hidden rounded-xl border border-white/10 bg-[#11111c] transition-all duration-200 ease-out hover:border-indigo-500/40 hover:shadow-[0_0_0_1px_rgba(129,140,248,0.18),0_0_18px_rgba(99,102,241,0.14)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appId}/library_600x900.jpg`}
                    alt={game.name}
                    loading="lazy"
                    className="block w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
            <a
              href="https://steamcommunity.com/id/radioac7iv/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#8888a8] hover:text-white transition-colors duration-200 inline-block"
            >
              My Steam Profile
            </a>
          </>
        )}

        {active === "Blender" && (
          <>
            <div className="grid grid-cols-4 gap-2">
              {BLENDER_IMAGES.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() =>
                    handleBlenderImageClick(i, src, `Blender render ${i + 1}`)
                  }
                  className="aspect-square rounded-xl overflow-hidden border border-[#1c1c2e] bg-[#11111c] cursor-pointer transition-all duration-200 ease-out hover:scale-[1.04] hover:-translate-y-1 hover:border-[#28283e] hover:shadow-[0_10px_28px_rgba(0,0,0,0.65)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Blender render ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <dialog
        ref={blenderDialogRef}
        className={`blender-preview-dialog${isBlenderDialogVisible ? " blender-preview-dialog-open" : ""}`}
        onCancel={(e) => {
          e.preventDefault();
          closeBlenderDialog();
        }}
        onClose={() => {
          setIsBlenderDialogVisible(false);
          setExpandedBlenderImage(null);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeBlenderDialog();
        }}
      >
        {expandedBlenderImage && (
          <div className="blender-preview-dialog-content relative mx-auto flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={expandedBlenderImage.src}
              alt={expandedBlenderImage.alt}
              className="max-h-[85vh] max-w-[92vw] object-contain"
            />
          </div>
        )}
      </dialog>
    </>
  );
}
