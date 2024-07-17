'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { FlipWords } from '@/components/ui/flip-words';
import AnimatedShinyText from '@/components/ui/shiny-text';

import HeroBentoGrid from '../hero-bento-grid';

export default function Hero() {
  const words = ['fullstack', 'frontend', 'web', 'backend', 'app', 'Laravel'];

  return (
    <div className='relative z-20 mx-auto w-full max-w-[84rem]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
        className='grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2'
      >
        <div className='flex flex-col items-start px-8 xl:col-span-1 xl:px-0'>
          <Link href='/projects/delta-connect'>
            <button className='group relative mb-4 inline-block w-fit cursor-pointer rounded-full bg-neutral-50 p-px text-[12px] font-semibold leading-6 text-neutral-700 no-underline shadow-zinc-900 dark:bg-neutral-700 dark:text-neutral-200 sm:text-xs md:shadow-2xl'>
              <span className='absolute inset-0 overflow-hidden rounded-full'>
                <span className='absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>
              </span>
              <div className='relative z-10 flex items-center space-x-2 rounded-full bg-neutral-100 px-4 py-1.5 ring-1 ring-white/10 dark:bg-neutral-800'>
                <AnimatedShinyText className='transition ease-out'>
                  <span>✨ Introducing Delta Connect</span>
                </AnimatedShinyText>
                <svg
                  fill='none'
                  height='16'
                  viewBox='0 0 24 24'
                  width='16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.75 8.75L14.25 12L10.75 15.25'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                  ></path>
                </svg>
              </div>
              <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40'></span>
            </button>
          </Link>
          <h1 className='relative mb-6 max-w-4xl text-left text-4xl font-bold text-zinc-700 dark:text-zinc-100 md:text-7xl'>
            <span className='inline-block align-top'>
              Hi! My name is <br />
              Yuke Brilliant,
              <br />
              <FlipWords className='px-0' words={words} /> developer
            </span>
          </h1>
          <h2 className='relative mb-8 max-w-2xl text-left text-sm leading-loose tracking-wide text-zinc-500 antialiased dark:text-zinc-300 sm:text-xl'>
            Full Stack Developer: Expertise in React, Next.js, Laravel & more.{' '}
            MAGE9 App Dev Champ &apos;23. Let’s build the future!
          </h2>
          <div className='relative mb-4 flex w-full flex-col justify-center space-y-2 sm:flex-row sm:justify-start sm:space-x-4 sm:space-y-0'>
            <Link
              target='_blank'
              className='group relative flex h-14 w-full cursor-pointer items-center justify-center space-x-2 rounded-2xl bg-slate-900 p-px px-4 py-2 text-center text-sm font-semibold text-white no-underline shadow-zinc-900 transition duration-200 hover:shadow-2xl dark:bg-white dark:text-black sm:w-52'
              href='https://go.yukebrillianth.my.id/cv'
            >
              Download CV
            </Link>
            <Link
              className='relative flex h-14 w-full items-center justify-center rounded-2xl border border-transparent bg-white text-sm text-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:shadow-lg dark:border-neutral-600 dark:bg-black dark:text-white sm:w-52'
              href='/blog'
            >
              Read My Blog
            </Link>
          </div>
          <div className='relative mt-10 w-full'>
            <p className='mb-4 text-center text-neutral-700 dark:text-neutral-500 md:text-left'>
              Built with
            </p>
            <div className='absolute left-0 z-40 block h-full w-20 bg-white [mask-image:linear-gradient(to_right,white,transparent)] dark:bg-black sm:hidden'></div>
            <div className='absolute right-0 z-40 block h-full w-20 bg-white [mask-image:linear-gradient(to_left,white,transparent)] dark:bg-black sm:hidden'></div>
            <div
              style={{
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: 'none',
              }}
              className='relative z-20 mb-4 flex items-center justify-start overflow-x-auto'
            >
              <div className='mr-4 flex items-center space-x-2'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10'
                  >
                    <path d='M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993'></path>
                    <path d='M15 12v-3'></path>
                  </svg>
                </span>
                <span className='flex-shrink-0 text-sm font-semibold text-neutral-500'>
                  Next.js
                </span>
              </div>
              <div className='mr-4 flex items-center space-x-2'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10'
                  >
                    <path d='M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102'></path>
                    <path d='M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102'></path>
                    <path d='M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2'></path>
                    <path d='M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2'></path>
                    <path d='M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896'></path>
                    <path d='M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897'></path>
                    <path d='M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z'></path>
                  </svg>
                </span>
                <span className='flex-shrink-0 text-sm font-semibold text-neutral-500'>
                  React
                </span>
              </div>
              <div className='mr-4 flex items-center space-x-2'>
                <span>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    className='h-4 w-4 flex-shrink-0 stroke-[0.5px] text-neutral-500 md:h-10 md:w-10'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z'></path>
                  </svg>
                </span>
                <span className='flex-shrink-0 text-sm font-semibold text-neutral-500'>
                  TailwindCSS
                </span>
              </div>
              <div className='mr-4 flex items-center space-x-2'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10'
                  >
                    <path d='M12 12l-8 -8v16l16 -16v16l-4 -4'></path>
                    <path d='M20 12l-8 8l-4 -4'></path>
                  </svg>
                </span>
                <span className='flex-shrink-0 text-sm font-semibold text-neutral-500'>
                  Framer Motion
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1'>
          <HeroBentoGrid />
        </div>
      </motion.div>
    </div>
  );
}
