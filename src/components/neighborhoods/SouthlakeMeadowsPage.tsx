import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function SouthlakeMeadowsPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Southlake"
      citySlug="southlake"
      neighborhoodName="Southlake Meadows"
      canonicalUrl="https://sprinkleranddrains.com/southlake/southlake-meadows"
      pageTitle="Southlake Meadows Sprinkler Repair & Drainage in Southlake, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Southlake Meadows in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Southlake Meadows Sprinkler Repair & Drainage"
      heroDescription="Newer Toll Brothers lots on Charleston Drive, Jamestown Lane, and Palmetto Way sit on flat to gently sloped Tarrant County clay. Builder irrigation still needs seasonal programming, HOA-clean head alignment, and drainage so patio water does not pool against slabs."
      introHeading="Newer luxury yards still fight clay, HOA sidewalks, and builder-default watering"
      intro={
        <>
          <p>
            Southlake Meadows is a master-planned community of custom homes built mainly from 2017 into the early 2020s, reached from West Dove
            Road and Sam School Road via Palmetto Way. Streets such as Charleston Drive and Jamestown Lane hold half-acre to roughly
            three-quarter-acre lots, some backing to HOA trails and a greenbelt rather than a large community lake. That layout is different from
            older Southlake subdivisions: landscapes are still maturing, original irrigation is often still on a builder program, and clay on
            flatter pads holds water in patio corners instead of shedding toward a pond edge. HOA sidewalks, curbs, and trail easements make
            overspray and brown strips along the street view obvious.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Southlake Meadows as part of our Southlake work. We are a licensed irrigator
            (LI22462). We program controllers for Tarrant County heat and the city&apos;s twice-weekly watering windows, and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving a move-in schedule running into fall. We do not claim a count of jobs on Charleston Drive
            or Jamestown Lane. We do diagnose zone by zone, protect young trees and foundation beds, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Builder systems on 2017–2022 lots often still use one long turf cycle. Clay rejects that first pass, then water sits at the patio or sheets to the curb.',
        'Trail- and greenbelt-backing yards need check valves and honest drainage so irrigation is not adding to standing water on HOA paths.',
        'HOA street views punish misting, tilted heads, and dry bands along sidewalks after mowing season on Palmetto Way and interior cul-de-sacs.',
        'Foundation beds and courtyard plantings on these custom homes perform better on filtered drip than on high-pressure spray hitting stone and mulch.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along drives and sidewalks on newer lots.',
        'Drip conversion at foundation beds, trees, and courtyard plantings so walls and mulch stop getting soaked.',
        'Controller programming and cycle-and-soak schedules for Southlake clay and city watering days.',
        'Drainage planning for low pads, patio pooling, and runoff that follows grade toward trail easements after storms.',
        'Outdoor lighting repair and additions that keep entries, young oaks, and walkways visible without changing HOA character.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so clay can absorb water instead of sending it to Palmetto Way curbs or greenbelt trails.',
        'Walk zones after mowing. Settling heads on recently finished lots tilt quickly and stripe the front lawn.',
        'Keep spray off sidewalks, neighbor lots, and HOA trail edges; association appearance standards show those misses immediately.',
        'Drop summer runtimes when nights cool. Southlake watering guidance changes through the year, and Water is Awesome publishes weekly ET-based advice.',
        'If the controller has never been touched since closing, it is probably still on a generic builder program — not a Meadows clay schedule.'
      ]}
      trustCards={[
        {
          title: 'HOA curb-appeal compliance',
          description:
            'Southlake Meadows’ association watches landscape appearance along sidewalks and trail easements. We match head types, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Water efficiency under Tarrant rules',
          description:
            'Southlake sits in Tarrant County with a twice-weekly automatic watering schedule. We set controllers for local watering windows, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not running like it is still August in October.'
        },
        {
          title: 'Flat clay and builder-default runtimes',
          description:
            'These lots are flatter than lake-edge Southlake streets. Long single cycles create pooling at patios and slabs. We rebalance zones and switch to cycle-and-soak instead of adding more runtime to a program that was never tuned for this soil.'
        },
        {
          title: 'Drip, smart control, and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and smart controllers reduce waste on half-acre-plus lots. After heavy rain we look at patio lows and downspout discharge so irrigation is not fighting standing water on the same pad.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Southlake Meadows street photo'
        },
        {
          src: '/assets/images/optimized/leveling/3409.webp',
          alt: 'Sod and land leveling work on a Texas Best Sprinklers project',
          caption: 'Sod and land leveling after low spots held water — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work at a low patio on a Texas Best Sprinklers project',
          caption: 'French drain at a low patio — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Southlake Meadows',
        title: 'A builder controller, a dry front strip, and water sitting at the covered patio',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Southlake / nearby DFW service — not a named Charleston Drive or Jamestown Lane address.',
        body: 'A common call on newer Southlake lots looks like this: the sunny front strip along the sidewalk browns between watering days, beds next to the house stay dark and soggy, and a patio corner holds water after storms even though the sprinklers “worked at closing.” Clay sheds a long builder cycle before roots drink. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and split bed watering onto drip where spray was hitting stone and mulch. Controller runtimes move to cycle-and-soak windows that fit Southlake’s twice-weekly schedule and Water is Awesome weekly advice. If the low pad is irrigation plus downspout water, we talk through drainage and leveling options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Southlake Meadows clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these flatter lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward curbs, trail easements, and patio slabs.'
        },
        {
          title: 'Heat, ET, and Southlake Meadows controller schedules',
          description:
            'Southlake summers push evapotranspiration hard, and many Meadows controllers still carry a generic builder program. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'HOA head and nozzle appearance in Southlake Meadows',
          description:
            'Sidewalks, curbs, and greenbelt-facing lots show tilted risers, misting, and overspray quickly. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional for association standards.'
        },
        {
          title: 'Young canopy versus full-sun turf on Southlake Meadows lots',
          description:
            'Trees planted with these 2017–2020s homes are still filling in, so many front lawns stay in full sun while side yards pick up shade from the house and neighbors. Runtimes and nozzle types have to differ by zone, and foundation beds belong on drip rather than spray.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Southlake Meadows site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with HOA appearance in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Southlake Meadows?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. New irrigation in Southlake requires a city permit through the online permitting portal; ordinary head and pipe repairs typically do not. Drainage that changes grading, visible piping, or trail-adjacent common-area edges, and lighting that alters the street view, may need Southlake Meadows HOA architectural review and, for some drainage work, City of Southlake guidance. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Southlake Meadows clay, young trees, and large lots?',
          answer:
            'Most Meadows yards need cycle-and-soak on turf, separate runtimes for full-sun fronts versus shadier side yards, and drip at foundation beds. Automatic watering in Southlake is limited to twice per week in the evening-to-morning window on the city’s Water Smart, Outside schedule (even addresses Wednesday and Saturday; odd addresses Thursday and Sunday — always confirm the current city notice). We then fine-tune after watching how clay absorbs on your lot and how young trees change shade through the season.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and patio grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Southlake Meadows?',
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
          description: 'Lake-edge irrigation, drip at foundation beds, and drainage for gated Southlake lots with mature canopy.',
          link: '/southlake/carillon'
        },
        {
          name: 'Coventry Manor',
          description: 'Irrigation and drainage support for nearby Southlake homes with HOA landscape standards.',
          link: '/southlake'
        },
        {
          name: 'Timber Lake',
          description: 'Sprinkler repair and lake-adjacent watering strategies for Southlake properties.',
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
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on builder systems that still need a Meadows tune.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and courtyard drip so spray stops soaking stone, mulch, and young tree trunks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward trail easements and slabs.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Southlake Town Square',
          url: 'https://www.southlaketownsquare.com/',
          description:
            'A short trip south of West Dove Road for errands, dining, and events — which is why overspray onto sidewalks and uneven front turf gets noticed on the drive home.'
        },
        {
          name: 'Bicentennial Park',
          url: 'https://www.experiencesouthlaketexas.com/693/Bicentennial-Park',
          description:
            'The city’s largest park west of White Chapel, with trails, athletic fields, pickleball, and The Marq. Useful context for how Southlake handles turf, drainage, and public landscape water.'
        },
        {
          name: 'Bob Jones Park',
          url: 'https://www.experiencesouthlaketexas.com/695/Bob-Jones-Park',
          description:
            'Athletic fields and open space on Bob Jones Road. Families from this side of Southlake use it through the week, and it is a reminder that clay turf needs scheduled watering, not constant spray.'
        },
        {
          name: 'Southlake Public Library',
          url: 'https://www.cityofsouthlake.com/4317/Library',
          description:
            'The library at Town Square is a regular stop for Meadows families and a straightforward landmark when describing the neighborhood’s place in the city.'
        },
        {
          name: 'Carroll Independent School District',
          url: 'https://www.southlakecarroll.edu/',
          description:
            'Southlake Meadows is served by Carroll ISD, with Walnut Grove Elementary and Durham Intermediate among the nearby campuses. School-year traffic on White Chapel is part of daily life here.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Southlake Meadows is tied to the{' '}
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
            </a>
            , plus trails at{' '}
            <a
              href="https://www.experiencesouthlaketexas.com/693/Bicentennial-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bicentennial Park
            </a>
            , which is why overspray onto walks and uneven front turf gets noticed quickly.
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
            , the city’s{' '}
            <a
              href="https://www.cityofsouthlake.com/2776/Water-Smart-Outside"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Smart, Outside
            </a>{' '}
            schedule, regional context from the{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>
            , and stormwater notes on{' '}
            <a
              href="https://www.cityofsouthlake.com/4368/Stormwater-and-Drainage-in-Southlake"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Stormwater and Drainage in Southlake
            </a>
            . Community trails along Jamestown Lane lots are HOA amenities, not a reason to ignore lot-level irrigation, drip at foundations, or drainage after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Southlake Meadows?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
