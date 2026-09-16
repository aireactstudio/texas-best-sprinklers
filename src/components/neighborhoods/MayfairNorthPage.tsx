import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');

export default function MayfairNorthPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Hurst"
      citySlug="hurst"
      neighborhoodName="Mayfair North"
      canonicalUrl="https://sprinkleranddrains.com/hurst/mayfair-north"
      pageTitle="Mayfair North Sprinkler Repair & Drainage in Hurst, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Mayfair North in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Mayfair North Sprinkler Repair & Drainage"
      heroDescription="Early-1980s Mayfair North Addition lots on Norwood Drive, Farrington Lane, and Parkridge Drive mix clay turf, 40-year tree shade, and a few larger pads next to Chisholm Park. We diagnose aging zones, convert foundation spray to drip, and plan drainage where grade leans toward park greenspace and the fishing pond — without confusing this 76054 pocket with Bedford’s Mayfair Hills."
      introHeading="Pressure, park-edge grade, and 1980s zones on Mayfair North lots"
      intro={
        <>
          <p>
            Mayfair North is a north Hurst subdivision in ZIP 76054, not the 1960s cul-de-sacs of Mayfair Hills in Bedford. The
            plat is the Mayfair North Addition. Access is typically Colleyville Boulevard onto Norwood Drive, then into
            Farrington Lane, Parkridge Drive, Cambridge Drive, and Mountainview Drive. Most homes went in around 1982–1983, so
            the first irrigation layout is now about forty years old: mixed replacement heads, brittle laterals under mature
            oaks and elms, and a controller that still waters like peak August. Lots are a mix of typical Mid-Cities pads and a
            few larger, even acreage-scale yards along Norwood. Those bigger pads lose pressure at the far heads, while smaller
            Parkridge and Farrington lots show the opposite problem — overspray onto walks because nobody rebalanced nozzles
            after decades of tree growth. Listings commonly note no homeowners association, so there is no architectural
            committee to file with, but neighbors and park traffic still see the front lawn.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Mayfair North as part of our Hurst and Mid-Cities work. We are
            a licensed irrigator (LI22462). Hurst watering is stricter than Bedford’s hours-only window: even addresses water
            Wednesday and Saturday, odd addresses Thursday and Sunday, nothing on Monday, and spray is off between 10 a.m. and
            6 p.m. Drip, handheld hose, and soaker hose are treated separately. We program around that ordinance and{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly ET advice instead of leaving a summer schedule running into fall. We do not claim a count of jobs on Norwood
            Drive, Farrington Lane, or any other Mayfair North street. We do walk each zone, protect established landscaping,
            and quote through{' '}
            <a
              href="/contact"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        '1980s laterals under forty-year oaks and elms crack, sink, and mist. One runtime cannot serve a shady Parkridge side yard and a baked Norwood street strip.',
        'Larger Norwood pads need more zones and pressure regulation; typical Farrington and Cambridge lots need matched nozzles so spray stops hitting walks.',
        'Grade toward Chisholm Park and Mayfair Park on Norwood holds clay water after storms. More spray will not dry a low corner that already drains toward the pond and trail.',
        'Hurst even/odd days plus a Monday shutoff and a 10 a.m.–6 p.m. spray ban are not Bedford’s hours-only rule. Controllers still set like a 1960s Bedford cul-de-sac waste water here.'
      ]}
      serviceFocus={[
        'Sprinkler repair for sunken heads, leaking valves, root-damaged laterals, and dry bands along Norwood, Farrington, and Parkridge walks.',
        'Drip conversion at foundation beds so 1980s brick, window frames, and mulch stop getting soaked by high-pressure spray.',
        'Controller programming and cycle-and-soak schedules for Hurst even/odd days, the Monday shutoff, and the 10 a.m. to 6 p.m. spray window.',
        'Drainage planning for park-edge lows, patio pooling, and runoff that now aims at slabs after forty years of clay settlement.',
        'Outdoor lighting for walkways, oaks, and front entries on streets that face park traffic without a gated HOA look.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Hurst clay can absorb water instead of sheeting toward Norwood gutters or a low park-edge corner.',
        'Walk zones after mowing. Settling heads on 1980s lots tilt quickly and stripe the front lawn along Farrington Lane and Parkridge Drive.',
        'Keep spray off brick, walks, and the street. Park visitors on Norwood notice misting and brown bands immediately, even without an HOA.',
        'Set even addresses for Wednesday/Saturday and odd addresses for Thursday/Sunday. Do not water Monday, and do not run spray between 10 a.m. and 6 p.m.',
        'Drop summer runtimes when nights cool. Water is Awesome still publishes weekly ET advice even when Hurst is not in a drought stage.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without a gated HOA',
          description:
            'Mayfair North listings typically show no homeowners association. Front lawns still face Norwood Drive, Farrington Lane, and park traffic at Chisholm and Mayfair Park. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Hurst even/odd days and Tarrant supply',
          description:
            'Hurst requires even addresses on Wednesday and Saturday, odd addresses on Thursday and Sunday, no Monday spray, and no irrigation between 10 a.m. and 6 p.m. Drip, handheld, and soaker hose are treated separately. We set start times, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not treating October like August.'
        },
        {
          title: 'Mixed lot size, clay, and 40-year canopy',
          description:
            'A typical Cambridge or Parkridge pad and a larger Norwood yard do not share one pressure and runtime. Expansive clay plus forty years of oak and elm roots cracks PVC, sinks heads, and splits each lot into shade pockets and baked strips. We rebalance zones instead of only adding minutes.'
        },
        {
          title: 'Park-edge drainage and foundation drip',
          description:
            'Lots that fall toward Chisholm Park’s fishing pond or Mayfair Park’s trail already collect stormwater. 1980s slabs do better with filtered drip at the beds than with spray hitting brick. After heavy rain we look at downspouts and settled corners so irrigation is not fighting standing water against the foundation.'
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
                'Called Texas Best Sprinklers for a repair on my existing system. They diagnosed the problem quickly and had it fixed the same day.',
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
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Mayfair North street photo'
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
        heading: 'Featured work for homes like these in Mayfair North',
        title: 'Far-head pressure drop, a wet park-edge corner, and a controller still on a summer program',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Hurst / nearby DFW service — not a named Mayfair North street.',
        body: 'A common call on 1980s north Hurst lots looks like this: the sunny strip by the driveway browns out, turf under the oaks stays dark and soft, and a back corner holds water after storms because the yard falls toward park greenspace. On a larger Norwood-style pad the last heads mist instead of covering, so someone turns up runtime and the sidewalk floods. Clay sheds a long watering cycle before roots drink. Original heads have sunk below the mower line. We map zones, check static and operating pressure, add regulation or split a long run when throw collapses at the far end, match nozzles so precipitation lines up, and move foundation beds onto drip where spray was hitting brick and mulch. Controller days move to Hurst even/odd windows with no Monday start and no 10 a.m.–6 p.m. spray. If the wet corner is irrigation plus settled grade and downspouts toward the park, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Mayfair North clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Mayfair North lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Norwood gutters, Farrington fence lines, and park-edge lows near Chisholm and Mayfair Park.'
        },
        {
          title: 'Heat, ET, and Mayfair North controller schedules',
          description:
            'Mid-Cities summers push evapotranspiration hard, but Hurst only allows two spray days and bans Monday. We set seasonal programs around even/odd addresses, the 10 a.m. to 6 p.m. spray ban, and Water is Awesome weekly guidance so Mayfair North systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on Mayfair North streets',
          description:
            'Forty years of oaks and elms create shade pockets next to open turf along Parkridge Drive, Farrington Lane, and Cambridge Drive. Shade and sun zones need different nozzles and runtimes, or one side stays soggy while the street strip dies.'
        },
        {
          title: 'Larger Mayfair North lots, pressure, and foundation drip',
          description:
            'A few Norwood yards are much larger than a typical Mid-Cities pad. Long laterals lose pressure, far heads mist, and foundations still get soaked by leftover spray. We regulate pressure, split zones when throw collapses, and convert beds to filtered drip instead of watering the slab.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Mayfair North site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit 1980s lots, mixed pad sizes, and Hurst watering days',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Mayfair North?',
          answer:
            'Mayfair North Addition listings typically show no homeowners association, so there is usually no architectural committee for head replacements, valve work, or controller changes. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Hurst guidance depending on scope. We describe the visible work before it starts so you can check any deed restrictions or city requirements. We do not file permit or association applications unless that is arranged separately. This is not Bedford’s Mayfair Hills — confirm you are in Hurst 76054 before using another city’s rules.'
        },
        {
          question: 'How should we water Mayfair North clay, shade, and mixed lot sizes?',
          answer:
            'Most Mayfair North yards need cycle-and-soak on turf, separate runtimes for oak shade versus the sunny driveway strip, and drip at foundation beds. Larger Norwood pads often need pressure regulation or an extra zone so far heads actually cover. Long single cycles sheet across clay and collect in park-edge corners. We set programs around Hurst even/odd days, the Monday shutoff, the 10 a.m. to 6 p.m. spray ban, and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, and how far grade has settled toward the slab or park greenspace change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Mayfair North?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Root-damaged laterals, main-line leaks, pressure problems on larger pads, or drainage that needs a layout may need a follow-up. Same-week scheduling is typical; active leaks get priority. We plan around park and school traffic on Norwood when we can.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'Hurst allows residential spray on two days: even addresses Wednesday and Saturday, odd addresses Thursday and Sunday. Monday is off. Spray is prohibited between 10 a.m. and 6 p.m. Drip irrigation, handheld hoses, and soaker hoses are treated separately and may be used outside those spray-day limits. We program start times that fit those rules, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Confirm the latest notice on the City of Hurst water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Hurst Hills',
          description: 'School-zone lots and even/odd Hurst watering on the 76053 side of town, south of this 76054 pocket.',
          link: '/hurst'
        },
        {
          name: 'Shady Oaks',
          description: 'Sprinkler repair, controller tuning, and clay-soil drainage planning for nearby Hurst streets.',
          link: '/hurst'
        },
        {
          name: 'Bellaire Park North',
          description: 'Irrigation diagnostics and outdoor lighting support near Hurst’s Bellaire Park cluster.',
          link: '/hurst'
        },
        {
          name: 'Wintergreen Acres',
          description: 'Seasonal sprinkler service and drainage planning for established Hurst lots.',
          link: '/hurst'
        },
        {
          name: 'Mayfair Hills (Bedford)',
          description: 'A different 1960s Bedford subdivision — not Mayfair North Addition in Hurst 76054.',
          link: '/bedford/mayfair-hills'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, root-damaged laterals, and dry spots on 1980s Mayfair North lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for park-edge lows, patio pooling, and clay saturation near older Hurst slabs.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed conversions that keep water on plants instead of brick, mulch, and window frames.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Chisholm Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/32',
          description:
            'Hurst’s largest park at 2200 Norwood Drive (50 acres, opened 1969) with a fishing pond, 1.5-mile trails, aquatics, and fields. Park-edge yards on Norwood often grade toward this greenspace.'
        },
        {
          name: 'Mayfair Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/74/',
          description:
            'A 6.1-acre neighborhood park at 1725 Norwood with a 0.4-mile walking trail, pavilion, and playground. Front lawns on nearby Mayfair North streets are part of the same Norwood corridor.'
        },
        {
          name: 'W.A. Porter Elementary',
          url: 'https://porterelementary.birdvilleschools.net/',
          description:
            'Birdville ISD campus at 2750 Prestondale Drive, Hurst 76054. Many Mayfair North listings along Norwood list Porter, Smithfield Middle, and Birdville High — confirm your address before assuming HEB ISD.'
        },
        {
          name: 'Hurst Public Library',
          url: 'https://www.hursttx.gov/about-us/departments/library',
          description:
            'The library at 901 Precinct Line Road is a regular Mid-Cities stop and an official TPWD tackle loaner site for the Chisholm Park fishing pond.'
        },
        {
          name: 'Hurst Recreation Center',
          url: 'https://www.hursttx.gov/about-us/departments/community-services/find-us',
          description:
            'The rec center at 700 Mary Drive (Central Park) is east of this pocket and a practical landmark when placing Mayfair North on the Hurst map.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Mayfair North is tied to the{' '}
            <a
              href="https://www.hursttx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Hurst
            </a>
            , trails and fields at{' '}
            <a
              href="https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/32"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Chisholm Park
            </a>
            , the smaller greenspace at{' '}
            <a
              href="https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/74/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Mayfair Park
            </a>
            , and campuses in{' '}
            <a
              href="https://www.birdvilleschools.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Birdville ISD
            </a>
            {' '}
            such as{' '}
            <a
              href="https://porterelementary.birdvilleschools.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              W.A. Porter Elementary
            </a>
            . That Norwood Drive corridor — park traffic, school drop-off nearby, no gated HOA — is why overspray onto walks and
            uneven front turf gets noticed quickly. This is not{' '}
            <a
              href="/bedford/mayfair-hills"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Mayfair Hills in Bedford
            </a>
            .
          </p>
          <p>
            Outdoor watering here follows Tarrant County supply reality plus a Hurst-specific even/odd calendar. Check weekly
            advice from{' '}
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
            , and the city’s{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/public-works/water-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              water conservation page
            </a>
            . Neighborhood fishing details for the Chisholm pond are on the city’s{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/parks/neighborhood-fishing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              neighborhood fishing
            </a>{' '}
            page, and the{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst Public Library
            </a>{' '}
            loans tackle for that pond. Useful civic context — not a reason to ignore lot-level drip at foundations or drainage
            after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Mayfair North?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462 serving Mayfair North, Hurst."
    />
  );
}
