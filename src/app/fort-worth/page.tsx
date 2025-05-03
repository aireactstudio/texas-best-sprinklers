'use client';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTA from '@/components/CTA';
import LocalProjects from '@/components/LocalProjects';
import LocalFAQ from '@/components/LocalFAQ';

export default function FortWorthPage() {
  // Define local business schema for Fort Worth location
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Texas Best Sprinkler, Drainage and Lighting LLC",
    "image": "https://sprinkleranddrains.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10011 Harmon Rd suite 133",
      "addressLocality": "Fort Worth",
      "addressRegion": "TX",
      "postalCode": "76177",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.8721,
      "longitude": -97.2943
    },
    "url": "https://sprinkleranddrains.com/fort-worth",
    "telephone": "+18173047896",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
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
        title="Expert Sprinkler & Irrigation Services in Fort Worth" 
        subtitle="Professional sprinkler installation, repair & maintenance for Fort Worth homes & businesses"
      />
      
      {/* Location-specific services section */}
      <ServicesSection cityName="Fort Worth" />
      
      {/* Key features section */}
      <FeaturesSection />
      
      {/* Testimonials with Fort Worth filter */}
      <TestimonialsSection cityFilter="Fort Worth" />
      
      {/* Fort Worth-specific projects */}
      <section className="py-16 md:py-24 bg-irrigation-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Recent Fort Worth Projects</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              View our recently completed irrigation and drainage projects in the Fort Worth area.
            </p>
          </div>
          
          <LocalProjects cityName="Fort Worth" />
        </div>
      </section>
      
      {/* Location-specific FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Fort Worth Irrigation FAQs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Common questions about irrigation systems and services in the Fort Worth area.
            </p>
          </div>
          
          <LocalFAQ cityName="Fort Worth" faqs={[
            {
              question: "What are the watering restrictions in Fort Worth?",
              answer: "Fort Worth typically allows twice-weekly watering, but restrictions may change based on drought conditions. Always check the city's current water conservation measures before setting your irrigation schedule."
            },
            {
              question: "How much does a sprinkler system cost in Fort Worth?",
              answer: "The cost for a sprinkler system in Fort Worth typically ranges from $2,500-$5,000 for average-sized residential properties. Factors affecting price include yard size, number of zones, and controller type."
            },
            {
              question: "When should I winterize my sprinkler system in Fort Worth?",
              answer: "In Fort Worth, you should winterize your sprinkler system in November before the first hard freeze. Our technicians can properly drain and protect your system from potential freeze damage."
            }
          ]} />
        </div>
      </section>
      
      {/* Fort Worth-specific CTA */}
      <CTA 
        title="Ready to Improve Your Fort Worth Property?"
        subtitle="Contact us today for a free consultation and quote on your irrigation project."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
