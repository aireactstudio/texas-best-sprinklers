import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface LocalFAQProps {
  cityName: string;
  faqs: FAQ[];
}

const LocalFAQ: React.FC<LocalFAQProps> = ({ cityName, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions About {cityName} Irrigation</h2>
        <p className="text-lg text-gray-600 mb-10">
          Common questions about irrigation and sprinkler services in {cityName}
        </p>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-irrigation-blue flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-irrigation-blue flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Structured data for FAQ page */}
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
