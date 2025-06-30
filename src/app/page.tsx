'use client';

import { useEffect, useState } from 'react';
import LocationHeroSection from '@/components/location-homepages/LocationHeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreview from '@/components/BlogPreview';
import StatsSection from '@/components/StatsSection';
import CTA from '@/components/CTA';
import StructuredData from '@/components/StructuredData';
import HowToGetStartedSection from '@/components/HowToGetStartedSection';
import MultiServiceHowToSchema from '@/components/MultiServiceHowToSchema';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import { curatedReviews } from '@/data/curated-reviews';

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const [businessInfo, setBusinessInfo] = useState({
    name: 'Texas Best Sprinklers',
    rating: 5,
    userRatingsTotal: 100,
    googleUrl: 'https://g.page/r/CSwRGl0HZDGRChI/review'
  });
  
  // Define the steps for the HowTo schema (same as in HowItWorksSection)
  const howToSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start with a thorough assessment of your landscape, discussing your needs, water usage goals, and budget considerations.",
    },
    {
      number: "02",
      title: "Custom Design",
      description: "Our technicians create a tailored irrigation plan specific to your landscape's layout, soil type, and plant requirements.",
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Expert technicians install your system with minimal disruption, ensuring everything is properly calibrated.",
    },
    {
      number: "04",
      title: "Fine-Tuning & Education",
      description: "We adjust your system for optimal performance and teach you how to use your new irrigation system effectively.",
    },
  ];

  // Fetch reviews for structured data
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          if (data.businessInfo) {
            setBusinessInfo(data.businessInfo);
          }
        }
      } catch (err) {
        console.error('Failed to fetch reviews for structured data:', err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {/* Structured Data */}
      <StructuredData businessInfo={businessInfo} reviews={reviews} />
      <MultiServiceHowToSchema activeTab="irrigation" />
      
      {/* Page Content */}
      <LocationHeroSection
        locationName="Fort Worth"
        locationSlug="fort-worth"
        landmarks={['Fort Worth Stockyards', 'Sundance Square', 'Fort Worth Water Gardens', 'Dickies Arena']}
        nearestOffice="Fort Worth"
        distanceFromOffice={0}
        serviceAreas={[]}
      />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <HowToGetStartedSection />
      <TestimonialsSection />
      <BlogPreview />
      <ServiceAreaLocator 
        title="Our Service Areas"
        subtitle="Texas Best Sprinklers provides expert irrigation and drainage solutions throughout the Fort Worth metroplex"
      />
      <CTA />
    </>
  );
}
