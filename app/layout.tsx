import './globals.css';
import type { Metadata } from 'next';
import { Fraunces, Space_Grotesk } from 'next/font/google';
import { ReactNode } from 'react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tony Dong',
  description: 'Minimal, thoughtful web presence for Tony Dong.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
