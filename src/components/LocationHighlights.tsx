import React from 'react';
import { getLocationData } from '@/data/locationData';
import { MapPin } from 'lucide-react';

interface LocationHighlightsProps {
  locationSlug: string;
  serviceName: string;
}

const LocationHighlights: React.FC<LocationHighlightsProps> = ({ locationSlug, serviceName }) => {
  const locationInfo = getLocationData(locationSlug);
  
  if (!locationInfo) {
    return null;
  }
  
  return (
    <div className="location-highlights py-12">
      {/* Location Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-darkBlue mb-4">
          Professional {serviceName} Services in {locationInfo.name}, Texas
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-4" />
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Serving {locationInfo.name} from our {locationInfo.nearestOffice} office, Texas Best Sprinklers provides expert {serviceName.toLowerCase()} solutions just {locationInfo.distanceFromOffice} miles away.
        </p>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center text-irrigation-darkBlue mb-8">
          Why Choose Texas Best Sprinklers in {locationInfo.name}?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h4 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Local Expertise</h4>
            <p className="text-gray-700">
              Deep understanding of {locationInfo.name}'s climate, terrain, and local regulations.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h4 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Quick Response</h4>
            <p className="text-gray-700">
              Just {locationInfo.distanceFromOffice} miles away for prompt service.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h4 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Community Focus</h4>
            <p className="text-gray-700">
              Proud to serve and enhance the {locationInfo.name} community with quality solutions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Location-Specific Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Landmarks */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <h4 className="text-xl font-semibold text-irrigation-darkGreen mb-4">
            Serving Popular {locationInfo.name} Landmarks
          </h4>
          
          <ul className="space-y-2">
            {locationInfo.landmarks.slice(0, 5).map((landmark, index) => (
              <li key={index} className="flex items-start">
                <MapPin className="h-5 w-5 text-irrigation-green mr-2 flex-shrink-0 mt-0.5" />
                <span>{landmark}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Neighborhoods */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <h4 className="text-xl font-semibold text-irrigation-darkGreen mb-4">
            Featured {locationInfo.name} Neighborhoods
          </h4>
          
          <ul className="space-y-2">
            {locationInfo.neighborhoods.slice(0, 5).map((neighborhood, index) => (
              <li key={index} className="flex items-start">
                <MapPin className="h-5 w-5 text-irrigation-green mr-2 flex-shrink-0 mt-0.5" />
                <span>{neighborhood}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Services Section Title */}
      <div className="text-center mt-16 mb-8">
        <h3 className="text-2xl font-bold text-irrigation-darkBlue">
          Our {serviceName} Services in {locationInfo.name}
        </h3>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-4" />
      </div>
    </div>
  );
};

export default LocationHighlights;
