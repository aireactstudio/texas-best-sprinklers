"use client";

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface LocalFAQProps {
  cityName: string;
  faqs: FAQ[];
}

const LocalFAQ: React.FC<LocalFAQProps> = ({ cityName, faqs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // If no FAQs, don't render the section
  if (faqs.length === 0) return null;
  
  // Split FAQs into two groups for tabs
  const faqGroups = [
    faqs.slice(0, Math.ceil(faqs.length / 2)),
    faqs.slice(Math.ceil(faqs.length / 2))
  ];
  
  const tabTitles = [
    `${cityName} FAQs`,
    `Irrigation Questions`
  ];
  
  return (
    <section className="py-8 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="container-custom relative z-10">
        {/* Ultra-compact header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-irrigation-blue to-irrigation-darkBlue rounded-full mr-3"></span>
            <h2 className="text-xl font-bold text-gray-800">FAQ</h2>
          </div>
          <div className="text-sm text-gray-500 italic">{faqs.length} questions</div>
        </div>
        
        {/* Tab navigation */}
        <div className="flex mb-4 border-b border-gray-200">
          {tabTitles.map((title, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${activeTab === idx ? 'text-irrigation-blue' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {title}
              {activeTab === idx && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-irrigation-blue"></span>
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
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${hoveredIndex === index ? 'bg-irrigation-blue/10 text-irrigation-blue' : 'bg-gray-100 text-gray-400'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-irrigation-blue transition-colors">{faq.question}</h3>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2 group-hover:text-gray-700 transition-colors">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
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
    </section>
  );
};

export default LocalFAQ;
