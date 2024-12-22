import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    industry: 'construction'
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="card"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-gray-300 mb-2">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="industry" className="block text-gray-300 mb-2">Industry</label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
          >
            <option value="construction">Construction</option>
            <option value="plumbing">Plumbing</option>
            <option value="hvac">HVAC</option>
            <option value="electrical">Electrical</option>
            <option value="other">Other Trade Services</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}