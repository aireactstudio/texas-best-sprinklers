import React from 'react';
import { notFound } from 'next/navigation';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { KELLER_NEIGHBORHOOD_BY_SLUG } from '@/data/neighborhoods/kellerNeighborhoods';

export default function HiddenLakesPage() {
  const neighborhood = KELLER_NEIGHBORHOOD_BY_SLUG['hidden-lakes'];

  if (!neighborhood) {
    notFound();
  }

  return (
    <NeighborhoodPageTemplate
      cityName={neighborhood.cityName}
      citySlug={neighborhood.citySlug}
      neighborhoodName={neighborhood.neighborhoodName}
      canonicalUrl="https://sprinkleranddrains.com/keller/hidden-lakes"
      pageTitle="Hidden Lakes Sprinkler Services in Keller, TX"
      metaDescription="Sprinkler repair, irrigation upgrades, and drainage services in Hidden Lakes, Keller, TX with licensed local technicians."
      heroTitle={neighborhood.heroTitle}
      heroDescription={neighborhood.heroDescription}
      introHeading="Irrigation Planning for Hidden Lakes Properties"
      intro={neighborhood.intro}
      highlights={neighborhood.highlights}
      serviceFocus={neighborhood.serviceFocus}
      localTips={neighborhood.localTips}
      reviews={[
        {
          reviewer: 'Melissa in Hidden Lakes',
          date: 'March 2026',
          quote:
            'They found a leak we had been chasing for months and corrected our zone runtimes the same day. Coverage is finally consistent again.'
        },
        {
          reviewer: 'David in Hidden Lakes',
          date: 'February 2026',
          quote:
            'Great communication and very clean work. They upgraded our controller and fixed runoff near the back patio with a practical drainage plan.'
        },
        {
          reviewer: 'Alicia in Hidden Lakes',
          date: 'January 2026',
          quote:
            'Fast response, clear pricing, and no pressure. Our beds and lawn look healthier with less water than before.'
        }
      ]}
      considerations={[
        {
          title: 'Hidden Lakes Shade-to-Sun Transitions',
          description:
            'Many Hidden Lakes lots combine mature tree canopy with open lawn. Zone runtimes and nozzle choice need balancing so shaded turf is not overwatered while sunny turf stays healthy.'
        },
        {
          title: 'Clay Soil and Runoff Control',
          description:
            'North Texas clay can reject water during heavy cycles. Cycle-and-soak scheduling and targeted drainage reduce runoff and help water move into the root zone.'
        },
        {
          title: 'Landscape Preservation Around Mature Beds',
          description:
            'Larger planting beds in this neighborhood benefit from drip zones and lower-flow delivery to protect mulch lines, shrubs, and decorative edges.'
        },
        {
          title: 'Consistent Curb Appeal Standards',
          description:
            'Homeowners often prioritize uniform turf appearance year-round. Preventive checkups and seasonal adjustments keep performance reliable through changing weather.'
        }
      ]}
      pricing={[
        { label: 'Sprinkler Repair Visit', range: '$175-$450 typical scope' },
        { label: 'Smart Controller Upgrade', range: '$450-$1,050 installed' },
        { label: 'Drainage Improvement', range: '$1,500-$6,500 based on layout' }
      ]}
      processSteps={[
        'Hidden Lakes site walkthrough and full-zone evaluation',
        'Written recommendations and scope confirmation',
        'Clean repairs or upgrades with premium components',
        'Runtime calibration and pressure optimization',
        'Final walkthrough with maintenance guidance'
      ]}
      faqs={[
        {
          question: 'Can you usually finish Hidden Lakes sprinkler repairs in one visit?',
          answer:
            'Most common repairs are completed in one visit when standard parts are available. Larger manifold or wiring issues may require a scheduled follow-up.'
        },
        {
          question: 'Do you help with watering restriction compliance?',
          answer:
            'Yes. We adjust programs for local watering schedules and set cycle-and-soak runtimes to reduce runoff while keeping turf healthy.'
        },
        {
          question: 'What is the best upgrade for older controllers?',
          answer:
            'A Wi-Fi smart controller with rain and freeze safeguards is usually the best first upgrade for better efficiency and easier seasonal changes.'
        }
      ]}
      relatedAreas={[
        { name: 'Marshall Ridge', description: 'HOA-focused irrigation tuning and seasonal checkups.', link: '/keller/marshall-ridge' },
        { name: 'Oakmont', description: 'Repairs and drainage strategies for clay-heavy soil.', link: '/keller/oakmont' },
        { name: 'Ridgewood', description: 'Fast sprinkler diagnostics and system tune-ups.', link: '/keller' }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Broken heads, valve leaks, wiring issues, and uneven coverage corrections.',
          link: '/keller/sprinkler-repair-services-in-keller-tx'
        },
        {
          title: 'Irrigation Repair',
          description: 'System-level diagnostics for pressure, zone control, and controller performance.',
          link: '/keller/irrigation-repair-services-in-keller-tx'
        },
        {
          title: 'Drainage Solutions',
          description: 'French drains and runoff planning for low spots and pooling concerns.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'The Keller Pointe',
          url: 'https://www.thekellerpointe.com/',
          description: 'A popular community recreation center with indoor and outdoor facilities close to Hidden Lakes.'
        },
        {
          name: 'Bear Creek Park',
          url: 'https://www.cityofkeller.com/services-and-amenities/parks-trails/park-and-trail-directory/bear-creek-park',
          description: 'Large park space with trails and fields that many neighborhood residents use throughout the week.'
        },
        {
          name: 'Keller Town Center',
          url: 'https://www.cityofkeller.com/government/departments/economic-development',
          description: 'Central dining and shopping area that anchors day-to-day convenience for nearby neighborhoods.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Hidden Lakes families are supported by the{' '}
            <a
              href="https://www.kellerisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller Independent School District
            </a>{' '}
            and have quick access to parks managed by the{' '}
            <a
              href="https://www.cityofkeller.com/services-and-amenities/parks-trails"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller Parks and Recreation Department
            </a>
            .
          </p>
          <p>
            Neighborhood access to{' '}
            <a
              href="https://www.cityofkeller.com/services-and-amenities/library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller Public Library
            </a>{' '}
            and local dining such as{' '}
            <a
              href="https://www.decadentdessertbar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Decadent Dessert Bar
            </a>{' '}
            and{' '}
            <a
              href="https://www.devlivoak.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              DeVivo Bros. Eatery
            </a>{' '}
            keeps daily errands and weekend plans close to home.
          </p>
        </>
      }
    />
  );
}
