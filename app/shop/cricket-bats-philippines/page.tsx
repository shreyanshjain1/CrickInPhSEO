import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket bats in the Philippines',
  description:
    'A buying guide for cricket bats in the Philippines covering beginner considerations, search intent, and shopping routes.',
  alternates: { canonical: '/shop/cricket-bats-philippines' },
};

export default function CricketBatsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Product category</div>
          <h1>Cricket bats in the Philippines</h1>
          <p className="lead">
            I split bats into their own page because the keyword intent is strong enough to deserve a cleaner category. It also gives the gear hub a more realistic internal-linking structure.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>What a bat page should do</h2>
            <p>
              This page should help people choose, not just click away immediately. A better category page explains beginner fit, the difference between casual and more serious use,
              and where marketplace results start to make sense.
            </p>

            <h2>Useful buyer questions</h2>
            <ul>
              <li>Is this for tape-ball or hard-ball cricket?</li>
              <li>Do I need a beginner bat or something more advanced?</li>
              <li>Am I buying for casual play, training, or club use?</li>
            </ul>

            <div className="inline-links">
              <a className="tag-link" href="https://www.lazada.com.ph/tag/cricket-bat/" target="_blank" rel="noreferrer">Browse cricket bats on Lazada</a>
              <a className="tag-link" href="https://shopee.ph/search?keyword=cricket%20bat" target="_blank" rel="noreferrer">Browse cricket bats on Shopee</a>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
