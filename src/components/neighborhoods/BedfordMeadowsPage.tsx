import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function BedfordMeadowsPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Bedford"
      citySlug="bedford"
      neighborhoodName="Bedford Meadows"
      canonicalUrl="https://sprinkleranddrains.com/bedford/bedford-meadows"
      pageTitle="Bedford Meadows Sprinkler Repair & Drainage in Bedford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Bedford Meadows in Bedford, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Bedford Meadows Sprinkler Repair & Drainage"
      heroDescription="1970s–90s homes and townhomes on Meadow Park Drive, Meadow Creek Drive, and Clearmeadow sit on clay lots a few minutes north of Airport Freeway. We diagnose aging zones, convert foundation spray to drip, and plan drainage so water soaks in instead of running toward shared side yards, sidewalks, and slabs."
      introHeading="1970s–80s irrigation, mixed lot types, and clay along Meadow Park Drive"
      intro={
        <>
          <p>
            Bedford Meadows Addition is a central Bedford 76021 subdivision, not the north-Bedford oak cul-de-sacs around Forest
            Ridge and not a new HOA plat. Streets such as Meadow Park Drive, Meadow Creek Drive, Clearmeadow Street, Meadow Place,
            Meadow Green, and Meadow Court sit just north of Airport Freeway (SH 183). The usual drive-in is Central Drive north,
            then west onto Meadow Park Drive. Housing is a mix of 1970s–1990s single-family brick homes and tighter townhome or
            duplex lots — some with carports and shared side yards. Typical listings note no homeowners association. Meadow Park
            Athletic Complex and the city’s Bark Park sit at 3200 Meadow Park Drive, so the same street that residents live on is
            also the park access road. Original irrigation on these lots was laid out for younger trees and simpler turf. Forty
            years later, heads have sunk, laterals sit under mature roots, and clay settlement holds stormwater against fences
            and slabs after Mid-Cities rain.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Bedford Meadows as part of our Bedford and Mid-Cities work. We
            are a licensed irrigator (LI22462). We program start times around the city’s everyday rule — no outdoor irrigation
            from 10 a.m. to 6 p.m. — and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving a peak-August schedule running into fall. We do not claim a count of jobs
            on Meadow Park Drive or any other Bedford Meadows street. We do walk each zone, protect established landscaping, and
            quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        '1970s–80s systems on Bedford Meadows lots often have too few zones, mixed replacement heads, and wiring that fails under mature roots — dry sidewalk strips and wet shade pockets show up on the same visit.',
        'Single-family lawns and townhome side yards sit on the same blocks. One runtime cannot treat a wide front strip and a narrow shared fence line the same way.',
        'Meadow Park Drive is both a residential street and the drive into the athletic complex and Bark Park, so overspray onto walks and brown curb strips get noticed by neighbors and park traffic.',
        'Lots near SH 183 and Central Drive can see municipal pressure swings that mist heads on one side of the addition and starve the other.'
      ]}
      serviceFocus={[
        'Sprinkler repair for sunken heads, leaking valves, brittle laterals, and dry bands along Meadow Park Drive sidewalks and townhome drives.',
        'Drip conversion at foundation beds so brick, siding, and shared fence lines stop getting soaked by leftover spray.',
        'Controller programming and cycle-and-soak schedules that fit Bedford watering hours and Tarrant County heat.',
        'Drainage planning for settled townhome side yards, patio pooling, and clay runoff after Mid-Cities storms.',
        'Outdoor lighting repair and additions for walkways and entries on established Meadow Creek and Clearmeadow streets.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Bedford Meadows clay can absorb water instead of sheeting toward Central Drive gutters or a shared side-yard low.',
        'Walk zones after mowing. Settling heads on 1970s–80s lots tilt quickly and stripe the front lawn along Meadow Park Drive.',
        'Keep spray off walks, carports, and neighboring townhome lots. There is typically no HOA, but park traffic and neighbors still see misting at noon.',
        'Drop summer runtimes when nights cool. Bedford is not always under a drought stage, but Water is Awesome still publishes weekly ET-based advice.',
        'Inspect valve boxes before peak heat. Slow leaks hide under oak and elm mulch long before turf shows stress.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal on a park-access street',
          description:
            'Many Bedford Meadows listings note no homeowners association. Front lawns still face Meadow Park Drive, which also leads to the athletic complex and Bark Park. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Bedford watering hours and Tarrant supply',
          description:
            'The city asks residents not to irrigate between 10 a.m. and 6 p.m. even when drought stages are off. We set controllers for those windows, add rain and freeze protection where hardware allows, and point homeowners to Water is Awesome weekly guidance.'
        },
        {
          title: 'Mixed lots and 1970s–80s laterals',
          description:
            'Single-family fronts and townhome side yards share the same clay. Original pipe and mixed replacement heads cannot treat both. We rebalance zones and repair laterals instead of adding runtime that just runs to the curb or a shared fence.'
        },
        {
          title: 'Foundation drip and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on established lots. After heavy rain we look at downspouts and low pads so irrigation is not fighting standing water next to a 1970s or 1980s slab.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Bedford Meadows street photo'
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
        heading: 'Featured work for homes like these in Bedford Meadows',
        title: 'A dry Meadow Park front strip, a soggy townhome side yard, and a controller still on August',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Bedford / nearby Mid-Cities service — not a named Bedford Meadows street.',
        body: 'A common call on 1970s–80s central Bedford lots looks like this: the sunny strip along the sidewalk browns out, a narrow townhome side yard stays dark and soft, and a patio corner holds water after storms. Clay sheds a long watering cycle before roots drink. Original three- or four-zone layouts cannot treat a wide single-family front and a shared fence line the same. Pressure near the SH 183 / Central Drive corridor can mist one row of heads and starve another. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting brick and mulch. Controller start times move into Bedford’s allowed windows with cycle-and-soak repeats. If the low pad is irrigation plus a downspout, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Bedford Meadows clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Bedford Meadows lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Meadow Park Drive curb returns, townhome fence lines, and Central Drive gutter lines.'
        },
        {
          title: 'Heat, ET, and Bedford Meadows controller schedules',
          description:
            'Bedford summers push evapotranspiration hard, and the city still limits irrigation from 10 a.m. to 6 p.m. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Bedford Meadows systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Single-family fronts versus Bedford Meadows townhome side yards',
          description:
            'The addition mixes wider single-family lawns with tighter duplex and townhome lots on streets such as Meadow Park Drive and Meadow Creek Drive. Shade, sun, and narrow side yards need different nozzles and runtimes, or one side stays soggy while the street strip dies.'
        },
        {
          title: 'Aging Bedford Meadows systems, pressure, and foundation drip',
          description:
            'First-generation 1970s–80s pipe and mixed replacement heads are common. Lots closer to Airport Freeway and Central Drive can see pressure swings that mist or starve heads. Foundation drip protects older slabs better than spray. Settled side yards need a drainage plan after storms, not another hour on the controller.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Bedford Meadows site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect city watering hours and mixed single-family / townhome lots',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Bedford Meadows?',
          answer:
            'Many Bedford Meadows lots do not have a homeowners association, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Townhome or duplex lots may still have owner-association or shared-yard rules even when the addition as a whole is not a gated HOA. Drainage that changes grading or visible piping, and lighting that alters the street view, may need City of Bedford guidance. We describe the visible scope before work starts so you can check city or association rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Bedford Meadows clay, shade, and mixed lots?',
          answer:
            'Most Bedford Meadows yards need cycle-and-soak on turf, separate runtimes for shade versus the sunny sidewalk or carport strip, and drip at foundation beds. Do not run a long single cycle that sheets to Meadow Park Drive or a shared townhome side yard. We set programs around Bedford’s 10 a.m. to 6 p.m. irrigation limit and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, townhome side-yard constraints, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Bedford Meadows?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority. We plan around park and Central Drive traffic when we can.'
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
          description: 'Irrigation and drainage support for 1960s–70s lots on Winchester Way and Chattanooga Drive.',
          link: '/bedford/bell-manor'
        },
        {
          name: 'Mayfair Hills',
          description: 'Cycle-and-soak irrigation and clay-soil drainage help on established north Bedford cul-de-sacs.',
          link: '/bedford/mayfair-hills'
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
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established Bedford Meadows lawns and townhome lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward shared side yards and Meadow Park Drive sidewalks.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and fence-line drip so older Bedford Meadows slabs get water without soaking brick or neighboring lots.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Meadow Park Athletic Complex',
          url: 'https://bedfordtx.gov/801/Meadow-Park-Athletic-Complex',
          description:
            'The city’s 11-acre complex at 3200 Meadow Park Drive — baseball and softball fields, youth soccer, and picnic areas — sits on the same street as Bedford Meadows homes. Useful context for how local clay and stormwater behave beyond the curb.'
        },
        {
          name: 'Bedford Bark Park',
          url: 'https://www.bedfordtx.gov/793/Bark-Park',
          description:
            'The city’s dog park is inside the Meadow Park Athletic Complex. Park traffic on Meadow Park Drive is why overspray and brown front strips get noticed on the walk or drive over.'
        },
        {
          name: 'Shady Brook Elementary',
          url: 'https://shadybrook.hebisd.edu/',
          description:
            'HEB ISD campus at 2601 Shady Brook Drive, the typical elementary for Bedford Meadows Addition. The campus lawn and weekday drop-off are everyday context for how front yards in this part of 76021 are seen.'
        },
        {
          name: 'Bedford Public Library',
          url: 'https://www.bedfordlibrary.org/',
          description:
            'The library at 2424 Forest Ridge Drive is a short trip west of Central Drive and a straightforward landmark when placing Bedford Meadows on the city map.'
        },
        {
          name: 'Bedford Parks & Recreation',
          url: 'https://www.bedfordtx.gov/214/Parks-Recreation',
          description:
            'City parks, programs, and facility listings, including Meadow Park and the larger Forest Ridge campus. The department’s fields and greenspace are why runoff and overspray on neighborhood walks get noticed quickly.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Bedford Meadows is tied to the{' '}
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
            , and the neighborhood elementary at{' '}
            <a
              href="https://shadybrook.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Shady Brook Elementary
            </a>
            . Families also use{' '}
            <a
              href="https://bedfordtx.gov/801/Meadow-Park-Athletic-Complex"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Meadow Park Athletic Complex
            </a>{' '}
            and the{' '}
            <a
              href="https://www.bedfordtx.gov/793/Bark-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bark Park
            </a>{' '}
            at 3200 Meadow Park Drive, which is why brown front strips and sidewalk overspray get noticed on the walk or drive over.
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
            . Listings from{' '}
            <a
              href="https://www.bedfordtx.gov/214/Parks-Recreation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bedford Parks &amp; Recreation
            </a>{' '}
            sit a few minutes away — a reminder that this is an older Mid-Cities addition where irrigation has to respect clay,
            mixed lot types, and city watering hours, not a brand-new HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Bedford Meadows?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
