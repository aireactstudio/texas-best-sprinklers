import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function WintergreenAcresPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Hurst"
      citySlug="hurst"
      neighborhoodName="Wintergreen Acres"
      canonicalUrl="https://sprinkleranddrains.com/hurst/wintergreen-acres"
      pageTitle="Wintergreen Acres Sprinkler Repair & Drainage in Hurst, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Wintergreen Acres in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Wintergreen Acres Sprinkler Repair & Drainage"
      heroDescription="Early-1970s brick ranches on Toni Drive, Autumn Drive, and Winterhaven sit on quarter-acre clay east of Precinct Line Road. We diagnose aging zones, convert foundation spray to drip, and plan drainage where settled yards now send stormwater toward slabs — without treating this plat like Norwood’s park-edge lots."
      introHeading="1970s laterals still try to water season-named cul-de-sacs on clay"
      intro={
        <>
          <p>
            Wintergreen Acres is the Wintergreen Acres Addition in north Hurst, ZIP 76054, east of Precinct Line Road. Access is
            straightforward: heading north on Precinct Line from State Highway 26, turn east onto Toni Drive, then continue onto
            Toni Court, Autumn Drive, Winterhaven Drive, Summerdale Drive, and Hurstview Drive. Appraisal records place most
            houses in the early-to-mid 1970s — 1971 through 1977 is typical on Summerdale, Autumn, and Toni, with some later
            rebuilds on Hurstview. Lots are usually about two-tenths to a quarter acre. Mature post oak and pecan shade now
            split those pads into damp corners and a few baked strips along the street. Original irrigation, where it still
            exists, was laid out for younger trees and flatter grade. Roots crush PVC, heads sink below the mower line, and
            Hurstview-facing turf shows every misting head to passing traffic. This is not Mayfair North on Norwood Drive, not
            Shady Oaks on Circleview, and not a gated HOA village. Listings for Toni Court and Autumn Drive commonly show no
            association fee.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Wintergreen Acres as part of our Hurst and Mid-Cities work. We
            are a licensed irrigator (LI22462). We program controllers for Hurst&apos;s year-round even/odd days, the Monday
            shutoff, and the 10 a.m. to 6 p.m. spray ban — drip, handheld, and soaker hoses are treated separately. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly ET advice instead of leaving an August schedule running into fall. North-of-SH-183 addresses have also seen
            city conservation notices during water-main repairs, so a controller that still waters every leftover day is not just
            wasteful — it fights how this side of Hurst is actually supplied. We do not claim a count of jobs on Toni Drive,
            Autumn Drive, or Winterhaven. We do walk each zone, protect established trees, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Early-1970s laterals under Toni, Autumn, and Summerdale often have buried heads, brittle pipe, and wiring that fails under mature oak and pecan roots.',
        'Quarter-acre lots mix deep shade in the back corner with a sunny Hurstview or Precinct Line strip — one runtime soaks the slab and still burns the street view.',
        'Hurst’s Monday shutoff plus even/odd days and a midday spray ban catch controllers that still treat every leftover day like peak August.',
        'Settled side yards on 50-year-old pads hold clay water against brick after Mid-Cities storms; more spray will not dry those spots.'
      ]}
      serviceFocus={[
        'Sprinkler repair for sunken heads, leaking valves, root-damaged laterals, and dry bands along Hurstview Drive and sidewalk-facing turf.',
        'Drip conversion at foundation beds so brick ranches, window frames, and mulch stop getting soaked by high-pressure spray.',
        'Controller programming and cycle-and-soak for Hurst clay, Monday shutoff, even/odd days, and the 10 a.m. to 6 p.m. spray window.',
        'Drainage planning for settled side yards, patio lows, and runoff that now aims at 1970s slabs instead of rolling cleanly to the curb.',
        'Outdoor lighting for walkways, oaks, and front entries that matches traditional brick architecture without a gated-HOA look.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Hurst clay can absorb water instead of sheeting toward Precinct Line gutters or a low side yard.',
        'Walk zones after mowing. Settling heads on 1970s Toni Court and Autumn Drive lots tilt quickly and stripe the front lawn.',
        'Confirm the address is even or odd before adding a start day. Hurst skips Monday entirely and treats apartments and parks on Tuesday and Friday.',
        'Keep spray off brick, sidewalks, and the Hurstview collector. Street views here show misting and brown bands immediately.',
        'Drop summer runtimes when nights cool. Water is Awesome still publishes weekly ET advice even when no extra drought stage is posted.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without a gated HOA',
          description:
            'Wintergreen Acres typically has no association fee, but Precinct Line and Hurstview traffic still sees the front lawn every day. We match heads, straighten risers, and cut overspray so Toni Drive and Autumn Drive look even without a wholesale redesign.'
        },
        {
          title: 'Water efficiency under Hurst rules',
          description:
            'Hurst is not Bedford’s hours-only page. Even addresses water Wednesday and Saturday; odd addresses Thursday and Sunday; no Monday; no spray from 10 a.m. to 6 p.m. Drip, handheld, and soaker are treated separately. We set those windows and Water is Awesome weekly guidance.'
        },
        {
          title: '1970s clay lots east of Precinct Line',
          description:
            'Expansive clay plus fifty years of oak and pecan roots is the usual Wintergreen challenge. Long single cycles run off; shade pockets stay wet; PVC cracks. We rebalance zones and repair laterals instead of only adding runtime.'
        },
        {
          title: 'Foundation drip and storm drainage',
          description:
            '1970s slabs do better with filtered drip at the beds than with spray hitting brick. After heavy rain we look at settled side yards and downspout discharge so irrigation is not fighting standing water against the foundation.'
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
                'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased, and our lawn has never looked better.',
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
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Wintergreen Acres street photo'
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
        heading: 'Featured work for homes like these in Wintergreen Acres',
        title: 'A Hurstview strip stayed brown while the shaded side yard stayed wet',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Hurst / nearby DFW service — not a named Wintergreen Acres street.',
        body: 'A common call on 1970s Wintergreen lots looks like this: the sunny strip along Hurstview or the Toni Drive frontage browns out, turf under the oaks stays dark and soft, and a side-yard corner holds water against the brick after storms. Clay sheds a long watering cycle before roots drink. Original heads have sunk below the mower line and spray the sidewalk. The controller may still start on Monday or in the middle of the day — both against Hurst’s year-round rules. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting walls and mulch. Controller runtimes split into cycle-and-soak windows on the correct even or odd days, after 6 p.m. or before 10 a.m. If the wet corner is irrigation plus settled grade and downspouts, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Wintergreen Acres clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Toni Drive and Summerdale lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Precinct Line gutters, fence lines, and settled side yards.'
        },
        {
          title: 'Heat, ET, and Wintergreen Acres controller schedules',
          description:
            'Mid-Cities summers push evapotranspiration hard. We set seasonal programs around Hurst even/odd days, the Monday shutoff, and Water is Awesome weekly guidance so Wintergreen systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on Wintergreen Acres quarter-acre pads',
          description:
            'Oak and pecan canopies create shade pockets next to open turf along Autumn Drive and Winterhaven. Shade and sun zones need different nozzles and runtimes, or one side stays soggy while the Hurstview strip dies.'
        },
        {
          title: 'Aging Wintergreen Acres irrigation and foundation drip',
          description:
            'Fifty-year-old laterals, valves, and wiring fail under root pressure and clay movement. Foundation beds on brick ranches perform better on filtered drip than on spray. We repair what still works and convert beds instead of watering the slab.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Wintergreen Acres site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit 1970s brick lots and Precinct Line access',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Wintergreen Acres?',
          answer:
            'Wintergreen Acres typically does not operate like a gated architectural HOA — Toni Court and Autumn Drive listings commonly show no association fee. Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Hurst guidance depending on scope. We describe the visible work before it starts so you can check any deed restrictions or city requirements. We do not file permit or association applications unless that is arranged separately.'
        },
        {
          question: 'How should we water Wintergreen Acres clay, shade, and 1970s lots?',
          answer:
            'Most Wintergreen yards need cycle-and-soak on turf, separate runtimes for oak shade versus the sunny Hurstview or street strip, and drip at foundation beds. Long single cycles sheet across clay and collect in settled side yards. We set programs around Hurst even/odd days, the Monday shutoff, the 10 a.m. to 6 p.m. spray ban, and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and how far grade has settled toward the slab change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Wintergreen Acres?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Root-damaged laterals, main-line leaks, or drainage that needs a layout may need a follow-up. Same-week scheduling is typical; active leaks get priority. We plan around Precinct Line traffic when possible.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'Hurst’s year-round schedule is no watering Monday; even addresses Wednesday and Saturday; odd addresses Thursday and Sunday; apartments, businesses, and parks Tuesday and Friday. Spray irrigation is not permitted from 10 a.m. to 6 p.m. Handheld hose, drip, and soaker hose are treated separately. We program start times and day patterns that fit those rules, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Always confirm the latest notice on the City of Hurst water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Mayfair North',
          description: '1980s Norwood Drive lots near Chisholm Park — a different 76054 plat than Toni and Autumn.',
          link: '/hurst'
        },
        {
          name: 'Hurst Hills',
          description: 'Irrigation and drainage support for established Hurst streets west toward I-820.',
          link: '/hurst'
        },
        {
          name: 'Shady Oaks',
          description: 'Circleview and Shade Tree lots in north Hurst with mixed irrigation generations.',
          link: '/hurst'
        },
        {
          name: 'Bellaire Park North',
          description: 'Southeast Hurst streets near Bellaire Park and Pecan Drive — not this 76054 addition.',
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
          description: 'Head replacement, valve leaks, root-damaged laterals, and dry spots on 1970s Wintergreen Acres lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed conversions that keep water on plants instead of brick, mulch, and window frames.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for settled side yards, patio lows, and clay saturation near older Hurst slabs.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Hurst Public Library',
          url: 'https://www.hursttx.gov/about-us/departments/library',
          description:
            'The library at 901 Precinct Line Road sits on the same corridor used to enter Toni Drive. A regular stop for 76054 families, and a reminder that street-facing turf on this side of Hurst is seen all week.'
        },
        {
          name: 'Hurst Community Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/164/887',
          description:
            'Athletic fields, a playground, and a walking trail at 601 Precinct Line Road. Nearby civic green, not a reason to ignore lot-level drainage on Wintergreen cul-de-sacs.'
        },
        {
          name: 'Chisholm Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/32',
          description:
            'Hurst’s 50-acre park at 2200 Norwood Drive (1969) with a fishing pond and 1.5-mile trails. Useful north-Hurst context — Wintergreen Acres does not back to that pond the way Norwood lots can.'
        },
        {
          name: 'W.A. Porter Elementary',
          url: 'https://porterelementary.birdvilleschools.net/',
          description:
            'Birdville ISD campus at 2750 Prestondale Drive, Hurst 76054. Many Wintergreen Acres addresses zone here; confirm the specific house. School-week traffic is part of daily life on nearby streets.'
        },
        {
          name: 'Hurst Parks List and Map',
          url: 'https://www.hursttx.gov/about-us/departments/parks/parks-list-and-map',
          description:
            'City directory for parks, trails, and recreation sites across Hurst, including Community Park, Chisholm Park, and the Recreation Center at 700 Mary Drive.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Wintergreen Acres is tied to the{' '}
            <a
              href="https://www.hursttx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Hurst
            </a>
            , campuses in{' '}
            <a
              href="https://www.birdvilleschools.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Birdville Independent School District
            </a>
            , and the neighborhood campus at{' '}
            <a
              href="https://porterelementary.birdvilleschools.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              W.A. Porter Elementary
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
            and{' '}
            <a
              href="https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/164/887"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst Community Park
            </a>{' '}
            on Precinct Line Road — which is why overspray onto walks and uneven front turf gets noticed quickly.
          </p>
          <p>
            Outdoor watering here follows Hurst&apos;s year-round schedule, not Bedford&apos;s hours-only guidance. Check the
            city&apos;s{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/public-works/water-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              water conservation page
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
            . Parks listed on the{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/parks/parks-list-and-map"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst parks list
            </a>
            , including{' '}
            <a
              href="https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/32"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Chisholm Park
            </a>
            , sit a short drive west — useful civic green space, not a reason to ignore lot-level drip at foundations or drainage
            after storms on Toni Drive and Autumn Drive.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Wintergreen Acres?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
