
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "Ready to Transform Your Landscape?",
  subtitle = "Let our irrigation experts create a water-efficient system that brings your outdoor space to life.",
  buttonText = "Get a Free Quote",
  buttonLink = "/contact",
  variant = 'primary',
  className = '',
}) => {
  const bgClass = variant === 'primary' 
    ? 'bg-irrigation-blue text-white' 
    : 'bg-irrigation-green text-white';
  
  const btnClass = variant === 'primary' 
    ? 'bg-irrigation-green hover:bg-irrigation-darkGreen' 
    : 'bg-irrigation-blue hover:bg-opacity-90';

  return (
    <section className={`py-16 ${bgClass} ${className}`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">{title}</h2>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link 
          to={buttonLink} 
          className={`${btnClass} text-white font-semibold py-3 px-8 rounded-md text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-block`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTA;
