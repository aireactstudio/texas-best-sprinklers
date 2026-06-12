'use client';

import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { buildNeighborhoodStructuredData } from '@/components/neighborhoods/structuredData';

const structuredData = buildNeighborhoodStructuredData({
  neighborhood: 'Tierney Road',
  city: 'Arlington',
  state: 'TX',
  url: 'https://sprinkleranddrains.com/arlington/tierney-road',
  services: [
    'Sprinkler System Repair',
    'Irrigation Installation',
    'Drip Irrigation',
    'Backflow Testing',
    'Seasonal Tune-Ups',
  ],
  faqs: [
    {
      question: 'Do you service sprinkler systems in the Tierney Road area of Arlington?',
      answer:
        'Yes. Our licensed irrigators serve Tierney Road and the surrounding Arlington neighborhoods for repairs, installations, and seasonal maintenance.',
    },
    {
      question: 'How often should I schedule sprinkler maintenance in Tierney Road?',
      answer:
        'We recommend a spring start-up inspection and a fall winterization visit each year, plus a mid-summer check if your system covers clay-heavy soil zones common in this part of Arlington.',
    },
    {
      question: 'Can you fix a broken sprinkler head the same day in Arlington?',
      answer:
        'In many cases, yes. We carry common replacement heads and nozzles on every service truck so most single-head repairs are completed during the initial visit.',
    },
    {
      question: 'What causes low water pressure in sprinkler systems near Tierney Road?',
      answer:
        'Common causes include clogged filters, a partially closed backflow valve, or a damaged zone valve. Our technicians diagnose pressure issues with a full zone-by-zone flow test.',
    },
    {
      question: 'Do you install drip irrigation for landscape beds in Arlington?',
      answer:
        'Absolutely. Drip systems are an excellent choice for the ornamental beds and shrub lines frequently found in Tierney Road yards. They conserve water and reduce fungal issues caused by overhead spray.',
    },
  ],
});

export default function TierneyRoadPage() {
  return (
    <NeighborhoodPageTemplate
      canonicalUrl="https://sprinkleranddrains.com/arlington/tierney-road"
      pageTitle="Tierney Road Sprinkler & Irrigation Services | Arlington, TX"
      metaDescription="Licensed sprinkler repair and irrigation services for Tierney Road in Arlington, TX. Same-day repairs, seasonal tune-ups, and drip irrigation installs by certified irrigators."
      heroTitle="Sprinkler & Irrigation Services in Tierney Road"
      heroDescription="Tierney Road homeowners rely on our licensed Arlington irrigation team for fast sprinkler repairs, efficient system installs, and year-round maintenance that keeps lawns healthy through Texas heat and clay-heavy soil conditions."
      backLink={{ href: '/arlington', label: 'Back to Arlington' }}
      locationBadge="Tierney Road · Arlington, TX"
      introHeading="Local Irrigation Experts Serving Tierney Road, Arlington"
      intro="Tierney Road sits in a well-established residential pocket of Arlington where mature trees, Bermuda grass lawns, and compacted clay soils create a unique set of irrigation challenges. Our team of licensed irrigators understands the local water pressure variations, shaded turf zones, and seasonal watering restrictions enforced by the City of Arlington. Whether you need a broken rotor replaced before the weekend or a full drip system designed for your landscape beds, we bring the tools and expertise to get it done right the first time."
      highlights={[
        'Licensed irrigators serving Tierney Road and all of Arlington, TX',
        'Same-day sprinkler head and valve repairs available on most service calls',
        'Expert knowledge of Arlington clay soil drainage and water pressure norms',
        'Seasonal spring start-up and fall winterization packages for residential systems',
        'Drip irrigation design and installation for landscape beds and shrub zones',
        'Backflow preventer testing and certification by certified professionals',
      ]}
      serviceFocus={[
        'Sprinkler repair and rotor/nozzle optimization for Tierney Road lawns',
        'New irrigation system installation designed for Arlington clay soil conditions',
        'Drip irrigation for ornamental beds and water-sensitive landscape zones',
        'Zone valve repair and controller programming upgrades',
        'Backflow prevention testing and City of Arlington compliance certification',
        'Seasonal maintenance plans covering spring activation and fall shutdown',
        'Leak detection and underground pipe repair for residential irrigation lines',
      ]}
      localTips={[
        'Arlington clay soils expand and contract significantly between wet and dry seasons — cycle-and-soak watering schedules reduce runoff and help water penetrate deeper into the root zone',
        'Shade from mature trees on Tierney Road can leave turf zones underwatered; ask about separate low-precipitation-rate heads for shaded areas',
        'Set your controller to water before 10 a.m. to comply with City of Arlington odd/even watering restrictions and reduce evaporation loss during summer',
        'Check backflow preventers each spring — freezing temperatures common to North Texas winters can crack internal components over time',
        'Bermuda grass dominant in this area goes dormant in winter; reduce run times in October and shut down completely by late November to avoid shallow root frost damage',
      ]}
      reviews={[
        {
          reviewer: 'David M.',
          date: 'March 2024',
          quote:
            'Called about a zone that stopped working completely. Technician arrived the same afternoon, found a cracked valve, and had it replaced within an hour. Very professional and reasonably priced.',
        },
        {
          reviewer: 'Sandra K.',
          date: 'June 2024',
          quote:
            'We had multiple heads misting instead of rotating after a harsh winter. The team came out, replaced everything, and recalibrated our entire system. Our Bermuda lawn looks better than it has in years.',
        },
        {
          reviewer: 'Tom R.',
          date: 'August 2024',
          quote:
            'Great experience from start to finish. Honest about what needed fixing versus what could wait. I appreciated not being upsold on things I did not need.',
        },
        {
          reviewer: 'Lisa F.',
          date: 'October 2023',
          quote:
            'Had them install drip irrigation for my flower beds along the front of the house. They worked cleanly, explained how to adjust the emitters, and finished ahead of schedule.',
        },
      ]}
      considerations={[
        {
          title: 'Clay Soil Compaction',
          description:
            'The heavy clay soils common throughout Tierney Road and the broader southwest Arlington area absorb water slowly, making over-irrigation and pooling a frequent issue. We configure run times and cycle patterns specifically to match local soil absorption rates.',
        },
        {
          title: 'Mature Tree Root Interference',
          description:
            'Many properties on and around Tierney Road feature large established trees whose roots can infiltrate lateral irrigation lines over time. We offer root-intrusion pipe inspection and rerouting to prevent recurrent breaks.',
        },
        {
          title: 'Arlington Seasonal Water Restrictions',
          description:
            'Arlington enforces Stage 1 and Stage 2 drought restrictions that limit watering days and times. We program controllers to remain compliant and can set up a seasonal schedule adjustment service each spring.',
        },
        {
          title: 'Freeze Risk for Above-Ground Components',
          description:
            'Backflow preventers and exposed risers in North Texas can freeze during hard winter events. We recommend insulation covers and offer fall blow-out winterization to protect your investment.',
        },
        {
          title: 'Water Pressure Variability',
          description:
            'Static water pressure in this part of Arlington can fluctuate based on municipal supply zones. We test pressure at the point of connection before designing or repairing systems to ensure every head operates within optimal range.',
        },
      ]}
      pricing={[
        {
          label: 'Sprinkler Head Replacement',
          range: '$8–$20 per head (parts + labor)',
          note: 'Most single-zone head replacements completed same visit',
        },
        {
          label: 'Zone Valve Repair or Replacement',
          range: '$95–$175 per valve',
          note: 'Includes solenoid, diaphragm, or full valve body as needed',
        },
        {
          label: 'Backflow Preventer Testing',
          range: '$50–$85',
          note: 'City of Arlington compliant test report provided',
        },
        {
          label: 'Seasonal Tune-Up (Spring or Fall)',
          range: '$75–$130',
          note: 'Full zone inspection, head adjustment, and controller programming',
        },
        {
          label: 'New Irrigation System Installation',
          range: '$2,500–$5,500',
          note: 'Varies by lot size, zone count, and head type selected',
        },
        {
          label: 'Drip Irrigation Addition',
          range: '$300–$900',
          note: 'Per landscape bed zone; includes emitter placement and timer integration',
        },
      ]}
      processSteps={[
        'Call or book online to schedule your Tierney Road service appointment',
        'Receive a confirmed arrival window with technician name and contact info',
        'Technician performs a full system walkthrough and zone-by-zone diagnosis',
        'Review a clear written estimate before any repair or installation work begins',
        'Approved work is completed — typically same-visit for standard repairs',
        'System is tested zone-by-zone with you present before the technician leaves',
        'Controller is programmed to Arlington watering schedule guidelines',
        'Follow-up contact within 48 hours to confirm everything is operating correctly',
      ]}
      faqs={[
        {
          question: 'Do you service sprinkler systems in the Tierney Road area of Arlington?',
          answer:
            'Yes. Our licensed irrigators serve Tierney Road and the surrounding Arlington neighborhoods for repairs, installations, and seasonal maintenance.',
        },
        {
          question: 'How often should I schedule sprinkler maintenance in Tierney Road?',
          answer:
            'We recommend a spring start-up inspection and a fall winterization visit each year, plus a mid-summer check if your system covers clay-heavy soil zones common in this part of Arlington.',
        },
        {
          question: 'Can you fix a broken sprinkler head the same day in Arlington?',
          answer:
            'In many cases, yes. We carry common replacement heads and nozzles on every service truck so most single-head repairs are completed during the initial visit.',
        },
        {
          question: 'What causes low water pressure in sprinkler systems near Tierney Road?',
          answer:
            'Common causes include clogged filters, a partially closed backflow valve, or a damaged zone valve. Our technicians diagnose pressure issues with a full zone-by-zone flow test.',
        },
        {
          question: 'Do you install drip irrigation for landscape beds in Arlington?',
          answer:
            'Absolutely. Drip systems are an excellent choice for the ornamental beds and shrub lines frequently found in Tierney Road yards. They conserve water and reduce fungal issues caused by overhead spray.',
        },
      ]}
      relatedAreas={[
        { name: 'Arlington', href: '/arlington' },
        { name: 'Pantego', href: '/arlington' },
        { name: 'Dalworthington Gardens', href: '/arlington' },
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          href: '/arlington/sprinkler-repair-services-in-arlington-tx',
          description:
            'Fast diagnosis and repair of broken heads, valves, controllers, and leaking lateral lines throughout Arlington.',
        },
        {
          title: 'Sprinkler Installation',
          href: '/arlington/sprinkler-installation-services-in-arlington-tx',
          description:
            'Custom-designed irrigation systems built for Arlington lot sizes, soil types, and turf zones.',
        },
        {
          title: 'Irrigation Repair',
          href: '/arlington/irrigation-repair-services-in-arlington-tx',
          description:
            'Full irrigation system diagnostics and repair including drip lines, zone valves, and underground pipe.',
        },
        {
          title: 'Backflow Testing',
          href: '/arlington/sprinkler-repair-services-in-arlington-tx',
          description:
            'City of Arlington compliant backflow preventer testing and certification by licensed professionals.',
        },
        {
          title: 'Seasonal Tune-Up',
          href: '/arlington/sprinkler-repair-services-in-arlington-tx',
          description:
            'Spring activation and fall winterization services to protect your system and keep it running efficiently year-round.',
        },
      ]}
      attractions={[
        {
          name: 'River Legacy Parks',
          url: 'https://www.riverlegacy.org/',
          description:
            'A 1,300-acre urban nature preserve along the Trinity River offering trails, wildlife observation, and outdoor education just a short drive from Tierney Road.',
        },
        {
          name: 'Randol Mill Park',
          url: 'https://www.google.com/maps/search/Randol+Mill+Park+Arlington+TX',
          description:
            'A neighborhood park in northwest Arlington with open green space, picnic areas, and sports fields convenient to the Tierney Road area.',
        },
        {
          name: 'AT&T Stadium',
          url: 'https://attstadium.com/',
          description:
            'Home of the Dallas Cowboys and one of the largest domed stadiums in the world, located in central Arlington.',
        },
        {
          name: 'Globe Life Field',
          url: 'https://www.globelifefield.com/',
          description:
            'Home of the Texas Rangers, offering year-round events and family entertainment in the Arlington entertainment district.',
        },
      ]}
      localLivingContent={
        <div>
          <p>
            Tierney Road is a quiet, established residential corridor in Arlington where homeowners
            take pride in well-maintained lawns and manicured landscapes. The area sits within easy
            reach of{' '}
            <a href="https://www.riverlegacy.org/" target="_blank" rel="noopener noreferrer">
              River Legacy Parks
            </a>{' '}
            and the broader network of Arlington greenways, making curb appeal and outdoor spaces a
            genuine priority for residents.
          </p>
          <p>
            Irrigation in this neighborhood demands attention to the local clay-heavy soil profile.
            Water tends to run off rather than absorb during heavy rain or over-watered cycles, which
            is why we recommend cycle-and-soak programming for all systems here. If your Bermuda
            turf or St. Augustine lawn is showing dry patches or pooling at zone edges, those are
            early signs your current schedule may need recalibration.
          </p>
          <p>
            Our{' '}
            <a href="/arlington/sprinkler-repair-services-in-arlington-tx">
              Arlington sprinkler repair
            </a>{' '}
            team is familiar with the water pressure characteristics of this service zone and arrives
            equipped to handle the most common issues — cracked risers, sticking zone valves, and
            misting rotors — without a return trip. For homeowners considering a full system
            upgrade, our{' '}
            <a href="/arlington/sprinkler-installation-services-in-arlington-tx">
              irrigation installation team
            </a>{' '}
            designs zone layouts that account for Arlington tree canopy, slope, and turf type so
            every square foot of your lawn receives the right amount of water.
          </p>
          <p>
            Whether you are a longtime Tierney Road resident or recently moved to the area, our
            team at{' '}
            <a href="/arlington">Sprinkler and Drains Arlington</a> is ready to help you maintain a
            healthy, efficient irrigation system through every Texas season.
          </p>
        </div>
      }
      structuredData={structuredData}
    />
  );
}