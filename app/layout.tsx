import "./global.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "./components/nav";
import { Bangers } from "next/font/google";

const bangersFont = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

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
    "Backend engineer building scalable, high-performance systems. 7x hackathon winner.",
  openGraph: {
    title: "Manav Gadhiya",
    description: "Backend Engineer",
    url: "https://0xradioactiv.xyz",
    siteName: "Manav Gadhiya",
    locale: "en_US",
    type: "website",
  },
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
    <html lang="en" className={bangersFont.variable}>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
