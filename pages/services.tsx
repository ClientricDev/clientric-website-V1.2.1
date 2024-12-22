import { useState, useEffect } from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServicesList from '../components/services/ServicesList';
import ProcessSection from '../components/services/ProcessSection';
import GuaranteeSection from '../components/services/GuaranteeSection';
import ServiceCTA from '../components/services/ServiceCTA';
import SEO from '../components/common/SEO';
import PageBreadcrumbs from '../components/common/PageBreadcrumbs';
import RelatedContent from '../components/common/RelatedContent';

export default function ServicesPage() {
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
        title="CRM & Technology Services for Construction & Trades"
        description="Expert Zoho CRM implementation, process optimization, and technology solutions specifically designed for construction and trades businesses. Get practical solutions that deliver real results."
        canonical="https://clientric.co/services"
      />
      
      <div className="min-h-screen bg-surface pt-24">
        <PageBreadcrumbs />
        <article> {/* Semantic HTML for better SEO */}
          <ServiceHero />
          
          <section aria-label="Our Core Services">
            <ServicesList />
          </section>
          
          <section aria-label="Our Process">
            <ProcessSection />
          </section>
          
          <section aria-label="Our Guarantee">
            <GuaranteeSection />
          </section>
          
          <section aria-label="Get Started">
            <ServiceCTA />
          </section>
          <RelatedContent
            title="Related Resources"
            items={[
              {
                title: "Industries We Serve",
                description: "See how our solutions are tailored for construction and trades businesses.",
                href: "/industries"
              },
              {
                title: "Success Stories",
                description: "Read how other businesses transformed their operations with our help.",
                href: "/case-studies"
              },
              {
                title: "About Us",
                description: "Learn about our mission and commitment to your success.",
                href: "/about"
              }
            ]}
          />
        </article>
      </div>
    </>
  );
}