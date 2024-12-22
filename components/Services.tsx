import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChartBarIcon, ClockIcon, UserGroupIcon, CogIcon, DocumentMagnifyingGlassIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const services = [
  {
    id: 1,
    icon: ClockIcon,
    title: 'Process Mapping & Optimization',
    description: 'Streamline your workflows and eliminate bottlenecks',
    link: '/services/process-mapping'
  },
  {
    id: 2,
    icon: CogIcon,
    title: 'Custom CRM Solutions',
    description: 'Tailored Zoho implementations for your specific needs',
    link: '/services/crm-solutions'
  },
  {
    id: 3,
    icon: UserGroupIcon,
    title: 'Team Training & Support',
    description: 'Comprehensive training to ensure maximum adoption',
    link: '/services/training'
  },
  {
    id: 4,
    icon: ChartBarIcon,
    title: 'Technology Audits',
    description: "Discover what's working, what isn't, and what you actually need to grow your business",
    link: '/services/audits'
  },
  {
    id: 5,
    icon: DocumentMagnifyingGlassIcon,
    title: 'Technology Advisor',
    description: 'Strategic guidance for long-term success',
    link: '/services/advisor'
  },
  {
    id: 6,
    icon: AcademicCapIcon,
    title: 'Zoho Coaching',
    description: 'Expert coaching to maximize your Zoho investment',
    link: '/services/coaching'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-surface" ref={ref} itemScope itemType="http://schema.org/Service">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title" itemProp="name">Our Services</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto" itemProp="description">
            Comprehensive solutions to transform your business operations
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                className="card"
                itemScope
                itemType="http://schema.org/Service"
              >
                <service.icon className="h-12 w-12 text-accent-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3" itemProp="name">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4" itemProp="description">
                  {service.description}
                </p>
                <Link 
                  href="/contact"
                  className="text-accent-gold hover:text-accent-yellow font-semibold inline-flex items-center"
                  itemProp="url"
                >
                  Learn More 
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}