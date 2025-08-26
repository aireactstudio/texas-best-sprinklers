import ServicePageLayout from '@/components/templates/ServicePageLayout';
import { Wrench, Droplet, Sprout, ClipboardList, Repeat2 } from 'lucide-react';
import CityServicesList from '@/components/CityServicesList';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Irrigation Repair Services in Keller, TX | Texas Best Sprinklers',
  description: 'Fast, reliable irrigation and sprinkler system repairs in Keller, TX. We fix leaks, broken heads, valves, controllers, and more.',
};

export default function IrrigationRepairKellerPage() {
  return (
    <ServicePageLayout
      title="Irrigation Repair in Keller, TX"
      description="From leaks and broken heads to wiring issues and controllers—we diagnose and fix it right."
      icon={<Wrench className="h-10 w-10 text-irrigation-darkBlue" />}
      image="/assets/images/optimized/hero-background.webp"
      features={[
        'Leak detection and pipe repairs',
        'Controller and wiring troubleshooting',
        'Valve and zone repairs',
        'Head replacements and adjustments',
      ]}
      serviceType="IRRIGATION_REPAIR"
    >
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-4">Common Problems We Fix</h2>
        <p className="text-gray-800 mb-4 text-lg">
          If your system has poor coverage, low pressure, constant leaks, or zones that won’t run, we can help. Our licensed technicians
          service all major sprinkler brands used in the Keller area and provide durable, warrantied repairs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Frequent Issues</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Stuck or non-responsive valves</li>
              <li>Clogged or misaligned sprinkler heads</li>
              <li>Damaged lateral lines or mainline leaks</li>
              <li>Controller failures and wiring shorts</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Our Repair Approach</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Thorough diagnostics to find root cause</li>
              <li>Quality parts for long-lasting repairs</li>
              <li>Coverage tune-ups to reduce water waste</li>
              <li>Clear estimates and fast turnaround</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-irrigation-darkBlue mb-3">What to Expect</h3>
        <ol className="list-decimal pl-6 text-gray-800 space-y-2">
          <li>System run-through and pressure check</li>
          <li>Component testing and leak detection</li>
          <li>Repair options and upfront pricing</li>
          <li>Post-repair tuning and controller programming</li>
        </ol>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Advanced Diagnostics</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Valve isolation to pinpoint hidden leaks</li>
              <li>Wire tracing and solenoid resistance testing</li>
              <li>Backflow and pressure regulator verification</li>
              <li>Coverage audit to eliminate dry/wet spots</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Brands & Parts</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Hunter, Rain Bird, Toro heads/valves/controllers</li>
              <li>Commercial-grade fittings and swing joints</li>
              <li>Waterproof connectors and proper splices</li>
              <li>Matched precipitation nozzles for balance</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Pro Tips</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Seasonal schedule changes prevent overwatering</li>
              <li>Keep heads at grade; avoid mower damage</li>
              <li>Install rain/freeze sensors for compliance</li>
              <li>Annual system check-ups catch small issues early</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">Warranty & Guarantees</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Warranty on parts we supply and install</li>
              <li>Workmanship guarantee on repairs</li>
              <li>Clear estimates before work begins</li>
              <li>Post-repair walkthrough and settings</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-irrigation-darkBlue mb-3">FAQs</h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><strong>Do you repair any brand?</strong> Yes—we service all major brands used around Keller.</li>
            <li><strong>Can you find hidden leaks?</strong> We isolate zones and use diagnostics to locate underground leaks.</li>
            <li><strong>Will you reprogram my controller?</strong> Yes—repairs include a tune-up and proper scheduling.</li>
          </ul>
        </div>
      </div>

      <CityServicesList
        cityName="Keller"
        items={[
          { title: 'Sprinkler Installation in Keller', href: '/keller/sprinkler-installation-services-in-keller-tx', icon: <Sprout className="h-6 w-6" /> },
          { title: 'Sprinkler Repair in Keller', href: '/keller/sprinkler-repair-services-in-keller-tx', icon: <Wrench className="h-6 w-6" /> },
          { title: 'System Check-Up in Keller', href: '/keller/sprinkler-system-check-up-services-in-keller-tx', icon: <ClipboardList className="h-6 w-6" /> },
          { title: 'System Reroutes in Keller', href: '/keller/sprinkler-system-reroutes-services-in-keller-tx', icon: <Repeat2 className="h-6 w-6" /> },
          { title: 'Drip Irrigation in Keller', href: '/keller/drip-irrigation-services-in-keller-tx', icon: <Droplet className="h-6 w-6" /> },
          { title: 'Irrigation Repair in Keller', href: '/keller/irrigation-repair-services-in-keller-tx', icon: <Wrench className="h-6 w-6" /> },
        ]}
      />

      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="We provide fast, professional irrigation repairs throughout the Fort Worth metroplex"
          />
        </div>
      </section>

      <CTA
        title="Need Irrigation Repair in Keller?"
        subtitle="Call now or request a free estimate—our licensed technicians are ready to help."
        buttonText="Request Repair"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
