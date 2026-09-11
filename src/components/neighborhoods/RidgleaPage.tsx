import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function RidgleaPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Fort Worth"
      citySlug="fort-worth"
      neighborhoodName="Ridglea"
      canonicalUrl="https://sprinkleranddrains.com/fort-worth/ridglea"
      pageTitle="Ridglea Sprinkler Repair & Drainage in Fort Worth, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Ridglea in Fort Worth, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Ridglea Sprinkler Repair & Drainage"
      heroDescription="Ridglea’s west Fort Worth lots sit on rolling clay hills between Camp Bowie Boulevard and West Vickery. Original post-war irrigation often still waters like a flat lawn. We diagnose leaks, add check valves on downhill heads, rebalance shade versus sun, and plan drainage so stormwater stays on the lot instead of racing toward a neighbor or the curb."
      introHeading="A long spray cycle on a Ridglea slope never stays where you aimed it"
      intro={
        <>
          <p>
            Greater Ridglea sits about six miles west of downtown Fort Worth in ZIP 76116, along Camp Bowie Boulevard,
            I-30, and Southwest Boulevard. The Ridglea Hills Neighborhood Association maps its core between Camp Bowie
            on the north and West Vickery Boulevard on the south — Ridglea West and the Ridglea Hills Addition sit in
            the same west-side cluster. Streets such as Clayton Road, Geneva Lane, Curzon Avenue, Edgehill Road, Rowan
            Drive, Stonedale Road, and Cumberland Road wind over the grade instead of sitting on a level Mid-Cities pad.
            Post-war brick homes still carry first-generation sprinkler layouts: too few zones, mixed replacement heads,
            and a controller that dumps a single long cycle onto clay that cannot drink it before gravity takes over.
            That is a different problem than a courtyard downtown, a bungalow parkway in Arlington Heights, or a
            midcentury ranch on a flatter Wedgwood block.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Ridglea as part of our Fort Worth work. We are a
            licensed irrigator (LI22462). We program controllers for the city’s twice-a-week spray schedule — even
            addresses Wednesday and Saturday, odd addresses Thursday and Sunday, no spray 10 a.m. to 6 p.m. — and we
            follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving an August runtime running into October. Ridglea Hills NA is a
            voluntary civic association, not a gated HOA lawn. We do not claim a count of jobs on Clayton Road or
            Stonedale Road. We do walk zones, check downhill drainage after heads, protect established trees, and quote
            through{' '}
            <a
              href="/contact"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              /contact
            </a>
            . This page is west Fort Worth Ridglea, not Ridglea Country Club Estates in Benbrook.
          </p>
        </>
      }
      highlights={[
        'Downhill heads on Ridglea lots drain the lateral after a cycle unless they have check valves, so the low corner stays soggy while the uphill strip browns.',
        'Original post-war systems often have too few zones for oak shade on Clayton and Curzon versus full-sun street strips facing Camp Bowie heat.',
        'Clay on a slope sheds a long first cycle toward Vickery, curb inlets, and neighboring yards before roots can use it.',
        'Foundation beds on older brick slabs perform better on drip than leftover spray that hits brick, sidewalks, and mulch.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Camp Bowie–facing turf and winding Ridglea streets.',
        'Drip conversion at foundation beds and tree rings so spray stops hitting brick, trunks, and sloping side yards.',
        'Controller programming and cycle-and-soak for Fort Worth even/odd watering days and the 10 a.m.–6 p.m. spray ban.',
        'Drainage planning for hillside runoff, patio pooling, and water that follows grade toward Vickery or a downhill neighbor after storms.',
        'Outdoor lighting repair and additions for entries, oaks, and walks without treating Ridglea as a new gated subdivision.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Ridglea clay can absorb water instead of sending it down Clayton, Edgehill, or Stonedale toward the curb.',
        'Ask about check valves on downhill heads. Low-side puddles after the zone shuts off are often drainage from the pipe, not extra rain.',
        'Walk zones after mowing. Settling heads on 70-year lots tilt quickly and stripe the front lawn along Camp Bowie–area street views.',
        'Keep spray off walks, drives, and neighboring lots. There is no single gated HOA here, but city runoff rules and neighbors still notice misting at noon.',
        'Drop summer runtimes when nights cool. Fort Worth watering days stay in place year-round, and Water is Awesome still publishes weekly ET-based advice.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without inventing a gated HOA',
          description:
            'Ridglea Hills NA is a voluntary civic group, not a mandatory landscape HOA. Front lawns still face Camp Bowie corridors and winding streets. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Fort Worth watering days and Tarrant supply',
          description:
            'Ridglea sits on City of Fort Worth water. We set controllers for even/odd spray days, the 10 a.m.–6 p.m. ban, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not running like it is still August in October. Drip, handheld, soaker, and bubblers are treated differently than spray.'
        },
        {
          title: 'Rolling clay hills, not a flat Mid-Cities pad',
          description:
            'The neighborhood name is the topography. Expansive clay plus slope means one long cycle sheets downhill. We rebalance zones, add check valves where needed, and split shade versus sun instead of adding runtime.'
        },
        {
          title: 'Drip at slabs and drainage after storms',
          description:
            'Foundation drip keeps water off brick on older Ridglea homes. After heavy rain we look at patio lows, downspout discharge, and the downhill lot line so irrigation is not fighting standing water headed toward Vickery or a neighbor.'
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
                'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased by 30%, and our lawn has never looked better! Professional service from start to finish.',
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
                "As a property manager, I've worked with many irrigation companies. Texas Best Sprinklers is by far the most professional and reliable.",
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
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler system repair on a North Texas residential lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Ridglea street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Yard drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'French drain at a low patio grade — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees from a Texas Best Sprinklers DFW project',
          caption: 'Entry and tree lighting — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Ridglea',
        title: 'The uphill strip stayed brown while the downhill corner stayed wet',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Fort Worth / nearby DFW service — not a named Ridglea street.',
        body: 'A common west Fort Worth hillside call looks like this: the last heads on a long run mist or barely reach the uphill turf, oak shade holds moisture against the slab, and the downhill corner stays dark because leftover water drains out of the heads after the zone shuts off. Clay sheds the first long cycle before roots drink, then leftover water follows slope toward a patio low, a fence line, or the Vickery-side curb. We map zones, check static and operating pressure, match nozzles so throw and precipitation line up, and add check valves where downhill heads are emptying the line. Foundation and tree watering move onto drip where spray was hitting brick and trunks. Controller runtimes split into cycle-and-soak windows that fit Fort Worth watering days and the 10 a.m.–6 p.m. spray ban. If the low pad is irrigation plus downspout water, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Ridglea clay, slope, and cycle-and-soak',
          description:
            'Expansive North Texas clay on Ridglea hills often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward sidewalks, downhill neighbors, and West Vickery curb lines. Check valves matter more here than on a flat Bedford cul-de-sac.'
        },
        {
          title: 'Heat, ET, and Ridglea controller schedules',
          description:
            'West Fort Worth summers push evapotranspiration hard, especially on Camp Bowie–facing turf with less oak cover. We set seasonal programs around even/odd watering days and point homeowners to Water is Awesome weekly guidance so Ridglea systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Head and nozzle appearance on Ridglea street views',
          description:
            'There is no single gated HOA, but Camp Bowie corridors, Curzon Avenue gatherings, and winding street views show tilted risers, misting, and overspray quickly. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional for neighbors and city runoff rules.'
        },
        {
          title: 'Shade versus sun, plus hillside drainage on Ridglea lots',
          description:
            'Oaks on Clayton, Geneva, and Edgehill create shade pockets next to open turf. Lots that fall toward Vickery, Stonedale, or a downhill neighbor also need check valves and, where water stands after storms, a drainage plan that respects existing trees and does not dump onto the next yard. Luther Lake is largely private; public drainage still has to work at the lot line.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Ridglea site assessment and issue mapping, including uphill versus downhill turf',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with slope, check valves, and civic appearance in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Ridglea?',
          answer:
            'Ridglea Hills Neighborhood Association is a voluntary civic group, not a mandatory architectural HOA for every Ridglea West or Hills lot. Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. New irrigation systems in Fort Worth typically require a city permit; ordinary head and pipe repairs usually do not. Drainage that changes grading, visible piping, or lot-line discharge may need City of Fort Worth guidance. We describe the visible scope before work starts so you can check any deed restrictions on your specific block. We do not file association applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Ridglea clay, shade, and hillside lots?',
          answer:
            'Most Ridglea yards need cycle-and-soak on turf, separate runtimes for oak shade versus full sun, drip at foundation beds, and check valves on downhill heads so the low corner does not stay wet after the zone shuts off. We set programs around Fort Worth even/odd watering days, no spray 10 a.m.–6 p.m., and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your slope. Drip, handheld hoses, soaker hoses, and tree bubblers are generally allowed any day under current city rules — confirm the latest notice before changing days yourself.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, slope, access, existing pipe condition, and downhill drainage change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Ridglea?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'Fort Worth generally waters even residential addresses Wednesday and Saturday and odd addresses Thursday and Sunday, with no irrigation-system watering Monday and no spray between 10 a.m. and 6 p.m. Apartments, businesses, and common areas water Tuesday and Friday. We program start times and day patterns that fit current city expectations, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest city or supplier notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Arlington Heights',
          description: 'Sprinkler repair and drainage for established west-side Fort Worth lots nearer downtown along Camp Bowie.',
          link: '/fort-worth'
        },
        {
          name: 'Wedgwood',
          description: 'Irrigation and drainage for southwest Fort Worth midcentury ranch lots south of I-20.',
          link: '/fort-worth'
        },
        {
          name: 'Cultural District',
          description: 'Drip, lighting, and irrigation for mixed-use and nearby residential properties west of downtown.',
          link: '/fort-worth'
        },
        {
          name: 'Fairmount',
          description: 'Irrigation and drainage for historic bungalow lots south of downtown Fort Worth.',
          link: '/fort-worth'
        },
        {
          name: 'Downtown Fort Worth',
          description: 'Courtyard, plaza, and amenity-turf irrigation closer to the city core.',
          link: '/fort-worth'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and check-valve issues on hillside post-war lawns.',
          link: '/fort-worth/sprinkler-repair-services-in-fort-worth-tx'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and tree-ring drip so brick slabs and mature canopy stop getting soaked by high-pressure spray.',
          link: '/fort-worth/drip-irrigation-services-in-fort-worth-tx'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that follows Ridglea grades toward neighbors or Vickery.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Ridglea Hills Park',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/ridglea-hills',
          description:
            'City park at 4589 Stonedale Road (6.1 acres, acquired 1960), next to Ridglea Hills Elementary. Useful context for how nearby grades and school-adjacent turf behave — not a substitute for lot-level drainage on the hillside next door.'
        },
        {
          name: 'The Ridglea Theater',
          url: 'https://theridglea.com/',
          description:
            'Historic venue at 6025 Camp Bowie Boulevard. The boulevard is the north edge of Ridglea Hills and the reason front-yard overspray and uneven turf get noticed on daily errands, not a watering schedule of its own.'
        },
        {
          name: 'Ridglea Library',
          url: 'https://www.fortworthtexas.gov/departments/library/branches/lib-loc-rdg',
          description:
            'Fort Worth Public Library branch at 3628 Bernie Anderson, behind the grocery and along the roundabout toward Ridglea Country Club. A regular neighborhood stop, not a reason to ignore lot-level irrigation.'
        },
        {
          name: 'ZBonz Dog Park',
          url: 'https://www.fortworthtexas.gov/departments/parks/services/dog-parks/zbonz-dog-park',
          description:
            'Ten-acre irrigated dog park at 6950 W. Camp Bowie Boulevard on the former Z. Boaz golf course, with large- and small-dog sections. Nearby civic park land, not a model for how a private Ridglea slope should drain.'
        },
        {
          name: 'Ridglea Hills Neighborhood Association',
          url: 'https://www.ridgleahills.com/',
          description:
            'Volunteer civic association for the Camp Bowie–to–Vickery core. Helpful for neighborhood events and boundaries; it is not a gated HOA that signs off on every sprinkler head.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Ridglea is tied to the{' '}
            <a
              href="https://www.fortworthtexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth
            </a>
            , campuses in{' '}
            <a
              href="https://www.fwisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth ISD
            </a>
            {' '}
            including{' '}
            <a
              href="https://ridgleahills.fwisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Ridglea Hills Elementary
            </a>{' '}
            at 6817 Cumberland, and parks listed by{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Park &amp; Recreation
            </a>
            . Families also use the{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/library/branches/lib-loc-rdg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Ridglea Library
            </a>{' '}
            and events at{' '}
            <a
              href="https://theridglea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              The Ridglea
            </a>
            , which is why overspray onto walks and uneven front turf gets noticed quickly along Camp Bowie.
          </p>
          <p>
            Outdoor watering here follows City of Fort Worth{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/twice-per-week"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              year-round twice-a-week spray rules
            </a>
            . Check weekly advice from{' '}
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
            , and stormwater notes from{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/tpw/stormwater"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Stormwater Management
            </a>
            . Ridglea Hills Park on Stonedale and{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks/services/dog-parks/zbonz-dog-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              ZBonz Dog Park
            </a>{' '}
            on Camp Bowie are nearby civic parks — not a reason to ignore lot-level irrigation, drip at foundations, or
            drainage after storms on a clay hillside.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Ridglea?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
