import type { Metadata } from 'next';
import { Trees } from 'lucide-react';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Landscaping Installation | Texas Best Sprinklers',
  description:
    'Professional landscaping installation services in Fort Worth and surrounding North Texas cities, including hardscape construction, retaining walls, sod installation, softscape design, and water features.',
  openGraph: {
    title: 'Landscaping Installation | Texas Best Sprinklers',
    description:
      'Upgrade your outdoor space with complete landscaping installation services built for North Texas homes.',
    url: 'https://sprinkleranddrains.com/services/landscaping-installation',
    type: 'website',
  },
};

const landscapingServices = [
  {
    title: 'Hardscape Construction',
    description:
      'Build structure and function into your yard with patios, walkways, concrete pads, and decorative borders designed to hold up in North Texas weather.',
  },
  {
    title: 'Retaining Walls',
    description:
      'Control elevation changes, reduce erosion, and create cleaner transitions in sloped areas with professionally installed retaining walls.',
  },
  {
    title: 'Sod Installation',
    description:
      'Get an instantly greener lawn with professionally installed sod, proper base prep, and watering guidance for healthy root establishment.',
  },
  {
    title: 'Softscape Design',
    description:
      'Enhance curb appeal with thoughtfully planned plant beds, shrubs, trees, mulch, and seasonal color selected for your property and sun exposure.',
  },
  {
    title: 'Water Features',
    description:
      'Add movement and ambiance to your landscape with custom water features that complement your layout and outdoor living spaces.',
  },
];

export default function LandscapingInstallationPage() {
  const serviceProps = {
    serviceType: 'landscaping-installation',
    title: 'Landscaping Installation',
    description:
      'Complete landscape installation services tailored to your property goals, from structural hardscape elements to living plant design and finishing features.',
    icon: <Trees size={32} className="text-white" />,
    image: '/assets/images/optimized/hero-background.webp',
    features: landscapingServices.map((service) => service.title),
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue">
          Our Landscaping Installation Services
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">
          Texas Best Sprinklers provides full-service landscaping installation for homeowners across the Fort Worth area. Whether you are refreshing one section of your yard or building a complete outdoor environment, we install every layer with long-term performance in mind.
        </p>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {landscapingServices.map((service) => (
          <article key={service.title} className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold text-irrigation-darkBlue">{service.title}</h3>
            <p className="mt-3 text-gray-800">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-xl border border-irrigation-blue/20 bg-irrigation-gray p-6 md:p-8">
        <h2 className="text-2xl font-bold text-irrigation-blue">Built to Work with Irrigation & Drainage</h2>
        <p className="mt-4 text-gray-800 leading-relaxed">
          Because irrigation and drainage are our core specialties, we design landscaping installs so your lawn, planting zones, hardscape areas, and water flow all work together. That helps prevent costly rework and gives you a cleaner, longer-lasting result.
        </p>
      </section>

      <CTA
        title="Ready to Plan Your Landscaping Installation?"
        subtitle="Tell us what you want to build, and we will put together a landscaping plan tailored to your home and budget."
        buttonText="Request a Landscaping Quote"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
