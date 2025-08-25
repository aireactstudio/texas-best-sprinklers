import Script from "next/script";
import React from "react";
import { getLocationData } from "@/data/locationData";
import { CloudRain } from "lucide-react";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import ServiceAreaLocator from "@/components/ServiceAreaLocator";
import CTA from "@/components/CTA";
import { ServiceType } from "@/data/serviceTypes";

export const metadata = {
  title: "Sprinkler Installation in Keller, TX | Texas Best Sprinklers",
  description:
    "Professional sprinkler installation in Keller, TX. Custom-designed irrigation systems for North Texas clay soils and water restrictions. Efficient coverage, smart controllers, and clean installs.",
};

export default function Page() {
  const { name, neighborhoods } = getLocationData("keller");

  const faq = [
    {
      q: "How do you design systems for Keller's clay soil?",
      a: "We space heads and select nozzles to prevent runoff, use cycle-and-soak programming, and incorporate pressure regulation to handle North Texas clay soils common in Keller.",
    },
    {
      q: "Can you install smart Wi‑Fi controllers?",
      a: "Yes. We install smart controllers with seasonal adjust and rain/soil sensors, allowing efficient watering that complies with local restrictions.",
    },
    {
      q: "Do you pull permits or handle backflow requirements?",
      a: "Where required, we coordinate permits and ensure approved backflow assemblies are installed and tested per municipal standards.",
    },
    {
      q: "How long does a typical install take?",
      a: "Most residential installs are completed in 1 day; larger or complex lots may take 2–3 days. We protect turf and hardscapes during trenching and clean thoroughly after.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sprinkler Installation in Keller, TX",
    areaServed: { "@type": "City", name: "Keller", address: { "@type": "PostalAddress", addressRegion: "TX" } },
    provider: { "@type": "LocalBusiness", name: "Texas Best Sprinklers" },
    serviceType: "Irrigation System Installation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sprinkler Installation Packages",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Controller Setup" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure-Regulated Heads" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drip Zones for Beds" } },
      ],
    },
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
      { "@type": "ListItem", position: 3, name: "Sprinkler Installation" }
    ]
  } as const;

  // Process (HowTo)
  const processSteps = [
    { name: "Site Assessment", text: "Measure water pressure/flow, review zones, and note turf vs. beds and slopes." },
    { name: "Design & Quote", text: "Create a zone plan with head spacing, drip for beds, and controller selection." },
    { name: "Installation", text: "Trenching, manifold layout, pressure regulation, and careful head placement." },
    { name: "Programming", text: "Set cycle-and-soak schedules and label zones for easy management." },
    { name: "Walkthrough", text: "Test coverage, explain controls, and provide maintenance tips." }
  ];
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Sprinkler Installation Process",
    step: processSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text }))
  } as const;

  // Related services ItemList
  const relatedServices = [
    { name: "Irrigation Repair", url: "/keller/irrigation-repair-services-in-keller-tx" },
    { name: "Sprinkler System Check-Up", url: "/keller/sprinkler-system-check-up-services-in-keller-tx" },
    { name: "Sprinkler System Reroutes", url: "/keller/sprinkler-system-reroutes-services-in-keller-tx" }
  ];
  const relatedLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: relatedServices.map((s, idx) => ({ "@type": "ListItem", position: idx + 1, url: s.url, name: s.name }))
  } as const;

  const serviceProps = {
    serviceType: ServiceType.SPRINKLER_INSTALLATION,
    title: `Sprinkler Installation in ${name}, TX`,
    description:
      `Thoughtfully designed irrigation systems for Keller neighborhoods${neighborhoods?.length ? ` like ${neighborhoods.slice(0, 3).join(", ")}` : ""}. We optimize zoning, head spacing, and smart programming for North Texas conditions.`,
    icon: <CloudRain size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Custom zone layout for turf vs. beds",
      "Smart Wi‑Fi controllers with seasonal adjust",
      "Pressure‑regulated heads and matched precipitation",
      "Drip irrigation for foundation/beds",
      "Clean, low‑impact trenching and full system testing",
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <Script id="ld-service-install-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="ld-faq-install-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-breadcrumbs-install-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <Script id="ld-howto-install-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <Script id="ld-related-install-keller" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedLd) }} />

      <div>
        {/* Breadcrumbs (visible) */}
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-6">
          <ol className="flex gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="/keller" className="hover:underline">{name}</a></li>
            <li>/</li>
            <li className="text-slate-900">Sprinkler Installation</li>
          </ol>
        </nav>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Precision Irrigation for Keller Yards</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            From half‑acre lots to compact new builds, we tailor systems for coverage and efficiency. Our installs include proper trench depth, clean manifold layout, pressure regulation, and drip in beds to minimize overspray and runoff.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">What’s Included</h2>
          <ul className="list-disc pl-5 text-gray-800 leading-relaxed text-lg space-y-2">
            <li>Head-to-head coverage design and matched precipitation</li>
            <li>Smart controller installation and programming</li>
            <li>Pressure regulation and backflow compliance</li>
            <li>Drip zones for beds and foundation protection</li>
            <li>Final walkthrough with settings explained</li>
          </ul>
        </div>

        {/* Process section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Our Installation Process</h2>
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
      </div>

      <div className="mt-20">
        <ServiceAreaLocator
          title="Our Service Areas"
          subtitle={`Texas Best Sprinklers installs irrigation systems throughout Keller and nearby communities`}
        />
      </div>

      <div className="mt-12 mb-20">
        <CTA
          title="Get a Professional Sprinkler Installation"
          subtitle="Schedule a free estimate and system design consultation for your Keller home."
        />
      </div>
    </ServicePageLayout>
  );
}
