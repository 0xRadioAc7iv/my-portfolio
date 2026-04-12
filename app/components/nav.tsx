"use client";

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
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:rgba(255,255,255,0.76)] backdrop-blur-[18px]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-0">
        <a className="flex items-center gap-0 self-stretch">
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

        <div className="flex flex-wrap items-center gap-0">
          <nav className="hidden items-center md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border-l border-[color:var(--line)] px-4 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] transition-colors duration-150 hover:bg-[color:rgba(0,0,0,0.03)] hover:text-[color:var(--ink)]"
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
                className="border-r border-[color:var(--line)] px-4 py-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-soft)] transition-all duration-150 hover:bg-[color:rgba(0,0,0,0.04)] hover:text-[color:var(--ink)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
