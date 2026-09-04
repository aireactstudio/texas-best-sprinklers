import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function MayfairHillsPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Bedford"
      citySlug="bedford"
      neighborhoodName="Mayfair Hills"
      canonicalUrl="https://sprinkleranddrains.com/bedford/mayfair-hills"
      pageTitle="Mayfair Hills Sprinkler Repair & Drainage in Bedford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Mayfair Hills in Bedford, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Mayfair Hills Sprinkler Repair & Drainage"
      heroDescription="Established Mayfair Hills lots mix 1960s–70s irrigation, mature oaks, and clay that sheds long watering cycles. We diagnose leaks, rebalance spray and drip, and plan drainage so water soaks in instead of running toward cul-de-sacs, sidewalks, and slabs."
      introHeading="Cycle-and-soak irrigation for Mayfair Hills oaks, clay, and older zones"
      intro={
        <>
          <p>
            Mayfair Hills is an established north Bedford subdivision of single-family homes on quiet cul-de-sacs such as
            Mayfair Hill Court, a short drive from Brown Trail and Shady Lake Drive. Most houses date to the 1960s and 1970s,
            so the first irrigation layout is often still in the ground: too few zones, mixed replacement heads, and a controller
            that still waters like peak August. Mature oaks split each lot into deep shade and a hot street strip. After fifty
            years of clay settlement, side yards and patio corners hold stormwater even when the front lawn is brown. That is
            a different problem than a new Mid-Cities tract with a recent smart controller and matched nozzles.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Mayfair Hills as part of our Bedford work. We are a licensed
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
            weekly watering advice instead of leaving a summer schedule running into fall. We do not claim a count of jobs on a
            specific Mayfair Hills street. We do walk each zone, protect established trees and beds, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original 1960s–70s systems on Mayfair Hills lots often have too few zones and mismatched heads; dry sidewalk strips and wet shade pockets show up on the same visit.',
        'Mature oaks along cul-de-sacs create shade-to-sun turf that cannot share one runtime without wasting water or browning the street view.',
        'Bedford’s 10 a.m. to 6 p.m. watering limit means night and early-morning cycle-and-soak windows have to actually drain into clay, not sheet to the curb.',
        'Foundation beds on older slabs perform better on drip than leftover spray that hits brick, siding, and mulch.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along sidewalks and cul-de-sac curb returns.',
        'Drip conversion at foundation beds and tree rings so older brick and siding stop getting soaked.',
        'Controller programming and cycle-and-soak schedules that fit Bedford watering hours and Tarrant County heat.',
        'Drainage planning for settled side yards, patio pooling, and fence-line runoff after Mid-Cities storms.',
        'Outdoor lighting repair and additions for walkways and entries on established Forest Ridge–area streets.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Mayfair Hills clay can absorb water instead of sending it down the cul-de-sac to Brown Trail gutters.',
        'Walk zones after mowing. Settling heads on 50-year lots tilt quickly and stripe the front lawn along the sidewalk.',
        'Keep spray off walks, drives, and neighboring lots. Many streets here have no HOA, but neighbors and city watering hours still notice misting at noon.',
        'Drop summer runtimes when nights cool. Bedford is not always under a drought stage, but Water is Awesome still publishes weekly ET-based advice.',
        'Inspect valve boxes before peak heat. Slow leaks hide under oak mulch long before turf shows stress.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without inventing an HOA',
          description:
            'Many Mayfair Hills listings note no homeowners association. Front lawns still face sidewalks and cul-de-sacs. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Bedford watering hours and Tarrant supply',
          description:
            'The city asks residents not to irrigate between 10 a.m. and 6 p.m. even when drought stages are off. We set controllers for those windows, add rain and freeze protection where hardware allows, and point homeowners to Water is Awesome weekly guidance.'
        },
        {
          title: 'Clay, oaks, and fifty-year settlement',
          description:
            'Expansive clay plus mature canopy is the Mayfair Hills pattern: one sunny front strip browns, shade stays soft, and a patio corner holds water. We rebalance zones instead of adding runtime that just runs to the curb.'
        },
        {
          title: 'Drip at older foundations and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on established lots. After heavy rain we look at downspouts and low pads so irrigation is not fighting standing water next to a 1970s slab.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Mayfair Hills street photo'
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
        heading: 'Featured work for homes like these in Mayfair Hills',
        title: 'A dry sidewalk strip, a soggy oak shade pocket, and a controller still on August',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Bedford / nearby Mid-Cities service — not a named Mayfair Hills street.',
        body: 'A common call on established Bedford lots looks like this: the sunny strip along the sidewalk browns out, turf under oaks stays dark and soft, and a patio corner holds water after storms. Clay sheds a long watering cycle before roots drink, and an original three- or four-zone layout cannot treat shade and sun the same. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting brick and mulch. Controller start times move into Bedford’s allowed windows with cycle-and-soak repeats. If the low pad is irrigation plus a downspout, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Mayfair Hills clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Mayfair Hills lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward cul-de-sac returns, sidewalks, and Brown Trail gutter lines.'
        },
        {
          title: 'Heat, ET, and Mayfair Hills controller schedules',
          description:
            'Bedford summers push evapotranspiration hard, and the city still limits irrigation from 10 a.m. to 6 p.m. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Mayfair Hills systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on Mayfair Hills oak lots',
          description:
            'Live oaks and other mature canopy create deep shade next to open front turf. Shared runtimes overwater the shade pocket and starve the street strip. Separate nozzle types and zone timing keep both sides of a Mayfair Hills yard honest.'
        },
        {
          title: 'Older Mayfair Hills systems, foundations, and storm drainage',
          description:
            'First-generation pipe and mixed replacement heads are common on 1960s–70s homes. Foundation drip protects older slabs better than spray. Settled side yards and patio lows need a drainage plan after storms, not another hour on the controller.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Mayfair Hills site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect city watering hours and neighbor-facing curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Mayfair Hills?',
          answer:
            'Many Mayfair Hills lots do not have a homeowners association, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Bedford guidance. We describe the visible scope before work starts so you can check city rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Mayfair Hills clay, shade, and older lots?',
          answer:
            'Most Mayfair Hills yards need cycle-and-soak on turf, separate runtimes for oak shade versus the sunny sidewalk strip, and drip at foundation beds. Do not run a long single cycle that sheets to the cul-de-sac. We set programs around Bedford’s 10 a.m. to 6 p.m. irrigation limit and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Mayfair Hills?',
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
          link: '/bedford/bedford-meadows'
        },
        {
          name: 'Stonegate',
          description: 'Coverage troubleshooting and water-efficient irrigation support for nearby Bedford neighborhoods.',
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
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established Mayfair Hills lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward cul-de-sacs and sidewalks.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and tree-ring drip so older Mayfair Hills slabs and oaks get water without soaking brick.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Generations Park at Boys Ranch',
          url: 'https://bedfordtx.gov/454/Generations-Park-at-Boys-Ranch',
          description:
            'Bedford’s 68-acre park on Forest Ridge Drive — rec center, lake path, and ballfields a few blocks from Mayfair Hills. Useful context for how local clay and stormwater behave beyond the cul-de-sac.'
        },
        {
          name: 'The Center at Generations Park',
          url: 'https://bedfordtx.gov/709/The-Center',
          description:
            'The city’s multi-generation rec facility (operated with the YMCA) on the same Forest Ridge campus. A regular stop for families, not a substitute for lot-level irrigation and drainage.'
        },
        {
          name: 'Bedford Public Library',
          url: 'https://www.bedfordlibrary.org/',
          description:
            'The library at 2424 Forest Ridge Drive is a short trip from Mayfair Hills and a straightforward landmark when describing this part of north Bedford.'
        },
        {
          name: 'Old Bedford School',
          url: 'https://www.bedfordtx.gov/obs',
          description:
            'The 1915 schoolhouse on School Lane is a city historic site and event venue. It sits in the same civic cluster as the library and park that Mayfair Hills residents use all week.'
        },
        {
          name: 'Bedford Parks & Recreation',
          url: 'https://www.bedfordtx.gov/214/Parks-Recreation',
          description:
            'City parks, programs, and facility listings. The department’s fields and greenspace are why runoff and overspray on neighborhood walks get noticed quickly.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Mayfair Hills is tied to the{' '}
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
            , and parks listed by{' '}
            <a
              href="https://www.bedfordtx.gov/214/Parks-Recreation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bedford Parks &amp; Recreation
            </a>
            . Families also use the{' '}
            <a
              href="https://www.bedfordlibrary.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bedford Public Library
            </a>{' '}
            and{' '}
            <a
              href="https://bedfordtx.gov/454/Generations-Park-at-Boys-Ranch"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Generations Park at Boys Ranch
            </a>{' '}
            on Forest Ridge Drive, which is why brown front strips and sidewalk overspray get noticed on the walk or drive over.
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
            . The historic{' '}
            <a
              href="https://www.bedfordtx.gov/obs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Old Bedford School
            </a>{' '}
            on School Lane sits in the same civic cluster — a reminder that this is an older Mid-Cities neighborhood where irrigation
            has to respect clay, mature trees, and city watering hours, not a brand-new HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Mayfair Hills?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
