import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  defaultTitle: 'Clientric CRM Consulting',
  titleTemplate: '%s | Clientric CRM Consulting',
  description: 'Expert Zoho CRM implementation and technology solutions for construction and trades businesses.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clientric.co/',
    siteName: 'Clientric CRM Consulting',
    images: [
      {
        url: 'https://clientric.co/images/clientric-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Clientric CRM Consulting',
      },
    ],
  },
  twitter: {
    handle: '@clientric',
    site: '@clientric',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
  ],
};