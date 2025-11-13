'use client';

import { Settings } from 'lucide-react';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function SprinklerBlowOutPage() {
  const serviceProps = {
    serviceType: 'sprinkler-blow-out',
    title: 'Sprinkler Blow Out',
    description:
      'Protect your irrigation system from freeze damage with a professional sprinkler blow out. We safely evacuate water from lines, valves, and backflow to prevent costly winter cracks and leaks.',
    icon: <Settings size={32} className="text-white" />,
    image: '/assets/images/optimized/Irrigation-Repair.png',
    features: [
      'System-wide water evacuation',
      'Backflow and valve protection',
      'Compressor pressure controlled for safety',
      'Zone-by-zone verification',
      'Winter readiness inspection',
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Why Blow Out Your Sprinklers?</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            In North Texas, sudden cold snaps and hard freezes can crack pipes, damage valves, and ruin backflow preventers. A professional blow out removes residual water from your irrigation lines and components to prevent freeze expansion damage.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">What We Do</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We isolate the system, use controlled air pressure to evacuate each zone, protect sensitive components, and verify shut-down. This process is safe for modern systems when performed by trained technicians.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Ideal Timing</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Schedule your blow out before the first hard freeze. If temps have already dropped, it’s still worth doing to minimize further risk throughout winter.
          </p>
        </div>
      </div>

      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="Sprinkler blow out services across Fort Worth, Arlington, Keller, Southlake, Colleyville, Grapevine, Weatherford, and nearby cities"
          />
        </div>
      </section>

      <CTA
        title="Schedule Your Sprinkler Blow Out"
        subtitle="Protect your irrigation system before freezing weather hits."
        buttonText="Request Service"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
