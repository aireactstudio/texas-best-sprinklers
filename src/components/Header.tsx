
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Droplet, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Droplet className={`h-8 w-8 ${isScrolled ? 'text-irrigation-blue' : 'text-white'}`} />
          <span className={`font-bold text-lg md:text-xl font-['Montserrat'] ${isScrolled ? 'text-irrigation-blue' : 'text-white'}`}>
            Texas Best Sprinklers, Drainage and Outdoor Lighting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/** Base classes for animated underline and larger type */}
          {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          {(() => { const _ = null; return _ })()}
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className={`relative inline-flex items-center text-base lg:text-lg px-2 py-1 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:bg-current after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === '/' ? 'text-irrigation-green' : 
                  isScrolled ? 'text-gray-700 hover:text-irrigation-green' : 'text-white hover:text-irrigation-lightBlue'
                } transition-colors duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`relative inline-flex items-center text-base lg:text-lg px-2 py-1 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:bg-current after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === '/about' ? 'text-irrigation-green' : 
                  isScrolled ? 'text-gray-700 hover:text-irrigation-green' : 'text-white hover:text-irrigation-lightBlue'
                } transition-colors duration-300`}
              >
                About
              </Link>
            </li>
            <li className="relative group">
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`relative inline-flex items-center text-base lg:text-lg px-2 py-1 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:bg-current after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname?.startsWith('/services') ? 'text-irrigation-green' : 
                  isScrolled ? 'text-gray-700 hover:text-irrigation-green' : 'text-white hover:text-irrigation-lightBlue'
                } transition-colors duration-300`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Services Dropdown */}
              <div 
                className={`absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  servicesDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
                }`}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="py-1">
                  <Link 
                    href="/services/sprinkler-installation"
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${pathname?.startsWith('/services/sprinkler-installation') ? 'bg-gray-50 text-irrigation-blue font-medium' : ''}`}
                  >
                    Sprinkler Installation
                  </Link>
                  <Link 
                    href="/services/irrigation-repair"
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${pathname?.startsWith('/services/irrigation-repair') ? 'bg-gray-50 text-irrigation-blue font-medium' : ''}`}
                  >
                    Irrigation Repair
                  </Link>
                  <Link 
                    href="/services/sprinkler-repair"
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${pathname?.startsWith('/services/sprinkler-repair') ? 'bg-gray-50 text-irrigation-blue font-medium' : ''}`}
                  >
                    Sprinkler Repair
                  </Link>
                  <Link 
                    href="/services/maintenance"
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${pathname?.startsWith('/services/maintenance') ? 'bg-gray-50 text-irrigation-blue font-medium' : ''}`}
                  >
                    Maintenance
                  </Link>
                  <Link 
                    href="/services/drainage-solutions"
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${pathname?.startsWith('/services/drainage-solutions') ? 'bg-gray-50 text-irrigation-blue font-medium' : ''}`}
                  >
                    Drainage Solutions
                  </Link>
                  <Link 
                    href="/services/outdoor-lighting"
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${pathname?.startsWith('/services/outdoor-lighting') ? 'bg-gray-50 text-irrigation-blue font-medium' : ''}`}
                  >
                    Outdoor Lighting
                  </Link>
                </div>
              </div>
            </li>
            {/* Projects page not production ready - temporarily hidden
            <li>
              <Link 
                href="/projects" 
                className={`font-medium ${
                  pathname === '/projects' ? 'text-irrigation-green' : 
                  isScrolled ? 'text-gray-700 hover:text-irrigation-green' : 'text-white hover:text-irrigation-lightBlue'
                } transition-colors duration-300`}
              >
                Projects
              </Link>
            </li>
            */}
            <li>
              <Link 
                href="/blog" 
                className={`relative inline-flex items-center text-base lg:text-lg px-2 py-1 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:bg-current after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname?.startsWith('/blog') ? 'text-irrigation-green' : 
                  isScrolled ? 'text-gray-700 hover:text-irrigation-green' : 'text-white hover:text-irrigation-lightBlue'
                } transition-colors duration-300`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`relative inline-flex items-center text-base lg:text-lg px-2 py-1 font-medium after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:bg-current after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === '/contact' ? 'text-irrigation-green' : 
                  isScrolled ? 'text-gray-700 hover:text-irrigation-green' : 'text-white hover:text-irrigation-lightBlue'
                } transition-colors duration-300`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Button 
            variant="outline"
            className="text-irrigation-blue border-irrigation-blue hover:bg-irrigation-blue hover:text-white"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-irrigation-blue p-2 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg className={`w-6 h-6 ${isScrolled ? 'text-irrigation-blue' : 'text-white'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4 px-6 space-y-4">
            <li>
              <Link 
                href="/" 
                className={`relative font-medium text-sm hover:text-irrigation-blue transition-colors ${
                  pathname === '/' 
                  ? 'text-irrigation-blue' 
                  : 'text-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`relative font-medium text-sm hover:text-irrigation-blue transition-colors ${
                  pathname === '/about' 
                  ? 'text-irrigation-blue' 
                  : 'text-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            
            {/* Services with expandable submenu */}
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <Link 
                  href="/services" 
                  className={`relative font-medium text-sm hover:text-irrigation-blue transition-colors ${
                    pathname?.startsWith('/services') 
                    ? 'text-irrigation-blue' 
                    : 'text-gray-800'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </div>
              
              {/* Services submenu */}
              <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                <Link 
                  href="/services/sprinkler-installation" 
                  className={`block text-sm ${
                    pathname?.startsWith('/services/sprinkler-installation') 
                    ? 'text-irrigation-blue font-medium' 
                    : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sprinkler Installation
                </Link>
                <Link 
                  href="/services/irrigation-repair" 
                  className={`block text-sm ${
                    pathname?.startsWith('/services/irrigation-repair') 
                    ? 'text-irrigation-blue font-medium' 
                    : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Irrigation Repair
                </Link>
                <Link 
                  href="/services/sprinkler-repair" 
                  className={`block text-sm ${
                    pathname?.startsWith('/services/sprinkler-repair') 
                    ? 'text-irrigation-blue font-medium' 
                    : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sprinkler Repair
                </Link>
                <Link 
                  href="/services/maintenance" 
                  className={`block text-sm ${
                    pathname?.startsWith('/services/maintenance') 
                    ? 'text-irrigation-blue font-medium' 
                    : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Maintenance
                </Link>
                <Link 
                  href="/services/drainage-solutions" 
                  className={`block text-sm ${
                    pathname?.startsWith('/services/drainage-solutions') 
                    ? 'text-irrigation-blue font-medium' 
                    : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Drainage Solutions
                </Link>
                <Link 
                  href="/services/outdoor-lighting" 
                  className={`block text-sm ${
                    pathname?.startsWith('/services/outdoor-lighting') 
                    ? 'text-irrigation-blue font-medium' 
                    : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Outdoor Lighting
                </Link>
              </div>
            </li>
            
            {/* Projects page not production ready - temporarily hidden
            <li>
              <Link 
                href="/projects" 
                className={`relative font-medium text-sm hover:text-irrigation-blue transition-colors ${
                  pathname === '/projects' 
                  ? 'text-irrigation-blue' 
                  : 'text-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            */}
            <li>
              <Link 
                href="/blog" 
                className={`relative font-medium text-sm hover:text-irrigation-blue transition-colors ${
                  pathname?.startsWith('/blog') 
                  ? 'text-irrigation-blue' 
                  : 'text-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`relative font-medium text-sm hover:text-irrigation-blue transition-colors ${
                  pathname === '/contact' 
                  ? 'text-irrigation-blue' 
                  : 'text-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <Button className="w-full bg-irrigation-blue text-white font-medium">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
