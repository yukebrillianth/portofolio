import { Metadata } from 'next';
import Image from 'next/image';

import { PortfolioService } from '@/services';

export const metadata: Metadata = {
  title: 'Home | Yuke Brilliant',
  description:
    'Portofolio Yuke Brilliant, Full Stack Developer dari Surabaya, Jawa Timur. Spesialisasi dalam web development, menerima jasa pembuatan website yang responsif dan efisien.',
  keywords: [
    'yukebrillianth',
    'Yuke Brilliant',
    'full stack developer',
    'web development',
    'jasa pembuatan website',
    'Surabaya',
    'JavaScript',
    'React',
    'Node.js',
    'portofolio',
    'portfolio',
  ],
  openGraph: {
    images: [
      'https://img.yukebrillianth.my.id/upload/o_webp,q_80/https://r2.yukebrillianth.my.id/home-og-image.jpeg',
    ],
    type: 'website',
    description:
      'Portofolio Yuke Brilliant, Full Stack Developer dari Surabaya, Jawa Timur. Spesialisasi dalam web development, menerima jasa pembuatan website yang responsif dan efisien.',
    title: 'Home | Yuke Brilliant',
    siteName: 'Yuke Brilliant',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yukebrillianth',
    title: 'Home | Yuke Brilliant',
    description:
      'Portofolio Yuke Brilliant, Full Stack Developer dari Surabaya, Jawa Timur. Spesialisasi dalam web development, menerima jasa pembuatan website yang responsif dan efisien.',
    images: [
      'https://img.yukebrillianth.my.id/upload/o_webp,q_80/https://r2.yukebrillianth.my.id/home-og-image.jpeg',
    ],
  },
};

export default async function Home() {
  try {
    const data = await PortfolioService.getPortfolios();
    return (
      <main>
        <h1>Posts</h1>
        {data.portfolios.map((portfolio) => (
          <div key={portfolio.id}>
            <p>{portfolio.title}</p>
            <Image
              alt={portfolio.title}
              src={portfolio.images[0].url}
              width={400}
              height={200}
              className='rounded-lg'
            />
          </div>
        ))}
      </main>
    );
  } catch (error) {
    console.error('Failed to fetch portfolios:', error);
    return <p>Failed to load portfolios. Please try again later.</p>;
  }
}
