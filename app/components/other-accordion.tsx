"use client";

import { ArrowUpRight, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GAMES = [
  {
    name: "Sleeping Dogs",
    note: "Hong Kong never gets old.",
    appId: "307690",
  },
  {
    name: "Far Cry 3",
    note: "Still the best in the series.",
    appId: "220240",
  },
  {
    name: "Battlefield 1",
    note: "Nothing matches the scale.",
    appId: "1238840",
  },
  {
    name: "Just Cause 3",
    note: "Explosions as a mechanic.",
    appId: "225540",
  },
  {
    name: "Assassin's Creed II",
    note: "Renaissance Italy done right.",
    appId: "33230",
  },
  {
    name: "Grand Theft Auto 4",
    note: "Niko Bellic's story is peak.",
    appId: "12210",
  },
  {
    name: "Portal",
    note: "The cake was a lie.",
    appId: "400",
  },
  {
    name: "Detroit: Become Human",
    note: "Every choice feels heavy.",
    appId: "1222140",
  },
];

const BLENDER_ITEMS = [
  {
    image: "/blender/render-1.png",
    desc: "Very Tasty",
  },
  {
    image: "/blender/render-2.jpg",
    desc: "Sus",
  },
  {
    image: "/blender/render-3.jpg",
    desc: "Realism",
  },
  {
    image: "/blender/render-4.jpg",
    desc: "PS",
  },
];

export function OtherAccordion() {
  const [expandedBlenderImage, setExpandedBlenderImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isBlenderDialogVisible, setIsBlenderDialogVisible] = useState(false);
  const blenderDialogRef = useRef<HTMLDialogElement | null>(null);
  const blenderDialogCloseTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

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
    if (blenderDialogCloseTimeoutRef.current) {
      clearTimeout(blenderDialogCloseTimeoutRef.current);
    }
    blenderDialogCloseTimeoutRef.current = setTimeout(() => {
      blenderDialogCloseTimeoutRef.current = null;
      if (dialog.open) dialog.close();
    }, 200);
  };

  return (
    <>
      <div className="panel overflow-hidden">
        <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <section className="border-b border-[color:var(--line)] p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="flex items-end justify-between gap-4 mb-5">
              <div>
                <p className="section-kicker">Games</p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.045em] text-[color:var(--ink)] sm:text-2xl">
                  My top favourites.
                </h3>
              </div>
              <a
                href="https://steamcommunity.com/id/radioac7iv/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary shrink-0"
              >
                Steam <ArrowUpRight size={14} strokeWidth={1.75} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {GAMES.map((game) => (
                <a
                  key={game.appId}
                  href={`https://store.steampowered.com/app/${game.appId}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[2/3] overflow-hidden border border-[color:var(--line)] bg-black transition-transform duration-200 hover:-translate-y-1"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appId}/library_600x900.jpg`}
                    alt={game.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/5" />
                  <div className="absolute inset-x-0 bottom-0 p-2.5 text-white">
                    <h4 className="text-[11px] font-semibold leading-tight tracking-[-0.02em]">
                      {game.name}
                    </h4>
                    <p className="mt-0.5 text-[10px] text-white/60">
                      {game.note}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="p-5 sm:p-6 space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="section-kicker">3D work</p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.045em] text-[color:var(--ink)] sm:text-2xl">
                  Blender renders I made.
                </h3>
              </div>
              <a
                href="https://www.artstation.com/manavgadhiya"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary shrink-0"
              >
                ArtStation <ArrowUpRight size={14} strokeWidth={1.75} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {BLENDER_ITEMS.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setExpandedBlenderImage({
                      src: item.image,
                      alt: `Blender render ${index + 1}`,
                    })
                  }
                  className="group relative aspect-[1.02] overflow-hidden border border-[color:var(--line)] bg-[color:rgba(10,10,10,0.04)] transition-transform duration-200 hover:-translate-y-1"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={`Blender render ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 text-white">
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/70">
                      {item.desc}
                    </span>
                    <Expand size={13} strokeWidth={1.8} />
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      <dialog
        ref={blenderDialogRef}
        className={`blender-preview-dialog${isBlenderDialogVisible ? " blender-preview-dialog-open" : ""}`}
        onCancel={(event) => {
          event.preventDefault();
          closeBlenderDialog();
        }}
        onClose={() => {
          setIsBlenderDialogVisible(false);
          setExpandedBlenderImage(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeBlenderDialog();
        }}
      >
        {expandedBlenderImage && (
          <img
            src={expandedBlenderImage.src}
            alt={expandedBlenderImage.alt}
            className="max-h-[760px] object-contain"
          />
        )}
      </dialog>
    </>
  );
}
