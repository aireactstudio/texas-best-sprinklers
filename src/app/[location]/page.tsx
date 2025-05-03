'use client';

import { notFound } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTA from '@/components/CTA';
import LocalProjects from '@/components/LocalProjects';
import LocalFAQ from '@/components/LocalFAQ';

// Define valid locations to prevent arbitrary routes
const validLocations = [
  'dallas', 
  'arlington', 
  'denton', 
  'keller',
  'southlake',
  'grapevine',
  'colleyville',
  'bedford',
  'euless',
  'hurst'
];

export default function LocationPage({ params }: { params: { location: string } }) {
  const { location } = params;
  
  // Check if this is a valid location we serve
  if (!validLocations.includes(location.toLowerCase())) {
    notFound();
  }
  
  // Format location for display (capitalize, replace hyphens with spaces)
  const formattedLocation = location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Define local business schema for this location
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Texas Best Sprinkler, Drainage and Lighting LLC",
    "image": "https://sprinkleranddrains.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": formattedLocation,
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "url": `https://sprinkleranddrains.com/${location}`,
    "telephone": "+18173047896",
    "priceRange": "$$"
  };

  return (
    <>
      {/* Inject schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <HeroSection 
        title={`${formattedLocation}'s Expert Irrigation Services`}
        subtitle={`Professional sprinkler installation, repair & maintenance for ${formattedLocation} homes & businesses`}
      />
      
      {/* Location-specific intro section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
                Serving {formattedLocation} With Quality Irrigation Solutions
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Texas Best Sprinklers is proud to provide professional irrigation, drainage, and outdoor lighting services to the {formattedLocation} community. Our team of licensed technicians brings years of local experience to every project.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                We understand the unique soil conditions, water regulations, and landscaping needs of {formattedLocation} properties. Our custom-designed irrigation systems help you maintain a beautiful landscape while conserving water and reducing utility costs.
              </p>
              <p className="text-gray-700 text-lg">
                From new installation to repairs and seasonal maintenance, we're your complete irrigation partner in {formattedLocation}.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/images/location-service.jpg"
                alt={`Texas Best Sprinklers service in ${formattedLocation}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Location-specific services section */}
      <ServicesSection cityName={formattedLocation} />
      
      {/* Testimonials */}
      <TestimonialsSection cityFilter={formattedLocation} />
      
      {/* Location-specific projects */}
      <section className="py-16 md:py-24 bg-irrigation-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Recent {formattedLocation} Projects</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              View our recently completed irrigation and drainage projects in the {formattedLocation} area.
            </p>
          </div>
          
          <LocalProjects cityName={formattedLocation} />
        </div>
      </section>
      
      {/* Location-specific FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">{formattedLocation} Irrigation FAQs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Common questions about irrigation systems and services in the {formattedLocation} area.
            </p>
          </div>
          
          <LocalFAQ 
            cityName={formattedLocation} 
            faqs={[
              {
                question: `What are the watering restrictions in ${formattedLocation}?`,
                answer: `${formattedLocation} typically follows regional watering guidelines, which may include designated watering days and conservation measures during drought periods. Contact your local water utility for specific information.`
              },
              {
                question: `How much does a sprinkler system cost in ${formattedLocation}?`,
                answer: `The cost for a typical residential sprinkler system in ${formattedLocation} ranges from $2,800-$5,500 depending on property size, design complexity, and component quality. Contact us for a free, customized estimate.`
              },
              {
                question: `Do you offer maintenance plans in ${formattedLocation}?`,
                answer: `Yes, we offer comprehensive maintenance plans for ${formattedLocation} properties that include regular inspections, seasonal adjustments, and priority service. Our maintenance ensures your system operates efficiently year-round.`
              }
            ]}
          />
        </div>
      </section>
      
      {/* Location-specific CTA */}
      <CTA 
        title={`Ready to Improve Your ${formattedLocation} Property?`}
        subtitle={`Contact us today for a free consultation and quote on your ${formattedLocation} irrigation project.`}
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
