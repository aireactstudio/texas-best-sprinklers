import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function CulturalDistrictPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Fort Worth"
      citySlug="fort-worth"
      neighborhoodName="Cultural District"
      canonicalUrl="https://sprinkleranddrains.com/fort-worth/cultural-district"
      pageTitle="Cultural District Sprinkler Repair & Drainage in Fort Worth, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Fort Worth’s Cultural District in ZIP 76107. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Cultural District Sprinkler Repair & Drainage"
      heroDescription="Museum-campus pavement, mixed-use courtyards, and clay near the Clear Fork of the Trinity ask for tighter zones than a suburban lawn. We diagnose leaks, convert foundation spray to drip, and plan drainage so water soaks in instead of sheeting toward University Drive and West Lancaster."
      introHeading="Courtyard turf, street-tree wells, and clay next to a museum campus"
      intro={
        <>
          <p>
            Fort Worth’s Cultural District sits west of downtown in ZIP 76107, where Camp Bowie Boulevard, University Drive,
            Montgomery Street, Gendy Street, Darnell Street, and West Lancaster Avenue frame the Kimbell, the Modern, the Amon
            Carter, the science museum, and Will Rogers Memorial Center. Housing here is mixed-use, not a single HOA plat:
            Museum Place condos and townhomes around Wingate and West 7th, street-facing beds along Camp Bowie, amenity lawns
            at apartments, and nearby Arlington Heights and Monticello lots a few blocks off the museum campus. Parking lots
            and University Drive pavement raise heat around turf that is already sitting on expansive North Texas clay. After
            a storm, runoff moves toward Trinity Park and Botanic Garden Boulevard faster than a long spray cycle can soak in.
            That is a different irrigation problem than a quarter-acre Mid-Cities lawn with one sunny front strip.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services the Cultural District as part of our Fort Worth work. We are
            a licensed irrigator (LI22462). We program start times around the city’s year-round rules — even or odd residential
            days, Tuesday and Friday for apartments and common areas, and no spray between 10 a.m. and 6 p.m. — and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving a summer schedule running into cooler months. Drip, handheld, soaker, and
            bubbler watering may run any day under the city ordinance, which is why foundation beds and street-tree wells often
            move off spray. We do not claim a count of jobs on Museum Way or Camp Bowie. We do walk each zone, protect courtyard
            plantings and street trees, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Museum Place courtyards and Camp Bowie street beds share one controller more often than they should, so one zone browns while another floods a sidewalk.',
        'University Drive and museum parking create a heat island that pushes evapotranspiration higher than nearby tree-lined Arlington Heights blocks.',
        'Apartment and amenity lawns follow Tuesday/Friday spray days, while single-family addresses a few streets over follow even/odd days — a mismatched controller is a common find.',
        'Clay near Trinity Park sheds a long first cycle toward gutters, tree wells, and low patio corners instead of into the root zone.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, misting on pavement, and dry bands along sidewalks and courtyard edges.',
        'Drip conversion at foundation beds, planters, and street-tree wells so brick, stone, and mulch stop getting soaked.',
        'Controller programming that matches Fort Worth even/odd days or Tuesday/Friday common-area days, plus cycle-and-soak in clay.',
        'Drainage planning for patio pooling, compacted event-week turf, and runoff that moves toward University Drive and the Trinity greenbelt.',
        'Outdoor lighting repair and additions for walkways and entries on mixed-use and nearby residential streets.'
      ]}
      localTips={[
        'Confirm whether the property is treated as residential or nonresidential before changing days. Apartment and amenity turf is Tuesday and Friday in Fort Worth.',
        'Use shorter cycle-and-soak windows so Cultural District clay can absorb water instead of sending it down Camp Bowie or University Drive gutters.',
        'Walk zones after mowing or after a Will Rogers / Dickies Arena event week. Compacted amenity turf and tilted heads show up quickly.',
        'Keep spray off sidewalks, drives, and museum-campus walks. The city treats runoff from broken or misaligned heads as water waste.',
        'Drop summer runtimes when nights cool. Water is Awesome still publishes weekly ET-based advice even when drought stages are off.'
      ]}
      trustCards={[
        {
          title: 'Street view without inventing a suburban HOA',
          description:
            'Cultural District properties are more often condo boards, property managers, and city-facing beds than a gated Mid-Cities association. We match heads, straighten risers, and cut overspray so courtyards and Camp Bowie frontage stay even without unauthorized layout changes.'
        },
        {
          title: 'Fort Worth watering days and Tarrant supply',
          description:
            'Residential even/odd days, Tuesday/Friday for apartments and common areas, and no spray from 10 a.m. to 6 p.m. We set controllers for those windows, add rain and freeze protection where hardware allows, and point owners to Water is Awesome weekly guidance.'
        },
        {
          title: 'Heat island, clay, and event-week compaction',
          description:
            'Pavement around the museums and University Drive cooks turf that already sits on expansive clay. Stock Show and arena weeks compact amenity lawns. We rebalance zones and talk drainage instead of adding runtime that just runs to the curb.'
        },
        {
          title: 'Drip at foundations and Trinity-edge drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on mixed-use lots. After heavy rain we look at downspouts and low pads so irrigation is not fighting standing water next to a slab or courtyard drain that already sheds toward the Trinity.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Cultural District street photo'
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
        heading: 'Featured work for homes like these in the Cultural District',
        title: 'A dry courtyard strip, a leaking street-tree well, and a controller on the wrong watering days',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Fort Worth / nearby DFW service — not a named Cultural District street.',
        body: 'A common call on mixed-use Fort Worth lots looks like this: courtyard turf browns in the heat island, a street-tree well stays wet from a leaking riser, and the controller is still set to residential even/odd days on an apartment or amenity lawn that the city treats as Tuesday and Friday. Clay sheds a long watering cycle before roots drink, and spray hitting sidewalks along a museum-campus walk counts as water waste. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation and planter beds onto drip where spray was hitting brick and mulch. Controller start times move into Fort Worth’s allowed windows with cycle-and-soak repeats. If a low patio or courtyard drain is irrigation plus compacted grade after event traffic, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the property.'
      }}
      considerations={[
        {
          title: 'Cultural District clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Cultural District lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward University Drive gutters, Camp Bowie sidewalks, and Trinity Park edges.'
        },
        {
          title: 'Heat, ET, and Cultural District controller schedules',
          description:
            'Museum parking and University Drive pavement push evapotranspiration harder than shaded Arlington Heights blocks. We set seasonal programs around Fort Worth’s 10 a.m. to 6 p.m. spray ban and point owners to Water is Awesome weekly guidance so systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Residential days versus Cultural District amenity lawns',
          description:
            'Single-family addresses follow even Wednesday/Saturday or odd Thursday/Sunday spray days. Apartments, businesses, and common areas water Tuesday and Friday. A shared controller that ignores that split wastes water and can draw a city notice.'
        },
        {
          title: 'Cultural District foundations, street trees, and Trinity-edge drainage',
          description:
            'Condo and townhome slabs perform better on drip than leftover spray. Street-tree wells need targeted water, not misting across pavement. After storms we look at downspouts and low courtyards so irrigation is not fighting runoff already moving toward the Clear Fork greenbelt.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Cultural District site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect Fort Worth watering days, condo or property-manager rules, and street-facing curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in the Cultural District?',
          answer:
            'Many Cultural District properties are condos, townhomes, or apartments with a board or property manager rather than a classic suburban HOA. Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout, but courtyard or street-facing changes may need building approval. New irrigation systems in Fort Worth require a licensed irrigator. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Fort Worth guidance. We describe the visible scope before work starts so you can check building and city rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Cultural District clay, courtyards, and mixed-use lots?',
          answer:
            'Most Cultural District properties need cycle-and-soak on turf, separate runtimes for heat-island strips versus shaded courtyards, and drip at foundations, planters, and street-tree wells. Do not run a long single cycle that sheets to University Drive. Confirm whether the site is residential or nonresidential before setting days. We program around Fort Worth’s 10 a.m. to 6 p.m. spray ban and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, courtyard layout, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in the Cultural District?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority. Event weeks near Will Rogers or Dickies Arena can affect parking and access, so we plan the visit around that when you tell us.'
        },
        {
          question: 'How do you set controllers for Fort Worth watering rules in the Cultural District?',
          answer:
            'Fort Worth currently assigns even residential addresses Wednesday and Saturday, odd addresses Thursday and Sunday, and apartments, businesses, and common areas Tuesday and Friday. Spray is not allowed between 10 a.m. and 6 p.m. Drip, handheld, soaker, and bubbler watering may run any day. We program start times and day patterns that fit those rules, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest notice on the City of Fort Worth irrigation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Downtown Fort Worth',
          description: 'Courtyard, street-tree, and amenity-lawn irrigation closer to Sundance Square and the Water Gardens.',
          link: '/fort-worth'
        },
        {
          name: 'Fairmount',
          description: 'Irrigation and drainage for historic bungalow lots south of downtown with compact parkways and alleys.',
          link: '/fort-worth'
        },
        {
          name: 'Arlington Heights',
          description: 'Sprinkler repair and clay-soil watering help on established streets just west of the museum campus.',
          link: '/fort-worth'
        },
        {
          name: 'Ridglea',
          description: 'Irrigation repair and drainage planning for nearby west Fort Worth neighborhoods off Camp Bowie.',
          link: '/fort-worth'
        },
        {
          name: 'Wedgwood',
          description: 'Seasonal sprinkler service and drainage support across southwest Fort Worth.',
          link: '/fort-worth'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry courtyard strips, and pressure issues on Cultural District systems.',
          link: '/fort-worth/sprinkler-repair-services-in-fort-worth-tx'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation, planter, and street-tree drip so Cultural District slabs and beds get water without soaking walks.',
          link: '/fort-worth/drip-irrigation-services-in-fort-worth-tx'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, compacted amenity turf, and runoff that moves toward University Drive and the Trinity.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Kimbell Art Museum',
          url: 'https://kimbellart.org/',
          description:
            'The Kimbell at 3333 Camp Bowie Boulevard anchors the museum campus. Street-facing beds and walks around here are why overspray and broken heads get noticed quickly.'
        },
        {
          name: 'Modern Art Museum of Fort Worth',
          url: 'https://www.themodern.org/',
          description:
            'The Modern at 3200 Darnell Street sits in the same heat-island pocket as museum parking. Amenity turf and planters nearby need tighter zones than a suburban front lawn.'
        },
        {
          name: 'Trinity Park',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/trinity-park',
          description:
            'Trinity Park at 2401 University Drive follows the Clear Fork greenbelt. After storms, Cultural District runoff and clay saturation show up along this edge, not just on courtyard drains.'
        },
        {
          name: 'Fort Worth Botanic Garden',
          url: 'https://fwbg.org/',
          description:
            'The garden at 3220 Botanic Garden Boulevard is a short walk from University Drive. It is useful context for how local clay, shade, and irrigation behave beyond a mixed-use courtyard.'
        },
        {
          name: 'Amon Carter Museum of American Art',
          url: 'https://www.cartermuseum.org/',
          description:
            'The Carter at 3501 Camp Bowie Boulevard completes the museum row. Neighbors and visitors use the same sidewalks, so misting and runoff on those walks get noticed all week.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around the Cultural District is tied to the{' '}
            <a
              href="https://www.fortworthtexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth
            </a>
            , campuses in the{' '}
            <a
              href="https://www.fwisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Independent School District
            </a>
            , and parks listed by{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Parks &amp; Recreation
            </a>
            . Residents also use{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks/parks-and-trails/trinity-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Trinity Park
            </a>{' '}
            on University Drive and the visitor listings from the{' '}
            <a
              href="https://www.fwculture.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Cultural District Alliance
            </a>
            , which is why brown courtyard strips and sidewalk overspray get noticed on the walk between museums, the garden, and home.
          </p>
          <p>
            Outdoor watering here follows city days and Tarrant County supply reality. Check the{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth irrigation page
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
            . The{' '}
            <a
              href="https://fwbg.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Botanic Garden
            </a>{' '}
            on Botanic Garden Boulevard is a reminder that this is a museum-campus neighborhood where irrigation has to respect
            clay, heat, mixed occupancy, and city watering days — not a brand-new HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in the Cultural District?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
