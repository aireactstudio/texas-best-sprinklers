import Script from "next/script";
import React from "react";
import { getLocationData } from "@/data/locationData";
import { ClipboardCheck } from "lucide-react";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import ServiceAreaLocator from "@/components/ServiceAreaLocator";
import CTA from "@/components/CTA";
import { ServiceType } from "@/data/serviceTypes";

export const metadata = {
  title: "Sprinkler System Check-Up in Keller, TX | Texas Best Sprinklers",
  description:
    "Comprehensive sprinkler system check-ups in Keller, TX. Seasonal tune-ups, controller optimization, coverage adjustments, and leak prevention.",
};

export default function Page() {
  const { name } = getLocationData("keller");

  const faq = [
    {
      q: "What does a check-up include?",
      a: "We inspect every zone, adjust heads and arcs, clean/clogged nozzles, test valves and sensors, check for leaks, and optimize controller programming.",
    },
    {
      q: "How often should I schedule one?",
      a: "At least twice a year—spring start-up and fall optimization. Additional visits during drought or after landscape changes are recommended.",
    },
    {
      q: "Do you set seasonal watering schedules?",
      a: "Yes. We program zone runtimes and cycle-and-soak to minimize runoff and comply with local watering guidelines.",
    },
    {
      q: "Can you add drip zones during a check-up?",
      a: "We can quote and add drip zones or upgrades during the same visit if requested.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sprinkler System Check-Up in Keller, TX",
    areaServed: { "@type": "City", name: "Keller", address: { "@type": "PostalAddress", addressRegion: "TX" } },
    provider: { "@type": "LocalBusiness", name: "Texas Best Sprinklers" },
    serviceType: "Sprinkler System Check-Up",
  } as const;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } as const;

  // Breadcrumbs
  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: name, item: `/keller` },
      { "@type": "ListItem", position: 3, name: "Sprinkler System Check-Up" }
    ]
  } as const;

  // Process (HowTo)
  const processSteps = [
    { name: "Controller Review", text: "Verify date/time, seasonal adjust, sensor status, and program structure." },
    { name: "Zone-by-Zone Inspection", text: "Run each zone to check pressure, leaks, rotation, and coverage." },
    { name: "Adjust & Clean", text: "Clean clogged nozzles, adjust arcs, and correct head height/tilt for even watering." },
    { name: "System Health", text: "Check valves, backflow, filters, and visible piping for issues." },
    { name: "Optimize Schedule", text: "Set efficient runtimes and cycle-and-soak tailored to North Texas conditions." }
  ];
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Sprinkler System Check-Up Process",
    step: processSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text }))
  } as const;

  // Related services
  const relatedServices = [
    { name: "Sprinkler Repair", url: "/keller/sprinkler-repair-services-in-keller-tx" },
    { name: "Irrigation Repair", url: "/keller/irrigation-repair-services-in-keller-tx" },
    { name: "Sprinkler Installation", url: "/keller/sprinkler-installation-services-in-keller-tx" }
  ];
  const relatedLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: relatedServices.map((s, idx) => ({ "@type": "ListItem", position: idx + 1, url: s.url, name: s.name }))
  } as const;

  const serviceProps = {
    serviceType: ServiceType.MAINTENANCE,
    title: `Sprinkler System Check-Up in ${name}, TX`,
    description:
      "Seasonal inspections and optimizations to keep your sprinkler system efficient, compliant, and ready for North Texas weather.",
    icon: <ClipboardCheck size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Full zone-by-zone inspection",
      "Head and nozzle adjustments",
      "Controller programming optimization",
      "Leak detection and minor repairs",
      "Coverage tuning for healthy turf",
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <Script id="ld-service-checkup-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="ld-faq-checkup-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-breadcrumbs-checkup-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <Script id="ld-howto-checkup-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <Script id="ld-related-checkup-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedLd) }} />

      <div>
        {/* Breadcrumbs (visible) */}
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-6">
          <ol className="flex gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="/keller" className="hover:underline">{name}</a></li>
            <li>/</li>
            <li className="text-slate-900">Sprinkler System Check-Up</li>
          </ol>
        </nav>

      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">What We Check</h2>
        <ul className="list-disc pl-5 text-gray-800 leading-relaxed text-lg space-y-2">
          <li>Controller settings, dates, sensors, and seasonal adjust</li>
          <li>Each zone for pressure, coverage, leaks, and proper rotation</li>
          <li>Nozzle cleaning and matched precipitation adjustments</li>
          <li>Valves, backflow, filters, and visible piping</li>
          <li>Recommendations for upgrades or efficiency improvements</li>
        </ul>
      </div>

      {/* Process section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Our Check-Up Process</h2>
        <ol className="list-decimal pl-5 text-gray-800 leading-relaxed text-lg space-y-2">
          {processSteps.map((s) => (
            <li key={s.name}><span className="font-semibold">{s.name}:</span> {s.text}</li>
          ))}
        </ol>
      </div>

      {/* Related services */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Related Services in {name}</h2>
        <ul className="list-disc pl-5 text-gray-800 leading-relaxed text-lg space-y-2">
          {relatedServices.map((s) => (
            <li key={s.url}><a className="text-irrigation-blue hover:underline" href={s.url}>{s.name}</a></li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">Frequently Asked Questions</h2>
        <dl className="divide-y divide-slate-200 bg-white rounded-lg shadow p-0 ring-1 ring-black/5">
          {faq.map((f) => (
            <div key={f.q} className="p-5">
              <dt className="font-semibold text-slate-900">{f.q}</dt>
              <dd className="mt-2 text-slate-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Close wrapper around breadcrumbs/sections */}
      </div>

      <div className="mt-20">
        <ServiceAreaLocator title="Our Service Areas" subtitle={`Seasonal check-ups available across ${name} and surrounding areas`} />
      </div>

      <div className="mt-12 mb-20">
        <CTA title="Schedule a System Check-Up" subtitle={`Keep your system efficient in ${name}—book your seasonal tune-up today.`} />
      </div>
    </ServicePageLayout>
  );
}
