'use client';

import React, { useEffect, useRef } from 'react';
import { CloudRain, CheckCircle, Award, Clock, MapPin, Droplet, Settings, Zap, Leaf } from 'lucide-react';
import Image from 'next/image';

interface StyledArticleContentProps {
  htmlContent: string;
  serviceName: string;
  cityName: string;
}

/**
 * A highly styled component to display article content with elegant formatting,
 * animations, and visual enhancements.
 */
export default function StyledArticleContent({ 
  htmlContent, 
  serviceName,
  cityName 
}: StyledArticleContentProps) {
  const articleRef = useRef<HTMLDivElement>(null);
  
  // Apply scrolling animations and styling to content after render
  useEffect(() => {
    if (!articleRef.current) return;
    
    // Apply styling to headings, lists, and other elements
    const container = articleRef.current;
    
    // Style headings with decorative elements
    const headings = container.querySelectorAll('h2, h3, h4');
    headings.forEach(heading => {
      heading.classList.add(
        'relative', 
        'pl-4', 
        'border-l-4', 
        'border-irrigation-blue',
        'my-6',
        'pb-2',
        'text-irrigation-darkBlue',
        'font-bold'
      );
      
      if (heading.tagName === 'H2') {
        heading.classList.add('text-2xl', 'md:text-3xl', 'after:content-[""]');
        heading.setAttribute('style', 'margin-bottom: 1.5rem; position: relative;');
        
        // Add decorative line
        const line = document.createElement('div');
        line.classList.add('absolute', 'bottom-0', 'left-0', 'w-24', 'h-1', 'bg-irrigation-green');
        heading.appendChild(line);
      } else if (heading.tagName === 'H3') {
        heading.classList.add('text-xl', 'md:text-2xl');
      }
    });
    
    // Style paragraphs with better spacing and size for more compact display
    const paragraphs = container.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
      paragraph.classList.add(
        'text-gray-700',
        'leading-relaxed',
        'mb-4',
        'text-base'
      );
    });
    
    // Style lists with custom bullets and spacing
    const lists = container.querySelectorAll('ul');
    lists.forEach(list => {
      list.classList.add(
        'space-y-2',
        'my-4'
      );
      
      const items = list.querySelectorAll('li');
      items.forEach(item => {
        // Check if this is a clean list item that shouldn't have an icon added
        // Or if it already has an icon, don't add another one
        if (item.classList.contains('clean-list-item') || 
            item.querySelector('svg') || 
            item.innerHTML.includes('fa-check-circle')) {
          // Just improve the existing styling without adding icons
          item.classList.add('flex', 'items-start', 'text-gray-700');
        } else {
          // Create a styled wrapper
          const wrapper = document.createElement('div');
          wrapper.classList.add('flex', 'items-start');
          
          // Create custom bullet/icon
          const icon = document.createElement('span');
          icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-irrigation-green mr-3 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
          
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
        }
      });
    });
    
    // Set service-specific styling first so we can use these colors throughout
    let primaryColor = 'text-irrigation-blue';
    let accentColor = 'text-irrigation-green';
    let bgAccent = 'bg-irrigation-lightBlue';
    
    // Set service-specific styling
    if (serviceName.toLowerCase().includes('drainage')) {
      primaryColor = 'text-irrigation-darkBlue';
      accentColor = 'text-blue-500';
      bgAccent = 'bg-blue-50';
    } else if (serviceName.toLowerCase().includes('lighting')) {
      primaryColor = 'text-amber-600';
      accentColor = 'text-amber-400';
      bgAccent = 'bg-amber-50';
    } else if (serviceName.toLowerCase().includes('installation')) {
      primaryColor = 'text-irrigation-blue';
      accentColor = 'text-irrigation-darkGreen';
      bgAccent = 'bg-blue-50';
    } else if (serviceName.toLowerCase().includes('maintenance')) {
      primaryColor = 'text-irrigation-darkGreen';
      accentColor = 'text-green-500';
      bgAccent = 'bg-green-50';
    }
    
    // Apply grid layout styling
    const gridContainers = container.querySelectorAll('.grid-container');
    gridContainers.forEach(grid => {
      grid.classList.add(
        'grid',
        'gap-4',
        'my-6'
      );
      
      // Apply proper grid column classes based on the container class
      if (grid.classList.contains('grid-cols-2')) {
        grid.classList.add('grid-cols-1', 'md:grid-cols-2');
      } else if (grid.classList.contains('grid-cols-3')) {
        grid.classList.add('grid-cols-1', 'md:grid-cols-3');
      }
    });
    
    // Style grid boxes
    const gridBoxes = container.querySelectorAll('.grid-box');
    gridBoxes.forEach(box => {
      box.classList.add(
        'bg-white',
        'rounded-lg',
        'shadow-sm',
        'border',
        'border-gray-200',
        'p-4',
        'transition-all',
        'duration-300',
        'hover:shadow-md'
      );
      
      // Style headings inside boxes
      const boxHeading = box.querySelector('h3');
      if (boxHeading) {
        boxHeading.classList.add(
          'text-lg',
          'font-semibold',
          'mb-2',
          accentColor
        );
      }
    });
    
    // Style checkbox lists
    const checkboxLists = container.querySelectorAll('.checkbox-list');
    checkboxLists.forEach(list => {
      list.classList.add(
        'mt-3',
        'space-y-2'
      );
      
      const items = list.querySelectorAll('li');
      items.forEach(item => {
        item.classList.add(
          'flex',
          'items-start',
          'text-gray-700'
        );
        
        const checkbox = item.querySelector('.checkbox');
        if (checkbox) {
          checkbox.classList.add(
            'inline-flex',
            'items-center',
            'justify-center',
            'h-5',
            'w-5',
            'text-white',
            'bg-irrigation-green',
            'rounded-full',
            'mr-2',
            'text-xs',
            'font-bold',
            'flex-shrink-0',
            'mt-0.5'
          );
        }
      });
    });
    
    // Style testimonial box
    const testimonialBox = container.querySelector('.testimonial-box');
    if (testimonialBox) {
      testimonialBox.classList.add(
        'bg-gray-50',
        'rounded-lg',
        'p-6',
        'border-l-4',
        'border-irrigation-blue',
        'my-8',
        'italic',
        'relative'
      );
      
      // Add quote marks
      const quoteText = testimonialBox.querySelector('.quote-text');
      if (quoteText) {
        quoteText.classList.add(
          'text-gray-700',
          'text-lg',
          'mb-4'
        );
      }
    }
    
    // Add basic styling to any remaining sections
    const sections = container.querySelectorAll('section:not(.grid-container)');
    sections.forEach(section => {
      section.classList.add(
        'my-6'
      );
    });
    
    // Enhance strong tags for emphasis
    const strongTags = container.querySelectorAll('strong');
    strongTags.forEach(tag => {
      tag.classList.add(
        'text-irrigation-darkBlue',
        'font-semibold'
      );
    });
    
    // Enhance blockquotes for testimonials
    const quotes = container.querySelectorAll('blockquote');
    quotes.forEach(quote => {
      quote.classList.add(
        'bg-irrigation-gray',
        'p-6',
        'rounded-lg',
        'border-l-4',
        'border-irrigation-blue',
        'relative',
        'my-8'
      );
      
      // Add decorative quote marks
      const quoteDecoration = document.createElement('div');
      quoteDecoration.classList.add(
        'absolute',
        '-top-5',
        '-left-2',
        'text-irrigation-blue',
        'opacity-20',
        'text-6xl',
        'font-serif'
      );
      quoteDecoration.innerHTML = '❝';
      quote.insertBefore(quoteDecoration, quote.firstChild);
    });
    
    // We already set these colors at the top of the file
    // Use them here for the remaining elements
    
    // Apply service colors to appropriate elements
    const serviceHighlights = container.querySelectorAll('h2, h3, .highlight, .feature-title');
    serviceHighlights.forEach(el => {
      const classList = el.className.split(' ');
      const newClassList = classList.filter(cls => !cls.startsWith('text-irrigation-') && !cls.startsWith('text-blue-') && !cls.startsWith('text-amber-') && !cls.startsWith('text-green-'));
      el.className = [...newClassList, primaryColor].join(' ');
    });
    
    // Apply accent colors to icons and highlights
    const accentElements = container.querySelectorAll('svg, .accent, .icon');
    accentElements.forEach(el => {
      // First remove any existing color classes
      if (el instanceof SVGElement) {
        // Handle SVG elements which have className as SVGAnimatedString
        const classString = el.getAttribute('class') || '';
        const classNames = classString.split(' ');
        const filteredClasses = classNames.filter(cls => 
          !cls.startsWith('text-irrigation-') && 
          !cls.startsWith('text-blue-') && 
          !cls.startsWith('text-amber-') && 
          !cls.startsWith('text-green-')
        );
        
        // Add the accent color
        filteredClasses.push(accentColor);
        el.setAttribute('class', filteredClasses.join(' '));
      } else {
        // Handle regular HTML elements with classList
        Array.from(el.classList).forEach(cls => {
          if (cls.startsWith('text-irrigation-') || 
              cls.startsWith('text-blue-') || 
              cls.startsWith('text-amber-') || 
              cls.startsWith('text-green-')) {
            el.classList.remove(cls);
          }
        });
        
        // Add the accent color
        el.classList.add(accentColor);
      }
    });
    
    // Add local city name emphasis
    container.innerHTML = container.innerHTML.replace(
      new RegExp(cityName, 'g'), 
      `<span class="font-semibold ${primaryColor}">${cityName}</span>`
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
    
  }, [htmlContent, serviceName, cityName]);
  
  // Generate the highlight box for key benefit
  const renderHighlightBox = () => {
    let icon = <Droplet className="h-10 w-10 text-white" />;
    let title = "Professional Service";
    let bgColor = "bg-irrigation-blue";
    
    // Set service-specific styling
    if (serviceName.toLowerCase().includes('drainage')) {
      icon = <CloudRain className="h-10 w-10 text-white" />;
      title = "Drainage Experts";
      bgColor = "bg-irrigation-darkBlue";
    } else if (serviceName.toLowerCase().includes('lighting')) {
      icon = <Zap className="h-10 w-10 text-white" />;
      title = "Lighting Design";
      bgColor = "bg-amber-600";
    } else if (serviceName.toLowerCase().includes('installation')) {
      icon = <Settings className="h-10 w-10 text-white" />;
      title = "Expert Installation";
      bgColor = "bg-irrigation-blue";
    } else if (serviceName.toLowerCase().includes('maintenance')) {
      icon = <Leaf className="h-10 w-10 text-white" />;
      title = "Maintenance Excellence";
      bgColor = "bg-irrigation-darkGreen";
    }
    
    return (
      <div className={`${bgColor} text-white rounded-lg p-8 shadow-lg mb-10 transform hover:scale-102 transition-transform duration-300`}>
        <div className="flex items-center mb-4">
          <div className="h-16 w-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold">{title} in {cityName}</h3>
        </div>
        <p className="text-white text-lg leading-relaxed">
          Our team of specialists provides expert {serviceName.toLowerCase()} services tailored specifically to {cityName}'s unique conditions, ensuring optimal results for your property.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-white" />
            <span>Local expertise</span>
          </div>
          <div className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-white" />
            <span>Licensed professionals</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-white" />
            <span>Fast response</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-white" />
            <span>{cityName} focused</span>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="styled-article-container">
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .styled-article-container h2::before {
          content: "";
          position: absolute;
          top: 0;
          left: -8px;
          height: 100%;
          width: 4px;
          background: linear-gradient(to bottom, #3b82f6, #10b981);
          border-radius: 4px;
        }
        
        .styled-article-container ul li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
      `}</style>
      
      {renderHighlightBox()}
      
      <div 
        ref={articleRef} 
        className="article-content" 
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </div>
  );
}
