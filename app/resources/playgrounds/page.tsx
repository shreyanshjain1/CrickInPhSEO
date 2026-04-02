
import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket playgrounds and venues in the Philippines',
  description:
    'A venue-focused page showing how I would target local and action-oriented searches around cricket in the Philippines.',
  alternates: { canonical: '/resources/playgrounds' },
};

const venues = [
  {
    name: 'Nomads Sports Club as the historic anchor',
    body: 'I used Nomads as the strongest credibility signal because ICC member information directly ties the country’s cricket history in Manila to Nomads Sports Club since 1914.',
  },
  {
    name: 'Friendship Oval and organised competition context',
    body: 'The Philippine Cricket Association references Friendship Oval and organised fixtures, which makes venue and event pages a natural extension of the topic cluster.',
  },
  {
    name: 'Local expansion pages by city',
    body: 'If I kept building this, I would branch venue pages into city and region pages so users could search more specific “where to play” queries instead of landing on one generic page.',
  },
];

export default function PlaygroundsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Local intent page</div>
          <h1>Cricket playgrounds and venues in the Philippines</h1>
          <p className="lead">
            I designed this page around users who are already closer to action: people trying to
            figure out where they can play, train, watch, or start learning cricket locally.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why venue pages matter</h2>
            <p>
              Local discovery pages often carry stronger intent than broad awareness content. Someone
              searching for places to play is usually much closer to taking action, so I treat venue
              content as a bridge between information and participation.
            </p>

            <h2>What I would include on a fully developed venue page</h2>
            <ul>
              <li>Location details and practical access information</li>
              <li>Who the venue is best suited for</li>
              <li>Session type: social games, juniors, training, women&apos;s cricket</li>
              <li>Beginner notes on what to bring and what to expect</li>
              <li>Links to clubs, fixtures, official resources, and gear pages</li>
            </ul>

            <h2>Seed content examples</h2>
            <div className="grid-3">
              {venues.map((venue) => (
                <article className="resource-box" key={venue.name}>
                  <h3>{venue.name}</h3>
                  <p>{venue.body}</p>
                </article>
              ))}
            </div>

            <div className="split-callout">
              <div className="callout">
                <strong>SEO thinking</strong>
                <p className="small" style={{ marginBottom: 0 }}>
                  I would measure these pages differently from evergreen guides because venue pages are closer to action and should generate stronger outbound click behaviour.
                </p>
              </div>
              <div className="callout">
                <strong>Expansion idea</strong>
                <p className="small" style={{ marginBottom: 0 }}>
                  A useful next iteration would be city-specific pages for Manila, Cavite, Clark, Cebu, and Davao based on local cricket activity and search demand.
                </p>
              </div>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
