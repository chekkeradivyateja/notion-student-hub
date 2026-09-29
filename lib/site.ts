// Central site + product config. Update `url` after the first Vercel deploy so
// canonical URLs, the sitemap, and robots point at the real domain.
export const site = {
  name: "Notion Student Hub",
  tagline:
    "Free, practical guides to organizing student life — build your own " +
    "system, or grab a done-for-you template.",
  url: "https://notion-student-hub.vercel.app",
  author: "Notion Student Hub",
};

export type Product = { id: string; name: string; tagline: string; price: string; url: string };

// Products this site funnels to. Each article picks one via its `product`
// frontmatter (defaults to the first). Same audience (students/productivity) —
// keep the site topically focused; unrelated products belong on their own site.
export const products: Record<string, Product> = {
  studentOS: {
    id: "studentOS",
    name: "Aesthetic Student OS",
    tagline: "The done-for-you aesthetic Notion dashboard for students",
    price: "$19.99",
    url: "https://divyatejareddy.gumroad.com/l/qpcuaf",
  },
  planner: {
    id: "planner",
    name: "2026 Digital Master Planner",
    tagline: "A hyperlinked digital planner for GoodNotes, Notability & iPad",
    price: "$18.50",
    url: "https://divyatejareddy.gumroad.com/l/xebwnx",
  },
};

export const DEFAULT_PRODUCT = "studentOS";

export function getProduct(id?: string): Product {
  return products[id ?? DEFAULT_PRODUCT] ?? products[DEFAULT_PRODUCT];
}

// A UTM-tagged product link so Gumroad/Analytics can attribute clicks to the
// article that drove them.
export function productUrl(product: Product, campaign: string): string {
  const u = new URL(product.url);
  u.searchParams.set("utm_source", "notion-student-hub");
  u.searchParams.set("utm_medium", "article");
  u.searchParams.set("utm_campaign", campaign);
  return u.toString();
}
