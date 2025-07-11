
'use client';

import React from 'react';
import Link from 'next/link';
import { Droplet, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-irrigation-blue text-white">
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
              <a href="#" aria-label="Facebook" className="text-white hover:text-irrigation-a11y-light-green transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-irrigation-a11y-light-green transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-irrigation-a11y-light-green transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Projects', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
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
                'Commercial Solutions'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-300 hover:text-irrigation-green transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
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
                <a href="tel:+18173047896" className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green transition-colors duration-300">(817) 304-7896</a>
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
              <p className="mt-1">Contractor License: <span className="font-medium">LI22462</span></p>
            </div>
            <div className="flex space-x-5">
              <a href="#" className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-irrigation-a11y-light hover:text-irrigation-a11y-light-green text-sm transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
