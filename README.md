# Cricket in the Philippines

I rebuilt this project to feel more like a real niche website and less like a project that only exists to explain itself.

The topic is still **cricket in the Philippines**, but I pushed it further in two directions:
- a cleaner editorial structure for discovery, beginner, and local-intent content
- a stronger commercial layer for cricket gear, bats, and balls

## What I changed in this version

- rewrote the homepage so it feels more natural and content-led
- removed the obvious instructional wording from the public pages
- added a beginner guide page
- added an events and calendar page
- expanded the shopping section into a gear hub plus dedicated bat and ball pages
- added `robots.ts` and `sitemap.ts` for a stronger SEO baseline
- updated the design system to look more intentional and less generic
- upgraded Next.js to a patched release line

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
- `/news/philippines-cricket-calendar` — freshness and event page
- `/about-site` — first-person notes on the rebuild
- `/roadmap` — future improvements

## Stack

- Next.js 15
- React 19
- TypeScript
- App Router
- Custom CSS

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

## Notes to update after deployment

Replace `https://example.com` in the following files with the real domain:
- `lib/site-data.ts`
- `app/robots.ts`
- `app/sitemap.ts`
