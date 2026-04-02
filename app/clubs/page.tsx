
import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket clubs and community in the Philippines',
  description:
    'A community-focused page built around participation, trust signals, and beginner pathways for cricket in the Philippines.',
  alternates: { canonical: '/clubs' },
};

const blocks = [
  {
    title: 'Official pathway',
    body: 'I wanted official association content to be the trust anchor of this section, because it helps connect the site to legitimate development, fixtures, and player pathways.',
  },
  {
    title: 'Beginner questions',
    body: 'A good community page should answer practical questions fast: where people can join, what gear they need, how often sessions happen, and whether complete beginners are welcome.',
  },
  {
    title: 'Growth content',
    body: 'Women’s cricket, youth programs, and development initiatives create strong opportunities for fresh content that feels useful instead of repetitive.',
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
            I built this page to connect curiosity with action. It is meant to support users who want
            to join, follow official organisations, or simply understand how the local cricket scene works.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>What I wanted this page to do</h2>
            <p>
              I did not want this section to feel like a dead-end list of names. A useful community
              page should remove friction and help someone take the next step, whether that means
              reaching an official body, finding a club, or understanding how beginner pathways work.
            </p>

            <div className="grid-3">
              {blocks.map((block) => (
                <article className="club-box" key={block.title}>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </article>
              ))}
            </div>

            <h2>Practical CTA ideas</h2>
            <ul>
              <li>Visit the official Philippine Cricket Association website</li>
              <li>Check the development program for youth and beginner opportunities</li>
              <li>Look at fixtures and event schedules</li>
              <li>Move into equipment and beginner guide pages</li>
            </ul>

            <h2>How I would measure this page</h2>
            <ul>
              <li>Outbound clicks to official association resources</li>
              <li>Clicks into beginner guide and venue pages</li>
              <li>Scroll depth and engagement with FAQs</li>
              <li>Newsletter or enquiry conversions if the project added a form later</li>
            </ul>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
