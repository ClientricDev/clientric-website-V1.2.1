import { useRouter } from 'next/router';
import { COMPANY_NAME } from '../../utils/constants';

interface PageSchemaProps {
  title: string;
  description: string;
  image?: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}

export default function PageSchema({ title, description, image, type = 'WebPage' }: PageSchemaProps) {
  const router = useRouter();
  const currentUrl = `https://clientric.co${router.asPath}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title,
    "description": description,
    "url": currentUrl,
    "image": image || "https://clientric.co/images/clientric-og.jpg",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": COMPANY_NAME,
      "url": "https://clientric.co"
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": "https://clientric.co/images/clientric-logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}