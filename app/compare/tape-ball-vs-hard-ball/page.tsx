import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Tape ball vs hard ball cricket',
  description:
    'A comparison page targeting beginner and equipment-intent searches for cricket audiences in the Philippines.',
  alternates: { canonical: '/compare/tape-ball-vs-hard-ball' },
};

export default function ComparisonPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Comparison page</div>
          <h1>Tape ball vs hard ball cricket</h1>
          <p className="lead">
            This page targets users who are still learning the game and need easy, confidence-building
            content before they commit to clubs, gear, or formal play.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why comparison content works</h2>
            <p>
              Comparison pages are excellent bridges between beginner curiosity and deeper action.
              They tend to rank for question-style searches and help users self-qualify into the next
              best page, such as a beginner guide or local club page.
            </p>

            <h2>Quick comparison</h2>
            <div className="grid-2">
              <article className="resource-box">
                <h3>Tape ball cricket</h3>
                <ul>
                  <li>More approachable for beginners</li>
                  <li>Useful in casual and community settings</li>
                  <li>Lower barrier to entry</li>
                </ul>
              </article>
              <article className="resource-box">
                <h3>Hard ball cricket</h3>
                <ul>
                  <li>Closer to formal competitive play</li>
                  <li>Requires stronger safety awareness</li>
                  <li>Better for advanced skill development</li>
                </ul>
              </article>
            </div>

            <h2>SEO use of this page</h2>
            <p>
              Internally link this page to the main guide, equipment explainer pages, training pages,
              and local clubs. Externally, it is ideal for social sharing because it is simple,
              useful, and easy to understand for people who are completely new to cricket.
            </p>

            <div className="callout">
              <strong>Interview talking point:</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                You can explain that this page was created to capture upper-funnel search demand while still nudging users toward lower-funnel actions.
              </p>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
