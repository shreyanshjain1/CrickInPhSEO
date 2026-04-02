import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket clubs and community in the Philippines',
  description:
    'A cluster page for community, clubs, associations, and beginner conversion paths around cricket in the Philippines.',
  alternates: { canonical: '/clubs' },
};

const blocks = [
  {
    title: 'Association pathway',
    body: 'Official association content should be the trust anchor. Use it to support legitimacy, fixtures, player development pages, and pathway messaging.',
  },
  {
    title: 'Club discovery',
    body: 'Club and community pages should answer practical questions: where to join, what to bring, who can participate, and how often people meet or train.',
  },
  {
    title: 'Youth and women’s growth',
    body: 'These pages are strong opportunities for inclusive search demand and community expansion. They also help support fresh content tied to milestones and events.',
  },
];

export default function ClubsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Community cluster</div>
          <h1>Cricket clubs and community in the Philippines</h1>
          <p className="lead">
            This page is built to connect discovery intent with action intent: joining a club,
            exploring pathways, or following official bodies.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>What this page should do</h2>
            <p>
              It should not just list names. It should remove friction. A good club page answers the
              beginner&apos;s real questions quickly and links outward to the most relevant official next
              steps.
            </p>

            <div className="grid-3">
              {blocks.map((block) => (
                <article className="club-box" key={block.title}>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </article>
              ))}
            </div>

            <h2>Suggested CTAs</h2>
            <ul>
              <li>Visit official association channels</li>
              <li>Find a local training session</li>
              <li>Join a beginner introduction event</li>
              <li>Subscribe for local cricket updates</li>
            </ul>

            <h2>Measurement ideas</h2>
            <ul>
              <li>Outbound clicks to official association pages</li>
              <li>Club enquiry form submissions</li>
              <li>Newsletter signups from local discovery pages</li>
              <li>Clicks from community pages into beginner guides</li>
            </ul>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
