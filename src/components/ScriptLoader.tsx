'use client';

import React from 'react';
import Script from 'next/script';

interface ScriptLoaderProps {
  src: string;
  id: string;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
  onLoad?: () => void;
}

/**
 * Component for optimized loading of third-party scripts
 * Uses Next.js Script component for improved performance
 */
const ScriptLoader: React.FC<ScriptLoaderProps> = ({ 
  src, 
  id, 
  strategy = 'lazyOnload',
  onLoad
}) => {
  return (
    <Script
      id={id}
      src={src}
      strategy={strategy}
      onLoad={onLoad}
    />
  );
};

export default ScriptLoader;
