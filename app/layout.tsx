import "./global.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "./components/nav";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://0xradioactiv.xyz"),
  title: {
    default: "Manav Gadhiya",
    template: "%s | Manav Gadhiya",
  },
  description:
    "Backend engineer building reliable systems, infrastructure experiments, and thoughtful product experiences.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-[color:var(--line)] mt-16">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Manav Gadhiya · {new Date().getFullYear()}
            </span>
            <div className="flex items-center gap-5">
              {[
                { label: "Twitter / X", href: "https://x.com/radioac7iv" },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/manavgadhiya",
                },
                { label: "Email", href: "mailto:manav18gadhiya@gmail.com" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] transition-colors duration-200 hover:text-[color:var(--ink)]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
