'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  url: string;
}

interface AreasServedProps {
  serviceName: string;
  serviceSlug: string;
  title?: string;
  subtitle?: string;
}

const AreasServed: React.FC<AreasServedProps> = ({ 
  serviceName, 
  serviceSlug,
  title = "Areas We Serve",
  subtitle = "Click on a location for specific information in your area."
}) => {
  // List of locations we serve with slugs for URLs
  const locations: Location[] = [
    {
      id: 'fort-worth',
      name: 'Fort Worth',
      url: `/services/${serviceSlug}/fort-worth-${serviceSlug}`
    },
    {
      id: 'arlington',
      name: 'Arlington',
      url: `/services/${serviceSlug}/arlington-${serviceSlug}`
    },
    {
      id: 'keller',
      name: 'Keller',
      url: `/services/${serviceSlug}/keller-${serviceSlug}`
    },
    {
      id: 'southlake',
      name: 'Southlake',
      url: `/services/${serviceSlug}/southlake-${serviceSlug}`
    },
    {
      id: 'colleyville',
      name: 'Colleyville',
      url: `/services/${serviceSlug}/colleyville-${serviceSlug}`
    },
    {
      id: 'grapevine',
      name: 'Grapevine',
      url: `/services/${serviceSlug}/grapevine-${serviceSlug}`
    }
  ];

  return (
    <section className="py-16 bg-irrigation-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-irrigation-darkBlue mb-4">{title}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link 
              href={location.url} 
              key={location.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex items-center group"
            >
              <div className="h-12 w-12 rounded-full bg-irrigation-blue flex items-center justify-center flex-shrink-0 group-hover:bg-irrigation-darkBlue transition-colors">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-irrigation-darkBlue">{location.name}</h3>
                <p className="text-gray-600">{serviceName} Services</p>
              </div>
              <div className="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-irrigation-green group-hover:text-irrigation-darkGreen transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Don't see your area listed? We likely still serve your location! 
            <Link href="/contact" className="text-irrigation-blue hover:text-irrigation-darkBlue ml-1 font-medium">
              Contact us for service availability.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;
