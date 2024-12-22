import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { generateFAQSchema } from '../utils/structuredData';
import Head from 'next/head';

const faqs = [
  {
    id: 1,
    question: "How long does implementation typically take?",
    answer: "Most implementations take 2-3 months, depending on the complexity of your needs. We work in phases to ensure minimal disruption to your operations."
  },
  {
    id: 2,
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer various support packages to ensure your team gets the most out of your new systems. Our goal is to partner with you so that you grow out from actually needing us at all!"
  },
  {
    id: 3,
    question: "What makes you different from other Zoho partners?",
    answer: "We specialize in construction and home services, understanding the unique challenges of your industry. Plus, we focus on process optimization first, then implement the right technology solutions."
  },
  {
    id: 4,
    question: "What is your pricing model?",
    answer: "We offer flexible pricing options based on your needs, from project-based implementations to ongoing advisory services. Schedule a consultation for a custom quote."
  }
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-surface" ref={ref}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(faqs))
          }}
        />
      </Head>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-12">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: faq.id * 0.1 }}
                className="mb-4"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full text-left p-4 bg-surface-light rounded-lg hover:bg-surface-dark transition-colors border border-gray-800 hover:border-accent-gold"
                  aria-expanded={openId === faq.id}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white" itemProp="name">{faq.question}</h3>
                    <span className="text-2xl text-accent-gold">{openId === faq.id ? '−' : '+'}</span>
                  </div>
                  {openId === faq.id && (
                    <div itemScope itemType="https://schema.org/Answer">
                      <p className="mt-4 text-gray-300" itemProp="text">{faq.answer}</p>
                    </div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}