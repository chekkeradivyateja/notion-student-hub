import Link from "next/link";
import { getAllMeta } from "@/lib/articles";
import { site, productUrl } from "@/lib/site";

export default function Home() {
  const articles = getAllMeta();
  return (
    <>
      <section className="hero">
        <h1>{site.name}</h1>
        <p>{site.tagline}</p>
        <a className="cta-btn" href={productUrl("home")}>
          Get {site.product.name} — {site.product.price} →
        </a>
      </section>

      <section>
        <h2>Guides</h2>
        <ul className="article-list">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link href={`/articles/${a.slug}/`}>{a.title}</Link>
              <p className="muted">{a.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
