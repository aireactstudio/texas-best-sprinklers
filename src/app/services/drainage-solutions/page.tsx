'use client';

import { CloudRain } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function DrainageSolutionsPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.DRAINAGE,
    title: "Drainage Solutions",
    description: "Prevent water damage to your property with our professional drainage systems designed to effectively manage water flow, redirect excess water, and protect your foundation.",
    icon: <CloudRain size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Custom drainage system design",
      "French drain installation",
      "Surface drain solutions",
      "Channel drain systems",
      "Catch basin installation",
      "Downspout extensions and redirection",
      "Erosion prevention systems"
    ]
  };

  return (
    <ServicePageLayout {...serviceProps}>
      {/* Content Sections */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Custom Drainage Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Every property has unique drainage needs based on soil type, slope, and existing landscape features. We design custom drainage systems that address your specific water management challenges, whether you're dealing with standing water, soggy areas, or foundation concerns.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            French Drain Systems
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            French drains are subsurface drainage systems that collect and redirect groundwater away from problem areas. Our expert installation ensures proper depth, slope, and materials to efficiently channel water away from your foundation, lawn, or garden areas.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Surface Water Management
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            For visible water pooling and runoff issues, we install surface drains and channel systems that quickly collect and direct water to appropriate discharge locations. These systems are particularly effective for driveways, patios, and other hardscape areas where water tends to collect.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Foundation Protection
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Water collecting around your foundation can lead to costly structural damage. Our comprehensive foundation drainage solutions, including proper grading, drainage channel systems, and waterproofing measures, protect your home's structural integrity from water-related issues.
          </p>
        </div>
        
        {/* Common Drainage Problems */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Common Drainage Problems We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Standing Water</h3>
              <p className="text-gray-800">
                Pools of water that remain in your yard long after rain has stopped can damage your lawn, attract mosquitoes, and lead to foundation issues.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Wet Basement or Crawl Space</h3>
              <p className="text-gray-800">
                Water seeping into below-grade areas can cause mold, wood rot, and serious structural damage to your home's foundation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Soil Erosion</h3>
              <p className="text-gray-800">
                Improper water flow can wash away valuable topsoil, damage landscaping, and create unsightly gullies in your yard.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Foundation Issues</h3>
              <p className="text-gray-800">
                Excess water around your foundation can cause settling, cracking, and costly structural damage to your home over time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FULL WIDTH SECTIONS - These will span the entire width below the sidebar */}
      
      {/* Areas Served - Full width section */}
      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="Texas Best Sprinklers provides expert drainage solutions throughout the Fort Worth metroplex"
          />
        </div>
      </section>
      
      {/* CTA - Full width section */}
      <CTA 
        title="Ready to Solve Your Drainage Problems?"
        subtitle="Contact us today to schedule a drainage consultation and get a customized solution."
        buttonText="Get Your Solution"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
