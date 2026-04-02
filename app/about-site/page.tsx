import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Useful cricket links in the Philippines',
  description:
    'Official cricket organisations, community resources, and shopping links for readers exploring cricket in the Philippines.',
  alternates: { canonical: '/about-site' },
};

const resources = [
  {
    title: 'Philippine Cricket Association',
    body: 'The national governing body is the best place to start for official updates, programmes, and wider local cricket context.',
    href: 'https://philippinecricket.org/',
    label: 'Visit PCA',
  },
  {
    title: 'ICC member profile',
    body: 'The ICC member page offers a quick background on the Philippines as part of the wider international cricket structure.',
    href: 'https://www.icc-cricket.com/about/members/associate/philippines-cricket-association',
    label: 'View ICC profile',
  },
  {
    title: 'Nomads Sports Club',
    body: 'Nomads is closely associated with the long-running history of cricket in Manila and remains a useful reference point for the local scene.',
    href: 'https://www.nomadssportsclub.com/',
    label: 'Visit Nomads',
  },
  {
    title: 'Lazada cricket searches',
    body: 'Marketplace demand in the Philippines often shows up through category and search pages for bats, balls, and starter equipment.',
    href: 'https://www.lazada.com.ph/tag/cricket-bat/',
    label: 'Browse Lazada',
  },
  {
    title: 'Shopee cricket searches',
    body: 'Shopee can also be a useful check for product availability, beginner price points, and casual-play options.',
    href: 'https://shopee.ph/search?keyword=cricket%20bat',
    label: 'Browse Shopee',
  },
  {
    title: 'International cricket retail reference',
    body: 'International specialist stores help when comparing equipment categories, product terminology, and format-specific gear.',
    href: 'https://www.cricketstoreonline.com/',
    label: 'Visit store',
  },
];

export default function UsefulLinksPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Useful links</div>
          <h1>Useful cricket links in the Philippines</h1>
          <p className="lead">
            This page gathers official organisations, cricket community references, and shopping links that help readers move from learning about the sport into playing or buying gear.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <div className="grid-2">
              {resources.map((resource) => (
                <article className="resource-box" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.body}</p>
                  <a className="tag-link" href={resource.href} target="_blank" rel="noreferrer">
                    {resource.label}
                  </a>
                </article>
              ))}
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
