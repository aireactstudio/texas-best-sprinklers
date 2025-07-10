'use client';

import { Droplet } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function DripIrrigationPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.IRRIGATION,
    title: "Drip Irrigation",
    description: "Our precision drip irrigation systems deliver water directly to plant root zones, maximizing efficiency and promoting healthier plant growth while conserving water.",
    icon: <Droplet size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Water-saving design",
      "Precise plant-by-plant delivery",
      "Reduced water runoff and evaporation",
      "Minimized weed growth",
      "Custom zone configurations",
      "Compatible with existing systems",
      "Smart controller integration"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Efficient Water Delivery
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Drip irrigation is the most efficient watering method available, delivering water directly to plant root zones at a slow, steady rate. This targeted approach eliminates overspray, runoff, and evaporation, using up to 50% less water than traditional sprinkler systems while providing better results. Our custom drip irrigation designs ensure each plant receives precisely the amount of water it needs, exactly where it needs it.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Ideal for Gardens and Landscape Beds
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Drip irrigation is perfect for vegetable gardens, flower beds, shrub borders, container plants, and tree rings. By keeping foliage dry and delivering water only to the root zone, drip systems promote healthier plants with fewer disease problems. The precise water delivery also reduces weed growth by avoiding irrigation of areas between plants.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Custom System Design
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our experienced designers create custom drip irrigation systems tailored to your specific landscape needs. We carefully analyze your plant types, soil conditions, sun exposure, and water requirements to design a system that delivers optimal irrigation. Every component, from the mainline to the smallest emitter, is selected for durability and performance in your unique conditions.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Integration with Existing Systems
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We can integrate drip irrigation into your existing sprinkler system, converting specific zones to drip or adding new drip zones. This allows you to maintain traditional sprinklers for turf areas while enjoying the benefits of drip irrigation in planting beds. All of our drip installations include proper filtration, pressure regulation, and flush valves to ensure long-term system performance.
          </p>
        </div>
        
        {/* Benefits of Drip Irrigation */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Benefits of Drip Irrigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Water Conservation</h3>
              <p className="text-gray-800">
                Drip irrigation typically uses 30-50% less water than conventional sprinkler systems by eliminating overspray, runoff, and evaporation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Healthier Plants</h3>
              <p className="text-gray-800">
                By keeping foliage dry and providing consistent moisture to roots, drip irrigation promotes stronger plant growth and reduces fungal diseases.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Reduced Weed Growth</h3>
              <p className="text-gray-800">
                Targeting water only to desired plants minimizes weed germination and growth in areas between plants, reducing maintenance needs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Lower Utility Bills</h3>
              <p className="text-gray-800">
                The significant water savings from drip irrigation translates directly to lower water bills, often paying for the system over time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom sections */}
      <div className="mt-20">
        <ServiceAreaLocator
          title="Our Service Areas"
          subtitle="Texas Best Sprinklers provides expert irrigation solutions throughout the Fort Worth metroplex"
        />
      </div>
      
      <div className="mt-12 mb-20">
        <CTA 
          title="Ready to Save Water with Drip Irrigation?" 
          subtitle="Contact us today to discuss how a custom drip irrigation system can enhance your landscape while conserving water."
        />
      </div>
    </ServicePageLayout>
  );
}
