import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function CaseStudyHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="gradient-bg py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Results for Real Businesses
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            See how we've helped construction and trades businesses just like yours 
            transform their operations with practical, no-nonsense solutions.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Similar Results
          </Link>
        </motion.div>
      </div>
    </section>
  );
}