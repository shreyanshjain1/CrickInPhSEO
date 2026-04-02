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
        <strong>Popular pathways</strong>
        <p className="small" style={{ marginBottom: 0 }}>
          Start with the main guide, move into clubs or venues, then use the gear pages once you know which format you want to play.
        </p>
      </div>
    </aside>
  );
}
