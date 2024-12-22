import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    id: 1,
    title: 'Discovery Call',
    description: 'We learn about your business, challenges, and goals',
    points: [
      'No-pressure conversation',
      'Understanding your needs',
      'Initial recommendations'
    ]
  },
  {
    id: 2,
    title: 'Assessment',
    description: 'Deep dive into your current systems and processes',
    points: [
      'Process mapping',
      'Technology audit',
      'Gap analysis'
    ]
  },
  {
    id: 3,
    title: 'Solution Design',
    description: 'Custom blueprint for your business transformation',
    points: [
      'Tailored recommendations',
      'Implementation timeline',
      'ROI projections'
    ]
  },
  {
    id: 4,
    title: 'Implementation & support',
    description: "We are here for the long haul as your technology partner from beginning to end",
    points: [
      'Weekly meetings',
      'Agile development process',
      'Flexible training and support',
    ]
  }
];

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-surface-dark" ref={ref} itemScope itemType="http://schema.org/HowTo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title" itemProp="name">How It Works</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto" itemProp="description">
            Our proven process for transforming your business
          </p>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-accent-gold transform -translate-y-1/2 hidden md:block" />
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: step.id * 0.1 }}
                  className="relative"
                  itemProp="step"
                  itemScope
                  itemType="http://schema.org/HowToStep"
                >
                  <div className="card relative z-10">
                    <div className="w-12 h-12 bg-accent-gold text-surface rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3" itemProp="name">{step.title}</h3>
                    <p className="text-gray-300 mb-4" itemProp="text">{step.description}</p>
                    <ul className="text-left text-sm text-gray-400 space-y-2">
                      {step.points.map((point, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-accent-gold mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}