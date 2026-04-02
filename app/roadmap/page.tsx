import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';
import { roadmap } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Execution roadmap',
  description:
    'A practical execution roadmap for turning this cricket SEO project into a stronger portfolio case study.',
  alternates: { canonical: '/roadmap' },
};

export default function RoadmapPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Execution plan</div>
          <h1>How to turn this into a serious portfolio case study</h1>
          <p className="lead">
            This roadmap is written so you can keep shipping commits and turn this from a neat site
            into a stronger hiring asset.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Phase-by-phase buildout</h2>
            <div className="grid-2">
              {roadmap.map((item) => (
                <article className="roadmap-item" key={item.title}>
                  <div className="kicker">{item.phase}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <h2>Suggested next commits</h2>
            <ol>
              <li>Add a dedicated keyword map in the repo README.</li>
              <li>Add GA4 event naming plan and measurement documentation.</li>
              <li>Create a news or tournament page template for fresh content.</li>
              <li>Add breadcrumb schema and article schema to cluster pages.</li>
              <li>Create one stronger conversion action such as a newsletter signup page.</li>
            </ol>

            <h2>GA4 event plan</h2>
            <ul>
              <li>join_club_click</li>
              <li>official_link_click</li>
              <li>newsletter_signup</li>
              <li>guide_depth_75</li>
              <li>cta_compare_click</li>
            </ul>

            <h2>Content expansion map</h2>
            <div className="code-block">
{`Home
├─ Cricket in the Philippines
│  ├─ How to start playing cricket in Manila
│  ├─ Beginner cricket equipment guide
│  ├─ Tape ball vs hard ball cricket
│  └─ Cricket clubs and community
├─ Venues and local discovery
└─ Tournament / news templates`}
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
