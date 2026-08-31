import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function MorningsidePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Euless"
      citySlug="euless"
      neighborhoodName="Morningside"
      canonicalUrl="https://sprinkleranddrains.com/euless/morningside"
      pageTitle="Morningside Sprinkler Repair & Drainage in Euless, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Morningside in Euless, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Morningside Sprinkler Repair & Drainage"
      heroDescription="Early-1980s Twin Creek Estates lots on Morningside Drive and Creekside Drive mix compact clay yards, original irrigation, and stormwater that moves toward the neighborhood creek. We diagnose leaks, rebalance spray and drip, and plan drainage so water soaks in instead of running to the curb or a neighbor’s slab."
      introHeading="Creek-side clay, compact lots, and 1980s zones need a different watering plan"
      intro={
        <>
          <p>
            Morningside is the south Euless cluster of single-family brick homes in Twin Creek Estates, along streets such as
            Morningside Drive, Creekside Drive, Tanbark Drive, Evergreen Drive, Dunaway Drive, Ascot Drive, and Dickey Drive.
            Most houses date to around 1981 on lots near 8,000 square feet. The first irrigation layout is often still in the
            ground: too few zones, mixed replacement heads, and a controller that still waters like peak August. Compact front
            lawns sit next to driveways and sidewalks, so misting and runoff show up on the street view quickly. After forty
            years of clay settlement, side yards and patio corners hold stormwater even when the sunny strip along the curb is
            brown. Creek-named streets and nearby J.A. Carr Park trail bridges are a reminder that this plat was graded toward
            drainage corridors — a different problem than a new Mid-Cities tract with a recent smart controller and matched
            nozzles.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Morningside as part of our Euless work. We are a licensed
            irrigator (LI22462). We program start times around the city’s year-round rule — no outdoor irrigation from 10 a.m.
            to 6 p.m. — and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving a summer schedule running into fall. Handheld hose, drip, and soaker lines
            are treated differently under the city ordinance than spray zones, which is why foundation beds belong on drip. We
            do not claim a count of jobs on a specific Morningside street. We do walk each zone, protect established trees and
            beds, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original early-1980s systems on Twin Creek Estates lots often have too few zones and mismatched heads; dry curb strips and wet shade pockets show up on the same visit.',
        'Compact ~8,000 sq ft lots put spray close to sidewalks, drives, and neighboring fences, so overspray and misting waste water and annoy the street view.',
        'Euless’s year-round 10 a.m. to 6 p.m. watering limit means night and early-morning cycle-and-soak windows have to actually drain into clay, not sheet to Morningside Drive gutters.',
        'Creek-side grading toward Creekside Drive and J.A. Carr Park needs drainage planning after Mid-Cities storms, not another hour on the controller.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along sidewalks and curb returns on Morningside Drive and Creekside Drive.',
        'Drip conversion at foundation beds so 1980s brick and siding stop getting soaked — drip is also exempt from the city’s midday spray ban.',
        'Controller programming and cycle-and-soak schedules that fit Euless watering hours and Tarrant County heat.',
        'Drainage planning for settled side yards, patio pooling, and runoff that moves toward the neighborhood creek corridor.',
        'Outdoor lighting repair and additions for walkways and entries on established south Euless streets.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Morningside clay can absorb water instead of sending it down the curb toward Creekside Drive and Carr Park drainage.',
        'Walk zones after mowing. Settling heads on 40-year lots tilt quickly and stripe the front lawn along the sidewalk.',
        'Keep spray off walks, drives, and neighboring lots. Twin Creek Estates typically has no HOA, but compact lots and city watering hours still make misting obvious.',
        'Drop summer runtimes when nights cool. Euless is not always under a drought stage, but Water is Awesome still publishes weekly ET-based advice.',
        'Inspect valve boxes before peak heat. Slow leaks hide under mulch and fence-line turf long before the front strip shows stress.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without inventing an HOA',
          description:
            'Twin Creek Estates listings typically note no homeowners association. Front lawns still face sidewalks on Morningside, Tanbark, and Evergreen. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Euless watering hours and Tarrant supply',
          description:
            'The city prohibits outdoor irrigation from 10 a.m. to 6 p.m. year-round. We set controllers for those windows, add rain and freeze protection where hardware allows, and point homeowners to Water is Awesome weekly guidance and the City of Euless conservation page.'
        },
        {
          title: 'Clay, compact lots, and creek-side runoff',
          description:
            'Expansive clay plus smaller south Euless lots is the Morningside pattern: one sunny curb strip browns, a fence line stays soft, and stormwater follows the grade toward Creekside Drive. We rebalance zones instead of adding runtime that just runs to the gutter.'
        },
        {
          title: 'Drip at 1980s foundations and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on established lots. After heavy rain we look at downspouts and low pads so irrigation is not fighting standing water next to a 1981 slab or a creek-side side yard.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Morningside street photo'
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
        heading: 'Featured work for homes like these in Morningside',
        title: 'A dry curb strip, a soggy fence line, and a controller still on August',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Euless / nearby Mid-Cities service — not a named Morningside street.',
        body: 'A common call on established south Euless lots looks like this: the sunny strip along the sidewalk browns out, turf along a wood fence stays dark and soft, and a patio corner holds water after storms. Clay sheds a long watering cycle before roots drink, and an original three- or four-zone layout cannot treat sun and shade the same on an 8,000-square-foot lot. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting brick and mulch. Controller start times move into Euless’s allowed windows with cycle-and-soak repeats. If the low pad is irrigation plus a downspout draining toward the creek corridor, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Morningside clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Twin Creek Estates lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward curb returns, sidewalks, and the Creekside Drive drainage line.'
        },
        {
          title: 'Heat, ET, and Morningside controller schedules',
          description:
            'Euless summers push evapotranspiration hard, and the city still limits irrigation from 10 a.m. to 6 p.m. year-round. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Morningside systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Compact Morningside lots versus overspray',
          description:
            'Front yards on Morningside Drive and Tanbark sit close to drives, sidewalks, and neighboring fences. High-pressure misting wastes water and stripes the street view. Pressure-regulated heads and matched nozzles keep throw on the turf instead of the neighbor’s driveway.'
        },
        {
          title: 'Creek-side Morningside drainage and older systems',
          description:
            'First-generation pipe and mixed replacement heads are common on early-1980s homes. Foundation drip protects older slabs better than spray. Settled side yards and patio lows near the creek corridor need a drainage plan after storms, not another hour on the controller.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Morningside site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect city watering hours and neighbor-facing curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Morningside?',
          answer:
            'Twin Creek Estates lots typically do not have a homeowners association, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Euless guidance. We describe the visible scope before work starts so you can check city rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Morningside clay, compact lots, and creek-side yards?',
          answer:
            'Most Morningside yards need cycle-and-soak on turf, shorter throw on compact front lawns so spray stays off sidewalks and drives, and drip at foundation beds. Do not run a long single cycle that sheets to Creekside Drive. We set programs around Euless’s 10 a.m. to 6 p.m. irrigation limit and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Morningside?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Euless watering rules?',
          answer:
            'Euless currently prohibits outdoor watering with sprinklers or irrigation systems between 10 a.m. and 6 p.m. year-round. Handheld hose, drip irrigation, and soaker hose have different allowances, which is one reason we convert foundation beds to drip. We program start times and day patterns that fit that window, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest notice on the City of Euless water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Wilshire Village',
          description: 'Sprinkler repair, controller tuning, and drainage planning for nearby Wilshire Village homes in Euless.',
          link: '/euless/wilshire-village'
        },
        {
          name: 'Oakwood Terrace',
          description: 'Irrigation and drainage support for established Euless streets near south Mid-Cities lots.',
          link: '/euless'
        },
        {
          name: 'Bear Creek',
          description: 'Seasonal sprinkler service and clay-soil watering help across north Euless near Bear Creek parks.',
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
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established Morningside lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Creekside Drive and Carr Park.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed drip so 1980s Morningside slabs get water without soaking brick — and without midday spray.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Heritage Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/heritage-park',
          description:
            'A 4-acre historic park on Cullum Drive in south Euless (76040) with the Fuller House, Himes Log House, playground, and a short walking trail. A regular landmark when placing Morningside on the city map.'
        },
        {
          name: 'J.A. Carr Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/j-a-carr-park',
          description:
            'Five acres at 508 Simmons Drive with a crushed-limestone loop, playground, and walking bridges across the creek. Useful context for how stormwater already moves through this part of south Euless.'
        },
        {
          name: 'South Euless Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/south-euless-park',
          description:
            'The 5-acre park at 600 S. Main Street sits behind South Euless Elementary. Families from Twin Creek Estates streets use the playground and basketball court through the week.'
        },
        {
          name: 'South Euless Elementary',
          url: 'https://southeuless.hebisd.edu/',
          description:
            'HEB ISD campus at 605 S. Main Street. School-zone traffic and the campus lawn are everyday context for how front yards on nearby Morningside streets are seen and used.'
        },
        {
          name: 'Mary Lib Saleh Euless Public Library',
          url: 'https://www.eulesstx.gov/departments/library',
          description:
            'The city library on Ector Drive is a straightforward civic stop for south Euless households, along with parks listed by Euless Parks and Community Services.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Morningside is tied to the{' '}
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
              href="https://www.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst-Euless-Bedford Independent School District
            </a>
            , and{' '}
            <a
              href="https://southeuless.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              South Euless Elementary
            </a>{' '}
            on Main Street. Families also use{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/city-parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Euless city parks
            </a>
            , including{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/heritage-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Heritage Park
            </a>{' '}
            on Cullum Drive and{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/j-a-carr-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              J.A. Carr Park
            </a>
            , which is why brown front strips and sidewalk overspray get noticed on the walk or drive over.
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
            . The{' '}
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
              href="https://www.eulesstx.gov/departments/parks-and-community-services/euless-family-life-center"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Euless Family Life Center
            </a>{' '}
            round out the same civic map — a reminder that this is an established Mid-Cities neighborhood where irrigation has to
            respect clay, compact lots, creek-side grading, and city watering hours, not a brand-new HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Morningside?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
