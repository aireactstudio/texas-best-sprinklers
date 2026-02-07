'use client';

import React from 'react';
import { MapPin, Clock, Phone, Users, Droplets, Sun, Shield, CheckCircle, AlertTriangle, Navigation, Zap, Calendar, Star, ThumbsUp } from 'lucide-react';

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

  const seasonalSchedule = [
    { season: "Spring", task: "Start-Up & Tune", detail: "Check for freeze damage & adjust coverage." },
    { season: "Summer", task: "Heat Protection", detail: "Optimize schedules for peak temperatures." },
    { season: "Fall", task: "Leak Inspection", detail: "Reduce frequency & check for wastage." },
    { season: "Winter", task: "Winterization", detail: "Insulate pipes & protect backflow device." }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Local Expertise in {locationName}</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            We understand the specific irrigation and drainage needs of {locationName} properties.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Service Profile */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="p-8 flex-grow">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-irrigation-blue rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20 transform -rotate-3">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Your Local Experts</h3>
                  <p className="text-slate-500 font-medium">Serving {locationName} since 2008</p>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-6 mb-8">
                {/* Distance / Local */}
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Navigation className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {distanceFromOffice === 0 ? 'Locally Headquartered' : 'Fast Response Times'}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">
                      {distanceFromOffice === 0 
                        ? `We are based right here in ${locationName}, ensuring the fastest possible service.` 
                        : `Our service trucks are just ${distanceFromOffice} miles away in ${nearestOffice}, allowing for quick dispatch to ${locationName}.`}
                    </p>
                  </div>
                </div>

                {/* License / Trust */}
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Shield className="w-6 h-6 text-irrigation-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Licensed & Insured</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">
                      State Licensed Irrigator #LI22462. We adhere to all {locationName} city codes and water regulations.
                    </p>
                  </div>
                </div>

                {/* Emergency / Availability */}
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Here When You Need Us</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">
                      Standard Hours: Mon-Sat 7am-7pm. <br/>
                      <span className="font-medium text-amber-700">24/7 Emergency Support Available.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees - New Section to fill space */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6">
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-irrigation-blue" />
                  Our Guarantee
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">3-Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">Upfront Pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">Background Checked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">Uniformed Crew</span>
                  </div>
                </div>
              </div>

              {/* Service Process - New Section for Left Column */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6">
                 <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-500" />
                  Service Process
                </h4>
                <ol className="space-y-3 relative border-l border-slate-200 ml-1.5">
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-sky-500 rounded-full -left-1.5 mt-1 border-2 border-white"></div>
                    <p className="text-xs font-bold text-slate-900">1. Schedule Online or Call</p>
                    <p className="text-xs text-slate-500">Quick response & confirmation.</p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-sky-500 rounded-full -left-1.5 mt-1 border-2 border-white"></div>
                    <p className="text-xs font-bold text-slate-900">2. Expert Assessment</p>
                    <p className="text-xs text-slate-500">Thorough system check-up.</p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-sky-500 rounded-full -left-1.5 mt-1 border-2 border-white"></div>
                    <p className="text-xs font-bold text-slate-900">3. Quality Repair/Install</p>
                    <p className="text-xs text-slate-500">Using premium parts only.</p>
                  </li>
                </ol>
              </div>

              {/* Why Neighbors Choose Us */}
               <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-8">
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" />
                  Why {locationName} Chooses Us
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    200+ 5-Star Reviews
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Family Owned & Operated
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Digital Reporting (w/ Photos)
                  </li>
                </ul>
              </div>

            </div>

            {/* Contact Footer */}
            <div className="bg-slate-50 p-6 border-t border-slate-200">
               <a href="tel:8173047896" className="w-full flex items-center justify-center gap-3 bg-irrigation-blue hover:bg-blue-800 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Call {locationName} Team: (817) 304-7896</span>
                </a>
                <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                  Free On-Site Estimates • No Obligation
                </p>
            </div>
          </div>

          {/* Right Column: Strategy & Climate */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 transform rotate-2">
                  <Sun className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Tailored for {locationName}</h3>
                  <p className="text-slate-500 font-medium">Adapting to local soil & climate</p>
                </div>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed text-base">
                {localConditions.climate} {localConditions.soil} Our approach ensures your landscape thrives despite these conditions.
              </p>

              <div className="space-y-8">
                {/* Challenges Section */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    Local Challenges
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {localConditions.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 bg-orange-50/50 p-3 rounded-lg border border-orange-100/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions Section */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Our Solutions
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {localConditions.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 bg-green-50/50 p-3 rounded-lg border border-green-100/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Neighborhoods - Moved from Left Column */}
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Frequently serving neighborhoods near:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {landmarks.slice(0, 6).map((landmark, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200 hover:border-slate-300 transition-colors cursor-default">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Footer */}
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 border-t border-slate-200 mt-auto text-center">
              <p className="text-xs text-slate-500 font-medium flex items-center justify-center gap-2">
                <Droplets className="w-3 h-3 text-sky-500" />
                Customized irrigation plans for {locationName} residents
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
