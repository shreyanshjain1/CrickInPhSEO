import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket clubs and community in the Philippines',
  description:
    'A community-focused cricket page about clubs, beginner pathways, and how the local cricket scene connects people to the sport.',
  alternates: { canonical: '/clubs' },
};

const blocks = [
  {
    title: 'Official pathway',
    body: 'The community page should lean on official and recognizable entities first. That trust signal matters in a niche sport because it reassures new players that the scene is active and organised.',
  },
  {
    title: 'Beginner-friendly intent',
    body: 'Most people who land here are not looking for a perfect history lesson. They want to know if they can join, what the atmosphere is like, and whether they need full gear before turning up.',
  },
  {
    title: 'Fresh content opportunities',
    body: 'Women’s cricket, youth development, school programs, and club-level updates can all support more current content and stronger internal links from evergreen pages.',
  },
];

export default function ClubsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Community page</div>
          <h1>Cricket clubs and community in the Philippines</h1>
          <p className="lead">
            I wanted this page to feel useful first. Instead of reading like a note to recruiters, it now behaves more like a page someone would actually visit when they want to join, follow, or understand the local scene.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why community pages matter in a niche sport</h2>
            <p>
              In a developing sports ecosystem, community pages do a lot of heavy lifting. They answer beginner questions, connect visitors to the right official resources,
              and create the trust that makes people more willing to explore clubs, events, and equipment pages.
            </p>

            <div className="grid-3">
              {blocks.map((block) => (
                <article className="club-box" key={block.title}>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </article>
              ))}
            </div>

            <h2>What this page should guide people toward</h2>
            <ul>
              <li>Official association resources and updates</li>
              <li>Beginner pathways and development activity</li>
              <li>Venue and training discovery</li>
              <li>Equipment explainers for first-time players</li>
            </ul>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
