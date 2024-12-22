import { COMPANY_NAME } from './constants';

export const DEFAULT_SEO = {
  title: COMPANY_NAME,
  titleTemplate: `%s | ${COMPANY_NAME}`,
  description: 'Expert Zoho CRM implementation and technology solutions for construction and trades businesses.',
  canonical: 'https://clientric.co',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clientric.co',
    siteName: COMPANY_NAME,
    title: COMPANY_NAME,
    description: 'Transform your construction or trades business with practical technology solutions.',
    images: [
      {
        url: 'https://clientric.co/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clientric CRM Solutions',
      },
    ],
  },
  twitter: {
    handle: '@clientric',
    site: '@clientric',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#1B365D',
    },
  ],
};

export const getPageSEO = (page: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) => ({
  ...DEFAULT_SEO,
  title: page.title,
  description: page.description,
  canonical: `https://clientric.co${page.path}`,
  openGraph: {
    ...DEFAULT_SEO.openGraph,
    url: `https://clientric.co${page.path}`,
    title: page.title,
    description: page.description,
    images: page.image ? [
      {
        url: `https://clientric.co${page.image}`,
        width: 1200,
        height: 630,
        alt: page.title,
      },
    ] : DEFAULT_SEO.openGraph.images,
  },
});