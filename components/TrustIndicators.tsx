import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const trustPoints = [
  {
    title: "Straight Talk, Real Results",
    description: "No tech jargon, just honest advice and proven solutions that work for your business."
  },
  {
    title: "Industry-Focused, Results-Driven",
    description: "With years of focused work in construction and home services, we specialize in solutions that address the real challenges you face every day."
  },
  {
    title: "100% Money-Back Guarantee",
    description: "Because we believe in results, we offer a full money-back guarantee if you're not completely satisfied with our services."
  }
];

export default function TrustIndicators() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-surface-dark py-16 border-t border-b border-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="flex flex-col items-center text-center p-6 bg-surface rounded-lg shadow-lg border border-gray-800 hover:border-accent-gold hover:shadow-xl transition-all duration-300"
              itemScope
              itemType="http://schema.org/Offer"
            >
              <div className="w-16 h-1 bg-accent-gold mb-6"></div>
              <h3 className="text-xl font-bold text-white mb-2" itemProp="name">
                {point.title}
              </h3>
              <p className="text-gray-300" itemProp="description">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}