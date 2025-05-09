'use client';

import React from 'react';
import Link from 'next/link';
import { LocationIcon } from '@/components/Icons';

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
  // Fort Worth area locations
  const fortWorthLocations: LocationItem[] = [
    { name: 'Fort Worth', slug: 'fort-worth', distance: 0, isMainOffice: true },
    { name: 'Arlington', slug: 'arlington', distance: 15 },
    { name: 'Keller', slug: 'keller', distance: 18 },
    { name: 'Southlake', slug: 'southlake', distance: 21 },
    { name: 'Colleyville', slug: 'colleyville', distance: 19 },
    { name: 'Grapevine', slug: 'grapevine', distance: 23 },
    { name: 'North Richland Hills', slug: 'north-richland-hills', distance: 12 },
    { name: 'Bedford', slug: 'bedford', distance: 17 },
    { name: 'Euless', slug: 'euless', distance: 16 },
    { name: 'Haltom City', slug: 'haltom-city', distance: 8 },
    { name: 'Hurst', slug: 'hurst', distance: 14 },
    { name: 'Mansfield', slug: 'mansfield', distance: 22 },
    { name: 'Grand Prairie', slug: 'grand-prairie', distance: 19 },
    { name: 'Benbrook', slug: 'benbrook', distance: 10 },
    { name: 'Watauga', slug: 'watauga', distance: 15 },
    { name: 'Flower Mound', slug: 'flower-mound', distance: 28 },
    { name: 'Lewisville', slug: 'lewisville', distance: 30 },
    { name: 'Coppell', slug: 'coppell', distance: 26 },
    { name: 'Irving', slug: 'irving', distance: 24 },
    { name: 'Trophy Club', slug: 'trophy-club', distance: 27 },
    { name: 'Roanoke', slug: 'roanoke', distance: 25 },
    { name: 'Westlake', slug: 'westlake', distance: 23 },
    { name: 'Dallas', slug: 'dallas', distance: 32 },
  ];

  // Weatherford area locations
  const weatherfordLocations: LocationItem[] = [
    { name: 'Weatherford', slug: 'weatherford', distance: 0, isMainOffice: true },
    { name: 'Aledo', slug: 'aledo', distance: 12 },
    { name: 'Hudson Oaks', slug: 'hudson-oaks', distance: 5 },
    { name: 'Willow Park', slug: 'willow-park', distance: 8 },
    { name: 'Springtown', slug: 'springtown', distance: 15 },
    { name: 'Millsap', slug: 'millsap', distance: 10 },
    { name: 'Mineral Wells', slug: 'mineral-wells', distance: 25 },
    { name: 'Azle', slug: 'azle', distance: 18 },
    { name: 'Annetta', slug: 'annetta', distance: 9 },
    { name: 'Brock', slug: 'brock', distance: 14 },
    { name: 'Peaster', slug: 'peaster', distance: 12 },
    { name: 'Cool', slug: 'cool', distance: 20 },
  ];

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
          {location.isMainOffice ? 'Main Office' : `${location.distance} mi`}
        </div>
      </div>
    </Link>
  );

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Service Areas
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fort Worth Area */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white py-4 px-6 text-center font-semibold text-xl">
              Fort Worth Area
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
              {fortWorthLocations.map((location) => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>

          {/* Weatherford Area */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white py-4 px-6 text-center font-semibold text-xl">
              Weatherford Area
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
              {weatherfordLocations.map((location) => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
