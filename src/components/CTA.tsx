
import React from 'react';
import Link from 'next/link';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  locationName?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  buttonText = "Get a Free Quote",
  buttonLink = "/contact",
  variant = 'primary',
  className = '',
  locationName,
}) => {
  // Location-specific content for SEO
  const defaultTitle = locationName 
    ? `Ready to Transform Your ${locationName} Landscape?` 
    : "Ready to Transform Your Landscape?";
  
  const defaultSubtitle = locationName 
    ? `Let our ${locationName} irrigation experts create a water-efficient system that brings your outdoor space to life.` 
    : "Let our irrigation experts create a water-efficient system that brings your outdoor space to life.";
  
  // Use provided values or defaults
  const ctaTitle = title || defaultTitle;
  const ctaSubtitle = subtitle || defaultSubtitle;
  // Using darker backgrounds for better contrast with white text
  const bgClass = variant === 'primary' 
    ? 'bg-irrigation-darkBlue text-white' 
    : 'bg-irrigation-darkGreen text-white';
  
  // Ensuring buttons have sufficient contrast
  const btnClass = variant === 'primary' 
    ? 'bg-irrigation-darkGreen hover:bg-black' 
    : 'bg-irrigation-darkBlue hover:bg-black';

  return (
    <section className={`py-16 ${bgClass} ${className}`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaTitle}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">{ctaSubtitle}</p>
        <Link 
          href={buttonLink} 
          className={`${btnClass} text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 text-lg inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTA;
