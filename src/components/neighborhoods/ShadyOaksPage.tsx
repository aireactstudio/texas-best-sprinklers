import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function ShadyOaksPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Hurst"
      citySlug="hurst"
      neighborhoodName="Shady Oaks"
      canonicalUrl="https://sprinkleranddrains.com/hurst/shady-oaks"
      pageTitle="Shady Oaks Sprinkler Repair & Drainage in Hurst, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Shady Oaks in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Shady Oaks Sprinkler Repair & Drainage"
      heroDescription="Shady Oaks Addition lots in ZIP 76054 mix 1960s Circleview ranches with 1990s Shade Tree Circle infill on the same clay plat. We diagnose two generations of irrigation, convert foundation spray to drip, and plan drainage where grade leans toward Harwood Road and the Valley View Branch headwaters — not Fort Worth’s Shady Oaks Country Club, and not Bedford’s Mayfair Hills."
      introHeading="Two irrigation generations on one Shady Oaks plat"
      intro={
        <>
          <p>
            Shady Oaks is a north Hurst subdivision recorded as Shady Oaks Addition-Hurst, not a Fort Worth country-club street
            and not the 1960s Bedford cul-de-sacs of Mayfair Hills. Homes sit in ZIP 76054. Typical access is Airport Freeway
            (SH 183) to Precinct Line Road north, then east on Harwood Road and south on Cavender Drive into Shade Tree Circle,
            Shade Tree Court, Circleview Drive North, and Circleview Drive South. That street mix matters for irrigation: 1961
            brick ranches on Circleview often still run first-generation laterals under a sixty-year canopy, while Shade Tree
            Circle houses from the mid-1990s came with a later builder layout on smaller ~0.19 acre pads. Circleview lots can
            stretch closer to a quarter acre. One controller program cannot treat both. Circleview listings commonly note no
            homeowners association, so there is usually no architectural committee to file with, but school traffic on Cavender
            and neighbors still see the front lawn.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Shady Oaks as part of our Hurst and Mid-Cities work. We are a
            licensed irrigator (LI22462). Hurst watering is stricter than Bedford’s hours-only window: even addresses water
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
            weekly ET advice instead of leaving a summer schedule running into fall. We do not claim a count of jobs on
            Circleview Drive, Shade Tree Circle, or any other Shady Oaks street. We do walk each zone, protect established
            landscaping, and quote through{' '}
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
        '1960s Circleview laterals and 1990s Shade Tree Circle builder zones sit on the same plat. Dry sidewalk strips and wet shade pockets often show up on the same visit.',
        'Mature oaks on Circleview split each lot into deep shade and a baked street strip; later Shade Tree pads have less canopy and higher afternoon heat on a smaller clay pad.',
        'Valley View Branch originates just downstream of Harwood Road. Low corners and fence lines that fall toward Harwood already collect stormwater — more spray will not dry them.',
        'Hurst even/odd days, a Monday shutoff, and a 10 a.m.–6 p.m. spray ban are not Bedford’s hours-only rule. A controller still set like a 1960s Bedford cul-de-sac wastes water here.'
      ]}
      serviceFocus={[
        'Sprinkler repair for sunken heads, leaking valves, root-damaged laterals, and dry bands along Circleview, Shade Tree Circle, and Cavender-facing walks.',
        'Drip conversion at foundation beds so 1960s brick, 1990s two-story walls, window frames, and mulch stop getting soaked by high-pressure spray.',
        'Controller programming and cycle-and-soak schedules for Hurst even/odd days, the Monday shutoff, and the 10 a.m. to 6 p.m. spray window.',
        'Drainage planning for Harwood-side lows, patio pooling, and runoff that now aims at slabs after decades of clay settlement near the Valley View Branch headwaters.',
        'Outdoor lighting for walkways, oaks, and front entries on streets that face school traffic without a gated HOA look.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Hurst clay can absorb water instead of sheeting toward Harwood gutters or a low Circleview side yard.',
        'Walk zones after mowing. Settling heads on 1960s Circleview lots tilt quickly; 1990s Shade Tree Circle heads often sit too high or too low after soil movement.',
        'Keep spray off brick, walks, and the street. Cavender Drive school traffic notices misting and brown bands immediately, even without an HOA.',
        'Set even addresses for Wednesday/Saturday and odd addresses for Thursday/Sunday. Do not water Monday, and do not run spray between 10 a.m. and 6 p.m.',
        'Drop summer runtimes when nights cool. Water is Awesome still publishes weekly ET advice even when Hurst is not in a drought stage.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without inventing a gated HOA',
          description:
            'Circleview listings commonly show no homeowners association. Front lawns still face Shade Tree Circle, Harwood Road, and weekday traffic toward Shady Oaks Elementary on Cavender Drive. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Hurst even/odd days and Tarrant supply',
          description:
            'Hurst requires even addresses on Wednesday and Saturday, odd addresses on Thursday and Sunday, no Monday spray, and no irrigation between 10 a.m. and 6 p.m. Drip, handheld, and soaker hose are treated separately. We set start times, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not treating October like August.'
        },
        {
          title: 'Two-era lots, clay, and mixed canopy',
          description:
            'A 1961 Circleview ranch and a 1994 Shade Tree Circle two-story do not share one pressure, zone count, or shade pattern. Expansive clay plus decades of oak roots cracks PVC on the older streets and leaves builder-default spray hitting brick on the newer ones. We rebalance each era instead of adding minutes.'
        },
        {
          title: 'Headwaters drainage and foundation drip',
          description:
            'Valley View Branch starts just downstream of Harwood Road and flows south toward Mayfair Park and L.D. Bell High School. Lots that fall toward Harwood already collect stormwater. Older and newer slabs both do better with filtered drip at the beds than with spray hitting brick. After heavy rain we look at downspouts and settled corners so irrigation is not fighting standing water against the foundation.'
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
                'We had Texas Best Sprinklers install a complete irrigation system for our new landscaping. The team was professional and thorough in explaining how to program the controller.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Shady Oaks street photo'
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
        heading: 'Featured work for homes like these in Shady Oaks',
        title: 'A 1960s Circleview-style system next to a 1990s Shade Tree layout, both fighting the same clay',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Hurst / nearby Mid-Cities service — not a named Circleview Drive or Shade Tree Circle job.',
        body: 'A common call on this plat looks like two different neighborhoods sharing a fence. On a 1960s Circleview-style lot, heads have sunk below the mower line, laterals are brittle under oaks, and a long single cycle sheets toward the curb before clay drinks. On a 1990s Shade Tree Circle-style pad, the builder spray still hits brick and a smaller sunny yard browns between Hurst watering days. Both sit on expansive clay. Lots that fall toward Harwood already collect stormwater because Valley View Branch originates just downstream of that road — more spray will not dry a low corner. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip. Controller start times follow Hurst even/odd days, skip Monday, and stay outside the 10 a.m.–6 p.m. spray window with cycle-and-soak repeats. If the wet corner is irrigation plus settled grade and downspouts, we talk through drainage instead of pretending another zone hour will fix it. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Shady Oaks clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Shady Oaks lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Harwood gutters, Circleview side yards, and fence lines that already lean toward the Valley View Branch headwaters.'
        },
        {
          title: 'Heat, ET, and Shady Oaks even/odd schedules',
          description:
            'Hurst summers push evapotranspiration hard, and the city limits spray to even Wednesday/Saturday or odd Thursday/Sunday, with no Monday watering and no spray from 10 a.m. to 6 p.m. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Shady Oaks systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun across Shady Oaks eras',
          description:
            'Sixty-year oaks on Circleview Drive create deep shade next to a hot street strip. Shade Tree Circle infill often has less canopy on a smaller pad, so turf cooks faster between watering days. Shared runtimes overwater one era and starve the other. Separate nozzle types and zone timing keep both sides of the addition honest.'
        },
        {
          title: 'Shady Oaks headwaters drainage and foundation drip',
          description:
            'Valley View Branch starts just downstream of Harwood Road and flows south past Mayfair Park toward L.D. Bell High School. Low pads on the Harwood and Cavender edge collect clay water after storms. Foundation drip protects 1960s ranches and 1990s two-stories better than spray. Settled side yards need a drainage plan, not another hour on the controller.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Shady Oaks site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis across 1960s and 1990s zone layouts',
        'Repair and upgrade recommendations that fit Hurst even/odd watering days and neighbor-facing curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Shady Oaks?',
          answer:
            'Circleview listings commonly note no homeowners association, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Hurst guidance. We describe the visible scope before work starts so you can check city rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Shady Oaks clay, shade, and mixed-era lots?',
          answer:
            'Most Shady Oaks yards need cycle-and-soak on turf, separate runtimes for Circleview oak shade versus sunnier Shade Tree Circle pads, and drip at foundation beds. Do not run a long single cycle that sheets toward Harwood. We set programs around Hurst even/odd days, the Monday shutoff, the 10 a.m. to 6 p.m. spray ban, and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Shady Oaks?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Hurst watering rules?',
          answer:
            'Hurst allows even residential addresses to water Wednesday and Saturday and odd addresses Thursday and Sunday. Monday is a no-watering day. Spray irrigation is prohibited between 10 a.m. and 6 p.m. Drip, handheld hose, and soaker hose are treated separately. We program start times and day patterns that fit that ordinance, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into Harwood or Circleview gutters. Always confirm the latest notice on the City of Hurst water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Mayfair North',
          description:
            '1980s Norwood Drive lots near Chisholm Park — different plat, different watering-day programming, same Hurst clay.',
          link: '/hurst'
        },
        {
          name: 'Hurst Hills',
          description: 'Established west Hurst streets near Pipeline Road with school-zone lots and aging irrigation.',
          link: '/hurst'
        },
        {
          name: 'Bellaire Park North',
          description: 'Southeast Hurst homes near Bellaire and Vivagene Copeland parks that need clay-soil cycle-and-soak.',
          link: '/hurst'
        },
        {
          name: 'Wintergreen Acres',
          description: 'Nearby Hurst residential irrigation repair, drip conversion, and drainage planning.',
          link: '/hurst'
        },
        {
          name: 'Mayfair Hills',
          description: '1960s–70s Bedford cul-de-sacs with oak shade — similar era to Circleview, different city watering rules.',
          link: '/bedford/mayfair-hills'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on mixed-era Shady Oaks lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Harwood and Valley View Branch.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and tree-ring drip so 1960s ranches and 1990s two-stories get water without soaking brick.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Shady Oaks Elementary',
          url: 'https://shadyoaks.hebisd.edu/',
          description:
            'HEB ISD campus at 1400 Cavender Drive, next to the addition. Weekday school traffic is why overspray on Cavender-facing walks gets noticed quickly.'
        },
        {
          name: 'Mayfair Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/74/',
          description:
            '6.1-acre park at 1725 Norwood with a 0.4-mile trail and playground. Valley View Branch flows south from Harwood toward this park — useful context for how stormwater leaves Shady Oaks lots.'
        },
        {
          name: 'Chisholm Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/32',
          description:
            'Hurst’s 50-acre park at 2200 Norwood Drive (1969) with a fishing pond, 1.5-mile trails, and the aquatics center. Nearby north Hurst greenspace, not a claim that Shady Oaks lots back to the pond.'
        },
        {
          name: 'Hurst Public Library',
          url: 'https://www.hursttx.gov/about-us/departments/library',
          description:
            'The library at 901 Precinct Line Road is on the same Precinct Line corridor used to reach Harwood and Cavender from SH 183.'
        },
        {
          name: 'Hurst Community Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/164/887',
          description:
            'Athletic fields, playground, and walking trail at 601 Precinct Line Road. Another city greenspace south of Pipeline that Shady Oaks families use on the same civic loop as the library.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Shady Oaks is tied to the{' '}
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
            , and parks listed by{' '}
            <a
              href="https://www.hursttx.gov/residents/parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst Parks
            </a>
            . Families also use{' '}
            <a
              href="https://shadyoaks.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Shady Oaks Elementary
            </a>{' '}
            on Cavender Drive and{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst Public Library
            </a>{' '}
            on Precinct Line Road, which is why brown front strips and sidewalk overspray get noticed on the walk or school drop-off.
          </p>
          <p>
            Outdoor watering here follows city days and Tarrant County supply reality. Check the{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/public-works/water-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Hurst water conservation page
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
            . L.D. Bell High School on Brown Trail sits downstream along the same Valley View Branch corridor that starts near
            Harwood — a reminder that this is an older Mid-Cities addition where irrigation has to respect clay, two housing
            eras, and Hurst even/odd rules, not a brand-new HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Shady Oaks?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
