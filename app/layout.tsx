import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Manav Gadhiya",
  description: "Manav Gadhiya's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex p-10">
        <div className="w-full">
          <Sidebar />
        </div>
        {children}
      </body>
    </html>
  );
}
