import type { Metadata } from 'next';
import PageSidebar from '@/components/PageSidebar';

export const metadata: Metadata = {
  title: 'About this cricket website build',
  description:
    'A first-person page explaining how I rebuilt the structure, design, and SEO of this cricket website project.',
  alternates: { canonical: '/about-site' },
};

export default function AboutSitePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container section-head">
          <div className="kicker">About the build</div>
          <h1>Why I rebuilt the site this way</h1>
          <p className="lead">
            I wanted one page where I could explain the decisions openly without making the rest of the website feel like it only exists to be judged as a project.
          </p>
        </div>
      </section>

      <section>
        <div className="container page-shell">
          <article className="card page-copy">
            <h2>What I changed</h2>
            <ul>
              <li>Removed the obvious instructional and tool-like wording</li>
              <li>Reworked the homepage so it behaves more like a content portal</li>
              <li>Added beginner, event, and product category pages</li>
              <li>Strengthened the commercial SEO side with cleaner product pathways</li>
              <li>Updated the design system so the UI feels more deliberate and less template-like</li>
            </ul>

            <h2>What I wanted the site to prove</h2>
            <p>
              I wanted the project to show both editorial judgment and implementation ability. The pages are not random. Each one has a search role, a linking role,
              and a reason to exist inside the larger structure.
            </p>
          </article>

          <PageSidebar />
        </div>
      </section>
    </main>
  );
}
