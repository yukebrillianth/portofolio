import {
  BreadcrumbList,
  ListItem,
  Organization,
  SearchAction,
  WebSite,
  WithContext,
} from 'schema-dts';

import { getBaseUrl } from './helpers';

type SearchActionWithQueryInput = SearchAction & {
  'query-input': string;
};

type BreadcrumbInput = {
  name: string;
  item: string;
};

const searchAction: SearchActionWithQueryInput = {
  '@type': 'SearchAction',
  target: {
    '@type': 'EntryPoint',
    urlTemplate: getBaseUrl() + '/blog/search?q={search_term_string}',
  },
  'query-input': 'required name=search_term_string',
};

const publisher: Organization = {
  '@type': 'Organization',
  name: 'Yuke Brilliant',
  url: getBaseUrl(),
  logo: {
    '@type': 'ImageObject',
    url: '/logo.png',
    width: '250',
    height: '250',
  },
};

export function breadCrumbJsonLd(
  crumbs: Array<BreadcrumbInput | null> = [],
): WithContext<BreadcrumbList> {
  // Menambahkan crumb 'Home' di awal breadcrumb
  if (!crumbs[0]) {
    crumbs = [{ name: 'Home', item: getBaseUrl() }];
  } else {
    crumbs = [{ name: 'Home', item: getBaseUrl() }, ...crumbs];
  }

  // Membuat elemen itemList untuk JSON-LD
  const itemListElement: ListItem[] = crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb?.name ?? '',
    item: crumb?.item ?? '',
  }));

  // Mengembalikan JSON-LD untuk breadcrumb
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement,
  };
}

export function pageJsonLd(
  ogImage: string,
  path: string,
  socials: Array<string>,
): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: getBaseUrl() + path,
    name: 'Yuke Brilliant',
    description:
      'Portofolio Yuke Brilliant, Full Stack Developer dari Surabaya, Jawa Timur. Spesialisasi dalam web development, menerima jasa pembuatan website yang responsif dan efisien.',
    publisher: publisher,
    potentialAction: searchAction,
    image: {
      '@type': 'ImageObject',
      url: ogImage,
      width: '1200',
      height: '630',
    },
    sameAs: socials,
    mainEntityOfPage: getBaseUrl(),
  };
}
