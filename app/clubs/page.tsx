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
    body: 'Start with official and recognisable organisations first. That helps new players find trusted entry points into the sport and understand how the local scene is organised.',
  },
  {
    title: 'Beginner-friendly environment',
    body: 'Most people landing on this page want to know whether they can join, what the atmosphere is like, and whether they need full gear before showing up.',
  },
  {
    title: 'Fresh community topics',
    body: 'Women’s cricket, youth development, school programmes, and club-level updates all create useful ongoing content around the local game.',
  },
];

export default function ClubsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Community</div>
          <h1>Cricket clubs and community in the Philippines</h1>
          <p className="lead">
            Community pages are where curiosity turns into participation. This is the right place to understand how the local scene works, where to look for organised cricket, and what a new player should expect.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why community matters in a developing cricket market</h2>
            <p>
              In a niche sport, community pages do a lot of heavy lifting. They answer beginner questions, connect readers to official resources, and make it easier to move into venues, events, and equipment pages with confidence.
            </p>

            <div className="grid-3">
              {blocks.map((block) => (
                <article className="club-box" key={block.title}>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </article>
              ))}
            </div>

            <h2>Useful next steps from here</h2>
            <ul>
              <li>Check official association resources and updates</li>
              <li>Move into the beginner guide if you are new to the sport</li>
              <li>Use the venues page to narrow down where you may be able to play</li>
              <li>Read the gear pages only after you know which format you are likely to start with</li>
            </ul>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
