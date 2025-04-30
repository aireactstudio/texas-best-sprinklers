
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Transform Your Landscape with Expert Irrigation",
  subtitle = "Water-efficient solutions designed for your property's unique needs",
  image = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-irrigation-blue bg-opacity-70"></div>
      </div>

      {/* Animated Water Drops */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="water-animation absolute"
          style={{
            '--i': i,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            opacity: 0.7,
          } as React.CSSProperties}
        />
      ))}

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white pt-20">
        <div className="inline-flex items-center bg-irrigation-green bg-opacity-90 px-4 py-2 rounded-full mb-6 animate-float">
          <Droplet className="h-5 w-5 mr-2 text-white" />
          <span className="font-medium">Professional Irrigation Services</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link 
            to="/contact" 
            className="btn-primary min-w-[200px] text-lg"
          >
            Get a Free Quote
          </Link>
          <Link 
            to="/services" 
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
