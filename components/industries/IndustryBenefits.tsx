import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClockIcon, CurrencyDollarIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: ClockIcon,
    title: 'Save Time',
    description: 'Eliminate paperwork and manual data entry with automated workflows designed for your industry.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Increase Profits',
    description: 'Reduce overhead and improve efficiency with streamlined operations and better resource management.'
  },
  {
    icon: UserGroupIcon,
    title: 'Empower Your Team',
    description: 'Give your team the tools they need to work efficiently and serve customers better.'
  },
  {
    icon: ChartBarIcon,
    title: 'Grow Your Business',
    description: 'Scale your operations with confidence using systems that grow with you.'
  }
];

export default function IndustryBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-surface-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Benefits for Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real solutions that deliver measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <benefit.icon className="h-12 w-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}