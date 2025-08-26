import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { CheckCircle, Wrench, Droplet, Sprout, ClipboardList, Repeat2 } from 'lucide-react';
import CityServicesList from '@/components/CityServicesList';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Sprinkler System Check-Up in Fort Worth, TX | Texas Best Sprinklers',
  description:
    'Comprehensive sprinkler inspections and tune-ups in Fort Worth, TX. Optimize coverage, fix leaks, and save water.',
};

export default function SprinklerCheckupFortWorthPage() {
  return (
    <ServicePageLayout
      title="Sprinkler System Check-Up in Fort Worth, TX"
      description="Seasonal inspections and full-system tune-ups to keep everything running smoothly."
      icon={<CheckCircle className="h-10 w-10 text-irrigation-darkBlue" />}
      image="/assets/images/optimized/hero-background.webp"
      features={[
        'Run and test each zone',
        'Head alignment and nozzle checks',
        'Controller programming and seasonal settings',
        'Leak checks at backflow, valves, and lines',
      ]}
      serviceType="SPRINKLER_SYSTEM_CHECK_UP"
    >
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-4">What We Inspect</h2>
        <p className="text-gray-800 mb-4 text-lg">
          Our Fort Worth check-up verifies coverage, pressure, and component condition—catching small issues before they turn into
          expensive repairs. We’ll recommend practical improvements and set your seasonal schedule.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Inspection Points</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Nozzle sizes and distribution uniformity</li>
              <li>Rain/freeze sensor operation</li>
              <li>Backflow, valve, and manifold leaks</li>
              <li>Water pressure and zone performance</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Tune-Up</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Head height, alignment, and arc adjustments</li>
              <li>Controller programming and seasonal settings</li>
              <li>Clogged nozzle clean-out and replacements</li>
              <li>Coverage optimization and water savings tips</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-4">Optimization Opportunities</h2>
        <p className="text-gray-800 mb-4 text-lg">
          During your check-up, we identify water-saving upgrades and reliability fixes that deliver a fast payback while improving lawn
          health and compliance with local watering guidelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Recommended Upgrades</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Smart Wi‑Fi controllers with weather skip</li>
              <li>Pressure-regulated heads to cut misting</li>
              <li>High-efficiency MP Rotator nozzles</li>
              <li>Drip conversion for beds and foundations</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Maintenance Tips</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Adjust seasonal schedules 4× per year</li>
              <li>Keep heads clear and at proper height</li>
              <li>Test rain/freeze sensors every season</li>
              <li>Flush drip zones and clean filters</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Warranty & Guarantees</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Manufacturer warranties on parts we install</li>
              <li>Workmanship guarantee on corrections and upgrades</li>
              <li>Transparent estimates and options</li>
              <li>Post-visit tuning and walkthrough included</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">FAQs</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li><strong>How often should I get a check-up?</strong> Most Fort Worth homes benefit from a spring and fall visit.</li>
              <li><strong>Do you program my controller?</strong> Yes—we set seasonal schedules and show you how to adjust.</li>
              <li><strong>Can you fix issues during the visit?</strong> In most cases yes; we stock common parts for same-day fixes.</li>
            </ul>
          </div>
        </div>
      </div>

      <CityServicesList
        cityName="Fort Worth"
        items={[
          { title: 'Irrigation Repair in Fort Worth', href: '/fort-worth/irrigation-repair-services-in-fort-worth-tx', icon: <Wrench className="h-6 w-6" /> },
          { title: 'Sprinkler Installation in Fort Worth', href: '/fort-worth/sprinkler-installation-services-in-fort-worth-tx', icon: <Sprout className="h-6 w-6" /> },
          { title: 'Sprinkler Repair in Fort Worth', href: '/fort-worth/sprinkler-repair-services-in-fort-worth-tx', icon: <Wrench className="h-6 w-6" /> },
          { title: 'System Reroutes in Fort Worth', href: '/fort-worth/sprinkler-system-reroutes-services-in-fort-worth-tx', icon: <Repeat2 className="h-6 w-6" /> },
          { title: 'Drip Irrigation in Fort Worth', href: '/fort-worth/drip-irrigation-services-in-fort-worth-tx', icon: <Droplet className="h-6 w-6" /> },
          { title: 'System Check-Up in Fort Worth', href: '/fort-worth/sprinkler-system-check-up-services-in-fort-worth-tx', icon: <ClipboardList className="h-6 w-6" /> },
        ]}
      />

      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="Seasonal check-ups and tune-ups available throughout Fort Worth"
          />
        </div>
      </section>

      <CTA
        title="Schedule Your Sprinkler Check-Up"
        subtitle="Prevent costly repairs with a seasonal inspection and tune-up."
        buttonText="Book Check-Up"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
