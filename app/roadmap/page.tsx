import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';
import { roadmap } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Site roadmap',
  description:
    'Notes on future content, SEO, and measurement improvements for this cricket website project.',
  alternates: { canonical: '/roadmap' },
};

export default function RoadmapPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Roadmap</div>
          <h1>Where I would take the site next</h1>
          <p className="lead">
            I kept a roadmap section because it is useful documentation, but I no longer let it dominate the rest of the website.
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
