import type { Metadata } from "next";
import Link from "next/link";
import { site, getProduct } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Notion for Students`, template: `%s — ${site.name}` },
  description: site.tagline,
  openGraph: { title: site.name, description: site.tagline, url: site.url, type: "website" },
  verification: { google: "zJMpsLKLXAJ39o1_pKxRbIXwJDjSy51EBb36NfYsc7U" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">{site.name}</Link>
          <span className="brand-tag">Notion guides for students</span>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <p>
            {site.name} — free guides for students.{" "}
            <a href={getProduct().url}>{getProduct().name}</a>
          </p>
          <p className="footer-legal">
            <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> ·{" "}
            <a href="/disclaimer/">Disclaimer</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
