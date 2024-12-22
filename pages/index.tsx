import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import TrustIndicators from '../components/TrustIndicators';
import HowWeHelp from '../components/HowWeHelp';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import('../components/FAQ'), {
  loading: () => <div className="h-96 bg-surface animate-pulse" />
});
const DynamicWhyZoho = dynamic(() => import('../components/WhyZoho'));
const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <div className="h-64 bg-surface animate-pulse" />
});
import { getPageSEO } from '../utils/seo';
import { NextSeo } from 'next-seo';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NextSeo
        {...getPageSEO({
          title: 'Construction & Trades Technology Solutions | Zoho CRM Experts',
          description: 'Transform your construction or trades business with practical technology solutions. Expert Zoho CRM implementation, process optimization, and systems that actually work.',
          path: '/',
          image: '/images/home-og.jpg'
        })}
      />
      
      <div className="min-h-screen bg-surface">
        <article itemScope itemType="http://schema.org/WebPage">
          <meta itemProp="name" content="Clientric CRM Consulting - Construction & Trades Technology Solutions" />
          <meta itemProp="description" content="Expert Zoho CRM implementation and technology solutions for construction and trades businesses." />
          
          <header>
            <Hero />
          </header>

          <section aria-label="Trust Indicators" itemProp="about">
            <TrustIndicators />
          </section>

          <section aria-label="Value Proposition" itemProp="mainContentOfPage">
            <ValueProposition />
          </section>

          <section aria-label="Benefits" itemProp="about">
            <HowWeHelp />
          </section>

          <section aria-label="Why Choose Zoho" itemProp="about">
            <DynamicWhyZoho />
          </section>

          <section aria-label="Our Services" itemProp="offers" itemScope itemType="http://schema.org/Offer">
            <Services />
            <meta itemProp="category" content="Business Technology Services" />
          </section>

          <section aria-label="How It Works" itemProp="workExample">
            <HowItWorks />
          </section>

          <section aria-label="Frequently Asked Questions" itemProp="mainEntity" itemScope itemType="http://schema.org/FAQPage">
            <FAQ />
          </section>
        </article>
      </div>
    </>
  );
}