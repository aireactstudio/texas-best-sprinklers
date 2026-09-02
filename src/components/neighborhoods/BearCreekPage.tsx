import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function BearCreekPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Euless"
      citySlug="euless"
      neighborhoodName="Bear Creek"
      canonicalUrl="https://sprinkleranddrains.com/euless/bear-creek"
      pageTitle="Bear Creek Sprinkler Repair & Drainage in Euless, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Bear Creek in Euless, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Bear Creek Sprinkler Repair & Drainage"
      heroDescription="North Euless lots along Bear Creek Drive and Bear Creek Parkway sit on expansive clay next to a floodplain park. We diagnose aging 1970s–80s zones, convert foundation spray to drip, and plan drainage so stormwater moves toward the creek corridor instead of pooling at slabs and patios."
      introHeading="Creek-edge clay and 1980s zones need different watering than a new Mid-Cities tract"
      intro={
        <>
          <p>
            Bear Creek is an established north Euless (76039) pocket southeast of SH 121 / Glade and northeast of Midway Park.
            The original Bear Creek Estates streets — Bear Creek Drive, Bear Creek Parkway, and cul-de-sacs such as Wade Court —
            are mostly late-1970s and early-1980s brick homes on roughly four-tenths of an acre. That is larger than the tight
            1960s south-Euless plats, so a first-generation irrigation layout often has too few zones for a deep backyard canopy
            plus a hot street strip. Bear Creek Elementary (GCISD) sits at 401 Bear Creek Drive, and Villages of Bear Creek Park
            occupies the floodplain at 1951 Bear Creek Parkway. After forty years of clay settlement, side yards and patio corners
            hold water even when the front lawn browns. That is a different problem than a brand-new Lennar plat or a gated
            Southlake custom lot.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Bear Creek as part of our Euless work. We are a licensed
            irrigator (LI22462). We program start times around the city’s year-round rule — no outdoor spray irrigation from
            10 a.m. to 6 p.m. — and we treat drip, handheld, and soaker watering differently from spray, the way the ordinance
            does. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving an August schedule running into October. We do not claim a count of jobs on
            a specific Bear Creek street. We do walk each zone, respect the Bear Creek HOA’s visible-head and lighting standards,
            and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original late-1970s and early-1980s systems on ~0.4-acre Bear Creek lots often have too few zones; dry street strips and wet shade pockets show up on the same visit.',
        'Mature oaks and elms along Bear Creek Drive split each yard into deep shade and a hot Parkway-facing strip that cannot share one runtime.',
        'Lots grade toward the Bear Creek floodplain and Villages of Bear Creek Park. Stormwater that sheets off clay can pool at slabs before it ever reaches the linear park.',
        'Euless’s year-round 10 a.m. to 6 p.m. spray limit means night and early-morning cycle-and-soak windows have to soak into clay, not run to the curb or the creek corridor.',
        'Bear Creek HOA architectural rules still notice mismatched heads, leaning risers, and lighting that changes the street view.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along sidewalks and Bear Creek Parkway curb returns.',
        'Drip conversion at foundation beds and tree rings so 1970s–80s brick and siding stop getting soaked.',
        'Controller programming and cycle-and-soak schedules that fit Euless watering hours and Tarrant County heat.',
        'Drainage planning for settled side yards, patio pooling, and runoff that moves toward the Bear Creek floodplain.',
        'Outdoor lighting repair and additions for walkways and entries that still read clean from HOA-facing streets.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Bear Creek clay can absorb water instead of sending it down the Parkway or into the floodplain park.',
        'Walk zones after mowing. Settling heads on 40-year lots tilt quickly and stripe the front lawn along Bear Creek Drive sidewalks.',
        'Keep spray off walks, drives, and neighboring lots. The HOA and trail users from Villages of Bear Creek Park notice noon misting.',
        'Drop summer runtimes when nights cool. Euless still bans spray from 10 a.m. to 6 p.m. year-round, and Water is Awesome still publishes weekly ET-based advice.',
        'Inspect valve boxes before peak heat. Slow leaks hide under oak mulch long before turf shows stress on a larger backyard.'
      ]}
      trustCards={[
        {
          title: 'HOA curb appeal on Bear Creek streets',
          description:
            'Bear Creek Homeowners Association is a mandatory POA for the subdivision. Front lawns face Bear Creek Drive and the Parkway. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes the HOA would flag.'
        },
        {
          title: 'Euless watering hours and Tarrant supply',
          description:
            'The city prohibits outdoor spray irrigation between 10 a.m. and 6 p.m. year-round. Drip, handheld, and soaker watering for foundations and new plantings are treated differently. We set controllers for those windows, add rain and freeze protection where hardware allows, and point homeowners to Water is Awesome weekly guidance.'
        },
        {
          title: 'Clay, canopy, and creek-edge grade',
          description:
            'Expansive clay plus a 40-year canopy is the Bear Creek pattern: one sunny front strip browns, shade stays soft, and a patio corner holds water after storms that drain toward the floodplain. We rebalance zones instead of adding runtime that just runs to the park.'
        },
        {
          title: 'Drip at older foundations and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on larger lots. After heavy rain we look at downspouts and low pads so irrigation is not fighting standing water next to a 1980s slab that already sits above creek-side clay.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Bear Creek street photo'
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
        heading: 'Featured work for homes like these in Bear Creek',
        title: 'A dry Parkway strip, a soggy oak shade pocket, and a controller still on August',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Euless / nearby Mid-Cities service — not a named Bear Creek street.',
        body: 'A common call on established north Euless lots looks like this: the sunny strip along Bear Creek Parkway browns out, turf under oaks stays dark and soft, and a patio corner holds water after storms that move toward the floodplain. Clay sheds a long watering cycle before roots drink, and an original four- or five-zone layout cannot treat shade and sun the same on a ~0.4-acre lot. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting brick and mulch. Controller start times move into Euless’s allowed windows with cycle-and-soak repeats. If the low pad is irrigation plus a downspout on creek-edge grade, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Bear Creek clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Bear Creek lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Parkway gutters, sidewalks, and the floodplain that became Villages of Bear Creek Park.'
        },
        {
          title: 'Heat, ET, and Bear Creek controller schedules',
          description:
            'Euless summers push evapotranspiration hard, and the city still limits spray irrigation from 10 a.m. to 6 p.m. year-round. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Bear Creek systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on Bear Creek oak lots',
          description:
            'Forty years of canopy along Bear Creek Drive create deep shade next to open front turf. Shared runtimes overwater the shade pocket and starve the street strip. Separate nozzle types and zone timing keep both sides of a Bear Creek yard honest.'
        },
        {
          title: 'Creek-edge drainage, HOA heads, and older Bear Creek systems',
          description:
            'First-generation pipe and mixed replacement heads are common on 1979–1982 homes. Foundation drip protects older slabs better than spray. Lots that fall toward Bear Creek need a drainage plan after storms, not another hour on the controller — and visible heads still have to read clean for the HOA.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Bear Creek site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect Euless watering hours and Bear Creek HOA curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Bear Creek?',
          answer:
            'Bear Creek Homeowners Association is a mandatory POA for the subdivision, so irrigation repairs that stay in the existing layout — heads, valves, controller settings — usually do not need a full architectural packet. Drainage that changes grading or visible piping, and lighting that alters the street view, may need HOA review and City of Euless guidance. We describe the visible scope before work starts so you can check both. We do not file permit or HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Bear Creek clay, shade, and larger lots?',
          answer:
            'Most Bear Creek yards need cycle-and-soak on turf, separate runtimes for oak shade versus the sunny Parkway strip, and drip at foundation beds. Do not run a long single cycle that sheets toward the floodplain. We set programs around Euless’s 10 a.m. to 6 p.m. spray limit and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot. Drip, handheld, and soaker watering for foundations are treated differently from spray under the city ordinance.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, creek-edge grade, and lot size change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Bear Creek?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Euless watering rules?',
          answer:
            'Euless currently prohibits outdoor watering with sprinklers or irrigation systems between 10 a.m. and 6 p.m. year-round. Handheld hose, drip, and soaker hose for foundations, lawns, and new plantings are allowed under the ordinance’s exceptions. We program start times and day patterns that fit that window, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street or the park. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest notice on the City of Euless water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Wilshire Village',
          description: 'Sprinkler repair, controller tuning, and drainage planning for nearby Wilshire Village homes in Euless.',
          link: '/euless/wilshire-village'
        },
        {
          name: 'Morningside',
          description: 'Irrigation and drainage support for established south Euless streets near J.A. Carr Park.',
          link: '/euless'
        },
        {
          name: 'Oakwood Terrace',
          description: 'Seasonal sprinkler service and clay-soil watering help across south Euless 76040 lots.',
          link: '/euless'
        },
        {
          name: 'Timber Ridge',
          description: 'Coverage troubleshooting and water-efficient irrigation support for nearby Euless neighborhoods.',
          link: '/euless'
        },
        {
          name: 'Mayfair Hills',
          description: 'Sprinkler repair and drainage planning for nearby Bedford homes in the Mid-Cities.',
          link: '/bedford/mayfair-hills'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established Bear Creek lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward the Bear Creek floodplain.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and tree-ring drip so older Bear Creek slabs and oaks get water without soaking brick.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Villages of Bear Creek Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/parks/villages-of-bear-creek',
          description:
            'Euless’s 40-acre linear park at 1951 Bear Creek Parkway — trails, fields, and playgrounds on the Bear Creek floodplain. Useful context for how local clay and stormwater behave beyond the cul-de-sac.'
        },
        {
          name: 'Bob Eden Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/bob-eden-park',
          description:
            'A 47-acre park at 901 Mid-Cities Boulevard, originally Little Bear Creek Community Park. Trails, courts, and fields that Bear Creek families use all week — and a reminder that creek-side grade is part of this side of Euless.'
        },
        {
          name: 'Midway Park & Family Life Center',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/midway-park',
          description:
            'The 22-acre park at 300 W. Midway Drive holds the Family Life Center and aquatic park. A regular stop southwest of Bear Creek, not a substitute for lot-level irrigation and drainage.'
        },
        {
          name: 'Mary Lib Saleh Euless Public Library',
          url: 'https://www.eulesstx.gov/departments/library',
          description:
            'The library at 201 N. Ector Drive is a short trip from Bear Creek and a straightforward landmark when describing this part of north Euless.'
        },
        {
          name: 'Bear Creek Elementary (GCISD)',
          url: 'https://www.gcisd.net/o/bce',
          description:
            'The Grapevine-Colleyville campus at 401 Bear Creek Drive opened in 1988. This pocket of Euless is GCISD, not HEB ISD — a local detail that also explains weekday traffic on Bear Creek Drive.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Bear Creek is tied to the{' '}
            <a
              href="https://www.eulesstx.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Euless
            </a>
            , campuses in the{' '}
            <a
              href="https://www.gcisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Grapevine-Colleyville Independent School District
            </a>
            {' '}
            (including{' '}
            <a
              href="https://www.gcisd.net/o/bce"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bear Creek Elementary
            </a>
            ), and parks listed by{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Euless Parks &amp; Community Services
            </a>
            . Families also use the{' '}
            <a
              href="https://www.eulesstx.gov/departments/library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Mary Lib Saleh Euless Public Library
            </a>{' '}
            and{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/parks/villages-of-bear-creek"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Villages of Bear Creek Park
            </a>{' '}
            on Bear Creek Parkway, which is why brown front strips and sidewalk overspray get noticed on the walk or drive over.
          </p>
          <p>
            Outdoor watering here follows city hours and Tarrant County supply reality. Check the{' '}
            <a
              href="https://www.eulesstx.gov/community/environment/water-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Euless water conservation page
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
            . The trails at{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/bob-eden-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bob Eden Park
            </a>{' '}
            — originally Little Bear Creek Community Park — sit in the same creek corridor. Irrigation here has to respect clay,
            mature trees, HOA curb appeal, and city watering hours, not a brand-new open-sun plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Bear Creek?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
