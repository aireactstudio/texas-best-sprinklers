'use client';

import { CloudSun } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreas from '@/components/ServiceAreas';
import CTA from '@/components/CTA';

export default function OutdoorLightingPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.OUTDOOR_LIGHTING,
    title: "Outdoor Lighting",
    description: "Enhance your property's beauty, security, and functionality with our custom-designed outdoor lighting solutions for pathways, gardens, and architectural features.",
    icon: <CloudSun size={32} className="text-white" />,
    image: "/assets/images/optimized/outdoor_lighting_2.webp",
    features: [
      "Custom lighting design for your unique landscape",
      "Energy-efficient LED technology",
      "Path and walkway lighting",
      "Accent lighting for gardens and architectural features",
      "Security lighting solutions",
      "Smart controls and automation",
      "Professional installation with hidden wiring"
    ]
  };

  return (
    <ServicePageLayout {...serviceProps}>
      {/* Content Sections */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Custom Lighting Design
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our outdoor lighting design process begins with understanding your goals, whether that's enhancing safety, highlighting landscape features, extending outdoor living hours, or improving security. We create a custom lighting plan that balances form and function.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Energy-Efficient Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We exclusively use high-quality, energy-efficient LED lighting systems that provide beautiful illumination while consuming up to 80% less energy than traditional lighting. LED fixtures also last longer, require less maintenance, and offer superior light quality.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Professional Installation
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our installation teams carefully place fixtures, run wiring, and connect transformers with minimal disruption to your landscape. We use specialized techniques to hide wiring, ensuring your system looks beautiful day and night.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Smart Controls and Automation
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Modern lighting systems benefit from smart controls that allow you to adjust lighting schedules, brightness, and even colors from your smartphone. We can integrate your outdoor lighting with home automation systems and set up timers, motion sensors, and other convenience features.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Benefits of Outdoor Lighting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Enhanced Property Value</h3>
              <p className="text-gray-800">
                Professional landscape lighting can increase your property's value by enhancing curb appeal and creating an inviting atmosphere.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Improved Safety</h3>
              <p className="text-gray-800">
                Well-lit walkways, steps, and entrances prevent trips and falls while making your property more secure against intruders.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Extended Outdoor Living</h3>
              <p className="text-gray-800">
                The right lighting extends your enjoyment of outdoor spaces into the evening hours, creating a perfect ambiance for entertaining.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Highlighting Features</h3>
              <p className="text-gray-800">
                Strategically placed lights can accentuate your property's best features, from architectural elements to landscaping.
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
            serviceType="outdoor-lighting"
          />
        </div>
      </section>
      
      {/* CTA - Full width section */}
      <CTA 
        title="Ready to Transform Your Property with Beautiful Lighting?"
        subtitle="Contact us today to schedule a lighting consultation and personalized design."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
