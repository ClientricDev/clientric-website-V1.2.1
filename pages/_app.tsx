import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FontLoader from '../components/common/FontLoader';
import ResourceHints from '../components/common/ResourceHints';
import { DefaultSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../next-seo.config';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AnalyticsScripts from '../components/analytics/AnalyticsScripts';
import StructuredData from '../components/common/StructuredData';
import Head from 'next/head';
import { pageview } from '../utils/analytics';

const faviconSizes = [16, 32, 48, 96, 144, 192, 256, 384, 512];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Track page views when routes change
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
      <Head>
        <ResourceHints />
        <FontLoader />
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        {faviconSizes.map(size => (
          <link 
            key={size}
            rel="icon" 
            type="image/png" 
            sizes={`${size}x${size}`}
            href={`/favicon/favicon-${size}x${size}.png`}
          />
        ))}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1B365D" />
        <meta name="msapplication-TileColor" content="#1B365D" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      </Head>
      <StructuredData />
      <AnalyticsScripts />
      <Navigation />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;