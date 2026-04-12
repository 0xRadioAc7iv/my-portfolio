import { ArrowUpRight } from "lucide-react";
import { OtherAccordion } from "./components/other-accordion";
import { ProjectsAccordion } from "./components/projects-accordion";
import { TechStackSection } from "./components/tech-stack-section";

const PROJECTS = {
  "Systems & Infra": [
    {
      name: "Authoritative Game Server",
      repo: "game-server",
      description:
        "Tick-based multiplayer server in Go exploring UDP networking, simulation loops, and server-owned game state.",
      tags: ["Go", "Realtime", "UDP"],
      link: "https://github.com/0xRadioAc7iv/game-server",
    },
    {
      name: "Load Balancer",
      repo: "load-balancer-nodejs",
      description:
        "Layer 7 reverse proxy with balancing strategies, response caching, rate limiting, and active health checks.",
      tags: ["Node.js", "Infra", "Networking"],
      link: "https://github.com/0xRadioAc7iv/load-balancer-nodejs",
    },
  ],
  "Protocols & Storage": [
    {
      name: "Bitcask",
      repo: "go-bitcask",
      description:
        "Go implementation of the Bitcask engine with append-only storage, compaction, and crash-aware persistence.",
      tags: ["Go", "Storage"],
      link: "https://github.com/0xRadioAc7iv/go-bitcask",
      goPkg: "https://pkg.go.dev/github.com/0xRadioAc7iv/go-bitcask/bitcask",
    },
    {
      name: "Write-Ahead Log",
      repo: "wal",
      description:
        "WAL implementation in Go built to understand durability guarantees, sequential writes, and recovery paths.",
      tags: ["Go", "Durability"],
      link: "https://github.com/0xRadioAc7iv/wal",
    },
    {
      name: "TOTP Service",
      repo: "totp-service",
      description:
        "Standalone 2FA service implementing RFC 6238 with AWS KMS envelope encryption and replay protection.",
      tags: ["Go", "Security", "RFC 6238"],
      link: "https://github.com/0xRadioAc7iv/totp-service",
    },
  ],
  Products: [
    {
      name: "ZeroDeploy",
      repo: "zerodeploy",
      description:
        "Experimental deployment platform with a fetch-build-store pipeline for Vite apps.",
      tags: ["TypeScript", "Platform"],
      link: "https://github.com/0xRadioAc7iv/zerodeploy",
    },
    {
      name: "SolRPC",
      repo: "solrpc",
      description:
        "RPC aggregator for Solana nodes focused on request routing, reliability, and a smoother developer surface.",
      tags: ["Node.js", "Solana"],
      link: "https://github.com/0xRadioAc7iv/solrpc",
      website: "https://solrpc.vercel.app/",
    },
  ],
  Libraries: [
    {
      name: "Rate Limiter",
      repo: "rate-limiter",
      description:
        "Fixed-window rate limiting library for Express, Fastify, and NestJS with multiple backing stores.",
      tags: ["Node.js", "OSS"],
      link: "https://github.com/0xRadioAc7iv/rate-limiter",
      npm: "https://www.npmjs.com/package/@radioac7iv/rate-limiter",
      website: "https://rate-limiter.0xradioactiv.xyz/",
    },
  ],
};

const PROJECT_CATEGORY_COPY: Record<string, string> = {
  "Systems & Infra":
    "Low-level experiments where latency, ownership, and reliability matter.",
  "Protocols & Storage":
    "Projects built to understand persistence, auth guarantees, and the parts usually hidden behind abstractions.",
  Products:
    "Developer-facing tools and product ideas pushed far enough to feel real.",
  Libraries:
    "Smaller reusable pieces solving one problem cleanly without extra ceremony.",
};

const EXPERIENCE = [
  {
    company: "SendIN",
    role: "Full Stack Developer",
    period: "Jul 2025 – Present",
    link: "https://sendin.app",
    description:
      "Building across React/TanStack, NestJS, Stellar wallet flows, Redis-backed caching, AWS messaging, and CI/CD.",
  },
  {
    company: "Predictify",
    role: "Freelancer",
    period: "Jun 2025 – Oct 2025",
    link: "https://t.me/Predictify_bot",
    description:
      "Shipped a Telegram trading bot for Polymarket with real-time orders, copy trading, stop-loss / take-profit logic, and multilingual support.",
  },
];

const SNAPSHOT = [
  { label: "Current", value: "SendIN" },
  { label: "Focus", value: "Systems, infra, auth" },
  { label: "Approach", value: "Clean + performance-aware" },
  { label: "Outside code", value: "Cricket, Games and Astronomy" },
];

async function getStarMap(): Promise<Record<string, number>> {
  try {
    const response = await fetch(
      "https://api.github.com/users/0xRadioAc7iv/repos?per_page=100",
      { next: { revalidate: 3600 } },
    );
    if (!response.ok) return {};
    const repos: Array<{ name: string; stargazers_count: number }> =
      await response.json();
    return Object.fromEntries(
      repos.map((repo) => [repo.name.toLowerCase(), repo.stargazers_count]),
    );
  } catch {
    return {};
  }
}

export default async function Page() {
  const stars = await getStarMap();

  return (
    <div id="top" className="page-shell animate-fade-up">
      <section id="about">
        <div className="hero-body">
          <div className="hero-bio flex flex-col gap-2">
            <p className="hero-copy">
              I&apos;m a backend engineer who likes to understand how things
              work at a low level: game servers, protocols, storage engines,
              distributed systems. When something catches my curiosity, I build
              it to figure it out.
            </p>
            <p className="hero-copy">
              I care about performance and correctness. Not prematurely, but
              deliberately. Systems that are easy to reason about and hard to
              break.
            </p>
          </div>
          <div className="hero-snapshot">
            <div className="info-list">
              {SNAPSHOT.map((item) => (
                <div key={item.label} className="info-row">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-stack">
          <p className="section-kicker shrink-0">Core stack</p>
          <TechStackSection />
        </div>
      </section>

      <section id="experience" className="section-zone">
        <div className="section-header">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Where I shipped product work.</h2>
          </div>
          <p className="section-copy">
            Startup and freelance work spanning product, backend,
            infrastructure, and real delivery pressure.
          </p>
        </div>

        <div className="panel">
          {EXPERIENCE.map((entry, index) => (
            <article
              key={entry.company}
              className={`row-hover px-5 py-5 sm:px-6 ${
                index !== EXPERIENCE.length - 1
                  ? "border-b border-[color:var(--line)]"
                  : ""
              }`}
            >
              <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-lg font-semibold tracking-[-0.04em] text-[color:var(--ink)] transition-opacity duration-200 hover:opacity-60"
                    >
                      {entry.company}
                      <ArrowUpRight size={14} strokeWidth={1.75} />
                    </a>
                    <span className="border border-[color:var(--line)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      {entry.role}
                    </span>
                  </div>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[color:var(--muted)]">
                    {entry.description}
                  </p>
                </div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[color:var(--muted)] md:text-right">
                  {entry.period}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-zone">
        <div className="section-header">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">
              Projects that reflect how I think.
            </h2>
          </div>
          <p className="section-copy">
            Systems-level experiments, developer tools, and products pushed far
            enough to feel real.
          </p>
        </div>

        <ProjectsAccordion
          projects={PROJECTS}
          stars={stars}
          descriptions={PROJECT_CATEGORY_COPY}
        />
      </section>

      <section id="offline" className="section-zone">
        <div className="section-header">
          <div>
            <p className="section-kicker">Offline</p>
            <h2 className="section-title">What I do outside of work.</h2>
          </div>
          <p className="section-copy">
            The things I reach for when I&apos;m not building.
          </p>
        </div>

        <OtherAccordion />
      </section>
    </div>
  );
}
