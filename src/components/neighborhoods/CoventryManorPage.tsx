import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function CoventryManorPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Southlake"
      citySlug="southlake"
      neighborhoodName="Coventry Manor"
      canonicalUrl="https://sprinkleranddrains.com/southlake/coventry-manor"
      pageTitle="Coventry Manor Sprinkler Repair & Drainage in Southlake, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Coventry Manor in Southlake, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Coventry Manor Sprinkler Repair & Drainage"
      heroDescription="Late-1990s custom lots on Turnberry Lane and Lands End Court run half-acre to near-acre turf on expansive clay. Original sprinkler layouts were designed for full sun; mature canopy, HOA curb standards, and Southlake watering windows now require zone-by-zone repair, drip at foundations, and drainage that moves water off pads instead of leaving it in the lawn."
      introHeading="When a 1990s layout meets today’s shade, clay, and watering rules"
      intro={
        <>
          <p>
            Coventry Manor is an established Southlake subdivision of custom homes built mainly in the late 1990s along
            Turnberry Lane and Lands End Court. Lots commonly run 25,000–44,000 square feet — enough turf and bed area that
            a single long watering cycle rarely finishes evenly from the street to the back fence. The Coventry Manor
            Homeowners Association enforces architectural and landscape appearance standards, so tilted heads, misting
            nozzles, and brown bands along the sidewalk show up as HOA issues, not just dry grass. Unlike lake-edge gated
            streets nearby, these lots are mostly flat or gently sloped. Clay holds water against patios and slabs after
            storms instead of sheeting toward a community pond.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Coventry Manor as part of our Southlake work. We are a
            licensed irrigator (LI22462). Controllers get programmed for Tarrant County heat and the city’s twice-weekly
            watering windows, then adjusted against{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly ET advice rather than leaving an August program running into October. We do not claim a count of jobs
            on Turnberry or Lands End. We do walk zones, check pressure on long laterals, convert foundation spray to drip
            where walls and mulch are getting soaked, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original late-1990s valves, heads, and controllers are often still in the ground; parts fail in heat after 25+ summers of clay movement.',
        'Half-acre and larger lots lose pressure at the far end of a zone, so street turf floods while the back strip browns.',
        'Oaks and elms planted at construction now shade yards that were designed as full-sun spray — one runtime cannot serve both.',
        'Flat clay pads pool at patios and garage aprons after storms; more irrigation will not dry a low grade.'
      ]}
      serviceFocus={[
        'Sprinkler repair for stuck valves, leaking manifolds, buried heads, and dry bands on long Turnberry and Lands End lawns.',
        'Pressure regulation and nozzle matching so large lots stop misting at the first head and starving the last.',
        'Drip conversion at foundation beds, trees, and courtyard plantings on custom homes.',
        'Controller replacement and cycle-and-soak programming for Southlake clay and even/odd watering days.',
        'Drainage planning for patio pooling, downspout discharge, and gentle grades that hold water against the slab.'
      ]}
      localTips={[
        'Split long turf zones. If the last head on a 1990s lateral barely pops, the first heads are already wasting water into the street.',
        'Walk the yard after mowing. Settling heads on established clay lots tilt quickly and stripe the HOA street view.',
        'Use shorter cycle-and-soak windows so clay can absorb water instead of leaving puddles on the patio after a single long cycle.',
        'Drop summer runtimes when nights cool. Southlake watering days stay twice weekly, but Water is Awesome weekly advice changes through the year.',
        'Inspect valve boxes before peak heat. Slow leaks hide under mulch on large lots long before the front lawn shows stress.'
      ]}
      trustCards={[
        {
          title: 'HOA curb-appeal compliance',
          description:
            'Coventry Manor’s association watches landscape appearance. We match head types, straighten risers, and cut overspray so the Turnberry and Lands End street views stay even without unauthorized layout changes.'
        },
        {
          title: 'Water efficiency under Southlake rules',
          description:
            'The city uses even/odd watering days and overnight automatic-system hours. We set controllers for those windows, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not treating October like August.'
        },
        {
          title: 'Large-lot clay and aging laterals',
          description:
            'Half-acre turf on expansive clay plus 25-year-old pipe is a different problem than a new Mid-Cities rectangle. Long single cycles create runoff; far-end heads starve. We rebalance zones instead of only adding runtime.'
        },
        {
          title: 'Drip, smart control, and pad drainage',
          description:
            'Foundation drip and pressure-regulated heads reduce waste on custom lots. After heavy rain we look at patio lows and downspout discharge so irrigation is not fighting standing water on a flat clay pad.'
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
          src: '/assets/images/optimized/turf/3245.webp',
          alt: 'Turf and irrigation work on a North Texas residential lawn',
          caption: 'Zone repair and turf recovery after nozzle matching — nearby DFW, not a claimed Coventry Manor street photo'
        },
        {
          src: '/assets/images/optimized/leveling/3409.webp',
          alt: 'Land leveling work that supports drainage away from a Texas home',
          caption: 'Sod and land leveling to reduce patio pooling — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/lighting/3417.webp',
          alt: 'Outdoor lighting on a Southlake-area home from a Texas Best Sprinklers project',
          caption: 'Entry and tree lighting on a custom North Texas home — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Coventry Manor',
        title: 'A 1990s controller, a starving back lawn, and a patio that stayed wet',
        image: '/assets/images/optimized/leveling/3412.webp',
        imageAlt: 'Yard grading and drainage-related work on a North Texas residential lot',
        locationNote: 'Composite of typical Southlake / nearby DFW service — not a named Turnberry Lane or Lands End Court address.',
        body: 'A common call on established Coventry Manor-scale lots looks like this: the original late-1990s system still runs one long cycle on every turf zone. Front heads mist into the street, the back third of the lawn stays thin, and a patio corner holds water after storms because clay on a nearly flat pad does not drain itself. We map zones, measure pressure at the first and last head, match nozzles so throw and precipitation line up, and split oversized zones where one valve is trying to cover too much acreage. Foundation beds move onto filtered drip where spray was hitting brick and mulch. Controller runtimes become cycle-and-soak windows that fit Southlake watering days and Water is Awesome weekly advice. If the wet pad is irrigation plus downspout water, we talk through grading and drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Coventry Manor clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Turnberry and Lands End lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sitting on turf or sliding toward the garage apron.'
        },
        {
          title: 'Heat, ET, and Coventry Manor controller schedules',
          description:
            'Southlake summers push evapotranspiration hard on half-acre lawns. We set seasonal programs around even/odd watering days and point homeowners to Water is Awesome weekly guidance so Coventry Manor systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'HOA head and nozzle appearance in Coventry Manor',
          description:
            'Association street views show tilted risers, misting, and overspray quickly. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional without changing the original layout without review.'
        },
        {
          title: 'Shade versus sun, plus large-lot pressure on Coventry Manor yards',
          description:
            'Trees planted at construction now split yards into shade pockets and open turf. Long laterals on acre-class lots also drop pressure at the far head. Separate runtimes and, where needed, extra valves beat simply raising the controller minutes.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Coventry Manor site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis across long laterals',
        'Repair and upgrade recommendations with HOA appearance in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Coventry Manor?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may need Coventry Manor HOA architectural review and, for some drainage work, City of Southlake guidance. New irrigation systems in Southlake typically require a city permit; ordinary head and short-pipe repairs usually do not. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Coventry Manor clay, shade, and large lots?',
          answer:
            'Most Coventry Manor yards need cycle-and-soak on turf, separate runtimes for shade versus full sun, and drip at foundation beds. Half-acre and larger lawns should not be watered with one long cycle that mists at the first head and starves the last. We set programs around Southlake even/odd watering days, overnight automatic-system hours, and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing 1990s pipe condition, and lot size change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Coventry Manor?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'Southlake generally waters twice weekly by even/odd address, with automatic systems limited to overnight hours on those days. We program start times and day patterns that fit current city expectations, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest city notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Carillon',
          description: 'Gated Southlake lots around community lakes — irrigation, drip, and drainage for mixed shade and lake-edge grades.',
          link: '/southlake/carillon'
        },
        {
          name: 'Timber Lake',
          description: 'Sprinkler repair and watering strategies for Southlake properties near water features and mature trees.',
          link: '/southlake'
        },
        {
          name: 'Southlake Meadows',
          description: 'Controller tuning, drip upgrades, and drainage planning on flatter Southlake clay lots.',
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
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established Coventry Manor lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed conversions so spray stops soaking brick, mulch, and courtyard walls on custom lots.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that sits against slabs on gently sloped lots.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Bicentennial Park',
          url: 'https://www.experiencesouthlaketexas.com/693/Bicentennial-Park',
          description:
            'Southlake’s large community park on West Southlake Boulevard, with fields, pickleball, tennis, trails, and The Marq — a regular outing for Coventry Manor families that also shows how the city manages turf and drainage at civic scale.'
        },
        {
          name: 'Bob Jones Park',
          url: 'https://www.experiencesouthlaketexas.com/695/Bob-Jones-Park',
          description:
            'Athletic fields and green space on North White Chapel Boulevard. Useful context for how local clay, heat, and irrigation behave on large turf areas a short drive from Turnberry Lane.'
        },
        {
          name: 'Southlake Town Square',
          url: 'https://www.southlaketownsquare.com/',
          description:
            'The city’s main square for errands, dining, and events. Front-yard appearance on Coventry Manor streets is part of the same everyday Southlake living that Town Square represents.'
        },
        {
          name: 'Southlake Public Library',
          url: 'https://www.cityofsouthlake.com/4317/Library',
          description:
            'The library at Town Square is a straightforward landmark when describing where Coventry Manor sits in the city’s daily circuit of school, parks, and errands.'
        },
        {
          name: 'Bob Jones Nature Center & Preserve',
          url: 'https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve',
          description:
            'City-managed Cross Timbers trails and programs. Helpful for understanding local soils, trees, and stormwater beyond the subdivision’s half-acre lawns.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Coventry Manor is tied to the{' '}
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
            . Families use{' '}
            <a
              href="https://www.experiencesouthlaketexas.com/693/Bicentennial-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bicentennial Park
            </a>
            , the{' '}
            <a
              href="https://www.cityofsouthlake.com/4317/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Southlake Public Library
            </a>
            , and{' '}
            <a
              href="https://www.southlaketownsquare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Southlake Town Square
            </a>{' '}
            for sports, errands, and events — which is why overspray onto walks and uneven front turf gets noticed quickly.
          </p>
          <p>
            Outdoor watering here follows Tarrant County supply reality and city rules. Check weekly advice from{' '}
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
            . Turnberry Lane and Lands End Court are private lots, not a reason to ignore 1990s irrigation condition, drip at foundations, or drainage after storms on clay.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Coventry Manor?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
