import { ProjectsAccordion } from "./components/projects-accordion";
import { OtherAccordion } from "./components/other-accordion";
import { DotGrid } from "./components/dot-grid";
import { TechStackSection } from "./components/tech-stack-section";

type Project = {
  name: string;
  repo: string;
  description: string;
  tags: string[];
  link: string;
  website?: string;
  npm?: string;
};

const PROJECTS: Record<string, Project[]> = {
  "Papers / RFCs": [
    {
      name: "Bitcask",
      repo: "bitcask",
      description:
        "Go implementation of the Bitcask key-value storage engine, inspired by Basho's Riak design, featuring append-only storage and compaction.",
      tags: ["Go"],
      link: "https://github.com/0xRadioAc7iv/go-bitcask",
    },
    {
      name: "Write-Ahead Log",
      repo: "wal",
      description:
        "WAL implementation in Go exploring durability guarantees, crash recovery, and sequential disk writes.",
      tags: ["Go"],
      link: "https://github.com/0xRadioAc7iv/wal",
    },
    {
      name: "TOTP Service",
      repo: "totp-service",
      description:
        "Standalone 2FA service implementing RFC 6238 with envelope encryption via AWS KMS and replay protection.",
      tags: ["Go", "RFC 6238"],
      link: "https://github.com/0xRadioAc7iv/totp-service",
    },
  ],
  Libraries: [
    {
      name: "Rate Limiter",
      repo: "rate-limiter",
      description:
        "Fixed-window rate limiting library supporting Express, Fastify, and NestJS with Redis, MongoDB, and in-memory stores.",
      tags: ["Node.js"],
      link: "https://github.com/0xRadioAc7iv/rate-limiter",
      npm: "https://www.npmjs.com/package/@radioac7iv/rate-limiter",
      website: "https://rate-limiter.0xradioactiv.xyz/",
    },
  ],
  "Full-stack": [
    {
      name: "ZeroDeploy",
      repo: "zerodeploy",
      description:
        "Experimental mini deployment platform with a fetch–build–store pipeline capable of deploying Vite applications with project-specific URLs.",
      tags: ["TypeScript", "Experimental"],
      link: "https://github.com/0xRadioAc7iv/zerodeploy",
    },
  ],
  "Systems / Infra": [
    {
      name: "Authoritative Game Server",
      repo: "authoritative-game-server",
      description:
        "Tick-based real-time multiplayer server in Go exploring UDP networking, simulation loops, and server-side state management.",
      tags: ["Go"],
      link: "https://github.com/0xRadioAc7iv/game-server",
    },
    {
      name: "Load Balancer",
      repo: "load-balancer",
      description:
        "Layer 7 reverse proxy implementing multiple load-balancing strategies, rate limiting, response caching, and health checks.",
      tags: ["Go"],
      link: "https://github.com/0xRadioAc7iv/load-balancer-nodejs ",
    },
    {
      name: "SolRPC",
      repo: "solrpc",
      description:
        "RPC aggregator for Solana nodes built during the Breakout Hackathon, focused on request routing and reliability.",
      tags: ["Node.js", "Solana"],
      link: "https://github.com/0xRadioAc7iv/solrpc",
      website: "https://solrpc.vercel.app/",
    },
  ],
};

const EXPERIENCE = [
  {
    company: "SendIN",
    role: "Full Stack Developer",
    period: "Jul 2025 – Present",
    link: "https://sendin.app",
    description:
      "Developed the full platform from scratch — React/TanStack frontend, NestJS backend with Stellar blockchain wallets, Redis caching, AWS (SNS/SQS/Lambda) integrations, and CI/CD pipelines.",
  },
  {
    company: "Predictify",
    role: "Freelancer",
    period: "Jun – Oct 2025",
    link: "https://t.me/Predictify_bot",
    description:
      "Built a high-performance Telegram trading bot for Polymarket supporting 2000+ users — real-time market/limit orders, AutoTrade copy-trading, stop-loss/TP, and multilingual support (EN + ZH).",
  },
];

const MARQUEE_FACTS = [
  "has a Steam backlog that will outlive him (owns every far cry game)",
  "watches every F1 race live (du du du, MAX VERSTAPPEN!!!)",
  "Got an Ace in Valorant while playing at 20 FPS (proudest gaming moment)",
];

async function getStarMap(): Promise<Record<string, number>> {
  try {
    const res = await fetch(
      "https://api.github.com/users/0xRadioAc7iv/repos?per_page=100",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return {};
    const repos: Array<{ name: string; stargazers_count: number }> =
      await res.json();
    return Object.fromEntries(
      repos.map((r) => [r.name.toLowerCase(), r.stargazers_count]),
    );
  } catch {
    return {};
  }
}

export default async function Page() {
  const stars = await getStarMap();

  return (
    <>
      {/* Ambient background */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Dot grid + cursor glow */}
        <DotGrid />
      </div>

      {/* Page content */}
      <div className="relative max-w-2xl mx-auto px-6 py-10 pb-24 space-y-14 animate-fade-up">
        {/* ── Bio ── */}
        <section className="flex flex-col gap-3">
          <p className="text-base text-[#c8c8e0] leading-relaxed">
            I&apos;m a backend engineer who likes to understand how things work
            at a low level: game servers, protocols, storage engines,
            distributed systems. When something catches my curiosity, I build it
            to figure it out.
          </p>
          <p className="text-base text-[#c8c8e0] leading-relaxed">
            I care about performance and correctness. Not prematurely, but
            deliberately. Systems that are easy to reason about and hard to
            break.
          </p>
          <p className="text-base text-[#c8c8e0] leading-relaxed">
            Outside of work: cricket, video games, and reading about astronomy.
          </p>
          <p className="text-sm text-[#c8c8e0]/50 leading-relaxed">
            Oh, and there are a few easter eggs hidden around here. Can you find
            them all?
          </p>
        </section>

        {/* ── Tech Stack ── */}
        <section id="stack">
          <h2 className="bangers text-3xl text-[#f5f5ff] mb-5">Tech Stack</h2>
          <TechStackSection />
        </section>

        {/* ── Experience ── */}
        <section id="experience">
          <h2 className="bangers text-3xl text-[#e4e4f0] mb-5">Experience</h2>
          <div>
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.company}
                className="py-4 border-b border-[#1c1c2e] last:border-0"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#e4e4f0] hover:text-indigo-400 transition-colors duration-200"
                    >
                      {exp.company}
                    </a>
                    <span className="text-xs text-[#8888a8]">{exp.role}</span>
                  </div>
                  <span className="font-mono text-xs text-[#8888a8] shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-[#c8c8e0] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Side Projects ── */}
        <section id="projects">
          <h2 className="bangers text-3xl text-[#e4e4f0] mb-5">
            Side Projects
          </h2>
          <ProjectsAccordion projects={PROJECTS} stars={stars} />
        </section>

        {/* ── Other Stuff ── */}
        <section id="other">
          <h2 className="bangers text-3xl text-[#e4e4f0] mb-5">Other Stuff</h2>
          <OtherAccordion />
        </section>
      </div>

      {/* ── Marquee ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 overflow-hidden border-t border-[#1c1c2e] bg-[#08080e] py-2.5">
        <div className="flex animate-marquee  whitespace-nowrap">
          {[...MARQUEE_FACTS, ...MARQUEE_FACTS].map((fact, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-10 font-mono text-[11px] tracking-widest uppercase"
            >
              <span className="text-indigo-500/50 mr-3">did you know?</span>
              <span className="text-[#8888a8]">{fact}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
