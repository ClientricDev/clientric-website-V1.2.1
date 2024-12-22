import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { PHONE_NUMBER, PHONE_HREF } from '../utils/constants';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import PageSchema from '../components/common/PageSchema';

const buildValues = [
  {
    letter: "B",
    title: "Bold in Innovation",
    description: "We challenge the status quo and bring creative, effective solutions to complex problems."
  },
  {
    letter: "U",
    title: "Unwavering Accountability",
    description: "We take ownership of our work and see every project through with dedication."
  },
  {
    letter: "I",
    title: "Impact-Driven Results",
    description: "We focus on measurable success that drives your business forward."
  },
  {
    letter: "L",
    title: "Loyalty to Excellence",
    description: "We are committed to the highest standards in everything we do."
  },
  {
    letter: "D",
    title: "Dependable Systems",
    description: "We create streamlined, reliable systems that support your business long-term."
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <SEO 
        title="About Us - Construction & Trades Technology Experts"
        description="Meet the team behind Clientric CRM Consulting. With years of experience in construction and trades, we specialize in making technology work for your business. Learn about our mission to transform how construction and home service businesses operate."
        canonical="https://clientric.co/about"
      />
      
      <div className="min-h-screen bg-surface pt-20">
        <PageSchema
          title="About Us - Construction & Trades Technology Experts"
          description="Meet the team behind Clientric CRM Consulting. With years of experience in construction and trades, we specialize in making technology work for your business."
          type="AboutPage"
        />
        {/* Hero Section */}
        <section className="gradient-bg py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Meet Your Technology Partner - Kasey Luft
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  With years of focused work in construction and home services, we specialize in solutions that address the real challenges you face every day.
                </p>
                <Button href="/contact">
                  Let's Talk!
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/kasey_aboutus.jpg"
                  alt="Kasey Luft - Founder of Clientric"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-surface" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300">
                  We exist to make technology accessible and effective for businesses in construction and home services, freeing them to focus on what they do best.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300">
                  To transform how construction and home service businesses operate by making technology simple, effective, and indispensable for sustainable growth and success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why I Started Clientric */}
        <section className="py-20 bg-surface-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Why Start Clientric?
              </h2>
              <div className="card">
                <p className="text-gray-300 mb-6">
                 I started Clientric to help construction and home service businesses stop struggling with inefficient systems and underutilized technology. With firsthand experience in overcoming these challenges, I built expertise in tools like Zoho to create practical, results-driven solutions.
                </p>
                <p className="text-gray-300 mb-6">
                  I am driven by a passion for simplifying complexity, and focused on streamlining workflows, optimizing tools, and empowering business owners to regain control of their operations. Our approach bridges the gap between tech and real-world needs, making systems work as hard as you do.
                </p>
                <p className="text-gray-300">
                 Every success fuels our mission to deliver clarity and efficiency. This allows business owners to focus on what they do best. At Clientric, we care most about helping people thrive in a world of chaos.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BUILD Values */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Focused on the foundational elements of your business, this acronym directly ties to construction and systems-building.
              </p>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {buildValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card relative"
                  >
                    <div className="text-4xl font-bold text-accent-gold mb-4">
                      {value.letter}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="gradient-bg py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's have a straightforward conversation about your business needs. 
              No pressure, no jargon—just honest solutions that work.
            </p>
            <Button href="/contact">
              Schedule Your Free Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}