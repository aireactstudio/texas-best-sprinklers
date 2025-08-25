import Script from "next/script";
import React from "react";
import { getLocationData } from "@/data/locationData";
import { Wrench } from "lucide-react";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import ServiceAreaLocator from "@/components/ServiceAreaLocator";
import CTA from "@/components/CTA";
import { ServiceType } from "@/data/serviceTypes";

export const metadata = {
  title: "Irrigation Repair in Keller, TX | Texas Best Sprinklers",
  description:
    "Fast, reliable irrigation repair in Keller, TX. We fix leaks, broken heads, wiring issues, valves, controllers, and low pressure problems—done right the first time.",
};

export default function Page() {
  const { name } = getLocationData("keller");

  const faq = [
    {
      q: "Do you repair all brands of controllers and valves?",
      a: "Yes. We service most major irrigation brands and can replace obsolete components with modern, compatible parts.",
    },
    {
      q: "My system has low pressure—what causes it?",
      a: "Common issues include partially closed valves, leaks, clogged filters/nozzles, or a failing pressure regulator. We diagnose and correct the root cause.",
    },
    {
      q: "Can you locate wiring faults?",
      a: "We use diagnostic tools to trace control wire shorts and breaks, then repair splices and replace damaged sections as needed.",
    },
    {
      q: "Do you offer same‑week service in Keller?",
      a: "In most cases yes. During peak season we prioritize active leaks and non‑functional systems to prevent landscape damage.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Irrigation Repair in Keller, TX",
    areaServed: { "@type": "City", name: "Keller", address: { "@type": "PostalAddress", addressRegion: "TX" } },
    provider: { "@type": "LocalBusiness", name: "Texas Best Sprinklers" },
    serviceType: "Irrigation Repair",
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
      { "@type": "ListItem", position: 3, name: "Irrigation Repair" }
    ]
  } as const;

  // Process (HowTo)
  const processSteps = [
    { name: "Initial Assessment", text: "Discuss symptoms and run zones to observe issues (leaks, pressure, coverage)." },
    { name: "Diagnostics", text: "Test valves, wiring continuity, controller outputs, and check for clogs or breaks." },
    { name: "Repairs", text: "Replace failed components (heads, nozzles, valves, fittings) and fix wiring faults." },
    { name: "Optimization", text: "Adjust heads for coverage and tune pressure/flow where needed." },
    { name: "System Check", text: "Full run-through and final settings review." }
  ];
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Irrigation Repair Process",
    step: processSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text }))
  } as const;

  // Related services
  const relatedServices = [
    { name: "Sprinkler Repair", url: "/keller/sprinkler-repair-services-in-keller-tx" },
    { name: "Sprinkler System Check-Up", url: "/keller/sprinkler-system-check-up-services-in-keller-tx" },
    { name: "Sprinkler Installation", url: "/keller/sprinkler-installation-services-in-keller-tx" }
  ];
  const relatedLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: relatedServices.map((s, idx) => ({ "@type": "ListItem", position: idx + 1, url: s.url, name: s.name }))
  } as const;

  const serviceProps = {
    serviceType: ServiceType.IRRIGATION_REPAIR,
    title: `Irrigation Repair in ${name}, TX`,
    description:
      "Expert diagnostics and repairs for leaks, wiring faults, broken heads, stuck valves, coverage issues, and more—optimized for North Texas systems.",
    icon: <Wrench size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Rapid leak detection and fix",
      "Controller, sensor, and wiring diagnostics",
      "Valve, head, and nozzle replacement",
      "Pressure and coverage optimization",
      "Full system check after repairs",
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <Script id="ld-service-irrigation-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="ld-faq-irrigation-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-breadcrumbs-irrigation-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <Script id="ld-howto-irrigation-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <Script id="ld-related-irrigation-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedLd) }} />

      <div>
        {/* Breadcrumbs (visible) */}
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-6">
          <ol className="flex gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="/keller" className="hover:underline">{name}</a></li>
            <li>/</li>
            <li className="text-slate-900">Irrigation Repair</li>
          </ol>
        </nav>

        <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Common Problems We Solve</h2>
        <ul className="list-disc pl-5 text-gray-800 leading-relaxed text-lg space-y-2">
          <li>Broken heads, risers, and fittings</li>
          <li>Valve failures causing zones not to run or to run continuously</li>
          <li>Electrical shorts, cut wires, and faulty splices</li>
          <li>Coverage issues leading to dry spots or overspray</li>
          <li>Low pressure or clogged filters/nozzles</li>
        </ul>
      </div>

      {/* Process section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Our Repair Process</h2>
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
        <ServiceAreaLocator title="Our Service Areas" subtitle={`Reliable irrigation repairs across Keller and nearby communities`} />
      </div>

      <div className="mt-12 mb-20">
        <CTA title="Need Irrigation Repairs?" subtitle="Get fast, professional service in Keller—request your appointment today." />
      </div>
    </ServicePageLayout>
  );
}
