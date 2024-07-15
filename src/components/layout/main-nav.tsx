'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { ctaButton, navMenu } from '@/data/menu';
import { cn } from '@/lib/utils';

import Logo from '../logo';

export default function MainNav() {
  const pathName = usePathname();

  return (
    <div className='hidden lg:block'>
      <div className='mx-auto flex h-16 max-w-[88rem] items-center px-8'>
        <div className='mr-4 hidden md:flex'>
          <Link
            className='mr-10 flex items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-orange-500 dark:text-gray-100'
            href='/'
          >
            <div className='flex flex-col'>
              <Logo />
            </div>
          </Link>
        </div>
        <Link
          className='mr-2 inline-flex h-9 items-center justify-center rounded-md px-0 py-2 text-base font-medium transition-colors hover:bg-transparent hover:text-accent-foreground focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 md:hidden'
          type='button'
          aria-haspopup='dialog'
          aria-expanded='false'
          aria-controls='radix-:rn:'
          data-state='closed'
          href='/'
        >
          <div className='relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-black text-sm text-white antialiased md:h-6 md:w-6'>
            <Image alt='Logo' width='50' height='50' src='/logo.png' />
          </div>
        </Link>
        <nav
          itemScope
          itemType='http://www.schema.org/SiteNavigationElement'
          className='flex items-center space-x-6 text-sm font-medium xl:flex'
        >
          {navMenu.map((menu) => (
            <Link
              itemProp='url'
              key={menu.title}
              target={menu.external ? '_blank' : undefined}
              className={cn(
                'hidden space-x-1 text-foreground/60 transition-colors hover:text-foreground/80 sm:flex',
                {
                  'text-white': pathName === menu.href,
                },
              )}
              href={menu.href}
            >
              <span itemProp='name' className='mr-1'>
                {menu.title}
              </span>
              {menu.badge && (
                <span className='rounded-md border border-orange-600 bg-orange-200 px-1.5 py-0.5 text-xs leading-none text-orange-700 no-underline group-hover:no-underline dark:bg-orange-300/10 dark:text-orange-500'>
                  {menu.badge?.title}
                </span>
              )}
            </Link>
          ))}
        </nav>
        <div className='flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end'>
          <Link href={ctaButton.href} target='_blank'>
            <button className='group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900'>
              <span className='absolute inset-0 overflow-hidden rounded-full'>
                <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
              </span>
              <div className='relative z-10 flex items-center rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10'>
                <span>{ctaButton.title}</span>
              </div>
              <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-orange-400/0 via-orange-400/90 to-orange-400/0 transition-opacity duration-500 group-hover:opacity-40' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
