"use client";

import ThemeToggle from "./theme-toggle";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Offline", href: "/#offline" },
];

const ACTION_LINKS = [
  { label: "Blogs", href: "https://radioactiv.hashnode.dev/" },
  { label: "GitHub", href: "https://github.com/0xRadioAc7iv" },
  { label: "Resume", href: "/my_resume.pdf" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--nav-bg)] backdrop-blur-[18px]">
      <div className="mx-auto max-w-6xl">
        <div className="md:hidden">
          <a href="/" className="flex justify-center items-center py-4 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.png"
              alt="Manav Gadhiya"
              className="h-10 w-10 object-cover"
            />
            <div>
              <p className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
                Manav Gadhiya
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                Backend engineer
              </p>
            </div>
          </a>

          <div className="flex border-t border-[color:var(--line)]">
            {ACTION_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border-r border-[color:var(--line)] py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-soft)] transition-all duration-150 hover:bg-[color:var(--hover-bg)] hover:text-[color:var(--ink)]"
              >
                {label}
              </a>
            ))}
            <ThemeToggle className="flex-1 flex items-center justify-center py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-soft)] transition-all duration-150 hover:bg-[color:var(--hover-bg)] hover:text-[color:var(--ink)]" />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between px-6 py-0">
          <a href="/" className="flex items-center self-stretch">
            <div className="flex h-full items-center border-r border-[color:var(--line)] pr-4 mr-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.png"
                alt="Manav Gadhiya"
                className="h-9 w-9 object-cover"
              />
            </div>
            <div className="py-3">
              <p className="text-sm font-medium tracking-[-0.03em] text-[color:var(--ink)]">
                Manav Gadhiya
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                Backend engineer
              </p>
            </div>
          </a>

          <div className="flex items-center">
            <nav className="flex items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border-l border-[color:var(--line)] px-4 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] transition-colors duration-150 hover:bg-[color:var(--hover-bg)] hover:text-[color:var(--ink)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center border-l border-[color:var(--line)]">
              {ACTION_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-r border-[color:var(--line)] px-4 py-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-soft)] transition-all duration-150 hover:bg-[color:var(--hover-bg)] hover:text-[color:var(--ink)]"
                >
                  {label}
                </a>
              ))}
              <ThemeToggle className="border-r border-[color:var(--line)] px-4 py-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-soft)] transition-all duration-150 hover:bg-[color:var(--hover-bg)] hover:text-[color:var(--ink)]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
