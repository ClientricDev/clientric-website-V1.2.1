import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { PHONE_NUMBER, PHONE_HREF } from '../../utils/constants';
import Link from 'next/link';

export default function CaseStudyCTA() {
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
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's have a straight-forward conversation about how we can help your business 
            achieve similar results. No pressure, no jargon - just honest solutions that work.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule Free Consultation
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center text-accent-yellow hover:text-accent-red transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              <span className="font-semibold text-lg">{PHONE_NUMBER}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}