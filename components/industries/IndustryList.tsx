import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../common/Image';
import Link from 'next/link';

const industries = [
  {
    id: 1,
    title: "Construction",
    description: "From general contractors to specialty builders, we understand the unique challenges of managing projects, crews, and equipment in the construction industry.",
    image: "/images/industries/construction.jpeg",
    benefits: [
      "Project management automation",
      "Equipment tracking",
      "Crew scheduling",
      "Document management"
    ]
  },
  {
    id: 2,
    title: "Roofing",
    description: "Keep your roofing business organized and efficient with systems designed specifically for managing estimates, jobs, and customer communication.",
    image: "/images/industries/roofing.jpeg",
    benefits: [
      "Estimate automation",
      "Job tracking",
      "Material management",
      "Customer updates"
    ]
  },
  {
    id: 3,
    title: "Home Exteriors",
    description: "Streamline your exterior renovation business with tools that help manage leads, projects, and customer relationships effectively.",
    image: "/images/industries/exteriors.jpeg",
    benefits: [
      "Lead management",
      "Project scheduling",
      "Installation tracking",
      "Warranty management"
    ]
  },
  {
    id: 4,
    title: "General Contracting",
    description: "Take control of your contracting business with integrated systems that handle everything from bidding to project completion.",
    image: "/images/industries/general-contracting.jpeg",
    benefits: [
      "Bid management",
      "Subcontractor coordination",
      "Timeline tracking",
      "Budget control"
    ]
  }
];

export default function IndustryList() {
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
          className="grid md:grid-cols-2 gap-8"
        >
          {industries.map(industry => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: industry.id * 0.1 }}
              className="card"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  quality={85}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
              <p className="text-gray-300 mb-6">{industry.description}</p>
              <ul className="space-y-2 mb-6">
                {industry.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-accent-gold mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary w-full text-center">
                Schedule Free Consultation
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}