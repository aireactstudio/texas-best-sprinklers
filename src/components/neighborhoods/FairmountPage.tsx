import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function FairmountPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Fort Worth"
      citySlug="fort-worth"
      neighborhoodName="Fairmount"
      canonicalUrl="https://sprinkleranddrains.com/fort-worth/fairmount"
      pageTitle="Fairmount Sprinkler Repair & Drainage in Fort Worth, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Fairmount historic lots in Fort Worth, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Fairmount Sprinkler Repair & Drainage"
      heroDescription="Fairmount bungalows sit on compact clay lots with parkway strips, alleys, and historic brick or wood siding. We diagnose leaks, rebalance spray and drip, and plan drainage so water soaks in instead of running toward sidewalks, Magnolia gutters, and old foundations."
      introHeading="Compact historic lots need irrigation that respects clay, parkways, and twice-a-week watering"
      intro={
        <>
          <p>
            Fairmount is Fort Worth’s National Register historic district south of downtown — bungalows and four-squares from
            the late 1800s through the early 1920s, bounded by Magnolia Avenue, Jessamine Street, Eighth Avenue, and Hemphill
            Street. Blocks such as College Avenue, 6th Avenue, Lipscomb, Hurley, and Morphy have narrow side yards, a parkway
            strip between sidewalk and curb, and often an alley behind the house. That is a different watering problem than a
            half-acre Keller tract: one long spray cycle hits brick, wood siding, and the sidewalk before clay ever drinks, and
            stormwater already has a short path to the gutter. Shade from pecans and live oaks sits next to a hot street strip
            that browns the first week of July.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Fairmount as part of our Fort Worth work. We are a licensed
            irrigator (LI22462). We program start times around the city’s year-round rules — no spray irrigation from 10 a.m. to
            6 p.m., even addresses on Wednesday and Saturday, odd addresses on Thursday and Sunday — and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a July schedule running into October. Drip, soaker, and handheld watering are
            treated differently than spray under city ordinance, which is useful on historic foundations. We do not claim a
            count of jobs on a specific Fairmount street. We do walk each zone, keep heads off walks and siding, and quote
            through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Parkway strips and alley-facing back yards on Fairmount blocks often share one leftover zone, so the curb browns while the shade pocket stays soggy.',
        'Historic brick, wood siding, and pier-and-beam or early slabs take damage from spray that was aimed at a 1920s foundation bed.',
        'Fort Worth’s even/odd watering days plus the 10 a.m. to 6 p.m. ban mean night and early-morning cycle-and-soak windows have to actually drain into clay.',
        'Compact lots next to Magnolia and Hemphill show overspray and runoff faster than a suburban cul-de-sac — neighbors and city waste rules notice misting at noon.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along parkways and alley fences.',
        'Drip conversion at foundation beds and tree rings so historic brick and wood stop getting soaked on watering days.',
        'Controller programming for Fort Worth even/odd days, the 10 a.m.–6 p.m. window, and cycle-and-soak on clay.',
        'Drainage planning for settled side yards, alley lows, and patio pooling after Near Southside storms.',
        'Outdoor lighting repair and additions for walkways and entries on established Fairmount streets.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Fairmount clay can absorb water instead of sending it down 5th Avenue and Magnolia gutters.',
        'Walk the parkway after mowing. Settled heads on tight lots tilt quickly and stripe the strip between sidewalk and street.',
        'Keep spray off walks, drives, and neighboring lots. Historic-district curb appeal and city waste rules both flag misting onto brick and concrete.',
        'Move foundation beds to drip. Fort Worth allows drip any day; spray is twice a week on your assigned days only.',
        'Drop summer runtimes when nights cool. Water is Awesome still publishes weekly ET-based advice even when drought stages are quiet.'
      ]}
      trustCards={[
        {
          title: 'Historic-district curb appeal, not a suburban HOA card',
          description:
            'Fairmount sits in a city historic overlay. Exterior changes can need a Certificate of Appropriateness. We keep repairs inside the existing layout when we can, match heads, straighten risers, and cut overspray so the street view stays even without unauthorized redesigns.'
        },
        {
          title: 'Fort Worth even/odd days and Tarrant supply',
          description:
            'Residential spray is twice a week by address, never between 10 a.m. and 6 p.m. We set controllers for those windows, add rain and freeze protection where hardware allows, and point homeowners to Water is Awesome weekly guidance and the city’s watering-day page.'
        },
        {
          title: 'Clay, shade, and compact Fairmount lots',
          description:
            'Expansive clay plus pecan and oak canopy is the Fairmount pattern: a sunny parkway browns, the north side yard stays soft, and an alley corner holds water. We rebalance zones instead of adding runtime that just runs to Hemphill or Magnolia.'
        },
        {
          title: 'Drip at historic foundations and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on century-old lots. After heavy rain we look at downspouts, alley grade, and low pads so irrigation is not fighting standing water next to a 1910s bungalow.'
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
              quote:
                'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased, and the lawn has never looked better.',
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
              quote:
                'As a property manager, I have worked with many irrigation companies. Texas Best Sprinklers is professional and reliable, and their controller work has cut water waste.',
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
                'I partner with Texas Best Sprinklers on client projects. Their attention to detail ensures landscape designs have the right irrigation support.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Fairmount street photo'
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
        heading: 'Featured work for homes like these in Fairmount',
        title: 'A brown parkway, a wet north-side yard, and a controller still watering like July',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Fort Worth / nearby DFW service — not a named Fairmount street.',
        body: 'A common call on Near Southside historic lots looks like this: the sunny parkway strip between sidewalk and curb browns out, turf on the shaded north side stays dark and soft, and an alley or patio corner holds water after storms. Clay sheds a long watering cycle before roots drink, and a two- or three-zone layout cannot treat parkway, shade, and foundation beds the same. We map zones, check pressure and head height, match nozzles so throw stays off brick and walks, and move foundation beds onto drip where spray was hitting siding and mulch. Controller start times move into Fort Worth’s allowed windows with even/odd day patterns and cycle-and-soak repeats. If the low pad is irrigation plus a downspout and alley grade, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Fairmount clay and cycle-and-soak on compact lots',
          description:
            'Expansive North Texas clay on Fairmount lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward parkway curbs, Magnolia gutters, and alley returns on tight blocks.'
        },
        {
          title: 'Heat, even/odd days, and Fairmount controller schedules',
          description:
            'Fort Worth summers push evapotranspiration hard, and the city limits spray to assigned days plus the 10 a.m. to 6 p.m. ban. We set seasonal programs and point homeowners to Water is Awesome so Fairmount systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on Fairmount parkways and pecan lots',
          description:
            'Pecans, live oaks, and street trees create deep shade next to a hot parkway. Shared runtimes overwater the north side yard and starve the curb strip. Separate nozzle types and zone timing keep both sides of a Fairmount yard honest.'
        },
        {
          title: 'Historic Fairmount foundations, drip, and storm drainage',
          description:
            'Retrofit pipe and mixed replacement heads are common on century-old homes. Foundation drip protects brick and wood better than spray. Settled side yards and alley lows need a drainage plan after storms, not another hour on the controller.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Fairmount site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect historic-district curb appeal and Fort Worth watering days',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Fairmount?',
          answer:
            'Fairmount is a city historic overlay as well as a National Register district. Like-for-like irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. New systems, visible piping, grading changes, and lighting that alters the street view may need City of Fort Worth guidance, and exterior work can require a Certificate of Appropriateness from Historic Preservation staff. New irrigation or an alteration of 20 percent or more typically needs a city permit and a licensed irrigator. We describe the visible scope before work starts so you can check city and historic-district rules. We do not file permit or COA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Fairmount clay, shade, and compact lots?',
          answer:
            'Most Fairmount yards need cycle-and-soak on turf, separate runtimes for pecan shade versus the sunny parkway, and drip at foundation beds. Do not run a long single cycle that sheets to Magnolia or Hemphill. We set programs around Fort Worth’s even/odd watering days, the 10 a.m. to 6 p.m. spray ban, and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot. Drip and handheld watering are allowed any day under city ordinance.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access on tight lots, existing pipe condition, and alley or parkway grade change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Fairmount?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Fort Worth watering rules?',
          answer:
            'Fort Worth currently asks residents not to run irrigation systems or sprinklers between 10 a.m. and 6 p.m. Residential spray is twice a week: even addresses Wednesday and Saturday, odd addresses Thursday and Sunday. We program those days and start times, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest notice on the City of Fort Worth watering-schedule page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Downtown Fort Worth',
          description: 'Sprinkler repair, controller tuning, and drainage planning for downtown-adjacent Fort Worth properties.',
          link: '/fort-worth'
        },
        {
          name: 'Cultural District',
          description: 'Irrigation and drainage support for homes and landscapes near the museums and Cultural District parks.',
          link: '/fort-worth'
        },
        {
          name: 'Arlington Heights',
          description: 'Seasonal sprinkler service and clay-soil watering help on established west Fort Worth streets.',
          link: '/fort-worth'
        },
        {
          name: 'Wedgwood',
          description: 'Coverage troubleshooting and water-efficient irrigation support for south Fort Worth neighborhoods.',
          link: '/fort-worth'
        },
        {
          name: 'Ridglea',
          description: 'Sprinkler repair and drainage planning for Ridglea-area lots on Fort Worth’s west side.',
          link: '/fort-worth'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry parkways, and pressure issues on established Fairmount lawns.',
          link: '/fort-worth/sprinkler-repair-services-in-fort-worth-tx'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and tree-ring drip so historic Fairmount brick and wood get water without soaking siding.',
          link: '/fort-worth/drip-irrigation-services-in-fort-worth-tx'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward alleys, sidewalks, and Magnolia gutters.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Fairmount Park',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/fairmount-park',
          description:
            'The city’s 0.7-acre neighborhood park at 1501 5th Avenue, assembled from six lots in 1990. A short walk for many Fairmount blocks and a reminder that this district was built tight — open space here is small and clay still sheds after storms.'
        },
        {
          name: 'Historic Fairmount Neighborhood Association',
          url: 'https://historicfairmount.com/',
          description:
            'The neighborhood’s civic home for district history, design standards, and events. Useful when you need the official boundary story (Magnolia, Jessamine, Eighth, Hemphill) rather than a realtor blurb.'
        },
        {
          name: 'Southside Preservation Hall',
          url: 'https://www.southsidepreservation.com/',
          description:
            'The 1911 former Central Methodist campus at 1519 Lipscomb Street — Rose Chapel and community events in the same historic fabric as Fairmount bungalows. Not a substitute for lot-level irrigation, but it is the street-scale landmark residents actually use.'
        },
        {
          name: 'Lily B. Clayton Elementary',
          url: 'https://lilybclayton.fwisd.org/',
          description:
            'Fort Worth ISD campus at 2000 Park Place, just west of the district. Families walking or driving between Fairmount and Clayton notice brown parkways and sidewalk overspray immediately.'
        },
        {
          name: 'Near Southside',
          url: 'https://www.nearsouthsidefw.org/',
          description:
            'The broader Near Southside district that includes Magnolia Avenue dining and the medical corridor. Fairmount’s north edge is that commercial strip — irrigation runoff and misting show up on a street people walk every week.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Fairmount is tied to the{' '}
            <a
              href="https://www.fortworthtexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth
            </a>
            , campuses in{' '}
            <a
              href="https://www.fwisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth ISD
            </a>
            , and parks listed by{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Parks &amp; Recreation
            </a>
            . Families also use{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks/parks-and-trails/fairmount-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fairmount Park
            </a>{' '}
            on 5th Avenue and{' '}
            <a
              href="https://lilybclayton.fwisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Lily B. Clayton Elementary
            </a>{' '}
            on Park Place, which is why brown parkway strips and sidewalk overspray get noticed on the walk over.
          </p>
          <p>
            Outdoor watering here follows city days and Tarrant County supply reality. Check the{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/twice-per-week"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth watering schedule
            </a>
            , weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>
            , and regional context from the{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>
            . Exterior work on contributing structures may need a{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/development-services/historic-preservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Certificate of Appropriateness
            </a>
            . The{' '}
            <a
              href="https://historicfairmount.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Historic Fairmount Neighborhood Association
            </a>{' '}
            is the civic reference for district standards — a reminder that this is a century-old urban neighborhood where
            irrigation has to respect clay, historic materials, and city watering days, not a brand-new HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Fairmount?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
