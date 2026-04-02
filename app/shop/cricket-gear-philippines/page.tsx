
import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket gear in the Philippines',
  description:
    'A product-led SEO page focused on cricket gear searches in the Philippines, with buyer-friendly guidance and outbound links to relevant resources.',
  alternates: { canonical: '/shop/cricket-gear-philippines' },
};

const productAreas = [
  {
    title: 'Cricket bats',
    body: 'This category captures broad commercial intent from users looking to buy a bat locally, compare beginner options, or explore entry-level and wooden bat searches.',
    links: [
      { label: 'Lazada cricket bat category', href: 'https://www.lazada.com.ph/tag/cricket-bat/' },
      { label: 'Lazada beginner cricket bat results', href: 'https://www.lazada.com.ph/tag/beginner-cricket-bat/' },
      { label: 'Lazada wooden cricket bat results', href: 'https://www.lazada.com.ph/tag/cricket-bat-wooden/' },
    ],
  },
  {
    title: 'Bat and ball starter sets',
    body: 'Starter-set and accessory searches can attract newer players who are not ready to choose products item by item. These queries are useful for beginner-focused SEO.',
    links: [
      { label: 'Lazada cricket bat and ball results', href: 'https://www.lazada.com.ph/tag/cricket-bat-and-ball/' },
      { label: 'Lazada cricket bat ball results', href: 'https://www.lazada.com.ph/tag/cricket-bat-ball/' },
      { label: 'Lazada wooden cricket bat category', href: 'https://www.lazada.com.ph/tag/wooden-cricket-bat/' },
    ],
  },
  {
    title: 'Community and official pathways',
    body: 'Not every user is ready to buy immediately. Some will want clubs, training, fixtures, or official information first. That is why I linked the product page back into official and community resources.',
    links: [
      { label: 'Philippine Cricket Association', href: 'https://cricketphilippines.com/' },
      { label: 'PCA development program', href: 'https://cricketphilippines.com/development-program/' },
      { label: 'PCA club cricket', href: 'https://cricketphilippines.com/club-cricket/' },
    ],
  },
];

export default function CricketGearPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Commercial intent page</div>
          <h1>Cricket gear in the Philippines</h1>
          <p className="lead">
            I added this page to show that I can handle product-led SEO as well as informational
            content. It targets purchase-adjacent searches and gives users practical paths into gear,
            starter options, and official local resources.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why this page matters in the overall SEO structure</h2>
            <p>
              A lot of SEO portfolios stay stuck in awareness content. I wanted this build to show
              that I can also create pages around commercial search intent. Even in a niche sports
              topic, product pages help demonstrate keyword targeting, on-page structure, and CTA thinking.
            </p>

            <h2>How I would approach gear-related search intent</h2>
            <ul>
              <li>Group broad gear demand into bats, starter sets, and accessories</li>
              <li>Create beginner-focused pages before jumping straight into high-spec products</li>
              <li>Support category pages with comparison content and beginner explainers</li>
              <li>Use internal links to move users between information, community, and product pages</li>
            </ul>

            <div className="grid-3">
              {productAreas.map((area) => (
                <article className="product-box" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                  <div className="inline-links">
                    {area.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="tag-link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <h2>Buyer-friendly content sections I would add next</h2>
            <ol>
              <li>Best beginner cricket bats in the Philippines</li>
              <li>Cricket bat and ball sets for casual play</li>
              <li>Protective gear checklist for new hard-ball players</li>
              <li>How to choose between tape-ball and hard-ball starter gear</li>
              <li>Where to play after buying your first gear set</li>
            </ol>

            <div className="callout">
              <strong>Why I like this section for portfolio use</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                It makes the project look more complete. It shows that I can connect non-brand informational content with commercial pages and real buyer journeys.
              </p>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
