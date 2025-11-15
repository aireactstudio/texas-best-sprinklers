'use client';

import { Lightbulb } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function LandscapeLightingRepairPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.OUTDOOR_LIGHTING,
    title: "Landscape Lighting Repair and Maintenance",
    description: "Our landscape lighting repair and maintenance services keep your outdoor lighting system performing beautifully year-round, with expert diagnostics and quality repairs.",
    icon: <Lightbulb size={32} className="text-white" />,
    image: "/assets/images/optimized/outdoor_lighting_2.webp",
    features: [
      "Complete system diagnostics",
      "Fixture repair and replacement",
      "Transformer and wiring repairs",
      "LED upgrades",
      "System adjustments and realignment",
      "Seasonal maintenance programs",
      "Emergency repair services"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Expert Lighting System Diagnostics
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            When your landscape lighting system isn't performing properly, our expert technicians provide thorough diagnostics to identify the exact cause of the problem. We systematically check transformers, wiring connections, individual fixtures, timers, and sensors to pinpoint issues ranging from simple bulb replacements to more complex electrical problems. This comprehensive approach ensures we address the root cause rather than just treating symptoms.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Quality Repairs and Replacements
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our repair services include fixing or replacing damaged fixtures, correcting wiring issues, repairing or upgrading transformers, and addressing timer or photocell malfunctions. We use only high-quality replacement parts compatible with your system to ensure long-term performance. For older systems with discontinued components, we can recommend suitable modern replacements that maintain or enhance your lighting design's aesthetic.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            LED Conversion and Upgrades
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            If you're experiencing frequent bulb failures or high energy costs, upgrading to modern LED technology can provide significant benefits. Our LED conversion services replace outdated halogen or incandescent lamps with energy-efficient LED alternatives that provide better illumination, longer life, and dramatically reduced energy consumption. These upgrades often pay for themselves through energy savings while improving system reliability.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Preventative Maintenance Programs
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Regular maintenance prevents small issues from becoming major problems. Our landscape lighting maintenance programs include scheduled visits to clean fixtures, trim back encroaching vegetation, adjust lighting angles, replace worn components, check electrical connections, and verify timer settings. These proactive services keep your lighting system looking beautiful and functioning properly year-round while extending its operational life.
          </p>
        </div>
        
        {/* Common Lighting System Issues */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Common Landscape Lighting Issues We Resolve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Dim or Flickering Lights</h3>
              <p className="text-gray-800">
                Often caused by loose connections, voltage issues, or aging components, we diagnose and fix the specific cause for consistent, bright illumination.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Non-Working Fixtures</h3>
              <p className="text-gray-800">
                We determine whether the problem lies with the bulb, fixture, wiring, or power supply, then implement the appropriate repair to restore functionality.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Timer and Control Problems</h3>
              <p className="text-gray-800">
                From basic timer resets to complete smart control system troubleshooting, we ensure your lights operate on the schedule you want, automatically.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Weather-Damaged Components</h3>
              <p className="text-gray-800">
                Texas weather can take a toll on outdoor fixtures. We repair or replace components damaged by storms, heat, or age with more durable alternatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom sections */}
      <div className="mt-20">
        <ServiceAreaLocator
          title="Our Service Areas"
          subtitle="Texas Best Sprinklers provides expert lighting repair services throughout the Fort Worth metroplex"
        />
      </div>
      
      <div className="mt-12 mb-20">
        <CTA 
          title="Restore Your Landscape Lighting" 
          subtitle="Contact Texas Best Sprinklers today to schedule lighting system repairs or establish a maintenance program for your outdoor lighting."
        />
      </div>
    </ServicePageLayout>
  );
}
