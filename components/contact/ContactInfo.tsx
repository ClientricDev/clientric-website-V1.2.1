import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { PHONE_NUMBER, PHONE_HREF, EMAIL, EMAIL_HREF } from '../../utils/constants';
import { useState, useEffect } from 'react';

export default function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: PHONE_NUMBER,
      link: PHONE_HREF
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: EMAIL,
      link: EMAIL_HREF
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM Pacific',
      link: null
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="card">
        <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          Whether you're ready to transform your business or just have questions, 
          we're here to help. Let's have a straight-forward conversation about your needs.
        </p>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start">
              <method.icon className="h-6 w-6 text-accent-gold mr-4 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                {method.link ? (
                  <a 
                    href={method.link} 
                    className="text-gray-300 hover:text-accent-yellow transition-colors"
                  >
                    {method.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{method.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us</h2>
        <ul className="space-y-4">
          <li className="flex items-center text-gray-300">
            <span className="text-accent-gold mr-2">✓</span>
            Full Money-Back Guarantee
          </li>
          <li className="flex items-center text-gray-300">
            <span className="text-accent-gold mr-2">✓</span>
            Construction & Trades Specialists
          </li>
          <li className="flex items-center text-gray-300">
            <span className="text-accent-gold mr-2">✓</span>
            Zoho Premium Partner
          </li>
          <li className="flex items-center text-gray-300">
            <span className="text-accent-gold mr-2">✓</span>
            No-Nonsense Solutions
          </li>
        </ul>
      </div>
    </motion.div>
  );
}