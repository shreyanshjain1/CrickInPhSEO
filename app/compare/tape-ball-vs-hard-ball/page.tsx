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
            Comparison pages are useful because they answer real beginner questions quickly. I kept this page because it helps the site catch curiosity-driven searches and move readers into the right next content.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why comparison content belongs here</h2>
            <p>
              Someone who is brand new to cricket may not know what gear they need, how formal the sport feels, or whether they should start casually first. This page exists to lower that decision barrier.
            </p>

            <h2>Quick comparison</h2>
            <div className="grid-2">
              <article className="resource-box">
                <h3>Tape-ball cricket</h3>
                <ul>
                  <li>Usually easier for casual and beginner play</li>
                  <li>Lower pressure entry point for social games</li>
                  <li>Useful for introducing the sport without full protective setup</li>
                </ul>
              </article>
              <article className="resource-box">
                <h3>Hard-ball cricket</h3>
                <ul>
                  <li>Closer to formal and competitive match play</li>
                  <li>Needs more attention to safety equipment</li>
                  <li>Better fit for players progressing into club structures</li>
                </ul>
              </article>
            </div>

            <div className="callout neutral-callout">
              <strong>Where this page helps the site</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                It acts as a bridge between broad beginner traffic and more specific pages like getting started, clubs, bats, and balls.
              </p>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
