'use client';

import React from 'react';
import Script from 'next/script';

interface SchemaMarkupProps {
  data: object;
}

/**
 * Component for adding JSON-LD schema markup to pages
 * Uses Next.js Script component for optimized loading with afterInteractive strategy
 */
const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ data }) => {
  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default SchemaMarkup;
