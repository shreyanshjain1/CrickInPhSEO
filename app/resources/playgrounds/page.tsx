import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket playgrounds and venues in the Philippines',
  description:
    'A resource page structure for venue-focused and local discovery searches around cricket in the Philippines.',
  alternates: { canonical: '/resources/playgrounds' },
};

const venues = [
  {
    name: 'Nomads Sports Club area (Manila context)',
    body: 'This page uses Nomads as the strongest historical anchor because official ICC member information ties cricket in the Philippines to Nomads Sports Club in Manila since 1914.',
  },
  {
    name: 'Association-led venue discovery pages',
    body: 'As this project expands, this page should branch into city-specific pages such as Manila, Metro South, or school-based cricket access pages with maps, schedule notes, and beginner guidance.',
  },
  {
    name: 'Event and training venue templates',
    body: 'Create reusable page templates for clinics, youth sessions, and women’s cricket pathway events so fresh content can be published faster without breaking structure.',
  },
];

export default function PlaygroundsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Local discovery page</div>
          <h1>Cricket playgrounds and venues in the Philippines</h1>
          <p className="lead">
            This page is designed for users searching where they can play, join, observe, or start
            learning cricket locally.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why venue pages matter</h2>
            <p>
              Venue and local-discovery content often converts better than general awareness content
              because the user is already closer to action. On a real project, these pages should
              include maps, contact paths, schedule information, beginner notes, and related clubs.
            </p>

            <h2>Suggested venue page structure</h2>
            <ul>
              <li>Location and access details</li>
              <li>Who the venue is best for</li>
              <li>Session format: training, social games, juniors, women&apos;s cricket</li>
              <li>What beginners should bring</li>
              <li>Related club and association links</li>
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

            <div className="callout">
              <strong>Commercial SEO lesson:</strong>
              <p className="small" style={{ marginBottom: 0 }}>
                Even non-commercial topics still benefit from page intent. Venue pages satisfy high-action local intent and should be measured separately from informational guides.
              </p>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
