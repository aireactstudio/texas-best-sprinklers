import React from 'react';
import { notFound } from 'next/navigation';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { KELLER_NEIGHBORHOOD_BY_SLUG } from '@/data/neighborhoods/kellerNeighborhoods';

export default function MarshallRidgePage() {
  const neighborhood = KELLER_NEIGHBORHOOD_BY_SLUG['marshall-ridge'];

  if (!neighborhood) {
    notFound();
  }

  return (
    <NeighborhoodPageTemplate
      cityName={neighborhood.cityName}
      citySlug={neighborhood.citySlug}
      neighborhoodName={neighborhood.neighborhoodName}
      canonicalUrl="https://sprinkleranddrains.com/keller/marshall-ridge"
      pageTitle="Marshall Ridge Irrigation Services in Keller, TX"
      metaDescription="Trusted sprinkler repairs, system check-ups, and drainage improvements for Marshall Ridge homeowners in Keller, TX."
      heroTitle={neighborhood.heroTitle}
      heroDescription={neighborhood.heroDescription}
      introHeading="Performance-Focused Irrigation for Marshall Ridge"
      intro={neighborhood.intro}
      highlights={neighborhood.highlights}
      serviceFocus={neighborhood.serviceFocus}
      localTips={neighborhood.localTips}
      reviews={[
        {
          reviewer: 'Nathan in Marshall Ridge',
          date: 'April 2026',
          quote:
            'They fixed two problem zones and updated our schedule before summer. The lawn recovered quickly and we are using less water.'
        },
        {
          reviewer: 'Kara in Marshall Ridge',
          date: 'March 2026',
          quote:
            'Professional crew and clear explanations. They adjusted pressure and nozzles so we no longer get sidewalk overspray.'
        },
        {
          reviewer: 'Trent in Marshall Ridge',
          date: 'January 2026',
          quote:
            'Great experience from estimate to completion. The system now runs consistently and our controller is much easier to manage.'
        }
      ]}
      considerations={[
        {
          title: 'Marshall Ridge HOA Landscape Expectations',
          description:
            'Consistent curb appeal matters in this area. Proactive tune-ups and precise spray alignment help homeowners maintain clean, uniform lawn appearance.'
        },
        {
          title: 'Heat-Season Runtime Management',
          description:
            'Long summer heat windows can stress turf quickly. We optimize runtimes by zone to keep hydration consistent without overwatering.'
        },
        {
          title: 'Hardscape Adjacent Overspray',
          description:
            'Driveways and sidewalks near spray arcs can waste water. Nozzle matching and arc adjustment help direct water where it is needed.'
        },
        {
          title: 'Soil Movement and System Wear',
          description:
            'Clay expansion and contraction can impact head alignment and fittings over time, making seasonal inspection essential for reliability.'
        }
      ]}
      pricing={[
        { label: 'Seasonal Check-Up', range: '$165-$325' },
        { label: 'Controller + Sensor Upgrade', range: '$425-$1,100' },
        { label: 'Drainage Correction Scope', range: '$1,750-$7,000' }
      ]}
      processSteps={[
        'Marshall Ridge property and controller audit',
        'Zone-by-zone pressure and coverage testing',
        'Repair scope confirmation with transparent pricing',
        'Precision repairs and efficiency upgrades',
        'Final walkthrough with seasonal programming guidance'
      ]}
      faqs={[
        {
          question: 'How often should Marshall Ridge systems be checked?',
          answer:
            'We recommend at least two checkups each year, typically spring and late summer, to catch issues before peak stress periods.'
        },
        {
          question: 'Can you help reduce runoff near sidewalks?',
          answer:
            'Yes. We correct head spacing, nozzle selection, pressure issues, and runtimes to reduce misting and hardscape overspray.'
        },
        {
          question: 'Do you provide drainage recommendations with irrigation work?',
          answer:
            'Absolutely. We frequently combine irrigation tuning with drainage planning when pooling and runoff are affecting landscape health.'
        }
      ]}
      relatedAreas={[
        { name: 'Hidden Lakes', description: 'Mature landscape irrigation balancing and drainage planning.', link: '/keller/hidden-lakes' },
        { name: 'Oakmont', description: 'Clay-soil focused repairs and smart upgrades.', link: '/keller/oakmont' },
        { name: 'Ridgewood', description: 'Local system checks and responsive repair support.', link: '/keller' }
      ]}
      popularServices={[
        {
          title: 'Sprinkler System Check-Up',
          description: 'Seasonal audits to improve performance and reduce waste.',
          link: '/keller/sprinkler-system-check-up-services-in-keller-tx'
        },
        {
          title: 'Sprinkler Reroutes',
          description: 'Reroutes for hardscape projects, pools, and layout changes.',
          link: '/keller/sprinkler-system-reroutes-services-in-keller-tx'
        },
        {
          title: 'Irrigation Repair',
          description: 'Reliable valve, wiring, and pressure troubleshooting.',
          link: '/keller/irrigation-repair-services-in-keller-tx'
        }
      ]}
      attractions={[
        {
          name: 'Keller Sports Park',
          url: 'https://www.cityofkeller.com/services-and-amenities/parks-trails/park-and-trail-directory/sports-park',
          description: 'A major recreation destination with baseball, soccer, and walking routes popular with Keller families.'
        },
        {
          name: 'The Keller Pointe',
          url: 'https://www.thekellerpointe.com/',
          description: 'Fitness, aquatics, and community programming close to Marshall Ridge daily routines.'
        },
        {
          name: 'Sky Creek Ranch Golf Club',
          url: 'https://www.skycreekranch.com/',
          description: 'Nearby course and event venue that highlights the area’s active outdoor lifestyle.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Residents in Marshall Ridge benefit from proximity to the{' '}
            <a
              href="https://www.kellerisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller Independent School District
            </a>
            , nearby parks, and community resources through the{' '}
            <a
              href="https://www.cityofkeller.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Keller
            </a>
            .
          </p>
          <p>
            Easy access to the{' '}
            <a
              href="https://www.cityofkeller.com/services-and-amenities/library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller Public Library
            </a>{' '}
            and dining options including{' '}
            <a
              href="https://www.chefpointcafe.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Chef Point
            </a>{' '}
            and{' '}
            <a
              href="https://www.oakstbar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Oak Street Bar and Grill
            </a>{' '}
            makes the neighborhood convenient for both weekday routines and weekend activities.
          </p>
        </>
      }
    />
  );
}
