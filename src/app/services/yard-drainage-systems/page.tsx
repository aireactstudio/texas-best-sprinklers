"use client";

import Link from 'next/link';
import { CloudRain } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function YardDrainageSystemsPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.DRAINAGE,
    title: "Yard Drainage Systems",
    description: "Our comprehensive yard drainage solutions eliminate standing water, prevent erosion, and protect your landscape investment with custom-designed water management systems.",
    icon: <CloudRain size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Custom drainage system design",
      "Surface water management",
      "Subsurface drainage solutions",
      "Erosion control measures",
      "Integrated water management",
      "Quality materials and installation",
      "Minimally invasive techniques"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Comprehensive Yard Drainage Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Poor drainage can ruin landscapes, damage structures, and create unusable areas in your yard. Our complete yard drainage systems address these issues with custom solutions that effectively manage water flow throughout your property. We begin with a thorough assessment of your site conditions, water flow patterns, and problem areas, then design a comprehensive drainage system that protects your landscape and structures.
            {" "}
            <Link href="/services/drainage-solutions" className="text-irrigation-darkGreen hover:text-irrigation-darkBlue underline-offset-2 hover:underline">
              Explore our main drainage corrections & French drains service.
            </Link>
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Integrated Drainage System Design
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Effective yard drainage often requires multiple solutions working together as an integrated system. Our designers expertly combine various drainage components—such as French drains, surface drains, channel drains, and dry wells—into a cohesive system that addresses all your water management needs. This systems approach ensures that solving one drainage problem doesn't create issues elsewhere on your property.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Surface Water Management
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Surface water issues—such as pooling in low spots, runoff from slopes, or water flowing toward structures—require strategic collection and redirection. We install properly placed catch basins, channel drains, and swales to intercept surface water and channel it to appropriate discharge points. Our surface drainage solutions blend seamlessly with your landscape while effectively managing water flow.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Subsurface Drainage Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            When water problems exist below the surface—such as saturated soil or high water tables—subsurface drainage systems provide the solution. Our expert installation of French drains, curtain drains, and subsurface drainage fields helps lower water tables and move groundwater away from problem areas. These hidden drainage systems work continuously to keep your soil properly drained without visible surface components.
          </p>
        </div>
        
        {/* Common Drainage Solutions */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Core Components of Complete Yard Drainage Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">
                <Link href="/services/french-drains" className="hover:underline underline-offset-2 text-irrigation-darkBlue">
                  French Drains
                </Link>
              </h3>
              <p className="text-gray-800">
                Subsurface trenches filled with gravel and perforated pipe that collect and redirect groundwater away from problem areas, ideal for managing saturated soil conditions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Surface & Area Drains</h3>
              <p className="text-gray-800">
                Strategic placement of catch basins and grates at low points to collect surface water and connect to underground drainage pipes for proper discharge.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Channel Drains</h3>
              <p className="text-gray-800">
                Linear drainage systems installed flush with hardscaped surfaces to collect runoff from driveways, patios, and other paved areas before it reaches structures.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Dry Wells & Discharge Points</h3>
              <p className="text-gray-800">
                Environmentally friendly solutions for managing collected water, either through controlled infiltration back into the soil or proper discharge to designated areas.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom sections */}
      <div className="mt-20">
        <ServiceAreaLocator
          title="Our Service Areas"
          subtitle="Texas Best Sprinklers provides expert yard drainage solutions throughout the Fort Worth metroplex"
        />
      </div>
      
      <div className="mt-12 mb-20">
        <CTA 
          title="Solve Your Yard Drainage Problems" 
          subtitle="Contact Texas Best Sprinklers today for a professional assessment of your property's drainage needs and a customized solution."
        />
      </div>
    </ServicePageLayout>
  );
}
