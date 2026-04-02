import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';
import { researchKeywords, seoWorkItems } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'SEO work and keyword research',
  description:
    'A breakdown of the keyword clusters, page architecture, on-page work, technical setup, and commercial SEO improvements used across this project.',
  keywords: [
    'SEO case study cricket',
    'keyword research example',
    'commercial SEO structure',
    'content hub architecture',
    'SEO portfolio project',
  ],
  alternates: { canonical: '/seo-work' },
};

export default function SeoWorkPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">SEO work</div>
          <h1>SEO work behind the site</h1>
          <p className="lead">
            I used this build to show how I think through keyword research, topic clustering, page architecture,
            internal linking, technical SEO basics, and commercial search intent inside one small but expandable project.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>What I implemented</h2>
            <div className="grid-3">
              {seoWorkItems.map((item) => (
                <article className="feature soft-panel" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <h2>Keyword clusters I planned around</h2>
            <div className="grid-2 keyword-board">
              <article className="resource-box">
                <h3>Core topic cluster</h3>
                <ul>
                  {researchKeywords.core.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="resource-box">
                <h3>Beginner cluster</h3>
                <ul>
                  {researchKeywords.beginner.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="resource-box">
                <h3>Commercial cluster</h3>
                <ul>
                  {researchKeywords.commercial.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="resource-box">
                <h3>Support cluster</h3>
                <ul>
                  {researchKeywords.support.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>

            <h2>How I shaped the page architecture</h2>
            <ol>
              <li>I kept the homepage broad so it could work like a genuine topic hub instead of trying to rank for every term by itself.</li>
              <li>I used separate pages for beginner education, local participation, comparisons, and equipment because each one serves a different search intent.</li>
              <li>I expanded the commercial side into bats, balls, beginner kits, and protective equipment so the internal links and buyer queries feel more natural.</li>
              <li>I gave the site a dedicated SEO work page so I can document the process without making the public pages sound like a portfolio write-up.</li>
            </ol>

            <h2>On-page and technical work included</h2>
            <ul>
              <li>Unique metadata titles and descriptions across the main pages</li>
              <li>Canonical paths for each route</li>
              <li>Robots and sitemap aligned to the live domain</li>
              <li>Homepage JSON-LD using website and FAQ schema</li>
              <li>Internal links between guides, local pages, and commercial pages</li>
              <li>Content sections built around related entities, questions, and next-step links</li>
            </ul>

            <h2>Why a new site may not appear in search yet</h2>
            <p>
              Even with solid structure, a brand-new site still needs to be crawled and indexed, then earn relevance over time.
              A sitemap helps discovery, but it does not guarantee indexing on its own. Search Console submission and recrawl requests can help speed up discovery after you publish updates.
            </p>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
