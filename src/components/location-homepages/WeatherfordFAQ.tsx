"use client";

import HomeFAQ, { FAQCategory } from '@/components/HomeFAQ';

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

const WeatherfordFAQ = () => (
  <HomeFAQ
    title="Frequently Asked Questions About Irrigation in Weatherford"
    subtitle="Local expertise for Parker County irrigation, drainage, and outdoor lighting needs"
    badgeText="Weatherford-specific answers"
    sidebarTitle="Browse by Topic"
    sidebarSubtitle="Weatherford & Parker County specific"
    contactButtonText="Contact Weatherford Team"
    categories={categories}
    schemaId="#weatherford-faq"
  />
);

export default WeatherfordFAQ;
