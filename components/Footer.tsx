import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { PHONE_NUMBER, PHONE_HREF, EMAIL, EMAIL_HREF, COMPANY_NAME, COMPANY_TAGLINE, FOOTER_LINKS } from '../utils/constants';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer 
      className="bg-gray-900 text-white pt-16 pb-8" 
      itemScope 
      itemType="http://schema.org/Organization"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4" itemProp="name">{COMPANY_NAME}</h3>
            <p className="text-gray-400 mb-4" itemProp="description">{COMPANY_TAGLINE}</p>
            <div className="flex flex-col space-y-2">
              {mounted && (
                <>
                  <a 
                    href={PHONE_HREF} 
                    className="flex items-center text-gray-400 hover:text-accent-yellow transition-colors" 
                    itemProp="telephone"
                    aria-label="Call us"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                    <span>{PHONE_NUMBER}</span>
                  </a>
                  <a 
                    href={EMAIL_HREF} 
                    className="flex items-center text-gray-400 hover:text-accent-yellow transition-colors" 
                    itemProp="email"
                    aria-label="Email us"
                  >
                    <EnvelopeIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                    <span>{EMAIL}</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-accent-yellow transition-colors"
                    itemProp="url"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Industries */}
          <nav aria-label="Industries">
            <h4 className="text-lg font-bold mb-4">Industries</h4>
            <ul className="space-y-2" itemProp="knowsAbout">
              {FOOTER_LINKS.industries.map((link) => (
                <li key={link.href}>
                  <Link 
                    href="/industries" 
                    className="text-gray-400 hover:text-accent-yellow transition-colors"
                    itemProp="serviceType"
                  >
                    <span className="text-gray-400 hover:text-accent-yellow transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Started */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get Started</h4>
            <p className="text-gray-400 mb-4">
              Ready to transform your business? Schedule your free consultation today.
            </p>
            <Link 
              href="/contact" 
              className="btn-primary w-full text-center"
              itemProp="potentialAction" 
              itemScope 
              itemType="http://schema.org/ContactAction"
            >
              <span itemProp="name">Book Consultation</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>
            <span itemProp="copyrightYear">{new Date().getFullYear()}</span>
            {' '}
            <span itemProp="copyrightHolder">{COMPANY_NAME}</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}