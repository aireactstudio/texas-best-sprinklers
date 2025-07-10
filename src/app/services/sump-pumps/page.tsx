'use client';

import { Waves } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function SumpPumpsPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.DRAINAGE,
    title: "Sump Pumps",
    description: "Our professional sump pump installation and maintenance services provide reliable basement and crawlspace flood protection for your home.",
    icon: <Waves size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Expert system design and installation",
      "Quality sump pump equipment",
      "Battery backup systems",
      "Proper basin and discharge setup",
      "Smart monitoring options",
      "Maintenance and inspections",
      "Emergency service available"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Basement Flood Protection
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Sump pump systems provide essential protection against basement and crawlspace flooding by automatically detecting and removing excess water before it can cause damage. Our professional sump pump installations include properly sized collection basins, reliable pump units, and effective discharge systems that direct water safely away from your foundation. With expert installation from Texas Best Sprinklers, you'll gain peace of mind knowing your home is protected from water damage.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Quality Equipment Selection
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We install only high-quality, reliable sump pump systems from trusted manufacturers. Our equipment selection is based on your specific needs, including your home's size, water table conditions, and typical water volume. We offer submersible pumps, pedestal pumps, and combination systems, all chosen for their durability, performance, and long-term reliability in protecting your property.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Battery Backup Systems
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Power outages often coincide with storms when your sump pump is most needed. That's why we recommend and install battery backup systems that automatically take over if your primary pump loses power. These backup systems provide continued protection during outages, ensuring your basement stays dry even during the most challenging conditions. For ultimate peace of mind, we can also install water-powered backup pumps that require no electricity.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Smart Monitoring Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Modern sump pump systems can include smart monitoring technology that alerts you to potential problems before they lead to flooding. We offer systems with remote monitoring capabilities that can send notifications to your smartphone if water levels rise, power is lost, or the pump malfunctions. This early warning system gives you time to address issues before water damage occurs, even when you're away from home.
          </p>
        </div>
        
        {/* Sump Pump System Benefits */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Benefits of a Professional Sump Pump System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Flood Prevention</h3>
              <p className="text-gray-800">
                Properly installed sump pumps automatically detect rising water levels and pump water away before it can flood your basement or crawlspace.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Mold and Mildew Prevention</h3>
              <p className="text-gray-800">
                By keeping your basement dry, sump pumps help prevent the moisture conditions that lead to harmful mold and mildew growth.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Foundation Protection</h3>
              <p className="text-gray-800">
                Removing excess groundwater around your foundation helps prevent hydrostatic pressure that can cause cracks and structural damage over time.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Increased Property Value</h3>
              <p className="text-gray-800">
                A properly installed sump pump system is an attractive feature for potential homebuyers, especially in areas with high water tables or flood risks.
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
          title="Protect Your Home from Water Damage" 
          subtitle="Contact Texas Best Sprinklers today to discuss sump pump installation or to schedule maintenance for your existing system."
        />
      </div>
    </ServicePageLayout>
  );
}
