"use client";

import React, { useMemo, useState } from 'react';

export type FAQItem = { question: string; answer: string };
export type FAQCategory = { name: string; items: FAQItem[] };

// Weatherford-specific FAQ component with local knowledge
const WeatherfordFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categories: FAQCategory[] = [
    {
      name: 'Weatherford Services',
      items: [
        {
          question: 'Do you serve Weatherford, Texas?',
          answer: 'Yes! Texas Best Sprinklers proudly serves Weatherford and surrounding Parker County communities. We\'re your local irrigation experts with deep knowledge of Weatherford\'s soil conditions and water regulations.'
        },
        {
          question: 'What irrigation challenges are common in Weatherford?',
          answer: 'Weatherford\'s clay-heavy soil and hot summers create unique challenges. We specialize in systems that handle clay soil drainage, drought-resistant zones, and smart controllers that adapt to Parker County\'s weather patterns.'
        },
        {
          question: 'Are you familiar with Weatherford\'s water restrictions?',
          answer: 'Absolutely. We stay current with Weatherford\'s watering schedules and drought restrictions. Our systems are designed to comply with local ordinances while keeping your landscape healthy.'
        },
        {
          question: 'Do you work on historic Weatherford properties?',
          answer: 'Yes! We have experience with Weatherford\'s historic homes and understand the importance of preserving landscaping while upgrading irrigation systems. We work carefully around mature trees and established gardens.'
        }
      ]
    },
    {
      name: 'Local Expertise',
      items: [
        {
          question: 'What makes Weatherford irrigation different?',
          answer: 'Weatherford\'s elevation and clay soil require specialized approaches. We use pressure-compensating heads, proper zone separation for different soil types, and drainage solutions that work with the local topography.'
        },
        {
          question: 'How do you handle Weatherford\'s freeze risks?',
          answer: 'We design systems with freeze protection in mind, including proper winterization procedures and backflow prevention that meets Parker County requirements. Our installations include freeze sensors and automatic shutoffs.'
        },
        {
          question: 'Do you know Weatherford\'s native plants?',
          answer: 'We understand Weatherford\'s native Texas plants and their water needs. Our irrigation designs account for drought-tolerant natives, xeriscaping principles, and seasonal variations in Parker County.'
        },
        {
          question: 'Can you work around Weatherford\'s limestone?',
          answer: 'Yes! Weatherford\'s limestone bedrock is common in our installations. We use specialized drilling techniques and equipment to install systems that work with the local geology.'
        }
      ]
    },
    {
      name: 'Parker County Specific',
      items: [
        {
          question: 'Do you serve other Parker County areas?',
          answer: 'We serve all of Parker County including Aledo, Willow Park, Hudson Oaks, and surrounding communities. Our service area extends throughout the county with the same level of local expertise.'
        },
        {
          question: 'Are you familiar with Parker County regulations?',
          answer: 'Yes, we\'re well-versed in Parker County building codes, water regulations, and permit requirements. We handle all necessary permits and ensure compliance with local ordinances.'
        },
        {
          question: 'How do you handle Parker County\'s weather patterns?',
          answer: 'Parker County\'s weather is unique with hot summers, occasional freezes, and variable rainfall. Our smart controllers use local weather data to optimize watering schedules and protect against weather-related issues.'
        },
        {
          question: 'Do you work with Parker County contractors?',
          answer: 'We collaborate with local Parker County landscapers, builders, and contractors. Our systems integrate seamlessly with other landscaping and construction projects in the area.'
        }
      ]
    },
    {
      name: 'Emergency Services',
      items: [
        {
          question: 'Do you offer emergency repair in Weatherford?',
          answer: 'Yes, we provide emergency irrigation repairs throughout Weatherford and Parker County. For urgent issues like major leaks or system failures, we typically respond within 24 hours.'
        },
        {
          question: 'What if my system fails during a Weatherford drought?',
          answer: 'During drought conditions, irrigation system failures are critical. We prioritize emergency repairs and can implement temporary watering solutions to protect your landscape investment.'
        },
        {
          question: 'Can you repair systems damaged by Weatherford storms?',
          answer: 'Absolutely. We\'re experienced with storm damage repair in Parker County, including lightning strikes, hail damage, and wind damage to irrigation components.'
        },
        {
          question: 'Do you offer 24/7 emergency service?',
          answer: 'For major emergencies that could damage property or landscape, we offer extended hours service. Contact us for urgent irrigation issues that can\'t wait for regular business hours.'
        }
      ]
    },
    {
      name: 'Installation & Design',
      items: [
        {
          question: 'How do you design systems for Weatherford homes?',
          answer: 'We create custom designs based on Weatherford\'s soil conditions, sun exposure, and plant needs. Our designs account for clay soil challenges, native plants, and local water conservation requirements.'
        },
        {
          question: 'Do you install smart controllers in Weatherford?',
          answer: 'Yes! Smart controllers are especially valuable in Weatherford due to changing weather patterns. We install and program controllers that automatically adjust for Parker County conditions.'
        },
        {
          question: 'Can you retrofit older Weatherford systems?',
          answer: 'We specialize in upgrading older irrigation systems throughout Weatherford. Our retrofits improve efficiency, add smart technology, and ensure compliance with current water regulations.'
        },
        {
          question: 'Do you work with Weatherford HOAs?',
          answer: 'Yes, we understand HOA requirements in Weatherford neighborhoods. We ensure all installations meet community standards and provide documentation for HOA approval when needed.'
        }
      ]
    }
  ];

  const items = categories[activeCategoryIndex]?.items || [];

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-white" />
      <div className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-irrigation-green/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-irrigation-blue/10 blur-3xl" />
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(16,94,64,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-irrigation-a11y-light-green/30 text-irrigation-darkGreen px-4 py-2 text-sm font-medium mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-irrigation-darkGreen" />
            Weatherford-specific answers
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-irrigation-darkBlue tracking-tight">
            Frequently Asked Questions About Irrigation in Weatherford
          </h2>
          <p className="mt-3 text-irrigation-a11y-gray-dark">
            Local expertise for Parker County irrigation, drainage, and outdoor lighting needs
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Categories sidebar */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="px-6 pt-5 pb-3 border-b border-emerald-100">
                <h3 className="text-base md:text-lg font-semibold text-irrigation-blue">Browse by Topic</h3>
                <p className="text-xs text-gray-500 mt-0.5">Weatherford & Parker County specific</p>
              </div>
              <ul className="py-2">
                {categories.map((cat, i) => (
                  <li key={cat.name}>
                    <button
                      onClick={() => { setActiveCategoryIndex(i); setOpenIndex(0); }}
                      className={`w-full flex items-center justify-between text-left px-5 py-3 text-sm transition-colors ${i === activeCategoryIndex ? 'bg-irrigation-a11y-light-green/30 text-irrigation-darkGreen' : 'hover:bg-white text-gray-700'}`}
                      aria-current={i === activeCategoryIndex ? 'true' : 'false'}
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-xs text-gray-500">{cat.items.length}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="px-5 pb-5 pt-2 border-t border-emerald-100">
                <a href="/contact" className="inline-flex items-center gap-2 text-white bg-irrigation-darkGreen hover:bg-irrigation-darkBlue transition-colors px-4 py-2.5 rounded-md text-sm font-medium w-full justify-center">
                  Contact Weatherford Team
                </a>
              </div>
            </div>
          </aside>

          {/* FAQ list */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-emerald-100 rounded-2xl bg-white/70 backdrop-blur-sm border border-emerald-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]">
              {items.map((item, idx) => {
                const open = openIndex === idx;
                return (
                  <div key={idx} className="group">
                    <button
                      onClick={() => setOpenIndex(open ? null : idx)}
                      className="w-full flex items-start gap-3 text-left px-5 md:px-6 py-4 md:py-5 hover:bg-white/60 transition-colors"
                      aria-expanded={open}
                    >
                      <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border ${open ? 'bg-irrigation-green text-white border-irrigation-green' : 'border-emerald-200 text-irrigation-darkGreen'}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          {open ? <path d="M18 12H6" /> : <path d="M12 6v12M6 12h12" />}
                        </svg>
                      </span>
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-semibold text-irrigation-darkBlue leading-snug">{item.question}</h4>
                        <div className={`mt-2 text-sm text-gray-600 pr-2 transition-[grid-template-rows] duration-300 ease-out grid ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                          <div className="overflow-hidden">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SEO Schema */}
        <script
          id="weatherford-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "#weatherford-faq",
              name: "Frequently Asked Questions About Irrigation in Weatherford",
              description: "Local expertise for Parker County irrigation, drainage, and outdoor lighting needs",
              mainEntity: categories.flatMap((cat) => cat.items).map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
              about: {
                "@type": "Place",
                name: "Weatherford",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Weatherford",
                  addressRegion: "TX",
                  addressCountry: "US"
                }
              }
            }),
          }}
        />
      </div>
    </section>
  );
};

export default WeatherfordFAQ;
