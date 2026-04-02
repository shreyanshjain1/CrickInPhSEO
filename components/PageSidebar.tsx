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
        <strong>Why I rebuilt the structure</strong>
        <p className="small" style={{ marginBottom: 0 }}>
          I wanted the pages to read more naturally while still keeping the content architecture,
          search intent, and SEO signals deliberate.
        </p>
      </div>
    </aside>
  );
}
