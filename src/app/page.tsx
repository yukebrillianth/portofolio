import Image from 'next/image';

import { PortfolioService } from '@/services';

export default async function Home() {
  const data = await PortfolioService.getPortfolios();
  return (
    <main>
      <h1>Posts</h1>
      {data.portfolios.map((portfolio) => (
        <>
          <p key={portfolio.id}>{portfolio.title}</p>
          <Image
            alt='s'
            src={portfolio.images[0].url}
            width={400}
            height={200}
            className='rounded-lg'
          />
        </>
      ))}
    </main>
  );
}
