import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClockIcon, ChartBarIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const results = [
  {
    icon: ClockIcon,
    stat: '85%',
    label: 'Time Saved',
    description: 'Average reduction in administrative tasks'
  },
  {
    icon: ChartBarIcon,
    stat: '3x',
    label: 'Faster Response',
    description: 'Improvement in customer response times'
  },
  {
    icon: CurrencyDollarIcon,
    stat: '40%',
    label: 'Cost Reduction',
    description: 'Decrease in operational costs'
  },
  {
    icon: UserGroupIcon,
    stat: '95%',
    label: 'Team Adoption',
    description: 'Average system adoption rate'
  }
];

export default function ResultsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-surface-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <result.icon className="h-12 w-12 text-accent-gold mx-auto mb-4" />
              <div className="text-4xl font-bold text-accent-gold mb-2">
                {result.stat}
              </div>
              <div className="text-xl font-bold text-white mb-2">
                {result.label}
              </div>
              <p className="text-gray-300">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}