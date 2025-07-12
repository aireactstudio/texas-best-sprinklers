'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LOCATIONS, locationData } from '@/data/locationData';

interface ServiceAreaLocatorProps {
  title?: string;
  subtitle?: string;
}

const ServiceAreaLocator: React.FC<ServiceAreaLocatorProps> = ({ 
  title = "Our Service Areas",
  subtitle = "Texas Best Sprinklers provides expert irrigation and drainage solutions throughout the Fort Worth metroplex"
}) => {


  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  
  // Helper function to get location name from slug with consistent formatting
  const getLocationName = (slug: string): string => {
    const location = locationData[slug];
    
    // If we have location data, use the name from there
    if (location && location.name) {
      // Ensure consistent capitalization and formatting
      return location.name;
    }
    
    // Fallback: Format the slug into a proper name
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Create a balanced grid layout
  const organizeLocationsIntoGrid = () => {
    const allLocations = LOCATIONS.filter(slug => !!locationData[slug]);
    const totalLocations = allLocations.length;
    
    // For 3 rows (5-5-4 distribution)
    const grid = [
      allLocations.slice(0, 5),  // First row: 5 items
      allLocations.slice(5, 10), // Second row: 5 items
      allLocations.slice(10)     // Third row: remaining items
    ];
    
    return grid;
  };
  
  const locationGrid = organizeLocationsIntoGrid();

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
          {locationGrid.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex flex-wrap">
              {row.map((slug) => {
                const name = getLocationName(slug);
                const itemWidth = `${100 / row.length}%`;
                
                return (
                  <Link 
                    href={`/${slug}`} 
                    key={slug}
                    className={`px-3 py-2 hover:bg-green-50 transition-colors border-b border-r border-gray-100 ${activeLocation === name ? 'bg-green-50' : ''}`}
                    style={{ width: itemWidth }}
                    onClick={() => setActiveLocation(name)}
                  >
                    <div className="flex items-center">
                      <span className="font-medium text-sm text-gray-800">{name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
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
    </section>
  );
};

export default ServiceAreaLocator;
