import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket resources and useful links in the Philippines',
  description:
    'Official organisations, cricket communities, and equipment sources for players and beginners exploring cricket in the Philippines.',
  keywords: [
    'cricket philippines resources',
    'philippine cricket association',
    'where to buy cricket gear philippines',
    'cricket clubs philippines',
    'cricket equipment philippines',
  ],
  alternates: { canonical: '/about-site' },
};

const resources = [
  {
    title: 'Philippine Cricket Association',
    body: 'The governing body for cricket in the Philippines. Useful for official updates, tournaments, development programmes, and national-level information.',
    href: 'https://philippinecricket.org/',
    label: 'Visit PCA',
  },
  {
    title: 'ICC member profile',
    body: 'Provides context on how the Philippines fits into the global cricket structure, including membership status and development progress.',
    href: 'https://www.icc-cricket.com/about/members/associate/philippines-cricket-association',
    label: 'View ICC profile',
  },
  {
    title: 'Nomads Sports Club (Manila)',
    body: 'One of the most well-known cricket venues in Manila, often associated with the history and continued activity of cricket in the country.',
    href: 'https://www.nomadssportsclub.com/',
    label: 'Visit Nomads',
  },
  {
    title: 'Cricket bats and gear on Lazada',
    body: 'A quick way to check local availability of cricket bats, balls, and beginner kits in the Philippines. Useful for price comparisons and entry-level options.',
    href: 'https://www.lazada.com.ph/tag/cricket-bat/',
    label: 'Browse Lazada',
  },
  {
    title: 'Cricket equipment on Shopee',
    body: 'Another marketplace reference for cricket gear, often showing different sellers, price ranges, and beginner-friendly products.',
    href: 'https://shopee.ph/search?keyword=cricket%20bat',
    label: 'Browse Shopee',
  },
  {
    title: 'International cricket store reference',
    body: 'Helpful for understanding product categories, equipment types, and terminology when comparing local options with international standards.',
    href: 'https://www.cricketstoreonline.com/',
    label: 'Visit store',
  },
];

export default function UsefulLinksPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Resources</div>
          <h1>Cricket resources and useful links</h1>
          <p className="lead">
            If you are looking to get into cricket in the Philippines, these are the main organisations,
            communities, and equipment sources worth knowing. This includes where to play, how to stay
            updated, and where to find cricket gear locally.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Key organisations and communities</h2>
            <p>
              These are the main references for understanding how cricket is structured locally and where
              activity is happening. They are also the best starting points for anyone looking to get involved.
            </p>

            <div className="grid-2">
              {resources.slice(0, 3).map((resource) => (
                <article className="resource-box" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.body}</p>
                  <a className="tag-link" href={resource.href} target="_blank" rel="noreferrer">
                    {resource.label}
                  </a>
                </article>
              ))}
            </div>

            <h2>Where to buy cricket gear in the Philippines</h2>
            <p>
              Cricket equipment is still a niche category locally, so most players rely on marketplaces or
              imported gear. These links help you check availability, pricing, and beginner-friendly options.
            </p>

            <div className="grid-2">
              {resources.slice(3).map((resource) => (
                <article className="resource-box" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.body}</p>
                  <a className="tag-link" href={resource.href} target="_blank" rel="noreferrer">
                    {resource.label}
                  </a>
                </article>
              ))}
            </div>

            <h2>How this fits into the site</h2>
            <p>
              This page supports the rest of the site by connecting informational content with real-world
              actions. Readers can move from learning about cricket to finding places to play or buying
              equipment without needing to search elsewhere.
            </p>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
