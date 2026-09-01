import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function OakwoodTerracePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Euless"
      citySlug="euless"
      neighborhoodName="Oakwood Terrace"
      canonicalUrl="https://sprinkleranddrains.com/euless/oakwood-terrace"
      pageTitle="Oakwood Terrace Sprinkler Repair & Drainage in Euless, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Oakwood Terrace in Euless, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Oakwood Terrace Sprinkler Repair & Drainage"
      heroDescription="South Euless lots on Oakwood Drive and Vine Street mix 1950s–60s irrigation with newer infill rebuilds on the same clay quarter-acre pads. We diagnose leaks, rebalance spray and drip, and plan drainage so water soaks in instead of running toward Pipeline Road gutters and older slabs."
      introHeading="Two irrigation generations on the same Oakwood Terrace block"
      intro={
        <>
          <p>
            Oakwood Terrace is the Oakwood Terrace Addition in south Euless (76040), a mid-century plat of single-family lots along
            Oakwood Drive and Vine Street, with Pipeline Road as the usual way in. Many houses date to about 1959–1961. Typical lots
            are around a quarter acre (often 10,000–11,000 square feet). The unusual irrigation problem here is not a gated HOA or a
            creek edge — it is mixed generations on the same street. Original brick homes still run three- or four-zone layouts with
            mixed replacement heads, while infill rebuilds (some as recent as 2025) show up with builder-default controllers, full-sun
            turf, and spray aimed at fresh foundation beds. Clay settlement on the older pads holds water at patio corners even when
            the sunny street strip is brown. That is a different job than a uniform 1980s tract or a brand-new master-planned street.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Oakwood Terrace as part of our Euless and Mid-Cities work. We are a
            licensed irrigator (LI22462). We program start times around the city’s year-round rule — no outdoor irrigation from 10
            a.m. to 6 p.m. — and we treat drip, soaker, and handheld foundation watering as the ordinance allows, instead of forcing
            every bed onto spray. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice rather than leaving a peak-August schedule running into fall. We do not claim a count of jobs on
            Oakwood Drive or Vine Street. We do walk each zone, protect established trees and new sod alike, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original 1950s–60s systems on Oakwood Drive often have too few zones and mismatched heads; a rebuild next door may have a new controller that still overwaters clay.',
        'Quarter-acre pads split into a hot street strip, shade under mature trees, and settled side yards that hold stormwater after Mid-Cities rain.',
        'Euless prohibits spray irrigation from 10 a.m. to 6 p.m. year-round. Night and early-morning cycle-and-soak windows have to drain into clay, not sheet toward Pipeline Road.',
        'Foundation beds on older slabs and new rebuilds both perform better on drip than leftover spray that hits brick, siding, and mulch.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along sidewalks and curb returns on Oakwood Drive and Vine Street.',
        'Drip conversion at foundation beds so 1960s brick and new rebuild slabs stop getting soaked by turf spray.',
        'Controller programming and cycle-and-soak schedules that fit Euless watering hours and Tarrant County heat.',
        'Drainage planning for settled side yards, patio pooling, and fence-line runoff after storms.',
        'Outdoor lighting repair and additions for walkways and entries on established south Euless streets.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Oakwood Terrace clay can absorb water instead of sending it down the street toward Pipeline Road gutters.',
        'Walk zones after mowing. Settling heads on 60-year lots tilt quickly and stripe the front lawn along the sidewalk.',
        'Keep spray off walks, drives, and neighboring lots. Many Oakwood Terrace listings note no HOA, but neighbors and city watering hours still notice misting at noon.',
        'If you just rebuilt, do not copy the original house’s runtime. New full-sun sod and old oak shade cannot share one program.',
        'Inspect valve boxes before peak heat. Slow leaks hide under tree mulch long before turf shows stress.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without inventing an HOA',
          description:
            'Property records for Oakwood Terrace Addition lots commonly list no homeowners association. Front lawns still face sidewalks and curbs. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Euless watering hours and Tarrant supply',
          description:
            'The city prohibits outdoor watering with sprinklers or irrigation systems from 10 a.m. to 6 p.m. year-round. Handheld hose, drip, and soaker hose are treated differently for foundations and new plantings. We set controllers for those windows and point homeowners to Water is Awesome weekly guidance.'
        },
        {
          title: 'Clay plus mixed-era lots on the same block',
          description:
            'Expansive clay is the Oakwood Terrace pattern: a 1961 lawn browns on the street strip while a 2025 rebuild next door pools at the patio. We rebalance zones instead of adding runtime that just runs to the curb.'
        },
        {
          title: 'Drip at foundations and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on both original and infill lots. After heavy rain we look at downspouts and low pads so irrigation is not fighting standing water next to an older slab.'
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
          src: '/assets/images/optimized/sprinkler.png',
          alt: 'Sprinkler coverage check on a North Texas residential lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Oakwood Terrace street photo'
        },
        {
          src: '/assets/images/optimized/drainage-weatherford.png',
          alt: 'Drainage work on a Texas Best Sprinklers project',
          caption: 'French drain at a low patio — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/lighting/3417.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Oakwood Terrace',
        title: 'A 1960s four-zone layout next to a rebuild still on August spray',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Euless / nearby Mid-Cities service — not a named Oakwood Terrace street.',
        body: 'A common call on south Euless lots looks like this: the original house still waters like it did when the trees were small — long cycles, mixed nozzles, and spray washing brick. The rebuild next door has new sod, a default controller, and heads that mist in the afternoon wind off Pipeline Road. Clay sheds the first cycle before roots drink. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting siding and mulch. Controller start times move into Euless’s 10 a.m. to 6 p.m. blackout with cycle-and-soak repeats. If a patio corner is irrigation plus a downspout on a settled 1960s pad, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Oakwood Terrace clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Oakwood Terrace lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward curb returns, sidewalks, and Pipeline Road gutter lines.'
        },
        {
          title: 'Heat, ET, and Oakwood Terrace controller schedules',
          description:
            'Euless summers push evapotranspiration hard, and the city still limits irrigation from 10 a.m. to 6 p.m. every day of the year. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Oakwood Terrace systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on mixed-era Oakwood Terrace lots',
          description:
            'Mature canopy on original homes sits next to open, full-sun rebuild pads. Shared runtimes overwater the shade pocket and starve the new street strip — or soak a new slab’s beds. Separate nozzle types and zone timing keep both sides of an Oakwood Terrace yard honest.'
        },
        {
          title: 'Older Oakwood Terrace systems, foundations, and storm drainage',
          description:
            'First-generation pipe and mixed replacement heads are common on 1959–1961 homes. Foundation drip protects older slabs and new rebuilds better than spray. Settled side yards and patio lows need a drainage plan after storms, not another hour on the controller.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Oakwood Terrace site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect city watering hours and neighbor-facing curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Oakwood Terrace?',
          answer:
            'Many Oakwood Terrace Addition lots do not have a homeowners association, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Euless guidance. We describe the visible scope before work starts so you can check city rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Oakwood Terrace clay, shade, and mixed-era lots?',
          answer:
            'Most Oakwood Terrace yards need cycle-and-soak on turf, separate runtimes for tree shade versus the sunny street strip, and drip at foundation beds. Do not run a long single cycle that sheets to the curb. We set programs around Euless’s year-round 10 a.m. to 6 p.m. irrigation limit and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot. Rebuilds and original homes on the same block should not share one schedule.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Oakwood Terrace?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Euless watering rules?',
          answer:
            'Euless currently prohibits outdoor watering with sprinklers or irrigation systems between 10 a.m. and 6 p.m. year-round. Handheld hose, drip irrigation, and soaker hose are allowed for foundations, lawns, and new plantings under the ordinance. We program start times that fit that window, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest notice on the City of Euless water conservation page before changing days yourself.'
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
          description: 'Irrigation and drainage support for south Euless streets near J.A. Carr Park and creek-side lots.',
          link: '/euless'
        },
        {
          name: 'Bear Creek',
          description: 'Seasonal sprinkler service and clay-soil watering help across western Euless.',
          link: '/euless'
        },
        {
          name: 'Timber Ridge',
          description: 'Coverage troubleshooting and water-efficient irrigation support for nearby Euless neighborhoods.',
          link: '/euless'
        },
        {
          name: 'Bedford Heights',
          description: 'Sprinkler repair and drainage planning for nearby Mid-Cities homes in Bedford.',
          link: '/bedford/bedford-heights'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established Oakwood Terrace lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward curbs and Pipeline Road gutters.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed drip so original Oakwood Terrace slabs and new rebuilds get water without soaking brick.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Oakwood Terrace Elementary',
          url: 'https://oakwoodterrace.hebisd.edu/',
          description:
            'HEB ISD campus at 700 Ranger Road. The school that shares the neighborhood name is everyday context for how front yards on Oakwood Drive and Vine Street are seen during drop-off and pickup.'
        },
        {
          name: 'J.A. Carr Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/j-a-carr-park',
          description:
            'A 5-acre neighborhood park at 508 Simmons Drive with a crushed-limestone loop, playground, and creek-side walking bridges. Useful context for how local clay and stormwater behave a short drive from Oakwood Terrace.'
        },
        {
          name: 'Heritage Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/heritage-park',
          description:
            'Historic park on Cullum Drive with the Fuller House, Himes Log House, and McCormick Barn. A south Euless landmark Oakwood Terrace residents use for events and weekend walks.'
        },
        {
          name: 'South Euless Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/south-euless-park',
          description:
            'Five acres at 600 S. Main Street behind South Euless Elementary — playground, half-court basketball, and the Old Iron Bridge. Another 76040 greenspace that shows how this part of the city grades after rain.'
        },
        {
          name: 'Midway Park',
          url: 'https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/midway-park',
          description:
            'Twenty-two acres at 300 W. Midway Drive, home to the Euless Family Life Center, aquatic park, and lighted fields. A regular stop for families from south Euless neighborhoods including Oakwood Terrace.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Oakwood Terrace is tied to the{' '}
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
            — including{' '}
            <a
              href="https://oakwoodterrace.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Oakwood Terrace Elementary
            </a>{' '}
            on Ranger Road and{' '}
            <a
              href="https://centraljh.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Central Junior High
            </a>{' '}
            on West Pipeline Road — and parks listed by{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/city-parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Euless Parks &amp; Community Services
            </a>
            . Families also use{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/j-a-carr-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              J.A. Carr Park
            </a>{' '}
            on Simmons Drive, which is why brown front strips and sidewalk overspray get noticed on the walk or drive over.
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
            . The historic cluster at{' '}
            <a
              href="https://www.eulesstx.gov/departments/parks-and-community-services/city-parks/heritage-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Heritage Park
            </a>{' '}
            on Cullum Drive is a reminder that this is an older Mid-Cities neighborhood where irrigation has to respect clay, mixed-era
            lots, and city watering hours — not a brand-new HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Oakwood Terrace?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
