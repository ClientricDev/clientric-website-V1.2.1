import { useState, useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ZohoForm from '../components/contact/ZohoForm';
import ContactInfo from '../components/contact/ContactInfo';
import SEO from '../components/common/SEO';
import PageSchema from '../components/common/PageSchema';

export default function ContactPage() {
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
        title="Contact Us - Construction & Trades Technology Experts"
        description="Get in touch with Clientric CRM Consulting. Schedule your free consultation and learn how we can help transform your construction or trades business with practical technology solutions."
        canonical="https://clientric.co/contact"
      />
      
      <div className="min-h-screen bg-surface pt-24">
        <PageSchema
          title="Contact Us - Construction & Trades Technology Experts"
          description="Get in touch with Clientric CRM Consulting. Schedule your free consultation and learn how we can help transform your business."
          type="ContactPage"
        />
        <article itemScope itemType="http://schema.org/ContactPage">
          <meta itemProp="name" content="Contact Clientric CRM Consulting" />
          <meta itemProp="description" content="Get in touch with our technology experts specializing in construction and trades businesses." />
          
          <header>
            <ContactHero />
          </header>
          
          <div className="container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12">
              <section aria-label="Contact Form" itemProp="mainContentOfPage">
                <ZohoForm />
              </section>
              
              <section aria-label="Contact Information" itemProp="contactPoint" itemScope itemType="http://schema.org/ContactPoint">
                <ContactInfo />
                <meta itemProp="contactType" content="customer service" />
                <meta itemProp="availableLanguage" content="English" />
                <meta itemProp="areaServed" content="United States" />
              </section>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}