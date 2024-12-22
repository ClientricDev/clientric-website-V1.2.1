import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    quote: "We had a wonderful experience working with Clientric CRM Consulting! They helped integrate new systems into our business that have been a game changer! I highly recommend them!",
    author: "Tyrell Penner",
    position: "Owner, Flatland Roofing & Insulation",
    image: "/testimonials/tyrell.jpg"
  },
  {
    id: 2,
    quote: "The ROI was immediate. Our response times are faster, nothing falls through the cracks, and our customers notice the difference.",
    author: "Sarah Johnson",
    position: "Operations Manager, Johnson Home Services",
    image: "/testimonials/sarah-johnson.jpg"
  },
  {
    id: 3,
    quote: "Finally, a tech partner who understands construction. They did not just implement Zoho—they transformed how we operate.",
    author: "Mike Davis",
    position: "Owner, Davis Contractors",
    image: "/testimonials/mike-davis.jpg"
  }
];

export default function Testimonials() {
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
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                className="card text-left"
              >
                <div className="mb-6 text-accent-gold">
                  {"★".repeat(5)}
                </div>
                <blockquote className="text-gray-300 mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}