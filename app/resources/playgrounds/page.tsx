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
    body: 'A location page should start where search demand is most practical. Metro Manila gives the topic enough volume, enough community history, and enough adjacent areas to support local discovery pages later.',
  },
  {
    title: 'Club-led participation',
    body: 'In niche sports, the place to play is often tied to club access, training days, and community contacts rather than a clean list of public venues. That is why this page should connect directly into clubs and beginner resources.',
  },
  {
    title: 'Location SEO opportunities',
    body: 'This section can expand into pages like cricket in Manila, cricket in Clark, or beginner cricket near me style content once there is enough local information to support them properly.',
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
            People often search for a sport by asking where they can actually play it. I rebuilt this page
            to target that local intent more directly and connect it to clubs, beginner content, and community resources.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>What makes this page valuable</h2>
            <p>
              A good local-intent page should not just mention a few places. It should reduce the friction between curiosity
              and action. Someone landing here should quickly understand whether the sport is accessible, who to contact,
              and which page to visit next.
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
              <li>Check the beginner guide before buying equipment</li>
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
