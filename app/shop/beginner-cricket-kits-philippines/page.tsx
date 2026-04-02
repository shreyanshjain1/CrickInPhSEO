import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Beginner cricket kits in the Philippines',
  description:
    'A beginner buying guide for cricket kits in the Philippines covering starter gear bundles, what to buy first, and where to look.',
  keywords: ['beginner cricket kit philippines', 'starter cricket kit philippines', 'cricket set philippines'],
  alternates: { canonical: '/shop/beginner-cricket-kits-philippines' },
};

export default function BeginnerCricketKitsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Product category</div>
          <h1>Beginner cricket kits in the Philippines</h1>
          <p className="lead">
            Starter kit searches usually come from people who want a quicker buying decision. The main question is not just where to buy,
            but whether a ready-made kit makes more sense than building a setup item by item.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Who this page is for</h2>
            <p>
              This page is useful for complete beginners, parents shopping for junior players, and casual buyers who want to reduce guesswork.
              It also supports searches that sit between pure information intent and a more direct purchase intent.
            </p>

            <h2>What a beginner kit page should answer</h2>
            <ul>
              <li>What usually comes inside a beginner cricket kit</li>
              <li>When a starter bundle makes more sense than buying separate items</li>
              <li>Whether the kit is aimed at tape-ball play, training, or hard-ball use</li>
              <li>Which items still need to be upgraded later</li>
            </ul>

            <h2>Useful shopping paths</h2>
            <div className="inline-links">
              <a className="tag-link" href="https://www.lazada.com.ph/catalog/?q=cricket+set" target="_blank" rel="noreferrer">Search cricket sets on Lazada</a>
              <a className="tag-link" href="https://shopee.ph/search?keyword=cricket%20set" target="_blank" rel="noreferrer">Search cricket sets on Shopee</a>
              <a className="tag-link" href="https://www.cricketstoreonline.com/collections/cricket-kits" target="_blank" rel="noreferrer">See international kits</a>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
