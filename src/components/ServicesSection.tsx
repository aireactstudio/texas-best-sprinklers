
import React from 'react';
import Link from 'next/link';
import { Droplet, Leaf, Sprout } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  locationPrefix?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, locationPrefix = '' }) => {
  const fullLink = locationPrefix ? `/${locationPrefix}${link}` : link;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-16 w-16 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-6 text-irrigation-green">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-irrigation-blue">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        href={fullLink} 
        className="text-irrigation-green font-semibold hover:text-irrigation-darkGreen transition-colors duration-300 inline-flex items-center">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

interface ServicesSectionProps {
  cityName?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ cityName }) => {
  const services = [
    {
      icon: <Sprout size={32} />,
      title: "Sprinkler Installation",
      description: "Custom-designed sprinkler systems that ensure even water distribution and maximum coverage for your landscape.",
      link: "/services/sprinkler-installation",
    },
    {
      icon: <Droplet size={32} />,
      title: "Drip Irrigation",
      description: "Water-efficient drip systems that deliver moisture directly to plant roots, reducing waste and promoting healthy growth.",
      link: "/services/drip-irrigation",
    },
    {
      icon: <Leaf size={32} />,
      title: "Smart Controllers",
      description: "Weather-based smart controllers that automatically adjust watering schedules based on local conditions and seasonal changes.",
      link: "/services/smart-controllers",
    },
  ];

  // Location-specific text variations for SEO
  const locationTitle = cityName ? `Our ${cityName} Irrigation Services` : 'Our Irrigation Services';
  const locationDescription = cityName 
    ? `Comprehensive sprinkler, drainage, and lighting solutions for ${cityName} homes and businesses` 
    : 'Comprehensive sprinkler, drainage, and lighting solutions for your outdoor spaces';

  // The location prefix for the service links
  const locationPrefix = cityName ? cityName.toLowerCase().replace(' ', '-') : '';

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-2">{locationTitle}</h2>
        <p className="text-lg text-gray-600 mb-10">
          {locationDescription}
        </p>
        <div className="text-center mb-16">
          <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">
            Comprehensive Irrigation Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide expert irrigation services designed to conserve water while keeping your landscape lush and healthy all year round.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
