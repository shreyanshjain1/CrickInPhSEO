import Link from 'next/link';
import { sidebarLinks } from '@/lib/site-data';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-badge">CP</span>
          <span>Cricket PH Growth Lab</span>
        </Link>

        <nav className="nav">
          {sidebarLinks.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
