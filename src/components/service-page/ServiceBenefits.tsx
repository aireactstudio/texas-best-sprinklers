import Link from 'next/link';
import { ServiceContent, ServiceBenefit } from '@/data/types/serviceTypes';
import { FaLeaf } from 'react-icons/fa';
import { renderServiceIcon } from '@/components/service-page/utils'; // Import from the absolute path

interface ServiceBenefitsProps {
  serviceContent: ServiceContent;
  location: string;
}

export default function ServiceBenefits({ serviceContent, location }: ServiceBenefitsProps) {
  return (
    <div className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-green-100 to-transparent opacity-20 blur-3xl rounded-full -z-10 transform translate-x-1/3 translate-y-1/4"></div>
      <div className="absolute top-20 left-10 w-32 h-32 border border-green-200 rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-green-200 rounded-full opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        {/* Section header with enhanced styling */}
        <SectionHeader serviceContent={serviceContent} location={location} />
        
        {/* Enhanced benefits cards in a responsive single row */}
        <BenefitsCardRow benefits={serviceContent.benefits} />
        
        {/* Call to action button */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
          >
            <span>Learn How We Can Help</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ serviceContent, location }: ServiceBenefitsProps) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-green-100 text-green-800 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Why Choose Our Services</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Benefits of Professional {location} {serviceContent.serviceType.charAt(0).toUpperCase() + serviceContent.serviceType.slice(1).replace('-', ' ')}
      </h2>
      
      <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
      
      <p className="text-lg text-gray-600">
        Why our clients in {location} choose us for their {serviceContent.serviceType.replace('-', ' ')} needs
      </p>
    </div>
  );
}

interface BenefitsCardRowProps {
  benefits: ServiceBenefit[];
}

function BenefitsCardRow({ benefits }: BenefitsCardRowProps) {
  return (
    <div className="relative mb-16">
      {/* Left shadow indicator for scrolling */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
      {/* Right shadow indicator for scrolling */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
      
      <div className="flex overflow-x-auto pb-6 space-x-6 snap-x snap-mandatory -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} benefit={benefit} index={index} />
        ))}
      </div>
    </div>
  );
}

interface BenefitCardProps {
  benefit: ServiceBenefit;
  index: number;
}

function BenefitCard({ benefit, index }: BenefitCardProps) {
  return (
    <div
      className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden min-w-[280px] w-[calc(100vw-3rem)] sm:w-[350px] flex-shrink-0 snap-start"
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 rounded-bl-3xl -z-10 group-hover:bg-green-100 transition-all duration-300"></div>
      
      {/* Icon with enhanced styling */}
      <div className="w-14 h-14 rounded-lg bg-green-50 flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-100 transition-colors duration-300">
        {benefit.icon ? renderServiceIcon(benefit.icon) : <FaLeaf className="text-2xl" />}
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
        {benefit.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {benefit.description}
      </p>
      
      {/* Decorative number for visual interest */}
      <div className="absolute bottom-4 right-4 font-bold text-5xl text-gray-100 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {index + 1}
      </div>
    </div>
  );
}
