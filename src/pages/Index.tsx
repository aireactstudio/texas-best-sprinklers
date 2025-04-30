
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
    document.title = "PureFlow Irrigation - Professional Irrigation Contractor Services";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "PureFlow Irrigation provides expert irrigation services including sprinkler installation, drip irrigation, and smart controller setup. Save water and maintain a beautiful landscape.");
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
