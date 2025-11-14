'use client';

import { Settings } from 'lucide-react';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';
import Link from 'next/link';

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
            Winterization is more than a quick air purge. Our licensed techs isolate the system, safely evacuate water, and prepare your controller so pipes, valves, and backflow assemblies are protected during hard freezes across North Texas.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">What Our Winterization Service Includes</h2>
          <ul className="list-disc pl-6 text-gray-800 leading-relaxed text-lg space-y-2">
            <li>System shut-off and zone isolation</li>
            <li>Controlled air blow out of lateral lines and manifolds</li>
            <li>Backflow protection steps and valve safeguarding</li>
            <li>Controller settings adjusted for the off-season</li>
            <li>Recommendations for spring start-up and any repairs we spot</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Benefits</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Reduce the risk of burst pipes and costly repairs, avoid spring leaks, and extend the lifespan of your irrigation components with a professional sprinkler winterization. We tailor the process to your property and local freeze patterns.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">When To Winterize in DFW</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            In Fort Worth and nearby cities, book winterization in late fall before repeated hard freezes. If temperatures have already dipped, it’s still smart to winterize to minimize ongoing risk.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Related Cold-Weather Services</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Need a one-time winter prep or full system protection? Book a{' '}
            <Link href="/services/sprinkler-blow-out" className="text-irrigation-blue hover:text-irrigation-darkBlue underline">sprinkler blow out</Link>
            {' '}or request a quick{' '}
            <Link href="/contact" className="text-irrigation-blue hover:text-irrigation-darkBlue underline">estimate</Link>
            {' '}for your property in Fort Worth and nearby cities.
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
      
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">Sprinkler Winterization FAQ</h2>
          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="text-xl font-semibold mb-2">Do I really need to winterize in North Texas?</h3>
              <p>Yes. DFW sees hard freezes that can crack pipes, rupture backflow preventers, and damage valves. Proper winterization significantly reduces costly repairs in spring.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">When should I schedule winterization?</h3>
              <p>Late fall is ideal, before recurring freezes. If temperatures have already dropped, it’s still beneficial to winterize to minimize further risk.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is a blow out safe for my system?</h3>
              <p>When performed by trained techs with controlled pressure, blow outs are safe and effective at evacuating water from lines and manifolds.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Will you adjust my controller?</h3>
              <p>Yes. We set your controller for the off-season and provide simple notes so you’re ready for a smooth spring start-up.</p>
            </div>
          </div>
        </div>
      </section>
      
      <script
        id="ld-service-winterization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Sprinkler Winterization",
            serviceType: "Sprinkler Winterization",
            areaServed: [
              "Fort Worth",
              "Arlington",
              "Keller",
              "Southlake",
              "Colleyville",
              "Grapevine",
              "Weatherford"
            ],
            provider: {
              "@type": "LocalBusiness",
              name: "Texas Best Sprinklers"
            },
            brand: {
              "@type": "Brand",
              name: "Texas Best Sprinklers"
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock"
            },
            category: "HomeAndConstructionBusiness"
          })
        }}
      />
      
      <script
        id="ld-faq-winterization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I really need to winterize in North Texas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "DFW experiences hard freezes that can crack pipes, rupture backflow preventers, and damage valves. Proper winterization reduces costly repairs."
                }
              },
              {
                "@type": "Question",
                name: "When should I schedule winterization?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Late fall is ideal before recurring freezes. If temperatures have already dropped, it’s still beneficial to winterize."
                }
              },
              {
                "@type": "Question",
                name: "Is a blow out safe for my system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When performed by trained technicians with controlled pressure, blow outs are safe and effective."
                }
              },
              {
                "@type": "Question",
                name: "Will you adjust my controller?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We set the controller for the off-season and provide notes for a smooth spring start-up."
                }
              }
            ]
          })
        }}
      />
      
      <script
        id="ld-howto-winterization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to prepare your sprinkler system for winter",
            step: [
              { "@type": "HowToStep", name: "Shut off system", text: "Turn off the irrigation water supply and isolate zones." },
              { "@type": "HowToStep", name: "Evacuate lines", text: "Use controlled air pressure to blow out lateral lines and manifolds." },
              { "@type": "HowToStep", name: "Protect backflow and valves", text: "Follow manufacturer-safe steps to prevent freeze damage." },
              { "@type": "HowToStep", name: "Set controller for off-season", text: "Adjust schedules and note spring start-up recommendations." }
            ]
          })
        }}
      />
    </ServicePageLayout>
  );
}
