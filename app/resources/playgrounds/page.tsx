import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Where to play cricket in the Philippines',
  description:
    'A location-focused cricket page for the Philippines covering fields, practice environments, clubs, and local discovery intent.',
  alternates: { canonical: '/resources/playgrounds' },
};

const venueIdeas = [
  {
    title: 'Metro Manila and nearby hubs',
    body: 'Local demand usually starts with Metro Manila and nearby areas because that is where people are most likely to search for clubs, fields, and entry points into the sport.',
  },
  {
    title: 'Club-led participation',
    body: 'In niche sports, the place to play is often tied to club access, training days, and community contacts rather than a long list of public venues.',
  },
  {
    title: 'Local SEO opportunities',
    body: 'This page can naturally expand into city-specific guides such as cricket in Manila, cricket in Clark, or beginner cricket near me style topics.',
  },
];

export default function PlaygroundsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Location guide</div>
          <h1>Where to play cricket in the Philippines</h1>
          <p className="lead">
            One of the most practical questions people ask is where they can actually play. This page focuses on local intent and connects venue discovery with clubs, beginner content, and community resources.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>What makes a good location page</h2>
            <p>
              A useful local-intent page should reduce the friction between curiosity and action. Someone landing here should quickly understand whether the sport feels accessible, who to contact, and which page to visit next.
            </p>

            <div className="grid-3">
              {venueIdeas.map((block) => (
                <article className="club-box" key={block.title}>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </article>
              ))}
            </div>

            <h2>Useful next actions from this page</h2>
            <ul>
              <li>Move to clubs and community information</li>
              <li>Read the beginner guide before buying equipment</li>
              <li>Explore the event calendar for seasonal activity</li>
              <li>Use the gear pages for bats, balls, and starter equipment</li>
            </ul>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
