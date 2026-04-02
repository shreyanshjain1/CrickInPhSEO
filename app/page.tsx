
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { faqs, features, roadmap, site, stats } from '@/lib/site-data';

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

      <section className="hero">
        <div className="container hero-grid">
          <div className="card hero-copy">
            <span className="eyebrow">SEO case study + website build</span>
            <h1>Cricket in the Philippines, rebuilt as a focused search and content project.</h1>
            <p className="lead">
              I made this site to show how I think about keyword intent, content clusters, internal
              linking, structured data, and buyer-friendly copy. I chose cricket in the Philippines
              because it has enough history, community depth, and product opportunity to make the SEO
              work interesting.
            </p>
            <div className="hero-actions">
              <Link href="/guides/cricket-in-the-philippines" className="button primary">
                View main guide
              </Link>
              <Link href="/shop/cricket-gear-philippines" className="button secondary">
                View product SEO page
              </Link>
            </div>
          </div>

          <div className="card hero-side">
            <div>
              <div className="kicker">What I wanted to demonstrate</div>
              <p className="lead" style={{ fontSize: '16px', marginTop: '10px' }}>
                A good SEO build should not stop at informational content. It should connect discovery,
                comparison, local intent, and commercial intent in one coherent site structure.
              </p>
            </div>
            <div className="metric-grid">
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
            <div className="kicker">Build goals</div>
            <h2>What this project is meant to show</h2>
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
            <div className="kicker">Site sections</div>
            <h2>Pages I built into the content system</h2>
          </div>
          <div className="grid-2">
            <Link href="/guides/cricket-in-the-philippines" className="resource-box card">
              <h3>Cricket in the Philippines</h3>
              <p>My main evergreen guide, written to support discovery searches and pass authority into deeper pages.</p>
            </Link>
            <Link href="/resources/playgrounds" className="resource-box card">
              <h3>Playgrounds and venues</h3>
              <p>A local-intent page that shows how I would capture searches around where to play, train, and watch.</p>
            </Link>
            <Link href="/compare/tape-ball-vs-hard-ball" className="resource-box card">
              <h3>Tape ball vs hard ball</h3>
              <p>A comparison page designed for beginner search demand and smoother movement into more specific content.</p>
            </Link>
            <Link href="/clubs" className="resource-box card">
              <h3>Community and clubs</h3>
              <p>A supporting page built around participation, official pathways, and the questions new players usually have.</p>
            </Link>
            <Link href="/shop/cricket-gear-philippines" className="resource-box card">
              <h3>Cricket gear in the Philippines</h3>
              <p>A commercial-intent page that targets gear-related searches and links users to real marketplaces and official resources.</p>
            </Link>
            <Link href="/roadmap" className="resource-box card">
              <h3>Project notes</h3>
              <p>A first-person breakdown of how I approached the topic, what I would improve next, and how I would measure results.</p>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="kicker">How I would keep improving it</div>
            <h2>Ongoing optimization plan</h2>
          </div>
          <div className="grid-2">
            {roadmap.map((item) => (
              <article className="roadmap-item card" key={item.title}>
                <div className="kicker">{item.phase}</div>
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
            <h2>Questions this project answers</h2>
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
