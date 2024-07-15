'use client';
import { FileTextIcon } from '@radix-ui/react-icons';
import { Layers2 } from 'lucide-react';
import Image from 'next/image';

import IconCloud from '@/components/ui/icon-cloud';
import { cn } from '@/lib/utils';

import { BentoCard, BentoGrid } from './magicui/bento-grid';
import { BorderBeam } from './magicui/border-beam';
import Marquee from './magicui/marquee';
import Meteors from './magicui/meteors';

const slugs = [
  'typescript',
  'javascript',
  'go',
  'react',
  'tailwindcss',
  'android',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'docker',
  'git',
  'laravel',
  'github',
  'visualstudiocode',
  'figma',
  'nestjs',
  'graphql',
  'ubuntu',
];

const files = [
  {
    name: 'Juara 1 Mage9',
    image:
      'https://img.yukebrillianth.my.id/upload/o_webp/https://r2.yukebrillianth.my.id/MAGEEE/WhatsApp-Image-2023-11-20-at-14.52.22.jpeg',
    description:
      'Delta Connect application exhibition stand at the ITS Robotics Center',
  },
  {
    name: 'Juara 1 Mage9',
    image:
      'https://img.yukebrillianth.my.id/upload/o_webp,w_200/https://r2.yukebrillianth.my.id/MAGEEE/IMG_20231119_173500.jpg',
    description:
      'Received a Certificate as 1st place winner in the MAGE 9 App Development competition',
  },
  {
    name: 'Juara 1 Mage9',
    image:
      'https://img.yukebrillianth.my.id/upload/o_webp,w_200/https://r2.yukebrillianth.my.id/MAGEEE/IMG_20231119_075825.jpg',
    description:
      'Delta Connect application exhibition stand at the ITS Robotics Center',
  },
  {
    name: 'Juara 1 Mage9',
    image:
      'https://img.yukebrillianth.my.id/upload/o_webp,w_200/https://r2.yukebrillianth.my.id/MAGEEE/IMG_20231119_112519.jpg',
    description:
      'Delta Connect application exhibition stand at the ITS Robotics Center',
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: 'This is me',
    description: 'When I just graduated from high school.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    titleColor: 'dark',
    descriptionColor: 'dark',
    background: (
      <>
        <BorderBeam size={250} duration={12} delay={9} />
        <div className='mx-auto flex items-center justify-center'>
          <figure className='absolute top-0 min-h-full [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]'>
            <Image
              src='https://img.yukebrillianth.my.id/upload/o_webp,w_800/https://r2.yukebrillianth.my.id/profile.jpg'
              width={800}
              height={800}
              className='max-h-[70%] rounded object-cover'
              alt='yukebrillianth'
            />
          </figure>
        </div>
      </>
    ),
  },
  {
    Icon: Layers2,
    name: 'Tech Stack',
    description: 'The Tech Stack I use in my projects.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2 text-white',
    titleColor: 'dark',
    descriptionColor: 'dark',
    background: (
      <div className='relative mx-auto flex max-w-[70%] items-center justify-center'>
        <IconCloud iconSlugs={slugs} />
      </div>
    ),
  },
  {
    Icon: FileTextIcon,
    name: 'MAGE 9 Champ.',
    description: 'Won 1st place in the MAGE9 App Dev.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 group/card',
    titleColor: 'dark',
    descriptionColor: 'dark',
    background: (
      <>
        <Meteors number={30} />
        <Marquee
          pauseOnHover
          className='absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]'
        >
          {files.map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
                'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
                'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
                'transform-gpu blur-[0.5px] transition-all duration-300 ease-out hover:blur-none',
              )}
            >
              <Image
                src={f.image}
                width={500}
                height={500}
                className='max-h-[20%] rounded object-cover'
                alt={f.name}
              />
              <blockquote className='mb-16 mt-2 text-xs'>
                {f.description}
              </blockquote>
            </figure>
          ))}
        </Marquee>
      </>
    ),
  },
];

export default function HeroBentoGrid() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
