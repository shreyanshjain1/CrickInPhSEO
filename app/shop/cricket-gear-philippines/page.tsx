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
    body: 'A good gear hub should explain what a beginner actually needs first, instead of dumping every product type onto the page. That usually starts with a bat, a ball, and a clearer explanation of format-specific gear.',
  },
  {
    title: 'Bats and balls',
    body: 'These are the clearest product-led topics, so I split them into dedicated pages as well. That makes keyword targeting cleaner and avoids turning one page into a messy catch-all.',
  },
  {
    title: 'Marketplace intent',
    body: 'In the Philippines, product demand often shows up through marketplace searches first. So this page is designed to support informational confidence and then move users toward relevant shopping paths.',
  },
];

export default function CricketGearPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">Commercial SEO</div>
          <h1>Cricket gear in the Philippines</h1>
          <p className="lead">
            I pushed the commercial side of the site further here. Instead of one generic product page, this section now works like a gear hub with clearer pathways into bats, balls, and beginner buying decisions.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>How I structured the gear hub</h2>
            <p>
              A stronger commercial page should not feel like a thin affiliate page. It needs enough useful information to help the reader make sense of what they need,
              while still keeping the route to products and marketplaces visible.
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
              <a className="tag-link" href="https://www.cricketstoreonline.com/" target="_blank" rel="noreferrer">International cricket store reference</a>
            </div>

            <h2>Commercial pages linked from here</h2>
            <ul>
              <li>Dedicated category page for cricket bats in the Philippines</li>
              <li>Dedicated category page for cricket balls in the Philippines</li>
              <li>Beginner guide that explains what to buy first</li>
              <li>Comparison content that helps users choose the right gear path</li>
            </ul>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
