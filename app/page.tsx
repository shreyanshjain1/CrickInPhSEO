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
          <div className="hero-copy hero-copy-v2">
            <span className="eyebrow">Cricket guides, clubs, and gear</span>
            <h1>A stronger cricket website for the Philippines, rebuilt around real search intent.</h1>
            <p className="lead">
              I reworked this project so it reads more like a proper niche website and less like a
              portfolio landing page. The structure now balances evergreen guides, beginner content,
              local discovery, and commercial pages for people looking for cricket gear in the Philippines.
            </p>
            <div className="hero-actions">
              <Link href="/guides/cricket-in-the-philippines" className="button primary">
                Start with the main guide
              </Link>
              <Link href="/shop/cricket-gear-philippines" className="button secondary">
                Browse cricket gear pages
              </Link>
            </div>
          </div>

          <div className="hero-side hero-side-v2">
            <div className="hero-highlight card soft-card">
              <div className="kicker">What changed in V2</div>
              <p className="lead compact-lead">
                I removed the obvious instructional language, tightened the structure, added more natural content pages,
                and pushed the SEO further into product and buying-intent territory.
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
            <h2>Pages that make the site feel more complete</h2>
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
            <div className="kicker">Content direction</div>
            <h2>Why the site feels more natural now</h2>
            <p>
              The homepage no longer tries to explain every strategy decision upfront. Instead, it works
              like a content hub. Visitors can move into the pages that match what they want: learning the sport,
              finding places to play, comparing formats, or buying equipment.
            </p>
            <p>
              I kept one dedicated page for the build decisions so the rest of the site can stay focused on cricket.
            </p>
          </article>
          <article className="card page-copy">
            <div className="kicker">SEO direction</div>
            <h2>How I pushed the commercial side further</h2>
            <p>
              I expanded the product layer with category-style pages for cricket gear, bats, and balls. That makes the
              commercial intent clearer and gives the site more room for keyword clustering, internal links, and buyer-style FAQs.
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
            <div className="kicker">Build strengths</div>
            <h2>What this version does better</h2>
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
            <h2>Common questions this structure answers</h2>
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
