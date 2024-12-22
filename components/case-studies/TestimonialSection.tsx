import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const testimonials = [
  {
    quote: "They took the time to understand our business first, then delivered solutions that actually work for us.",
    author: "James Wilson",
    position: "Owner, Wilson Electric",
    image: "/images/testimonials/james.jpg"
  },
  {
    quote: "No fancy sales pitch, just straight talk and real solutions. That's what I appreciate about these guys.",
    author: "Robert Miller",
    position: "President, Miller Construction",
    image: "/images/testimonials/robert.jpg"
  },
  {
    quote: "Finally found someone who speaks our language and understands how we work.",
    author: "David Thompson",
    position: "Operations Manager, Thompson Mechanical",
    image: "/images/testimonials/david.jpg"
  }
];

export default function TestimonialSection() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <blockquote className="text-gray-300 text-lg mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-accent-gold">{testimonial.position}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}