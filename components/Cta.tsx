import { site, productUrl } from "@/lib/site";

// Funnel card shown on every article — the article gives the how-to for free,
// this offers the done-for-you template.
export default function Cta({ campaign }: { campaign: string }) {
  return (
    <aside className="cta">
      <p className="cta-kicker">Skip the setup</p>
      <h3 className="cta-title">{site.product.name}</h3>
      <p className="cta-desc">
        {site.product.tagline}. Duplicate it into Notion in minutes instead of
        building from scratch.
      </p>
      <a className="cta-btn" href={productUrl(campaign)}>
        Get it for {site.product.price} →
      </a>
    </aside>
  );
}
