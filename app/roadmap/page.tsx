import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';
import { roadmap } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Growth topics for cricket content in the Philippines',
  description:
    'A practical list of future content opportunities around venues, product clusters, seasonal updates, and measurement for cricket in the Philippines.',
  alternates: { canonical: '/roadmap' },
};

export default function RoadmapPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Growth topics</div>
          <h1>Future content opportunities for cricket in the Philippines</h1>
          <p className="lead">
            As the site grows, the strongest next step is going deeper into local intent, product coverage, and seasonal updates that make the topic more useful over time.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <div className="grid-2">
              {roadmap.map((item) => (
                <article className="roadmap-item" key={item.title}>
                  <div className="kicker">{item.phase}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
