import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket in the Philippines',
  description:
    'An evergreen SEO guide page about cricket in the Philippines, including history, growth angles, and search-intent opportunities.',
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
          <div className="kicker">Evergreen guide page</div>
          <h1>Cricket in the Philippines</h1>
          <p className="lead">
            A sample cornerstone page built for search visibility, topical authority, and better
            internal linking into clubs, venues, beginner comparisons, and future event pages.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why this page exists</h2>
            <p>
              For a search and content lead portfolio, this page acts as the main pillar. It is the
              page you would want ranking for discovery-intent searches around cricket in the
              Philippines, while also supporting deeper pages about where to play, what equipment to
              start with, and how newcomers can join a local community.
            </p>

            <h2>Real background you can build on</h2>
            <p>
              Cricket in the Philippines has older roots than many people expect. Official ICC member
              information notes that cricket in the country is closely associated with Nomads Sports
              Club in Manila, where the game has been played since 1914. The same ICC member profile
              also notes that the Philippines Cricket Association became an affiliate member in 2003.
            </p>

            <div className="callout">
              <strong>SEO angle:</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                That history gives you a strong opening paragraph, trust-building context, and useful
                entity relationships for search.
              </p>
            </div>

            <h2>Keyword opportunities this page supports</h2>
            <ul>
              <li>cricket in the philippines</li>
              <li>where to play cricket in manila</li>
              <li>philippines cricket association</li>
              <li>how to start cricket in the philippines</li>
              <li>cricket clubs in the philippines</li>
            </ul>

            <h2>Recommended content sections</h2>
            <ol>
              <li>What cricket is and why the local scene matters</li>
              <li>Brief history and official structure</li>
              <li>Where to play, train, or watch</li>
              <li>How beginners can start</li>
              <li>Youth, women&apos;s, and community growth pathways</li>
              <li>Helpful FAQs and external official links</li>
            </ol>

            <h2>Why this niche has portfolio value</h2>
            <p>
              It lets you show search strategy beyond generic blogging. You can build local-intent
              pages, beginner-intent pages, comparison pages, and authority pages around governing
              bodies and tournament coverage. That creates a complete mini ecosystem instead of a
              single article floating on its own.
            </p>

            <h2>Important current growth signal</h2>
            <p>
              In 2025, the ICC announced the Philippines women&apos;s team would make its debut in an ICC
              pathway event. That is exactly the kind of fresh, official milestone that can support
              new content hubs, coverage pages, and broader audience reach.
            </p>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
