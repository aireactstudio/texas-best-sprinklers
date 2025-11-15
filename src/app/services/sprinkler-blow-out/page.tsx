'use client';

import { Settings } from 'lucide-react';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';
import Link from 'next/link';

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
          <ul className="list-disc pl-6 text-gray-800 leading-relaxed text-lg space-y-2">
            <li>Shut off water supply and isolate zones</li>
            <li>Use controlled compressor pressure to safely evacuate each zone</li>
            <li>Safeguard sensitive components like the backflow and valves</li>
            <li>Verify shut-down, inspect for leaks, and document any issues</li>
            <li>Provide notes for spring start-up</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Ideal Timing</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Schedule your blow out before the first hard freeze. If temps have already dropped, it’s still worth doing to minimize further risk throughout winter.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Related Services</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Want full system protection? See{' '}
            <Link href="/services/sprinkler-winterization" className="text-irrigation-blue hover:text-irrigation-darkBlue underline">Sprinkler Winterization</Link>
            {' '}or reach out on our{' '}
            <Link href="/contact" className="text-irrigation-blue hover:text-irrigation-darkBlue underline">contact page</Link>
            {' '}for a fast estimate.
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

      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">Sprinkler Blow Out FAQ</h2>
          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="text-xl font-semibold mb-2">Is a blow out safe for my irrigation system?</h3>
              <p>Yes—when done by trained pros using controlled compressor pressure. We evacuate water safely and protect sensitive components.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What happens if I skip a blow out?</h3>
              <p>Residual water can freeze and expand, cracking pipes and damaging valves and backflow devices—leading to expensive spring repairs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">When should I schedule?</h3>
              <p>Late fall before repeated freezes. It’s still beneficial even after temperatures drop to reduce ongoing risk.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you adjust my controller?</h3>
              <p>We shut systems down properly and provide simple notes so you’re ready for an easy spring start-up.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        id="ld-service-blowout"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Sprinkler Blow Out",
            serviceType: "Sprinkler Blow Out",
            areaServed: [
              "Fort Worth",
              "Arlington",
              "Keller",
              "Southlake",
              "Colleyville",
              "Grapevine",
              "Weatherford"
            ],
            provider: { "@type": "LocalBusiness", name: "Texas Best Sprinklers" },
            brand: { "@type": "Brand", name: "Texas Best Sprinklers" },
            offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
            category: "HomeAndConstructionBusiness"
          })
        }}
      />

      <script
        id="ld-faq-blowout"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is a blow out safe for my irrigation system?", acceptedAnswer: { "@type": "Answer", text: "Yes, when performed by trained technicians using controlled compressor pressure, blow outs are safe and effective." } },
              { "@type": "Question", name: "What happens if I skip a blow out?", acceptedAnswer: { "@type": "Answer", text: "Residual water can freeze and expand, cracking pipes and damaging valves and backflow devices, leading to costly repairs." } },
              { "@type": "Question", name: "When should I schedule?", acceptedAnswer: { "@type": "Answer", text: "Late fall before repeated freezes. It’s still helpful even after temperatures drop." } },
              { "@type": "Question", name: "Do you adjust my controller?", acceptedAnswer: { "@type": "Answer", text: "We shut down the system properly and provide notes for an easy spring start-up." } }
            ]
          })
        }}
      />

      <script
        id="ld-howto-blowout"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How a professional sprinkler blow out works",
            step: [
              { "@type": "HowToStep", name: "Shut off system", text: "Turn off irrigation water supply and isolate zones." },
              { "@type": "HowToStep", name: "Evacuate zones", text: "Use controlled air pressure to evacuate each zone safely." },
              { "@type": "HowToStep", name: "Protect components", text: "Safeguard backflow preventer and valves during the process." },
              { "@type": "HowToStep", name: "Verify and document", text: "Confirm shut-down and note any repairs for spring." }
            ]
          })
        }}
      />
    </ServicePageLayout>
  );
}
