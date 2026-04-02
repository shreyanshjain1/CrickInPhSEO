import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { faqs, features, featuredCards, site, stats } from '@/lib/site-data';

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
  };

  return (
    <main>
      <JsonLd data={[faqSchema, websiteSchema]} />

      <section className="hero hero-v2">
        <div className="container hero-grid hero-grid-v2">
          <div className="hero-copy hero-copy-v2 card">
            <span className="eyebrow">Cricket guides, clubs, and gear</span>
            <h1>Cricket in the Philippines: where to play, how to start, and what to buy.</h1>
            <p className="lead">
              This site brings together the main things people usually look for when they discover cricket in the Philippines:
              beginner guides, local clubs, playing venues, format explainers, and equipment pages for bats, balls, and starter gear.
            </p>
            <div className="hero-actions">
              <Link href="/guides/cricket-in-the-philippines" className="button primary">
                Read the main guide
              </Link>
              <Link href="/shop/cricket-gear-philippines" className="button secondary">
                Explore cricket gear
              </Link>
            </div>
          </div>

          <div className="hero-side hero-side-v2">
            <div className="hero-highlight card soft-card">
              <div className="kicker">Inside the site</div>
              <p className="lead compact-lead">
                Start broad with the main guide, move into clubs and venues if you want to play, then use the gear hub for
                bats, balls, and beginner buying questions.
              </p>
            </div>
            <div className="metric-grid metric-grid-v2">
              {stats.map((item) => (
                <div className="metric" key={item.value + item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="kicker">Featured sections</div>
            <h2>Start with the page that matches what you need</h2>
          </div>
          <div className="grid-3">
            {featuredCards.map((item) => (
              <Link href={item.href} className="feature card feature-link" key={item.href}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container split-callout split-callout-v2">
          <article className="card page-copy">
            <div className="kicker">For new players</div>
            <h2>Learn the sport without getting overwhelmed</h2>
            <p>
              If you are completely new to cricket, the easiest path is to start with the beginner guide, understand the difference
              between tape-ball and hard-ball cricket, and then check where local clubs or practice sessions are active.
            </p>
            <p>
              That gives you a clearer route into the sport before you spend money on equipment that may not match the format you play.
            </p>
          </article>
          <article className="card page-copy">
            <div className="kicker">For gear buyers</div>
            <h2>Product pages built around real buying intent</h2>
            <p>
              The gear section is split into natural categories so readers can move from general cricket gear into bats and balls,
              compare options, and then visit Philippine marketplaces or international cricket stores with more confidence.
            </p>
            <div className="inline-links">
              <Link href="/shop/cricket-gear-philippines" className="tag-link">Gear hub</Link>
              <Link href="/shop/cricket-bats-philippines" className="tag-link">Cricket bats</Link>
              <Link href="/shop/cricket-balls-philippines" className="tag-link">Cricket balls</Link>
            </div>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="kicker">Site strengths</div>
            <h2>Why this structure works</h2>
          </div>
          <div className="grid-3">
            {features.map((item) => (
              <article className="feature card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="kicker">FAQ</div>
            <h2>Common questions</h2>
          </div>
          <div className="grid-3">
            {faqs.map((item) => (
              <article className="faq-item card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
