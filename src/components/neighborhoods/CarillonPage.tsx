import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function CarillonPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Southlake"
      citySlug="southlake"
      neighborhoodName="Carillon"
      canonicalUrl="https://sprinkleranddrains.com/southlake/carillon"
      pageTitle="Carillon Sprinkler Repair & Drainage in Southlake, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Carillon in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Carillon Sprinkler Repair & Drainage"
      heroDescription="Gated Carillon lots mix mature trees, HOA lawn standards, and lake-edge grades. We diagnose leaks, rebalance spray and drip, and plan drainage that keeps water in clay soil instead of running toward ponds, paths, and slabs."
      introHeading="Keeping turf and beds even around Carillon lakes, shade, and clay"
      intro={
        <>
          <p>
            Carillon is a gated Southlake neighborhood organized around private lakes, walking paths, and internal green space such as
            Village Park North and Village Park South. Custom homes sit on clay lots with mature canopy, so one side of a lawn can stay
            soggy in oak shade while the street view bakes in full sun. Lake-adjacent grades and HOA curb-appeal rules make irrigation
            different here than on a typical Mid-Cities rectangle: runoff shows at the water&apos;s edge, misting heads show on the street,
            and foundation beds need drip instead of spray.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Carillon as part of our Southlake work. We are a licensed irrigator
            (LI22462), program controllers for Tarrant County heat and local watering windows, and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice rather than leaving an August schedule running into fall. We do not claim a count of jobs on a specific
            Carillon street. We do diagnose zone by zone, protect established landscaping, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Lake-edge and park-adjacent lots need check valves, matched nozzles, and drainage so irrigation does not sheet toward community water and paths.',
        'Mature trees split yards into shade and full-sun turf; runtimes and nozzle types have to differ by zone or one side stays wet while the front strip dies.',
        'HOA street views punish overspray, tilted heads, and brown bands along sidewalks after mowing season.',
        'Foundation beds and specimen plantings on custom homes perform better on filtered drip than on high-pressure spray.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along drives and lake-facing lawns.',
        'Drip conversion at foundation beds, trees, and courtyard plantings so mulch and walls stop getting soaked.',
        'Controller programming and cycle-and-soak schedules for Southlake clay and seasonal watering rules.',
        'Drainage planning for low pads, patio pooling, and runoff that follows grade toward neighborhood lakes after storms.',
        'Outdoor lighting repair and additions that keep entries, oaks, and walkways visible without changing HOA character.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so clay can absorb water instead of sending it to Village Park paths or lake edges.',
        'Walk zones after mowing. Settling heads on established lots tilt quickly and stripe the front lawn.',
        'Keep spray off lake bulkheads, sidewalks, and neighboring lots; HOA appearance standards show those misses immediately.',
        'Drop summer runtimes when nights cool. Southlake watering guidance changes through the year, and Water is Awesome publishes weekly ET-based advice.',
        'Inspect valve boxes before peak heat. Slow leaks hide under mulch long before turf shows stress.'
      ]}
      trustCards={[
        {
          title: 'HOA curb-appeal compliance',
          description:
            'Carillon’s association watches landscape appearance. We match head types, straighten risers, and cut overspray so the street and lake views stay even without unauthorized layout changes.'
        },
        {
          title: 'Water efficiency under Tarrant rules',
          description:
            'Southlake sits in Tarrant County. We set controllers for local watering windows, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not running like it is still August in October.'
        },
        {
          title: 'Lake-edge clay and mixed shade',
          description:
            'Lots near community lakes and internal parks combine expansive clay, slope, and oak canopy. Long single cycles create runoff; shade pockets stay wet. We rebalance zones instead of just adding runtime.'
        },
        {
          title: 'Drip, smart control, and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and smart controllers reduce waste on custom lots. After heavy rain we look at patio lows and downspout discharge so irrigation is not fighting standing water.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Carillon street photo'
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
        heading: 'Featured work for homes like these in Carillon',
        title: 'Uneven turf, a wet pad, and a controller still on a summer program',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Southlake / nearby DFW service — not a named Carillon street.',
        body: 'A common call on gated Southlake lots looks like this: one sunny front strip browns out, shade under oaks stays dark and soft, and a patio corner holds water after storms. Clay sheds a long watering cycle before roots drink. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and split bed watering onto drip where spray was hitting walls and mulch. Controller runtimes move to cycle-and-soak windows that fit local watering advice. If the low pad is irrigation plus downspout water, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Carillon clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Carillon lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward lakes, trails, and curb lines.'
        },
        {
          title: 'Heat, ET, and Carillon controller schedules',
          description:
            'Southlake summers push evapotranspiration hard. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Carillon systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'HOA head and nozzle appearance in Carillon',
          description:
            'Gated street views and lake lots show tilted risers, misting, and overspray quickly. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional for association standards.'
        },
        {
          title: 'Shade versus sun, plus lake-edge drainage on Carillon lots',
          description:
            'Oaks and internal parks create shade pockets next to open turf. Lots that fall toward community lakes also need check valves and, where water stands after storms, a drainage plan that respects existing landscape character.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Carillon site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with HOA appearance in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Carillon?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading, visible piping, or lake-adjacent common-area edges, and lighting that alters the street view, may need Carillon HOA architectural review and, for some drainage work, City of Southlake guidance. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Carillon clay, shade, and lake-edge lots?',
          answer:
            'Most Carillon yards need cycle-and-soak on turf, separate runtimes for shade versus full sun, and drip at foundation beds. Lake-edge turf should not be watered with long single cycles that sheet downhill. We set programs around Southlake / Tarrant watering windows and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and lake-side grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Carillon?',
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
          name: 'Coventry Manor',
          description: 'Irrigation and drainage support for nearby Southlake homes with HOA landscape standards.',
          link: '/southlake'
        },
        {
          name: 'Timber Lake',
          description: 'Sprinkler repair, drip, and pond-edge drainage for 1990s lots between Southlake Boulevard and Continental.',
          link: '/southlake/timber-lake'
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
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established Carillon lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward lakes and paths.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Outdoor Lighting',
          description: 'Walkway, tree, and entry lighting that supports gated-community curb appeal after dark.',
          link: '/services/outdoor-lighting'
        }
      ]}
      attractions={[
        {
          name: 'Carillon Parc',
          url: 'https://carillonparc.com/',
          description:
            'A walkable mixed-use district next to the gated neighborhood, with park space and water features that residents use without treating it as a substitute for lot-level drainage.'
        },
        {
          name: 'Southlake Town Square',
          url: 'https://www.southlaketownsquare.com/',
          description:
            'The city’s main square for errands, dining, and events — a short trip from Carillon and a reminder that front-yard appearance is part of everyday Southlake living.'
        },
        {
          name: 'Bob Jones Nature Center & Preserve',
          url: 'https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve',
          description:
            'City-managed Cross Timbers trails and programs on Bob Jones Road. Useful context for how local soils, trees, and stormwater behave beyond the subdivision.'
        },
        {
          name: 'Southlake Public Library',
          url: 'https://www.cityofsouthlake.com/4317/Library',
          description:
            'The library at Town Square is a regular stop for Carillon families and a straightforward landmark when describing the neighborhood’s place in the city.'
        },
        {
          name: 'Southlake Parks & Recreation',
          url: 'https://www.experiencesouthlaketexas.com/148/Parks-Recreation',
          description:
            'City parks, trails, and recreation listings, including athletic fields at Bob Jones Park and neighborhood green space residents use throughout the week.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Carillon is tied to the{' '}
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
            , and parks listed by{' '}
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
            . Carillon Parc’s public park and plaza at{' '}
            <a
              href="https://carillonparc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              carillonparc.com
            </a>{' '}
            sit beside the gated streets — a walkable district, not a reason to ignore lot-level irrigation, drip at foundations, or drainage after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Carillon?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
