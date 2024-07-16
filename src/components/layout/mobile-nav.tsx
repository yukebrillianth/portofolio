'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { ctaButton, navMenu } from '@/data/menu';
import { cn } from '@/lib/utils';

import Logo from '../logo';

export default function MobileNav() {
  const pathName = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='block lg:hidden'>
      <div className='flex w-full items-center justify-between rounded-md px-4 py-4'>
        <Link href='/' className='flex items-center gap-1.5'>
          <Logo />
        </Link>
        <div className='flex flex-row items-center justify-center gap-2'>
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

          {open ? (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='0'
                className='h-6 w-6 text-black dark:text-white'
                viewBox='0 0 512 512'
                onClick={() => setOpen(false)}
              >
                <path d='M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z'></path>
              </svg>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='fixed inset-0 top-[62px] z-50 flex h-screen flex-col items-start justify-start space-y-10 bg-white bg-white/10 pt-3 text-xl text-zinc-600 backdrop-blur-lg transition duration-200 hover:text-zinc-800 dark:bg-black/80'
              >
                <div className='flex flex-col items-start justify-start gap-[20px] px-5'>
                  {navMenu.map((menu) => (
                    <Link
                      key={menu.title}
                      target={menu.external ? '_blank' : undefined}
                      className={cn(
                        'relative flex items-center text-foreground/60 transition-colors hover:text-foreground/80 sm:flex',
                        { 'text-white': pathName == menu.href },
                      )}
                      href={menu.href}
                    >
                      {menu.title}
                      {menu.badge && (
                        <span className='ml-2 rounded-md border border-orange-600 bg-orange-200 px-1.5 py-0.5 text-xs leading-none text-orange-700 no-underline group-hover:no-underline dark:bg-orange-300/10 dark:text-orange-500'>
                          {menu.badge?.title}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth='0'
              className='h-6 w-6 text-black dark:text-white'
              viewBox='0 0 512 512'
              onClick={() => setOpen(true)}
            >
              <path d='M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 96H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 96H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z'></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
