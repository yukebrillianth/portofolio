import { NavMenuItem } from '@/types/menu';

export const navMenu: Array<NavMenuItem> = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Blog',
    href: '/blog',
    badge: {
      title: 'new',
    },
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const ctaButton = {
  title: 'Get in Touch',
  href: 'mailto:me@yukebrillianth.my.id',
};
