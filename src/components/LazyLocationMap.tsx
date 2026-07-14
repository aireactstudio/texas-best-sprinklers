'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LocationMap = dynamic(() => import('./LocationMap'), {
  ssr: false,
  loading: () => null,
});

type LocationData = {
  name: string;
  nearestOffice: string;
  distanceFromOffice: number;
  landmarks: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
};

interface LazyLocationMapProps {
  locationData: LocationData;
  radiusMiles?: number;
  height?: string;
  width?: string;
}

/**
 * Shows a static map placeholder first, then hydrates the interactive Maps JS
 * after the browser has finished loading the page (idle), so LCP/TBT stay clear.
 */
const LazyLocationMap: React.FC<LazyLocationMapProps> = ({
  locationData,
  radiusMiles = 5,
  height = '350px',
  width = '100%',
}) => {
  const [activated, setActivated] = useState(false);

  const lat = locationData.coordinates?.latitude ?? 32.7555;
  const lng = locationData.coordinates?.longitude ?? -97.3308;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  const staticMapSrc = apiKey
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=10&size=640x350&scale=1&maptype=roadmap&markers=color:0x22c55e%7C${lat},${lng}&key=${apiKey}`
    : null;

  useEffect(() => {
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const activate = () => {
      if (cancelled) return;
      setActivated(true);
    };

    const scheduleActivate = () => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(() => activate(), { timeout: 2500 });
      } else {
        timeoutId = setTimeout(activate, 1500);
      }
    };

    if (document.readyState === 'complete') {
      scheduleActivate();
    } else {
      window.addEventListener('load', scheduleActivate, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('load', scheduleActivate);
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl" style={{ height, width }}>
      {/* Placeholder stays underneath until interactive map paints */}
      {staticMapSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={staticMapSrc}
          alt={`Map of ${locationData.name} service area`}
          width={640}
          height={350}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" aria-hidden />
      )}

      {activated && (
        <div className="absolute inset-0">
          <LocationMap
            locationData={locationData}
            radiusMiles={radiusMiles}
            height={height}
            width={width}
          />
        </div>
      )}
    </div>
  );
};

export default LazyLocationMap;
