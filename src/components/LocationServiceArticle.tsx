'use client';

import React, { useEffect, useRef } from 'react';
import { getServiceArticle } from '@/data/articles';
import { Droplet, LeafyGreen, MapPin, Clock, Award, CheckCircle2, CloudRain, Settings, Zap, Leaf } from 'lucide-react';
import Image from 'next/image';

interface LocationServiceArticleProps {
  service: string;
  location: string;
  className?: string;
}

/**
 * Component to display location-specific service articles with enhanced styling
 */
export default function LocationServiceArticle({ 
  service, 
  location,
  className = ''
}: LocationServiceArticleProps) {
  const articleRef = useRef<HTMLDivElement>(null);
  
  // Get the article content
  const articleContent = getServiceArticle(service, location);
  
  // If no article is found, don't render anything
  if (!articleContent) {
    return null;
  }
  
  // Format location name for display (convert slug to title case)
  const cityName = location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Service-specific background images and colors
  const serviceConfig: Record<string, {bgImage: string, accentColor: string, bgColor: string, icon: JSX.Element}> = {
    'Sprinkler Installation': {
      bgImage: '/images/services/sprinkler-installation.jpg',
      accentColor: 'text-irrigation-blue',
      bgColor: 'bg-irrigation-blue',
      icon: <Settings className="h-12 w-12" />
    },
    'Irrigation Repair': {
      bgImage: '/images/services/irrigation-repair.jpg',
      accentColor: 'text-irrigation-green',
      bgColor: 'bg-irrigation-green',
      icon: <Droplet className="h-12 w-12" />
    },
    'Drainage Solutions': {
      bgImage: '/images/services/drainage-solutions.jpg',
      accentColor: 'text-irrigation-darkBlue',
      bgColor: 'bg-irrigation-darkBlue',
      icon: <CloudRain className="h-12 w-12" />
    },
    'Lighting': {
      bgImage: '/images/services/lighting.jpg',
      accentColor: 'text-amber-500',
      bgColor: 'bg-amber-500',
      icon: <Zap className="h-12 w-12" />
    },
    'Maintenance': {
      bgImage: '/images/services/maintenance.jpg',
      accentColor: 'text-irrigation-darkGreen',
      bgColor: 'bg-irrigation-darkGreen',
      icon: <Leaf className="h-12 w-12" />
    }
  };
  
  const { bgImage, accentColor, bgColor, icon } = serviceConfig[service] || {
    bgImage: '/images/services/sprinkler-installation.jpg',
    accentColor: 'text-irrigation-blue',
    bgColor: 'bg-irrigation-blue',
    icon: <Settings className="h-12 w-12" />
  };
  
  // Apply styling to the article content after it renders
  useEffect(() => {
    if (!articleRef.current) return;
    
    const container = articleRef.current;
    
    // Style headings with decorative elements
    const headings = container.querySelectorAll('h2, h3, h4');
    headings.forEach(heading => {
      heading.classList.add(
        'relative', 
        'pl-4', 
        'border-l-4', 
        accentColor.replace('text-', 'border-'),
        'my-6',
        'pb-2',
        accentColor,
        'font-bold'
      );
      
      if (heading.tagName === 'H2') {
        heading.classList.add('text-2xl', 'md:text-3xl');
        heading.setAttribute('style', 'margin-bottom: 1.5rem; position: relative;');
        
        // Add decorative line
        const line = document.createElement('div');
        line.classList.add('absolute', 'bottom-0', 'left-0', 'w-24', 'h-1', bgColor);
        heading.appendChild(line);
      } else if (heading.tagName === 'H3') {
        heading.classList.add('text-xl', 'md:text-2xl');
      }
    });
    
    // Style paragraphs with better spacing and text size
    const paragraphs = container.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
      paragraph.classList.add(
        'text-gray-700',
        'leading-relaxed',
        'mb-6',
        'text-lg'
      );
    });
    
    // Style lists with custom bullets and spacing
    const lists = container.querySelectorAll('ul');
    lists.forEach(list => {
      list.classList.add(
        'space-y-3',
        'my-6'
      );
      
      const items = list.querySelectorAll('li');
      items.forEach(item => {
        // Create a styled wrapper
        const wrapper = document.createElement('div');
        wrapper.classList.add('flex', 'items-start');
        
        // Create custom bullet/icon
        const icon = document.createElement('span');
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${accentColor} mr-3 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
        
        // Clone the original li content
        const content = document.createElement('div');
        content.innerHTML = item.innerHTML;
        content.classList.add('text-gray-700');
        
        // Build the new structure
        wrapper.appendChild(icon);
        wrapper.appendChild(content);
        
        // Replace the original li content
        item.innerHTML = '';
        item.appendChild(wrapper);
      });
    });
    
    // Add section styling
    const sections = container.querySelectorAll('section, div[class*="section"]');
    sections.forEach(section => {
      section.classList.add(
        'bg-white',
        'rounded-lg',
        'shadow-md',
        'p-8',
        'mb-10'
      );
    });
    
    // Highlight city name
    const cityRegex = new RegExp(cityName, 'gi');
    container.innerHTML = container.innerHTML.replace(
      cityRegex, 
      `<span class="font-semibold ${accentColor}">${cityName}</span>`
    );
    
    // Add smooth reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe sections for animation
    const animatableElements = container.querySelectorAll('section, blockquote, h2, ul');
    animatableElements.forEach(el => {
      // Add base animation classes and initial state
      el.classList.add('opacity-0', 'transition-opacity', 'duration-700');
      observer.observe(el);
    });
    
  }, [articleContent, accentColor, bgColor, cityName]);
  
  return (
    <section className={`py-8 bg-white ${className}`}>
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .article-container h2::before {
          content: "";
          position: absolute;
          top: 0;
          left: -8px;
          height: 100%;
          width: 4px;
          background: linear-gradient(to bottom, #3b82f6, #10b981);
          border-radius: 4px;
        }
      `}</style>
      
      <div className="container-custom">
        {/* Article Header - Met Gala Worthy Styling */}
        <div className="mb-10 relative">
          <div className="flex items-center mb-6">
            <div className={`${bgColor} h-16 w-16 rounded-full flex items-center justify-center mr-4 text-white`}>
              {icon}
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${accentColor}`}>
              {service} in {cityName}
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-irrigation-blue to-irrigation-green mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            Expert solutions tailored for {cityName}'s unique landscape and climate
          </p>
        </div>
        
        {/* Article Highlight Box - Luxury Styling */}
        <div className={`${bgColor} bg-opacity-10 border-l-4 ${bgColor} rounded-lg p-8 mb-10 transform transition-all duration-300 hover:shadow-xl`}>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className={`${bgColor} rounded-full p-4 mb-4 md:mb-0 md:mr-6 text-white flex-shrink-0`}>
              {icon}
            </div>
            <div>
              <h4 className={`text-xl font-bold ${accentColor} mb-2`}>{service} Excellence in {cityName}</h4>
              <p className="text-gray-700 text-lg leading-relaxed">Our team specializes in addressing the unique challenges and requirements of {cityName} properties, ensuring exceptional results and complete customer satisfaction.</p>
            </div>
          </div>
        </div>
        
        {/* Styled Article Content with Compact Grid Layout */}
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300 mb-6 mx-auto max-w-3xl">
          <div 
            ref={articleRef}
            className="article-container prose prose-sm max-w-none" 
            dangerouslySetInnerHTML={{ __html: articleContent }} 
          />
        </div>
        
        {/* Key Features Section - Elegant Card Design */}
        <div className="my-12">
          <h3 className={`text-2xl font-bold mb-8 text-center ${accentColor}`}>
            Why Our {service} Services Stand Out in {cityName}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 hover:bg-white transition-colors rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className={`p-3 rounded-full ${accentColor.replace('text-', 'bg-')} bg-opacity-20 mr-4`}>
                  <LeafyGreen className={accentColor} size={24} />
                </span>
                <h4 className="text-xl font-semibold">Local Expertise</h4>
              </div>
              <p className="text-gray-700">Our technicians understand {cityName}'s unique soil conditions, climate patterns, and landscaping challenges.</p>
            </div>
            
            <div className="bg-gray-50 hover:bg-white transition-colors rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className={`p-3 rounded-full ${accentColor.replace('text-', 'bg-')} bg-opacity-20 mr-4`}>
                  <Clock className={accentColor} size={24} />
                </span>
                <h4 className="text-xl font-semibold">Timely Service</h4>
              </div>
              <p className="text-gray-700">Most services completed within 2-3 business days with minimal disruption to your property.</p>
            </div>
            
            <div className="bg-gray-50 hover:bg-white transition-colors rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className={`p-3 rounded-full ${accentColor.replace('text-', 'bg-')} bg-opacity-20 mr-4`}>
                  <Award className={accentColor} size={24} />
                </span>
                <h4 className="text-xl font-semibold">Premium Quality</h4>
              </div>
              <p className="text-gray-700">We use only professional-grade components from top manufacturers, backed by our comprehensive warranty.</p>
            </div>
          </div>
        </div>
        
        {/* Call to Action - Eye-Catching Design */}
        <div className={`mt-12 p-8 rounded-xl shadow-lg text-white bg-gradient-to-r from-${bgColor.replace('bg-', '')} to-irrigation-darkBlue transform hover:scale-[1.01] transition-all duration-300`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to transform your {cityName} property?</h3>
              <p className="mb-4 md:mb-0">Contact us today for a free consultation and estimate.</p>
            </div>
            <a href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md">
              Get Your Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
