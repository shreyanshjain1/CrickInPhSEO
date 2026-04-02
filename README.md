# Cricket in the Philippines

I built this site as a niche content project around cricket in the Philippines, with a stronger emphasis on real-world SEO structure instead of a generic one-page demo.

The goal was to make the site feel like a genuine topic property first, while still documenting the SEO thinking behind it.

## What I focused on

- building a clear content hub around a niche sports topic
- separating discovery, beginner, local-intent, comparison, and commercial pages
- creating better internal linking between guides, clubs, venues, and gear content
- expanding the commercial side into multiple category-style pages instead of one generic product page
- adding a sitemap, robots file, canonical paths, and JSON-LD support
- aligning the metadata and structured page hierarchy to the live domain

## Keyword and topic direction

I planned the content around four main clusters:

### Core topic terms
- cricket in the philippines
- cricket philippines
- play cricket in manila
- where to play cricket in the philippines
- cricket clubs philippines
- philippine cricket association

### Beginner terms
- how to start playing cricket in the philippines
- cricket for beginners philippines
- cricket for beginners manila
- tape ball vs hard ball cricket
- what do you need to play cricket

### Commercial terms
- cricket gear philippines
- cricket bat philippines
- cricket ball philippines
- beginner cricket kit philippines
- cricket protective gear philippines
- buy cricket bat philippines
- best beginner cricket bat philippines

### Support terms
- cricket training philippines
- cricket grounds manila
- cricket community philippines
- women cricket philippines
- youth cricket philippines
- cricket events philippines

## Pages included

- `/` — homepage
- `/guides/cricket-in-the-philippines` — main evergreen guide
- `/beginners/getting-started` — beginner pathway page
- `/resources/playgrounds` — where to play / local-intent page
- `/clubs` — community and club-focused page
- `/compare/tape-ball-vs-hard-ball` — comparison page
- `/shop/cricket-gear-philippines` — gear hub
- `/shop/cricket-bats-philippines` — bat category page
- `/shop/cricket-balls-philippines` — ball category page
- `/shop/beginner-cricket-kits-philippines` — starter kit page
- `/shop/cricket-protective-gear-philippines` — protective equipment page
- `/news/philippines-cricket-calendar` — calendar and event page
- `/about-site` — useful cricket links page
- `/seo-work` — SEO work and keyword research page
- `/roadmap` — growth opportunities page

## Technical work included

- Next.js App Router setup
- page-level metadata
- canonical URLs
- sitemap generation
- robots configuration
- homepage JSON-LD
- internal-link-first structure
- live domain configured as:

`https://crick-in-ph-seo.vercel.app`

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## What I would improve next

- city-specific pages for Manila, Cebu, Davao, and Angeles
- deeper gear pages for pads, gloves, helmets, and shoes
- more comparison pages for buyer intent
- original photos, venue notes, and community interviews
- Search Console submission and indexing follow-up after deployment
