import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Hammer } from 'lucide-react';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

const OG_IMAGE =
  'https://sprinkleranddrains.com/assets/images/optimized/hardscaping1.jpeg';

export const metadata: Metadata = {
  title: 'Hardscaping — Concrete Slabs, Retaining Walls & More | Texas Best Sprinklers',
  description:
    'Professional hardscaping services in Fort Worth and surrounding DFW cities. Concrete patios, slabs, retaining walls, walkways, steps, and more.',
  openGraph: {
    title: 'Hardscaping — Concrete Slabs, Retaining Walls & More | Texas Best Sprinklers',
    description:
      'Hardscaping is the built part of your yard—concrete, stone, and block for patios, retaining walls, walks, and bed borders. Learn how proper grading, drainage, and materials matter in North Texas, and how we coordinate hardscape with irrigation.',
    url: 'https://sprinkleranddrains.com/services/hardscaping',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        alt: 'Professional hardscaping: stone tree ring and landscape borders at a North Texas home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hardscaping — Concrete Slabs, Retaining Walls & More | Texas Best Sprinklers',
    description:
      'Hardscaping is the built part of your yard—concrete, stone, and block for patios, retaining walls, walks, and bed borders. How grading, drainage, and irrigation work together in DFW.',
    images: [OG_IMAGE],
  },
};

export default function HardscapingPage() {
  const serviceProps = {
    serviceType: 'hardscaping',
    title: 'Hardscaping — Concrete & Masonry',
    description:
      'Professional concrete and masonry hardscaping for Fort Worth and surrounding North Texas properties. We install concrete slabs, patios, retaining walls, walkways, steps, and landscape borders that add structure, curb appeal, and lasting value to your outdoor space.',
    icon: <Hammer size={32} className="text-white" />,
    image: '/assets/images/optimized/hardscaping1.jpeg',
    features: [
      'Concrete slabs — patios, garage pads, utility areas',
      'Retaining walls — block, concrete, and natural stone',
      'Walkways and sidewalks with clean, finished edges',
      'Concrete steps and stairways',
      'Landscape borders and curbing',
      'Raised planter beds and garden borders',
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <div>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Recent hardscaping work</h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-6">
            Stone tree rings, raised bed borders, and landscape masonry that ties your yard together—built to match your home
            and hold up in North Texas weather.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/images/optimized/hardscaping1.jpeg"
                  alt="Residential hardscaping: circular stone tree ring and curved garden bed border along a brick home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-gray-600">
                Circular stone planter and matching foundation bed border
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/images/optimized/hardscaping2.jpeg"
                  alt="Residential hardscaping: stone retaining borders and mulched beds in a front yard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-gray-600">
                Coordinated stonework with mulch beds and clean lawn transitions
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Concrete Slabs & Patios</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            A well-poured concrete slab is the foundation for a usable outdoor space. Whether you need a backyard patio for
            entertaining, a side-yard utility pad, a driveway extension, or a covered garage slab, we design and pour concrete
            that is properly graded, reinforced, and finished to last in North Texas conditions. We account for slope and drainage
            from the start so water moves away from your home and off the slab correctly.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Retaining Walls</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Retaining walls solve real problems — stopping erosion, leveling a sloped yard, creating usable tiers in your
            landscape, and protecting structures from soil movement. We build retaining walls using concrete block, poured
            concrete, and natural stone depending on your site conditions and design goals. Every wall is engineered to handle
            the load and water pressure behind it, with proper drainage backer to prevent hydrostatic buildup.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Walkways, Steps & Stairways</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Concrete walkways and steps add both function and polish to your property. We install front entry walkways,
            backyard paths, garden steps, and exterior stairways with consistent width, clean edges, and proper slope so they
            stay safe and drain well through every Texas rain. We can match your existing slab color and finish or choose a
            new broom, exposed aggregate, or stamped texture.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Landscape Borders & Curbing</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Concrete landscape borders and curbing define bed lines, reduce edging maintenance, and keep mulch and rock where
            it belongs. We install continuous pour curbing along driveways, garden beds, and tree rings for a clean, finished
            look that holds up year after year without shifting or heaving.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Hardscaping + Irrigation — Better Together</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Because we specialize in irrigation and drainage, we coordinate hardscaping work with your sprinkler system from the
            start. New patios and slabs need heads rerouted or adjusted so coverage stays complete. Retaining walls often need
            drainage tied in to prevent soil saturation behind them. When we handle both, you avoid doing the same work twice
            and get a finished project where every system works together.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">Benefits of Professional Hardscaping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Increased Property Value</h3>
              <p className="text-gray-800">
                Well-designed concrete work and retaining walls add lasting value and curb appeal to any North Texas home.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Erosion & Drainage Control</h3>
              <p className="text-gray-800">
                Retaining walls and graded slabs stop soil movement and direct water away from your foundation and high-traffic areas.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Low Maintenance</h3>
              <p className="text-gray-800">
                Properly poured and finished concrete requires minimal upkeep compared to wood decking or loose gravel surfaces.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">More Usable Outdoor Space</h3>
              <p className="text-gray-800">
                Patios, walkways, and tiered walls turn sloped or unusable areas into functional, enjoyable parts of your yard.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Hardscaping services in your area
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            We provide professional concrete and hardscaping services throughout the Fort Worth metroplex and surrounding North Texas communities.
          </p>
          <div className="bg-white border border-gray-100 rounded-lg px-6 py-5 shadow-sm">
            <ul className="divide-y divide-gray-100">
              {[
                ['Fort Worth', 'fort-worth'],
                ['Keller', 'keller'],
                ['Southlake', 'southlake'],
                ['Weatherford', 'weatherford'],
                ['Colleyville', 'colleyville'],
                ['Grapevine', 'grapevine'],
              ].map(([city, slug]) => (
                <li key={slug} className="py-3 flex items-center justify-between">
                  <Link
                    href={`/${slug}`}
                    className="text-irrigation-darkBlue hover:text-irrigation-blue font-medium"
                  >
                    Hardscaping services in {city}, TX
                  </Link>
                  <span className="text-sm text-gray-400">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">Hardscaping FAQ</h2>
          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="text-xl font-semibold mb-2">What hardscaping services do you offer?</h3>
              <p>
                We install concrete slabs, patios, retaining walls, walkways, steps, stairways, landscape borders, and curbing.
                We work with concrete, concrete block, and natural stone depending on the project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you handle drainage with retaining walls?</h3>
              <p>
                Yes. Proper drainage behind a retaining wall is critical to prevent hydrostatic pressure and wall failure. We
                include drainage aggregate and, where needed, perforated pipe to manage water behind every wall we build.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Will a new patio or slab affect my sprinkler system?</h3>
              <p>
                It can. New hardscape often requires rerouting or capping heads in the covered area and adjusting neighboring
                zones for coverage. Since we specialize in irrigation, we handle those adjustments as part of the project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What areas do you serve for hardscaping?</h3>
              <p>
                We serve Fort Worth, Weatherford, and surrounding DFW cities including Keller, Southlake, Colleyville,
                Grapevine, and more. Contact us to confirm availability in your area.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer free estimates?</h3>
              <p>
                Yes. We provide free on-site estimates for all hardscaping projects. Contact us to schedule a visit and we will
                assess your site and provide a detailed quote.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-irrigation-gray">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="Hardscaping, concrete slabs, retaining walls, and masonry services across Fort Worth, Keller, Southlake, Colleyville, Grapevine, Weatherford, and nearby cities"
          />
        </div>
      </section>

      <CTA
        title="Ready to Add Hardscaping to Your Property?"
        subtitle="Get a free estimate on concrete patios, slabs, retaining walls, walkways, and more. We coordinate with your irrigation and drainage systems for a seamless project."
        buttonText="Request Your Free Estimate"
        buttonLink="/contact"
      />

      <script
        id="ld-service-hardscaping"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Hardscaping — Concrete Slabs, Retaining Walls & More',
            serviceType: 'Hardscaping',
            areaServed: [
              'Fort Worth',
              'Arlington',
              'Keller',
              'Southlake',
              'Colleyville',
              'Grapevine',
              'Weatherford',
            ],
            provider: {
              '@type': 'LocalBusiness',
              name: 'Texas Best Sprinklers',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '10011 Harmon Rd suite 133',
                addressLocality: 'Fort Worth',
                addressRegion: 'TX',
                postalCode: '76177',
                addressCountry: 'US',
              },
            },
            brand: {
              '@type': 'Brand',
              name: 'Texas Best Sprinklers',
            },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
            },
            category: 'HomeAndConstructionBusiness',
            image: [
              'https://sprinkleranddrains.com/assets/images/optimized/hardscaping1.jpeg',
              'https://sprinkleranddrains.com/assets/images/optimized/hardscaping2.jpeg',
            ],
          }),
        }}
      />

      <script
        id="ld-faq-hardscaping"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What hardscaping services do you offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We install concrete slabs, patios, retaining walls, walkways, steps, stairways, landscape borders, and curbing.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you handle drainage with retaining walls?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We include drainage aggregate and perforated pipe where needed to manage water pressure behind every retaining wall we build.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will a new patio or slab affect my sprinkler system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'New hardscape often requires rerouting or capping heads. Since we specialize in irrigation, we handle those adjustments as part of the hardscaping project.',
                },
              },
              {
                '@type': 'Question',
                name: 'What areas do you serve for hardscaping?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We serve Fort Worth, Weatherford, and surrounding DFW cities including Keller, Southlake, Colleyville, Grapevine, and more.',
                },
              },
            ],
          }),
        }}
      />
    </ServicePageLayout>
  );
}
