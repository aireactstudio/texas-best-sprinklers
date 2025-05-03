'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

interface LazyComponentProps {
  /**
   * Path to the component to lazy load - provide a function that imports the component
   * Example: () => import('@/components/HeavyComponent')
   */
  importFn: () => Promise<{ default: React.ComponentType<any> }>;
  
  /** Props to pass to the lazy-loaded component */
  props?: Record<string, any>;
  
  /** Optional custom loading state */
  fallback?: React.ReactNode;
  
  /** Whether the component should be SSR'd (defaults to false for performance) */
  ssr?: boolean;
  
  /** ID for component tracking/debugging */
  id?: string;
}

/**
 * Enhanced lazy-loading wrapper for optimized code splitting
 * Uses Next.js dynamic imports to reduce initial bundle size
 */
const LazyComponent: React.FC<LazyComponentProps> = ({ 
  importFn, 
  props = {}, 
  fallback = <div className="min-h-[120px] flex items-center justify-center w-full">
    <div className="animate-pulse bg-gray-100 rounded-md h-16 w-full max-w-lg"></div>
  </div>,
  ssr = false,
  id = 'lazy-component'
}) => {
  // Use Next.js dynamic import with configurable server-side rendering
  const DynamicComponent = dynamic(importFn, {
    loading: () => <div data-lazy-id={id}>{fallback}</div>,
    ssr,
  });

  return <DynamicComponent {...props} />;
};

/**
 * Helper to create a pre-configured lazy component
 * This makes it easier to create lazy components with consistent settings
 */
export const createLazyComponent = <T extends object>(
  importFn: () => Promise<{ default: React.ComponentType<T> }>,
  options: Omit<LazyComponentProps, 'importFn' | 'props'> = {}
) => {
  return (props: T) => (
    <LazyComponent
      importFn={importFn}
      props={props as Record<string, any>}
      ssr={options.ssr}
      fallback={options.fallback}
      id={options.id}
    />
  );
};

export default LazyComponent;
