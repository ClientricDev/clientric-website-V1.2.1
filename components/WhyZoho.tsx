import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from './common/Image';

const benefits = [
  {
    id: 1,
    title: 'All-in-One Solution',
    description: 'Replace dozens of disconnected tools with a single, integrated platform',
    image: '/images/zoho/all-in-one.png',
    alt: 'Zoho All-in-One Platform Integration'
  },
  {
    id: 2,
    title: 'Built for Growth',
    description: 'Scalable solutions that grow with your business',
    image: '/images/zoho/growth.jpeg',
    alt: 'Business Growth with Zoho'
  },
  {
    id: 3,
    title: 'Cost-Effective',
    description: '60-70% more affordable than comparable enterprise solutions',
    image: '/images/zoho/cost.jpeg',
    alt: 'Cost Savings with Zoho'
  },
  {
    id: 4,
    title: 'Made for Your Industry',
    description: "Custom-built solutions for construction and home services. We know your business because it's what we do",
    image: '/images/zoho/industry.png',
    alt: 'Industry-Specific Zoho Solutions'
  }
];

export default function WhyZoho() {
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
          itemScope
          itemType="http://schema.org/Product"
        >
          <h2 className="section-title" itemProp="name">Why We Choose Zoho</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto" itemProp="description">
            As a Zoho Premium Partner, we leverage the most powerful suite of business tools to transform your operations
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map(benefit => (
              <motion.div
                key={benefit.id}
                initial={{ x: benefit.id % 2 === 0 ? 50 : -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: benefit.id * 0.1 }}
                className="card relative overflow-hidden group"
                itemScope
                itemType="http://schema.org/Offer"
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.alt}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-75"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3" itemProp="name">
                  {benefit.title}
                </h3>
                <p className="text-gray-300" itemProp="description">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Image
              src="/images/zoho-premium-partner.png"
              alt="Zoho Premium Partner Badge"
              width={400}
              height={400}
              className="mx-auto opacity-75 hover:opacity-100 transition-opacity duration-300"
              sizes="400px"
              quality={90}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}