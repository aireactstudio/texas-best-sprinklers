"use client";

import React, { useMemo, useState } from 'react';

export type FAQItem = { question: string; answer: string };
export type FAQCategory = { name: string; items: FAQItem[] };

// Beautiful, self-contained homepage FAQ with animated accordions and SEO schema
const HomeFAQ: React.FC<{ faqs?: FAQItem[]; categories?: FAQCategory[]; title?: string; subtitle?: string }> = ({
  title = "Frequently Asked Questions",
  subtitle = "Quick answers about irrigation, drainage, and lighting",
  faqs = [
    {
      question: "Do you offer free estimates?",
      answer:
        "Yes. We provide free on-site estimates for irrigation repair, installation, drainage solutions, and lighting projects.",
    },
    {
      question: "Can you repair any brand of sprinkler system?",
      answer:
        "We service and repair all major brands including Rain Bird, Hunter, Toro, and more.",
    },
    {
      question: "How soon can you come out for a repair?",
      answer:
        "Most service calls are scheduled within 24–48 business hours. Emergency availability may be possible.",
    },
    {
      question: "Do you install smart controllers?",
      answer:
        "Absolutely. We install and configure smart Wi‑Fi controllers that optimize watering schedules and reduce water usage.",
    },
    {
      question: "Will a French drain solve standing water?",
      answer:
        "In many cases, yes. We assess grading, gutter discharge, and soil conditions to design the right drainage solution for your property.",
    },
    {
      question: "Are your installations warrantied?",
      answer:
        "Yes. Our workmanship is warrantied and product warranties are honored per manufacturer terms.",
    },
  ],
  categories,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const normalizedCategories: FAQCategory[] = useMemo(() => {
    if (categories && categories.length) return categories;
    return [
      { name: 'General', items: faqs },
    ];
  }, [categories, faqs]);

  const items = normalizedCategories[activeCategoryIndex]?.items || [];

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-white" />
      <div className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-irrigation-green/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-irrigation-blue/10 blur-3xl" />
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(16,94,64,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative container-custom">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-irrigation-a11y-light-green/30 text-irrigation-darkGreen px-4 py-2 text-sm font-medium mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-irrigation-darkGreen" />
            Answers you’ll actually use
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-irrigation-darkBlue tracking-tight">{title}</h2>
          <p className="mt-3 text-irrigation-a11y-gray-dark">{subtitle}</p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Categories sidebar */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="px-6 pt-5 pb-3 border-b border-emerald-100">
                <h3 className="text-base md:text-lg font-semibold text-irrigation-blue">Browse by Category</h3>
                <p className="text-xs text-gray-500 mt-0.5">Pick a topic to filter the questions</p>
              </div>
              <ul className="py-2">
                {normalizedCategories.map((cat, i) => (
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
                <a href="/contact" className="inline-flex items-center gap-2 text-white bg-irrigation-darkGreen hover:bg-irrigation-darkBlue transition-colors px-4 py-2.5 rounded-md text-sm font-medium w-full justify-center">Contact Us</a>
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: normalizedCategories.flatMap((cat) => cat.items).map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default HomeFAQ;
