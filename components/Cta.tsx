import { getProduct, productUrl } from "@/lib/site";

// Funnel card shown on every article — the article gives the how-to for free,
// this offers the matching done-for-you product (chosen per-article).
export default function Cta({ campaign, product }: { campaign: string; product?: string }) {
  const p = getProduct(product);
  return (
    <aside className="cta">
      <p className="cta-kicker">Skip the setup</p>
      <h3 className="cta-title">{p.name}</h3>
      <p className="cta-desc">
        {p.tagline}. Get it done in minutes instead of building from scratch.
      </p>
      <a className="cta-btn" href={productUrl(p, campaign)}>
        Get it for {p.price} →
      </a>
    </aside>
  );
}
