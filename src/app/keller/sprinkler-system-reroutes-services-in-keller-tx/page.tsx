import Script from "next/script";
import React from "react";
import { getLocationData } from "@/data/locationData";
import { Route } from "lucide-react";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import ServiceAreaLocator from "@/components/ServiceAreaLocator";
import CTA from "@/components/CTA";
import { ServiceType } from "@/data/serviceTypes";

export const metadata = {
  title: "Sprinkler System Reroutes in Keller, TX | Texas Best Sprinklers",
  description:
    "Professional sprinkler system reroutes in Keller, TX. Adjust zones for remodels, pools, patios, new beds, and landscape changes with clean, efficient results.",
};

export default function Page() {
  const { name } = getLocationData("keller");

  const faq = [
    {
      q: "When do I need a reroute?",
      a: "Any time you add a pool, patio, new beds, or change hardscapes that impact existing lines or head placement, a reroute aligns your system with the new layout.",
    },
    {
      q: "Can you add or split zones during a reroute?",
      a: "Yes. We can add, split, or combine zones for better control of turf vs. beds, sun vs. shade, and different plant water needs.",
    },
    {
      q: "Will you repair turf and minimize disruption?",
      a: "We use targeted trenching and careful backfill to reduce impact, and we clean up thoroughly when finished.",
    },
    {
      q: "Do you update the controller programming?",
      a: "We re-label zones and update run times to match the new design so you’re set from day one.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sprinkler System Reroutes in Keller, TX",
    areaServed: { "@type": "City", name: "Keller", address: { "@type": "PostalAddress", addressRegion: "TX" } },
    provider: { "@type": "LocalBusiness", name: "Texas Best Sprinklers" },
    serviceType: "Sprinkler System Reroutes",
  } as const;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } as const;

  const serviceProps = {
    serviceType: ServiceType.IRRIGATION,
    title: `Sprinkler System Reroutes in ${name}, TX`,
    description:
      "Reroute lines, relocate heads, and optimize zoning after landscape changes for efficient, even coverage.",
    icon: <Route size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Targeted trenching and clean reroutes",
      "Head relocation and spacing corrections",
      "Add/split zones for better control",
      "Controller reprogramming and zone labeling",
      "Final pressure test and coverage tune",
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <Script id="ld-service-reroutes-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="ld-faq-reroutes-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Ideal For</h2>
        <ul className="list-disc pl-5 text-gray-800 leading-relaxed text-lg space-y-2">
          <li>New pools, patios, pergolas, or walkways</li>
          <li>New landscape beds or turf removal</li>
          <li>Foundation drip additions and bed conversions</li>
          <li>Coverage issues after recent yard changes</li>
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

      <div className="mt-20">
        <ServiceAreaLocator title="Our Service Areas" subtitle={`Reroute services available across ${name} and surrounding areas`} />
      </div>

      <div className="mt-12 mb-20">
        <CTA title="Plan Your Reroute" subtitle={`Update your system for new projects in ${name}—request a quote today.`} />
      </div>
    </ServicePageLayout>
  );
}
