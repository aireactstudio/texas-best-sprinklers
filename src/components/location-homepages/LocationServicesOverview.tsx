'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Droplets, Lightbulb, Settings, Zap } from 'lucide-react';

interface LocationServicesOverviewProps {
  locationName: string;
  locationSlug: string;
}

export default function LocationServicesOverview({ locationName, locationSlug }: LocationServicesOverviewProps) {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Sprinkler Installation',
      description: `Professional sprinkler system installation tailored to ${locationName}'s unique soil and climate conditions.`,
      features: ['Custom Design', 'Water-Efficient Systems', 'Smart Controllers'],
      link: '/services/sprinkler-installation',
      localLink: `/services/sprinkler-installation/${locationSlug}`
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Irrigation Repair',
      description: `Expert repair services for all irrigation issues in ${locationName}. Fast response times guaranteed.`,
      features: ['Emergency Repairs', 'Leak Detection', 'Valve Replacement'],
      link: '/services/irrigation-repair',
      localLink: `/services/irrigation-repair/${locationSlug}`
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'System Maintenance',
      description: `Keep your irrigation system running efficiently with our comprehensive maintenance programs in ${locationName}.`,
      features: ['Seasonal Checkups', 'Winterization', 'Spring Startup'],
      link: '/services/maintenance',
      localLink: `/services/maintenance/${locationSlug}`
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Outdoor Lighting',
      description: `Beautiful landscape lighting solutions to enhance your ${locationName} property's curb appeal and security.`,
      features: ['LED Technology', 'Smart Controls', 'Energy Efficient'],
      link: '/services/lighting',
      localLink: `/services/lighting/${locationSlug}`
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Drainage Solutions',
      description: `Protect your ${locationName} property from water damage with our comprehensive drainage solutions.`,
      features: ['French Drains', 'Surface Drainage', 'Grading Services'],
      link: '/services/drainage-solutions',
      localLink: `/services/drainage-solutions/${locationSlug}`
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Irrigation & Landscape Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From sprinkler installation to landscape lighting, we provide comprehensive solutions 
            for all your outdoor water and lighting needs in {locationName} and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Links */}
                <div className="flex flex-col gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-between group-hover:border-green-600 group-hover:text-green-600"
                    onClick={() => window.location.href = service.link}
                  >
                    {service.title} in {locationName}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why {locationName} Residents Choose Texas Best Sprinklers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { number: '15+', label: 'Years Experience' },
                  { number: '500+', label: 'Happy Customers' },
                  { number: '24/7', label: 'Emergency Service' },
                  { number: '100%', label: 'Satisfaction Guaranteed' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                    <div className="text-green-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
                <p className="mb-6 text-green-100">
                  Get your free estimate today and see why we're {locationName}'s 
                  trusted irrigation experts.
                </p>
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
