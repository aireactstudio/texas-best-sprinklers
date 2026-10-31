import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

const curatedReviewItems = [fortWorthReview, southlakeReview, colleyvilleReview]
  .filter((review): review is NonNullable<typeof review> => Boolean(review))
  .map((review) => ({
    reviewer: review.name,
    location: `${review.location}, TX`,
    date: review.time,
    quote: review.content,
    stars: review.stars
  }));

export default function TimarronPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Southlake"
      citySlug="southlake"
      neighborhoodName="Timarron"
      canonicalUrl="https://sprinkleranddrains.com/southlake/timarron"
      pageTitle="Timarron Sprinkler Repair & Drainage in Southlake, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Timarron homes in Southlake, TX 76092, set for the City of Southlake watering schedule. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Timarron Sprinkler Repair & Drainage"
      heroDescription="Timarron is a master-planned Southlake community of 1,551 homes in 17 neighborhoods, with lots first offered in 1992 and build-out finished in 2004, according to the Timarron Owners Association. Systems from that era are decades old, so we test zone by zone, tune controllers for the City of Southlake schedule, and plan drainage that stays on the lot."
      introHeading="One master plan, many neighborhoods, and irrigation systems from the 1990s and 2000s"
      intro={
        <>
          <p>
            Timarron is a master-planned community in Southlake, ZIP 76092, developed around Byron Nelson Parkway,
            Continental Boulevard, and the Timarron Country Club golf course. The{' '}
            <a
              href="https://www.timarron.net/what-is-the-toa/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Timarron Owners Association
            </a>{' '}
            describes how Mobil Land Development began planning the community in 1990, how individual building lots first
            became available in 1992, and how build-out was completed in 2004. Today it counts 1,551 single-family homes
            in 17 neighborhoods, 15 in Southlake and 2 in Colleyville. The{' '}
            <a
              href="https://www.timarron.net/neighborhoods/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              association neighborhood list
            </a>{' '}
            names Bent Creek, Brenwyck, Bryson Square, Cascades, Chadwick Crossing, Clubhouse Estates, Crescent Royale,
            Eagle Bend Estates, Estates of Bent Creek, Glendover, Highlands, Huntly Manor, Northwood Park, Strathmore,
            Warwick Green, Wyndsor Creek, and Wyndsor Grove. A home built in the first phase and a home finished near
            2004 can sit a few streets apart, so controllers, valves, and heads are not all the same age.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Timarron as part of our Southlake work. We are a
            licensed irrigator (LI22462). Southlake publishes a year-round, twice-weekly schedule on its{' '}
            <a
              href="https://www.cityofsouthlake.com/3870/View-Watering-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              watering restrictions page
            </a>:
            even-numbered addresses water Wednesday and Saturday, odd-numbered addresses water Thursday and Sunday, and
            automatic irrigation is allowed only from 6 p.m. to 10 a.m. on those days, while a hand-held hose is
            permitted outside those hours. Because Cascades and Chadwick Crossing are in Colleyville, check the{' '}
            <a
              href="https://www.colleyville.com/government/departments-m-z/public-works/water-and-wastewater"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              City of Colleyville water pages
            </a>{' '}
            for those addresses before setting a controller. Exterior changes that are visible from the street go through
            the association&apos;s Design Review Guidelines, so we describe the scope before work starts. We do not claim a
            count of jobs on a specific Timarron street. We walk zones, keep spray off sidewalks and cart paths, and quote
            through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Timarron spans two cities. Fifteen neighborhoods are in Southlake and two, Cascades and Chadwick Crossing, are in Colleyville, so the controller schedule has to match the address.',
        'Lots were first offered in 1992 and build-out finished in 2004, per the Timarron Owners Association. Original controllers, valves, and heads can be over two decades old.',
        'Golf-course edges, paved association trails, and sidewalks make overspray and runoff easy to see. Timarron Country Club cart paths are private property and not part of a home lot.',
        'Foundation beds, tree rings, and front-yard planting beds do better on drip than on high-pressure spray, especially where mature trees now shade parts of the lawn.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands on Timarron lots from the 1990s and 2000s.',
        'Drip conversion at foundation beds, tree rings, and courtyard plantings so brick, mulch, and walls stop getting soaked.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak schedules that fit the Southlake or Colleyville watering days for the address.',
        'Drainage planning for patio lows, side-yard swales, and runoff that follows grade toward streets, trails, and golf-course edges after storms.',
        'Outdoor lighting repair and additions for entries, trees, and walkways that fit association design review.'
      ]}
      localTips={[
        'Use the last digit of the street address: in Southlake, even Wednesday and Saturday, odd Thursday and Sunday, between 6 p.m. and 10 a.m. If your home is in Cascades or Chadwick Crossing, confirm the Colleyville schedule instead.',
        'After any power outage, reset the controller and replace the battery backup once a year. Southlake lists power failures as a common reason for watering violations.',
        'Use shorter cycle-and-soak windows so North Texas clay can absorb water instead of sending it toward a sidewalk, trail, or street.',
        'On older systems, walk each zone once a season and look for tilted, buried, or cracked heads before the water bill tells you.',
        'New sod, seed, or hydro-mulch may qualify for a temporary exemption from the City of Southlake. Apply through the city before you water outside the normal days.',
        'Check the Tarrant Regional Water District weekly watering advice and drop summer runtimes when nights cool in fall.'
      ]}
      trustCards={[
        {
          title: 'Southlake rules, with Colleyville exceptions',
          description:
            'Most of Timarron is in Southlake, which allows automatic watering from 6 p.m. to 10 a.m. on assigned days. Cascades and Chadwick Crossing are in Colleyville, so we confirm the city for the address before programming.'
        },
        {
          title: 'Association design review respected',
          description:
            'The Timarron Owners Association publishes Design Review Guidelines and a modification submission process. We keep repairs inside the existing layout where possible and explain any visible change so you can submit it first.'
        },
        {
          title: 'Systems of different ages on the same street',
          description:
            'Lots opened in 1992 and build-out ran through 2004, so one street can mix original and later systems. We test each zone rather than apply one runtime to the whole street.'
        },
        {
          title: 'Drip and drainage, not more spray',
          description:
            'Foundation beds and tree rings perform better on drip. After heavy rain we look at patio lows and downspouts so irrigation is not fighting water already sitting on clay.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW project photo, not a named Timarron street'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Timarron street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Timarron',
        title: 'A long-running controller schedule that no longer matches the yard',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Southlake and nearby DFW service — not a named Timarron street, and not work at the golf course or association common areas.',
        body: 'A common call on an older master-planned lot looks like this: the controller was programmed years ago, one long cycle runs on every zone, and the schedule was never updated after a power outage or a rule change. Clay sheds the first pass, leftover spray reaches the sidewalk, a shaded corner stays soft while a sun-facing strip browns, and the days may not match the city rules. We map the zones, check the controller against the current city schedule, replace worn heads and match nozzles, and move foundation beds onto drip. Runtimes then split into cycle-and-soak windows on the assigned days. If a low patio is partly a downspout problem, we talk through drainage instead of adding more spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Clay and cycle-and-soak',
          description:
            'Expansive North Texas clay often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward sidewalks, trails, and streets.'
        },
        {
          title: 'City schedule and controller age',
          description:
            'Southlake allows automatic watering only from 6 p.m. to 10 a.m. on assigned days. Older controllers drift, lose settings in outages, or still carry a program from years ago, so we reprogram and test.'
        },
        {
          title: 'Shade, trees, and mixed exposure',
          description:
            'Trees planted when the neighborhoods were built are now mature. Shaded and sun-facing zones need different nozzles and runtimes or one side stays wet while the other dries out.'
        },
        {
          title: 'Association approval for visible changes',
          description:
            'Visible head, lighting, fence, or grading changes may need a modification request under the association guidelines. Foundations belong on drip, not another hour of spray.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Timarron site assessment and issue mapping, including shade zones, foundation beds, and aging zones',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit the city watering days and association design review',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need association approval for sprinkler or drainage work in Timarron?',
          answer:
            'Plan on checking when the work is visible or changes the lot. The Timarron Owners Association publishes Design Review Guidelines and a modification submission process, and its office is at 700 Wentwood Drive. Ordinary head and pipe repairs that stay inside the existing layout are usually simple, but we describe the visible scope before work starts. Chadwick Crossing also has its own sub-association. A licensed irrigator (we are LI22462) should design or alter the system. We do not file association applications for you unless that is arranged separately.'
        },
        {
          question: 'Which watering days apply to my Timarron address?',
          answer:
            'Most Timarron addresses are in Southlake: even-numbered addresses water Wednesday and Saturday, odd-numbered addresses water Thursday and Sunday, and automatic systems may run only from 6 p.m. to 10 a.m. Cascades and Chadwick Crossing are in the City of Colleyville, so confirm that city’s current schedule. Always confirm the latest city notice before changing days yourself.'
        },
        {
          question: 'How should we water Timarron clay and shaded lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade and sun zones, and put foundation beds on drip. Southlake asks residents to run zones long enough to apply about one inch of water on the two assigned days, or every five to seven days if possible, and to water with the weather. We test the actual output of each zone before setting runtimes.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, association review, and grade change the price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Timarron?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority. Call (817) 304-7896.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Carillon',
          description: 'Irrigation, drip, and drainage for gated Southlake lots around community lakes and mature trees.',
          link: '/southlake/carillon'
        },
        {
          name: 'Timber Lake',
          description: 'Sprinkler repair and pond-adjacent watering strategies for 1990s Southlake lots.',
          link: '/southlake/timber-lake'
        },
        {
          name: 'Kirkwood Hollow',
          description: 'Irrigation and drainage for wooded custom lots west of E. Dove Road.',
          link: '/southlake/kirkwood-hollow'
        },
        {
          name: 'Coventry Manor',
          description: 'Sprinkler repair, drip conversion, and drainage for late-1990s custom lots.',
          link: '/southlake/coventry-manor'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and controller fixes on older Timarron systems.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and tree-ring drip so beds and slabs stop getting soaked by high-pressure spray.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff toward sidewalks and trails.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Timarron Owners Association',
          url: 'https://www.timarron.net/',
          description:
            'The association site lists the neighborhoods, Design Review Guidelines, amenities, and events for Timarron residents.'
        },
        {
          name: 'Southlake Town Square',
          url: 'https://www.southlaketownsquare.com/',
          description:
            'The city’s main square for errands, dining, and events, which is why front-yard appearance is part of everyday Southlake living.'
        },
        {
          name: 'Bob Jones Nature Center & Preserve',
          url: 'https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve',
          description:
            'City-managed Cross Timbers trails and programs in Southlake, a reminder that local soils and runoff look different under canopy than on an open lawn.'
        },
        {
          name: 'Southlake Public Library',
          url: 'https://www.cityofsouthlake.com/4317/Library',
          description: 'A regular stop for Southlake families and a straightforward civic landmark for the area.'
        },
        {
          name: 'Southlake Parks & Recreation',
          url: 'https://www.experiencesouthlaketexas.com/148/Parks-Recreation',
          description: 'City parks, trails, and recreation listings that residents use throughout the week.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Timarron is tied to the <a
              href="https://www.cityofsouthlake.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Southlake
            </a>, with two neighborhoods
            in the <a
              href="https://www.colleyville.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Colleyville
            </a>. The{' '}
            <a
              href="https://www.timarron.net/neighborhoods/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              association
            </a>{' '}
            notes that all Chadwick Crossing homes have Southlake mailing addresses and are zoned for Carroll ISD schools in
            Southlake, even though the neighborhood is physically in Colleyville. Timarron Country Club is a separate
            commercial member of the association, and its golf cart paths are private property.
          </p>
          <p>
            Outdoor watering follows the City of Southlake{' '}
            <a
              href="https://www.cityofsouthlake.com/2776/Water-Smart-Outside"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Smart, Outside
            </a>{' '}
            schedule, which the city says is in line with regional conservation efforts from the Tarrant Regional Water
            District and its wholesale supplier, the City of Fort Worth. Check weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            and stormwater notes on{' '}
            <a
              href="https://www.cityofsouthlake.com/4369/Your-Property-and-Drainage"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Your Property & Drainage
            </a>.
            Common areas and trails are shared amenities, not a reason to ignore lot-level irrigation, drip at foundations,
            or drainage after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Timarron?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
