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
            <span className="eyebrow">SEO Portfolio + Execution Roadmap</span>
            <h1>Cricket in the Philippines, rebuilt as a search-first content project.</h1>
            <p className="lead">
              This is a Vercel-ready Next.js site designed to prove commercial SEO thinking:
              page architecture, topic clustering, internal linking, structured metadata, and
              content written for both discoverability and action.
            </p>
            <div className="hero-actions">
              <Link href="/guides/cricket-in-the-philippines" className="button primary">
                Open main guide
              </Link>
              <Link href="/roadmap" className="button secondary">
                See execution roadmap
              </Link>
            </div>
          </div>

          <div className="card hero-side">
            <div>
              <div className="kicker">Why this topic works</div>
              <p className="lead" style={{ fontSize: '16px', marginTop: '10px' }}>
                It has real history, official governing structure, niche keyword opportunities,
                and room for strong community-driven landing pages.
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
            <div className="kicker">What this build demonstrates</div>
            <h2>Built like a real search and content lead project</h2>
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
            <div className="kicker">Core roadmap</div>
            <h2>How you would execute this project end to end</h2>
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
            <div className="kicker">Cluster pages</div>
            <h2>Included pages</h2>
          </div>
          <div className="grid-2">
            <Link href="/guides/cricket-in-the-philippines" className="resource-box card">
              <h3>Cricket in the Philippines</h3>
              <p>Main evergreen guide page with history, search intent opportunities, and FAQ content.</p>
            </Link>
            <Link href="/resources/playgrounds" className="resource-box card">
              <h3>Playgrounds & venues</h3>
              <p>Local-discovery page structure for users searching where to play or watch.</p>
            </Link>
            <Link href="/compare/tape-ball-vs-hard-ball" className="resource-box card">
              <h3>Tape ball vs hard ball</h3>
              <p>Comparison-style content page targeting beginner and equipment-related queries.</p>
            </Link>
            <Link href="/clubs" className="resource-box card">
              <h3>Community & clubs</h3>
              <p>Bridge page for association, clubs, school interest, and community conversion paths.</p>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div className="kicker">FAQ block</div>
            <h2>Structured content for AI-assisted and traditional search</h2>
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
