import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../common/Image';

const caseStudies = [
  {
    id: 1,
    title: "Flatland Roofing & Insulation",
    subtitle: "Streamlining Lead Management",
    description: "Going from a variety of different, un-integrated systems to a powerful, all in one lead management and tracking system.",
    results: [
      "Implemented Automated Sales Funnel",
      "Eliminated double-data entry",
      "Servicing Leads 3x Faster"
    ],
    image: "/images/tyrell.jpg",
    quote: "We had a wonderful experience working with Clientric CRM Consulting! They helped integrate new systems into our business that have been a game changer! I highly recommend them!",
    author: "Tyrell Penner, Owner"
  }/*,
  {
    id: 2,
    title: "Johnson Plumbing",
    subtitle: "Scaling with Confidence",
    description: "Growing from 5 to 25 technicians while maintaining quality and personal service through systematic processes.",
    results: [
      "Doubled service capacity",
      "90% faster dispatching",
      "Zero missed appointments"
    ],
    image: "/images/case-studies/plumbing.jpg",
    quote: "These guys understand our business. They gave us exactly what we needed, nothing more, nothing less.",
    author: "Mike Johnson, Operations Manager"
  },
  {
    id: 3,
    title: "Davis HVAC",
    subtitle: "Mastering Growth",
    description: "How proper systems and automation helped this HVAC company handle 300% growth in 18 months.",
    results: [
      "Tripled revenue",
      "95% customer satisfaction",
      "Reduced overtime by 60%"
    ],
    image: "/images/case-studies/hvac.jpg",
    quote: "They delivered on every promise. Our business runs like a well-oiled machine now.",
    author: "Tom Davis, CEO"
  }*/
];

export default function CaseStudyList() {
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real businesses achieving real results through practical solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    quality={85}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {study.title}
                  </h3>
                  <h4 className="text-xl text-accent-gold mb-4">
                    {study.subtitle}
                  </h4>
                  <p className="text-gray-300 mb-6">
                    {study.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="text-accent-gold mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="border-l-4 border-accent-gold pl-4 mb-4">
                    <p className="text-gray-300 italic mb-2">"{study.quote}"</p>
                    <cite className="text-accent-gold not-italic">- {study.author}</cite>
                  </blockquote>
                  {/*<button className="btn-primary">
                    Read Full Story
                  </button>*/}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}