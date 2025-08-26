import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { Droplet, Wrench, Sprout, ClipboardList, Repeat2 } from 'lucide-react';
import CityServicesList from '@/components/CityServicesList';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Drip Irrigation Services in Keller, TX | Texas Best Sprinklers',
  description: 'Professional drip irrigation design and installation in Keller, TX. Improve water efficiency and plant health with custom drip systems.',
};

export default function DripIrrigationKellerPage() {
  return (
    <ServicePageLayout
      title="Drip Irrigation in Keller, TX"
      description="Custom-designed drip systems that save water and deliver moisture exactly where plants need it."
      icon={<Droplet className="h-10 w-10 text-irrigation-darkBlue" />}
      image="/assets/images/optimized/hero-background.webp"
      features={[
        'Efficient water delivery to roots',
        'Reduced evaporation and overspray',
        'Smart zone and timer setup',
        'Retrofits for existing beds and landscapes',
      ]}
      serviceType="DRIP_IRRIGATION"
    >
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-4">Why Choose Drip Irrigation?</h2>
        <p className="text-gray-800 mb-4 text-lg">
          Drip irrigation is ideal for foundation beds, gardens, and areas where you want deep, targeted watering without waste.
          Our licensed team designs, installs, and maintains drip systems tailored to Keller landscapes, native plants, and soil conditions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Key Benefits</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Lower water usage and utility bills</li>
              <li>Healthier plants with fewer fungal issues</li>
              <li>Minimal runoff and property staining</li>
              <li>Precise watering that reduces weeds</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Common Applications</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Foundation bed irrigation</li>
              <li>Vegetable and xeriscape gardens</li>
              <li>Tree and shrub deep-watering</li>
              <li>Retrofitting overspray-prone areas</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-irrigation-darkBlue mb-3">Our Keller Drip Installation Process</h3>
        <ol className="list-decimal pl-6 text-gray-800 space-y-2">
          <li>Evaluate water pressure, flow, and existing irrigation zones</li>
          <li>Design zone-by-zone drip layouts for efficient coverage</li>
          <li>Use pressure regulators, filters, and quality emitters/tubing</li>
          <li>Test, adjust, and program smart watering schedules</li>
        </ol>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Popular Upgrades</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Inline emitter tubing for uniform flow</li>
              <li>Automatic filters and pressure regulators</li>
              <li>Smart Wi‑Fi controller integration</li>
              <li>Moisture sensors for high-value beds</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Materials We Trust</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Rain Bird XF/HE dripline and filters</li>
              <li>Hunter/Netafim emitters and accessories</li>
              <li>Proper zone valves with pressure control</li>
              <li>Clean, serviceable manifolds and fittings</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Maintenance Tips</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Flush drip zones at least once per season</li>
              <li>Inspect filters and clean as needed</li>
              <li>Adjust emitters as plants mature</li>
              <li>Verify schedules after heavy rain events</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Warranty & Guarantees</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Manufacturer warranties on valves/controllers</li>
              <li>Workmanship guarantee on new installs</li>
              <li>Quality parts for long-term reliability</li>
              <li>Clear estimates and communication</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">FAQs</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><strong>Can drip and sprinklers share a zone?</strong> We recommend separate zones for proper pressure and scheduling.</li>
            <li><strong>Will drip clog?</strong> With filtration and proper pressure regulation, clogging is minimized; we also add flush points.</li>
            <li><strong>Is drip good for lawns?</strong> Drip is best for beds, trees, and gardens—rotors/sprays are used for turf.</li>
          </ul>
        </div>
      </div>

      {/* Services in Keller */}
      <CityServicesList
        cityName="Keller"
        items={[
          {
            title: 'Irrigation Repair in Keller',
            href: '/keller/irrigation-repair-services-in-keller-tx',
            icon: <Wrench className="h-6 w-6" />,
          },
          {
            title: 'Sprinkler Installation in Keller',
            href: '/keller/sprinkler-installation-services-in-keller-tx',
            icon: <Sprout className="h-6 w-6" />,
          },
          {
            title: 'Sprinkler Repair in Keller',
            href: '/keller/sprinkler-repair-services-in-keller-tx',
            icon: <Wrench className="h-6 w-6" />,
          },
          {
            title: 'System Check-Up in Keller',
            href: '/keller/sprinkler-system-check-up-services-in-keller-tx',
            icon: <ClipboardList className="h-6 w-6" />,
          },
          {
            title: 'System Reroutes in Keller',
            href: '/keller/sprinkler-system-reroutes-services-in-keller-tx',
            icon: <Repeat2 className="h-6 w-6" />,
          },
          {
            title: 'Drip Irrigation in Keller',
            href: '/keller/drip-irrigation-services-in-keller-tx',
            icon: <Droplet className="h-6 w-6" />,
          },
        ]}
      />

      {/* Areas Served */}
      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="Texas Best Sprinklers provides expert drip irrigation services throughout the Fort Worth metroplex"
          />
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Professional Drip Irrigation Services"
        subtitle="Contact us today to schedule your service or get a free quote."
        buttonText="Request Service"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}

