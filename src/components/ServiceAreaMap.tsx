'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { getLocationData } from '../data/locationData';

// Dynamically import the LocationMap component to avoid SSR issues with Google Maps
const LocationMap = dynamic(() => import('./LocationMap'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg"></div>
});

interface ServiceAreaMapProps {
  locationSlug: string;
  title?: string;
  showDescription?: boolean;
  radiusMiles?: number;
  className?: string;
}

const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({
  locationSlug,
  title,
  showDescription = true,
  radiusMiles = 5,
  className = ''
}) => {
  const locationData = getLocationData(locationSlug);
  
  if (!locationData || !locationData.coordinates) {
    return null;
  }

  const locationName = locationData.name;
  
  return (
    <div className={`service-area-map ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      {!title && <h3 className="text-xl font-semibold mb-4">Our Service Area in {locationName}</h3>}
      
      <LocationMap 
        locationData={locationData}
        radiusMiles={radiusMiles}
        height="400px"
      />
      
      {showDescription && (
        <p className="text-sm text-gray-500 mt-2">
          Map shows our primary service area ({radiusMiles}-mile radius). 
          We also serve locations beyond this radius - contact us for details.
        </p>
      )}
    </div>
  );
};

export default ServiceAreaMap;
