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
            This is the main evergreen page of the site. I wanted it to work as the central entry point
            for broad searches while still moving readers smoothly into clubs, places to play, beginner
            explainers, and equipment pages.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why this page sits at the center of the structure</h2>
            <p>
              Broad topic pages matter because they do several jobs at once. They capture discovery demand,
              establish trust, define the topic clearly, and create the strongest internal linking starting point
              for the rest of the cluster.
            </p>

            <h2>Local context and background</h2>
            <p>
              I used real background on the local game to make the page feel more grounded. The topic has enough history,
              community structure, and development activity to support a proper niche content build instead of a thin one-page summary.
            </p>

            <div className="callout">
              <strong>Why the context matters</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                A niche guide becomes stronger when it is tied to real entities, recognizable local context, and useful next steps.
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

            <h2>Supporting pages connected from here</h2>
            <ol>
              <li>A beginner guide that lowers the entry barrier</li>
              <li>A venues page for local and location-specific searches</li>
              <li>A club and community page for participation intent</li>
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
