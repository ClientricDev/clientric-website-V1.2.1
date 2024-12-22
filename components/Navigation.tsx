import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './common/Logo';
import { NAV_LINKS, PHONE_NUMBER, PHONE_HREF } from '../utils/constants';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  if (!isMounted) {
    return null;
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      role="banner"
      itemScope
      itemType="http://schema.org/Organization"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className="relative" 
          itemScope 
          itemType="http://schema.org/SiteNavigationElement"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex justify-between items-center h-24">
            <Logo className="py-2" width={140} height={45} />

            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-accent-yellow transition-colors text-lg"
                  itemProp="url"
                >
                  <span itemProp="name">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <a
                href={PHONE_HREF}
                className="flex items-center text-accent-yellow hover:text-accent-red transition-colors text-lg"
                itemProp="telephone"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                <span className="font-semibold">{PHONE_NUMBER}</span>
              </a>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 bg-surface-dark border-t border-gray-800">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-gray-300 hover:text-accent-yellow text-lg"
                  onClick={() => setIsOpen(false)}
                  itemProp="url"
                >
                  <span itemProp="name">{link.label}</span>
                </Link>
              ))}
              <a
                href={PHONE_HREF}
                className="block py-3 text-accent-yellow font-semibold text-lg"
                itemProp="telephone"
              >
                <PhoneIcon className="h-6 w-6 inline mr-2" />
                {PHONE_NUMBER}
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}