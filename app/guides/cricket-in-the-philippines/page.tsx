import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket in the Philippines',
  description:
    'A practical guide to cricket in the Philippines covering the local scene, beginner pathways, clubs, and where to play.',
  alternates: { canonical: '/guides/cricket-in-the-philippines' },
};

export default function CricketGuidePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cricket in the Philippines',
    description:
      'A structured guide page about cricket in the Philippines for people discovering the sport, the community, and the next steps for getting involved.',
  };

  return (
    <main>
      <JsonLd data={articleSchema} />
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Main guide</div>
          <h1>Cricket in the Philippines</h1>
          <p className="lead">
            Cricket in the Philippines has enough history, community structure, and grassroots activity to support a deeper guide than a simple overview. This page is the broad entry point into clubs, venues, beginner pathways, and cricket gear.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why this page sits at the center of the site</h2>
            <p>
              Broad topic pages do several jobs at once. They capture discovery demand, establish trust, define the subject clearly, and create a strong internal-linking point for the rest of the cluster.
            </p>

            <h2>Local context and background</h2>
            <p>
              Cricket in the country is often linked to the long-running Nomads Sports Club tradition in Manila, the work of the Philippine Cricket Association,
              and a wider effort to keep the game visible through clubs, development activity, and organised competition.
            </p>

            <div className="callout">
              <strong>Why context helps</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                A niche guide feels more credible when it is tied to recognisable organisations, useful local context, and clear next actions for the reader.
              </p>
            </div>

            <h2>Search intents this page supports</h2>
            <ul>
              <li>cricket in the philippines</li>
              <li>how to play cricket in the philippines</li>
              <li>philippines cricket clubs</li>
              <li>where to play cricket in manila</li>
              <li>cricket training philippines</li>
            </ul>

            <h2>Good next pages from here</h2>
            <ol>
              <li>A beginner guide that lowers the entry barrier</li>
              <li>A venues page for local and location-specific searches</li>
              <li>A clubs page for participation intent</li>
              <li>A comparison page for tape-ball versus hard-ball searches</li>
              <li>A product cluster for gear-related and buying-intent keywords</li>
            </ol>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
