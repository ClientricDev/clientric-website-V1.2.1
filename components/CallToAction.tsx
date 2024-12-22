import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { PHONE_NUMBER, PHONE_HREF } from '../utils/constants';
import Button from './common/Button';

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="gradient-bg py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Stop Wrestling with Your Technology?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's have a straight-forward conversation about your business needs.
            No pressure, no jargon - just honest solutions that work.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button href="/contact">
              Schedule Free Consultation
            </Button>
            <a
              href={PHONE_HREF}
              className="flex items-center text-white hover:text-accent-yellow transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span className="font-semibold">{PHONE_NUMBER}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}