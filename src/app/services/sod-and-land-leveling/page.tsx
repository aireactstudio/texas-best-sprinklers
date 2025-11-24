'use client';

import Link from 'next/link';
import { Sprout } from 'lucide-react';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function SodAndLandLevelingPage() {
  const serviceProps = {
    serviceType: 'sod-and-land-leveling',
    title: 'SOD Installation & Land Leveling',
    description:
      'Professional SOD installation, grading, land leveling, and sanding/topdressing to create a smooth, healthy lawn that drains correctly and pairs perfectly with your irrigation system.',
    icon: <Sprout size={32} className="text-white" />,
    image: '/assets/images/optimized/hero-background.webp',
    features: [
      'Full tear-out, soil prep, and grading',
      'Precision land leveling and sanding/topdressing to fix low spots and pooling',
      'Fresh SOD installation for an instantly green lawn',
      'Integration with existing or new irrigation systems',
      'Drainage-friendly grading to move water away from the house',
      'Edge cleanup around driveways, patios, and beds',
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Start with a Clean, Level, Sanded Base</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            A great lawn is built, not guessed at. Before any new SOD goes down, we correct grading issues, remove old turf
            and debris, and shape the yard so water flows the right way. We then use sanding/topdressing to fine‑tune low
            areas and smooth out imperfections. That means fewer muddy spots, fewer standing‑water issues, and a healthier
            lawn that works with your irrigation system instead of against it.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Professional SOD Installation</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We install premium SOD that is matched to North Texas conditions and your specific site. Our team lays SOD in a
            staggered pattern, tight to seams and edges, then rolls and waters in the new lawn so it can start rooting
            quickly. We also make sure heads, valves, and zones are adjusted for the new turf so coverage is even from day
            one.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">Land Leveling & Drainage-Friendly Grading</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            North Texas clay soil and settling around the foundation can create low spots, trip hazards, and areas where
            water just will not drain. We use grading and land leveling to smooth out the lawn, correct slope away from the
            house, and tie into any existing drainage solutions. The goal is simple: water moves where it should, your lawn
            looks clean and finished, and your irrigation and drainage systems both work better.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">When to Choose SOD vs. Seed</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            For most Fort Worth and surrounding-area properties, SOD is the fastest and most reliable way to get a thick,
            even lawn. We typically recommend SOD when you are:
          </p>
          <ul className="list-disc pl-6 text-gray-800 leading-relaxed text-lg space-y-2 mt-3">
            <li>Renovating a tired or patchy yard and want an instant lawn.</li>
            <li>Fixing grading or drainage issues that require reworking the surface anyway.</li>
            <li>Finishing new construction and need a clean, move-in-ready yard.</li>
            <li>Trying to stop ongoing mud, erosion, or tracking dirt into the home.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">How SOD & Land Leveling Pair with Irrigation</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Because we specialize in irrigation, drainage, and outdoor systems, we make sure your new lawn and your sprinkler
            system are tuned to each other. During SOD and land-leveling projects we can adjust heads, update zones, and
            recommend any small drainage fixes while the ground is already open. That saves you time and prevents having to
            redo work later.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">Benefits of Professional SOD & Land Leveling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Instant Curb Appeal</h3>
              <p className="text-gray-800">
                Go from bare dirt or a patchy yard to an even, green lawn in a single project. Proper prep and grading help it
                stay that way.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Better Drainage</h3>
              <p className="text-gray-800">
                Correct slopes and low areas so water moves away from the home and high-traffic areas instead of pooling.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Healthier Lawn</h3>
              <p className="text-gray-800">
                Good soil contact, consistent depth, and proper irrigation coverage help your new SOD root faster and last
                longer.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Fewer Future Fixes</h3>
              <p className="text-gray-800">
                Handling grading, drainage considerations, and irrigation adjustments together reduces surprise problems down
                the road.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
          SOD installation & land leveling in your area
        </h2>
        <p className="text-gray-800 leading-relaxed mb-4">
          We provide professional SOD installation, land leveling, and sanding/topdressing in key North Texas communities. Select your city for details about local SOD and land leveling services.
        </p>
        <div className="bg-white border border-gray-100 rounded-lg px-6 py-5 shadow-sm">
          <ul className="divide-y divide-gray-100">
            <li className="py-2 flex items-center justify-between">
              <Link href="/fort-worth/sod-installation-and-land-leveling-in-fort-worth-tx" className="text-irrigation-darkBlue hover:text-irrigation-blue font-medium">
                SOD installation & land leveling in Fort Worth, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="py-2 flex items-center justify-between">
              <Link href="/keller/sod-installation-and-land-leveling-in-keller-tx" className="text-irrigation-darkBlue hover:text-irrigation-blue font-medium">
                SOD installation & land leveling in Keller, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="py-2 flex items-center justify-between">
              <Link href="/haslet/sod-installation-and-land-leveling-in-haslet-tx" className="text-irrigation-darkBlue hover:text-irrigation-blue font-medium">
                SOD installation & land leveling in Haslet, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="py-2 flex items-center justify-between">
              <Link href="/westlake/sod-installation-and-land-leveling-in-westlake-tx" className="text-irrigation-darkBlue hover:text-irrigation-blue font-medium">
                SOD installation & land leveling in Westlake, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="py-2 flex items-center justify-between">
              <Link href="/argyle/sod-installation-and-land-leveling-in-argyle-tx" className="text-irrigation-darkBlue hover:text-irrigation-blue font-medium">
                SOD installation & land leveling in Argyle, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="py-2 flex items-center justify-between">
              <Link href="/weatherford/sod-installation-and-land-leveling-in-weatherford-tx" className="text-irrigation-darkBlue hover:text-irrigation-blue font-medium">
                SOD installation & land leveling in Weatherford, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="SOD installation and land-leveling services across Fort Worth, Arlington, Keller, Southlake, Colleyville, Grapevine, Weatherford, and nearby cities"
          />
        </div>
      </section>

      <CTA
        title="Ready for a Level, Green Lawn?"
        subtitle="Schedule a SOD and land-leveling estimate and get a plan that accounts for grading, drainage, and irrigation."
        buttonText="Request Your Estimate"
        buttonLink="/contact"
      />

      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">SOD & Land Leveling FAQ</h2>
          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="text-xl font-semibold mb-2">How long does new SOD take to root?</h3>
              <p>
                In North Texas, most SOD begins to root within 2 to 3 weeks with proper watering. We provide basic watering
                guidance so you know what to expect for the first month.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can you fix low spots and standing water before installing SOD?</h3>
              <p>
                Yes. Land leveling and grading are a core part of this service. We correct low spots and reshape the yard so
                water drains away from the home and high-use areas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you coordinate SOD installation with irrigation work?</h3>
              <p>
                We do. Because irrigation is one of our main services, we can adjust heads and zones during the project so your
                new lawn gets consistent coverage without overspray.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What areas do you serve for SOD and land leveling?</h3>
              <p>
                We serve Fort Worth, Weatherford, and surrounding cities including Arlington, Keller, Southlake, Colleyville,
                and Grapevine. If you are nearby, reach out and we will let you know if you are in our service area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <script
        id="ld-service-sod-land-leveling"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'SOD Installation & Land Leveling',
            serviceType: 'SOD Installation & Land Leveling',
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
          }),
        }}
      />

      <script
        id="ld-faq-sod-land-leveling"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How long does new SOD take to root?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most SOD in North Texas begins to root within 2 to 3 weeks with proper watering and care.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you fix low spots and standing water before installing SOD?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Land leveling and grading are included so we can correct low spots and shape the yard for better drainage before SOD goes down.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you coordinate SOD installation with irrigation work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We specialize in irrigation and can adjust heads, zones, and coverage as part of your SOD and land-leveling project.',
                },
              },
              {
                '@type': 'Question',
                name: 'What areas do you serve for SOD and land leveling?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We serve Fort Worth, Weatherford, and surrounding cities including Arlington, Keller, Southlake, Colleyville, and Grapevine.',
                },
              },
            ],
          }),
        }}
      />
    </ServicePageLayout>
  );
}
