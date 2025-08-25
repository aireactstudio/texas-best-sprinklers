import Script from "next/script";
import React from "react";
import { getLocationData } from "@/data/locationData";
import { Droplet } from "lucide-react";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import ServiceAreaLocator from "@/components/ServiceAreaLocator";
import CTA from "@/components/CTA";
import { ServiceType } from "@/data/serviceTypes";

export const metadata = {
  title: "Sprinkler Repair in Keller, TX | Texas Best Sprinklers",
  description:
    "Trusted sprinkler repair in Keller, TX. We fix broken heads, leaks, stuck valves, wiring issues, and poor coverage—fully tested before we leave.",
};

export default function Page() {
  const { name } = getLocationData("keller");

  const faq = [
    {
      q: "Can you fix constant leaking around a head?",
      a: "Yes. Leaks often come from cracked fittings or debris in the valve. We repair the connection and flush the line to prevent recurrence.",
    },
    {
      q: "Why do some zones not pop up?",
      a: "Causes range from clogged nozzles and broken risers to low pressure or valve failures. We identify the root cause and correct it.",
    },
    {
      q: "Do you match precipitation for even watering?",
      a: "We replace mismatched nozzles and adjust spacing to provide head‑to‑head coverage and even precipitation rates.",
    },
    {
      q: "How quickly can you come to Keller?",
      a: "We aim for prompt scheduling and prioritize active leaks or non‑functional systems, especially during peak season.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sprinkler Repair in Keller, TX",
    areaServed: { "@type": "City", name: "Keller", address: { "@type": "PostalAddress", addressRegion: "TX" } },
    provider: { "@type": "LocalBusiness", name: "Texas Best Sprinklers" },
    serviceType: "Sprinkler Repair",
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
      { "@type": "ListItem", position: 3, name: "Sprinkler Repair" }
    ]
  } as const;

  // Process (HowTo)
  const processSteps = [
    { name: "Listen & Inspect", text: "Review symptoms, run affected zones, and visually inspect heads, valves, and piping." },
    { name: "Test Components", text: "Check controller outputs, wiring continuity, valve function, and pressure/flow." },
    { name: "Perform Repairs", text: "Replace broken heads/nozzles/risers, repair fittings, and service/replace valves as needed." },
    { name: "Tune Coverage", text: "Adjust arcs, spacing, and nozzles for matched precipitation and even watering." },
    { name: "Final System Check", text: "Run all repaired zones and review programming with the homeowner." }
  ];
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Sprinkler Repair Process",
    step: processSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text }))
  } as const;

  // Related services ItemList
  const relatedServices = [
    { name: "Irrigation Repair", url: "/keller/irrigation-repair-services-in-keller-tx" },
    { name: "Sprinkler System Check-Up", url: "/keller/sprinkler-system-check-up-services-in-keller-tx" },
    { name: "Sprinkler Installation", url: "/keller/sprinkler-installation-services-in-keller-tx" }
  ];
  const relatedLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: relatedServices.map((s, idx) => ({ "@type": "ListItem", position: idx + 1, url: s.url, name: s.name }))
  } as const;

  const serviceProps = {
    serviceType: ServiceType.SPRINKLER_REPAIR,
    title: `Sprinkler Repair in ${name}, TX`,
    description:
      "Professional sprinkler troubleshooting and repair for heads, valves, leaks, wiring, and coverage—optimized for North Texas systems.",
    icon: <Droplet size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Head, nozzle, and riser replacement",
      "Valve service and diagnostics",
      "Leak detection and pipe repairs",
      "Controller and sensor setup",
      "Full system run‑through and adjustments",
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <Script id="ld-service-sprinkler-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="ld-faq-sprinkler-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-breadcrumbs-sprinkler-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <Script id="ld-howto-sprinkler-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <Script id="ld-related-sprinkler-repair-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedLd) }} />

      <div>
        {/* Breadcrumbs (visible) */}
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-6">
          <ol className="flex gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="/keller" className="hover:underline">{name}</a></li>
            <li>/</li>
            <li className="text-slate-900">Sprinkler Repair</li>
          </ol>
        </nav>

      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Common Sprinkler Issues</h2>
        <ul className="list-disc pl-5 text-gray-800 leading-relaxed text-lg space-y-2">
          <li>Heads won’t pop up or rotate</li>
          <li>Gushers or leaks around heads or fittings</li>
          <li>Zones stuck on or won’t run</li>
          <li>Dry spots from poor coverage</li>
          <li>Controller, sensor, or wiring failures</li>
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
        <ServiceAreaLocator title="Our Service Areas" subtitle={`Sprinkler repairs across ${name} and nearby communities`} />
      </div>

      <div className="mt-12 mb-20">
        <CTA title="Book Sprinkler Repair" subtitle={`Restore your system in ${name}—request service today.`} />
      </div>
    </ServicePageLayout>
  );
}
