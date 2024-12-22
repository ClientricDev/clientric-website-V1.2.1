import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ValueProposition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
          itemScope
          itemType="http://schema.org/Product"
        >
          <h2 className="section-title" itemProp="name">
            The Problem Isn't The Tech—It's Your Process & Systems
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="card bg-surface-light">
              <h3 className="text-xl font-bold text-white mb-4">
                You're Probably Experiencing:
              </h3>
              <ul className="text-left space-y-3 text-gray-300" itemProp="description">
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✗</span>
                  Disconnected systems causing data chaos
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✗</span>
                  Hours wasted on manual data entry
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✗</span>
                  Missed opportunities and delayed responses
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✗</span>
                  Frustrated team members and customers
                </li>
              </ul>
            </div>
            
            <div className="card gradient-bg text-white">
              <h3 className="text-xl font-bold mb-4">
                What You Really Need:
              </h3>
              <ul className="text-left space-y-3" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  <span itemProp="description">A single source of truth for all data</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  <span itemProp="description">Automated workflows that save time</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  <span itemProp="description">Real-time insights for better decisions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  <span itemProp="description">Systems that work for you, not against you</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}