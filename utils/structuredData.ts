import { FAQ } from '../types';

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateVideoSchema(videoId: string, title: string, description: string, thumbnailUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": new Date().toISOString(),
    "embedUrl": `https://www.youtube.com/embed/${videoId}`,
    "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
    "duration": "PT2M30S", // Example duration, update as needed
    "publisher": {
      "@type": "Organization",
      "name": "Clientric CRM Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://clientric.co/images/clientric-logo.png"
      }
    }
  };
}