'use client';

import { useEffect, useState } from 'react';
import LocationHeroSection from '@/components/location-homepages/LocationHeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreview from '@/components/BlogPreview';
import StatsSection from '@/components/StatsSection';
import CTA from '@/components/CTA';
import StructuredData from '@/components/StructuredData';
import HowToGetStartedSection from '@/components/HowToGetStartedSection';
import MultiServiceHowToSchema from '@/components/MultiServiceHowToSchema';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import ScrollingCarousel from '@/components/ScrollingCarousel';
import { curatedReviews } from '@/data/curated-reviews';
import EndOfSummerSpecials from '@/components/EndOfSummerSpecials';
import HomeFAQ from '@/components/HomeFAQ';
import { LOCATIONS, locationData } from '@/data/locationData';

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const [businessInfo, setBusinessInfo] = useState({
    name: 'Texas Best Sprinklers',
    rating: 5,
    userRatingsTotal: 100,
    googleUrl: 'https://g.page/r/CSwRGl0HZDGRChI/review'
  });
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://texasbestsprinklers.com';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `${baseUrl}/`;

  // Build explicit service areas (pretty names) from locationData
  const serviceAreas: string[] = LOCATIONS.map((slug) => {
    const data = (locationData as any)[slug];
    if (data?.name) return `${data.name}, TX`;
    // Fallback to title-cased slug
    return `${slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ')}, TX`;
  });

  // Define all primary services with their canonical URLs
  const allServices = [
    { type: 'Irrigation Repair', url: `${baseUrl}/services/irrigation-repair` },
    { type: 'Sprinkler Repair', url: `${baseUrl}/services/sprinkler-repair` },
    { type: 'Sprinkler Installation', url: `${baseUrl}/services/sprinkler-installation` },
    { type: 'Maintenance', url: `${baseUrl}/services/maintenance` },
    { type: 'Outdoor Lighting', url: `${baseUrl}/services/outdoor-lighting` },
    { type: 'Landscape Lighting Repair', url: `${baseUrl}/services/landscape-lighting-repair` },
    { type: 'Drainage Solutions', url: `${baseUrl}/services/drainage-solutions` },
    { type: 'French Drains', url: `${baseUrl}/services/french-drains` },
    { type: 'Channel Drains', url: `${baseUrl}/services/channel-drains` },
    { type: 'Yard Drainage Systems', url: `${baseUrl}/services/yard-drainage-systems` },
    { type: 'Sump Pumps', url: `${baseUrl}/services/sump-pumps` },
    { type: 'Drip Irrigation', url: `${baseUrl}/services/drip-irrigation` },
    { type: 'Sprinkler System Check-Up', url: `${baseUrl}/services/sprinkler-system-check-up` },
    { type: 'Sprinkler System Reroutes', url: `${baseUrl}/services/sprinkler-system-reroutes` },
  ];
  
  // Define the steps for the HowTo schema (same as in HowItWorksSection)
  const howToSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start with a thorough assessment of your landscape, discussing your needs, water usage goals, and budget considerations.",
    },
    {
      number: "02",
      title: "Custom Design",
      description: "Our technicians create a tailored irrigation plan specific to your landscape's layout, soil type, and plant requirements.",
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Expert technicians install your system with minimal disruption, ensuring everything is properly calibrated.",
    },
    {
      number: "04",
      title: "Fine-Tuning & Education",
      description: "We adjust your system for optimal performance and teach you how to use your new irrigation system effectively.",
    },
  ];

  // Curated FAQs for homepage
  const homeFaqs = [
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes. We provide free on-site estimates for irrigation repair, installation, drainage solutions, and lighting projects.'
    },
    {
      question: 'Can you repair any brand of sprinkler system?',
      answer: 'We service and repair all major brands including Rain Bird, Hunter, Toro, and more.'
    },
    {
      question: 'How soon can you come out for a repair?',
      answer: 'Most service calls are scheduled within 24–48 business hours. Emergency availability may be possible.'
    },
    {
      question: 'Do you install smart controllers?',
      answer: 'Absolutely. We install and configure smart Wi‑Fi controllers that optimize watering schedules and reduce water usage.'
    },
    {
      question: 'Will a French drain solve standing water?',
      answer: 'In many cases, yes. We assess grading, gutter discharge, and soil conditions to design the right drainage solution for your property.'
    },
    {
      question: 'Are your installations warrantied?',
      answer: 'Yes. Our workmanship is warrantied and product warranties are honored per manufacturer terms.'
    }
  ];

  // Fetch reviews for structured data
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          if (data.businessInfo) {
            setBusinessInfo(data.businessInfo);
          }
        }
      } catch (err) {
        console.error('Failed to fetch reviews for structured data:', err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {/* Structured Data */}
      <StructuredData businessInfo={businessInfo} reviews={reviews} />
      <MultiServiceHowToSchema activeTab="irrigation" />
      
      {/* Page Content */}
      <LocationHeroSection
        locationName="Fort Worth"
        locationSlug="fort-worth"
        landmarks={['Fort Worth Stockyards', 'Sundance Square', 'Fort Worth Water Gardens', 'Dickies Arena']}
        nearestOffice="Fort Worth"
        distanceFromOffice={0}
        serviceAreas={[]}
      />
      {/* End of Summer Specials - prominent and above the fold */}
      <div className="px-4 sm:px-6 lg:px-8 mt-8">
        <EndOfSummerSpecials />
      </div>
      <ServicesSection />
      {/* Move reviews up: 1–2 sections below hero */}
      <TestimonialsSection />
      <ScrollingCarousel />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <HowToGetStartedSection />
      {/* New beautiful Home FAQ with categories per service */}
      <HomeFAQ
        categories={[
          {
            name: 'About the Company',
            items: [
              { question: 'Do you offer free estimates?', answer: 'Yes. We provide free on‑site estimates for new installs, repairs, drainage, and lighting projects.' },
              { question: 'What areas do you serve?', answer: 'We serve Fort Worth, Weatherford, and surrounding DFW cities including Keller, Southlake, Colleyville, Grapevine, and more.' },
              { question: 'What are your business hours?', answer: 'We’re available 7AM–7PM, Monday through Saturday. Closed on Sundays.' },
              { question: 'Are you licensed and insured?', answer: 'Yes. We are fully insured and licensed in Texas. Contractor License: LI22462.'},
              { question: 'What payments do you accept?', answer: 'We accept major credit cards and other common payment methods. Project warranties are included per workmanship and manufacturer terms.' },
            ],
          },
          {
            name: 'Irrigation Repair',
            items: [
              { question: 'What are signs my system needs repair?', answer: 'Uneven coverage, soggy spots, dry patches, high bills, or a controller that won’t run are common indicators.' },
              { question: 'Do you fix leaks and broken heads?', answer: 'Yes. We diagnose and repair leaks, broken heads, nozzles, risers, valves, wiring, and controller issues.' },
              { question: 'Can you find hidden leaks?', answer: 'We use pressure checks and zone isolation to locate underground leaks and prioritize the right fix.' },
              { question: 'Will you reprogram my controller after repairs?', answer: 'Yes, we verify operation and set appropriate seasonal schedules before we leave.' },
              { question: 'How fast can you schedule?', answer: 'Typically within 24–48 business hours. Emergency availability may be possible.' },
            ],
          },
          {
            name: 'Maintenance',
            items: [
              { question: 'What’s included in a seasonal check‑up?', answer: 'Head alignment, nozzle cleaning, leak inspection, valve tests, pressure checks, and schedule optimization.' },
              { question: 'Do you offer winterization?', answer: 'Yes. We shut down water, blow out lines where needed, and protect components from freeze damage.' },
              { question: 'Do you offer spring start‑ups?', answer: 'We pressurize, test each zone, fix small issues, and set a water‑saving schedule for the season.' },
              { question: 'Can you reduce my water usage?', answer: 'We dial in runtimes, add smart cycles, and recommend upgrades like pressure‑regulated heads and smart controllers.' },
              { question: 'How often should I service?', answer: 'At least twice per year—spring and fall—for best performance and efficiency.' },
            ],
          },
          {
            name: 'Outdoor Lighting',
            items: [
              { question: 'What lighting do you install?', answer: 'Path, spot, accent, uplighting, and architectural lighting using long‑life, low‑voltage LED fixtures.' },
              { question: 'Can you design a custom layout?', answer: 'Yes. We design layered lighting to enhance safety, curb appeal, and outdoor living areas.' },
              { question: 'Are systems smart‑enabled?', answer: 'We offer timers, photocells, and app‑controlled smart transformers for schedules and scenes.' },
              { question: 'Do you retrofit halogen to LED?', answer: 'We can upgrade existing fixtures to efficient LED for better brightness and lower energy use.' },
              { question: 'Is there a warranty?', answer: 'Installations include workmanship warranty; fixtures carry manufacturer warranties.' },
            ],
          },
          {
            name: 'Drainage Solutions',
            items: [
              { question: 'Which drainage options do you provide?', answer: 'French drains, surface/area drains, channel drains, downspout extensions, and grading improvements.' },
              { question: 'Will a French drain fix standing water?', answer: 'Often, yes. We assess soil, slope, and water sources to design the right solution for your conditions.' },
              { question: 'Do you handle erosion issues?', answer: 'We add collection points, regrade problem areas, and route water safely to discharge.' },
              { question: 'How disruptive is installation?', answer: 'We minimize lawn disturbance and clean up thoroughly; sod restoration options available if needed.' },
              { question: 'Do drains require maintenance?', answer: 'Occasional debris clearing and periodic inspections keep systems flowing freely.' },
            ],
          },
          {
            name: 'Sprinkler Installation',
            items: [
              { question: 'Do you design custom systems?', answer: 'Yes. We map zones by sun, slope, and plant type to achieve even coverage and efficiency.' },
              { question: 'Which brands do you use?', answer: 'We install trusted components (e.g., Rain Bird, Hunter) chosen for performance and local conditions.' },
              { question: 'Are smart controllers included?', answer: 'We recommend Wi‑Fi controllers with weather‑based adjustments to cut waste and protect plants.' },
              { question: 'How long does install take?', answer: 'Most residential systems complete within 1–2 days, depending on yard size and complexity.' },
              { question: 'Do you provide training?', answer: 'We walk you through controller setup, seasonal changes, and basic maintenance.' },
            ],
          },
          {
            name: 'Sprinkler Repair',
            items: [
              { question: 'Can you fix low pressure in a zone?', answer: 'We check leaks, clogged nozzles, valves, and supply lines to restore proper pressure and coverage.' },
              { question: 'Heads not popping up?', answer: 'We clear debris, replace seals, and ensure adequate pressure and correct nozzles.' },
              { question: 'Mixed head types in a zone?', answer: 'We correct mismatches (rotors vs. sprays) to prevent over/under‑watering and improve uniformity.' },
              { question: 'Controller won’t start zones?', answer: 'We diagnose wiring, solenoids, transformer output, and the controller itself.' },
              { question: 'Can you move heads for new landscaping?', answer: 'Yes. We reroute and add heads to accommodate new beds, patios, or hardscapes.' },
            ],
          },
        ]}
        faqs={homeFaqs}
      />
      <BlogPreview />
      <ServiceAreaLocator 
        title="Our Service Areas"
        subtitle="Texas Best Sprinklers provides expert irrigation and drainage solutions throughout the Fort Worth metroplex"
      />
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-irrigation-darkBlue tracking-tight">Fort Worth Sprinkler & Drainage Experts</h2>
          <p className="mt-4 text-gray-700">
            Keeping landscapes healthy in Fort Worth takes a reliable irrigation system and smart drainage. At Texas Best Sprinklers, we design, repair, and optimize systems for North Texas heat, clay soils, and sudden storms. If your yard needs dependable watering or a way to move water off the property, our team delivers practical solutions that improve curb appeal and protect your foundation.
          </p>
          <h3 className="mt-8 text-xl md:text-2xl font-semibold text-irrigation-darkBlue">Sprinklers and Irrigation, Done Right</h3>
          <p className="mt-3 text-gray-700">
            Whether you need fast fixes or a brand‑new system, we handle everything from diagnostics to smart controllers. Common service calls include broken heads, leaks, wiring issues, and low pressure. If you’re seeing dry patches or soggy zones, we’ll evaluate coverage and recalibrate your system for efficient watering across every bed and lawn area.
          </p>
          <p className="mt-3 text-gray-700">
            Explore our most requested services: <a className="text-green-700 hover:text-green-800 underline" href="/services/irrigation-repair">Irrigation Repair</a>, <a className="text-green-700 hover:text-green-800 underline" href="/services/sprinkler-repair">Sprinkler Repair</a>, <a className="text-green-700 hover:text-green-800 underline" href="/services/sprinkler-installation">Sprinkler Installation</a>, <a className="text-green-700 hover:text-green-800 underline" href="/services/maintenance">Maintenance</a>, <a className="text-green-700 hover:text-green-800 underline" href="/services/drip-irrigation">Drip Irrigation</a>, <a className="text-green-700 hover:text-green-800 underline" href="/services/sprinkler-system-check-up">Sprinkler System Check‑Up</a>, and <a className="text-green-700 hover:text-green-800 underline" href="/services/sprinkler-system-reroutes">Sprinkler System Reroutes</a>.
          </p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
            <li>• Smart Wi‑Fi controller setup for seasonal schedules</li>
            <li>• Nozzle upgrades for even coverage and water savings</li>
            <li>• Pressure regulation and zone balancing</li>
            <li>• Leak detection and rapid repairs</li>
          </ul>
          <h3 className="mt-8 text-xl md:text-2xl font-semibold text-irrigation-darkBlue">Drainage That Protects Your Home</h3>
          <p className="mt-3 text-gray-700">
            North Texas clay soils hold water, and heavy rains can overwhelm yards and flower beds. Proper drainage prevents standing water, erosion, mosquito activity, and foundation stress. We design systems that collect and route water away from structures and high‑traffic areas while preserving your landscape.
          </p>
          <p className="mt-3 text-gray-700">
            Learn more about our solutions: <a className="text-green-700 hover:text-green-800 underline" href="/services/drainage-solutions">Drainage Solutions</a>, including <a className="text-green-700 hover:text-green-800 underline" href="/services/french-drains">French Drains</a>, <a className="text-green-700 hover:text-green-800 underline" href="/services/channel-drains">Channel Drains</a>, <a className="text-green-700 hover:text-green-800 underline" href="/services/yard-drainage-systems">Yard Drainage Systems</a>, and <a className="text-green-700 hover:text-green-800 underline" href="/services/sump-pumps">Sump Pumps</a> for challenging low spots.
          </p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
            <li>• Site grading assessments and downspout extensions</li>
            <li>• Strategic collection points and discharge routing</li>
            <li>• Minimal‑disruption trenching and clean installation</li>
            <li>• Long‑term reliability with proper filtration</li>
          </ul>
          <h3 className="mt-8 text-xl md:text-2xl font-semibold text-irrigation-darkBlue">Proudly Serving Fort Worth and Nearby Cities</h3>
          <p className="mt-3 text-gray-700">
            We’re local to the Fort Worth area and serve homeowners across the Tarrant County metro. If you’re nearby, there’s a good chance we’re already in your neighborhood. Explore our city pages to see recent work and request a free estimate:
            <span className="block mt-2" />
            <a className="text-green-700 hover:text-green-800 underline" href="/fort-worth">Fort Worth</a>, <a className="text-green-700 hover:text-green-800 underline" href="/arlington">Arlington</a>, <a className="text-green-700 hover:text-green-800 underline" href="/keller">Keller</a>, <a className="text-green-700 hover:text-green-800 underline" href="/southlake">Southlake</a>, <a className="text-green-700 hover:text-green-800 underline" href="/colleyville">Colleyville</a>, <a className="text-green-700 hover:text-green-800 underline" href="/grapevine">Grapevine</a>, and <a className="text-green-700 hover:text-green-800 underline" href="/weatherford">Weatherford</a>.
          </p>
          <p className="mt-6 text-gray-700">
            Ready to tune up your sprinklers, install a new system, or finally solve a drainage headache? Get started today—our team will assess your property and recommend the most efficient, long‑lasting solution for your landscape.
          </p>
        </div>
      </section>
      <CTA />
      {/* SEO: Structured Data - LocalBusiness, Services, Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${baseUrl}#business`,
            name: businessInfo.name,
            url: baseUrl,
            telephone: "+1-817-304-7896",
            priceRange: "$$",
            image: `${baseUrl}/assets/images/optimized/sprinkler.png`,
            address: {
              "@type": "PostalAddress",
              streetAddress: "10011 Harmon Rd suite 133",
              addressLocality: "Fort Worth",
              addressRegion: "TX",
              postalCode: "76177",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 32.9205, longitude: -97.3336 },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "19:00" },
            ],
            sameAs: [
              "https://www.facebook.com/TexasBest1",
              "https://twitter.com/sprinklerdrains",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: allServices.map((s) => ({
              "@type": "Service",
              serviceType: s.type,
              provider: { "@type": "LocalBusiness", "@id": `${baseUrl}#business` },
              areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })),
              url: s.url,
              offers: { "@type": "Offer", price: 0, priceCurrency: "USD", description: "Free estimate" }
            }))
          }),
        }}
      />
    </>
  );
}
