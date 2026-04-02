
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket in the Philippines',
  description:
    'My cornerstone page on cricket in the Philippines, covering history, structure, local search intent, and beginner pathways.',
  alternates: { canonical: '/guides/cricket-in-the-philippines' },
};

export default function CricketGuidePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cricket in the Philippines',
    description:
      'A structured guide page about cricket in the Philippines for users discovering the sport, community options, and beginner information.',
  };

  return (
    <main>
      <JsonLd data={articleSchema} />
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Cornerstone guide</div>
          <h1>Cricket in the Philippines</h1>
          <p className="lead">
            I wrote this page as the main trust-building hub of the site. It gives the topic enough
            context to support discovery searches, while also feeding users into clubs, venues, gear,
            and beginner comparison pages.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why I made this the pillar page</h2>
            <p>
              If I were building this topic for a real client, this would be the page I would want to
              anchor the whole content cluster. It targets broad, discovery-intent queries while
              giving me room to link into more specific pages with better action intent.
            </p>

            <h2>Real background I used to shape the content</h2>
            <p>
              Official ICC member information says cricket in the Philippines is closely associated
              with Nomads Sports Club in Manila, where the game has been played since 1914. The same
              ICC profile also says the Philippines Cricket Association has been an ICC member since
              2003, and that the local season typically runs from October into early June.
            </p>

            <div className="callout">
              <strong>Why this matters for SEO</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                Those details help build trust, strengthen entity relationships, and make the page feel grounded in real context instead of generic filler content.
              </p>
            </div>

            <h2>Search intent buckets supported by this page</h2>
            <ul>
              <li>cricket in the philippines</li>
              <li>philippines cricket association</li>
              <li>where to play cricket in manila</li>
              <li>how to start playing cricket in the philippines</li>
              <li>cricket clubs in the philippines</li>
            </ul>

            <h2>How I would keep expanding the cluster</h2>
            <ol>
              <li>Add city-specific pages for Manila, Cavite, Clark, Cebu, and Davao</li>
              <li>Add beginner equipment explainers and budget gear pages</li>
              <li>Add tournament recap templates to support freshness and seasonal demand</li>
              <li>Add club and youth pathway pages that answer practical participation questions</li>
              <li>Add FAQ sections tied to search console impressions and real community questions</li>
            </ol>

            <h2>Why I think this niche works well as a case study</h2>
            <p>
              It lets me show more than just blogging. I can demonstrate local SEO structure,
              evergreen authority content, comparison content, and product-led SEO all within the
              same topic. That gives the project much more range.
            </p>

            <h2>Fresh growth angle</h2>
            <p>
              The Philippine Cricket Association currently runs both men&apos;s and women&apos;s national teams,
              plus school, college, and barangay development programs. That creates room for youth,
              development, event, and participation content that could keep growing over time.
            </p>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
