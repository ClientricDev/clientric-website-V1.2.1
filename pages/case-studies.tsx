import { useState, useEffect } from 'react';
import CaseStudyHero from '../components/case-studies/CaseStudyHero';
import CaseStudyList from '../components/case-studies/CaseStudyList';
import ResultsSection from '../components/case-studies/ResultsSection';
import CaseStudyCTA from '../components/case-studies/CaseStudyCTA';
import SEO from '../components/common/SEO';
import PageSchema from '../components/common/PageSchema';

export default function CaseStudiesPage() {
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
        title="Success Stories - Construction & Trades Technology Solutions"
        description="Real results from real businesses. See how construction and trades companies transformed their operations with our practical technology solutions. Featuring case studies from roofing, HVAC, and construction companies."
        canonical="https://clientric.co/case-studies"
      />
      
      <div className="min-h-screen bg-surface pt-24">
        <PageSchema
          title="Success Stories - Construction & Trades Technology Solutions"
          description="Real results from real businesses. See how construction and trades companies transformed their operations with our practical technology solutions."
          type="CollectionPage"
        />
        <article itemScope itemType="http://schema.org/Article">
          <meta itemProp="headline" content="Construction & Trades Technology Success Stories" />
          <meta itemProp="description" content="Real results from construction and trades businesses using our technology solutions." />
          <meta itemProp="author" content="Clientric CRM Consulting" />
          
          <header>
            <CaseStudyHero />
          </header>
          
          <section aria-label="Key Results" itemProp="about">
            <ResultsSection />
          </section>
          
          <section aria-label="Success Stories" itemProp="articleBody">
            <CaseStudyList />
          </section>
          
          <section aria-label="Get Started">
            <CaseStudyCTA />
          </section>
        </article>
      </div>
    </>
  );
}