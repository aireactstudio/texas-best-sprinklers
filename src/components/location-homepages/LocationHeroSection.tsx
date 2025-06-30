'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Star, CheckCircle } from 'lucide-react';
import LocationMap from '@/components/LocationMap';
import ErrorBoundary from '@/components/ErrorBoundary';

interface LocationHeroSectionProps {
  locationName: string;
  locationSlug: string;
  landmarks: string[];
  nearestOffice: string;
  distanceFromOffice: number;
  serviceAreas: string[];
}

// Helper function to get coordinates from location name
function getLocationCoordinates(locationName: string): { lat: number, lng: number } {
  // Default to Fort Worth if the location is not found
  const locationCoords: Record<string, { lat: number, lng: number }> = {
    'fort worth': { lat: 32.7555, lng: -97.3308 },
    'arlington': { lat: 32.7357, lng: -97.1081 },
    'keller': { lat: 32.9357, lng: -97.2497 },
    'weatherford': { lat: 32.7593, lng: -97.7972 },
    'southlake': { lat: 32.9412, lng: -97.1342 },
    'colleyville': { lat: 32.8837, lng: -97.1481 },
    'grapevine': { lat: 32.9342, lng: -97.0781 },
    'north richland hills': { lat: 32.8343, lng: -97.2289 },
    'flower mound': { lat: 33.0145, lng: -97.0969 },
  };
  
  const normalizedLocation = locationName.toLowerCase();
  return locationCoords[normalizedLocation] || { lat: 32.7555, lng: -97.3308 }; // Default to Fort Worth
}

export default function LocationHeroSection({
  locationName,
  locationSlug,
  landmarks,
  nearestOffice,
  distanceFromOffice,
  serviceAreas
}: LocationHeroSectionProps) {
  const phoneNumber = "(817) 304-7896";

  return (
    <section className="relative overflow-hidden min-h-[80vh] w-full">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/assets/images/optimized/hero-background.webp"
            alt={`Irrigation system in ${locationName}, Texas`}
            fill 
            priority 
            fetchPriority="high"
            sizes="100vw"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/hfwAJhAPkz1MYsgAAAABJRU5ErkJggg=="
          />
        </div>
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/60" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-green-700 border border-green-200 shadow-lg">
              <MapPin className="w-4 h-4" />
              Serving {locationName}, Texas
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                <span className="text-green-400">#1 Sprinkler</span> & Irrigation Services in {locationName}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl drop-shadow-md" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                Texas Best Sprinklers provides trusted irrigation solutions for {locationName} residents and businesses. As your local irrigation experts, we deliver top-quality sprinkler services throughout the {locationName} area. Our licensed technicians are ready to assist with all your sprinkler system needs!
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">100% Satisfaction</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-200 transform hover:scale-105"
                asChild
              >
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {phoneNumber}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-200"
                asChild
              >
                <a href="#contact">
                  Get Free Estimate
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white/90 font-medium">5.0 Rating</span>
              </div>
              <div className="border-l border-white/20 pl-6">
                <span className="text-white/90 font-medium">500+ Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Image Side - Static Map Placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Floating Stats Card - Moved to top left */}
              <div className="absolute top-4 left-4 z-10 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Years Serving</div>
                  <div className="text-sm text-gray-600">{locationName}</div>
                </div>
              </div>

              {/* Google Map */}
              <div className="relative h-[350px] w-full rounded-xl overflow-hidden">
                {typeof window !== 'undefined' && (
                  <ErrorBoundary fallback={<div className="h-full w-full bg-gray-100 flex items-center justify-center"><span className="text-gray-500">Map unavailable</span></div>}>
                    <LocationMap 
                      locationData={{
                        name: locationName,
                        nearestOffice: nearestOffice,
                        distanceFromOffice: distanceFromOffice,
                        landmarks: landmarks,
                        coordinates: {
                          latitude: getLocationCoordinates(locationName).lat,
                          longitude: getLocationCoordinates(locationName).lng
                        }
                      }}
                      radiusMiles={8}
                      height="350px"
                      width="100%"
                    />
                  </ErrorBoundary>
                )}
              </div>
              
              {/* Location Info Badge */}
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 shadow-lg mx-4 my-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-xl font-bold text-white">{locationName}, TX</div>
                      <div className="text-sm text-white/80">Full Service Coverage</div>
                    </div>
                  </div>
                  <div className="bg-green-500 text-white rounded-full px-3 py-1 text-sm font-medium shadow-md">
                    Service Area
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
