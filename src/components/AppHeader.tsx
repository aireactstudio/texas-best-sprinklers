'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Droplet, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackPhoneCall } from '@/utils/analytics';
import { LOCATIONS, locationData } from '@/data/locationData';

// Define interfaces for navigation items
interface NavItem {
  name: string;
  path: string;
  submenu?: NavItem[];
}

const AppHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handlePhoneClick = () => {
    trackPhoneCall('(817) 304-7896', pathname);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Build Locations submenu dynamically from data set
  const formatLocationName = (slug: string) =>
    slug
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

  const locationsSubmenu: NavItem[] = LOCATIONS.map((slug) => ({
    name: (locationData as Record<string, any>)[slug]?.name ?? formatLocationName(slug),
    path: `/${slug}`,
  }));

  // Helper to split locations into columns for mega menu
  const chunkArray = <T,>(arr: T[], columns: number): T[][] => {
    const perCol = Math.ceil(arr.length / columns);
    const result: T[][] = [];
    for (let i = 0; i < columns; i++) {
      result.push(arr.slice(i * perCol, (i + 1) * perCol));
    }
    return result;
  };

  const locationsColumns = chunkArray(locationsSubmenu, 3);

  const menuItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'Sprinklers & Irrigation', 
      path: '/services',
      submenu: [
        { name: 'Sprinklers & Irrigation', path: '/services/sprinkler-installation' },
        { name: 'Sprinkler System Repair', path: '/services/sprinkler-repair' },
        { name: 'Sprinkler System Check-Up', path: '/services/sprinkler-system-check-up' },
        { name: 'Sprinkler System Reroutes', path: '/services/sprinkler-system-reroutes' },
        { name: 'Drip Irrigation', path: '/services/drip-irrigation' },
      ]
    },
    { 
      name: 'Drainage', 
      path: '/services/drainage-solutions',
      submenu: [
        { name: 'French Drains', path: '/services/french-drains' },
        { name: 'Channel Drains, Catch Basins & Grates', path: '/services/channel-drains' },
        { name: 'Sump Pumps', path: '/services/sump-pumps' },
        { name: 'Yard Drainage Systems', path: '/services/yard-drainage-systems' },
      ]
    },
    { 
      name: 'Lighting', 
      path: '/services/outdoor-lighting',
      submenu: [
        { name: 'Lighting Design & Installation Services', path: '/services/outdoor-lighting' },
        { name: 'Landscape Lighting Repair and Maintenance', path: '/services/landscape-lighting-repair' },
      ]
    },
    {
      name: 'Locations',
      path: '#',
      submenu: locationsSubmenu,
    },
    { name: 'Contact', path: '/contact' },
    // Projects page not production ready - temporarily hidden
    // { name: 'Projects', path: '/projects' },
    { 
      name: 'More', 
      path: '/about',
      submenu: [
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
      ]
    }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center max-w-none px-4 md:px-8 lg:px-12 xl:px-16">
        <Link href="/" className={`items-center space-x-2 z-[60] ${isMobileMenuOpen ? 'hidden lg:flex' : 'flex'}`}>
          <Droplet className="h-8 w-8 text-white" />
          <span className="font-bold text-lg md:text-xl lg:text-2xl font-['Montserrat'] text-white">
            Texas Best Sprinkler, Drainage and Lighting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 lg:space-x-10">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link 
                  href={item.path} 
                  className={`relative font-medium text-base lg:text-lg hover:text-irrigation-green transition-colors group-hover:text-irrigation-green ${
                    (pathname === item.path ||
                    (item.path !== '/' && pathname?.startsWith(item.path)))
                      ? (isScrolled ? 'text-irrigation-green' : 'text-irrigation-green') 
                      : 'text-white'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <span className="ml-1">▾</span>
                  )}
                </Link>
                
                {/* Desktop Dropdown */}
                {item.submenu && (
                  item.name === 'Locations' ? (
                    // Mega menu for Locations (compact, no overflow)
                    <div className="absolute right-0 mt-2 w-[600px] max-w-[95vw] bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                      <div className="p-2 grid grid-cols-2 md:grid-cols-3 gap-1">
                        {locationsColumns.map((col, idx) => (
                          <div key={idx} className="space-y-0.5">
                            {col.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.path}
                                className="block px-3 py-1.5 text-[13px] text-gray-800 rounded-md hover:bg-irrigation-blue/5 hover:text-irrigation-blue transition-colors"
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Default narrow dropdown for other items (align 'More' to right to avoid overflow)
                    <div className={`absolute ${item.name === 'More' ? 'right-0 w-56' : 'left-0 w-72'} mt-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50`}>
                      <div className={`${item.name === 'More' ? 'py-1' : 'py-2'}`}>
                        {item.submenu.map((subitem) => (
                          <div key={subitem.name} className="relative group/nested">
                            {subitem.submenu ? (
                              <div className={`flex items-center justify-between ${item.name === 'More' ? 'px-3 py-2 text-[14px]' : 'px-4 py-3 text-sm'} text-gray-800 hover:bg-irrigation-blue/5 hover:text-irrigation-blue transition-colors cursor-pointer`}>
                                <span>{subitem.name}</span>
                                <ChevronRight className="w-4 h-4" />
                                {/* Nested Dropdown */}
                                <div className="absolute top-0 left-full ml-2 w-72 bg-white rounded-md shadow-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform group-hover/nested:translate-y-0 translate-y-2">
                                  <div className="py-2">
                                    {subitem.submenu.map((nestedItem) => (
                                      <Link 
                                        key={nestedItem.name}
                                        href={nestedItem.path}
                                        className={`block ${item.name === 'More' ? 'px-3 py-2 text-[14px]' : 'px-4 py-3 text-sm'} text-gray-800 hover:bg-irrigation-blue/5 hover:text-irrigation-blue transition-colors`}
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <Link 
                                href={subitem.path}
                                className={`block ${item.name === 'More' ? 'px-3 py-2 text-[14px]' : 'px-4 py-3 text-sm'} text-gray-800 hover:bg-irrigation-blue/5 hover:text-irrigation-blue transition-colors`}
                              >
                                {subitem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </li>
            ))}
          </ul>
          <Button 
            variant="outline"
            className="text-irrigation-blue border-irrigation-blue hover:bg-irrigation-blue hover:text-white"
          >
            <Link href="/contact" className="flex items-center">
              <Phone className="w-4 h-4 mr-2" /> Get a Quote
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button - ONLY shown on screens below lg breakpoint */}
        <div className="lg:hidden block z-[70]">
          <button
            className="flex relative z-[60] w-14 h-14 items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
          <div className="w-8 h-7 flex flex-col justify-between">
            <span className={`w-full h-1 ${isMobileMenuOpen ? 'bg-white' : (isScrolled ? 'bg-irrigation-darkBlue' : 'bg-white')} transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
            <span className={`w-full h-1 ${isMobileMenuOpen ? 'bg-white' : (isScrolled ? 'bg-irrigation-darkBlue' : 'bg-white')} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-1 ${isMobileMenuOpen ? 'bg-white' : (isScrolled ? 'bg-irrigation-darkBlue' : 'bg-white')} transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
          </div>
          </button>
        </div>
      </div>

      {/* Apple-style Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div 
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-white/95 backdrop-blur-xl shadow-xl z-50 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Droplet className="h-8 w-8 text-irrigation-darkBlue" />
                    <h2 className="text-xl font-bold text-irrigation-darkBlue">Texas Best Sprinklers</h2>
                  </div>
                </div>
                
                {/* Menu Items */}
                <div className="flex-grow overflow-y-auto py-4">
                  <ul className="space-y-1 px-2">
                    {menuItems.map((item) => (
                      <li key={item.name}>
                         {item.submenu ? (
                          <>
                            <button 
                              onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                              className={`flex items-center justify-between w-full px-4 py-4 text-left text-gray-800 hover:bg-irrigation-blue/5 rounded-xl transition-colors ${activeSubmenu === item.name ? 'bg-irrigation-blue/5' : ''}`}
                            >
                              <span className="text-lg font-medium">{item.name}</span>
                              <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeSubmenu === item.name ? 'rotate-90' : ''}`} />
                            </button>
                            
                            {/* Submenu with animation */}
                            <AnimatePresence>
                              {activeSubmenu === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-6 pr-2 py-2 space-y-1">
                                    {item.submenu.map((subitem) => (
                                      <div key={subitem.name}>
                                        {subitem.submenu ? (
                                          <>
                                            <button 
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveSubmenu(activeSubmenu === subitem.name ? null : subitem.name);
                                              }}
                                              className={`flex items-center justify-between w-full px-4 py-3 text-left text-gray-600 hover:bg-irrigation-blue/5 hover:text-irrigation-blue rounded-xl transition-colors ${activeSubmenu === subitem.name ? 'bg-irrigation-blue/5 text-irrigation-blue' : ''}`}
                                            >
                                              <span>{subitem.name}</span>
                                              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeSubmenu === subitem.name ? 'rotate-90 text-irrigation-blue' : 'text-gray-400'}`} />
                                            </button>
                                            
                                            {/* Nested Submenu with animation */}
                                            <AnimatePresence>
                                              {activeSubmenu === subitem.name && (
                                                <motion.div
                                                  initial={{ height: 0, opacity: 0 }}
                                                  animate={{ height: 'auto', opacity: 1 }}
                                                  exit={{ height: 0, opacity: 0 }}
                                                  transition={{ duration: 0.2 }}
                                                  className="overflow-hidden"
                                                >
                                                  <div className="pl-6 pr-2 py-1 space-y-1">
                                                    {subitem.submenu.map((nestedItem) => (
                                                      <Link 
                                                        key={nestedItem.name}
                                                        href={nestedItem.path}
                                                        className={`block px-4 py-2 rounded-xl text-gray-500 hover:bg-irrigation-blue/5 hover:text-irrigation-blue transition-colors ${pathname === nestedItem.path ? 'text-irrigation-blue bg-irrigation-blue/5' : ''}`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                      >
                                                        {nestedItem.name}
                                                      </Link>
                                                    ))}
                                                  </div>
                                                </motion.div>
                                              )}
                                            </AnimatePresence>
                                          </>
                                        ) : (
                                          <Link 
                                            href={subitem.path}
                                            className={`block px-4 py-3 rounded-xl text-gray-600 hover:bg-irrigation-blue/5 hover:text-irrigation-blue transition-colors ${pathname === subitem.path ? 'text-irrigation-blue bg-irrigation-blue/5' : ''}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                          >
                                            {subitem.name}
                                          </Link>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link 
                            href={item.path}
                            className={`block px-4 py-4 text-lg font-medium rounded-xl ${pathname === item.path ? 'text-irrigation-blue bg-irrigation-blue/5' : 'text-gray-800 hover:bg-irrigation-blue/5'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Footer with Contact Info */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Phone className="h-5 w-5 text-irrigation-darkBlue" />
                      <a href="tel:+18173047896" onClick={handlePhoneClick} className="hover:text-irrigation-blue">(817) 304-7896</a>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Mail className="h-5 w-5 text-irrigation-darkBlue" />
                      <a href="mailto:sprinkleranddrains@gmail.com" className="hover:text-irrigation-blue">sprinkleranddrains@gmail.com</a>
                    </div>
                    <div className="flex items-start space-x-3 text-gray-700">
                      <MapPin className="h-5 w-5 mt-1 text-irrigation-darkBlue" />
                      <span>10011 Harmon Rd suite 133, Fort Worth, TX 76177</span>
                    </div>
                    <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-irrigation-darkGreen hover:bg-black text-white font-medium py-3 mt-4">
                      <Link href="/contact" className="flex items-center justify-center w-full">
                        <Phone className="w-4 h-4 mr-2" /> Get a Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Mobile Bottom CTA Bar - Only appears when scrolled on mobile */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-black py-3 px-4 lg:hidden z-50 shadow-lg shadow-black/20"
          >
            <div className="flex items-center justify-between gap-4">
              <a 
                href="tel:+18173047896"
                onClick={handlePhoneClick}
                className="flex-1 bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              
              <Link 
                href="/contact"
                className="flex-1 bg-white hover:bg-gray-100 text-irrigation-darkBlue font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AppHeader;
