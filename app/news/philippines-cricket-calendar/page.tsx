import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Philippines cricket calendar and event guide',
  description:
    'A season and event-oriented page for cricket in the Philippines, useful for fixtures, tournament recaps, and freshness-focused content planning.',
  alternates: { canonical: '/news/philippines-cricket-calendar' },
};

const ideas = [
  'season openers and roundups',
  'club tournament recaps',
  'women’s and youth development updates',
  'player spotlights and training stories',
  'beginner clinics and community events',
];

export default function CalendarPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Calendar & events</div>
          <h1>Philippines cricket calendar and event guide</h1>
          <p className="lead">
            Not every page should be evergreen. This section is for seasonal, event-driven, and community-led updates that keep the topic active throughout the year.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why freshness matters</h2>
            <p>
              A strong niche site needs both evergreen pages and current-content templates. That balance helps internal linking, gives readers more reasons to return,
              and creates more opportunities to support the main guides and community pages.
            </p>

            <h2>Content that fits here</h2>
            <ul>
              {ideas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
