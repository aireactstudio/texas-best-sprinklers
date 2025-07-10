'use client';

import { GitFork } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function SprinklerSystemReroutesPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.IRRIGATION_REPAIR,
    title: "Sprinkler System Reroutes",
    description: "Our sprinkler system rerouting services help you adapt your irrigation system to landscape changes, construction projects, or system improvements for better efficiency.",
    icon: <GitFork size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Full system redesign capability",
      "Pipe rerouting for landscape changes",
      "Zone reconfiguration",
      "Line relocation for construction",
      "System expansion & upgrades",
      "Minimal disruption to existing landscape",
      "Improved water distribution"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Adapting Your System to Landscape Changes
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            As your landscape evolves, your irrigation system needs to adapt. Our sprinkler system rerouting service helps you accommodate new landscape features, hardscaping projects, home additions, or other changes that affect your existing irrigation layout. We carefully plan and execute line relocations that maintain or improve your system's efficiency while working around your new landscape features.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Efficiency Improvements Through Rerouting
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Many older irrigation systems have inefficient pipe layouts that waste water and reduce pressure. Our rerouting services can optimize your system's hydraulic design, reducing pipe friction, eliminating unnecessary fittings, and creating more direct routes for water flow. These improvements can lead to better pressure, more even water distribution, and reduced energy consumption.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Minimal Landscape Disruption
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our experienced technicians use specialized equipment and techniques to minimize disruption to your existing landscape when rerouting irrigation lines. In many cases, we can use trenchless methods that preserve your lawn and landscape while still allowing us to install new pipes exactly where they're needed. When excavation is necessary, we take great care to preserve and properly restore the affected areas.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            System Upgrades During Rerouting
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            A system reroute presents the perfect opportunity to upgrade outdated components. While reworking your pipe layout, we can integrate modern, water-saving equipment such as pressure-regulating valves, high-efficiency nozzles, smart controllers, and rain sensors. These enhancements improve your system's performance and water conservation capabilities.
          </p>
        </div>
        
        {/* Common Reasons for Rerouting */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Common Reasons for Sprinkler System Rerouting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Home Additions</h3>
              <p className="text-gray-800">
                When adding on to your home, existing sprinkler lines may need to be relocated to accommodate the new structure while maintaining coverage in the remaining landscape.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">New Landscaping Features</h3>
              <p className="text-gray-800">
                Adding gardens, trees, patios, or walkways often requires adjusting your irrigation system to work harmoniously with the new features.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Recurring Leaks</h3>
              <p className="text-gray-800">
                If certain sections of your system have a history of frequent leaks, rerouting those lines with better materials and installation practices can solve the problem permanently.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Improving Water Efficiency</h3>
              <p className="text-gray-800">
                Reconfiguring zones and pipes to create more uniform pressure and better matched precipitation rates can dramatically improve your system's water efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom sections */}
      <div className="mt-20">
        <ServiceAreaLocator
          title="Our Service Areas"
          subtitle="Texas Best Sprinklers provides expert sprinkler rerouting services throughout the Fort Worth metroplex"
        />
      </div>
      
      <div className="mt-12 mb-20">
        <CTA 
          title="Need to Reroute Your Sprinkler System?" 
          description="Contact our team today for a consultation on how we can adapt your irrigation system to your changing landscape needs."
        />
      </div>
    </ServicePageLayout>
  );
}
