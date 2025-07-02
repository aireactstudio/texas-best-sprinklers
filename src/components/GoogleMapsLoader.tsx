'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Script from 'next/script';

// Create context
interface GoogleMapsContextType {
  isLoaded: boolean;
  loadError: Error | null;
}

const GoogleMapsContext = createContext<GoogleMapsContextType>({
  isLoaded: false,
  loadError: null
});

// Custom hook to use the Google Maps context
export const useGoogleMaps = () => useContext(GoogleMapsContext);

interface GoogleMapsProviderProps {
  apiKey: string;
  children: ReactNode;
}

// Provider component that loads Google Maps once
export function GoogleMapsProvider({ apiKey, children }: GoogleMapsProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  // Check if Google Maps is already loaded
  useEffect(() => {
    if (typeof window !== 'undefined' && window.google?.maps?.Map) {
      console.log('Google Maps API already available');
      setIsLoaded(true);
    }
  }, []);

  const handleScriptLoad = () => {
    console.log('Google Maps script loaded successfully');
    // Wait for Google Maps API to be fully available
    const checkGoogleMaps = () => {
      if (typeof window !== 'undefined' && window.google?.maps?.Map) {
        console.log('Google Maps API fully initialized');
        setIsLoaded(true);
      } else {
        // Retry after a short delay
        setTimeout(checkGoogleMaps, 100);
      }
    };
    checkGoogleMaps();
  };

  const handleScriptError = () => {
    console.error('Error loading Google Maps script');
    setLoadError(new Error('Failed to load Google Maps'));
  };

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, loadError }}>
      {!isLoaded && typeof window !== 'undefined' && !window.google?.maps && (
        <Script
          id="google-maps-script"
          src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async&v=beta&callback=initMap`}
          onLoad={handleScriptLoad}
          onError={handleScriptError}
          strategy="lazyOnload"
          defer
        />
      )}
      {children}
    </GoogleMapsContext.Provider>
  );
}

// Simple loader component
export default function GoogleMapsLoader({ apiKey, children }: GoogleMapsProviderProps) {
  return (
    <GoogleMapsProvider apiKey={apiKey}>
      {children}
    </GoogleMapsProvider>
  );
}
