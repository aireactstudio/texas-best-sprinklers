'use client';

import { Waves } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function ChannelDrainsPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.DRAINAGE,
    title: "Channel Drains, Catch Basins & Grates",
    description: "Our professional channel drain and catch basin solutions collect and redirect surface water to prevent flooding, property damage, and erosion issues.",
    icon: <Waves size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Custom drainage system design",
      "High-capacity channel drains",
      "Durable catch basins and grates",
      "Proper slope and discharge engineering",
      "Hardscape integration",
      "Decorative drainage options",
      "Complete water management systems"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Surface Water Management Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Channel drains, catch basins, and decorative grates provide effective solutions for managing surface water runoff on your property. These systems collect water from hardscaped areas like driveways, patios, and walkways, preventing flooding, water damage, and erosion. Our expert team designs and installs custom surface drainage solutions that effectively capture and redirect water away from problem areas.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Channel Drain Systems
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Channel drains (also called trench drains or linear drains) are narrow, linear collection systems typically installed flush with paved surfaces. These systems are ideal for driveways, patios, pool decks, and other areas where water tends to flow across hard surfaces. We install durable channel drains with heavy-duty grates designed to withstand vehicle traffic where needed, ensuring years of reliable performance.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Catch Basins and Area Drains
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Catch basins collect water at low points in your landscape, such as the bottom of slopes or areas where water naturally pools. These basin systems include debris collection chambers that trap leaves, sediment, and debris before they can clog your drainage pipes. Our catch basin installations include proper sizing, strategic placement, and connection to adequate discharge systems to ensure effective water management.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Decorative Grates and Covers
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Drainage doesn't have to be unsightly. We offer a range of decorative grates and covers that blend seamlessly with your landscape design while providing full drainage functionality. From ornamental metal grates to natural stone-look covers, these options enhance the aesthetic appeal of your property while effectively managing water runoff.
          </p>
        </div>
        
        {/* Applications */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Common Applications for Surface Drainage Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Driveway Drainage</h3>
              <p className="text-gray-800">
                Channel drains installed across driveways collect runoff and prevent water from flowing into garages or pooling on the pavement, extending the life of your driveway.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Patio Protection</h3>
              <p className="text-gray-800">
                Strategically placed catch basins and channel drains keep patios dry during rain events, preventing standing water that can damage pavers and create slip hazards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Pool Deck Drainage</h3>
              <p className="text-gray-800">
                Specialized channel drains with decorative grates provide essential drainage around pools, collecting splash-out and rainwater to keep deck surfaces safe and dry.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Landscape Transition Areas</h3>
              <p className="text-gray-800">
                Drain systems at landscape transitions—where lawns meet hardscaping or buildings—prevent water from flowing into unwanted areas while maintaining visual appeal.
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
          title="Eliminate Standing Water Problems" 
          subtitle="Contact Texas Best Sprinklers today for expert advice on the right drainage solutions for your property's unique needs."
        />
      </div>
    </ServicePageLayout>
  );
}
