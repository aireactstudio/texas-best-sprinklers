'use client';

import { GoogleMapsProvider as GoogleMapsProviderInternal } from './GoogleMapsLoader';
import { ReactNode } from 'react';

export default function GoogleMapsProviderWrapper({ children }: { children: ReactNode }) {
  // Get API key from environment variable
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  
  return (
    <GoogleMapsProviderInternal apiKey={apiKey}>
      {children}
    </GoogleMapsProviderInternal>
  );
}
