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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Local Service Information */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Your Local {locationName} Irrigation Experts
            </h2>
            
            {/* Service Details */}
            <div className="space-y-8">
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Serving Your Area</h3>
                    <p className="text-gray-600">Professional service throughout {locationName}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{distanceFromOffice}</div>
                    <div className="text-sm text-gray-600">
                      {distanceFromOffice === 0 ? 'Main Office Location' : 'Miles from Our Office'}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600">Emergency Service</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Areas We Serve in {locationName}:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                        {landmark}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
                    <p className="text-gray-600">Ready to help with your irrigation needs</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">(817) 304-7896</div>
                      <div className="text-sm text-gray-600">Call for immediate service</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Mon-Fri: 7AM-7PM</div>
                      <div className="text-sm text-gray-600">Saturday: 8AM-5PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Free Estimates</div>
                      <div className="text-sm text-gray-600">No obligation consultations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local Conditions & Expertise */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why {locationName} Needs Specialized Irrigation
            </h2>

            <div className="space-y-8">
              {/* Climate Considerations */}
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Local Climate Expertise</h3>
                    <p className="text-gray-600">Understanding {locationName}'s unique conditions</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{localConditions.climate}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Local Challenges:</h4>
                    <div className="grid gap-2">
                      {localConditions.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                          {challenge}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Solutions */}
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Local Solutions</h3>
                    <p className="text-gray-600">Tailored for {locationName} properties</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{localConditions.soil}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">How We Help:</h4>
                    <div className="grid gap-2">
                      {localConditions.solutions.map((solution, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Commitment */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Our Commitment to {locationName}
                </h3>
                <p className="text-blue-100 mb-6">
                  We've been serving the {locationName} community for over 15 years, and we understand 
                  the unique irrigation challenges and opportunities in your area. Our local expertise 
                  ensures your system will thrive in North Texas conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
                    <div className="font-bold">Licensed</div>
                    <div className="text-sm text-blue-100">& Insured</div>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
                    <div className="font-bold">Local</div>
                    <div className="text-sm text-blue-100">Family Business</div>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
                    <div className="font-bold">Emergency</div>
                    <div className="text-sm text-blue-100">Service Available</div>
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
