import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, challenges, and goals through in-depth conversations with your team.'
  },
  {
    number: '02',
    title: 'Analysis',
    description: 'Our team analyzes your current processes and systems to identify opportunities for improvement and automation.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We implement tailored solutions, ensuring minimal disruption to your daily operations.'
  },
  {
    number: '04',
    title: 'Training',
    description: 'Your team receives comprehensive training to ensure they can effectively use the new systems.'
  }
];

export default function ProcessSection() {
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
            Our Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven approach to implementing technology solutions that work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card relative"
            >
              <div className="text-4xl font-bold text-accent-gold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}