import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChartBarIcon, ClockIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    id: 1,
    icon: ClockIcon,
    number: '85%',
    label: 'Time Saved on Data Entry',
    description: 'Get your evenings back with automated workflows'
  },
  {
    id: 2,
    icon: ChartBarIcon,
    number: '3x',
    label: 'Faster Response Times',
    description: 'Never miss another opportunity'
  },
  {
    id: 3,
    icon: UserGroupIcon,
    number: '95%',
    label: 'Team Adoption Rate',
    description: 'Systems your team will actually use'
  },
  {
    id: 4,
    icon: CogIcon,
    number: '300+',
    label: 'Processes Automated',
    description: 'Let technology handle the repetitive tasks'
  }
];

export default function HowWeHelp() {
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
          className="text-center"
        >
          <h2 className="section-title">Real Results for Real Businesses</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We do not just implement tools—we transform how your business operates
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                className="card hover:border-accent-gold"
                itemScope
                itemType="http://schema.org/Offer"
              >
                <stat.icon className="h-12 w-12 text-accent-gold mx-auto mb-4" />
                <div className="text-4xl font-bold text-accent-gold mb-2" itemProp="price">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2" itemProp="name">
                  {stat.label}
                </div>
                <p className="text-gray-300" itemProp="description">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}