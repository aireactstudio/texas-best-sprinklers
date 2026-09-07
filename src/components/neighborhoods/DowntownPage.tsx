import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function DowntownPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Fort Worth"
      citySlug="fort-worth"
      neighborhoodName="Downtown"
      canonicalUrl="https://sprinkleranddrains.com/fort-worth/downtown"
      pageTitle="Downtown Sprinkler Repair & Drainage in Fort Worth, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Downtown Fort Worth courtyards, planters, and amenity lawns. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Downtown Sprinkler Repair & Drainage"
      heroDescription="Downtown Fort Worth mixes condo courtyards, street-tree wells, and plaza planters on heat-island pavement in ZIP 76102. We diagnose leaks, convert beds to drip, and plan drainage so water soaks in instead of sheeting across sidewalks, garage ramps, and Sundance Square–area hardscape."
      introHeading="Courtyard turf and street trees dry faster than a suburban lawn on the same watering day"
      intro={
        <>
          <p>
            Downtown Fort Worth is the city’s core along Main Street, Houston Street, Commerce Street, West 7th Street,
            Throckmorton Street, and Lancaster Avenue — lofts and condos in ZIP 76102 more often than quarter-acre lawns.
            Properties such as Houston Place Lofts on Houston, the T&amp;P Tower on Lancaster, Deco 969 on Commerce, and the
            Neil P on West 7th sit next to Burk Burnett Park, General Worth Square, and the Water Gardens. Irrigation here is
            usually a courtyard pad, a rooftop or terrace planter, a street-tree well, or a small amenity lawn boxed in by
            concrete. Pavement stores heat after 6 p.m., wind funnels between towers, and clay still sits under imported
            planter mix. One long spray cycle hits brick, glass, and sidewalk before roots drink, then stormwater already has
            a short path to plaza drains. That is a different problem than a Keller tract with open turf and a backyard
            controller.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Downtown as part of our Fort Worth work. We are a licensed
            irrigator (LI22462). Fort Worth requires a licensed irrigator to install or alter an irrigation system, and the
            city runs a year-round twice-a-week spray schedule: residential even addresses on Wednesday and Saturday, odd
            addresses on Thursday and Sunday, and apartments, businesses, and common areas on Tuesday and Friday. Spray is
            off between 10 a.m. and 6 p.m.; drip, soaker, handheld hose, and tree bubblers may run any day. We program
            controllers around those rules and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving a peak-August schedule running into fall. We do not claim a count of
            jobs on Main Street or Lancaster. We do walk each zone, protect street trees and planter beds, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Amenity lawns and courtyard turf sit on imported soil over clay and heat-island pavement, so they brown or pond on the same controller that would look fine in a suburban side yard.',
        'Street-tree wells and foundation planters along Main, Houston, and 7th need drip or bubblers. Spray soaks sidewalks and storefront glass before the root ball drinks.',
        'Condo and apartment common areas follow Fort Worth’s Tuesday/Friday non-residential watering days, not the even/odd residential calendar many boards assume.',
        'Plaza grades, garage ramps, and downspouts already move stormwater fast. Extra spray just adds runoff toward Sundance Square sidewalks and Water Gardens–area drains.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, clogged filters, and dry bands on courtyard and amenity turf.',
        'Drip conversion at planter beds, street-tree wells, and foundation edges so spray stops hitting brick, glass, and pedestrians.',
        'Controller programming that splits residential even/odd days from Tuesday/Friday common-area schedules and stays off 10 a.m. to 6 p.m.',
        'Drainage planning for plaza lows, garage-ramp seepage, and patio pooling after Fort Worth storms.',
        'Outdoor lighting repair and additions for entries, courtyard paths, and street-facing steps where evening foot traffic is constant.'
      ]}
      localTips={[
        'Confirm whether the meter is residential or common-area before you pick watering days. Apartment and HOA turf downtown is usually Tuesday and Friday, not Wednesday/Saturday.',
        'Use shorter cycle-and-soak windows on courtyard turf so clay and planter mix can absorb water instead of sheeting to the sidewalk.',
        'Walk zones after the plaza is cleaned. Heads along Main and Houston get kicked, buried, or tilted by foot traffic and service carts.',
        'Keep spray off walks, storefronts, and neighboring lots. Downtown Fort Worth, Inc. ambassadors and condo boards notice misting at noon immediately.',
        'Drop summer runtimes when nights cool. Heat-island pavement still feels hot in September, but Water is Awesome weekly ET advice is a better guide than the August program.'
      ]}
      trustCards={[
        {
          title: 'Condo board and street-view standards',
          description:
            'Downtown associations and the Downtown Neighborhood Alliance watch courtyard appearance and sidewalk overspray. We match heads, straighten risers, and cut waste so the street view stays even without unauthorized layout changes on common property.'
        },
        {
          title: 'Fort Worth twice-a-week rules, not a guess',
          description:
            'Residential even/odd days, Tuesday/Friday for apartments and businesses, and a 10 a.m. to 6 p.m. spray ban all apply downtown. Drip and handheld watering may run any day. We set start times for those windows and point boards to the city’s Save FW Water pages.'
        },
        {
          title: 'Heat island, wind, and planter clay',
          description:
            'Pavement and towers change how water behaves: planters dry from the sides, courtyard turf cooks at the edge, and a long cycle still ponds in the middle. We rebalance zones instead of adding runtime that just runs to the curb.'
        },
        {
          title: 'Drip at trees and drainage after storms',
          description:
            'Street trees, terrace beds, and foundation planters belong on drip or bubblers. After heavy rain we look at downspouts, plaza drains, and low pads so irrigation is not fighting standing water next to a garage or storefront slab.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Downtown street photo'
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
        heading: 'Featured work for homes like these in Downtown',
        title: 'A brown courtyard strip, a soaked tree well, and a controller still on August',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Fort Worth / nearby DFW service — not a named Downtown street.',
        body: 'A common downtown call looks like this: the sunny edge of a courtyard lawn browns out, a street-tree well stays soggy, and a planter against glass still gets hit by leftover spray. Heat-island pavement cooks the turf edge after 6 p.m., clay under imported mix sheds a long cycle, and a controller that treats the amenity lawn like a suburban backyard wastes water onto the sidewalk. We map zones, check pressure and filtration, move beds and tree wells onto drip where spray was hitting pedestrians and storefronts, and set start times for Fort Worth’s allowed windows — including Tuesday/Friday when the meter is common-area. If the low pad is irrigation plus a downspout or plaza drain, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the property.'
      }}
      considerations={[
        {
          title: 'Downtown clay, planter mix, and cycle-and-soak',
          description:
            'Expansive North Texas clay still sits under many Downtown courtyards and tree wells, even when the visible soil is imported planter mix. A long first cycle sheets to the sidewalk. Shorter repeats let water move into the root zone instead of sliding toward Main Street gutters and plaza drains.'
        },
        {
          title: 'Heat, ET, and Downtown controller schedules',
          description:
            'Downtown pavement holds heat after sunset, so evapotranspiration stays high even when a suburban lawn would be cooling. We still honor the 10 a.m. to 6 p.m. spray ban, set seasonal programs, and point boards to Water is Awesome weekly guidance so Downtown systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on Downtown courtyards',
          description:
            'Tower shadow and live oaks around Burk Burnett Park create deep shade next to a west-facing turf strip that bakes. Shared runtimes overwater the shade pocket and starve the sunny edge. Separate nozzle types and zone timing keep both sides of a Downtown courtyard honest.'
        },
        {
          title: 'Street trees, foundations, and storm drainage Downtown',
          description:
            'Tree wells along Houston and Commerce and planters against historic brick belong on drip or bubblers, which Fort Worth allows any day. Plaza lows, garage ramps, and downspouts need a drainage plan after storms, not another hour on the controller.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Downtown site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect Fort Worth watering days, condo boards, and sidewalk-facing curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Downtown Fort Worth?',
          answer:
            'Condo boards and building managers usually control courtyard, rooftop, and common-area irrigation. Work that changes visible piping, grading, or lighting on common property typically needs association approval. Fort Worth requires a licensed irrigator (we are LI22462) to install or alter an irrigation system, and drainage that changes grading may need City of Fort Worth guidance. We describe the visible scope before work starts so you can check the board and city rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Downtown clay, shade, and planter lots?',
          answer:
            'Most Downtown properties need drip or bubblers at tree wells and foundation planters, cycle-and-soak on any courtyard turf, and separate runtimes for tower shade versus the sunny pavement edge. Do not run a long single spray cycle that sheets to the sidewalk. We set programs around Fort Worth’s twice-a-week days and 10 a.m. to 6 p.m. spray ban, then fine-tune after watching how planter mix and clay absorb on your site.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, existing pipe condition, rooftop or courtyard staging, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed Downtown?',
          answer:
            'Most common head, valve, filter, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Parking, loading-dock access, and after-hours building rules can add a follow-up. Wiring faults, main-line leaks, or drainage that needs layout drawings may also need a second trip. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Fort Worth watering rules Downtown?',
          answer:
            'Fort Worth limits spray irrigation to twice a week: even residential addresses Wednesday and Saturday, odd addresses Thursday and Sunday, and apartments, businesses, parks, and common areas Tuesday and Friday. Monday is a no-spray day. Spray is banned 10 a.m. to 6 p.m. Drip, soaker, handheld hose, and tree bubblers may run any day. We program start times and day patterns that match the meter type, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Always confirm the latest notice on the City of Fort Worth Save FW Water pages before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Cultural District',
          description: 'Irrigation and drainage support for museum-district and West 7th homes just west of Downtown.',
          link: '/fort-worth'
        },
        {
          name: 'Fairmount',
          description: 'Sprinkler repair and historic-lot drainage planning for bungalows south of Downtown near Magnolia.',
          link: '/fort-worth'
        },
        {
          name: 'Arlington Heights',
          description: 'Seasonal sprinkler service and clay-soil watering help on established west Fort Worth streets.',
          link: '/fort-worth'
        },
        {
          name: 'Wedgwood',
          description: 'Coverage troubleshooting and water-efficient irrigation support in southwest Fort Worth.',
          link: '/fort-worth'
        },
        {
          name: 'Ridglea',
          description: 'Sprinkler repair, drip conversion, and drainage planning for nearby west-side Fort Worth homes.',
          link: '/fort-worth'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry courtyard spots, and pressure issues on Downtown amenity lawns.',
          link: '/fort-worth/sprinkler-repair-services-in-fort-worth-tx'
        },
        {
          title: 'Drip Irrigation',
          description: 'Tree-well and planter drip so Downtown street trees and foundation beds get water without soaking sidewalks.',
          link: '/fort-worth/drip-irrigation-services-in-fort-worth-tx'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for plaza lows, garage-ramp seepage, and runoff that moves toward sidewalks and courtyard pads.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Burk Burnett Park',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/burk-burnett-park',
          description:
            'A one-block, 3-acre park at 501 West 7th Street, managed with Downtown Fort Worth, Inc. Useful context for how Downtown clay, shade, and irrigation runoff behave beyond a courtyard pad.'
        },
        {
          name: 'Fort Worth Water Gardens',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/water-gardens',
          description:
            'Philip Johnson’s 1974 water garden at 1502 Commerce Street. A reminder that Downtown drainage is designed as hardscape and channels, not a suburban swale.'
        },
        {
          name: 'General Worth Square',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/general-worth-square',
          description:
            'The plaza at 916 Main Street with the JFK tribute. A regular walk-through for Downtown residents — brown turf and sidewalk overspray get noticed here quickly.'
        },
        {
          name: 'Sundance Square',
          url: 'https://sundancesquare.com/',
          description:
            'The pedestrian core of Downtown dining and events. Plaza irrigation and lighting have to stay off walks and storefronts while still keeping planter beds alive in the heat island.'
        },
        {
          name: 'Fort Worth Parks & Trails',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails',
          description:
            'City listings for Downtown parks and the Trinity River trail connections that sit just north and west of the core.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life Downtown is tied to the{' '}
            <a
              href="https://www.fortworthtexas.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth
            </a>
            , streetscape programs from{' '}
            <a
              href="https://www.dfwi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Downtown Fort Worth, Inc.
            </a>
            , and the resident group at the{' '}
            <a
              href="https://www.dfwi.org/live/downtown-neighborhood-alliance"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Downtown Neighborhood Alliance
            </a>
            . Families and loft residents also use{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks/parks-and-trails"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Parks &amp; Trails
            </a>{' '}
            and the plaza at{' '}
            <a
              href="https://sundancesquare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Sundance Square
            </a>
            , which is why brown courtyard strips and sidewalk overspray get noticed on the walk to dinner or the trail.
          </p>
          <p>
            Outdoor watering here follows city days and Tarrant County supply reality. Check the{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth irrigation and watering schedule
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
            . Stormwater and plaza drains are described by{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/tpw/stormwater"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Stormwater
            </a>
            . This is an urban neighborhood where irrigation has to respect heat-island pavement, street trees, and city
            watering hours — not a brand-new suburban HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Downtown?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
