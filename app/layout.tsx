import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Notion for Students`, template: `%s — ${site.name}` },
  description: site.tagline,
  openGraph: { title: site.name, description: site.tagline, url: site.url, type: "website" },
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
            {site.name} — free Notion guides for students.{" "}
            <a href={site.product.url}>{site.product.name}</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
