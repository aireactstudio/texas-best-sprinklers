import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { Repeat, Wrench, Droplet, Sprout, ClipboardList, Repeat2 } from 'lucide-react';
import CityServicesList from '@/components/CityServicesList';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Sprinkler System Reroutes in Keller, TX | Texas Best Sprinklers',
  description: 'Reroute sprinkler zones for pools, patios, home additions, and landscape changes in Keller, TX.',
};

export default function SprinklerReroutesKellerPage() {
  return (
    <ServicePageLayout
      title="Sprinkler System Reroutes in Keller, TX"
      description="Additions, pools, patios, or landscape changes? We reroute and rebalance your system the right way."
      icon={<Repeat className="h-10 w-10 text-irrigation-darkBlue" />}
      image="/assets/images/optimized/hero-background.webp"
      features={[
        'Move or split zones as needed',
        'Protect lines during construction',
        'Restore proper coverage post-project',
        'Coordinate with builders and landscapers',
      ]}
      serviceType="SPRINKLER_SYSTEM_REROUTES"
    >
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-4">Reroutes for Renovations</h2>
        <p className="text-gray-800 mb-4 text-lg">
          Renovations often disrupt irrigation infrastructure. We locate and reroute lines, move heads, and rebalance coverage so your
          system supports the new layout without waste or dry spots.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Common Projects</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Pool and patio additions</li>
              <li>Outdoor kitchens and pergolas</li>
              <li>New beds, trees, and hardscapes</li>
              <li>Home expansions and sheds</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Our Process</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Locate existing lines and valves</li>
              <li>Design updated zones for new layout</li>
              <li>Move/replace heads to restore coverage</li>
              <li>Test, balance, and program controller</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-4">Pre-Construction Planning</h2>
        <p className="text-gray-800 mb-4 text-lg">
          The best reroutes start before any digging begins. We mark lines and valves, protect critical components, and plan new zone
          layouts so your system works perfectly with the finished project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Materials & Methods</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Schedule 40 PVC manifolds and swing joints</li>
              <li>Pressure-regulated heads and matched nozzles</li>
              <li>Professional wire splices and waterproof connectors</li>
              <li>Clean trenching with site restoration</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Coordination & Permits</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Coordinate schedules with builders/landscapers</li>
              <li>Backflow protection to local code</li>
              <li>Controller reprogramming after construction</li>
              <li>As-built notes for future service</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Warranty & Guarantees</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Manufacturer warranties on parts we install</li>
              <li>Workmanship guarantee on reroute work</li>
              <li>Transparent scope and pricing</li>
              <li>Final walkthrough and coverage verification</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">FAQs</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li><strong>When should I schedule the reroute?</strong> Before excavation so we can protect existing lines/valves.</li>
              <li><strong>Can you work alongside my contractor?</strong> Yes—we coordinate timing and site access.</li>
              <li><strong>Will coverage be restored?</strong> We rebalance zones and adjust heads for the new layout.</li>
            </ul>
          </div>
        </div>
      </div>

      <CityServicesList
        cityName="Keller"
        items={[
          { title: 'Irrigation Repair in Keller', href: '/keller/irrigation-repair-services-in-keller-tx', icon: <Wrench className="h-6 w-6" /> },
          { title: 'Sprinkler Installation in Keller', href: '/keller/sprinkler-installation-services-in-keller-tx', icon: <Sprout className="h-6 w-6" /> },
          { title: 'Sprinkler Repair in Keller', href: '/keller/sprinkler-repair-services-in-keller-tx', icon: <Wrench className="h-6 w-6" /> },
          { title: 'System Check-Up in Keller', href: '/keller/sprinkler-system-check-up-services-in-keller-tx', icon: <ClipboardList className="h-6 w-6" /> },
          { title: 'Drip Irrigation in Keller', href: '/keller/drip-irrigation-services-in-keller-tx', icon: <Droplet className="h-6 w-6" /> },
          { title: 'System Reroutes in Keller', href: '/keller/sprinkler-system-reroutes-services-in-keller-tx', icon: <Repeat2 className="h-6 w-6" /> },
        ]}
      />

      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="We coordinate sprinkler reroutes with contractors and homeowners across the Fort Worth area"
          />
        </div>
      </section>

      <CTA
        title="Planning a Renovation?"
        subtitle="Get ahead of irrigation issues—schedule a reroute consultation today."
        buttonText="Plan My Reroute"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
