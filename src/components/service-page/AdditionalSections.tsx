"use client";

import React, { useState } from 'react';
import { ServiceContent, ServiceProcess, FAQ } from '@/data/types/serviceTypes';
import Link from 'next/link';
import { renderServiceIcon, formatServiceType } from '@/components/service-page/utils';
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
 * Ultra-Sophisticated Process Section
 */
export function ProcessSection({ serviceContent, location }: SectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  if (!serviceContent.process || serviceContent.process.length === 0) return null;
  
  return (
    <div className="py-8 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra-compact header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3"></span>
            <h2 className="text-xl font-bold text-gray-800">Our Process</h2>
          </div>
          <div className="text-sm text-gray-500 italic">{serviceContent.process.length} steps</div>
        </div>
        
        {/* Process timeline */}
        <div className="relative pl-8 mt-6">
          {/* Vertical timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-green-200 via-green-400 to-blue-300"></div>
          
          {serviceContent.process.map((step, index) => (
            <div 
              key={index} 
              className="mb-6 last:mb-0 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Step indicator */}
              <div className={`absolute left-[-12px] w-6 h-6 rounded-full border-2 transition-colors duration-200 ${hoveredIndex === index ? 'border-green-500 bg-white' : 'border-gray-200 bg-gray-50'} flex items-center justify-center z-10`}>
                <span className={`text-xs font-medium ${hoveredIndex === index ? 'text-green-600' : 'text-gray-500'}`}>{index + 1}</span>
              </div>
              
              {/* Step content */}
              <div className={`pl-4 transition-colors duration-200 ${hoveredIndex === index ? 'bg-gray-50/50 rounded-lg' : ''}`}>
                <h3 className={`text-sm font-semibold mb-1 transition-colors duration-200 ${hoveredIndex === index ? 'text-green-700' : 'text-gray-800'}`}>{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Ultra-Sophisticated FAQ Section
 */
export function FAQSection({ serviceContent, location }: SectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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
  
  // Split FAQs into two groups for tabs
  const faqGroups = combinedFAQs && combinedFAQs.length > 0 ? [
    combinedFAQs.slice(0, Math.ceil(combinedFAQs.length / 2)),
    combinedFAQs.slice(Math.ceil(combinedFAQs.length / 2))
  ] : [[], []];
  
  const tabTitles = [
    `${serviceContent.serviceType ? serviceContent.serviceType.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Service'} FAQs`,
    `${location} Service Questions`
  ];
  
  return (
    <div className="py-8 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra-compact header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3"></span>
            <h2 className="text-xl font-bold text-gray-800">FAQ</h2>
          </div>
          <div className="text-sm text-gray-500 italic">{combinedFAQs.length} questions</div>
        </div>
        
        {/* Tab navigation */}
        <div className="flex mb-4 border-b border-gray-200">
          {tabTitles.map((title, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === idx ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {title}
              {activeTab === idx && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
              )}
            </button>
          ))}
        </div>
        
        {/* FAQ content - minimalist design */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-1.5">
            {faqGroups[activeTab].map((faq, index) => (
              <div 
                key={index}
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-start py-2.5 px-3 rounded transition-colors duration-150 cursor-pointer hover:bg-gray-50">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${hoveredIndex === index ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors">{faq.question}</h3>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2 group-hover:text-gray-700 transition-colors">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

// FAQItem component removed since we're now using a simpler grid layout

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
