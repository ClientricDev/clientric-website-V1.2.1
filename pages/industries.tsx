import { useState, useEffect } from 'react';
import IndustryHero from '../components/industries/IndustryHero';
import IndustryList from '../components/industries/IndustryList';
import IndustryBenefits from '../components/industries/IndustryBenefits';
import IndustryCTA from '../components/industries/IndustryCTA';
import SEO from '../components/common/SEO';
import PageBreadcrumbs from '../components/common/PageBreadcrumbs';
import RelatedContent from '../components/common/RelatedContent';

export default function IndustriesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SEO 
        title="Construction & Trades Technology Solutions"
        description="Specialized technology solutions for construction, roofing, HVAC, and trades businesses. Expert Zoho CRM implementation and process optimization designed specifically for your industry."
        canonical="https://clientric.co/industries"
      />
      
      <div className="min-h-screen bg-surface pt-24">
        <PageBreadcrumbs />
        <article itemScope itemType="http://schema.org/Article">
          <meta itemProp="headline" content="Construction & Trades Technology Solutions" />
          <meta itemProp="description" content="Specialized technology solutions for construction, roofing, HVAC, and trades businesses." />
          
          <header>
            <IndustryHero />
          </header>
          
          <section aria-label="Industries We Serve">
            <IndustryList />
          </section>
          
          <section aria-label="Benefits for Your Business">
            <IndustryBenefits />
          </section>
          
          <section aria-label="Get Started">
            <IndustryCTA />
          </section>
          <RelatedContent
            title="Explore More"
            items={[
              {
                title: "Our Services",
                description: "Discover our comprehensive technology solutions.",
                href: "/services"
              },
              {
                title: "Success Stories",
                description: "See real results from businesses like yours.",
                href: "/case-studies"
              },
              {
                title: "Contact Us",
                description: "Ready to transform your business? Let's talk.",
                href: "/contact"
              }
            ]}
          />
        </article>
      </div>
    </>
  );
}