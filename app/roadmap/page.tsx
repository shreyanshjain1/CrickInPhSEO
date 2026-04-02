
import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';
import { roadmap } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Project notes',
  description:
    'A first-person breakdown of how I approached this cricket SEO case study and how I would expand it further.',
  alternates: { canonical: '/roadmap' },
};

export default function RoadmapPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Project notes</div>
          <h1>How I approached this SEO case study</h1>
          <p className="lead">
            I wanted this build to feel like something I could genuinely show in a portfolio, so I
            used this page to explain my thinking in plain language instead of leaving behind instructions.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>How I framed the project</h2>
            <div className="grid-2">
              {roadmap.map((item) => (
                <article className="roadmap-item" key={item.title}>
                  <div className="kicker">{item.phase}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <h2>What I would add next</h2>
            <ol>
              <li>A more complete keyword map based on search console and third-party tools</li>
              <li>Dedicated beginner gear pages by budget and skill level</li>
              <li>Fresh content templates for fixtures, tournaments, and local events</li>
              <li>More structured data, especially breadcrumb and article schema on cluster pages</li>
              <li>A measurable conversion action such as newsletter signup or event enquiry</li>
            </ol>

            <h2>Sample GA4 events I would track</h2>
            <ul>
              <li>official_link_click</li>
              <li>gear_link_click</li>
              <li>club_page_click</li>
              <li>guide_scroll_75</li>
              <li>comparison_cta_click</li>
            </ul>

            <h2>How I think about the content architecture</h2>
            <div className="code-block">
{`Home
├─ Cricket in the Philippines
│  ├─ How to start playing cricket in Manila
│  ├─ Beginner cricket gear in the Philippines
│  ├─ Tape ball vs hard ball cricket
│  └─ Clubs and community
├─ Playgrounds and venues
└─ Product-led gear page`}
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
