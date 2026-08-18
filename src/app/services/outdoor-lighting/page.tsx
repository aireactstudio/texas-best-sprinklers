import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Image from 'next/image';
import Script from 'next/script';
import { CloudSun } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

const LIGHTING_PHOTOS = [
  {
    src: '/assets/images/optimized/lighting/3419.webp',
    alt: 'Southlake outdoor lighting: lantern-topped driveway pillars, tree uplights, and architectural wall washing on a white brick home',
    caption: 'Entry sequence: driveway lanterns, tree uplights, and a wall-washed facade',
  },
  {
    src: '/assets/images/optimized/lighting/3417.webp',
    alt: 'Southlake white brick home at night with chimney accent lighting and a softly lit arched front entry',
    caption: 'Chimney accent lighting and a warm, inviting arched entry',
  },
  {
    src: '/assets/images/optimized/lighting/3418.webp',
    alt: 'Southlake LED wall-wash columns and eave lighting along a white brick exterior at twilight',
    caption: 'Even wall-wash columns with a soft halo along the roofline',
  },
  {
    src: '/assets/images/optimized/lighting/3420.webp',
    alt: 'Southlake foundation uplights washing light brick, a black-framed window, and plantings',
    caption: 'Foundation uplights placed in the bed to wash brick texture',
  },
];

export const metadata: Metadata = pageMetadata({
  title: 'Outdoor Lighting Services | Texas Best Sprinklers',
  description:
    'Architectural LED lighting for North Texas homes: wall-washing, tree uplights, path lighting, and driveway lanterns. See a recent Southlake install.',
  path: '/services/outdoor-lighting',
  image: 'lighting',
});

const lightingPhotoSchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Texas Best Sprinklers outdoor lighting project',
  about: 'Architectural LED lighting on a white brick home in Southlake, TX',
  contentLocation: {
    '@type': 'Place',
    name: 'Southlake, TX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Southlake',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.9414,
      longitude: -97.1342,
    },
  },
  associatedMedia: [
    {
      '@type': 'ImageObject',
      contentUrl: 'https://sprinkleranddrains.com/assets/images/optimized/lighting/3419.webp',
      description: 'Driveway entrance lighting with lantern pillars, tree uplights, and a wall-washed brick home',
      contentLocation: {
        '@type': 'Place',
        name: 'Southlake, TX',
        geo: { '@type': 'GeoCoordinates', latitude: 32.9414, longitude: -97.1342 },
      },
    },
    {
      '@type': 'ImageObject',
      contentUrl: 'https://sprinkleranddrains.com/assets/images/optimized/lighting/3417.webp',
      description: 'Warm architectural uplighting on a white brick home, chimney, and arched entry at night',
      contentLocation: {
        '@type': 'Place',
        name: 'Southlake, TX',
        geo: { '@type': 'GeoCoordinates', latitude: 32.9414, longitude: -97.1342 },
      },
    },
    {
      '@type': 'ImageObject',
      contentUrl: 'https://sprinkleranddrains.com/assets/images/optimized/lighting/3418.webp',
      description: 'Wall-wash LED columns and eave lighting along a white brick facade at twilight',
      contentLocation: {
        '@type': 'Place',
        name: 'Southlake, TX',
        geo: { '@type': 'GeoCoordinates', latitude: 32.9414, longitude: -97.1342 },
      },
    },
    {
      '@type': 'ImageObject',
      contentUrl: 'https://sprinkleranddrains.com/assets/images/optimized/lighting/3420.webp',
      description: 'Close-up of foundation uplights washing light brick and a black-framed window',
      contentLocation: {
        '@type': 'Place',
        name: 'Southlake, TX',
        geo: { '@type': 'GeoCoordinates', latitude: 32.9414, longitude: -97.1342 },
      },
    },
  ],
};

export default function OutdoorLightingPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.OUTDOOR_LIGHTING,
    title: "Outdoor Lighting",
    description: "Enhance your property's beauty, security, and functionality with our custom-designed outdoor lighting solutions for pathways, gardens, and architectural features.",
    icon: <CloudSun size={32} className="text-white" />,
    image: "/assets/images/optimized/lighting/3419.webp",
    features: [
      "Custom lighting design for your unique landscape",
      "Energy-efficient LED technology",
      "Path and walkway lighting",
      "Accent lighting for gardens and architectural features",
      "Security lighting solutions",
      "Smart controls and automation",
      "Professional installation with hidden wiring"
    ]
  };

  return (
    <ServicePageLayout {...serviceProps}>
      <Script id="ld-lighting-photos" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(lightingPhotoSchema)}
      </Script>
      {/* Content Sections */}
      <div>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Recent Outdoor Lighting Installations
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-6">
            These night shots are from a recent Southlake install. A layered lighting plan changes a white-brick home
            after dark: warm LED uplights wash the masonry, trees get a canopy glow from below, and the driveway
            approach is framed so guests can see where they are going. The same layout adds evening curb appeal and
            makes the entry, lawn, and foundation easier to see without harsh floodlights. More photos live on our{' '}
            <a href="/southlake" className="font-semibold text-irrigation-blue hover:underline">
              Southlake service area page
            </a>
            .
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {LIGHTING_PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-gray-600">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Architectural Uplighting That Shows Brick Texture
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Light-colored brick is one of the best surfaces for wall washing. Ground-mounted fixtures in the foundation
            bed throw a fan of warm light up the wall, so mortar joints, gables, chimneys, and arched entries read in
            three dimensions instead of disappearing into the night. We place fixtures just far enough from the wall to
            avoid hot spots, then hide them in river rock or mulch so the daytime view stays clean.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            On homes with a chimney or a tall entry gable, a pair of accent lights aimed at that vertical feature
            becomes the focal point. The rest of the facade gets a softer, even wash so the house looks finished rather
            than lit by a single spotlight. A thin line of light under the eaves can define the roofline against a dark
            sky without flooding the yard.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Driveway, Tree, and Entry Lighting That Works Together
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            A long driveway needs more than a porch light. Lanterns on brick pillars mark the entrance, uplights on
            mature trees pull the eye down the drive, and a softly lit front door tells visitors where to park and walk.
            That same layout improves security: dark corners along the foundation and under the tree canopy go away
            without turning the yard into a parking lot. We use low-voltage LED fixtures, buried cable, and transformers
            sized for the actual load so the system stays reliable through North Texas heat and winter freeze cycles.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Custom Lighting Design
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our outdoor lighting design process begins with understanding your goals, whether that's enhancing safety, highlighting landscape features, extending outdoor living hours, or improving security. We create a custom lighting plan that balances form and function.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Energy-Efficient Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We exclusively use high-quality, energy-efficient LED lighting systems that provide beautiful illumination while consuming up to 80% less energy than traditional lighting. LED fixtures also last longer, require less maintenance, and offer superior light quality.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Professional Installation
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our installation teams carefully place fixtures, run wiring, and connect transformers with minimal disruption to your landscape. We use specialized techniques to hide wiring, ensuring your system looks beautiful day and night.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Smart Controls and Automation
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Modern lighting systems benefit from smart controls that allow you to adjust lighting schedules, brightness, and even colors from your smartphone. We can integrate your outdoor lighting with home automation systems and set up timers, motion sensors, and other convenience features.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Benefits of Outdoor Lighting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Enhanced Property Value</h3>
              <p className="text-gray-800">
                Professional landscape lighting can increase your property's value by enhancing curb appeal and creating an inviting atmosphere.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Improved Safety</h3>
              <p className="text-gray-800">
                Well-lit walkways, steps, and entrances prevent trips and falls while making your property more secure against intruders.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Extended Outdoor Living</h3>
              <p className="text-gray-800">
                The right lighting extends your enjoyment of outdoor spaces into the evening hours, creating a perfect ambiance for entertaining.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Highlighting Features</h3>
              <p className="text-gray-800">
                Strategically placed lights can accentuate your property's best features, from architectural elements to landscaping.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FULL WIDTH SECTIONS - These will span the entire width below the sidebar */}
      
      {/* Areas Served - Full width section */}
      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="Texas Best Sprinklers provides expert outdoor lighting services throughout the Fort Worth metroplex"
          />
        </div>
      </section>
      
      {/* CTA - Full width section */}
      <CTA 
        title="Ready to Transform Your Property with Beautiful Lighting?"
        subtitle="Contact us today to schedule a lighting consultation and personalized design."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
