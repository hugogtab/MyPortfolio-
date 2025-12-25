import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aether Portfolio",
  description:
    "A modern portfolio showcasing AI, simulation research, physics notes, and code experiments."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.18),transparent_45%),radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.2),transparent_40%)] dark:bg-[radial-gradient(circle_at_top,_rgba(110,231,255,0.15),transparent_40%),radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_35%)]" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
