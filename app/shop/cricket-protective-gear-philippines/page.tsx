import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket protective gear in the Philippines',
  description:
    'A buying guide for cricket protective gear in the Philippines covering pads, gloves, helmets, and beginner safety questions.',
  keywords: ['cricket protective gear philippines', 'cricket pads philippines', 'cricket gloves philippines', 'cricket helmet philippines'],
  alternates: { canonical: '/shop/cricket-protective-gear-philippines' },
};

export default function CricketProtectiveGearPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Product category</div>
          <h1>Cricket protective gear in the Philippines</h1>
          <p className="lead">
            Protective gear sits further down the buying funnel. The people landing here usually already understand the sport better and need help choosing pads, gloves, helmets, and other protection.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Main questions buyers have</h2>
            <ul>
              <li>Do I need full protective equipment for the format I play?</li>
              <li>Which items matter first for a beginner moving into harder-ball cricket?</li>
              <li>Should I buy a full package or build my protection setup in stages?</li>
            </ul>

            <h2>Why this page matters commercially</h2>
            <p>
              Protective equipment terms often show a stronger commercial intent than broad cricket searches. A focused page helps capture those queries,
              improves internal links from beginner and comparison content, and makes the gear section more complete.
            </p>

            <div className="inline-links">
              <a className="tag-link" href="https://www.lazada.com.ph/catalog/?q=cricket+pads" target="_blank" rel="noreferrer">Search cricket pads on Lazada</a>
              <a className="tag-link" href="https://shopee.ph/search?keyword=cricket%20gloves" target="_blank" rel="noreferrer">Search cricket gloves on Shopee</a>
              <a className="tag-link" href="https://www.cricketstoreonline.com/collections/cricket-protection" target="_blank" rel="noreferrer">See international protection options</a>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
