import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket balls in the Philippines',
  description:
    'A buying guide for cricket balls in the Philippines, including beginner paths, format fit, and shopping references.',
  alternates: { canonical: '/shop/cricket-balls-philippines' },
};

export default function CricketBallsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Product category</div>
          <h1>Cricket balls in the Philippines</h1>
          <p className="lead">
            Ball searches often sit close to format choice, training level, and immediate purchase behaviour. This page helps readers narrow down what they should actually be looking for.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>Why this page matters</h2>
            <p>
              This page targets a more specific kind of equipment search than the main gear hub. It supports readers who already know they need a ball, but still need help with format, durability, and where to buy.
            </p>

            <h2>Common buyer considerations</h2>
            <ul>
              <li>Are you buying for tape-ball play or hard-ball training?</li>
              <li>Do you need a durable training ball or a more match-like option?</li>
              <li>Are you buying one ball or a small starter set?</li>
            </ul>

            <div className="inline-links">
              <a className="tag-link" href="https://www.lazada.com.ph/catalog/?q=cricket+ball" target="_blank" rel="noreferrer">Browse cricket balls on Lazada</a>
              <a className="tag-link" href="https://shopee.ph/search?keyword=cricket%20ball" target="_blank" rel="noreferrer">Browse cricket balls on Shopee</a>
              <a className="tag-link" href="https://www.cricketstoreonline.com/collections/cricket-balls" target="_blank" rel="noreferrer">See international ball options</a>
            </div>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
