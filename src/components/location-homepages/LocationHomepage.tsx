'use client';

import React from 'react';
import LocationHeroSection from './LocationHeroSection';
import ServicesSection from '@/components/ServicesSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTA from '@/components/CTA';
import LocationLocalInfo from './LocationLocalInfo';
import WaterRestrictions from './WaterRestrictions';
import { DALLAS_AREA_WATER_RESTRICTIONS } from '@/data/waterRestrictions';
import { getLocationData } from '@/data/locationData';
import LocationServicesAndAreas from './LocationServicesAndAreas';
import LocationSEOArticle from './LocationSEOArticle';
import Script from 'next/script';

interface LocationHomepageProps {
  locationSlug: string;
}

export default function LocationHomepage({ locationSlug }: LocationHomepageProps) {
  const locationData = getLocationData(locationSlug);
  
  if (!locationData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <p className="text-gray-600">We don't currently serve this location.</p>
        </div>
      </div>
    );
  }

  const {
    name: locationName,
    nearestOffice,
    distanceFromOffice,
    landmarks,
    serviceAreas
  } = locationData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <LocationHeroSection
        locationName={locationName}
        locationSlug={locationSlug}
        landmarks={landmarks}
        nearestOffice={nearestOffice}
        distanceFromOffice={distanceFromOffice}
        serviceAreas={serviceAreas}
      />

      {/* Breadcrumbs (always below hero) */}
      <Breadcrumbs />

      {/* Services Overview */}
      <ServicesSection
        cityName={locationName}
        routePrefix={locationSlug}
      />

      {/* Services + Areas Served (compact lists) */}
      <LocationServicesAndAreas
        cityName={locationName}
        routePrefix={locationSlug}
        serviceAreas={serviceAreas}
      />

      {/* Local Information & Expertise */}
      <LocationLocalInfo
        locationName={locationName}
        locationSlug={locationSlug}
        landmarks={landmarks}
        nearestOffice={nearestOffice}
        distanceFromOffice={distanceFromOffice}
        serviceAreas={serviceAreas}
      />
      
      {/* Water Restrictions Directory (relevant cities only) */}
      <WaterRestrictions
        title={`Local Water Restrictions near ${locationName}`}
        subtitle="Find official watering schedules, conservation plans, and drought-stage guidance."
        links={DALLAS_AREA_WATER_RESTRICTIONS}
        currentLocation={locationSlug}
      />

      {/* Testimonials */}
      <TestimonialsSection
        cityFilter={locationName}
        maxDisplayCount={10}
      />

      {/* Inserted block: Above the article and below the reviews */}
      <CTA
        title={`Ready for reliable sprinkler service in ${locationName}?`}
        subtitle={`Fast, professional help for homes and businesses in ${locationName}. Get a free estimate today.`}
        buttonText="Get Free Estimate"
        buttonLink="/contact"
      />

      {/* SEO Article (Keller-specific) */}
      <LocationSEOArticle
        locationSlug={locationSlug}
        locationName={locationName}
      />

      {/* SEO: WebPage wrapper referencing the ItemLists emitted on this page */}
      <Script id={`jsonld-webpage-${locationSlug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `Sprinkler Services and Water Restrictions in ${locationName}`,
          url: `https://sprinkleranddrains.com/${locationSlug}`,
          about: {
            "@type": "Place",
            name: locationName,
            address: {
              "@type": "PostalAddress",
              addressLocality: locationName,
              addressRegion: "TX",
              addressCountry: "US"
            }
          },
          mainEntity: [
            { "@id": `#city-regulations-${locationSlug}` },
            { "@id": "#dfw-water-restrictions" }
          ]
        })}
      </Script>
    </div>
  );
}
