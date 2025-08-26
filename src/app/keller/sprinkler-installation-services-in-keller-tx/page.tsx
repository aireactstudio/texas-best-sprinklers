import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { Droplet, Wrench, Sprout, ClipboardList, Repeat2 } from 'lucide-react';
import CityServicesList from '@/components/CityServicesList';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Sprinkler Installation in Keller, TX | Texas Best Sprinklers',
  description: 'Professional sprinkler system design and installation in Keller, TX. Smart, water-efficient systems built to last.',
};

export default function SprinklerInstallationKellerPage() {
  return (
    <ServicePageLayout
      title="Sprinkler Installation in Keller, TX"
      description="Custom-designed systems for full coverage, healthy lawns, and efficient water use."
      icon={<Droplet className="h-10 w-10 text-irrigation-darkBlue" />}
      image="/assets/images/optimized/hero-background.webp"
      features={[
        'Zoned coverage tailored to your property',
        'Smart Wi‑Fi controllers and rain/freeze sensors',
        'High-quality heads, valves, and fittings',
        'Neat trenching and property-safe installation',
      ]}
      serviceType="SPRINKLER_INSTALLATION"
    >
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-4">Our Installation Process</h2>
        <p className="text-gray-800 mb-4 text-lg">
          We start with a pressure and flow assessment, then design zones for turf, beds, and hard-to-reach areas. Systems are installed
          to manufacturer specs with clean workmanship and tested for optimal coverage before we leave.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Design & Equipment</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Hydraulic calculations for balanced pressure</li>
              <li>Matched precipitation rates across zones</li>
              <li>High-efficiency nozzles and rotors</li>
              <li>Backflow prevention per code</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Quality Assurance</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Clean trenching with minimal lawn disturbance</li>
              <li>Thorough zone testing and coverage audit</li>
              <li>Controller setup with rain/freeze sensors</li>
              <li>Owner walkthrough and training</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-irrigation-darkBlue mb-3">Timeline</h3>
        <ol className="list-decimal pl-6 text-gray-800 space-y-2">
          <li>On-site evaluation and estimate</li>
          <li>Design approval and scheduling</li>
          <li>Installation day and quality checks</li>
          <li>Final walkthrough and warranty info</li>
        </ol>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Popular Upgrades</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Smart Wi‑Fi controllers with weather skip</li>
              <li>High-efficiency MP Rotator nozzles</li>
              <li>Drip zones for beds and foundation watering</li>
              <li>Pressure-regulated heads to reduce misting</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Brands & Materials</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Hunter, Rain Bird, and Toro components</li>
              <li>Schedule 40 PVC manifolds and swing joints</li>
              <li>Brass backflow assemblies where required</li>
              <li>Water‑tight splices and professional wiring</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Maintenance Tips</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Schedule seasonal check-ups for optimal settings</li>
              <li>Keep heads clear of turf growth and mulch</li>
              <li>Adjust runtimes with weather changes</li>
              <li>Test rain/freeze sensors twice per year</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Warranty & Guarantees</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Manufacturer warranties on controllers, valves, and heads</li>
              <li>Workmanship guarantee on installation</li>
              <li>Post-install tuning included</li>
              <li>Transparent estimates and timelines</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">FAQs</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><strong>How long does installation take?</strong> Most homes are 1 day; larger properties may take 2–3 days.</li>
            <li><strong>Do you handle permits/backflow?</strong> Yes—installed to local code with required backflow protection.</li>
            <li><strong>Will my yard be a mess?</strong> We use clean trenching and restore disturbed areas before leaving.</li>
          </ul>
        </div>
      </div>

      <CityServicesList
        cityName="Keller"
        items={[
          { title: 'Irrigation Repair in Keller', href: '/keller/irrigation-repair-services-in-keller-tx', icon: <Wrench className="h-6 w-6" /> },
          { title: 'Sprinkler Repair in Keller', href: '/keller/sprinkler-repair-services-in-keller-tx', icon: <Wrench className="h-6 w-6" /> },
          { title: 'System Check-Up in Keller', href: '/keller/sprinkler-system-check-up-services-in-keller-tx', icon: <ClipboardList className="h-6 w-6" /> },
          { title: 'System Reroutes in Keller', href: '/keller/sprinkler-system-reroutes-services-in-keller-tx', icon: <Repeat2 className="h-6 w-6" /> },
          { title: 'Drip Irrigation in Keller', href: '/keller/drip-irrigation-services-in-keller-tx', icon: <Droplet className="h-6 w-6" /> },
          { title: 'Sprinkler Installation in Keller', href: '/keller/sprinkler-installation-services-in-keller-tx', icon: <Sprout className="h-6 w-6" /> },
        ]}
      />

      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="We design and install high-efficiency sprinkler systems across the Fort Worth metroplex"
          />
        </div>
      </section>

      <CTA
        title="Get a Professional Sprinkler Installation"
        subtitle="Request a free on-site evaluation and custom design for your Keller property."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
