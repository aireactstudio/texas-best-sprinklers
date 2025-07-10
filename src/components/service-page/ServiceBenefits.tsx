'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ServiceContent } from '@/data/types/serviceTypes';
import { FaLeaf } from 'react-icons/fa';
import { renderServiceIcon, formatServiceType } from '@/components/service-page/utils'; // Import from the absolute path

// Extended ServiceBenefit interface with additional properties
interface ServiceBenefit {
  title: string;
  description: string;
  icon?: string;
  extendedDescription?: string;
  additionalPoints?: string[];
}

interface ServiceBenefitsProps {
  serviceContent: ServiceContent;
  location: string;
}

export default function ServiceBenefits({ serviceContent, location }: ServiceBenefitsProps) {
  const [selectedBenefitIndex, setSelectedBenefitIndex] = useState(0);
  
  // Handle benefit selection
  const handleBenefitSelect = (index: number) => {
    setSelectedBenefitIndex(index);
  };
  
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-green-100 to-transparent opacity-20 blur-3xl rounded-full -z-10 transform translate-x-1/3 translate-y-1/4"></div>
      <div className="absolute top-20 left-10 w-32 h-32 border border-green-200 rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-green-200 rounded-full opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-[1440px] w-full">
        {/* Section header with enhanced styling */}
        <SectionHeader serviceContent={serviceContent} location={location} />
        
        {/* Interactive benefits layout */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured benefit - currently selected benefit */}
            <div className="lg:col-span-5">
              <BenefitCard 
                benefit={serviceContent.benefits[selectedBenefitIndex]} 
                index={selectedBenefitIndex}
                isSelected={true}
                onSelect={handleBenefitSelect}
              />
            </div>
            
            {/* Secondary benefits grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                {serviceContent.benefits.map((benefit, index) => (
                  index !== selectedBenefitIndex && (
                    <BenefitCard 
                      key={index} 
                      benefit={benefit} 
                      index={index}
                      isSelected={false}
                      onSelect={handleBenefitSelect}
                    />
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
        
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
        Benefits of Professional {location} {formatServiceType(serviceContent.serviceType)}
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
  isSelected?: boolean;
  onSelect?: (index: number) => void;
}

function BenefitCard({ benefit, index, isSelected = false, onSelect }: BenefitCardProps) {
  // Handle card selection
  const handleCardClick = () => {
    if (onSelect && !isSelected) {
      onSelect(index);
    }
  };
  
  // Extended description for selected benefit
  const getExtendedDescription = () => {
    return benefit.extendedDescription || `Our ${benefit.title.toLowerCase()} ensures that your irrigation system operates at peak efficiency, saving you water and money while keeping your landscape healthy and vibrant throughout the year.`;
  };
  
  // Additional points for selected benefit
  const getAdditionalPoints = () => {
    return benefit.additionalPoints || [
      `Professional ${benefit.title.toLowerCase()} by certified technicians`,
      `Comprehensive solutions tailored to your specific needs`,
      `Long-term value and protection for your property`,
      `Satisfaction guaranteed with all our services`
    ];
  };
  
  return isSelected ? (
    // Featured benefit card - larger with more emphasis
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl h-full border-2 border-green-600 flex flex-col relative cursor-pointer">
      {/* Currently selected indicator */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs font-bold py-1 px-3 rounded-full">
        Currently Viewing
      </div>
      
      <div className="flex items-center mb-4">
        <div className="h-14 w-14 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mr-3">
          {benefit.icon ? renderServiceIcon(benefit.icon) : <FaLeaf className="text-2xl" />}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
      </div>
      
      {/* Extended description */}
      <p className="text-gray-700 mb-4 text-sm">{getExtendedDescription()}</p>
      
      {/* Additional points */}
      <div className="mb-4">
        <h4 className="text-base font-semibold text-gray-800 mb-2">Key Benefits:</h4>
        <ul className="space-y-1 text-sm">
          {getAdditionalPoints().map((point, i) => (
            <li key={i} className="flex items-start">
              <div className="text-green-600 mr-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Testimonial */}
      <div className="bg-green-50 rounded-lg p-3 mb-4">
        <p className="text-green-800 italic text-xs mb-1">"Texas Best Sprinklers provided exceptional {benefit.title.toLowerCase()} service for our property. Their attention to detail and expertise made all the difference!"</p>
        <p className="text-green-700 font-medium text-xs">— Satisfied Customer</p>
      </div>
      
      <div className="mt-auto">
        <Link 
          href="/contact" 
          className="text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 inline-flex items-center justify-center py-2 px-4 rounded-md font-medium text-sm w-full"
          aria-label={`Contact us about ${benefit.title}`}>
          <span>Get Started Today</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      
      {/* Decorative number for visual interest */}
      <div className="absolute top-3 right-3 font-bold text-4xl text-gray-100 opacity-60">
        {index + 1}
      </div>
    </div>
  ) : (
    // Standard benefit card - clickable to expand
    <div 
      className="bg-white rounded-lg shadow-lg p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full border border-gray-200 cursor-pointer group relative"
      onClick={handleCardClick}
    >
      {/* Click indicator that appears on hover */}
      <div className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-5 flex items-center justify-center transition-all duration-300 rounded-lg">
        <div className="bg-green-600 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-xs font-medium">
          Click to View
        </div>
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 rounded-bl-3xl -z-10 group-hover:bg-green-100 transition-all duration-300"></div>
      
      <div className="flex items-center mb-3">
        <div className="h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center mr-3 text-green-600 group-hover:bg-green-100 transition-colors duration-300">
          {benefit.icon ? renderServiceIcon(benefit.icon) : <FaLeaf className="text-xl" />}
        </div>
        <h3 className="text-base font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
          {benefit.title}
        </h3>
      </div>
      
      <p className="text-gray-600 text-sm mb-3">
        {benefit.description}
      </p>
      
      <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300 inline-flex items-center text-sm mt-auto">
        <span>View Details</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      {/* Decorative number for visual interest */}
      <div className="absolute bottom-3 right-3 font-bold text-4xl text-gray-100 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {index + 1}
      </div>
    </div>
  );
}
