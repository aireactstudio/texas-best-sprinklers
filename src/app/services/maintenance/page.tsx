'use client';

import { Settings } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreas from '@/components/ServiceAreas';
import CTA from '@/components/CTA';

export default function MaintenancePage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.MAINTENANCE,
    title: "Irrigation System Maintenance",
    description: "Our proactive maintenance services extend the life of your irrigation system, optimize water efficiency, and prevent costly breakdowns through regular inspections and seasonal care.",
    icon: <Settings size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2176&q=80",
    features: [
      "Seasonal system activation and winterization",
      "Comprehensive multi-point inspections",
      "Water efficiency audits and adjustments",
      "Sprinkler head cleaning and adjustment",
      "Preventative maintenance programs",
      "Controller programming optimization",
      "Backflow testing and certification"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Content Sections */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Seasonal Services
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We provide essential seasonal services including spring system activation and fall winterization to protect your irrigation investment. Our winterization process uses compressed air to remove all water from your system, preventing freeze damage during cold weather.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Preventative Maintenance Programs
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our maintenance programs provide scheduled care for your irrigation system to prevent problems before they occur. Programs include regular inspections, minor repairs, adjustment of sprinkler heads, system programming updates, and water efficiency monitoring.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Water Efficiency Audits
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our comprehensive water efficiency audits evaluate your entire irrigation system's performance. We measure distribution uniformity, identify water waste, and make precise adjustments to ensure your landscape receives the right amount of water without excess consumption.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Backflow Testing and Certification
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We provide certified backflow testing services to meet local requirements and protect your water supply. Our licensed technicians can perform annual backflow prevention device tests, provide necessary documentation for local authorities, and make repairs when needed.
          </p>
        </div>
        
        {/* Benefits of Regular Maintenance */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Benefits of Regular Maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Extended System Life</h3>
              <p className="text-gray-800">
                Regular maintenance prevents premature wear and extends the life of your irrigation system components by years.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Water Conservation</h3>
              <p className="text-gray-800">
                Properly maintained systems use up to 30% less water than neglected systems, reducing your water bills and environmental impact.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Healthier Landscape</h3>
              <p className="text-gray-800">
                Even water distribution ensures your plants, lawn, and trees receive the right amount of moisture for optimal growth.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Problem Prevention</h3>
              <p className="text-gray-800">
                Identifying and addressing small issues before they become major problems saves you time and money on emergency repairs.
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
            serviceType={ServiceType.MAINTENANCE}
          />
        </div>
      </section>
      
      {/* CTA - Full width section */}
      <CTA 
        title="Ready to Keep Your Irrigation System Running at Peak Efficiency?"
        subtitle="Contact us today to schedule a maintenance service or enroll in one of our care programs."
        buttonText="Schedule Maintenance"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
