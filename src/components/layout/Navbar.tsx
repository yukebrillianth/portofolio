'use client';
import { motion } from 'framer-motion';
import React from 'react';

import useScroll from '@/lib/hooks/user-scroll';
import { cn } from '@/lib/utils';

import MainNav from './main-nav';
import MobileNav from './mobile-nav';

export default function Navbar() {
  const scrolled = useScroll(30);
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: [-10, 0, 0],
      }}
      transition={{
        duration: 1,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={cn(
        `fixed top-0 z-[50] w-full border-neutral-200 bg-transparent transition-all duration-200 ease-in-out dark:border-white/[0.1]`,
        {
          'border-transparent bg-white/10 backdrop-blur-lg dark:bg-black/50':
            scrolled,
        },
      )}
    >
      <MainNav />
      <MobileNav />
      <hr
        className={cn(
          'm-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 transition-all duration-200',
          {
            'opacity-100': scrolled,
            'opacity-0': !scrolled,
          },
        )}
      />
    </motion.header>
  );
}
