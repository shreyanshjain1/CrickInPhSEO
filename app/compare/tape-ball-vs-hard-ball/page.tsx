import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Tape ball vs hard ball cricket',
  description:
    'A comparison page for beginners deciding between tape-ball and hard-ball cricket, with practical next-step guidance.',
  alternates: { canonical: '/compare/tape-ball-vs-hard-ball' },
};

export default function ComparisonPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Comparison</div>
          <h1>Tape ball vs hard ball cricket</h1>
          <p className="lead">
            One of the first questions many beginners have is whether they are stepping into casual tape-ball games or formal hard-ball cricket. That choice affects both the playing experience and the gear you need.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why the difference matters</h2>
            <p>
              Someone new to the sport may not know what equipment is required, how formal the environment feels, or whether it makes more sense to begin casually first. This page helps lower that decision barrier.
            </p>

            <h2>Quick comparison</h2>
            <div className="grid-2">
              <article className="resource-box">
                <h3>Tape-ball cricket</h3>
                <ul>
                  <li>Usually easier for casual and beginner play</li>
                  <li>Lower-pressure entry point for social games</li>
                  <li>Useful for learning basic movement, hitting, and bowling rhythm</li>
                </ul>
              </article>
              <article className="resource-box">
                <h3>Hard-ball cricket</h3>
                <ul>
                  <li>Closer to formal and competitive match play</li>
                  <li>Needs more attention to safety equipment</li>
                  <li>Better fit for players progressing into structured club cricket</li>
                </ul>
              </article>
            </div>

            <div className="callout neutral-callout">
              <strong>Good next pages</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                Move from here into the beginner guide, local clubs, or the bats and balls pages depending on which format feels closest to your next step.
              </p>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
