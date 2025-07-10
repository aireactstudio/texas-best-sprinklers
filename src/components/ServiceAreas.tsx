'use client';

import React from 'react';
import Link from 'next/link';
import { LocationIcon } from '@/components/Icons';
import { LOCATIONS } from '@/data/locationData';
import { locationData } from '@/data/locationData';

interface ServiceAreasProps {
  serviceType: string; // The current service type (e.g., "maintenance", "irrigation-repair")
}

interface LocationItem {
  name: string;
  slug: string;
  distance: number; // Distance in miles
  isMainOffice?: boolean;
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ serviceType }) => {
  // Create our location items from the locationData
  const locationItems: LocationItem[] = LOCATIONS
    .filter(slug => !!locationData[slug]) // Filter out any missing locations
    .map(slug => {
      const info = locationData[slug];
      return {
        name: info.name,
        slug: slug,
        distance: info.distanceFromOffice,
        isMainOffice: slug === 'fort-worth' // Only Fort Worth is main office
      };
    });

  // Sort locations: Fort Worth first (main office), then by distance
  const sortedLocations = [...locationItems].sort((a, b) => {
    if (a.isMainOffice) return -1;
    if (b.isMainOffice) return 1;
    return a.distance - b.distance;
  });

  // Create a location card with a link to the service-specific location page
  const LocationCard = ({ location }: { location: LocationItem }) => (
    <Link 
      href={`/services/${serviceType}/${location.slug}`}
      className="flex items-center p-3 hover:bg-green-50 rounded-md transition-colors"
    >
      <LocationIcon className="text-green-600 mr-2" />
      <div className="flex flex-col">
        <span className="font-medium">{location.name}{location.isMainOffice && ", TX"}</span>
        <div className="text-sm text-gray-500">
          {location.isMainOffice ? 'Main Office' : `${location.distance} mi from Fort Worth`}
        </div>
      </div>
    </Link>
  );

  // Group locations into columns for better display
  const columns = 3;
  const itemsPerColumn = Math.ceil(sortedLocations.length / columns);
  const locationColumns = [];
  
  for (let i = 0; i < columns; i++) {
    locationColumns.push(
      sortedLocations.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Service Areas
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto mb-12"></div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-600 text-white py-4 px-6 text-center font-semibold text-xl">
            Texas Best Sprinklers Service Areas
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
            {locationColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col space-y-2">
                {column.map(location => (
                  <LocationCard key={location.slug} location={location} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
