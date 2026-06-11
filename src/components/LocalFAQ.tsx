"use client";

import React from 'react';
import HomeFAQ, { FAQItem } from '@/components/HomeFAQ';

interface LocalFAQProps {
  cityName: string;
  faqs: FAQItem[];
}

const LocalFAQ: React.FC<LocalFAQProps> = ({ cityName, faqs }) => {
  if (faqs.length === 0) return null;

  return (
    <HomeFAQ
      title={`${cityName} FAQs`}
      subtitle={`Common irrigation and sprinkler questions for ${cityName} homeowners`}
      badgeText={`${cityName} answers`}
      sidebarTitle="Browse by Category"
      sidebarSubtitle={`Questions about service in ${cityName}`}
      contactButtonText={`Contact ${cityName} Team`}
      faqs={faqs}
    />
  );
};

export default LocalFAQ;
