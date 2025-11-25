"use client";

import Link from 'next/link';
import { CloudRain } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function FrenchDrainsPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.DRAINAGE,
    title: "French Drains",
    description: "Our professional French drain installation services provide effective solutions for water management issues, protecting your property from water damage and standing water.",
    icon: <CloudRain size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Property assessment and custom design",
      "High-quality gravel and fabric materials",
      "Professional-grade drainage pipes",
      "Proper slope and water flow engineering",
      "Minimal landscape disruption",
      "Effective water redirection",
      "Long-lasting installation"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            What Is a French Drain?
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            A French drain is a subsurface drainage system that collects and redirects excess groundwater away from problem areas. It consists of a trench filled with gravel or rock that contains a perforated pipe. The system works by collecting water through the gravel and pipe perforations, then carrying it away from your home or problem areas to a suitable discharge point, preventing water damage and soil erosion.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Expert Installation Process
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our French drain installation begins with a thorough assessment of your property's water flow patterns and soil conditions. We then create a custom design that addresses your specific drainage issues. Our installation team excavates a properly sloped trench, installs geotextile fabric, lays high-quality perforated pipe, surrounds it with clean drainage gravel, and carefully restores your landscape for a seamless finish.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Quality Materials and Construction
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We use only professional-grade materials in our French drain systems, including durable perforated PVC pipe, premium drainage gravel, and high-quality filter fabric that prevents soil infiltration while allowing water to pass through. Our attention to detail during installation—including proper pipe slopes, secure connections, and strategic discharge points—ensures a system that performs effectively for years to come.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Integration with Complete Drainage Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            French drains often work best as part of a comprehensive drainage system. We can integrate your French drain with other drainage solutions such as surface drains, channel drains, or dry wells to create a complete water management system for your property. Our experts will recommend the optimal combination of drainage solutions based on your specific needs and site conditions.
            {" "}
            <Link href="/services/drainage-solutions" className="text-irrigation-darkGreen hover:text-irrigation-darkBlue underline-offset-2 hover:underline">
              Learn more about our full drainage correction services.
            </Link>
          </p>
        </div>
        
        {/* Signs You Need a French Drain */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Signs Your Property Needs a French Drain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Standing Water</h3>
              <p className="text-gray-800">
                Persistent puddles or soggy areas in your yard that don't dry out within 24 hours after rain indicates poor drainage that a French drain can resolve.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Basement or Foundation Issues</h3>
              <p className="text-gray-800">
                Water seeping into your basement or visible water damage along foundation walls often signals a need for a French drain system around the perimeter.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Eroding Landscape</h3>
              <p className="text-gray-800">
                If water runoff is causing soil erosion, washing away mulch, or damaging plants, a French drain can capture and redirect this destructive water flow.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Sloped Property Issues</h3>
              <p className="text-gray-800">
                Properties on slopes or at the bottom of hills often experience water runoff problems that French drains are specifically designed to address.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom sections */}
      <div className="mt-20">
        <ServiceAreaLocator
          title="Our Service Areas"
          subtitle="Texas Best Sprinklers provides expert drainage solutions throughout the Fort Worth metroplex"
        />
      </div>
      
      <div className="mt-12 mb-20">
        <CTA 
          title="Solve Your Drainage Problems Today" 
          subtitle="Contact Texas Best Sprinklers now for a consultation on how our French drain solutions can protect your property from water damage."
        />
      </div>
    </ServicePageLayout>
  );
}
