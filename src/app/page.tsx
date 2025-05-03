'use client';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreview from '@/components/BlogPreview';
import StatsSection from '@/components/StatsSection';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogPreview />
      <CTA />
    </>
  );
}
