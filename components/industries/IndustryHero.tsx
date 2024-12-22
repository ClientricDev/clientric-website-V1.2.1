import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function IndustryHero() {
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
            Built for Your Industry
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We specialize in construction and trades because that's what we know. 
            No learning curve, no explaining your business - just solutions that 
            work for your industry.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}