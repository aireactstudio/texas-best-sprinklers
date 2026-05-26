import React from 'react';
import { notFound } from 'next/navigation';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { KELLER_NEIGHBORHOOD_BY_SLUG } from '@/data/neighborhoods/kellerNeighborhoods';

export default function OakmontPage() {
  const neighborhood = KELLER_NEIGHBORHOOD_BY_SLUG['oakmont'];

  if (!neighborhood) {
    notFound();
  }

  return (
    <NeighborhoodPageTemplate
      cityName={neighborhood.cityName}
      citySlug={neighborhood.citySlug}
      neighborhoodName={neighborhood.neighborhoodName}
      canonicalUrl="https://sprinkleranddrains.com/keller/oakmont"
      pageTitle="Oakmont Sprinkler Repair and Drainage in Keller, TX"
      metaDescription="Oakmont irrigation repair, drip upgrades, and drainage recommendations in Keller, TX for reliable seasonal performance."
      heroTitle={neighborhood.heroTitle}
      heroDescription={neighborhood.heroDescription}
      introHeading="Targeted Water Management for Oakmont Homes"
      intro={neighborhood.intro}
      highlights={neighborhood.highlights}
      serviceFocus={neighborhood.serviceFocus}
      localTips={neighborhood.localTips}
      reviews={[
        {
          reviewer: 'Jordan in Oakmont',
          date: 'April 2026',
          quote:
            'They solved a recurring runoff issue and reworked our drip zones. Plant health improved quickly and our watering is easier to manage.'
        },
        {
          reviewer: 'Rachel in Oakmont',
          date: 'February 2026',
          quote:
            'Very knowledgeable team. They explained exactly why our pressure was unstable and fixed it without pushing unnecessary work.'
        },
        {
          reviewer: 'Mike in Oakmont',
          date: 'January 2026',
          quote:
            'Prompt scheduling and straightforward pricing. We now have balanced coverage and fewer dry spots near the fence line.'
        }
      ]}
      considerations={[
        {
          title: 'Oakmont Clay-Soil Moisture Swings',
          description:
            'Expansive clay soil can alternate between very dry and saturated conditions. Better runtime strategy and zone calibration are key for stable root hydration.'
        },
        {
          title: 'Foundation and Bed Watering Balance',
          description:
            'Many homes need careful irrigation near foundations and planting beds. Drip upgrades improve control and reduce overspray in tight spaces.'
        },
        {
          title: 'Drainage Pathways After Storms',
          description:
            'Pooling can form in lower yard sections after heavy rain. Coordinated drainage and irrigation adjustments help protect turf and hardscape.'
        },
        {
          title: 'Pressure Management for Uniform Coverage',
          description:
            'Pressure imbalances often cause misting and uneven distribution. Matching nozzles and correcting zone pressure improves efficiency.'
        }
      ]}
      pricing={[
        { label: 'Irrigation Repair Scope', range: '$180-$500 typical projects' },
        { label: 'Drip Conversion or Expansion', range: '$400-$1,400' },
        { label: 'Drainage Planning and Install', range: '$1,900-$7,500' }
      ]}
      processSteps={[
        'Oakmont site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations',
        'Implementation with cleanup and testing',
        'Final walkthrough and adjustment plan'
      ]}
      faqs={[
        {
          question: 'Does Oakmont soil require different sprinkler schedules?',
          answer:
            'Usually yes. Clay-heavy soil typically benefits from shorter cycle-and-soak watering windows to reduce runoff and increase absorption.'
        },
        {
          question: 'Can you add drip to existing zones in Oakmont?',
          answer:
            'Yes. We can convert or split zones with proper filtration and pressure regulation so beds and foundations receive targeted watering.'
        },
        {
          question: 'How quickly can drainage concerns be evaluated?',
          answer:
            'Most drainage evaluations can be scheduled quickly. We document flow patterns and provide practical options based on your layout and budget.'
        }
      ]}
      relatedAreas={[
        { name: 'Hidden Lakes', description: 'Large-lot irrigation and drainage planning.', link: '/keller/hidden-lakes' },
        { name: 'Marshall Ridge', description: 'Performance tuning for HOA-focused landscapes.', link: '/keller/marshall-ridge' },
        { name: 'Ridgewood', description: 'General sprinkler and irrigation support in Keller.', link: '/keller' }
      ]}
      popularServices={[
        {
          title: 'Drip Irrigation',
          description: 'Efficient root-zone watering for beds, trees, and foundation areas.',
          link: '/keller/drip-irrigation-services-in-keller-tx'
        },
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve corrections, and system troubleshooting.',
          link: '/keller/sprinkler-repair-services-in-keller-tx'
        },
        {
          title: 'Yard Drainage Systems',
          description: 'Drainage solutions to reduce standing water and erosion risk.',
          link: '/services/yard-drainage-systems'
        }
      ]}
      attractions={[
        {
          name: 'Bear Creek Park',
          url: 'https://www.cityofkeller.com/services-and-amenities/parks-trails/park-and-trail-directory/bear-creek-park',
          description: 'A neighborhood-friendly green space with trails and fields used heavily by nearby residents.'
        },
        {
          name: 'Keller Farmers Market',
          url: 'https://www.kellerfarmersmarket.com/',
          description: 'Weekly local market that supports small vendors and provides a regular weekend destination.'
        },
        {
          name: 'Keller Town Hall Campus',
          url: 'https://www.cityofkeller.com/government',
          description: 'Core civic area with city resources and events that serve the broader Keller community.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Oakmont homeowners are close to services from the{' '}
            <a
              href="https://www.cityofkeller.com/services-and-amenities/library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller Public Library
            </a>{' '}
            and local programming managed by{' '}
            <a
              href="https://www.cityofkeller.com/services-and-amenities/parks-trails"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller Parks and Trails
            </a>
            .
          </p>
          <p>
            Families in this area also rely on resources from{' '}
            <a
              href="https://www.kellerisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller ISD
            </a>{' '}
            and nearby dining options such as{' '}
            <a
              href="https://www.mariasmexicankitchen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Maria Cuca&apos;s Mexican Cuisine
            </a>{' '}
            and{' '}
            <a
              href="https://www.olivegarden.com/locations/tx/keller/keller/1862"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Olive Garden Keller
            </a>
            .
          </p>
        </>
      }
    />
  );
}
