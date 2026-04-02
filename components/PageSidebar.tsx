import Link from 'next/link';
import { sidebarLinks } from '@/lib/site-data';

export default function PageSidebar() {
  return (
    <aside className="panel sidebar">
      <h3>Explore the project</h3>
      {sidebarLinks.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
      <div className="callout">
        <strong>Portfolio angle</strong>
        <p className="small" style={{ marginBottom: 0 }}>
          This site is intentionally built like a search and content lead case study, not just a fan site.
        </p>
      </div>
    </aside>
  );
}
