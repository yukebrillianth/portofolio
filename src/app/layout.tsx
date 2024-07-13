import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/app/providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport: Viewport = {
  themeColor: 'black',
};

export const metadata: Metadata = {
  title: {
    default: 'Yuke Brilliant',
    template: '%s | Yuke Brilliant',
  },
  description:
    'Portofolio Yuke Brilliant, Full Stack Developer dari Surabaya, Jawa Timur. Spesialisasi dalam web development, menerima jasa pembuatan website yang responsif dan efisien.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
