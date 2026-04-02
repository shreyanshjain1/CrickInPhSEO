import Link from 'next/link';
import { sidebarLinks } from '@/lib/site-data';

export default function PageSidebar() {
  return (
    <aside className="panel sidebar">
      <h3>Explore the site</h3>
      {sidebarLinks.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
      <div className="callout neutral-callout">
        <strong>Start here</strong>
        <p className="small" style={{ marginBottom: 0 }}>
          New readers usually begin with the main guide, then move into clubs, venues, or gear depending on what they want next.
        </p>
      </div>
    </aside>
  );
}
