import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const guaranteePoints = [
  {
    icon: ShieldCheckIcon,
    title: "100% Money-Back Guarantee",
    description: "If you're not completely satisfied with our services within the first 30 days, we'll refund your investment—no questions asked."
  },
  {
    icon: ClockIcon,
    title: "Timely Delivery Promise",
    description: "We commit to clear timelines and stick to them. Your project will be delivered on schedule, or we'll credit you for the delay."
  },
  {
    icon: CurrencyDollarIcon,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise costs. You'll always know exactly what you're paying for and why."
  }
];

export default function GuaranteeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 bg-surface-dark" ref={ref}> {/* Reduced top/bottom padding */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> {/* Reduced margin-bottom */}
            Our Guarantee to You
          </h2>
          <p className="text-lg text-gray-300 mb-6"> {/* Reduced margin-bottom */}
            We stand behind our work with iron-clad guarantees because we believe in delivering real, measurable results for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-6"> {/* Reduced gap between grid items */}
            {guaranteePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <point.icon className="h-10 w-10 text-accent-gold mx-auto mb-3" /> {/* Reduced icon size and margin-bottom */}
                <h3 className="text-lg font-bold text-white mb-2"> {/* Reduced margin-bottom */}
                  {point.title}
                </h3>
                <p className="text-sm text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
