import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Sprout,
  Tractor,
  Shovel,
  Layers,
  Droplets,
  CheckCircle2,
  Ruler,
  Mountain,
} from 'lucide-react';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

const BOBCAT_FRONT = '/assets/images/optimized/bobcat/bobcat-t450-front.jpg';
const BOBCAT_SIDE = '/assets/images/optimized/bobcat/bobcat-t450-side.jpg';

const LEVELING_PHOTOS = [
  {
    src: '/assets/images/optimized/leveling/3409.webp',
    alt: 'Freshly graded gravel drive with a riprap drainage swale leading toward a lakeside lot',
    caption: 'Track-loader grading on a sloped access drive, with a rock-lined swale to carry runoff',
  },
  {
    src: '/assets/images/optimized/leveling/3410.webp',
    alt: 'Compacted gravel access path with a crushed-stone shoulder after track-loader grading',
    caption: 'Even compacted surface and a defined stone shoulder after cut-and-fill work',
  },
  {
    src: '/assets/images/optimized/leveling/3412.webp',
    alt: 'Concrete catch basin set in riprap to collect runoff at the base of a graded slope',
    caption: 'Catch basin inlet surrounded by riprap so water drops in without washing out the bank',
  },
  {
    src: '/assets/images/optimized/leveling/3411.webp',
    alt: 'Catch basin and riprap inlet at the bottom of a graded lakeside driveway',
    caption: 'Finished grade at the low point, with drainage structure and gravel drive working together',
  },
  {
    src: '/assets/images/optimized/leveling/3413.webp',
    alt: 'Riprap-lined drainage ditch feeding a catch basin beside a leveled gravel path',
    caption: 'Uphill riprap channel that collects slope runoff and feeds the basin',
  },
];

export const metadata: Metadata = {
  title: 'SOD Installation & Land Leveling | Texas Best Sprinklers',
  description:
    'Professional land leveling, Bobcat track loader grading, dirt work, and SOD installation in Fort Worth and surrounding DFW cities. Fix low spots, improve drainage, and get a smooth, green lawn.',
  openGraph: {
    title: 'SOD Installation & Land Leveling | Texas Best Sprinklers',
    description:
      'In-house Bobcat track loader grading, land leveling, site prep, and SOD installation for North Texas yards — built to drain correctly and look finished.',
    url: 'https://sprinkleranddrains.com/services/sod-and-land-leveling',
    type: 'website',
    images: [
      {
        url: `https://sprinkleranddrains.com${BOBCAT_FRONT}`,
        alt: 'Texas Best Sprinklers Bobcat T450 track loader for land leveling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOD Installation & Land Leveling | Texas Best Sprinklers',
    description:
      'Bobcat track loader land leveling, grading, dirt work, and SOD installation across Fort Worth and nearby cities.',
    images: [`https://sprinkleranddrains.com${BOBCAT_FRONT}`],
  },
};

const equipmentCapabilities = [
  {
    icon: Tractor,
    title: 'Bobcat Track Loader Grading',
    body: 'Our own Bobcat track loader handles full yard regrades, dirt moves, and precision leveling — no waiting on a rental or third-party crew.',
  },
  {
    icon: Mountain,
    title: 'Major Land Leveling',
    body: 'Correct deep low spots, uneven settling, and trip-hazard slopes so the yard feels solid underfoot and water stops collecting in the wrong places.',
  },
  {
    icon: Shovel,
    title: 'Dirt Work & Site Prep',
    body: 'Cut, fill, haul, and shape soil for new lawns, drainage installs, hardscape pads, and construction finish-outs.',
  },
  {
    icon: Layers,
    title: 'Fine Grading & Sanding',
    body: 'After the heavy move, we fine-grade and sand/topdress so the finish is smooth, even, and ready for SOD or seed.',
  },
];

const projectTypes = [
  'Full-yard regrades and land leveling',
  'Fixing low spots, pooling, and soggy corners',
  'Slope correction away from the foundation',
  'Driveway and access-road grading',
  'Dirt work and site prep for new builds',
  'Grading before SOD, hardscape, or drainage',
  'Hauling and spreading fill or topsoil',
];

export default function SodAndLandLevelingPage() {
  const serviceProps = {
    serviceType: 'sod-and-land-leveling',
    title: 'SOD Installation & Land Leveling',
    description:
      'Professional land leveling with our Bobcat track loader, precision grading, dirt work, and SOD installation. We reshape problem yards so they drain correctly, feel even underfoot, and finish with a healthy North Texas lawn.',
    icon: <Sprout size={32} className="text-white" />,
    image: BOBCAT_FRONT,
    features: [
      'In-house Bobcat track loader for land leveling & dirt work',
      'Full-yard grading, cut-and-fill, and slope correction',
      'Precision fine grading and sanding/topdressing',
      'Fresh SOD installation for an instantly green lawn',
      'Drainage-friendly grading away from the home',
      'Irrigation adjustments so new turf gets even coverage',
    ],
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <div>
        {/* Equipment callout */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-irrigation-blue/15 bg-gradient-to-br from-slate-50 via-white to-emerald-50/60 shadow-sm">
          <div className="border-b border-irrigation-blue/10 bg-irrigation-blue px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
                <Tractor className="h-7 w-7" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Now equipped
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                  Bobcat Track Loader Land Leveling
                </h2>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-blue-100">
                  We own a Bobcat track loader — so bigger grading jobs, dirt moves, and full-yard regrades happen in-house,
                  on our schedule, with one crew that also understands irrigation and drainage.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-irrigation-blue/10 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentCapabilities.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white/90 p-5 sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-irrigation-blue/8 text-irrigation-blue">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-irrigation-darkBlue">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-irrigation-blue md:text-3xl">Our Bobcat T450 track loader</h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            This is the machine we use for land leveling, dirt work, and site prep — owned in-house so we can schedule
            bigger grading jobs without waiting on a rental.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={BOBCAT_FRONT}
                  alt="Texas Best Sprinklers Bobcat T450 compact track loader with bucket"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-gray-600">
                Bobcat T450 — front view with loader bucket
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={BOBCAT_SIDE}
                  alt="Side profile of Texas Best Sprinklers Bobcat T450 track loader"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-gray-600">
                Side profile — rubber tracks built for soft North Texas clay
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-irrigation-blue md:text-3xl">
            Recent Land Leveling & Slope Drainage Work
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            On sloped lots, land leveling is more than a smooth surface. We cut and compact the drive, set a consistent
            grade, and install the drainage that keeps rain from chewing out the edge. These photos show a gravel access
            path, a riprap-lined swale, and a concrete catch basin at the low point — the same combination we use when a
            yard or driveway needs to shed water without washing soil downhill.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {LEVELING_PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="px-3 py-2 text-xs text-gray-600">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-irrigation-blue md:text-3xl">
            Land Leveling That Actually Moves Dirt
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Hand rakes and wheelbarrows can touch up a small dip. Real land leveling — fixing a yard that settles, pools after
            every storm, or sits wrong against the foundation — needs machine power. With our Bobcat track loader we cut high
            spots, fill low ones, reshape slope, and leave a surface that is ready for fine grading, sanding, and SOD.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-800">
            Track loaders also work better on soft North Texas clay than wheeled equipment. Less tearing up the yard while we
            get the grade right. For a deeper look at why DFW clay creates low spots — and how grading pairs with sod,
            irrigation, and drainage — read our guide:{' '}
            <Link
              href="/blog/land-leveling-bobcat-track-loader-north-texas-clay"
              className="font-semibold text-irrigation-blue underline underline-offset-2 hover:text-irrigation-green"
            >
              Land Leveling With a Bobcat Track Loader: Fixing Low Spots in North Texas Clay
            </Link>
            .
          </p>
        </div>

        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-irrigation-blue/8 text-irrigation-blue">
              <Ruler className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-2xl font-bold text-irrigation-blue md:text-3xl">What We Handle</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {projectTypes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-irrigation-green" aria-hidden />
                <span className="text-base font-medium text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-irrigation-blue md:text-3xl">
            Drainage-Friendly Grading
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">
            North Texas clay and settling around the foundation create low spots, trip hazards, and areas where water just will
            not leave. We grade and level so water moves away from the house and high-use areas, then tie into French drains,
            surface drains, catch basins, or other drainage work when the property needs it. On steeper drives and lakeside
            slopes, that often means a compacted gravel surface, a riprap-lined swale, and an inlet at the low point so runoff
            does not ravel the bank. The goal is simple: water goes where it should, the lawn or drive looks finished, and
            irrigation and drainage both work better.
          </p>
        </div>

        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-irrigation-darkGreen">
              <Sprout className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-2xl font-bold text-irrigation-blue md:text-3xl">Professional SOD Installation</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-800">
            Once the grade is right, we install premium SOD matched to North Texas conditions and your specific site. We lay
            SOD in a staggered pattern, tight to seams and edges, then roll and water in the new lawn so it can start rooting
            quickly. Heads, valves, and zones get adjusted for the new turf so coverage is even from day one. Tight side yards
            and patio-adjacent turf still need a clean edge, a level base, and a place for downspout water to go — otherwise
            the new lawn stays soggy along the fence and hardscape.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/assets/images/optimized/turf/3245.webp"
                  alt="Finished even turf lawn with a dark brick garden border, mulched planting bed, and evergreen hedges"
                  fill
                  quality={75}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-gray-600">
                Finished turf with a crisp brick bed border — even color, a flat grade, and plantings set above the lawn.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/images/optimized/turf/3246.webp"
                  alt="Side-yard turf installation bordered by a wood fence, brick planter wall, and a downspout tied into a drainage pipe"
                  fill
                  quality={75}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-gray-600">
                Compact turf pad with drainage built in: downspout to corrugated pipe and a clean-out in the lawn so water does not sit on the surface.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-irrigation-blue md:text-3xl">
            Start With a Clean, Level Base
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">
            A great lawn is built, not guessed at. Before new SOD goes down we correct grading issues, remove old turf and
            debris, and shape the yard so water flows the right way. Sanding and topdressing fine-tune low areas and smooth
            out imperfections. That means fewer muddy spots, fewer standing-water issues, and a healthier lawn that works with
            your irrigation system instead of against it.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-irrigation-blue md:text-3xl">When to Choose SOD vs. Seed</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            For most Fort Worth and surrounding-area properties, SOD is the fastest and most reliable way to get a thick, even
            lawn. We typically recommend SOD when you are:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-800">
            <li>Renovating a tired or patchy yard and want an instant lawn.</li>
            <li>Fixing grading or drainage issues that require reworking the surface anyway.</li>
            <li>Finishing new construction and need a clean, move-in-ready yard.</li>
            <li>Trying to stop ongoing mud, erosion, or tracking dirt into the home.</li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-irrigation-blue">
              <Droplets className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-2xl font-bold text-irrigation-blue md:text-3xl">
              How It Pairs With Irrigation & Drainage
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-800">
            Because we specialize in irrigation, drainage, and outdoor systems, we make sure your new grade and lawn are tuned
            to the rest of the property. During land-leveling and SOD projects we can adjust heads, update zones, and recommend
            drainage fixes while the ground is already open. That saves you time and prevents having to redo work later.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-irrigation-blue md:text-3xl">
            Benefits of Professional Land Leveling & SOD
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-irrigation-darkBlue">Machine-Powered Precision</h3>
              <p className="text-gray-800">
                Our Bobcat track loader moves real volume — so larger regrades and dirt work get done right, not patched over.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-irrigation-darkBlue">Better Drainage</h3>
              <p className="text-gray-800">
                Correct slopes and low areas so water moves away from the home and high-traffic areas instead of pooling.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-irrigation-darkBlue">Instant Curb Appeal</h3>
              <p className="text-gray-800">
                Go from bare dirt or a patchy yard to an even, green lawn in a single project. Proper prep and grading help it
                stay that way.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-bold text-irrigation-darkBlue">Fewer Future Fixes</h3>
              <p className="text-gray-800">
                Handling grading, drainage considerations, and irrigation adjustments together reduces surprise problems down
                the road.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-4 text-2xl font-bold text-irrigation-blue md:text-3xl">
          SOD installation & land leveling in your area
        </h2>
        <p className="mb-4 leading-relaxed text-gray-800">
          We provide professional SOD installation, Bobcat land leveling, and grading in key North Texas communities. Select
          your city for details about local SOD and land leveling services.
        </p>
        <div className="rounded-lg border border-gray-100 bg-white px-6 py-5 shadow-sm">
          <ul className="divide-y divide-gray-100">
            <li className="flex items-center justify-between py-2">
              <Link
                href="/fort-worth/sod-installation-and-land-leveling-in-fort-worth-tx"
                className="font-medium text-irrigation-darkBlue hover:text-irrigation-blue"
              >
                SOD installation & land leveling in Fort Worth, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <Link
                href="/keller/sod-installation-and-land-leveling-in-keller-tx"
                className="font-medium text-irrigation-darkBlue hover:text-irrigation-blue"
              >
                SOD installation & land leveling in Keller, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <Link
                href="/haslet/sod-installation-and-land-leveling-in-haslet-tx"
                className="font-medium text-irrigation-darkBlue hover:text-irrigation-blue"
              >
                SOD installation & land leveling in Haslet, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <Link
                href="/westlake/sod-installation-and-land-leveling-in-westlake-tx"
                className="font-medium text-irrigation-darkBlue hover:text-irrigation-blue"
              >
                SOD installation & land leveling in Westlake, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <Link
                href="/argyle/sod-installation-and-land-leveling-in-argyle-tx"
                className="font-medium text-irrigation-darkBlue hover:text-irrigation-blue"
              >
                SOD installation & land leveling in Argyle, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <Link
                href="/weatherford/sod-installation-and-land-leveling-in-weatherford-tx"
                className="font-medium text-irrigation-darkBlue hover:text-irrigation-blue"
              >
                SOD installation & land leveling in Weatherford, TX
              </Link>
              <span className="text-sm text-gray-400">→</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-16 bg-irrigation-gray py-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="SOD installation, Bobcat land leveling, and grading across Fort Worth, Arlington, Keller, Southlake, Colleyville, Grapevine, Weatherford, and nearby cities"
          />
        </div>
      </section>

      <CTA
        title="Ready for a Level Yard — and a Green Lawn?"
        subtitle="Schedule a land-leveling and SOD estimate. We’ll put together a plan for grading, dirt work, drainage, and irrigation."
        buttonText="Request Your Estimate"
        buttonLink="/contact"
      />

      <section className="py-12">
        <div className="container-custom">
          <h2 className="mb-6 text-2xl font-bold text-irrigation-blue md:text-3xl">SOD & Land Leveling FAQ</h2>
          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Do you have your own equipment for land leveling?</h3>
              <p>
                Yes. We own a Bobcat track loader for land leveling, grading, and dirt work — so we can handle larger regrades
                and site prep in-house without waiting on rentals or outside operators.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Can you fix low spots and standing water before installing SOD?</h3>
              <p>
                Yes. Land leveling and grading are a core part of this service. We correct low spots and reshape the yard so
                water drains away from the home and high-use areas, then fine-grade before SOD goes down.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">How long does new SOD take to root?</h3>
              <p>
                In North Texas, most SOD begins to root within 2 to 3 weeks with proper watering. We provide basic watering
                guidance so you know what to expect for the first month.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Do you coordinate SOD installation with irrigation work?</h3>
              <p>
                We do. Because irrigation is one of our main services, we can adjust heads and zones during the project so your
                new lawn gets consistent coverage without overspray.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">What areas do you serve for SOD and land leveling?</h3>
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
            serviceType: 'SOD Installation, Land Leveling, Grading & Dirt Work',
            description:
              'Professional land leveling with Bobcat track loader, grading, dirt work, and SOD installation for North Texas properties.',
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
                name: 'Do you have your own equipment for land leveling?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We own a Bobcat track loader for land leveling, grading, and dirt work so larger regrades and site prep can be handled in-house.',
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
                name: 'How long does new SOD take to root?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most SOD in North Texas begins to root within 2 to 3 weeks with proper watering and care.',
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
