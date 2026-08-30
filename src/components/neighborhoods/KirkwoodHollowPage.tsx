import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function KirkwoodHollowPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Southlake"
      citySlug="southlake"
      neighborhoodName="Kirkwood Hollow"
      canonicalUrl="https://sprinkleranddrains.com/southlake/kirkwood-hollow"
      pageTitle="Kirkwood Hollow Sprinkler Repair & Drainage in Southlake, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Kirkwood Hollow in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Kirkwood Hollow Sprinkler Repair & Drainage"
      heroDescription="Kirkwood Hollow mixes original wooded custom lots with later Drees-built streets, HOA sidewalks, and clay that sheds a long watering cycle. We diagnose leaks, rebalance shade versus sun zones, and plan drainage that stays on the lot instead of rolling toward greenbelts and neighbors."
      introHeading="When oak canopy splits a Marshall Road lawn, watering has to change"
      intro={
        <>
          <p>
            Kirkwood Hollow sits west of E. Dove Road in Southlake, a short hop from SH 114 and Bob Jones Park, on winding
            streets such as Marshall Road, Linden Lane, Round Hollow Lane, Copperfield Street, Orchard Hill Drive, Stockton
            Drive, Idlewild Court, and Tyler Street. The original custom section has heavily wooded lots — some approaching
            an acre and a half — so one side of a yard can stay damp under oaks while the street strip bakes. Later phases
            built by Drees Homes in the early to mid-2000s tend to have more open turf, HOA sidewalks, and builder-default
            controllers that still run like it is August. Shared pool, clubhouse, playground, and greenbelt corridors mean
            runoff is not just a private-yard problem: water that leaves a pad can follow the sidewalk toward common
            landscape the Kirkwood Hollow HOA maintains.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Kirkwood Hollow as part of our Southlake work. We are a
            licensed irrigator (LI22462), program controllers for Tarrant County heat and Southlake&apos;s even/odd watering
            days, and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice rather than leaving a peak-summer schedule running into fall. We do not claim a count of
            jobs on Marshall Road or Round Hollow Lane. We do walk zones, check pressure on larger lots, protect established
            trees, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original wooded lots need shade and sun treated as different zones; one runtime soaks oak roots and still burns the front strip.',
        'Drees-era lawns along HOA sidewalks show overspray, tilted heads, and dry bands after mowing more quickly than a private cul-de-sac.',
        'Larger custom lots lose pressure at the far heads. Misting and short throw are a layout issue, not just a “add more water” issue.',
        'Greenbelt, pool, and playground grades collect irrigation and stormwater. Drainage has to stay on the lot, not sheet into HOA common area.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Marshall Road and sidewalk-facing turf.',
        'Drip conversion at foundation beds, tree rings, and shade plantings so spray stops hitting mulch, trunks, and brick.',
        'Controller programming and cycle-and-soak for Southlake clay, even/odd watering days, and 6 p.m.–10 a.m. automatic windows.',
        'Drainage planning for sloped pads, patio pooling, and runoff that follows winding streets toward greenbelt corridors after storms.',
        'Outdoor lighting repair and additions that keep entries, oaks, and sidewalks visible without changing HOA character.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so clay can absorb water instead of sending it to Kirkwood Hollow sidewalks or greenbelt edges.',
        'Walk zones after mowing. Settling heads on established Marshall Road and Linden Lane lots tilt quickly and stripe the front lawn.',
        'Keep spray off HOA walks, the pool/clubhouse approach, and neighboring lots. Association appearance standards show those misses immediately.',
        'Drop summer runtimes when nights cool. Southlake watering guidance changes through the year, and Water is Awesome publishes weekly ET-based advice.',
        'On larger wooded lots, check the last head on a long run. Pressure drop there is often why the back corner stays brown while the street view looks fine.'
      ]}
      trustCards={[
        {
          title: 'HOA curb-appeal compliance',
          description:
            'Kirkwood Hollow’s association watches landscape appearance along sidewalks and common green. We match head types, straighten risers, and cut overspray so street views stay even without unauthorized layout changes.'
        },
        {
          title: 'Water efficiency under Southlake rules',
          description:
            'Southlake sits in Tarrant County with even/odd watering days and automatic-system hours. We set controllers for those windows, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not running like it is still August in October.'
        },
        {
          title: 'Wooded clay lots and mixed shade',
          description:
            'Original Kirkwood Hollow lots combine expansive clay, slope, and oak canopy. Long single cycles create runoff; shade pockets stay wet. We rebalance zones instead of just adding runtime.'
        },
        {
          title: 'Drip, pressure control, and greenbelt drainage',
          description:
            'Foundation drip, pressure-regulated heads, and smart controllers help large custom lots. After heavy rain we look at patio lows and downspout discharge so irrigation is not fighting standing water headed toward HOA greenbelt.'
        }
      ]}
      reviews={[
        southlakeReview
          ? {
              reviewer: southlakeReview.name,
              location: 'Southlake, TX',
              date: southlakeReview.time,
              quote: southlakeReview.content,
              stars: southlakeReview.stars
            }
          : {
              reviewer: 'Jennifer Martinez',
              location: 'Southlake, TX',
              date: '2 months ago',
              quote:
                'We had Texas Best Sprinklers install a complete irrigation system for our new landscaping. The team was professional, efficient, and the quality of work was outstanding.',
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
                'I partner with Texas Best Sprinklers on all my client projects. Their attention to detail and technical expertise ensures landscape designs have the right irrigation support.',
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
          src: '/assets/images/optimized/sprinkler.png',
          alt: 'Sprinkler system work on a North Texas residential lawn',
          caption: 'Zone repair and coverage check — nearby DFW, not a claimed Kirkwood Hollow street photo'
        },
        {
          src: '/assets/images/optimized/drainage-weatherford.png',
          alt: 'Drainage work on a Texas Best Sprinklers project in North Texas',
          caption: 'Yard drainage at a low grade — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/lighting/3417.webp',
          alt: 'Outdoor lighting on trees from a Texas Best Sprinklers Southlake-area project',
          caption: 'Tree and walkway lighting — nearby DFW / Southlake-area project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Kirkwood Hollow',
        title: 'A wooded back corner stayed dry while the sidewalk strip stayed wet',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Southlake / nearby DFW service — not a named Kirkwood Hollow street.',
        body: 'A common call on Kirkwood Hollow’s larger lots looks like this: the last heads on a long run mist or barely reach, oak shade holds moisture against the slab, and a sidewalk-facing strip stays dark because the controller is still on a single long cycle. Clay sheds that first pass before roots drink, then leftover water follows slope toward HOA greenbelt or a patio low. We map zones, check static and operating pressure, match nozzles so throw and precipitation line up, and move foundation and tree watering onto drip where spray was hitting trunks and brick. Controller runtimes split into cycle-and-soak windows that fit Southlake watering days. If the low pad is irrigation plus downspout water, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Kirkwood Hollow clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Kirkwood Hollow lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward sidewalks, greenbelt edges, and curb lines.'
        },
        {
          title: 'Heat, ET, and Kirkwood Hollow controller schedules',
          description:
            'Southlake summers push evapotranspiration hard. We set seasonal programs around even/odd watering days and point homeowners to Water is Awesome weekly guidance so Kirkwood Hollow systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'HOA head and nozzle appearance in Kirkwood Hollow',
          description:
            'Sidewalk-facing Drees lots and winding street views show tilted risers, misting, and overspray quickly. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional for association standards.'
        },
        {
          title: 'Shade versus sun, plus slope drainage on Kirkwood Hollow lots',
          description:
            'Oaks on original custom lots create shade pockets next to open turf. Lots that fall toward greenbelt or playground corridors also need check valves and, where water stands after storms, a drainage plan that respects existing landscape character and HOA common area.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Kirkwood Hollow site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with HOA appearance in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Kirkwood Hollow?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading, visible piping, or greenbelt-adjacent edges, and lighting that alters the street view, may need Kirkwood Hollow HOA architectural review and, for some drainage work, City of Southlake guidance. New irrigation systems in Southlake typically require a city permit; ordinary head and pipe repairs usually do not. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Kirkwood Hollow clay, shade, and large lots?',
          answer:
            'Most Kirkwood Hollow yards need cycle-and-soak on turf, separate runtimes for oak shade versus full sun, and drip at foundation beds. Large custom lots often need pressure regulation so far heads do not mist. We set programs around Southlake even/odd watering days, automatic hours of 6 p.m. to 10 a.m., and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, and slope toward greenbelt change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Kirkwood Hollow?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'Southlake generally waters even addresses Wednesday and Saturday and odd addresses Thursday and Sunday, with automatic systems limited to 6 p.m.–10 a.m. on those days. We program start times and day patterns that fit current city expectations, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest city or supplier notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Carillon',
          description: 'Irrigation, drip, and drainage for gated Southlake lots around community lakes and mature trees.',
          link: '/southlake/carillon'
        },
        {
          name: 'Coventry Manor',
          description: 'Irrigation and drainage support for nearby Southlake homes with HOA landscape standards.',
          link: '/southlake'
        },
        {
          name: 'Timber Lake',
          description: 'Sprinkler repair and pond-adjacent watering strategies for Southlake properties.',
          link: '/southlake'
        },
        {
          name: 'Southlake Meadows',
          description: 'Controller tuning, drip upgrades, and drainage planning across Southlake.',
          link: '/southlake'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on wooded custom lots and Drees-era lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and tree-ring drip so shade beds and slabs stop getting soaked by high-pressure spray.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward sidewalks and HOA greenbelt.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Bob Jones Park',
          url: 'https://www.experiencesouthlaketexas.com/695/Bob-Jones-Park',
          description:
            'Athletic fields and park space just east of Kirkwood Hollow off Dove Road. Useful context for how nearby grades and stormwater behave, not a substitute for lot-level drainage.'
        },
        {
          name: 'Bob Jones Nature Center & Preserve',
          url: 'https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve',
          description:
            'City-managed Cross Timbers trails and programs on Bob Jones Road. A reminder that local soils, trees, and runoff look different under canopy than on an open Drees lawn.'
        },
        {
          name: 'Southlake Town Square',
          url: 'https://www.southlaketownsquare.com/',
          description:
            'The city’s main square for errands, dining, and events — a short trip from Kirkwood Hollow via Dove Road and SH 114, which is why front-yard appearance is part of everyday Southlake living.'
        },
        {
          name: 'Southlake Public Library',
          url: 'https://www.cityofsouthlake.com/4317/Library',
          description:
            'The library at Town Square is a regular stop for Kirkwood Hollow families and a straightforward landmark when describing the neighborhood’s place in the city.'
        },
        {
          name: 'Southlake Parks & Recreation',
          url: 'https://www.experiencesouthlaketexas.com/148/Parks-Recreation',
          description:
            'City parks, trails, and recreation listings, including fields at Bob Jones Park and other green space residents use throughout the week.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Kirkwood Hollow is tied to the{' '}
            <a
              href="https://www.cityofsouthlake.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Southlake
            </a>
            , campuses in the{' '}
            <a
              href="https://www.southlakecarroll.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Carroll Independent School District
            </a>
            , and parks listed by{' '}
            <a
              href="https://www.experiencesouthlaketexas.com/148/Parks-Recreation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Southlake Parks &amp; Recreation
            </a>
            . Families also use the{' '}
            <a
              href="https://www.cityofsouthlake.com/4317/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Southlake Public Library
            </a>{' '}
            and{' '}
            <a
              href="https://www.southlaketownsquare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Southlake Town Square
            </a>{' '}
            for errands, which is why overspray onto walks and uneven front turf gets noticed quickly.
          </p>
          <p>
            Outdoor watering here follows Tarrant County supply reality and Southlake&apos;s{' '}
            <a
              href="https://www.cityofsouthlake.com/2776/Water-Smart-Outside"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Smart, Outside
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
            , and stormwater notes on{' '}
            <a
              href="https://www.cityofsouthlake.com/4369/Your-Property-and-Drainage"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Your Property &amp; Drainage
            </a>
            . Bob Jones Park at{' '}
            <a
              href="https://www.experiencesouthlaketexas.com/695/Bob-Jones-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Experience Southlake
            </a>{' '}
            sits just east of the neighborhood — a nearby civic park, not a reason to ignore lot-level irrigation, drip at
            foundations, or drainage after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Kirkwood Hollow?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
