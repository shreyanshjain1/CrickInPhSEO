
import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Tape ball vs hard ball cricket',
  description:
    'A comparison page built to capture beginner search demand and guide new users toward the right next step.',
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
            I included this page because comparison content is one of the easiest ways to capture
            beginner demand, answer real questions clearly, and move users deeper into the site.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why I wanted this page in the site structure</h2>
            <p>
              Comparison pages can rank for question-style searches, lower the learning barrier, and
              help users figure out which type of page they need next. They are especially useful in
              sports niches where many users are still deciding how serious they want to get.
            </p>

            <h2>Quick comparison</h2>
            <div className="grid-2">
              <article className="resource-box">
                <h3>Tape ball cricket</h3>
                <ul>
                  <li>Usually feels more approachable for beginners</li>
                  <li>Works well in casual, social, and lower-barrier settings</li>
                  <li>Can be a softer entry point before formal training</li>
                </ul>
              </article>
              <article className="resource-box">
                <h3>Hard ball cricket</h3>
                <ul>
                  <li>Closer to formal competitive play</li>
                  <li>Demands more attention to safety and protective gear</li>
                  <li>Better fit for players moving toward structured competition</li>
                </ul>
              </article>
            </div>

            <h2>What this page does for the rest of the website</h2>
            <p>
              I can link it to beginner equipment pages, club pages, and the main guide. That makes
              it a useful mid-funnel asset: educational enough to attract broad traffic, but practical
              enough to push users into more commercial or participation-focused content.
            </p>

            <div className="callout">
              <strong>Why it helps the portfolio</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                It shows that I am not just thinking about ranking pages. I am thinking about how different page types support a complete user journey.
              </p>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
