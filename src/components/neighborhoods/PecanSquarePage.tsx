import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

const curatedReviewItems = [fortWorthReview, kellerReview, southlakeReview]
  .filter((review): review is NonNullable<typeof review> => Boolean(review))
  .map((review) => ({
    reviewer: review.name,
    location: `${review.location}, TX`,
    date: review.time,
    quote: review.content,
    stars: review.stars
  }));

export default function PecanSquarePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Northlake"
      citySlug="northlake"
      neighborhoodName="Pecan Square"
      canonicalUrl="https://sprinkleranddrains.com/northlake/pecan-square"
      pageTitle="Pecan Square Sprinkler Repair & Drainage in Northlake, TX"
      metaDescription="Irrigation repair, drip, and drainage for Pecan Square homes off FM 407 in Northlake, TX, set for the Town even Wednesday/Saturday, odd Thursday/Sunday schedule. Licensed irrigator LI22462."
      heroTitle="Pecan Square Sprinkler Repair & Drainage"
      heroDescription="Hillwood’s Pecan Square sits in the Town of Northlake, about a mile west of I-35W off FM 407. Newer lots on North Texas clay need zone-by-zone testing, drip at foundations, and a controller set to Northlake watering days."
      introHeading="New lots off FM 407: builder zones, park edges, and the Northlake watering plan"
      intro={
        <>
          <p>
            Pecan Square is a Hillwood community in the Town of Northlake, Denton County. The community&apos;s{' '}
            <a
              href="https://www.pecansquarebyhillwood.com/location/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              published location
            </a>{' '}
            places it about a mile west of I-35W off FM 407, in ZIP 76247, with the Greeting House at 2701 North Market
            Square Lane. The published site plan names streets such as Cleveland Gibbs Road, North Pecan Parkway, South
            Pecan Parkway, Market Square, Jack Rabbit Way, Redbrick Lane, Horizon Way, Elm Place, and Mulkey Lane, and it
            shows ponds, Pioneer Park, and play parks inside the community. The sales page lists 50-, 60-, 70-, and
            100-foot home sites from builders including Cadence, Coventry, David Weekley, Drees, and Highland Homes.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Pecan Square as part of our Northlake work. We are a
            licensed irrigator (LI22462). Water and sewer are through the{' '}
            <a
              href="https://town.northlake.tx.us/292/Water-Stage"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Town of Northlake
            </a>
            . We program house controllers for the town&apos;s year-round plan: no Monday watering, even addresses
            Wednesday and Saturday, odd addresses Thursday and Sunday, and no spray irrigation from 10 a.m. to 6 p.m.
            Businesses, churches, and schools water Tuesday and Friday. Handheld watering may be done any day. We do not
            claim a count of jobs in Pecan Square. We walk each zone and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Pecan Square is a Hillwood community in Northlake, ZIP 76247, off FM 407 about a mile west of I-35W, with the Greeting House at 2701 North Market Square Lane.',
        'Published home sites run 50, 60, 70, and 100 feet wide. A narrow frontage and a wide corner lot do not use the same arc or nozzle.',
        'Northlake houses water on assigned days: even addresses Wednesday and Saturday, odd addresses Thursday and Sunday, never Monday, and not from 10 a.m. to 6 p.m.',
        'On-site campuses follow the school clock (Tuesday and Friday), not the house clock. Johnie R. Daniel Elementary is at 1901 Tye Street; Floyd Barksdale Middle School is at 6901 Mulkey Lane.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry bands on newer frontages along Pecan Parkway, Cleveland Gibbs Road, and Market Square.',
        'Arc and nozzle matching so 50-foot lots do not spray the sidewalk while 100-foot lots still cover the back turf.',
        'Drip conversion at foundation beds and young street trees on clay soil.',
        'Controller programming and cycle-and-soak schedules on Northlake even/odd days, outside the 10 a.m. to 6 p.m. window.',
        'Drainage planning for downspouts, side-yard lows, and grade toward ponds and park edges shown on the community site plan.'
      ]}
      localTips={[
        'Use the last digit of the house address: even Wednesday and Saturday, odd Thursday and Sunday. No Monday watering and no spray from 10 a.m. to 6 p.m.',
        'Schools, churches, and businesses in town water Tuesday and Friday. Do not copy that clock onto a house controller.',
        'Handheld watering may be done any day under the current town page. Confirm the notice before changing days. Rules can tighten.',
        'Split long runtimes into short cycles with a break so North Texas clay can take water instead of sending it to the curb.',
        'If the controller has not been touched since closing, it may still be on a builder default rather than the Northlake schedule.'
      ]}
      trustCards={[
        {
          title: 'Town schedule on every house controller',
          description:
            'We set Pecan Square house controllers to Northlake even/odd days and the Monday shutoff, with starts outside the 10 a.m. to 6 p.m. window.'
        },
        {
          title: 'Arcs that fit the lot width',
          description:
            'Published sites run from 50 to 100 feet. Heads sized for a wide lot overshoot a narrow parkway; heads sized for a cottage lot leave a dry band on a deeper yard.'
        },
        {
          title: 'Drip where beds meet the slab',
          description:
            'Foundation beds and new trees do better on drip than on spray that soaks brick, mulch, and sidewalks.'
        },
        {
          title: 'School zones stay on their own clock',
          description:
            'Daniel Elementary and Barksdale Middle School are in the community. Town rules put schools on Tuesday and Friday, separate from the house even/odd days.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn',
          caption: 'Head and nozzle repair, nearby DFW project photo, not a named Pecan Square address'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work, nearby DFW project photo, not a named Pecan Square address'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting, nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Pecan Square',
        title: 'A new front zone that waters the sidewalk while the back corner stays dry',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Northlake and nearby DFW service. Not a named Pecan Square address.',
        body: 'A common call on a newer production lot looks like this: front heads throw past a short parkway onto the sidewalk, a deeper back zone turns brown, and the controller still runs on Monday or at midday, which Northlake rules do not allow. Lots that grade toward a pond or park edge can also hold water after a storm. We map zones, check pressure and head height, match nozzles and arcs to the actual lot width, move foundation beds to drip, and split runtimes into cycle-and-soak on the correct even or odd days. If the wet spot is a downspout or settled grade, we talk through drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Clay and cycle-and-soak',
          description:
            'North Texas clay sheds a long first cycle. Shorter repeats move water into the root zone instead of the gutter.'
        },
        {
          title: 'Lot width changes the spray',
          description:
            'The community publishes 50-, 60-, 70-, and 100-foot sites. Arcs and nozzles have to match the frontage or water hits concrete or misses turf.'
        },
        {
          title: 'House days versus school days',
          description:
            'Even houses water Wednesday and Saturday. Odd houses water Thursday and Sunday. Schools, churches, and businesses water Tuesday and Friday. Mixing those clocks wastes a watering day.'
        },
        {
          title: 'Park and pond edges',
          description:
            'The published site plan shows ponds and parks inside Pecan Square. Grade toward that open space can hold storm water. Irrigation should not add to a low corner that is already wet.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Pecan Square site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit Northlake watering days',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Which watering days apply to my Pecan Square address?',
          answer:
            'Under the Town of Northlake year-round plan, there is no watering on Monday. Even addresses water Wednesday and Saturday. Odd addresses water Thursday and Sunday. Spray irrigation is not allowed from 10 a.m. to 6 p.m. Businesses, churches, and schools water Tuesday and Friday. Handheld watering may be done any day. Confirm the current notice on the town water conservation page before changing days.'
        },
        {
          question: 'Why does my front zone spray the sidewalk?',
          answer:
            'Many Pecan Square sites are 50 to 70 feet wide, and some are 100. Heads with the wrong arc or nozzle, or heads that have tilted after mowing, throw past the curb on a short frontage. We reset arcs, match nozzles, and raise or replace sunken heads.'
        },
        {
          question: 'Which schools are in Pecan Square?',
          answer:
            'The community is in Northwest ISD. Johnie R. Daniel Elementary is at 1901 Tye Street, Northlake, TX 76247. Floyd Barksdale Middle School, which opened for the 2026–2027 year, is published at 6901 Mulkey Lane. Northwest ISD’s 2026–2027 feeder pattern sends Daniel Elementary to Barksdale, then splits high school between Northwest and Byron Nelson. Confirm a specific address on the district boundary tool.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, and grade change the price. An on-site quote is required. These are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed?',
          answer:
            'Most head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults or main-line leaks may need a follow-up. Active leaks get priority. Call (817) 304-7896.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Harvest',
          description: 'Irrigation repair and drainage for Hillwood’s Harvest lots on FM 407, also on Northlake water.',
          link: '/argyle/harvest'
        },
        {
          name: 'Canyon Falls',
          description: 'Sprinkler repair, drip, and drainage for rolling Canyon Falls lots north of FM 1171.',
          link: '/argyle/canyon-falls'
        },
        {
          name: '5T Ranch',
          description: 'Irrigation repair and drip for custom lots off Country Club Road in Argyle.',
          link: '/argyle/5t-ranch'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and controller fixes on newer lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so spray stops soaking brick and walks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for side-yard lows, downspouts, and runoff toward ponds and parks.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Northlake Water Conservation',
          url: 'https://town.northlake.tx.us/292/Water-Stage',
          description: 'Current watering days, hours, and handheld rules from the Town of Northlake.'
        },
        {
          name: 'Pecan Square by Hillwood',
          url: 'https://www.pecansquarebyhillwood.com/location/',
          description: 'Community location off FM 407, Greeting House address, and Northwest ISD notes.'
        },
        {
          name: 'Northwest ISD feeder patterns',
          url: 'https://www.nisdtx.org/departments/facilities/attendance-boundaries/feeder-patterns',
          description: 'District feeder table for Daniel Elementary, Barksdale Middle School, and high school splits.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Pecan Square is in the{' '}
            <a
              href="https://www.town.northlake.tx.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Northlake
            </a>{' '}
            and is served by{' '}
            <a
              href="https://www.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Northwest ISD
            </a>
            . Johnie R. Daniel Elementary sits at 1901 Tye Street. Floyd Barksdale Middle School is on Mulkey Lane inside
            the community. Daily errands use FM 407 and I-35W, with the Greeting House on North Market Square Lane.
          </p>
          <p>
            Outdoor watering follows the town&apos;s{' '}
            <a
              href="https://town.northlake.tx.us/292/Water-Stage"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              water conservation rules
            </a>
            . Weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            helps adjust runtimes with the weather. Texas Best Sprinklers also serves nearby{' '}
            <a href="/argyle/harvest" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">
              Harvest
            </a>
            .
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Pecan Square?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
