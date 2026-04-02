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

      {/* HERO */}
      <section className="hero hero-v2">
        <div className="container hero-grid hero-grid-v2">
          <div className="hero-copy hero-copy-v2 card">
            <span className="eyebrow">Cricket in the Philippines</span>
            <h1>Cricket in the Philippines: Where to play, learn, and buy gear</h1>

            <p className="lead">
              Cricket is still growing in the Philippines, but there are active clubs, playing grounds,
              and a small but real demand for cricket gear. This site covers how to get started,
              where to play, and what equipment actually makes sense locally.
            </p>

            <div className="hero-actions">
              <Link href="/guides/cricket-in-the-philippines" className="button primary">
                Read the full guide
              </Link>
              <Link href="/beginners/getting-started" className="button secondary">
                Beginner guide
              </Link>
            </div>
          </div>

          <div className="hero-side hero-side-v2">
            <div className="hero-highlight card soft-card">
              <div className="kicker">Start here</div>
              <p className="lead compact-lead">
                If you are new, start with the main guide. From there, you can find clubs, playing areas,
                or move into equipment depending on what you need next.
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

      {/* FEATURED SECTIONS */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="kicker">Explore</div>
            <h2>Cricket resources, guides, and gear</h2>
            <p className="section-copy">
              Whether you are trying to understand the sport, find a place to play,
              or buy your first cricket bat, these sections cover the main paths.
            </p>
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

      {/* SPLIT SECTION */}
      <section>
        <div className="container split-callout split-callout-v2">
          <article className="card page-copy compact-card">
            <div className="kicker">Getting started</div>
            <h2>New to cricket in the Philippines?</h2>
            <p>
              Most players locally start with casual formats like tape ball cricket before moving into
              hard ball matches. The easiest way to begin is to learn the basics, find a group,
              and only then invest in equipment.
            </p>

            <div className="inline-links">
              <Link href="/beginners/getting-started" className="tag-link">How to start</Link>
              <Link href="/compare/tape-ball-vs-hard-ball" className="tag-link">Tape ball vs hard ball</Link>
              <Link href="/resources/playgrounds" className="tag-link">Cricket grounds</Link>
            </div>
          </article>

          <article className="card page-copy compact-card">
            <div className="kicker">Equipment</div>
            <h2>Cricket gear in the Philippines</h2>
            <p>
              Cricket equipment is still a niche category locally, so choosing the right bat, ball,
              or starter kit depends on how you plan to play. The gear section breaks this down
              by use case and budget.
            </p>

            <div className="inline-links">
              <Link href="/shop/cricket-gear-philippines" className="tag-link">All gear</Link>
              <Link href="/shop/cricket-bats-philippines" className="tag-link">Cricket bats</Link>
              <Link href="/shop/cricket-balls-philippines" className="tag-link">Cricket balls</Link>
            </div>
          </article>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="kicker">Why this matters</div>
            <h2>Cricket is growing in the Philippines</h2>
            <p className="section-copy">
              While still a developing sport locally, cricket has an active community, organised clubs,
              and increasing interest through schools and expat groups. That makes it a unique niche
              for both players and content.
            </p>
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

      {/* FAQ */}
      <section>
        <div className="container">
          <div className="section-head">
            <div className="kicker">FAQ</div>
            <h2>Cricket in the Philippines: common questions</h2>
          </div>

          <div className="grid-2">
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
