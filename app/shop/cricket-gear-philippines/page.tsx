import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'Cricket gear in the Philippines',
  description:
    'A commercial-intent buying guide for cricket gear in the Philippines, including starter gear, bats, balls, and shopping pathways.',
  alternates: { canonical: '/shop/cricket-gear-philippines' },
};

const productSections = [
  {
    title: 'Starter gear',
    body: 'Beginners usually do not need everything at once. A stronger gear hub explains what to buy first, what can wait, and how format choice changes the list.',
  },
  {
    title: 'Bats and balls',
    body: 'Bats and balls deserve their own pages because the keyword intent is stronger and the buyer questions are more specific than general gear searches.',
  },
  {
    title: 'Marketplace pathways',
    body: 'In the Philippines, product demand often appears through Lazada and Shopee searches first, so this hub supports that behaviour with clearer paths into those marketplaces.',
  },
];

export default function CricketGearPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Cricket gear</div>
          <h1>Cricket gear in the Philippines</h1>
          <p className="lead">
            This section is designed for readers who are already looking at equipment. It connects beginner buying questions with bats, balls, and direct shopping routes in the Philippines.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>How the gear hub is organised</h2>
            <p>
              A useful commercial page should help someone make sense of what they need before pushing them into product listings. That makes the page more credible,
              improves time on page, and creates cleaner internal links into more specific equipment topics.
            </p>

            <div className="grid-3">
              {productSections.map((block) => (
                <article className="product-box" key={block.title}>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </article>
              ))}
            </div>

            <h2>Recommended shopping paths</h2>
            <div className="inline-links">
              <a className="tag-link" href="https://www.lazada.com.ph/tag/cricket-bat/" target="_blank" rel="noreferrer">Lazada cricket bats</a>
              <a className="tag-link" href="https://www.lazada.com.ph/catalog/?q=cricket+ball" target="_blank" rel="noreferrer">Lazada cricket balls</a>
              <a className="tag-link" href="https://shopee.ph/search?keyword=cricket%20bat" target="_blank" rel="noreferrer">Shopee cricket bats</a>
              <a className="tag-link" href="https://shopee.ph/search?keyword=cricket%20ball" target="_blank" rel="noreferrer">Shopee cricket balls</a>
            </div>

            <h2>Commercial pages linked from here</h2>
            <ul>
              <li>Dedicated category page for cricket bats in the Philippines</li>
              <li>Dedicated category page for cricket balls in the Philippines</li>
              <li>Beginner guide explaining what to buy first</li>
              <li>Comparison content that helps users choose the right gear path</li>
            </ul>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
