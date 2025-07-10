'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ServiceContent, ServiceOffering } from '@/data/types/serviceTypes';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { renderServiceIcon, formatServiceType } from '@/components/service-page/utils';

interface ServiceOfferingsProps {
  serviceContent: ServiceContent;
  location: string;
}

export default function ServiceOfferings({ serviceContent, location }: ServiceOfferingsProps) {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  
  // Handle service selection
  const handleServiceSelect = (index: number) => {
    setSelectedServiceIndex(index);
  };
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <ServiceOfferingsHeader 
          serviceContent={serviceContent} 
          location={location} 
          selectedServiceIndex={selectedServiceIndex} 
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service navigation sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Our Services</h3>
              <ul className="space-y-2">
                {serviceContent.services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleServiceSelect(index)}
                      className={`w-full text-left px-4 py-3 rounded-md transition-colors flex items-center ${selectedServiceIndex === index 
                        ? 'bg-green-600 text-white' 
                        : 'hover:bg-gray-100 text-gray-700'}`}
                    >
                      <span className="w-8 h-8 flex items-center justify-center mr-3 rounded-full bg-green-600 text-white font-medium">
                        {index + 1}
                      </span>
                      <span className="font-medium">{service.title}</span>
                      {selectedServiceIndex === index && (
                        <FaArrowRight className="ml-auto" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Selected service details */}
          <div className="lg:col-span-2">
            <ServiceCard 
              service={serviceContent.services[selectedServiceIndex]} 
              index={selectedServiceIndex}
              serviceType={serviceContent.serviceType}
            />
          </div>
        </div>
        
        {/* Bottom CTA section */}
        <ServiceCta serviceContent={serviceContent} location={location} />
      </div>
    </div>
  );
}

interface ServiceOfferingsHeaderProps extends ServiceOfferingsProps {
  selectedServiceIndex: number;
}

function ServiceOfferingsHeader({ serviceContent, location, selectedServiceIndex }: ServiceOfferingsHeaderProps) {
  const selectedService = serviceContent.services[selectedServiceIndex];
  
  return (
    <div className="text-center mb-8">
      <div className="inline-block px-4 py-1 bg-green-50 text-green-800 rounded-full text-sm font-medium mb-3">
        Professional Solutions
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Our {selectedService.title} Services in {location}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our professional {selectedService.title.toLowerCase()} services designed specifically for {location} properties and conditions
      </p>
    </div>
  );
}



interface ServiceCardProps {
  service: ServiceOffering;
  index: number;
  serviceType: string;
}

function ServiceCard({ service, index, serviceType }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      {/* Service header with icon */}
      <div className="flex items-center mb-5">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 mr-4">
          <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
            {index + 1}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
      </div>
      
      {/* Service description */}
      <p className="text-gray-700 mb-6">{service.description}</p>
      
      {/* Feature list */}
      {service.features && service.features.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 flex-shrink-0">
                  <FaCheck />
                </span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-gray-100">
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
        >
          <span>Request Service</span>
          <FaArrowRight className="ml-2" />
        </Link>
        <Link 
          href={`/services/${serviceType}`} 
          className="inline-flex items-center justify-center px-4 py-2 border border-green-600 text-green-600 rounded-md font-medium hover:bg-green-50 transition-colors"
        >
          <span>Learn More</span>
        </Link>
      </div>
    </div>
  );
}

function ServiceCta({ serviceContent, location }: ServiceOfferingsProps) {
  return (
    <div className="mt-20 text-center">
      <div className="inline-block mx-auto px-8 py-6 bg-green-50 rounded-xl border border-green-100 max-w-3xl">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Need a custom {formatServiceType(serviceContent.serviceType)} solution?</h3>
        <p className="text-gray-600 mb-6">We design and implement custom {formatServiceType(serviceContent.serviceType)} systems tailored to your specific property needs in {location}.</p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
        >
          <span>Get a Free Consultation</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
