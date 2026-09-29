// Central site + product config. Update `url` after the first Vercel deploy so
// canonical URLs, the sitemap, and robots point at the real domain.
export const site = {
  name: "Notion Student Hub",
  tagline:
    "Free, practical Notion guides for students — build your own system, " +
    "or grab the done-for-you template.",
  // TODO: set to the real domain after deploying (e.g. https://notion-student-hub.vercel.app)
  url: "https://notion-student-hub.vercel.app",
  author: "Notion Student Hub",
  product: {
    name: "Aesthetic Student OS",
    tagline: "The done-for-you aesthetic Notion dashboard for students",
    price: "$19.99",
    url: "https://divyatejareddy.gumroad.com/l/qpcuaf",
  },
};

// A UTM-tagged product link so Gumroad/Analytics can attribute clicks to the
// article that drove them.
export function productUrl(campaign: string): string {
  const u = new URL(site.product.url);
  u.searchParams.set("utm_source", "notion-student-hub");
  u.searchParams.set("utm_medium", "article");
  u.searchParams.set("utm_campaign", campaign);
  return u.toString();
}
