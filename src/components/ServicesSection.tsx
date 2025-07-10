'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Droplet, Wrench, Sprout, Lightbulb, CloudRain } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  locationPrefix?: string;
  featured?: boolean;
  index: number;
  isSelected?: boolean;
  onSelect?: (index: number) => void;
  longDescription?: string;
  formattedTitle?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link, 
  locationPrefix = '', 
  featured = false,
  index,
  isSelected = false,
  onSelect,
  longDescription,
  formattedTitle
}) => {
  const fullLink = locationPrefix ? `/${locationPrefix}${link}` : link;
  
  // Handle card selection
  const handleCardClick = () => {
    if (onSelect && !isSelected) {
      onSelect(index);
    }
  };
  
  // Features list for featured cards
  const getFeaturesList = function() {
    const title = arguments[0];
    switch(title) {
      case 'Sprinkler Installation':
        return [
          'Custom system design tailored to your landscape',
          'Water-efficient sprinkler heads and nozzles',
          'Smart controller installation and setup',
          'Professional installation by certified technicians',
          'Full system testing and calibration'
        ];
      case 'Irrigation Repair':
        return [
          'Leak detection and repair',
          'Broken head replacement',
          'Valve and solenoid troubleshooting',
          'Controller programming and repair',
          'System pressure optimization'
        ];
      case 'Maintenance':
        return [
          'Seasonal system inspections',
          'Winterization services',
          'Spring start-up and testing',
          'Controller programming updates',
          'System efficiency optimization'
        ];
      case 'Drainage Solutions':
        return [
          'Yard drainage assessment',
          'French drain installation',
          'Surface drain solutions',
          'Downspout extensions',
          'Erosion control measures'
        ];
      case 'Outdoor Lighting':
        return [
          'Custom lighting design',
          'Path and walkway lighting',
          'Accent and spotlight installation',
          'Security lighting solutions',
          'Smart lighting controls'
        ];
      default:
        return [];
    }
  };
  
  // Long descriptions for each service
  const getExpandedDescription = (longDescription: string | undefined, title: string) => {
    return longDescription || `Our professional ${title.toLowerCase()} services are designed to provide you with the best quality and value. We use only premium materials and the latest techniques to ensure your outdoor space looks beautiful and functions perfectly year-round.`;
  };
  
  return isSelected ? (
    // Featured service card - larger with more emphasis
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl h-full border-2 border-irrigation-green flex flex-col relative cursor-pointer">
      {/* Currently selected indicator */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-irrigation-green text-white text-xs font-bold py-1 px-3 rounded-full">
        Currently Viewing
      </div>
      
      <div className="flex items-center mb-4">
        <div className="h-14 w-14 rounded-full bg-irrigation-darkGreen bg-opacity-20 flex items-center justify-center text-irrigation-darkGreen mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-irrigation-darkBlue">{formattedTitle || title}</h3>
      </div>
      
      {/* Extended description */}
      <p className="text-gray-800 mb-4 text-sm">{getExpandedDescription(longDescription, title)}</p>
      
      {/* Features list */}
      <div className="mb-4">
        <h4 className="text-base font-semibold text-irrigation-darkBlue mb-2">What's Included:</h4>
        <ul className="space-y-1 text-sm">
          {getFeaturesList().map((feature, i) => (
            <li key={i} className="flex items-start">
              <div className="text-irrigation-green mr-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Testimonial */}
      <div className="bg-irrigation-a11y-light-green rounded-lg p-3 mb-4">
        <p className="text-irrigation-darkGreen italic text-xs mb-1">"The team at Texas Best Sprinklers did an amazing job with our {title.toLowerCase()}. Professional, efficient, and the results exceeded our expectations!"</p>
        <p className="text-irrigation-darkGreen font-medium text-xs">— Satisfied Customer in Fort Worth</p>
      </div>
      
      <div className="mt-auto flex flex-col sm:flex-row gap-2">
        <Link 
          href={fullLink} 
          className="text-white bg-irrigation-darkGreen hover:bg-irrigation-darkBlue transition-colors duration-300 inline-flex items-center justify-center py-2 px-4 rounded-md font-medium text-sm"
          aria-label={`Learn more about ${title}`}>
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/contact" 
          className="text-irrigation-darkGreen border border-irrigation-darkGreen hover:bg-irrigation-a11y-light-green transition-colors duration-300 inline-flex items-center justify-center py-2 px-4 rounded-md font-medium text-sm"
          aria-label={`Get a quote for ${title}`}>
          <span>Get a Quote</span>
        </Link>
      </div>
    </div>
  ) : (
    // Standard service card - no longer clickable as a whole
    <div 
      className="bg-white rounded-lg shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full border border-gray-200 group relative"
    >
      
      <div className="flex items-center mb-3">
        <div className="h-12 w-12 rounded-full bg-irrigation-darkGreen bg-opacity-20 flex items-center justify-center mr-3 text-irrigation-darkGreen">
          {icon}
        </div>
        <h3 className="text-base font-bold text-irrigation-darkBlue">{formattedTitle || title}</h3>
      </div>
      
      <p className="text-gray-800 mb-3 text-sm">{description}</p>
      
      {/* Quick features - just 2 key points */}
      <ul className="mb-3 space-y-1">
        {getFeaturesList().slice(0, 2).map((feature, i) => (
          <li key={i} className="flex items-start">
            <div className="text-irrigation-green mr-1.5 mt-0.5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-600 text-xs">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Button container */}
      <div className="flex gap-2 mt-auto">
        {/* View Details button - keeps existing functionality */}
        <button 
          className="text-irrigation-darkGreen font-semibold hover:text-irrigation-darkBlue transition-colors duration-300 inline-flex items-center text-sm flex-1 justify-center py-1"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* View Page link - navigates to service page */}
        <Link 
          href={fullLink}
          className="bg-irrigation-green text-white font-semibold hover:bg-irrigation-darkGreen transition-colors duration-300 inline-flex items-center text-sm flex-1 justify-center py-1 px-2 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span>View Page</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>
    </div>
  )
};

interface ServicesSectionProps {
  cityName?: string;
  routePrefix?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ cityName, routePrefix }) => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  // Reference to the expanded details section for scrolling on mobile
  const expandedDetailsRef = useRef<HTMLDivElement>(null);
  // Track if we're in mobile view
  const [isMobileView, setIsMobileView] = useState(false);
  
  // Helper function to get the expanded description for a service
  const getServiceDescription = (longDescription: string | undefined, title: string) => {
    return longDescription || `Our professional ${title.toLowerCase()} services are designed to provide you with the best quality and value. We use only premium materials and the latest techniques to ensure your outdoor space looks beautiful and functions perfectly year-round.`;
  };
  
  // Helper function to get features for a specific service
  const getFeaturesForService = (serviceTitle: string) => {
    switch(serviceTitle) {
      case 'Sprinkler Installation':
        return [
          'Custom system design tailored to your landscape',
          'Water-efficient sprinkler heads and nozzles',
          'Smart controller installation and setup',
          'Professional installation by certified technicians',
          'Full system testing and calibration'
        ];
      case 'Irrigation Repair':
        return [
          'Leak detection and repair',
          'Broken head replacement',
          'Valve and solenoid troubleshooting',
          'Controller programming and repair',
          'System pressure optimization'
        ];
      case 'Sprinkler Repair':
        return [
          'Fast response times',
          'Broken sprinkler head repair and replacement',
          'Leak detection and repair',
          'Valve and solenoid troubleshooting',
          'Control box programming and repair'
        ];
      case 'Maintenance':
        return [
          'Seasonal system inspections',
          'Winterization services',
          'Spring start-up and testing',
          'Controller programming updates',
          'System efficiency optimization'
        ];
      case 'Drainage Solutions':
        return [
          'Yard drainage assessment',
          'French drain installation',
          'Surface drain solutions',
          'Downspout extensions',
          'Erosion control measures'
        ];
      case 'Outdoor Lighting':
        return [
          'Custom lighting design',
          'Path and walkway lighting',
          'Accent and spotlight installation',
          'Security lighting solutions',
          'Smart lighting controls'
        ];
      default:
        return [];
    }
  };
  
  // Check viewport size on mount and window resize
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 1024); // lg breakpoint
    };
    
    // Initial check
    checkViewport();
    
    // Add event listener for resize
    window.addEventListener('resize', checkViewport);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkViewport);
  }, []);
  
  // Handle service selection
  const handleServiceSelect = (index: number) => {
    // If same service clicked again on mobile, treat as a toggle
    if (isMobileView && index === selectedServiceIndex) {
      return; // Do nothing, let the user tap the View Details button
    }
    
    setSelectedServiceIndex(index);
    
    // On mobile, adjust scroll position to show the expanded content with more context
    if (isMobileView) {
      setTimeout(() => {
        if (expandedDetailsRef.current) {
          // Get the parent card element (the clicked card)
          const parentCard = expandedDetailsRef.current.previousElementSibling;
          
          if (parentCard) {
            // Get the current scroll position
            const currentScrollY = window.scrollY;
            
            // Calculate the position we want to scroll to (align the card with top of viewport with some padding)
            const cardTop = parentCard.getBoundingClientRect().top + window.pageYOffset;
            const targetScrollPosition = cardTop - 20; // 20px padding from top
            
            // Scroll smoothly to that position
            window.scrollTo({
              top: targetScrollPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 200); // Longer delay to ensure DOM is fully updated
    }
  };
  
  // Format service title with location name if provided
  const formatServiceTitle = (title: string) => {
    if (!cityName) return title;
    return `${title} in ${cityName}`;
  };
  
  const services = [
    {
      icon: <Sprout size={32} />,
      title: "Sprinkler Installation",
      description: "Custom-designed sprinkler systems that ensure even water distribution and maximum coverage for your landscape.",
      link: "/services/sprinkler-installation",
      longDescription: "Our professional sprinkler installation services create custom irrigation systems tailored to your specific landscape needs. We carefully analyze your yard's unique characteristics, including sun exposure, soil type, plant varieties, and water requirements to design the most efficient system possible. Our certified technicians use only premium components and follow industry best practices to ensure your new system provides years of reliable performance."
    },
    {
      icon: <Droplet size={32} />,
      title: "Irrigation Repair",
      description: "Expert repair services for all types of irrigation systems, fixing leaks, broken heads, and controller issues quickly and efficiently.",
      link: "/services/irrigation-repair",
      longDescription: "Our irrigation repair services address all types of system issues, from minor leaks to major component failures. We use advanced diagnostic techniques to quickly identify problems and implement lasting solutions. Whether you're dealing with broken sprinkler heads, malfunctioning valves, controller issues, or mysterious leaks, our experienced technicians have the skills and tools to restore your system to optimal performance."
    },
    {
      icon: <Wrench size={32} />,
      title: "Sprinkler Repair",
      description: "Fast, reliable repair services for all types of sprinkler system issues, from broken heads and leaks to valve problems and controller malfunctions.",
      link: "/services/sprinkler-repair",
      longDescription: "Our expert sprinkler repair services provide fast, efficient solutions for all your system problems. We diagnose and fix broken heads, leaking pipes, malfunctioning valves, and controller issues with precision and care. Our experienced technicians use quality replacement parts and proper techniques to ensure lasting repairs, helping you save water and protect your landscape investment."
    },
    {
      icon: <Wrench size={32} />,
      title: "Maintenance",
      description: "Regular maintenance services to keep your irrigation system running at peak efficiency, including seasonal check-ups and adjustments.",
      link: "/services/maintenance",
      longDescription: "Our comprehensive maintenance services help extend the life of your irrigation system while maximizing water efficiency. We offer seasonal tune-ups, including spring start-up and winterization, along with regular inspections to catch small issues before they become costly problems. Our maintenance plans include adjusting sprinkler heads, checking for leaks, programming controllers, and ensuring your system is operating at peak efficiency throughout the year."
    },
    {
      icon: <CloudRain size={32} />,
      title: "Drainage Solutions",
      description: "Effective drainage systems to prevent water pooling and landscape damage, protecting your property from erosion and flooding.",
      link: "/services/drainage-solutions",
      longDescription: "Our drainage solutions address water management issues that can damage your landscape and home foundation. We design and install comprehensive drainage systems including French drains, surface drains, channel drains, and downspout extensions to effectively move water away from problem areas. Our expert team will assess your property's specific needs and implement custom solutions that protect your landscape investment and prevent costly water damage."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Outdoor Lighting",
      description: "Professional landscape lighting that enhances your property's beauty, security, and value while extending outdoor living spaces.",
      link: "/services/outdoor-lighting",
      longDescription: "Our outdoor lighting services transform your landscape into a beautiful, functional space that can be enjoyed day and night. We design custom lighting solutions that highlight your property's best features, improve safety along walkways and stairs, and enhance security around your home. Using energy-efficient LED fixtures and smart control systems, we create stunning lighting effects that add value to your property while minimizing energy consumption."
    },
    {
      icon: <CloudRain size={32} />,
      title: "French Drain Installation",
      description: "Expert French drain installation to effectively manage water flow and protect your property from water damage, flooding, and erosion.",
      link: "/services/drainage-solutions",
      longDescription: "Our professional French drain installation services provide long-lasting solutions for water management issues on your property. We expertly design and install French drains that effectively collect and redirect excess groundwater away from problem areas. Using high-quality materials including perforated pipes, proper gravel gradients, and geotextile fabric, our French drains provide superior drainage that protects your home's foundation, prevents erosion, eliminates standing water, and preserves your landscape investment."
    },
  ];

  // Location-specific text variations for SEO
  const locationTitle = cityName ? `Our ${cityName} Irrigation Services` : 'Our Irrigation Services';
  const locationDescription = cityName 
    ? `Comprehensive sprinkler, drainage, and lighting solutions for ${cityName} homes and businesses` 
    : 'Comprehensive sprinkler, drainage, and lighting solutions for your outdoor spaces';

  // The location prefix for the service links
  // Use provided routePrefix if available, otherwise generate from cityName
  const locationPrefix = routePrefix || (cityName ? cityName.toLowerCase().replace(' ', '-') : '');

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-[1440px] w-full">
        <div className="text-center mb-16">
          <div className="inline-block bg-irrigation-a11y-light-green text-irrigation-a11y-green px-4 py-2 rounded-full mb-4 font-medium">
            Professional Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">
            {cityName ? `Complete Outdoor Services in ${cityName}` : `Complete Outdoor Services`}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {cityName 
              ? `Explore our professional outdoor services designed specifically for ${cityName} properties and conditions`
              : `We provide expert outdoor solutions designed to enhance your property while ensuring optimal functionality year-round.`
            }
          </p>
        </div>
        
        <div className="mb-6">
          {/* Interactive service layout with selectable cards */}
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden lg:block py-4">
            <div className="grid grid-cols-12 gap-6">
              {/* Featured service - currently selected service */}
              <div className="col-span-6 xl:col-span-5">
                <ServiceCard 
                  {...services[selectedServiceIndex]} 
                  locationPrefix={locationPrefix} 
                  isSelected={true}
                  index={selectedServiceIndex}
                  onSelect={handleServiceSelect}
                  formattedTitle={cityName ? formatServiceTitle(services[selectedServiceIndex].title) : undefined}
                />
              </div>
              
              {/* Secondary services grid */}
              <div className="col-span-6 xl:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                  {services.map((service, index) => (
                    index !== selectedServiceIndex && (
                      <ServiceCard 
                        key={index} 
                        {...service} 
                        locationPrefix={locationPrefix} 
                        isSelected={false}
                        index={index}
                        onSelect={handleServiceSelect}
                        formattedTitle={cityName ? formatServiceTitle(service.title) : undefined}
                      />
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Layout - Hidden on desktop */}
          <div className="lg:hidden">
            {/* Service cards in a vertical scrollable list */}
            <div className="space-y-4 mb-6">
              {services.map((service, index) => {
                // Add formattedTitle to each service for mobile view
                const serviceWithFormattedTitle = {
                  ...service,
                  formattedTitle: cityName ? formatServiceTitle(service.title) : undefined
                };
                return (
                <div key={index} className="relative">
                  {/* Standard card that acts as a toggle button */}
                  <div 
                    className={`bg-white rounded-lg shadow-lg p-5 transition-all duration-300 
                      border ${selectedServiceIndex === index ? 'border-irrigation-green border-2' : 'border-gray-200'}`}
                  >
                    <div className="flex items-center mb-3">
                      <div className="h-12 w-12 rounded-full bg-irrigation-darkGreen bg-opacity-20 flex items-center justify-center mr-3 text-irrigation-darkGreen">
                        {serviceWithFormattedTitle.icon}
                      </div>
                      <h3 className="text-base font-bold text-irrigation-darkBlue">{serviceWithFormattedTitle.formattedTitle || serviceWithFormattedTitle.title}</h3>
                      
                      {/* Indicator if this card is selected */}
                      <div className="ml-auto">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 transition-transform duration-300 ${selectedServiceIndex === index ? 'text-irrigation-green rotate-180' : 'text-gray-400'}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-gray-800 mb-3 text-sm">{serviceWithFormattedTitle.description}</p>
                    
                    {/* Button container for mobile */}
                    {selectedServiceIndex !== index && (
                      <div className="flex gap-2 mt-3">
                        {/* View Details button */}
                        <button 
                          className="text-irrigation-darkGreen font-semibold hover:text-irrigation-darkBlue transition-colors duration-300 inline-flex items-center text-sm flex-1 justify-center py-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceSelect(index);
                          }}
                        >
                          <span>View Details</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        
                        {/* View Page link */}
                        <Link 
                          href={locationPrefix ? `/${locationPrefix}${serviceWithFormattedTitle.link}` : serviceWithFormattedTitle.link}
                          className="bg-irrigation-green text-white font-semibold hover:bg-irrigation-darkGreen transition-colors duration-300 inline-flex items-center text-sm flex-1 justify-center py-1 px-2 rounded"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View Page</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {/* Expanded content - only shown if this is the selected service */}
                  {selectedServiceIndex === index && (
                    <div 
                      ref={expandedDetailsRef}
                      className="mt-3 bg-white rounded-lg shadow-lg p-6 border-2 border-irrigation-green"
                    >
                      {/* Extended description */}
                      <p className="text-gray-800 mb-4 text-sm">{getServiceDescription(service.longDescription, service.title)}</p>
                      
                      {/* Features list */}
                      <div className="mb-4">
                        <h4 className="text-base font-semibold text-irrigation-darkBlue mb-2">What's Included:</h4>
                        <ul className="space-y-1 text-sm">
                          {getFeaturesForService(service.title).map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="text-irrigation-green mr-2 mt-1 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Testimonial */}
                      <div className="bg-irrigation-a11y-light-green rounded-lg p-3 mb-4">
                        <p className="text-irrigation-darkGreen italic text-xs mb-1">"The team at Texas Best Sprinklers did an amazing job with our {service.title.toLowerCase()}. Professional, efficient, and the results exceeded our expectations!"</p>
                        <p className="text-irrigation-darkGreen font-medium text-xs">— Satisfied Customer in Fort Worth</p>
                      </div>
                      
                      <div className="mt-4 flex flex-col gap-2">
                        <Link 
                          href={locationPrefix ? `/${locationPrefix}${service.link}` : service.link} 
                          className="text-white bg-irrigation-darkGreen hover:bg-irrigation-darkBlue transition-colors duration-300 inline-flex items-center justify-center py-2 px-4 rounded-md font-medium text-sm"
                          aria-label={`Learn more about ${service.title}`}>
                          <span>View Details</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <Link 
                          href="/contact" 
                          className="text-irrigation-darkGreen border border-irrigation-darkGreen hover:bg-irrigation-a11y-light-green transition-colors duration-300 inline-flex items-center justify-center py-2 px-4 rounded-md font-medium text-sm"
                          aria-label={`Get a quote for ${service.title}`}>
                          <span>Get a Quote</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );})}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
