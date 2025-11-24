/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/about', label: 'About' },
  { href: '/investing', label: 'Investing' },
  { href: '/wines', label: 'Wines' },
  { href: '/coffee', label: 'Coffees' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={pathname === link.href ? 'active' : undefined}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
