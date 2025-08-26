import Script from "next/script";
import React from "react";
import { getLocationData } from "@/data/locationData";
import { Sprout } from "lucide-react";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import ServiceAreaLocator from "@/components/ServiceAreaLocator";
import CTA from "@/components/CTA";
import { ServiceType } from "@/data/serviceTypes";

export const metadata = {
  title: "Drip Irrigation in Keller, TX | Texas Best Sprinklers",
  description:
    "Efficient drip irrigation in Keller, TX for beds, foundations, and water-wise landscapes. Reduce runoff, target roots, and meet watering guidelines.",
};

export default function Page() {
  const { name } = getLocationData("keller");

  const faq = [
    {
      q: "Where is drip irrigation best used?",
      a: "Beds, foundation perimeters, trees, and narrow strips where sprays overshoot. Drip delivers water directly to the root zone.",
    },
    {
      q: "Will drip help with water restrictions?",
      a: "Yes. Drip is efficient and often subject to more flexible watering rules than sprays. We’ll program cycle-and-soak schedules to minimize runoff.",
    },
    {
      q: "Do you convert existing spray zones to drip?",
      a: "We can convert zones with pressure regulation, filtration, and proper emitters/tubing to match plant needs.",
    },
    {
      q: "How is maintenance handled?",
      a: "We add filters and pressure regulators, and we show you simple checks to keep the system running efficiently.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drip Irrigation in Keller, TX",
    areaServed: { "@type": "City", name: "Keller", address: { "@type": "PostalAddress", addressRegion: "TX" } },
    provider: { "@type": "LocalBusiness", name: "Texas Best Sprinklers" },
    serviceType: "Drip Irrigation",
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
      { "@type": "ListItem", position: 3, name: "Drip Irrigation" }
    ]
  } as const;

  // Process (HowTo)
  const processSteps = [
    { name: "Evaluate Beds & Trees", text: "Identify plant types, sun exposure, and root zones to size emitters correctly." },
    { name: "Design & Materials", text: "Specify pressure regulation, filtration, emitter spacing/flow, and tubing layout." },
    { name: "Install & Convert", text: "Convert spray zones where needed and run drip laterals with clean staking and transitions." },
    { name: "Program Controller", text: "Set cycle-and-soak schedules appropriate for drip and local guidelines." },
    { name: "Walkthrough & Tips", text: "Show filter cleaning, seasonal tweaks, and simple maintenance checks." }
  ];
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Drip Irrigation Process",
    step: processSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text }))
  } as const;

  // Related services ItemList
  const relatedServices = [
    { name: "Sprinkler Installation", url: "/keller/sprinkler-installation-services-in-keller-tx" },
    { name: "Sprinkler Repair", url: "/keller/sprinkler-repair-services-in-keller-tx" },
    { name: "Sprinkler System Check-Up", url: "/keller/sprinkler-system-check-up-services-in-keller-tx" }
  ];
  const relatedLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: relatedServices.map((s, idx) => ({ "@type": "ListItem", position: idx + 1, url: s.url, name: s.name }))
  } as const;

  const serviceProps = {
    serviceType: ServiceType.IRRIGATION,
    title: `Drip Irrigation in ${name}, TX`,
    description:
      "Water-wise drip systems for beds and foundations that reduce runoff and put water exactly where plants need it.",
    icon: <Sprout size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Drip conversions for beds and narrow areas",
      "Pressure regulation and filtration",
      "Targeted emitters for shrubs and trees",
      "Controller programming optimized for drip",
      "Clean installation and walkthrough",
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <Script id="ld-service-drip-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="ld-faq-drip-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-breadcrumbs-drip-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <Script id="ld-howto-drip-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <Script id="ld-related-drip-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedLd) }} />

      <div>
        {/* Breadcrumbs (visible) */}
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-6">
          <ol className="flex gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="/keller" className="hover:underline">{name}</a></li>
            <li>/</li>
            <li className="text-slate-900">Drip Irrigation</li>
          </ol>
        </nav>

      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Why Choose Drip Irrigation</h2>
        <ul className="list-disc pl-5 text-gray-800 leading-relaxed text-lg space-y-2">
          <li>Delivers water at the root zone for healthier plants</li>
          <li>Reduces evaporation and overspray onto sidewalks and fences</li>
          <li>Supports water restrictions with efficient application</li>
          <li>Ideal for flower beds, shrubs, trees, and foundation watering</li>
        </ul>
      </div>

      {/* Process section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Our Drip Installation Process</h2>
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
        <ServiceAreaLocator title="Our Service Areas" subtitle={`Drip irrigation services across ${name} and surrounding communities`} />
      </div>

      <div className="mt-12 mb-20">
        <CTA title="Upgrade to Drip Irrigation" subtitle={`Make your landscape more efficient in ${name}—request a consultation.`} />
      </div>
    </ServicePageLayout>
  );
}
