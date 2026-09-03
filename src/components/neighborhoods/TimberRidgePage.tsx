import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function TimberRidgePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Euless"
      citySlug="euless"
      neighborhoodName="Timber Ridge"
      canonicalUrl="https://sprinkleranddrains.com/euless/timber-ridge"
      pageTitle="Timber Ridge Sprinkler Repair & Drainage in Euless, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Timber Ridge in Euless, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Timber Ridge Sprinkler Repair & Drainage"
      heroDescription="Timber Ridge homeowners count on irrigation that performs through North Texas heat and clay-soil swings. Texas Best Sprinklers helps you repair failing heads and valves, tune controller runtimes, and plan drainage so water soaks in where it should."
      introHeading="Water-smart irrigation planning for Timber Ridge properties"
      intro={
        <>
          <p>
            Timber Ridge is the kind of established Euless neighborhood where lawns and landscape beds need irrigation that adapts
            to seasonal heat, mature trees, and clay soil performance. When coverage becomes uneven, homeowners notice it fast:
            dry strips along walkways, soft spots near low yard corners, and runoff after longer watering windows.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting serves Timber Ridge as part of our Euless work. We’re a licensed irrigator
            (LI22462), we diagnose zone-by-zone, and we program controllers around local watering rules. If your yard also shows
            pooling after storms, we recommend practical drainage options—so the irrigation problem and the runoff problem aren’t treated
            as if they’re separate.
          </p>
        </>
      }
      highlights={[
        'Clay-soil watering strategies that reduce runoff and keep turf rooted through hot, dry stretches.',
        'Leak repairs and nozzle matching for consistent zone coverage and better water distribution.',
        'Controller tuning so seasonal schedules don’t overload beds or create dry bands.',
        'Drainage planning for patio lows, side-yard pooling, and runoff after Mid-Cities storms.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, and uneven coverage that dries out visible lawn areas.',
        'Irrigation diagnostics and controller troubleshooting when zones skip, cycle inconsistently, or waste water.',
        'Drip irrigation upgrades for foundation beds and planted areas where spray creates oversaturation or overspray.',
        'Drainage solutions for low spots, standing water, and stormwater runoff that lingers after rain.',
        'Outdoor lighting service to protect evening curb appeal by keeping entries and walkways visible after repairs.'
      ]}
      localTips={[
        'Use cycle-and-soak programming on clay so water has time to absorb instead of shedding across sidewalks and lower turf corners.',
        'Check head height and spray patterns after mowing—settling and tilted risers quickly create stripes and dry edges.',
        'Inspect valve boxes and low lawn depressions after heavy rain. Small leaks and drainage issues show up together in established lots.',
        'Adjust schedules seasonally so your controller isn’t treating mild months like peak summer runtime.'
      ]}
      trustCards={[
        {
          title: 'Water-efficient irrigation under Euless rules',
          description:
            'Euless time-of-day watering ordinances and general conservation expectations matter. We program runtimes and schedules to reduce waste while keeping turf healthy.'
        },
        {
          title: 'Clay-soil cycle-and-soak consistency',
          description:
            'North Texas clay often resists a long first cycle. We tune zone runtime strategy so water moves into the root zone and doesn’t run off before absorption.'
        },
        {
          title: 'Foundation-aware drip and spray control',
          description:
            'Foundation beds, shrubs, and mulch lines perform best with filtered delivery. Drip upgrades help reduce overspray and improve control near walls and hardscape.'
        },
        {
          title: 'Clean curb appeal after repairs',
          description:
            'We focus on visible alignment—head spacing, spray angles, and controlled watering lines—so your front-yard look stays intentional after irrigation and drainage work.'
        }
      ]}
      reviews={[
        fortWorthReview
          ? {
              reviewer: fortWorthReview.name,
              location: 'Fort Worth, TX',
              date: fortWorthReview.time,
              quote: fortWorthReview.content,
              stars: fortWorthReview.stars
            }
          : {
              reviewer: 'Michael Thompson',
              location: 'Fort Worth, TX',
              date: '2 months ago',
              quote: 'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system.',
              stars: 5
            },
        arlingtonReview
          ? {
              reviewer: arlingtonReview.name,
              location: 'Arlington, TX',
              date: arlingtonReview.time,
              quote: arlingtonReview.content,
              stars: arlingtonReview.stars
            }
          : {
              reviewer: 'Sarah Johnson',
              location: 'Arlington, TX',
              date: '3 months ago',
              quote: 'The team installed smart controller improvements and communication was excellent.',
              stars: 5
            },
        kellerReview
          ? {
              reviewer: kellerReview.name,
              location: 'Keller, TX',
              date: kellerReview.time,
              quote: kellerReview.content,
              stars: kellerReview.stars
            }
          : {
              reviewer: 'David Rodriguez',
              location: 'Keller, TX',
              date: '1 month ago',
              quote: 'Their technical expertise ensured the right irrigation solution for healthy landscape growth.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Timber Ridge street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work at a low patio on a Texas Best Sprinklers project',
          caption: 'French drain for pooling control — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at entries and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Timber Ridge',
        title: 'A dry sidewalk strip, a soggy corner, and a controller still on a summer schedule',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Euless / nearby DFW service — not a named Timber Ridge street.',
        body:
          'A common call in Timber Ridge-area neighborhoods starts with what homeowners can see: a sunny strip along a walk browns out too fast, a corner near a low yard depression stays soft, and after storms some spots hold water longer than expected. Clay often sheds before roots absorb when the first cycle is too long, and small leaks or mis-matched nozzles can make zone coverage feel inconsistent. We diagnose pressure, head height, and run-time behavior, then align spray patterns and repair failing components. If pooling appears alongside irrigation, we also recommend drainage options so water has a path to leave the yard the right way.'
      }}
      considerations={[
        {
          title: 'Timber Ridge clay and cycle-and-soak performance',
          description:
            'Expansive North Texas clay can reject a long first cycle. Shorter repeats help water soak in deeper instead of running off into sidewalks, gutters, or low lawn corners.'
        },
        {
          title: 'Heat, ET, and Euless controller schedules',
          description:
            'Euless summers push evapotranspiration hard, but controllers often keep running like it is still peak August. We tune seasonal start times and runtimes so systems don’t overwater beds or under-water turf.'
        },
        {
          title: 'Foundation-aware irrigation and drip upgrades',
          description:
            'Near foundation beds, spray can cause oversaturation and overspray on walls, windows, and mulch lines. Drip conversion gives tighter control at the plant root zone.'
        },
        {
          title: 'Drainage after storms in established Mid-Cities yards',
          description:
            'Pooling can form where grades settle, especially near patios, side yards, and curb-edge transitions. Drainage planning helps complement irrigation repairs instead of fighting standing water.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180-$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400-$1,400' },
        { label: 'Drainage planning and install', range: '$1,900-$7,500' }
      ]}
      processSteps={[
        'Timber Ridge site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis for uneven coverage and leaks',
        'Repair and upgrade recommendations (spray vs drip) based on what we find',
        'Implementation with cleanup and zone testing for reliable operation',
        'Walkthrough, seasonal schedule guidance, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Timber Ridge?',
          answer:
            'Sprinkler repairs that replace heads, valves, or controller settings typically stay within your existing setup. Drainage work that changes grading, adds visible piping, or affects drainage pathways may require City of Euless guidance and, if applicable, Timber Ridge deed restrictions or HOA review. We describe the visible scope before work starts so you can confirm the right requirements for your property.'
        },
        {
          question: 'What’s the best approach for watering Timber Ridge clay soil?',
          answer:
            'Most Timber Ridge yards do best with cycle-and-soak timing on turf, separate attention for shade vs full sun areas, and drip or filtered delivery at foundation beds. That approach helps clay absorb water more reliably and reduces the chance of runoff during longer cycles.'
        },
        {
          question: 'What repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180-$500, drip conversion or expansion $400-$1,400, and drainage planning and install $1,900-$7,500. Your scope depends on access, part condition, and whether pooling is irrigation-related, drainage-related, or both.'
        },
        {
          question: 'How fast can you diagnose a leak or a dry zone?',
          answer:
            'Most head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are available. Wiring faults, main-line issues, or drainage that requires layout assessment may need a follow-up.'
        },
        {
          question: 'How do you set controllers for Euless watering restrictions?',
          answer:
            'We program schedules to respect Euless time-of-day watering ordinances and focus on efficient runtimes. We also recommend rain/freeze protection when appropriate and use cycle-and-soak so clay doesn’t run water off into low areas.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Wilshire Village',
          description: 'Sprinkler repair and drainage planning for nearby Euless homes in the Mid-Cities.',
          link: '/euless/wilshire-village'
        },
        {
          name: 'Bear Creek (nearby)',
          description: 'Irrigation diagnostics and drainage support for nearby Mid-Cities lots.',
          link: '/euless'
        },
        {
          name: 'Oakwood Terrace (nearby)',
          description: 'Seasonal sprinkler tune-ups and clay-focused irrigation calibration for nearby Euless yards.',
          link: '/euless'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Broken heads, leaking valves, low-pressure zones, and uneven coverage corrections across lawns and beds.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed conversions so spray stops soaking mulch, shrubs, and hardscape edges.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'French drains, runoff planning, and practical fixes for pooling and lingering water after storms.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Bob Eden Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/bob-eden-park',
          description: 'A large Euless park with trails and recreation space that helps residents judge how outdoor weather and irrigation runoff affect nearby yards.'
        },
        {
          name: 'Heritage Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/heritage-park',
          description: 'A historic park at 203 Cullum Dr. Useful local context for how stormwater and drainage work across older Euless properties.'
        },
        {
          name: 'Euless Family Life Center',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/euless-family-life-center',
          description: 'Midway Park recreation center with track and amenities that connect families to parks, playgrounds, and outdoor watering seasons.'
        },
        {
          name: 'Mary Lib Saleh Euless Public Library',
          url: 'https://www.eulesstx.gov/Home/Components/FacilityDirectory/FacilityDirectory/8/34',
          description: 'The city library is a regular stop for homework, events, and community programs—plus a helpful local landmark for placing Timber Ridge on the map.'
        },
        {
          name: 'Dog Park at Villages of Bear Creek',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/parks/dog-park',
          description: 'A fenced dog park that highlights the active outdoor lifestyle around nearby Bear Creek Park amenities.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Timber Ridge is tied to Euless parks and recreation. Residents often spend time at{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/bob-eden-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bob Eden Park
            </a>
            , visit the historical area at{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/heritage-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Heritage Park
            </a>
            , and use recreation facilities at the{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/euless-family-life-center"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Euless Family Life Center
            </a>
            .
          </p>
          <p>
            Outdoor irrigation rules in Euless are guided by city and supply realities. Check the{' '}
            <a
              href="https://www.eulesstx.gov/community/environment/water-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Conservation
            </a>{' '}
            guidance, then follow weekly updates from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            for ET-based watering context. Regional supply comes through{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>
            . For families, the{' '}
            <a
              href="https://www.eulesstx.gov/departments/library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Euless Public Library
            </a>{' '}
            and{' '}
            <a
              href="https://www.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              HEB ISD
            </a>{' '}
            schedules shape daily routines—so we help homeowners plan efficient irrigation that fits real life.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Timber Ridge?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}

