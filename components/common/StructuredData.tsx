import { COMPANY_NAME, PHONE_NUMBER, EMAIL } from '../../utils/constants';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_NAME,
    "url": "https://clientric.co",
    "logo": "https://clientric.co/images/clientric-logo.png",
    "description": "Expert Zoho CRM implementation and technology solutions for construction and trades businesses.",
    "email": EMAIL,
    "telephone": PHONE_NUMBER,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/clientric",
      "https://twitter.com/clientric"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}