'use client';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTA from '@/components/CTA';
import LocalProjects from '@/components/LocalProjects';
import LocalFAQ from '@/components/LocalFAQ';

export default function WeatherfordPage() {
  // Define local business schema for Weatherford location
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Texas Best Sprinkler, Drainage and Lighting LLC",
    "image": "https://sprinkleranddrains.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1712 Mineral Wells Highway",
      "addressLocality": "Weatherford",
      "addressRegion": "TX",
      "postalCode": "76086",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7442,
      "longitude": -97.7972
    },
    "url": "https://sprinkleranddrains.com/weatherford",
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
      {/* Inject schema markup with optimized loading */}
      <SchemaMarkup data={localBusinessSchema} />
      
      <HeroSection 
        title="Expert Irrigation Solutions in Weatherford" 
        subtitle="Professional sprinkler and drainage services for Weatherford homes and businesses"
        image="/assets/images/weatherford-hero.jpg"
      />
      
      {/* Location-specific intro section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
                Weatherford's Trusted Irrigation Specialists
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Texas Best Sprinklers has proudly served the Weatherford community for over a decade, providing expert irrigation, drainage, and outdoor lighting solutions tailored to Parker County's unique landscape and climate conditions.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Our local Weatherford team understands the specific challenges faced by property owners in this area, from clay soil drainage issues to water conservation requirements. We deliver custom solutions that protect your landscape investment while conserving water and reducing costs.
              </p>
              <p className="text-gray-700 text-lg">
                From residential sprinkler systems in Hudson Oaks and Aledo to commercial irrigation for Weatherford businesses, we provide comprehensive services backed by our satisfaction guarantee.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/images/weatherford-location.jpg"
                alt="Texas Best Sprinklers team in Weatherford"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Location-specific services section */}
      <ServicesSection cityName="Weatherford" />
      
      {/* Testimonials with Weatherford filter */}
      <TestimonialsSection cityFilter="Weatherford" />
      
      {/* Weatherford Service Areas */}
      <section className="py-16 md:py-24 bg-irrigation-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Our Weatherford Service Areas</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We proudly serve the following communities throughout Parker County:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Weatherford</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Hudson Oaks</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Aledo</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Willow Park</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Brock</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Millsap</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Peaster</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Springtown</div>
          </div>
        </div>
      </section>
      
      {/* Weatherford-specific projects */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Recent Weatherford Projects</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              View our recently completed irrigation and drainage projects in the Weatherford area.
            </p>
          </div>
          
          <LocalProjects cityName="Weatherford" />
        </div>
      </section>
      
      {/* Location-specific FAQ */}
      <section className="py-16 md:py-24 bg-irrigation-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Weatherford Irrigation FAQs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Common questions about irrigation systems and services in Weatherford and surrounding areas.
            </p>
          </div>
          
          <LocalFAQ cityName="Weatherford" faqs={[
            {
              question: "What are the watering restrictions in Weatherford?",
              answer: "Weatherford water restrictions vary by season. During peak summer months, the city often implements alternating watering days based on address numbers. Always check current city guidelines."
            },
            {
              question: "Do I need a permit for a sprinkler system in Weatherford?",
              answer: "Yes, Weatherford requires permits for new irrigation system installations. Texas Best Sprinklers handles all permitting paperwork as part of our installation service."
            },
            {
              question: "How do Parker County soil conditions affect irrigation?",
              answer: "Parker County's predominantly clay soil creates unique irrigation challenges. Our systems are designed with slower precipitation rates and cycle-soak programming to prevent runoff and maximize absorption."
            }
          ]} />
        </div>
      </section>
      
      {/* Weatherford-specific CTA */}
      <CTA 
        title="Ready to Improve Your Weatherford Property?"
        subtitle="Contact Texas Best Sprinklers today for a free consultation on your irrigation project."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
