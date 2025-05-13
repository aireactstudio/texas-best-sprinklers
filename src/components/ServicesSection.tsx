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
  longDescription
}) => {
  const fullLink = locationPrefix ? `/${locationPrefix}${link}` : link;
  
  // Handle card selection
  const handleCardClick = () => {
    if (onSelect && !isSelected) {
      onSelect(index);
    }
  };
  
  // Features list for featured cards
  const getFeaturesList = () => {
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
  const getExpandedDescription = () => {
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
        <h3 className="text-xl font-bold text-irrigation-darkBlue">{title}</h3>
      </div>
      
      {/* Extended description */}
      <p className="text-gray-800 mb-4 text-sm">{getExpandedDescription()}</p>
      
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
    // Standard service card - clickable to expand
    <div 
      className="bg-white rounded-lg shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full border border-gray-200 cursor-pointer group relative"
      onClick={handleCardClick}
    >
      {/* Click indicator that appears on hover */}
      <div className="absolute inset-0 bg-irrigation-darkGreen bg-opacity-0 group-hover:bg-opacity-5 flex items-center justify-center transition-all duration-300 rounded-lg">
        <div className="bg-irrigation-green text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-xs font-medium">
          Click to View
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        <div className="h-12 w-12 rounded-full bg-irrigation-darkGreen bg-opacity-20 flex items-center justify-center mr-3 text-irrigation-darkGreen">
          {icon}
        </div>
        <h3 className="text-base font-bold text-irrigation-darkBlue">{title}</h3>
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
      
      <div className="text-irrigation-darkGreen font-semibold hover:text-irrigation-darkBlue transition-colors duration-300 inline-flex items-center text-sm mt-auto">
        <span>View Details</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
};

interface ServicesSectionProps {
  cityName?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ cityName }) => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  
  // Handle service selection
  const handleServiceSelect = (index: number) => {
    setSelectedServiceIndex(index);
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
  ];

  // Location-specific text variations for SEO
  const locationTitle = cityName ? `Our ${cityName} Irrigation Services` : 'Our Irrigation Services';
  const locationDescription = cityName 
    ? `Comprehensive sprinkler, drainage, and lighting solutions for ${cityName} homes and businesses` 
    : 'Comprehensive sprinkler, drainage, and lighting solutions for your outdoor spaces';

  // The location prefix for the service links
  const locationPrefix = cityName ? cityName.toLowerCase().replace(' ', '-') : '';

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-[1440px] w-full">
        <div className="text-center mb-16">
          <div className="inline-block bg-irrigation-a11y-light-green text-irrigation-a11y-green px-4 py-2 rounded-full mb-4 font-medium">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">
            Comprehensive Irrigation Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide expert irrigation services designed to conserve water while keeping your landscape lush and healthy all year round.
          </p>
        </div>
        
        <div className="mb-6">
          {/* Interactive service layout with selectable cards */}
          <div className="py-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Featured service - currently selected service */}
              <div className="lg:col-span-6 xl:col-span-5">
                <ServiceCard 
                  {...services[selectedServiceIndex]} 
                  locationPrefix={locationPrefix} 
                  isSelected={true}
                  index={selectedServiceIndex}
                  onSelect={handleServiceSelect}
                />
              </div>
              
              {/* Secondary services grid */}
              <div className="lg:col-span-6 xl:col-span-7">
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
                      />
                    )
                  ))}
                </div>
              </div>
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
