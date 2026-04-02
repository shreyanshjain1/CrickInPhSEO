import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Philippines cricket calendar and content opportunities',
  description:
    'A season and event-oriented page for cricket in the Philippines, useful for fixtures, tournament recaps, and freshness-focused content planning.',
  alternates: { canonical: '/news/philippines-cricket-calendar' },
};

const ideas = [
  'season openers and roundups',
  'club tournament recaps',
  'women’s and youth development updates',
  'player spotlights and training stories',
  'beginner event and clinic announcements',
];

export default function CalendarPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Fresh content</div>
          <h1>Philippines cricket calendar and event content</h1>
          <p className="lead">
            Not every page should be evergreen. This section gives the site a place for seasonal, event-driven, and freshness-based content that can keep the topic active.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why freshness matters</h2>
            <p>
              A good niche site usually needs both evergreen pages and lighter current-content templates. That balance helps internal linking, gives readers more reasons to return,
              and creates more opportunities to support the main guides and community pages.
            </p>

            <h2>Content types I would publish here</h2>
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
