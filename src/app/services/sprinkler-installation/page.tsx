'use client';

import { Droplet } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreas from '@/components/ServiceAreas';
import CTA from '@/components/CTA';

export default function SprinklerInstallationPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    title: "Sprinkler System Installation",
    description: "Our expert team designs and installs custom irrigation systems tailored to your landscape's specific needs, ensuring optimal water coverage and efficiency.",
    icon: <Droplet size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Custom system design for your landscape",
      "Professional installation by certified technicians",
      "Water-efficient sprinkler heads and nozzles",
      "Smart controller options with weather sensors",
      "Zoning for different plant water needs",
      "Drip irrigation for garden beds and trees",
      "Comprehensive system walkthrough and training",
      "Seasonal maintenance programs to optimize performance"
    ]
  };

  return (
    <ServicePageLayout {...serviceProps}>
      {/* Content Sections */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Custom Irrigation Design
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Before installation begins, we create a detailed irrigation plan customized to your landscape. Our designs factor in plant types, soil conditions, sun exposure, and slope to ensure every area of your yard receives the right amount of water. We focus on water efficiency without compromising lawn and plant health.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Professional Installation
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our experienced technicians handle every aspect of your irrigation system installation, from trenching and pipe laying to head placement and controller programming. We carefully place components to maximize coverage while minimizing visual impact on your landscape.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Smart Technology Integration
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Modern sprinkler systems benefit from smart controllers that adjust watering schedules based on weather conditions. We can install Wi-Fi enabled controllers that connect to weather services, soil moisture sensors, and rain sensors to optimize water usage and allow remote management from your smartphone.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Drip Irrigation Options
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            For garden beds, trees, and container plants, we incorporate water-efficient drip irrigation systems that deliver moisture directly to plant roots. These systems minimize water waste through evaporation and runoff, while helping prevent leaf diseases by keeping foliage dry.
          </p>
        </div>
        
        {/* Installation Process */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Our Installation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Initial Assessment</h3>
              <p className="text-gray-800">
                We evaluate your landscape, soil conditions, and water source to understand your property's unique irrigation needs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Custom Design</h3>
              <p className="text-gray-800">
                Our designers create a detailed irrigation plan that ensures even water distribution and maximum efficiency.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Professional Installation</h3>
              <p className="text-gray-800">
                Our certified technicians install pipes, valves, heads, and controllers with minimal disruption to your landscape.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">System Demonstration</h3>
              <p className="text-gray-800">
                We provide a comprehensive walkthrough of your new system, including controller programming and maintenance tips.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FULL WIDTH SECTIONS - These will span the entire width below the sidebar */}
      
      {/* Areas Served - Full width section */}
      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-irrigation-darkGreen">
            Areas We Serve
          </h2>
          <ServiceAreas 
            serviceType="sprinkler-installation"
          />
        </div>
      </section>
      
      {/* CTA - Full width section */}
      <CTA 
        title="Ready to Enhance Your Landscape?"
        subtitle="Contact us today to schedule a free irrigation system consultation and quote."
        buttonText="Get Your Free Quote"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
