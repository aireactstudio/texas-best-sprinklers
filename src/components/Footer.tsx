'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Droplet } from 'lucide-react';
import { trackPhoneCall } from '@/utils/analytics';
import { SITE_CONFIG } from '@/config/site';

const Footer = () => {
  const handlePhoneClick = () => {
    trackPhoneCall('(817) 304-7896', window.location.pathname);
  };

  return (
    <footer id="site-footer" className="bg-irrigation-blue text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="h-8 w-8" />
              <span className="font-bold text-lg font-['Montserrat']">Texas Best Sprinkler, Drainage and Lighting LLC</span>
            </div>
            <p className="text-irrigation-a11y-light mb-6">
              Professional irrigation, drainage, and outdoor lighting solutions for residential and commercial properties in Fort Worth and Weatherford, Texas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/TexasBest1" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-irrigation-a11y-light-green transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-irrigation-a11y-light-green transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/sprinklerdrains" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white hover:text-irrigation-a11y-light-green transition-colors duration-300">
                {/* X (formerly Twitter) official glyph */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2H21.5l-7.882 8.994L22 22h-6.934l-5.02-6.616L4.4 22H1.044l8.61-9.835L0 2h6.934l4.654 6.16L18.244 2zm-1.21 18.237h1.86L7.35 3.65H5.49L17.034 20.237z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    href={
                      item === 'Home'
                        ? '/'
                        : item === 'Contact Us'
                        ? '/contact'
                        : `/${item.toLowerCase().replace(' ', '-')}`
                    } 
                    className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Sprinkler Installation',
                'Drainage Solutions',
                'Outdoor Lighting',
                'System Maintenance',
                'Sprinkler Repair',
                'Commercial Solutions',
              ].map((service) => {
                const routeMap: Record<string, string> = {
                  'Sprinkler Installation': '/services/sprinkler-installation',
                  'Drainage Solutions': '/services/drainage-solutions',
                  'Outdoor Lighting': '/services/lighting',
                  'System Maintenance': '/services/maintenance',
                  'Sprinkler Repair': '/services/irrigation-repair',
                  'Commercial Solutions': '/services',
                };
                const href = routeMap[service] || '/services';
                return (
                  <li key={service}>
                    <Link
                      href={href}
                      className="text-gray-300 hover:text-irrigation-green transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-irrigation-a11y-light-green" />
                <span className="text-irrigation-a11y-light">10011 Harmon Rd suite 133, Fort Worth, TX 76177</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-irrigation-a11y-light-green" />
                <a href="tel:+18173047896" onClick={handlePhoneClick} className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green transition-colors duration-300">(817) 304-7896</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-irrigation-a11y-light-green" />
                <a href="mailto:sprinkleranddrains@gmail.com" className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green transition-colors duration-300">sprinkleranddrains@gmail.com</a>
              </li>
              <li className="pt-2">
                <p className="text-irrigation-a11y-light mb-2">Hours: 7AM-7PM Mon-Sat, Closed Sunday</p>
                <Link href="/contact" className="bg-irrigation-darkGreen hover:bg-black text-white font-medium py-2 px-4 rounded transition-colors duration-300 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-irrigation-a11y-light text-sm mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Texas Best Sprinkler, Drainage and Lighting LLC. All rights reserved.</p>
              <p className="mt-1">Contractor License: <span className="font-medium">LI{SITE_CONFIG.licenseNumber.replace(/^LI/i, '')}</span></p>
            </div>
            <div className="flex space-x-5">
              <Link href="/privacy-policy" className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green text-sm transition-colors duration-300">Terms of Service</Link>
              <Link href="/sitemap-0.xml" className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green text-sm transition-colors duration-300">Sitemap</Link>
            </div>
          </div>
          <p className="text-irrigation-a11y-light text-xs text-center mt-4">
            SEO &amp; Web Development by{' '}
            <a
              href="https://reactivlabs.com"
              target="_blank"
              rel="noopener"
              className="underline hover:text-irrigation-a11y-light-green"
            >
              Reactive Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
