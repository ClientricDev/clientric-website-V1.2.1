import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../common/Image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Process Mapping & Optimization',
    description: 'Streamline your workflows and eliminate bottlenecks. We analyze your current processes and implement automated solutions that save time and reduce errors.',
    features: [
      'Current process analysis',
      'Workflow optimization',
      'Automation implementation',
      'Team training',
    ],
    image: '/images/process-mapping.png',
    alt: 'Process Mapping and Workflow Optimization Diagram'
  },
  {
    id: 2,
    title: 'Custom CRM Solutions',
    description: 'Tailored Zoho implementations that fit your specific needs. We configure and customize your CRM to match how your business actually works.',
    features: [
      'Custom field configuration',
      'Workflow automation',
      'Integration setup',
      'Data migration',
    ],
    image: '/images/zoho-crm-sales-dashboard.png',
    alt: 'Zoho CRM Dashboard Example'
  },
  {
    id: 3,
    title: 'Team Training & Support',
    description: 'Ensure your team actually uses the tools through comprehensive training and ongoing support that focuses on practical, day-to-day usage.',
    features: [
      'Hands-on training sessions',
      'Custom documentation',
      'Video tutorials',
      'Ongoing support',
    ],
    image: '/images/training.jpg',
    alt: 'Team Training and Support Session'
  }
];

export default function ServicesList() {
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed specifically for construction and trades businesses.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map(service => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              className="card flex flex-col"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-accent-gold mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}