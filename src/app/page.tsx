import { Metadata } from 'next';
import Image from 'next/image';

import { breadCrumbJsonLd, pageJsonLd } from '@/lib/seo';
import { PageService, PortfolioService } from '@/services';

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
    const data = await PortfolioService.getPortfolios();
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
      </>
    );
  } catch (error) {
    console.error('Failed to fetch portfolios:', error);
    return <p>Failed to load portfolios. Please try again later.</p>;
  }
}
