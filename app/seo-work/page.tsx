import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';
import { researchKeywords, seoWorkItems } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'SEO work and keyword research',
  description:
    'A breakdown of the keyword research, content architecture, internal linking, on-page SEO, and technical setup used across this cricket website.',
  keywords: [
    'SEO work cricket philippines',
    'keyword research example',
    'content architecture SEO',
    'internal linking strategy',
    'technical SEO example',
    'commercial SEO structure',
  ],
  alternates: { canonical: '/seo-work' },
};

export default function SeoWorkPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">SEO work</div>
          <h1>SEO work and keyword research</h1>
          <p className="lead">
            This page outlines the search strategy, content structure, internal linking, and technical SEO foundations
            used across the site.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Areas I focused on</h2>
            <div className="grid-3">
              {seoWorkItems.map((item) => (
                <article className="feature soft-panel" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <h2>Keyword clusters</h2>
            <p>
              The keyword planning was grouped by search intent so the content could cover discovery, education,
              participation, and product-related queries without overlapping too heavily across pages.
            </p>

            <div className="grid-2 keyword-board">
              <article className="resource-box">
                <h3>Core topic cluster</h3>
                <ul>
                  {researchKeywords.core.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="resource-box">
                <h3>Beginner cluster</h3>
                <ul>
                  {researchKeywords.beginner.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="resource-box">
                <h3>Commercial cluster</h3>
                <ul>
                  {researchKeywords.commercial.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="resource-box">
                <h3>Support cluster</h3>
                <ul>
                  {researchKeywords.support.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>

            <h2>Content architecture</h2>
            <ol>
              <li>The homepage is structured as a broad hub that introduces the topic and routes visitors into more specific pages.</li>
              <li>Separate pages were created for beginner queries, playing locations, clubs, format comparisons, and equipment-related searches.</li>
              <li>Commercial pages were split into more targeted sections such as gear, bats, balls, kits, and protective equipment.</li>
              <li>The site architecture was planned to support both user navigation and stronger internal linking between related topics.</li>
            </ol>

            <h2>On-page SEO work</h2>
            <ul>
              <li>Unique page titles and meta descriptions across the main routes</li>
              <li>Consistent heading hierarchy for readability and topical clarity</li>
              <li>Intent-based page copy instead of generic filler content</li>
              <li>Contextual internal links between guides, comparison pages, local pages, and gear pages</li>
              <li>Content sections shaped around common questions, supporting phrases, and related entities</li>
            </ul>

            <h2>Technical SEO setup</h2>
            <ul>
              <li>Canonical paths configured for the main routes</li>
              <li>Robots and sitemap aligned to the live production domain</li>
              <li>Homepage structured data using Website and FAQ schema</li>
              <li>Static page generation for fast loading and clean delivery</li>
              <li>Clear route structure to keep the site crawlable and easy to expand</li>
            </ul>

            <h2>Commercial SEO direction</h2>
            <p>
              Beyond informational content, the site includes commercial-intent pages for cricket products in the
              Philippines. This helps connect top-of-funnel searches such as learning and comparison queries with more
              transactional searches related to bats, balls, protective gear, and beginner kits.
            </p>

            <h2>Indexing and growth considerations</h2>
            <p>
              A well-structured site still needs time to be crawled, indexed, and trusted. Publishing pages, keeping
              the sitemap updated, submitting the site through Search Console, and continuing to expand internal linking
              and topical coverage all help improve long-term search visibility.
            </p>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
