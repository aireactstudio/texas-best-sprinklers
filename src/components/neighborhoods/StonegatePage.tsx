import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function StonegatePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Bedford"
      citySlug="bedford"
      neighborhoodName="Stonegate"
      canonicalUrl="https://sprinkleranddrains.com/bedford/stonegate"
      pageTitle="Stonegate Sprinkler Repair & Drainage in Bedford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Stonegate Addition homes in Bedford, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Stonegate Sprinkler Repair & Drainage"
      heroDescription="Stonegate Addition lots sit on late-1960s clay pads beside Airport Freeway (SH 183), with original irrigation that cannot treat sun-baked street strips and shade the same way. We diagnose leaks, rebalance spray and drip, and plan drainage so water soaks in instead of running toward service-road gutters and slabs."
      introHeading="Irrigation for a 1960s plat that straddles Airport Freeway"
      intro={
        <>
          <p>
            Stonegate is the Stonegate Addition plat in Bedford — late-1960s brick homes on roughly two-tenths of an acre, not a
            new Mid-Cities tract with a recent smart controller. Streets such as Stonegate Drive North and Stratford Drive sit
            north of Airport Freeway (SH 183), reached from the Bedford Euless Road or Brown Trail exits, then west along the
            service road. South of the freeway, the same addition includes Regents Park and the namesake campus at Stonegate
            Elementary (900 Bedford Road, 76022). Listings on the north side commonly show no homeowners association, 1967–1969
            construction, and lots around 8,300 square feet. After fifty years of clay settlement, a three- or four-zone layout
            that once watered young turf now fights compacted soil, mixed replacement heads, and wind off the 183 frontage.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Stonegate as part of our Bedford work. We are a licensed
            irrigator (LI22462). We program start times around the city’s everyday rule — no outdoor irrigation from 10 a.m. to
            6 p.m. — and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving a peak-August schedule running into cooler months. We do not claim a count
            of jobs on Stonegate Drive North or Regents Park. We do walk each zone, protect established trees and beds, and quote
            through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            . Stonegate Drive North also appears on the adjacent Mayfair Hills plat; we treat the legal addition and the actual
            lot, not a copied neighborhood name.
          </p>
        </>
      }
      highlights={[
        'Late-1960s Stonegate Addition systems often have too few zones; dry curb strips and wet shade pockets show up on the same visit.',
        'Lots north of SH 183 take freeway heat and wind, so misting heads waste water onto the service-road approach instead of the root zone.',
        'Bedford’s 10 a.m. to 6 p.m. watering limit means night and early-morning cycle-and-soak windows have to drain into clay, not sheet to the gutter.',
        'Foundation beds on older slabs perform better on drip than leftover spray that hits brick, siding, and mulch.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Stonegate Drive North and Stratford sidewalks.',
        'Drip conversion at foundation beds and tree rings so 1960s brick and siding stop getting soaked.',
        'Controller programming and cycle-and-soak schedules that fit Bedford watering hours and Tarrant County heat.',
        'Drainage planning for settled side yards, patio pooling, and runoff that moves toward the 183 service road after Mid-Cities storms.',
        'Outdoor lighting repair and additions for walkways and entries on established Bedford Road–area streets.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Stonegate clay can absorb water instead of sending it toward SH 183 gutters.',
        'Walk zones after mowing. Settling heads on 1960s lots tilt quickly and stripe the front lawn along the sidewalk.',
        'Keep spray off walks, drives, and neighboring lots. Many Stonegate listings note no HOA, but school traffic on Bedford Road still notices noon misting.',
        'Drop summer runtimes when nights cool. Bedford is not always under a drought stage, but Water is Awesome still publishes weekly ET-based advice.',
        'Inspect valve boxes before peak heat. Slow leaks hide under oak and elm mulch long before turf shows stress.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without inventing an HOA',
          description:
            'Stonegate Addition listings commonly show no homeowners association. Front lawns still face sidewalks, Stratford corners, and the 183 approach. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Bedford watering hours and Tarrant supply',
          description:
            'The city asks residents not to irrigate between 10 a.m. and 6 p.m. even when drought stages are off. We set controllers for those windows, add rain and freeze protection where hardware allows, and point homeowners to Water is Awesome weekly guidance.'
        },
        {
          title: 'Clay pads next to a freeway frontage',
          description:
            'Expansive clay plus SH 183 heat is the north-Stonegate pattern: a sunny street strip browns, shade stays soft, and wind carries mist off the lot. We rebalance zones instead of adding runtime that just runs to the service-road gutter.'
        },
        {
          title: 'Drip at older foundations and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on 1967–1969 lots. After heavy rain we look at downspouts and low pads so irrigation is not fighting standing water next to an original slab.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Stonegate street photo'
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
        heading: 'Featured work for homes like these in Stonegate',
        title: 'A brown 183-facing strip, a soggy side yard, and a controller still on August',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Bedford / nearby Mid-Cities service — not a named Stonegate street.',
        body: 'A common call on Stonegate Addition lots looks like this: the sunny strip along Stonegate Drive North or Stratford browns out, turf in the shade stays dark and soft, and a patio corner holds water after storms. Clay sheds a long watering cycle before roots drink, and freeway wind pushes mist off the lot. An original three- or four-zone layout cannot treat the 183-facing strip and the shaded side yard the same. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting brick and mulch. Controller start times move into Bedford’s allowed windows with cycle-and-soak repeats. If the low pad is irrigation plus a downspout, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Stonegate clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Stonegate Addition lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward sidewalks, Stratford curb returns, and the Airport Freeway gutter line.'
        },
        {
          title: 'Heat, ET, and Stonegate controller schedules',
          description:
            'Bedford summers push evapotranspiration hard, and lots north of SH 183 run hotter and windier than interior Mid-Cities streets. The city still limits irrigation from 10 a.m. to 6 p.m. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Stonegate systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on Stonegate 1960s lots',
          description:
            'Mature oaks and elms create deep shade next to open front turf on ~0.19-acre pads. Shared runtimes overwater the shade pocket and starve the street strip. Separate nozzle types and zone timing keep both sides of a Stonegate yard honest.'
        },
        {
          title: 'Older Stonegate systems, foundations, and storm drainage',
          description:
            'First-generation pipe and mixed replacement heads are common on 1967–1969 homes. Foundation drip protects older slabs better than spray. Settled side yards and patio lows need a drainage plan after storms, not another hour on the controller — especially where grade tilts toward the 183 service road.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Stonegate site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect city watering hours and neighbor-facing curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Stonegate?',
          answer:
            'Many Stonegate Addition listings note no homeowners association, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Bedford guidance. We describe the visible scope before work starts so you can check city rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Stonegate clay, shade, and 183-adjacent lots?',
          answer:
            'Most Stonegate yards need cycle-and-soak on turf, separate runtimes for shade versus the sunny street strip, and drip at foundation beds. Do not run a long single cycle that sheets toward the SH 183 service road. We set programs around Bedford’s 10 a.m. to 6 p.m. irrigation limit and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, freeway-adjacent compaction, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Stonegate?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Bedford watering rules?',
          answer:
            'Bedford currently asks residents not to irrigate outdoors between 10 a.m. and 6 p.m., even when drought stages are lifted. We program start times and day patterns that fit that window, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest notice on the City of Bedford water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Mayfair Hills',
          description: 'Adjacent 1960s–70s Bedford lots on clay with mature oaks — irrigation repair and drainage planning.',
          link: '/bedford/mayfair-hills'
        },
        {
          name: 'Bedford Heights',
          description: 'Sprinkler repair, controller tuning, and drainage planning for nearby Bedford Heights homes.',
          link: '/bedford/bedford-heights'
        },
        {
          name: 'Bell Manor',
          description: 'Irrigation and drainage support for established Bedford streets near Forest Ridge and HEB ISD campuses.',
          link: '/bedford/bell-manor'
        },
        {
          name: 'Bedford Meadows',
          description: 'Seasonal sprinkler service and clay-soil watering help across central Bedford.',
          link: '/bedford'
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
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established Stonegate Addition lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward the 183 service road and sidewalks.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and tree-ring drip so older Stonegate slabs and trees get water without soaking brick.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Stonegate Elementary',
          url: 'https://stonegate.hebisd.edu/',
          description:
            'HEB ISD campus at 900 Bedford Road (76022), the namesake school for this plat. Weekday drop-off on Bedford Road is why brown front strips and sidewalk overspray get noticed quickly.'
        },
        {
          name: 'Stormie Jones Park',
          url: 'https://bedfordtx.gov/facilities/facility/details/Stormie-Jones-Park-6',
          description:
            'A 13-acre city park at 2700 Brasher Lane with playground, soccer fields, volleyball, and a walking loop — a regular Mid-Cities stop for families living on Stonegate Drive North and Stratford.'
        },
        {
          name: 'Harris Ryals Park',
          url: 'https://bedfordtx.gov/800/Harris-Ryals-Park',
          description:
            'A 32-acre linear park at 2700 Cummings Drive along the Oncor easement, with two playgrounds and a 1.5-mile path. Useful context for how local clay and stormwater behave beyond the cul-de-sac.'
        },
        {
          name: 'Bedford Parks and Trails Guide',
          url: 'https://www.bedfordtx.gov/792/Parks-and-Trails-Guide',
          description:
            'City listings for Meadow Park Athletic Complex (3200 Meadow Park Drive), Stormie Jones, Harris Ryals, and other greenspace Stonegate residents use through the week.'
        },
        {
          name: 'Bedford Parks & Recreation',
          url: 'https://www.bedfordtx.gov/214/Parks-Recreation',
          description:
            'Programs, facilities, and park contacts. The department’s fields and walks are why runoff and noon overspray on neighborhood sidewalks get noticed.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Stonegate is tied to the{' '}
            <a
              href="https://bedfordtx.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Bedford
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
            , and the namesake campus at{' '}
            <a
              href="https://stonegate.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Stonegate Elementary
            </a>
            . North-of-183 lots on Stonegate Drive North and Stratford often list{' '}
            <a
              href="https://shadybrook.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Shady Brook Elementary
            </a>{' '}
            and nearby L.D. Bell High School on Brown Trail — confirm any address on the district locator. Families also use parks
            in the{' '}
            <a
              href="https://www.bedfordtx.gov/792/Parks-and-Trails-Guide"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bedford parks and trails guide
            </a>
            , including Meadow Park Athletic Complex on Meadow Park Drive.
          </p>
          <p>
            Outdoor watering here follows city hours and Tarrant County supply reality. Check the{' '}
            <a
              href="https://bedfordtx.gov/665/Water-Conservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Bedford water conservation page
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
            . Recreation listings from{' '}
            <a
              href="https://www.bedfordtx.gov/214/Parks-Recreation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bedford Parks &amp; Recreation
            </a>{' '}
            sit a few minutes away — a reminder that this is an older Mid-Cities plat beside SH 183 where irrigation has to respect
            clay, mature trees, and city watering hours, not a brand-new HOA street.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Stonegate?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
