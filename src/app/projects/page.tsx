'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTA from '@/components/CTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Droplet, CloudRain, CloudSun, Hammer, TreeDeciduous } from 'lucide-react';

const LIGHTING_PROJECT_PHOTOS = [
  {
    src: '/assets/images/optimized/lighting/3419.webp',
    alt: 'Southlake driveway lighting with lantern pillars, tree uplights, and a wall-washed brick home',
  },
  {
    src: '/assets/images/optimized/lighting/3417.webp',
    alt: 'Southlake architectural uplighting on a white brick home, chimney, and arched entry at night',
  },
  {
    src: '/assets/images/optimized/lighting/3418.webp',
    alt: 'Southlake wall-wash LED columns and eave lighting along a white brick facade at twilight',
  },
  {
    src: '/assets/images/optimized/lighting/3420.webp',
    alt: 'Southlake foundation uplights washing light brick and a black-framed window',
  },
];

const lightingProjectSchema = {
  '@context': 'https://schema.org',
  '@type': 'Project',
  name: 'White Brick Architectural Lighting — Southlake, TX',
  description:
    'Residential outdoor lighting installation with architectural wall-washing, chimney accents, tree uplights, and driveway lanterns on a white brick home in Southlake, TX.',
  image: LIGHTING_PROJECT_PHOTOS.map((photo) => `https://sprinkleranddrains.com${photo.src}`),
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Texas Best Sprinklers',
    telephone: '(817) 304-7896',
    url: 'https://sprinkleranddrains.com',
  },
  areaServed: {
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
  about: LIGHTING_PROJECT_PHOTOS.map((photo) => ({
    '@type': 'Photograph',
    contentUrl: `https://sprinkleranddrains.com${photo.src}`,
    description: photo.alt,
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
  })),
};

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  results: string[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, description, image, href, results, icon }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={href} className="block">
        <div className="relative aspect-[3/4] bg-gray-100">
          <Image 
            src={image} 
            alt={title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
          <div className="absolute top-4 left-4 bg-irrigation-green text-white rounded-full px-4 py-1 text-sm font-medium">
            {category}
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mr-3 text-irrigation-green">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-irrigation-blue">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <div className="mb-5">
          <h4 className="font-semibold text-irrigation-blue mb-2">Results:</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-irrigation-green mr-2">✓</span>
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link href={href} className="font-semibold text-irrigation-blue hover:underline">
          View {category} service →
        </Link>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <>
      <Script id="ld-lighting-project" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(lightingProjectSchema)}
      </Script>

      {/* Hero Section */}
      <HeroSection 
        title="Featured Irrigation Projects" 
        subtitle="Explore our portfolio of successful installations and transformations"
      />
      
      {/* Breadcrumbs (always below hero) */}
      <Breadcrumbs />
      
      {/* Projects Overview */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">Our Recent Projects</h2>
            <p className="text-lg text-gray-700 mx-auto max-w-4xl">
              Browse through our recently completed irrigation, drainage, and outdoor lighting projects to see how we transform properties throughout Fort Worth and Weatherford.
            </p>
          </div>

          <article className="mb-16 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {LIGHTING_PROJECT_PHOTOS.map((photo, index) => (
                <div key={photo.src} className={`relative ${index === 0 ? 'col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[360px]' : 'aspect-[4/3] md:aspect-auto'}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={75}
                    className="object-cover"
                    sizes={index === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                  />
                </div>
              ))}
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-irrigation-green px-4 py-1 text-sm font-medium text-white">
                  Outdoor Lighting
                </span>
                <span className="text-sm font-medium text-irrigation-blue">Southlake, TX</span>
              </div>
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-irrigation-green/20 text-irrigation-green">
                  <CloudSun size={24} />
                </div>
                <h3 className="text-2xl font-bold text-irrigation-blue">
                  White Brick Architectural Lighting
                </h3>
              </div>
              <p className="mb-5 max-w-4xl text-gray-700">
                Layered LED lighting for a white-brick home in Southlake: wall-washing that shows masonry
                texture, chimney and entry accents, tree uplights, and lantern-topped driveway pillars.
              </p>
              <h4 className="mb-2 font-semibold text-irrigation-blue">Results:</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  'Warm wall-wash coverage across the brick facade',
                  'Chimney and arched entry used as nighttime focal points',
                  'Tree and driveway lighting that frames the approach',
                  'Low-voltage LEDs with fixtures hidden in foundation beds',
                ].map((result) => (
                  <li key={result} className="flex items-start text-gray-700">
                    <span className="mr-2 text-irrigation-green">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services/outdoor-lighting" className="mt-5 inline-block font-semibold text-irrigation-blue hover:underline">
                View outdoor lighting service →
              </Link>
            </div>
          </article>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Residential Sprinkler Installation"
              category="Sprinkler Installation"
              href="/services/sprinkler-installation"
              description="New irrigation install with even coverage, pressure-regulated heads, and a controller set for North Texas heat."
              image="https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/sprinkler-head-rotating.webp?tr=w-1140,q-70&updatedAt=1763144537912"
              results={[
                "Full-yard coverage with matched precipitation",
                "Smart scheduling for local watering days",
                "Heads set to skip sidewalks and the slab",
                "Walkthrough so the homeowner can run the system"
              ]}
              icon={<Droplet size={24} />}
            />

            <ProjectCard 
              title="Sprinkler Repair & Tune-Up"
              category="Sprinkler Repair"
              href="/services/sprinkler-repair"
              description="Broken heads, leaks, and dead zones diagnosed and repaired so the existing system waters the lawn instead of the street."
              image="https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/sprinklerHead.webp?tr=w-1140,q-70&updatedAt=1763144537428"
              results={[
                "Replaced failed heads and nozzles",
                "Stopped leaks at fittings and valves",
                "Restored coverage in dry patches",
                "Recalibrated run times after the repair"
              ]}
              icon={<Droplet size={24} />}
            />

            <ProjectCard 
              title="Yard Drainage System"
              category="Drainage Solutions"
              href="/services/drainage-solutions"
              description="Full drainage layout to move stormwater off the lot, away from the foundation, and into a controlled discharge."
              image="https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/long-shot-of-fort-worth-drainage.webp?tr=w-800,q-70&updatedAt=1763144537900"
              results={[
                "Cleared standing water after storms",
                "Protected the foundation and beds",
                "Tied roof and yard water into one path",
                "Left the lawn usable instead of soggy"
              ]}
              icon={<CloudRain size={24} />}
            />
            
            <ProjectCard 
              title="Driveway French Drain"
              category="French Drains"
              href="/services/french-drains"
              description="French drain installed between a driveway and white-brick home, tied into a downspout so roof and surface water leave the slab instead of pooling."
              image="/assets/images/optimized/drainage/3249.webp"
              results={[
                "Captured runoff along the driveway edge",
                "Tied the downspout into the drain line",
                "Protected the foundation from standing water",
                "Kept the install tight to the hardscape"
              ]}
              icon={<CloudRain size={24} />}
            />
            
            <ProjectCard 
              title="Catch Basin & Channel Drain"
              category="Channel Drains"
              href="/services/channel-drains"
              description="Concrete catch basin set in riprap to collect runoff at the bottom of a graded slope before it can sit against the drive or landscape."
              image="/assets/images/optimized/leveling/3412.webp"
              results={[
                "Collected concentrated flow at the low point",
                "Stabilized the inlet with riprap",
                "Protected the graded path from washouts",
                "Gave the yard a clear discharge point"
              ]}
              icon={<CloudRain size={24} />}
            />

            <ProjectCard 
              title="Large-Scale Yard Drainage"
              category="Yard Drainage"
              href="/services/yard-drainage-systems"
              description="Deep drainage trench and pipe work across a property that was holding water, with discharge routed off the lawn."
              image="https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/massive-drainage-project.webp?tr=w-1140,q-70&updatedAt=1763144537814"
              results={[
                "Moved a high volume of stormwater",
                "Cut a proper fall across the yard",
                "Buried the system so the lawn could go back",
                "Stopped water from sitting against the house"
              ]}
              icon={<CloudRain size={24} />}
            />
            
            <ProjectCard 
              title="Land Leveling with a Track Loader"
              category="Land Leveling"
              href="/services/sod-and-land-leveling"
              description="Track-loader grading on a lakeside lot: compacted gravel drive, a riprap drainage swale, and a catch basin at the base of the slope."
              image="/assets/images/optimized/leveling/3409.webp"
              results={[
                "Rebuilt the grade so water moves downhill",
                "Armored the swale with riprap",
                "Set a catch basin at the collection point",
                "Left a stable gravel access path"
              ]}
              icon={<CloudRain size={24} />}
            />
            
            <ProjectCard 
              title="Landscape Installation"
              category="Landscaping"
              href="/services/landscaping-installation"
              description="Planting and bed work on a finished residential lot, with irrigation and drainage planned around the new landscape."
              image="/assets/images/optimized/landscaping/3248.webp"
              results={[
                "New beds tied into the irrigation plan",
                "Plantings placed off the foundation",
                "Cleaned up the front-yard presentation",
                "Room for drip zones in the beds"
              ]}
              icon={<TreeDeciduous size={24} />}
            />
            
            <ProjectCard 
              title="Concrete Patio"
              category="Hardscaping"
              href="/services/hardscaping"
              description="Elevated backyard patio with a finished edge and a curved corner, poured beside the house and graded so water does not sit on the slab."
              image="/assets/images/optimized/tb-1/2886.webp"
              results={[
                "New patio slab with a clean curved edge",
                "Finished face on the raised pour",
                "Grade held so runoff leaves the concrete",
                "Irrigation kept clear of the new hardscape"
              ]}
              icon={<Hammer size={24} />}
            />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              These are just a few examples of our recent projects. We've completed hundreds of irrigation and drainage installations throughout Fort Worth, Weatherford, and surrounding areas.
            </p>
          </div>
        </div>
      </section>
      
      {/* Project Process */}
      <section className="py-16 md:py-24 bg-irrigation-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">Our Project Process</h2>
            <p className="text-lg text-gray-700 mx-auto max-w-4xl">
              Every Texas Best Sprinklers project follows our proven process to ensure successful outcomes and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue mt-4">Consultation</h3>
              <p className="text-gray-700">
                We begin with a thorough site evaluation and consultation to understand your needs, challenges, and goals for your property.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue mt-4">Design & Planning</h3>
              <p className="text-gray-700">
                Our design team creates a customized solution that optimizes water usage, coverage, and addresses any specific landscape requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue mt-4">Professional Installation</h3>
              <p className="text-gray-700">
                Our experienced technicians install your system with minimal disruption to your property, ensuring all components are properly placed.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue mt-4">Follow-up & Support</h3>
              <p className="text-gray-700">
                After installation, we provide system training, fine-tuning, and ongoing support to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Start Your Project?"
        subtitle="Contact us today to schedule a consultation and get a free estimate for your irrigation needs."
        buttonText="Get Started"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
