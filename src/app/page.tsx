import { Metadata } from 'next';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/hero';
import { Spotlight } from '@/components/ui/spotlight';
// import Image from 'next/image';
import { breadCrumbJsonLd, pageJsonLd } from '@/lib/seo';
import { PageService } from '@/services';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await PageService.getSinglePage('/');
  return {
    title: metadata.page.title + ' | Yuke Brilliant',
    description: metadata.page.seo.description,
    keywords: metadata.page.seo.keywords,
    openGraph: {
      images: [metadata.page.seo.image.url],
      type: 'website',
      description: metadata.page.seo.description,
      title: metadata.page.seo.title,
      siteName: ' ',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@yukebrillianth',
      title: metadata.page.seo.title,
      description: metadata.page.seo.description,
      images: [metadata.page.seo.image.url],
    },
  };
}

export default async function Home() {
  try {
    // const data = await PortfolioService.getPortfolios();
    const socials = await PageService.getSiteSocials();
    const jsonLd = pageJsonLd(
      '',
      '/',
      socials.socials.map((social) => social.url),
    );
    const breadCrumb = breadCrumbJsonLd();
    return (
      <>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumb) }}
        />
        <Navbar />
        <div className='relative overflow-hidden px-2 pb-40 pt-28 md:px-4 md:pt-40 lg:px-8'>
          <div className='pointer-events-none absolute inset-0 select-none bg-grid-black/[0.04] [mask-image:linear-gradient(to_bottom_right,white_10%,transparent_35%)] dark:bg-grid-white/[0.06]'></div>
          <Spotlight
            className='-top-60 left-0 md:-top-10 md:left-60'
            fill='white'
            fillOpacity={0.15}
          />
          <Hero />
        </div>
      </>
    );
  } catch (error) {
    console.error('Failed to fetch portfolios:', error);
    return <p>Failed to load portfolios. Please try again later.</p>;
  }
}
