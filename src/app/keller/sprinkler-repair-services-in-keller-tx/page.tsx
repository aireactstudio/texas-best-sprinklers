import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { Wrench, Droplet, Sprout, ClipboardList, Repeat2 } from 'lucide-react';
import CityServicesList from '@/components/CityServicesList';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Sprinkler Repair Services in Keller, TX | Texas Best Sprinklers',
  description: 'Expert sprinkler repairs in Keller, TX. We repair heads, valves, leaks, wiring, timers, and more for all major brands.',
};

export default function SprinklerRepairKellerPage() {
  return (
    <ServicePageLayout
      title="Sprinkler Repair in Keller, TX"
      description="Licensed, insured, and fast—our team keeps your system running efficiently."
      icon={<Wrench className="h-10 w-10 text-irrigation-darkBlue" />}
      image="/assets/images/optimized/hero-background.webp"
      features={[
        'Broken head and nozzle replacements',
        'Zone and valve troubleshooting',
        'Controller and sensor repairs',
        'Coverage optimization and tuning',
      ]}
      serviceType="SPRINKLER_REPAIR"
    >
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-4">Reliable Sprinkler Repairs</h2>
        <p className="text-gray-800 mb-4 text-lg">
          Whether it’s a single head or a multi-zone system problem, we quickly find the root cause and make durable repairs.
          We also tune coverage and schedules to reduce water waste and improve lawn health.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Typical Repairs</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Head height and alignment corrections</li>
              <li>Nozzle replacements and unclogging</li>
              <li>Valve locating and replacement</li>
              <li>Wire tracing and splice repairs</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Optimization</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Coverage balancing and head-to-head spacing</li>
              <li>Smart controller setup and programming</li>
              <li>Rain/freeze sensor verification</li>
              <li>Leak checks at backflow and manifolds</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-4">Our Diagnostics Approach</h2>
        <p className="text-gray-800 mb-4 text-lg">
          We start with a full zone run-through, verifying pressure, electrical continuity, and component health. We isolate the issue,
          explain options, and prioritize long-term reliability—not just quick fixes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Advanced Checks</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Valve and manifold leak isolation</li>
              <li>Solenoid resistance and wire tracing</li>
              <li>Nozzle precipitation rate matching</li>
              <li>Backflow and PRV verification</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Brands & Parts</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Hunter, Rain Bird, and Toro components</li>
              <li>Waterproof connections and splices</li>
              <li>Pressure-regulated heads to reduce misting</li>
              <li>Matched nozzles for uniform coverage</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Maintenance Tips</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Update schedules seasonally</li>
              <li>Keep heads at grade and free of debris</li>
              <li>Test rain/freeze sensors each season</li>
              <li>Book annual check-ups to prevent surprises</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Warranty & Guarantees</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Warranty on parts we supply and install</li>
              <li>Workmanship guarantee on repairs</li>
              <li>Transparent estimates and documentation</li>
              <li>Post-repair tuning included</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">FAQs</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><strong>Do you stock common parts?</strong> Yes—most issues are fixed in a single visit.</li>
            <li><strong>Can you upgrade my heads?</strong> We can replace with pressure‑regulated or high‑efficiency nozzles.</li>
            <li><strong>Do you service older controllers?</strong> Yes, and we can recommend smart upgrades when it’s time.</li>
          </ul>
        </div>
      </div>

      <CityServicesList
        cityName="Keller"
        items={[
          { title: 'Irrigation Repair in Keller', href: '/keller/irrigation-repair-services-in-keller-tx', icon: <Wrench className="h-6 w-6" /> },
          { title: 'Sprinkler Installation in Keller', href: '/keller/sprinkler-installation-services-in-keller-tx', icon: <Sprout className="h-6 w-6" /> },
          { title: 'System Check-Up in Keller', href: '/keller/sprinkler-system-check-up-services-in-keller-tx', icon: <ClipboardList className="h-6 w-6" /> },
          { title: 'System Reroutes in Keller', href: '/keller/sprinkler-system-reroutes-services-in-keller-tx', icon: <Repeat2 className="h-6 w-6" /> },
          { title: 'Drip Irrigation in Keller', href: '/keller/drip-irrigation-services-in-keller-tx', icon: <Droplet className="h-6 w-6" /> },
          { title: 'Sprinkler Repair in Keller', href: '/keller/sprinkler-repair-services-in-keller-tx', icon: <Wrench className="h-6 w-6" /> },
        ]}
      />

      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="Expert sprinkler repairs available across Keller and surrounding communities"
          />
        </div>
      </section>

      <CTA
        title="Sprinkler Not Working Right?"
        subtitle="Schedule a visit today—fast, reliable repairs from licensed pros."
        buttonText="Book Repair"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
