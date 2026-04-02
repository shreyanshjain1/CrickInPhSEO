
import Link from 'next/link';
import { sidebarLinks } from '@/lib/site-data';

export default function PageSidebar() {
  return (
    <aside className="panel sidebar">
      <h3>Browse the case study</h3>
      {sidebarLinks.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
      <div className="callout">
        <strong>My goal with this build</strong>
        <p className="small" style={{ marginBottom: 0 }}>
          I wanted this site to feel like a real portfolio piece that shows both SEO thinking and implementation skill.
        </p>
      </div>
    </aside>
  );
}
