'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Droplet } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
  cta?: {
    label: string;
    href: string;
  };
}

// Helper to construct optimized image URL with next-gen formats
const getOptimizedImagePath = (src: string): string => {
  // Use Next.js Image Optimization API to convert to WebP
  if (src.startsWith('/')) {
    return src.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
  return src;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Transform Your Landscape with Expert Irrigation",
  subtitle = "Professional sprinkler, drainage, and lighting solutions in Fort Worth, Texas",
  image = "/assets/images/optimized/hero-background.webp",
  cta,
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Simple for reliable performance */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image 
          src="/assets/images/optimized/hero-background.webp"
          alt="Irrigation system in a beautiful landscape" 
          fill 
          priority 
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/hfwAJhAPkz1MYsgAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>


      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white pt-20">
        <div className="inline-flex items-center bg-irrigation-darkGreen px-4 py-2 rounded-full mb-6 animate-float">
          <Droplet className="h-5 w-5 mr-2 text-white" />
          <span className="font-medium">Texas Best Sprinklers, Drainage and Lighting</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link 
            href="/contact" 
            className="btn-primary min-w-[200px] text-lg"
          >
            Get a Free Quote
          </Link>
          <Link 
            href="/services" 
            className="bg-white hover:bg-opacity-90 text-irrigation-blue font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 min-w-[200px] text-lg"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
