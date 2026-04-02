import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'How to start playing cricket in the Philippines',
  description:
    'A beginner-friendly guide to starting cricket in the Philippines, including formats, first gear, and the easiest next steps.',
  alternates: { canonical: '/beginners/getting-started' },
};

export default function GettingStartedPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Beginner guide</div>
          <h1>How to start playing cricket in the Philippines</h1>
          <p className="lead">
            If you are new to cricket, the best first step is keeping things simple: understand the format, find the right environment to play, and only then buy the gear you actually need.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Start simple</h2>
            <p>
              The easiest way to begin is not by buying everything at once. It is by understanding the format you are likely to play, finding the right club or session,
              and then buying only the most relevant starter items.
            </p>

            <h2>A practical beginner path</h2>
            <ol>
              <li>Understand whether you are likely to start with tape-ball or hard-ball cricket</li>
              <li>Look for the nearest club, community session, or training environment</li>
              <li>Buy only the first gear items that match your format and level</li>
              <li>Use the bats and balls pages to make a more informed purchase later</li>
            </ol>

            <h2>Common beginner searches</h2>
            <ul>
              <li>how to start cricket in the philippines</li>
              <li>cricket for beginners manila</li>
              <li>what gear do I need for cricket</li>
              <li>best beginner cricket bat philippines</li>
            </ul>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
