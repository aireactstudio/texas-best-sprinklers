'use client';

import React, { useMemo } from 'react';
import { GoogleMap, Marker, Circle } from '@react-google-maps/api';
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
    <div className="map-container rounded-lg overflow-hidden shadow-md" style={{ height, width }}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={11}
        options={mapOptions}
      >
        {/* Pin marker at the center location */}
        <Marker position={center} title={locationData.name} />
        
        {/* Service area circle */}
        <Circle
          center={center}
          options={circleOptions}
        />
      </GoogleMap>
    </div>
  );
};

export default LocationMap;
