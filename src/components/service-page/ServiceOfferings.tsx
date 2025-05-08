import Link from 'next/link';
import Image from 'next/image';
import { ServiceContent, ServiceOffering } from '@/data/types/serviceTypes';
import { FaCheck } from 'react-icons/fa';
import { renderServiceIcon, getServiceTypeImage } from '@/components/service-page/utils';

interface ServiceOfferingsProps {
  serviceContent: ServiceContent;
  location: string;
}

export default function ServiceOfferings({ serviceContent, location }: ServiceOfferingsProps) {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/assets/images/optimized/hero-background.webp')] bg-cover opacity-[0.03] -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full opacity-50 blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-10 left-10 h-40 w-40 border-4 border-green-100 rounded-full opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4">
        {/* Section header with creative design */}
        <ServiceOfferingsHeader serviceContent={serviceContent} location={location} />
        
        {/* Enhanced service cards in a responsive single row */}
        <ServiceOfferingsRow serviceContent={serviceContent} />
        
        {/* Bottom CTA section */}
        <ServiceCta serviceContent={serviceContent} location={location} />
      </div>
    </div>
  );
}

function ServiceOfferingsHeader({ serviceContent, location }: ServiceOfferingsProps) {
  return (
    <div className="text-center mb-16 relative">
      <div className="inline-block px-4 py-1 bg-green-50 text-green-800 rounded-full text-sm font-medium mb-3">
        Professional Solutions
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-5 relative inline-block">
        <span className="relative z-10">Our {serviceContent.serviceType.charAt(0).toUpperCase() + serviceContent.serviceType.slice(1)} Services in {location}</span>
        <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 opacity-50 -z-10 transform -rotate-1"></span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Explore our professional {serviceContent.serviceType.replace('-', ' ')} services designed specifically for {location} properties and conditions
      </p>
    </div>
  );
}

function ServiceOfferingsRow({ serviceContent }: { serviceContent: ServiceContent }) {
  return (
    <div className="relative mb-16">
      {/* Left shadow indicator for scrolling */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
      {/* Right shadow indicator for scrolling */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
      
      <div className="flex overflow-x-auto pb-6 space-x-6 snap-x snap-mandatory -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {serviceContent.services.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            index={index} 
            serviceType={serviceContent.serviceType} 
          />
        ))}
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: ServiceOffering;
  index: number;
  serviceType: string;
}

function ServiceCard({ service, index, serviceType }: ServiceCardProps) {
  // Use service-specific image if available, otherwise use our optimized fallback
  const imageToUse = service.image || getServiceTypeImage(serviceType, index);
  
  return (
    <div className="group flex-shrink-0 snap-start min-w-[300px] w-[90vw] sm:w-[450px] md:w-[500px] lg:w-[550px] flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 bg-white relative">
      {/* Service number indicator */}
      <div className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-white text-green-600 font-bold flex items-center justify-center shadow-md">
        {index + 1}
      </div>
      
      {/* Image section with overlay effect */}
      <div className="w-full h-48 overflow-hidden relative">
        <Image
          src={imageToUse}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 500px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      
      {/* Content section with clean design */}
      <div className="w-full p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
          
          {/* Feature list with enhanced styling */}
          {service.features && service.features.length > 0 && (
            <div className="mt-auto">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Key Features</h4>
              <ul className="space-y-1">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mr-2">
                      <FaCheck className="text-green-600 text-xs" />
                    </span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* CTA button */}
        <div className="mt-5 pt-3 border-t border-gray-100">
          <Link href="/contact" className="group inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
            <span>Request Service</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ServiceCta({ serviceContent, location }: ServiceOfferingsProps) {
  return (
    <div className="mt-20 text-center">
      <div className="inline-block mx-auto px-8 py-6 bg-green-50 rounded-xl border border-green-100 max-w-3xl">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Need a custom {serviceContent.serviceType.replace('-', ' ')} solution?</h3>
        <p className="text-gray-600 mb-6">We design and implement custom {serviceContent.serviceType.replace('-', ' ')} systems tailored to your specific property needs in {location}.</p>
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
