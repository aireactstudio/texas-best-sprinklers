'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import Script from 'next/script';

interface GoogleMapsContextType {
  isLoaded: boolean;
  loadError: Error | null;
  /** Request the Maps JS script (no-op if already loading/loaded). */
  requestLoad: () => void;
}

const GoogleMapsContext = createContext<GoogleMapsContextType>({
  isLoaded: false,
  loadError: null,
  requestLoad: () => {},
});

export const useGoogleMaps = () => useContext(GoogleMapsContext);

interface GoogleMapsProviderProps {
  apiKey: string;
  children: ReactNode;
}

/**
 * Provides Maps context sitewide, but does NOT fetch the Maps JS bundle
 * until a consumer calls requestLoad() (e.g. interactive map after click).
 */
export function GoogleMapsProvider({ apiKey, children }: GoogleMapsProviderProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google?.maps?.Map) {
      setIsLoaded(true);
    }
  }, []);

  const requestLoad = useCallback(() => {
    if (typeof window !== 'undefined' && window.google?.maps?.Map) {
      setIsLoaded(true);
      return;
    }
    setShouldLoad(true);
  }, []);

  const handleScriptLoad = () => {
    const checkGoogleMaps = () => {
      if (typeof window !== 'undefined' && window.google?.maps?.Map) {
        setIsLoaded(true);
      } else {
        setTimeout(checkGoogleMaps, 100);
      }
    };
    checkGoogleMaps();
  };

  const handleScriptError = () => {
    setLoadError(new Error('Failed to load Google Maps'));
  };

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, loadError, requestLoad }}>
      {shouldLoad && !isLoaded && typeof window !== 'undefined' && !window.google?.maps && (
        <Script
          id="google-maps-script"
          src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async&v=weekly`}
          onLoad={handleScriptLoad}
          onError={handleScriptError}
          strategy="afterInteractive"
        />
      )}
      {children}
    </GoogleMapsContext.Provider>
  );
}

export default function GoogleMapsLoader({ apiKey, children }: GoogleMapsProviderProps) {
  return (
    <GoogleMapsProvider apiKey={apiKey}>
      {children}
    </GoogleMapsProvider>
  );
}
