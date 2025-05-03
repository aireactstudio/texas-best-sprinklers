'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AppHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          <span className={`font-bold text-xl md:text-2xl font-['Montserrat'] ${isScrolled ? 'text-irrigation-blue' : 'text-white'}`}>
            Texas Best Sprinklers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Projects', path: '/projects' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path} 
                  className={`relative font-medium text-sm hover:text-irrigation-blue transition-colors ${(
                    pathname === item.path ||
                    (item.path !== '/' && pathname?.startsWith(item.path))
                  ) 
                    ? (isScrolled ? 'text-irrigation-blue' : 'text-irrigation-green') 
                    : (isScrolled ? 'text-gray-800' : 'text-white')
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
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
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className={`w-6 h-5 flex flex-col justify-between ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            <span className={`w-full h-0.5 ${isScrolled ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 ${isScrolled ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 ${isScrolled ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 w-full z-50">
          <ul className="space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Projects', path: '/projects' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path}
                  className={`block py-3 text-lg ${pathname === item.path ? 'text-irrigation-green' : 'text-gray-700'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <Button className="w-full bg-irrigation-blue text-white font-medium">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
