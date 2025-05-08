"use client";

import React, { useState } from 'react';
import { ServiceContent, ServiceProcess, FAQ } from '@/data/types/serviceTypes';
import Link from 'next/link';
import { renderServiceIcon } from '@/components/service-page/utils';
import { FaLeaf } from 'react-icons/fa';

interface SectionProps {
  serviceContent: ServiceContent;
  location: string;
}

/**
 * Compliance Information Section
 */
export function ComplianceSection({ serviceContent }: SectionProps) {
  if (!serviceContent.complianceInfo) return null;
  
  return (
    <div className="bg-green-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Local Regulations & Compliance</h3>
          <p className="text-gray-700">{serviceContent.complianceInfo}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Service Process Section
 */
export function ProcessSection({ serviceContent }: SectionProps) {
  if (!serviceContent.process || serviceContent.process.length === 0) return null;
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        
        <div className="flex flex-col space-y-10 md:space-y-0 items-stretch">
          {serviceContent.process.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProcessStepProps {
  step: ServiceProcess;
  index: number;
}

function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/3 flex justify-end md:pr-10">
        {/* Step Number */}
        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
          {index + 1}
        </div>
      </div>
      
      <div className="md:w-2/3 mt-4 md:mt-0">
        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>
  );
}

/**
 * FAQ Section
 */
export function FAQSection({ serviceContent, location }: SectionProps) {
  // We'll now use the combined FAQs from both sources
  // For server components, we'll directly import the functions
  // rather than using the React hook which is client-side only
  const { getLocationSpecificFAQs } = require('@/data/faqData');
  
  // Get base FAQs from service content
  const baseFAQs = serviceContent.faqs || [];
  
  // Get location-specific FAQs
  const locationFAQs = getLocationSpecificFAQs(
    serviceContent.serviceType,
    location
  );
  
  // Create a Set of existing question text to avoid duplicates
  const existingQuestions = new Set(baseFAQs.map(faq => faq.question));
  
  // Filter out any location FAQs that have the same question as base FAQs
  const uniqueLocationFAQs = locationFAQs.filter(
    faq => !existingQuestions.has(faq.question)
  );
  
  // Combine the FAQs
  const combinedFAQs = [...baseFAQs, ...uniqueLocationFAQs];
  
  // If no FAQs, don't render the section
  if (combinedFAQs.length === 0) return null;
  
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Subtle background gradient similar to Apple's design */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br from-green-200 to-green-50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Sophisticated header with subtle animation */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3 border border-green-100 shadow-sm">
            KNOWLEDGE CENTER
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Expert answers about our {serviceContent.serviceType.replace('-', ' ')} services in {location}
          </p>
        </div>
        
        {/* FAQ Items with glass morphism effect */}
        <div className="max-w-2xl mx-auto space-y-6">
          {combinedFAQs.map((item, index) => (
            <FAQItem key={index} faq={item} index={index} />
          ))}
        </div>
        
        {/* Schema markup for SEO */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": combinedFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </div>
  );
}

interface FAQItemProps {
  faq: FAQ;
  index: number;
}

// Enhanced FAQ Item component with animation and interactivity
function FAQItem({ faq, index }: FAQItemProps) {
  // Use React hooks for toggle state
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle function
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div 
      className={`bg-white backdrop-blur-sm bg-opacity-80 rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg ${isOpen ? 'ring-1 ring-green-200' : 'hover:ring-1 hover:ring-gray-200'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button 
        onClick={toggleFAQ}
        className="w-full text-left px-7 py-5 flex justify-between items-center focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-medium pr-8">{faq.question}</h3>
        <div className="flex-shrink-0 ml-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-400'}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className={`transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M18 15l-6-6-6 6"/>
              ) : (
                <path d="M6 9l6 6 6-6"/>
              )}
            </svg>
          </div>
        </div>
      </button>
      
      {/* Animated answer section */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-7 pb-6 pt-1">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Related Services Section
 */
export function RelatedServicesSection({ serviceContent }: SectionProps) {
  // Only show if we have enough services to display
  if (!serviceContent.services || serviceContent.services.length <= 3) return null;
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceContent.services.slice(0, 3).map((service, index) => (
            <Link 
              key={index} 
              href={`/services/${serviceContent.serviceType}`}
              className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-6 text-center transition-colors"
            >
              <div className="flex justify-center mb-4">
                <FaLeaf className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
