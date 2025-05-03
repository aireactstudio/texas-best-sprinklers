'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

/**
 * NavigationObserver uses Intersection Observer API to detect when navigation links
 * are visible in the viewport and preloads their destinations for faster navigation
 */
export default function NavigationObserver() {
  const pathname = usePathname();
  const router = useRouter();
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Key page routes that should be preloaded when links are visible
    const routesToPreload = [
      '/services',
      '/contact',
      '/fort-worth',
      '/weatherford',
      '/projects',
      '/blog'
    ];
    
    // Don't preload the current page
    const filteredRoutes = routesToPreload.filter(route => route !== pathname);
    
    // Function to preload a route when its link becomes visible
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLAnchorElement) {
          const href = entry.target.getAttribute('href');
          
          if (href && filteredRoutes.includes(href)) {
            // Prefetch the route using Next.js router
            router.prefetch(href);
            
            // Once prefetched, stop observing this link
            if (observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          }
        }
      });
    };
    
    // Create IntersectionObserver for detecting visible links
    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '200px', // Start prefetching when link is within 200px of viewport
      threshold: 0.1,      // Trigger when at least 10% of the link is visible
    });
    
    // Observe all navigation links on the page
    const navLinks = document.querySelectorAll('a[href^="/"]');
    navLinks.forEach(link => {
      if (observerRef.current) {
        observerRef.current.observe(link);
      }
    });
    
    return () => {
      // Clean up observer when component unmounts
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pathname, router]);
  
  return null;
}
