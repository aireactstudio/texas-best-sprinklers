
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

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
  }, [router.pathname]);

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
            Texas Best Sprinkler
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
                  className={`font-medium ${
                    router.pathname === item.path ? 'text-irrigation-green' : 
                    isScrolled ? 'text-gray-700 hover:text-irrigation-green' : 'text-white hover:text-irrigation-lightBlue'
                  } transition-colors duration-300`}
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
                    router.pathname === item.path ||
                    (item.path !== '/' && router.pathname.startsWith(item.path))
                  ) 
                    ? (isScrolled ? 'text-irrigation-blue' : 'text-irrigation-green') 
                    : (isScrolled ? 'text-gray-800' : 'text-white')
                  }`}
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

export default Header;
