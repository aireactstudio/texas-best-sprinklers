'use client';

import React, { useMemo } from 'react';
import { GoogleMap, Circle } from '@react-google-maps/api';
import { useGoogleMaps } from './GoogleMapsLoader';
// Import the type directly
type LocationData = {
  name: string;
  nearestOffice: string;
  distanceFromOffice: number;
  landmarks: string[];
  neighborhoods?: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  isOfficeLocation?: boolean;
  serviceRadius?: number;
  [key: string]: any;
};

interface LocationMapProps {
  locationData: LocationData;
  radiusMiles?: number;
  height?: string;
  width?: string;
}

// Convert miles to meters for the Google Maps circle radius
const milesToMeters = (miles: number): number => {
  return miles * 1609.34;
};

const LocationMap: React.FC<LocationMapProps> = ({ 
  locationData, 
  radiusMiles = 5,
  height = '400px',
  width = '100%'
}) => {
  // Use our centralized Google Maps loader
  const { isLoaded } = useGoogleMaps();
  
  // Lazy load the map with intersection observer
  const [mapVisible, setMapVisible] = React.useState(false);
  const mapRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    if (!mapRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    
    observer.observe(mapRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const center = useMemo(() => {
    if (locationData.coordinates) {
      return {
        lat: locationData.coordinates.latitude,
        lng: locationData.coordinates.longitude
      };
    }
    // Default to Fort Worth if no coordinates
    return { lat: 32.7555, lng: -97.3308 };
  }, [locationData]);

  const mapOptions = {
    disableDefaultUI: false,
    clickableIcons: true,
    scrollwheel: false,
  };

  const circleOptions = {
    strokeColor: '#3B82F6', // Blue color
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#3B82F6',
    fillOpacity: 0.1,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: milesToMeters(radiusMiles),
    zIndex: 1
  };

  if (!isLoaded) {
    return <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg" style={{ height, width }}>
      <p className="text-gray-500">Loading map...</p>
    </div>;
  }

  return (
    <div style={{ height, width }} ref={mapRef}>
      {(isLoaded && mapVisible) ? (
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          center={center}
          zoom={10}
          options={mapOptions}
        >
          {/* Pin marker at the center location - Using marker created via Google Maps API directly to avoid deprecation */}
        
          {/* Service area circle */}
          <Circle
            center={center}
            radius={milesToMeters(radiusMiles)}
            options={circleOptions}
          />
        </GoogleMap>
      ) : (
        <div className="bg-gray-100 w-full h-full flex items-center justify-center rounded-lg">
          <div className="text-gray-400 text-sm">Map loading...</div>
        </div>
      )}
    </div>
  );
};

export default LocationMap;
