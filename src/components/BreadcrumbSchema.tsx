import React from 'react';
import { usePathname } from 'next/navigation';

interface BreadcrumbSchemaProps {
  customPath?: string[];
}

/**
 * Generates a BreadcrumbList schema for the current page
 * 
 * This component dynamically creates breadcrumbs based on the current URL path
 * or uses a custom path if provided
 */
export default function BreadcrumbSchema({ customPath }: BreadcrumbSchemaProps) {
  const pathname = usePathname();
  
  // Generate breadcrumb path segments from URL or custom path
  const pathSegments = customPath || 
    pathname.split('/')
      .filter(segment => segment) // Remove empty segments
      .map(segment => {
        // Convert kebab-case to Title Case and replace hyphens with spaces
        return segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      });
  
  // Always start with Home
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sprinkleranddrains.com"
    }
  ];
  
  // Build the rest of the breadcrumb path
  let currentPath = '';
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment.toLowerCase().replace(/\s+/g, '-')}`;
    
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": index + 2, // +2 because Home is position 1
      "name": segment,
      "item": `https://sprinkleranddrains.com${currentPath}`
    });
  });
  
  // Create the structured data object
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}
