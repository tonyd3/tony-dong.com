import { Nav } from '../components/Nav';
import type { ReactNode } from 'react';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
        <Nav />
        <div className="content">{children}</div>
      </main>
      <footer>Made in San Francisco.</footer>
    </>
  );
}
