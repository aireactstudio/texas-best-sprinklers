import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function BellaireParkNorthPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Hurst"
      citySlug="hurst"
      neighborhoodName="Bellaire Park North"
      canonicalUrl="https://sprinkleranddrains.com/hurst/bellaire-park-north"
      pageTitle="Bellaire Park North Sprinkler Repair and Drainage in Hurst, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Bellaire Park North in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Bellaire Park North Sprinkler Repair & Drainage"
      heroDescription="Southeast Hurst around Bellaire Park and Vivagene Copeland Park mixes 1970s apartment courtyards, neighborhood retail on Bellaire Drive, and nearby clay lots that drain toward Pecan Drive. We diagnose leaks, split watering calendars, and plan drainage that stays on the property instead of sheeting onto park trails."
      introHeading="Park-edge clay and courtyard turf do not share one watering calendar"
      intro={
        <>
          <p>
            Bellaire Park North is the southeast Hurst pocket named for the city parkland on Pecan Drive. Bellaire Park at 500
            Pecan Drive opened in 1962 on 6.4 acres. In 1993 the city added 5.2 acres as Bellaire North Park; that tract is now
            Vivagene Copeland Park at 501 Pecan Drive. Together the parks hold athletic fields, a playground, a walking trail,
            and a pavilion. The Bellaire Park Addition plat on Tarrant Appraisal District records is not a gated ranch
            subdivision. It includes apartment communities such as Oasis Springs at 601 Bellaire Drive (late 1970s) and Glen
            Rose Park Apartments at 745 E. Pecan Street (mid-1970s, about 16 acres), plus neighborhood retail on Bellaire Drive
            from the early 1970s. Bellaire Elementary sits at 501 Bellaire Drive. Nearby southeast Hurst homes use the same
            streets and the same park grade. This is a mixed housing edge, not a single HOA lawn type, and irrigation has to
            treat amenity turf, courtyard planters, and private yards as different jobs.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Bellaire Park North as part of our Hurst and Mid-Cities work.
            We are a licensed irrigator (LI22462). Hurst watering is year-round: even addresses Wednesday and Saturday, odd
            addresses Thursday and Sunday, no Monday spray, and no automatic irrigation from 10 a.m. to 6 p.m. Apartments,
            businesses, and city parks are nonresidential and water Tuesday and Friday. Drip, handheld hoses, and soaker lines
            are treated separately from spray. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly ET advice instead of leaving an August program running into fall. We do not claim a count of jobs on Bellaire
            Drive or Pecan Drive, and we do not confuse this pocket with Fort Worth&apos;s Bellaire Park North or with Bellaire
            Place Addition on Brown Trail Court. We walk zones, protect established landscape, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Apartment amenity lawns and courtyard planters run on Tuesday/Friday nonresidential days, while nearby homes follow even/odd addresses — one controller clock cannot serve both.',
        '1970s courtyard irrigation often has sunken heads, brittle laterals, and throw that hits parking, walks, and building walls instead of turf.',
        'Lots and pads that fall toward Bellaire Park and Vivagene Copeland Park send leftover irrigation and stormwater onto the shared trail and field edge.',
        'Bellaire Elementary at 501 Bellaire Drive and park-path traffic make overspray and brown strips visible all week, even without a gated HOA.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, low-pressure courtyard zones, and dry bands along Bellaire Drive and Pecan Drive edges.',
        'Drip conversion at foundation beds, courtyard planters, and tree rings so spray stops soaking brick, mulch, and parking pavement.',
        'Controller programming that splits residential even/odd days from apartment and common-area Tuesday/Friday schedules under Hurst’s 10 a.m.–6 p.m. spray ban.',
        'Drainage planning for compacted apartment pads, patio lows, and runoff that follows grade toward the combined Bellaire / Copeland park.',
        'Outdoor lighting repair and additions for entries, walks, and courtyard trees that stay readable after dark without changing the street character.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Hurst clay can absorb water instead of sheeting toward Pecan Drive, parking lots, or the park walking trail.',
        'Walk zones after mowing. Settling heads on 1970s courtyard and nearby home lots tilt quickly and stripe the visible turf along Bellaire Drive.',
        'Keep spray off building walls, sidewalks, and park-path approaches. This pocket has no gated HOA, but school and park traffic still see every miss.',
        'Do not run a residential even/odd clock on apartment common turf. Hurst treats apartments, businesses, and parks as Tuesday/Friday watering.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET advice, and Hurst still bans spray between 10 a.m. and 6 p.m. year-round.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without a gated HOA',
          description:
            'Bellaire Park North is civic parkland plus apartments and nearby homes, not a single architectural committee. We still match heads, straighten risers, and cut overspray so Bellaire Drive, Pecan Drive, and the school approach look even.'
        },
        {
          title: 'Water efficiency under Hurst rules',
          description:
            'Hurst uses even/odd residential days, Tuesday/Friday for apartments and parks, no Monday, and no spray from 10 a.m. to 6 p.m. We set start times, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not treating October like August.'
        },
        {
          title: 'Park-edge clay and mixed shade',
          description:
            'Expansive clay plus compacted courtyard pads and a few mature trees create wet pockets next to baked amenity strips. Long single cycles run off toward the park. We rebalance zones instead of only adding runtime.'
        },
        {
          title: 'Courtyard drip and storm drainage',
          description:
            'Foundation and planter drip keeps water on plants instead of brick and parking. After heavy rain we look at downspouts and low pads so irrigation is not fighting standing water headed toward Bellaire Park or Vivagene Copeland Park.'
        }
      ]}
      reviews={[
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
              quote:
                'As a property manager, I have worked with many irrigation companies. Texas Best Sprinklers is professional and reliable, and the smart controller work saved water.',
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
              quote:
                'I partner with Texas Best Sprinklers on client projects. Their attention to detail and technical expertise keeps landscapes supported by the right irrigation.',
              stars: 5
            },
        colleyvilleReview
          ? {
              reviewer: colleyvilleReview.name,
              location: 'Colleyville, TX',
              date: colleyvilleReview.time,
              quote: colleyvilleReview.content,
              stars: colleyvilleReview.stars
            }
          : {
              reviewer: 'Robert Johnson',
              location: 'Colleyville, TX',
              date: '4 months ago',
              quote:
                'They diagnosed the problem quickly and had it fixed the same day. The technician showed me how to program the controller for water conservation.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Bellaire Park North street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work at a low patio on a Texas Best Sprinklers project',
          caption: 'French drain at a low patio — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Bellaire Park North',
        title: 'A courtyard strip stayed wet while the park-facing turf stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Hurst / nearby DFW service — not a named Bellaire Drive or Pecan Drive address.',
        body: 'A common call on this southeast Hurst edge looks like this: courtyard spray still runs on a residential even/odd clock, amenity turf by the parking lot browns out, and leftover water follows compacted clay toward the Bellaire / Copeland park trail after storms. Heads have sunk below the mower line and hit walks or building walls. We map zones, check static and operating pressure, match nozzles so throw stays on turf, and move planters and foundation beds onto drip. Controllers get the right Hurst calendar — Tuesday/Friday for apartment common areas, even/odd for nearby homes — plus cycle-and-soak windows that start outside the 10 a.m.–6 p.m. spray ban. If the wet pad is irrigation plus downspouts and settled grade, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the property.'
      }}
      considerations={[
        {
          title: 'Bellaire Park North clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Bellaire Park North lots and courtyard pads often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Pecan Drive, parking pavement, and the park trail.'
        },
        {
          title: 'Heat, ET, and Bellaire Park North controller schedules',
          description:
            'Mid-Cities summers push evapotranspiration hard. We set seasonal programs around Hurst even/odd or Tuesday/Friday days and point owners and managers to Water is Awesome weekly guidance so Bellaire Park North systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Mixed housing calendars in Bellaire Park North',
          description:
            'Apartments and city park turf water Tuesday and Friday. Nearby homes water Wednesday/Saturday or Thursday/Sunday. Using one clock for both wastes water and can violate Hurst’s year-round ordinance. We label zones and set the days that actually apply.'
        },
        {
          title: 'Park-edge drainage and foundation drip in Bellaire Park North',
          description:
            'Grade toward Bellaire Park and Vivagene Copeland Park means leftover irrigation and stormwater can leave the lot. Foundation and planter drip, check valves on downhill heads, and a drainage plan for low pads keep water on the property instead of on the trail.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Bellaire Park North site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit apartment access, nearby homes, and park-edge grade',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Bellaire Park North?',
          answer:
            'Bellaire Park North is park-adjacent southeast Hurst, not a gated architectural HOA. Apartment communities have property management rules for common-area work. Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters a street or courtyard view, may still need City of Hurst guidance depending on scope. We describe the visible work before it starts so you can check management or city requirements. We do not file permit or association applications unless that is arranged separately.'
        },
        {
          question: 'How should we water Bellaire Park North clay, courtyards, and park-edge lots?',
          answer:
            'Most properties here need cycle-and-soak on turf, drip at planters and foundation beds, and a calendar that matches the account type. Apartment and park turf is Tuesday/Friday. Nearby homes are even Wednesday/Saturday or odd Thursday/Sunday, with no Monday and no spray from 10 a.m. to 6 p.m. Long single cycles sheet across clay toward Pecan Drive. We set programs around those rules and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, courtyard access, existing pipe condition, and how far grade falls toward the park change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Bellaire Park North?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Root-damaged laterals, main-line leaks, or drainage that needs a layout may need a follow-up. Same-week scheduling is typical; active leaks get priority. We plan around Bellaire Elementary drop-off and park-path parking when we can.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'Hurst’s year-round ordinance is even addresses Wednesday and Saturday, odd addresses Thursday and Sunday, apartments and other nonresidential sites Tuesday and Friday, no Monday, and no automatic spray from 10 a.m. to 6 p.m. Drip, handheld, and soaker watering are treated separately. We program start times that fit those windows, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street or park trail. Confirm the latest notice on the City of Hurst water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Mayfair North',
          description: 'Sprinkler repair and park-edge watering help for north Hurst homes near Norwood Drive.',
          link: '/hurst'
        },
        {
          name: 'Hurst Hills',
          description: 'Irrigation diagnostics and clay-soil scheduling for established Hurst Hills streets.',
          link: '/hurst'
        },
        {
          name: 'Shady Oaks',
          description: 'Coverage troubleshooting and drainage planning for nearby Hurst lots with mixed-era irrigation.',
          link: '/hurst'
        },
        {
          name: 'Wintergreen Acres',
          description: 'Seasonal sprinkler service and drainage support across north Hurst.',
          link: '/hurst'
        },
        {
          name: 'Wilshire Village',
          description: 'Sprinkler repair and drainage planning for nearby Euless homes in the Mid-Cities.',
          link: '/euless/wilshire-village'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, courtyard dry spots, and pressure issues on Bellaire Park North properties.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for compacted pads, patio lows, and clay runoff that moves toward Pecan Drive and the park trail.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and planter conversions that keep water on plants instead of brick, parking, and courtyard walks.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Vivagene Copeland Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/80/887',
          description:
            'The 5.2-acre park at 501 Pecan Drive, opened in 1993 as Bellaire North Park. Fields, playground, trail, and pavilion sit next to Bellaire Park and set the grade that nearby lots drain toward.'
        },
        {
          name: 'Hurst Parks List and Map',
          url: 'https://www.hursttx.gov/about-us/departments/parks/parks-list-and-map',
          description:
            'Official city listing for Bellaire Park at 500 Pecan Drive (1962, 6.4 acres) and the rest of Hurst parkland. Combined with Copeland, this is about 11.6 acres of southeast Hurst greenspace.'
        },
        {
          name: 'Bellaire Elementary',
          url: 'https://bellaire.hebisd.edu/',
          description:
            'HEB ISD campus at 501 Bellaire Drive, built in 1960. School-zone traffic and the campus lawn are everyday context for how courtyards and front yards on this street are seen.'
        },
        {
          name: 'Hurst Public Library',
          url: 'https://www.hursttx.gov/about-us/departments/library',
          description:
            'The library at 901 Precinct Line Road is a regular civic stop for southeast Hurst families and a straightforward landmark when placing Bellaire Park North on the city map.'
        },
        {
          name: 'Hurst Community Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/164/887',
          description:
            'Fields, playground, and walking trail at 601 Precinct Line Road — a short trip from Pecan Drive and another example of how Hurst clay and stormwater behave on public turf.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Bellaire Park North is tied to the{' '}
            <a
              href="https://www.hursttx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Hurst
            </a>
            , campuses in the{' '}
            <a
              href="https://www.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst-Euless-Bedford Independent School District
            </a>
            , and the neighborhood campus at{' '}
            <a
              href="https://bellaire.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bellaire Elementary
            </a>
            . Families also use the{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst Public Library
            </a>{' '}
            and parks listed on the city{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/parks/parks-list-and-map"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              parks list and map
            </a>
            , including Vivagene Copeland Park — which is why overspray onto walks and uneven courtyard turf gets noticed quickly.
          </p>
          <p>
            Outdoor watering here follows Tarrant County supply reality and Hurst&apos;s year-round{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/public-works/water-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              water conservation
            </a>{' '}
            schedule. Check weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>
            , regional context from the{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>
            , and recreation hours at the{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/community-services/find-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst Recreation Center
            </a>{' '}
            on Mary Drive. The combined Bellaire / Copeland parks are a local amenity, not a reason to ignore lot-level drip at
            foundations or drainage after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Bellaire Park North?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
