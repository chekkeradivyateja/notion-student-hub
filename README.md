# Notion Student Hub

A free, static SEO content site (Next.js `output: 'export'`) that publishes
practical Notion-for-students guides and funnels readers to the **Aesthetic
Student OS** Gumroad template. Same zero-infra model as dv-verification-hub.

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

## Deploy (Vercel, free)

1. Push this folder to a new GitHub repo.
2. In Vercel: **New Project → import the repo**. Framework auto-detects Next.js;
   no settings needed (it respects `output: 'export'`). Deploy.
3. Copy the deployed URL and set it as `url` in **`lib/site.ts`**, then commit —
   this fixes canonical URLs, the sitemap, and robots.
4. In Google Search Console: add the property, submit `sitemap.xml`, request
   indexing for the homepage + a couple of articles.

## Add an article

Drop a Markdown file in `content/articles/<slug>.md` with frontmatter:

```md
---
title: "..."
description: "..."           # meta description
keywords: ["...", "..."]     # target search terms
date: "2026-09-29"
---

Body in Markdown. End with a soft pointer to the template — the CTA card is
added automatically.
```

Rebuild (or push) and the article, its page, and its sitemap entry appear.

## Config

Everything product/site-specific lives in `lib/site.ts` (site name, URL,
Gumroad product link). CTA links are auto-tagged with UTM params
(`utm_campaign=<slug>`) so Gumroad/Analytics can attribute clicks per article.
