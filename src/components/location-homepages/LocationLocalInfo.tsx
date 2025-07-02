'use client';

import React from 'react';
import { MapPin, Clock, Phone, Users, Droplets, Sun } from 'lucide-react';

interface LocationLocalInfoProps {
  locationName: string;
  locationSlug: string;
  landmarks: string[];
  nearestOffice: string;
  distanceFromOffice: number;
  serviceAreas: string[];
}

export default function LocationLocalInfo({
  locationName,
  landmarks,
  nearestOffice,
  distanceFromOffice,
  serviceAreas
}: LocationLocalInfoProps) {
  
  // Local climate and soil considerations for Texas
  const getLocalConditions = (location: string) => {
    const conditions = {
      climate: "North Texas experiences hot summers and mild winters with variable precipitation.",
      soil: "Clay-based soil common in the area requires specialized irrigation design.",
      challenges: [
        "Clay soil expansion and contraction",
        "Summer heat stress on lawns",
        "Irregular rainfall patterns",
        "Winter freeze protection needed"
      ],
      solutions: [
        "Deep root watering systems",
        "Smart controller technology",
        "Drought-resistant plantings",
        "Freeze-guard installation"
      ]
    };
    return conditions;
  };

  const localConditions = getLocalConditions(locationName);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">


        <div className="grid lg:grid-cols-2 gap-10">
          {/* Local Service Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Your Local {locationName} Irrigation Experts
            </h2>
            
            {/* Service Details */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Serving Your Area</h3>
                    <p className="text-gray-600">Professional service throughout {locationName}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <div className="text-lg font-bold text-green-600">{distanceFromOffice}</div>
                    <div className="text-xs text-gray-600">
                      {distanceFromOffice === 0 ? 'Main Office Location' : 'Miles from Our Office'}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">24/7</div>
                    <div className="text-xs text-gray-600">Emergency Service</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Key Areas We Serve:</h4>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                        {landmark}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Get In Touch</h3>
                    <p className="text-gray-600">Ready to help with your irrigation needs</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-100 text-xs">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="font-medium text-gray-900">Hours:</span>
                    </div>
                    <div className="text-gray-700">Mon-Fri: 7am-7pm | Sat: 8am-5pm | Sun: Closed</div>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-100 text-xs">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-500" />
                      <span className="font-medium text-gray-900">Phone:</span>
                    </div>
                    <div className="text-gray-700">(817) 304-7896</div>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-100 text-xs">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="font-medium text-gray-900">Estimates:</span>
                    </div>
                    <div className="text-gray-700">Free, no-obligation consultations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local Conditions & Expertise */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Why {locationName} Needs Specialized Irrigation
            </h2>

            <div className="space-y-4">
              {/* Climate Considerations */}
              <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Local Climate Expertise</h3>
                    <p className="text-gray-600">Understanding {locationName}'s unique conditions</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{localConditions.climate}</p>

                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1.5 text-sm">Local Challenges:</h4>
                    <ul className="list-disc pl-4 space-y-0.5 text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2">
                      {localConditions.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Solutions */}
              <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Our Local Solutions</h3>
                    <p className="text-gray-600">Tailored for {locationName} properties</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{localConditions.soil}</p>

                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1.5 text-sm">How We Help:</h4>
                    <ul className="list-disc pl-4 space-y-0.5 text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2">
                      {localConditions.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
