
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreview from '@/components/BlogPreview';
import StatsSection from '@/components/StatsSection';
import CTA from '@/components/CTA';

const Index: React.FC = () => {
  // Add SEO metadata
  React.useEffect(() => {
    document.title = "Texas Best Sprinklers, Drainage and Lighting LLC - Fort Worth, TX";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Texas Best Sprinklers provides expert irrigation, drainage, and outdoor lighting services in Fort Worth, TX. Call (817) 304-7896 for professional installation and repairs.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        <ServicesSection />
        
        <FeaturesSection />
        
        <StatsSection />
        
        <HowItWorksSection />
        
        <TestimonialsSection />
        
        <BlogPreview />
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
