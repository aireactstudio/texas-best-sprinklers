'use client';

import { Settings } from 'lucide-react';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function SprinklerWinterizationPage() {
  const serviceProps = {
    serviceType: 'sprinkler-winterization',
    title: 'Sprinkler Winterization',
    description:
      'Full winterization to safeguard your irrigation system: shut-down, water evacuation, controller prep, and spring-ready notes for a smooth start-up.',
    icon: <Settings size={32} className="text-white" />,
    image: '/assets/images/optimized/Irrigation-Repair.png',
    features: [
      'System shut-down and isolation',
      'Blow out of lateral lines and manifolds',
      'Backflow and valve protection steps',
      'Controller programming for off-season',
      'Spring start-up recommendations',
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Comprehensive Winter Prep</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Winterization is more than a quick air purge. We follow a structured checklist to protect backflow assemblies, valves, manifolds, and controller settings so your system stays safe during freezing weather.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Benefits</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Reduce the risk of burst pipes and costly repairs, avoid spring leaks, and extend the lifespan of your irrigation components with a proper winterization service.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">When To Winterize</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            In Fort Worth and surrounding cities, plan winterization in late fall. We monitor weather patterns and can advise on the ideal timing for your property.
          </p>
        </div>
      </div>

      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="Sprinkler winterization services across Fort Worth, Arlington, Keller, Southlake, Colleyville, Grapevine, Weatherford, and nearby cities"
          />
        </div>
      </section>

      <CTA
        title="Book Your Winterization"
        subtitle="Get your irrigation system winter-ready by licensed professionals."
        buttonText="Request Service"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
