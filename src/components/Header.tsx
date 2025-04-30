
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Droplet className={`h-8 w-8 ${isScrolled ? 'text-irrigation-blue' : 'text-white'}`} />
          <span className={`font-bold text-xl md:text-2xl font-['Montserrat'] ${isScrolled ? 'text-irrigation-blue' : 'text-white'}`}>
            PureFlow Irrigation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`font-medium ${
                    isScrolled ? 'text-gray-700 hover:text-irrigation-green' : 'text-white hover:text-irrigation-lightBlue'
                  } transition-colors duration-300`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="btn-primary">Get a Free Quote</Button>
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
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="block font-medium text-gray-700 hover:text-irrigation-green transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button className="btn-primary w-full">Get a Free Quote</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
