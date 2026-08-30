import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');
const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');

export default function TimberLakePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Southlake"
      citySlug="southlake"
      neighborhoodName="Timber Lake"
      canonicalUrl="https://sprinkleranddrains.com/southlake/timber-lake"
      pageTitle="Timber Lake Sprinkler Repair & Drainage in Southlake, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Timber Lake in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Timber Lake Sprinkler Repair & Drainage"
      heroDescription="1990s custom lots on Timber Lake Drive and Timber Lake Way mix mature canopy, HOA street views, and pond-side grades between Southlake Boulevard and Continental. We repair aging spray systems, convert beds to drip, and plan drainage so clay holds water instead of sending it toward neighborhood ponds and greenbelts."
      introHeading="Shade, aging laterals, and pond-edge clay on established Timber Lake lots"
      intro={
        <>
          <p>
            Timber Lake sits between Southlake Boulevard on the north and Continental Boulevard on the south, with looping internal streets
            such as Timber Lake Drive and Timber Lake Way. Custom homes from the 1990s and early 2000s sit on roughly third-acre to half-acre
            clay lots under a mature Cross Timbers canopy. That age and layout change irrigation work: original valves and laterals are
            decades old, shade from oaks keeps one side of a lawn wet while the boulevard-facing strip burns, and lots near the north
            entrance pond or the larger south pond shed water toward common greenbelts after a long watering cycle or a Tarrant County storm.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Timber Lake as part of our Southlake work. We are a licensed irrigator
            (LI22462), program controllers for local watering windows, and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a July schedule running into fall. We do not claim a count of jobs on Timber Lake Drive. We do
            walk zones, protect established trees and turf, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original 1990s irrigation often needs head-height resets, valve rebuilds, and nozzle matching after decades of settling and mower hits.',
        'Mature oaks split yards into shade pockets and full-sun street lawns; one runtime cannot serve both without wet spots or brown bands.',
        'Pond-adjacent and greenbelt lots need check valves and shorter cycles so irrigation does not sheet toward community water and trails.',
        'HOA street views on curved lots punish misting, tilted risers, and overspray onto sidewalks along Timber Lake Drive.'
      ]}
      serviceFocus={[
        'Sprinkler repair for buried heads, leaking valves, cracked laterals, and dry strips along drives and curved curb lines.',
        'Drip conversion at foundation beds, tree rings, and courtyard plantings so spray stops soaking mulch, siding, and trunks.',
        'Controller programming and cycle-and-soak schedules for Southlake clay and seasonal Tarrant watering windows.',
        'Drainage planning for low pads, patio pooling, and runoff that follows grade toward the north or south ponds after storms.',
        'Outdoor lighting repair and additions that keep entries, oaks, and walkways visible without changing HOA character.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so clay can absorb water instead of sending it to pond edges, greenbelt trails, or Continental curb inlets.',
        'Walk zones after mowing. Settling heads on 1990s lots tilt quickly and stripe the front lawn along winding streets.',
        'Keep spray off pond banks, sidewalks, and neighboring lots; HOA appearance standards show those misses immediately.',
        'Drop summer runtimes when nights cool. Southlake watering guidance changes through the year, and Water is Awesome publishes weekly ET-based advice.',
        'Inspect valve boxes before peak heat. Slow leaks hide under mulch and pine straw long before turf shows stress.'
      ]}
      trustCards={[
        {
          title: 'HOA curb-appeal compliance',
          description:
            'Timber Lake’s association watches landscape appearance along the internal loops. We match head types, straighten risers, and cut overspray so street views stay even without unauthorized layout changes.'
        },
        {
          title: 'Water efficiency under Tarrant rules',
          description:
            'Southlake sits in Tarrant County. We set controllers for local watering windows, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not running like it is still August in October.'
        },
        {
          title: 'Aging systems under a mature canopy',
          description:
            'Homes built in the 1990s often still run original spray layouts under trees that have doubled in size. We rebalance shade versus sun zones and repair laterals instead of adding runtime that floods the oak drip line.'
        },
        {
          title: 'Pond-edge drainage and foundation drip',
          description:
            'Lots near the north entrance pond or the south fishing pond need check valves and, after storms, a plan for patio lows. Foundation drip keeps water at plant roots instead of against brick and slabs.'
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
          : fortWorthReview
            ? {
                reviewer: fortWorthReview.name,
                location: 'Fort Worth, TX',
                date: fortWorthReview.time,
                quote: fortWorthReview.content,
                stars: fortWorthReview.stars
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
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Timber Lake street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work at a low patio on a Texas Best Sprinklers project',
          caption: 'French drain at a low patio — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/turf/3245.webp',
          alt: 'Turf and irrigation work on a Texas Best Sprinklers project',
          caption: 'Turf recovery after coverage repair — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Timber Lake',
        title: 'A 1990s spray layout fighting shade, heat, and a wet patio corner',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Southlake / nearby DFW service — not a named Timber Lake street.',
        body: 'A common call on established Southlake lots looks like this: the sunny strip along the street browns out, turf under oaks stays dark and soft, and a patio corner holds water after storms. Original heads sit too low after decades of topdressing. Clay sheds a long watering cycle before roots drink, especially on grades that fall toward a neighborhood pond or greenbelt. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and split bed watering onto drip where spray was hitting brick and mulch. Controller runtimes move to cycle-and-soak windows that fit local watering advice. If the low pad is irrigation plus downspout water, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Timber Lake clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Timber Lake lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward ponds, trails, and curb inlets on Southlake Boulevard or Continental.'
        },
        {
          title: 'Heat, ET, and Timber Lake controller schedules',
          description:
            'Southlake summers push evapotranspiration hard. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Timber Lake systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'HOA head and nozzle appearance in Timber Lake',
          description:
            'Winding street views and pond lots show tilted risers, misting, and overspray quickly. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional for association standards.'
        },
        {
          title: 'Shade versus sun, plus pond-edge drainage on Timber Lake lots',
          description:
            'Oaks and greenbelts create shade pockets next to open turf. Lots that fall toward the north or south ponds also need check valves and, where water stands after storms, a drainage plan that respects existing landscape character.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Timber Lake site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with HOA appearance in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Timber Lake?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading, visible piping, or pond-adjacent common-area edges, and lighting that alters the street view, may need Timber Lake HOA architectural review and, for some drainage work, City of Southlake guidance. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Timber Lake clay, shade, and pond-edge lots?',
          answer:
            'Most Timber Lake yards need cycle-and-soak on turf, separate runtimes for shade versus full sun, and drip at foundation beds. Pond-edge turf should not be watered with long single cycles that sheet downhill. We set programs around Southlake / Tarrant watering windows and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and pond-side grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Timber Lake?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'We program start times and day patterns that fit current Southlake watering expectations, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest city or supplier notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Carillon',
          description: 'Gated Southlake irrigation, drip, and drainage support around community lakes and mature trees.',
          link: '/southlake/carillon'
        },
        {
          name: 'Coventry Manor',
          description: 'Irrigation and drainage support for nearby Southlake homes with HOA landscape standards.',
          link: '/southlake'
        },
        {
          name: 'Southlake Meadows',
          description: 'Controller tuning, drip upgrades, and drainage planning across Southlake.',
          link: '/southlake'
        },
        {
          name: 'Kirkwood Hollow',
          description: 'Seasonal sprinkler service and clay-soil watering help for Southlake neighborhoods.',
          link: '/southlake'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established 1990s Timber Lake lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed conversions so spray stops soaking mulch, trunks, and brick under mature canopy.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward ponds and greenbelt trails.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Koalaty Park',
          url: 'https://www.experiencesouthlaketexas.com/694/Neighborhood-Parks',
          description:
            'A city neighborhood park at 1725 West Continental Boulevard, on Timber Lake’s south edge. Useful context for how nearby lots shed water toward Continental after storms.'
        },
        {
          name: 'Bicentennial Park',
          url: 'https://www.experiencesouthlaketexas.com/693/Bicentennial-Park',
          description:
            'Southlake’s large park at 450 West Southlake Boulevard, just north of the Timber Lake entrance, with fields, trails, pickleball, and tennis that families use throughout the week.'
        },
        {
          name: 'Southlake Town Square',
          url: 'https://www.southlaketownsquare.com/',
          description:
            'The city’s main square for errands, dining, and events — a short trip from Timber Lake Drive and a reminder that front-yard appearance is part of everyday Southlake living.'
        },
        {
          name: 'Rockenbaugh Elementary School',
          url: 'https://res.southlakecarroll.edu/',
          description:
            'A Carroll ISD campus on Byron Nelson Parkway that many Timber Lake families use. School-year traffic and street-view lawns make overspray and dry strips more noticeable.'
        },
        {
          name: 'Southlake Parks & Recreation',
          url: 'https://www.experiencesouthlaketexas.com/148/Parks-Recreation',
          description:
            'City parks, trails, and recreation listings, including neighborhood parks and athletic fields residents use alongside Timber Lake’s own pool, courts, and pond trails.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Timber Lake is tied to the{' '}
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
            — including{' '}
            <a
              href="https://res.southlakecarroll.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Rockenbaugh Elementary
            </a>
            — and parks listed by{' '}
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
            Outdoor watering here follows Tarrant County supply reality. Check weekly advice from{' '}
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
            , and city notices on the{' '}
            <a
              href="https://www.cityofsouthlake.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Southlake website
            </a>
            . Koalaty Park on Continental and Bicentennial Park across Southlake Boulevard sit next to the subdivision — city parks, not a
            reason to ignore lot-level irrigation, drip at foundations, or drainage after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Timber Lake?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
