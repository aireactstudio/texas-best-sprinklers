'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

interface ServiceAreaLocatorProps {
  apiKey: string; // Keeping this prop to maintain compatibility with existing code
  title?: string;
  subtitle?: string;
}

// Service area locations for Texas Best Sprinklers
const SERVICE_LOCATIONS = [
  { name: 'Fort Worth', lat: 32.7555, lng: -97.3308, radius: 15 },
  { name: 'Arlington', lat: 32.7357, lng: -97.1081, radius: 10 },
  { name: 'Keller', lat: 32.9343, lng: -97.2297, radius: 8 },
  { name: 'Southlake', lat: 32.9412, lng: -97.1342, radius: 8 },
  { name: 'Colleyville', lat: 32.8906, lng: -97.1467, radius: 8 },
  { name: 'Grapevine', lat: 32.9343, lng: -97.0780, radius: 8 },
  { name: 'North Richland Hills', lat: 32.8342, lng: -97.2289, radius: 10 },
  { name: 'Bedford', lat: 32.8449, lng: -97.1433, radius: 8 },
  { name: 'Euless', lat: 32.8370, lng: -97.0819, radius: 8 },
  { name: 'Hurst', lat: 32.8234, lng: -97.1705, radius: 8 },
  { name: 'Watauga', lat: 32.8776, lng: -97.2547, radius: 8 },
  { name: 'Haltom City', lat: 32.7996, lng: -97.2691, radius: 8 },
  { name: 'Mansfield', lat: 32.5632, lng: -97.1417, radius: 10 },
  { name: 'Grand Prairie', lat: 32.7459, lng: -97.0077, radius: 10 },
  { name: 'Benbrook', lat: 32.6732, lng: -97.4606, radius: 8 },
  { name: 'Flower Mound', lat: 33.0145, lng: -97.0969, radius: 10 },
  { name: 'Lewisville', lat: 33.0462, lng: -97.0103, radius: 10 },
  { name: 'Coppell', lat: 32.9545, lng: -97.0150, radius: 8 },
  { name: 'Irving', lat: 32.8140, lng: -96.9489, radius: 10 },
  { name: 'Trophy Club', lat: 33.0015, lng: -97.1900, radius: 8 },
  { name: 'Roanoke', lat: 33.0040, lng: -97.2258, radius: 8 },
  { name: 'Westlake', lat: 33.0001, lng: -97.1950, radius: 8 },
  { name: 'Weatherford', lat: 32.7593, lng: -97.7972, radius: 12 },
  { name: 'Annetta', lat: 32.6865, lng: -97.6511, radius: 8 },
  { name: 'Brock', lat: 32.6732, lng: -97.9383, radius: 8 },
  { name: 'Millsap', lat: 32.7487, lng: -98.0092, radius: 8 },
  { name: 'Peaster', lat: 32.8515, lng: -97.8661, radius: 8 },
  { name: 'Hudson Oaks', lat: 32.7554, lng: -97.7114, radius: 8 },
  { name: 'Aledo', lat: 32.6968, lng: -97.6006, radius: 8 },
  { name: 'Willow Park', lat: 32.7632, lng: -97.6511, radius: 8 },
  { name: 'Springtown', lat: 32.9679, lng: -97.6803, radius: 8 },
  { name: 'Cool', lat: 32.8346, lng: -97.9972, radius: 8 },
  { name: 'Azle', lat: 32.8954, lng: -97.5450, radius: 8 },
  { name: 'Mineral Wells', lat: 32.8085, lng: -98.1128, radius: 10 },
];

const ServiceAreaLocator: React.FC<ServiceAreaLocatorProps> = ({ 
  apiKey, 
  title = "Our Service Areas",
  subtitle = "We provide expert irrigation and drainage services throughout the Fort Worth area"
}) => {
  // Keep the apiKey prop even though we're not using it directly
  // This prevents breaking other components that might depend on the prop structure
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  
  // Helper function to convert location name to URL slug
  const getLocationSlug = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 opacity-60"></div>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23015e17' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
           }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">{title}</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-1 gap-y-0.5">
            {SERVICE_LOCATIONS.map((location, index) => (
              <Link 
                href={`/${getLocationSlug(location.name)}`} 
                key={index}
                className={`px-3 py-2 hover:bg-green-50 transition-colors border-b border-r border-gray-100 ${activeLocation === location.name ? 'bg-green-50' : ''}`}
                onClick={() => setActiveLocation(location.name)}
              >
                <div className="flex items-center">
                  <span className="font-medium text-sm text-gray-800">{location.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 inline-block">Need service outside these areas? </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 ml-1"
          >
            Contact us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Keep the Google Maps Script reference for other components that need it */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=weekly`}
        strategy="lazyOnload"
        id="google-maps-script"
      />
    </section>
  );
};

export default ServiceAreaLocator;
