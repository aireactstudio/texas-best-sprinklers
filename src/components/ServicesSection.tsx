'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Droplet, Wrench, Sprout, Lightbulb, CloudRain, Hammer } from 'lucide-react';

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
  resolvedLink?: string; // fully-resolved href to use when provided
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
  formattedTitle,
  resolvedLink
}) => {
  // If a resolvedLink is provided (from location mapping), use it.
  // Otherwise, use the fallback 'link' (which should be a global /services/... link).
  // We no longer automatically prepend locationPrefix to 'link', as that causes 404s
  // when a specific location page doesn't exist.
  const fullLink = resolvedLink || link;
  
  // Handle card selection
  const handleCardClick = () => {
    if (onSelect && !isSelected) {
      onSelect(index);
    }
  };
  
  // Features list for featured cards
  const getFeaturesList = function(title: string) {
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
      case 'SOD Installation & Land Leveling':
        return [
          'Professional SOD installation matched to North Texas conditions',
          'Land leveling, sanding, and grading to fix low spots and pooling',
          'Integration with existing or new irrigation systems',
          'Drainage-friendly slopes away from the home',
          'Clean edges around driveways, patios, and beds'
        ];
      case 'Hardscaping':
        return [
          'Concrete slabs, patios, and utility pads',
          'Retaining walls — block, concrete, and stone',
          'Walkways, steps, and stairways',
          'Landscape borders and concrete curbing',
          'Coordination with existing irrigation systems'
        ];
      case 'Sprinkler Repair':
        return [
          'Fast response times',
          'Broken sprinkler head repair and replacement',
          'Leak detection and repair',
          'Valve and solenoid troubleshooting',
          'Control box programming and repair'
        ];
      case 'French Drain Installation':
        return [
          'Site assessment and slope planning',
          'Perforated pipe and clean gravel envelope',
          'Geotextile fabric to limit soil intrusion',
          'Tie-in to surface drainage where appropriate',
          'Discharge routed away from the foundation'
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
          {getFeaturesList(title).map((feature, i) => (
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
          href="/contact" 
          className="text-white bg-irrigation-darkGreen hover:bg-irrigation-darkBlue transition-colors duration-300 inline-flex items-center justify-center py-2 px-4 rounded-md font-medium text-sm"
          aria-label={`Contact us about ${title}`}>
          <span>Contact Us</span>
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
      className="bg-slate-50 rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full border border-gray-200 group relative"
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
        {getFeaturesList(title).slice(0, 2).map((feature, i) => (
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
        
        {/* Service page (matches mobile: opens full service URL) */}
        <Link
          href={fullLink}
          className="bg-irrigation-green text-white font-semibold hover:bg-irrigation-darkGreen transition-colors duration-300 inline-flex items-center text-sm flex-1 justify-center py-1 px-2 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Service page</span>
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
  const featuredPanelRef = useRef<HTMLDivElement>(null);
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
      case 'Hardscaping':
        return [
          'Concrete slabs, patios, and utility pads',
          'Retaining walls — block, concrete, and stone',
          'Walkways, steps, and stairways',
          'Landscape borders and concrete curbing',
          'Coordination with existing irrigation systems'
        ];
      case 'SOD Installation & Land Leveling':
        return [
          'Professional SOD installation matched to North Texas conditions',
          'Land leveling, sanding, and grading to fix low spots and pooling',
          'Integration with existing or new irrigation systems',
          'Drainage-friendly slopes away from the home',
          'Clean edges around driveways, patios, and beds'
        ];
      case 'French Drain Installation':
        return [
          'Site assessment and slope planning',
          'Perforated pipe and clean gravel envelope',
          'Geotextile fabric to limit soil intrusion',
          'Tie-in to surface drainage where appropriate',
          'Discharge routed away from the foundation'
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

    // Desktop: bring the detail panel into view when picking from the grid or tabs
    if (!isMobileView && typeof window !== 'undefined' && window.innerWidth >= 1024) {
      requestAnimationFrame(() => {
        featuredPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
    
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
  
  // Build location-specific service links when on a location page
  const citySlug = (routePrefix || '').toLowerCase();
  const slugFor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const locationPathForService = (title: string): string | undefined => {
    if (!citySlug) return undefined;
    switch (title) {
      case 'Sprinkler Installation':
        return `/${citySlug}/sprinkler-installation-services-in-${citySlug}-tx`;
      case 'Irrigation Repair':
        return `/${citySlug}/irrigation-repair-services-in-${citySlug}-tx`;
      case 'Sprinkler Repair':
        return `/${citySlug}/sprinkler-repair-services-in-${citySlug}-tx`;
      case 'Maintenance':
        // Map Maintenance to seasonal check-up local page
        return `/${citySlug}/sprinkler-system-check-up-services-in-${citySlug}-tx`;
      // For services without location pages, return undefined to fall back
      default:
        return undefined;
    }
  };

  // We explicitly set the 'link' property to the GLOBAL service path (starting with /services).
  // If a 'resolvedLink' exists (meaning there is a specific location page), that will take precedence in ServiceCard.
  // If no 'resolvedLink' (e.g. Drainage in Keller), it will fallback to this global 'link'.
  const services = [
    {
      icon: <Sprout size={32} />,
      title: "Sprinkler Installation",
      description: "Custom-designed sprinkler systems that ensure even water distribution and maximum coverage for your landscape.",
      link: "/services/sprinkler-installation",
      resolvedLink: locationPathForService('Sprinkler Installation'),
      longDescription: "Our professional sprinkler installation services create custom irrigation systems tailored to your specific landscape needs. We carefully analyze your yard's unique characteristics, including sun exposure, soil type, plant varieties, and water requirements to design the most efficient system possible. Our certified technicians use only premium components and follow industry best practices to ensure your new system provides years of reliable performance."
    },
    {
      icon: <Droplet size={32} />,
      title: "Irrigation Repair",
      description: "Expert repair services for all types of irrigation systems, fixing leaks, broken heads, and controller issues quickly and efficiently.",
      link: "/services/irrigation-repair",
      resolvedLink: locationPathForService('Irrigation Repair'),
      longDescription: "Our irrigation repair services address all types of system issues, from minor leaks to major component failures. We use advanced diagnostic techniques to quickly identify problems and implement lasting solutions. Whether you're dealing with broken sprinkler heads, malfunctioning valves, controller issues, or mysterious leaks, our experienced technicians have the skills and tools to restore your system to optimal performance."
    },
    {
      icon: <Wrench size={32} />,
      title: "Sprinkler Repair",
      description: "Fast, reliable repair services for all types of sprinkler system issues, from broken heads and leaks to valve problems and controller malfunctions.",
      link: "/services/sprinkler-repair",
      resolvedLink: locationPathForService('Sprinkler Repair'),
      longDescription: "Our expert sprinkler repair services provide fast, efficient solutions for all your system problems. We diagnose and fix broken heads, leaking pipes, malfunctioning valves, and controller issues with precision and care. Our experienced technicians use quality replacement parts and proper techniques to ensure lasting repairs, helping you save water and protect your landscape investment."
    },
    {
      icon: <Wrench size={32} />,
      title: "Maintenance",
      description: "Regular maintenance services to keep your irrigation system running at peak efficiency, including seasonal check-ups and adjustments.",
      link: "/services/maintenance",
      resolvedLink: locationPathForService('Maintenance'),
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
      icon: <CloudRain size={32} />,
      title: "SOD Installation & Land Leveling",
      description: "SOD installation, sanding, grading, and land leveling to fix low spots, improve drainage, and give you an instantly green, even lawn.",
      link: "/services/sod-and-land-leveling",
      longDescription: "Our SOD installation and land-leveling services are designed to correct problem areas and create a smooth, healthy lawn. We handle tear-out, soil prep, grading, sanding/topdressing, and SOD installation while paying attention to drainage and irrigation coverage. The result is an instantly green yard that drains correctly, feels level underfoot, and is easier to maintain over time."
    },
    {
      icon: <CloudRain size={32} />,
      title: "French Drain Installation",
      description: "Expert French drain installation to effectively manage water flow and protect your property from water damage, flooding, and erosion.",
      link: "/services/drainage-solutions",
      longDescription: "Our professional French drain installation services provide long-lasting solutions for water management issues on your property. We expertly design and install French drains that effectively collect and redirect excess groundwater away from problem areas. Using high-quality materials including perforated pipes, proper gravel gradients, and geotextile fabric, our French drains provide superior drainage that protects your home's foundation, prevents erosion, eliminates standing water, and preserves your landscape investment."
    },
    {
      icon: <Hammer size={32} />,
      title: "Hardscaping",
      description: "Professional concrete and masonry work — slabs, patios, retaining walls, walkways, steps, and landscape borders that add structure and curb appeal.",
      link: "/services/hardscaping",
      longDescription: "Our hardscaping services bring structure, function, and lasting value to your outdoor spaces. We install concrete slabs and patios, retaining walls in block or stone, walkways and steps, raised planter beds, and concrete landscape curbing. Because we specialize in irrigation and drainage, we coordinate every hardscaping project with your existing systems so heads get rerouted, drainage stays correct, and nothing has to be redone later."
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
    <section className="bg-slate-100 py-16">
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
          {/* Desktop: picker strip + full-width detail + multi-column grid (scales with many services) */}
          <div className="hidden lg:block py-4 space-y-10">
            <div>
              <p className="text-center text-sm font-semibold uppercase tracking-wide text-irrigation-darkBlue mb-3">
                Jump to a service
              </p>
              <div
                className="flex flex-wrap justify-center gap-2"
                role="tablist"
                aria-label="Select a service to view full details"
              >
                {services.map((service, index) => {
                  const selected = selectedServiceIndex === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls="services-section-detail-panel"
                      id={`services-section-tab-${index}`}
                      onClick={() => handleServiceSelect(index)}
                      className={`inline-flex items-center gap-2 rounded-full border-2 px-3 py-2 text-left text-sm font-bold shadow-sm transition-all duration-200 ${
                        selected
                          ? 'border-irrigation-green bg-irrigation-green text-white'
                          : 'border-gray-200 bg-white text-irrigation-darkBlue hover:border-irrigation-green/60 hover:shadow-md'
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                          selected ? 'bg-white/20 text-white' : 'bg-irrigation-darkGreen/15 text-irrigation-darkGreen'
                        } [&_svg]:h-4 [&_svg]:w-4`}
                      >
                        {service.icon}
                      </span>
                      <span className="pr-1">{service.title}</span>
                    </button>
                  );
                })}
              </div>
              {cityName ? (
                <p className="text-center text-xs text-gray-500 mt-3 max-w-2xl mx-auto">
                  Full titles with “in {cityName}” appear in the detail card and service links below.
                </p>
              ) : null}
            </div>

            <div
              ref={featuredPanelRef}
              id="services-section-detail-panel"
              role="tabpanel"
              aria-labelledby={`services-section-tab-${selectedServiceIndex}`}
              className="max-w-4xl mx-auto w-full"
            >
              <ServiceCard
                {...services[selectedServiceIndex]}
                locationPrefix={locationPrefix}
                isSelected={true}
                index={selectedServiceIndex}
                onSelect={handleServiceSelect}
                formattedTitle={cityName ? formatServiceTitle(services[selectedServiceIndex].title) : undefined}
              />
            </div>

            <div>
              <h3 className="text-center text-xl font-bold text-irrigation-darkBlue mb-2">All services</h3>
              <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
                Same details, links, and contact options on every card—switch the highlighted service above or open any service page directly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {services.map((service, index) =>
                  index !== selectedServiceIndex ? (
                    <ServiceCard
                      key={index}
                      {...service}
                      locationPrefix={locationPrefix}
                      isSelected={false}
                      index={index}
                      onSelect={handleServiceSelect}
                      formattedTitle={cityName ? formatServiceTitle(service.title) : undefined}
                    />
                  ) : null
                )}
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
                    className={`bg-slate-50 rounded-lg shadow-md p-5 transition-all duration-300 
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
                          href={service.resolvedLink || service.link}
                          className="bg-irrigation-green text-white font-semibold hover:bg-irrigation-darkGreen transition-colors duration-300 inline-flex items-center text-sm flex-1 justify-center py-1 px-2 rounded"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Service page</span>
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
                          href="/contact" 
                          className="text-white bg-irrigation-darkGreen hover:bg-irrigation-darkBlue transition-colors duration-300 inline-flex items-center justify-center py-2 px-4 rounded-md font-medium text-sm"
                          aria-label={`Contact us about ${service.title}`}>
                          <span>Contact Us</span>
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
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
