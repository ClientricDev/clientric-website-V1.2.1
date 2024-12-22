import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../common/Button';

export default function ServiceHero() {
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
            Technology Solutions That Actually Work
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            No unnecessary complexity. No overselling. Just practical solutions 
            that deliver real results for construction and trades businesses.
          </p>
          <Button href="/contact">
            Schedule Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}