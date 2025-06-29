'use client';

import React from 'react';
import LocationHeroSection from './LocationHeroSection';
import LocationServicesOverview from './LocationServicesOverview';
import LocationTestimonials from './LocationTestimonials';
import LocationLocalInfo from './LocationLocalInfo';
import { getLocationData } from '@/data/locationData';

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

      {/* Services Overview */}
      <LocationServicesOverview
        locationName={locationName}
        locationSlug={locationSlug}
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

      {/* Testimonials */}
      <LocationTestimonials
        locationName={locationName}
      />
    </div>
  );
}
