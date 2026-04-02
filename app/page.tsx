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
            <span className="eyebrow">Cricket guides, venues, clubs, and gear</span>
            <h1>Cricket in the Philippines</h1>
            <p className="lead">
              A guide for people who want to understand the local cricket scene, find places to play, compare formats,
              and buy the right gear without guessing.
            </p>
            <div className="hero-actions">
              <Link href="/guides/cricket-in-the-philippines" className="button primary">
                Start with the main guide
              </Link>
              <Link href="/beginners/getting-started" className="button secondary">
                Getting started
              </Link>
            </div>
          </div>

          <div className="hero-side hero-side-v2">
            <div className="hero-highlight card soft-card">
              <div className="kicker">Popular paths</div>
              <p className="lead compact-lead">
                Read the main guide first, then move into clubs, venues, or equipment depending on whether you want to play,
                learn, or buy.
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
            <h2>Explore the part of the topic you care about most</h2>
            <p className="section-copy">
              Some readers arrive wanting the basics. Others want a field, a club, or a place to buy gear. The site is split so each path feels natural.
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

      <section>
        <div className="container split-callout split-callout-v2">
          <article className="card page-copy compact-card">
            <div className="kicker">For new players</div>
            <h2>Learn the sport without getting overwhelmed</h2>
            <p>
              If you are completely new to cricket, the easiest route is to understand the format first, check whether there is a
              club or casual game near you, and only then buy the equipment you actually need.
            </p>
            <div className="inline-links">
              <Link href="/beginners/getting-started" className="tag-link">Beginner guide</Link>
              <Link href="/compare/tape-ball-vs-hard-ball" className="tag-link">Tape ball vs hard ball</Link>
              <Link href="/resources/playgrounds" className="tag-link">Where to play</Link>
            </div>
          </article>
          <article className="card page-copy compact-card">
            <div className="kicker">For gear buyers</div>
            <h2>Shop with better context</h2>
            <p>
              The gear section is organised by buyer intent, with separate pages for general gear, bats, balls, starter kits,
              and protective equipment so readers can move from research into product pages more confidently.
            </p>
            <div className="inline-links">
              <Link href="/shop/cricket-gear-philippines" className="tag-link">Gear hub</Link>
              <Link href="/shop/cricket-bats-philippines" className="tag-link">Cricket bats</Link>
              <Link href="/shop/beginner-cricket-kits-philippines" className="tag-link">Beginner kits</Link>
            </div>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="kicker">Site strengths</div>
            <h2>What makes the structure stronger</h2>
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
