import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function BellManorPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Bedford"
      citySlug="bedford"
      neighborhoodName="Bell Manor"
      canonicalUrl="https://sprinkleranddrains.com/bedford/bell-manor"
      pageTitle="Bell Manor Sprinkler Repair & Drainage in Bedford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Bell Manor in Bedford, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Bell Manor Sprinkler Repair & Drainage"
      heroDescription="1960s and 1970s brick ranches on Winchester Way and Chattanooga Drive sit on clay quarter-acre lots with oak and elm shade. We diagnose aging zones, convert foundation spray to drip, and plan drainage where settled yards now send stormwater toward slabs."
      introHeading="Aging irrigation, mature canopy, and clay on Bell Manor lots"
      intro={
        <>
          <p>
            Bell Manor is an established Bedford subdivision of single-family brick homes, most built in the late 1960s and early
            1970s. Streets such as Winchester Way and Chattanooga Drive sit just east of Forest Ridge Drive, with Airport Freeway
            (SH 183) a short drive north. Bell Manor Elementary is on Winchester Way inside the neighborhood, so weekday traffic
            and school-zone parking are part of daily life. Lots are typically around a quarter acre. Post oak and cedar elm
            canopies that have grown for fifty years now split each yard into deep shade and a few full-sun strips. Original
            irrigation, where it still exists, was laid out for younger trees and flatter grade. Roots crush PVC, heads sink below
            the turf, and settled side yards hold water against the foundation after Mid-Cities storms.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Bell Manor as part of our Bedford and Mid-Cities work. We are a
            licensed irrigator (LI22462). We program controllers around the City of Bedford request to avoid watering between 10
            a.m. and 6 p.m., and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly ET advice instead of leaving an August schedule running into fall. We do not claim a count of jobs on Winchester
            Way or any other Bell Manor street. We do walk each zone, protect established landscaping, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original 1960s–70s irrigation often has buried heads, brittle pipe, and wiring that fails under mature post oak and cedar elm roots.',
        'Quarter-acre lots mix deep shade under the street canopy with a few baked strips along drives and the front walk — one runtime cannot serve both.',
        'Settled side yards and fence lines on older pads hold clay water against the slab after storms; more spray will not dry those spots.',
        'Bell Manor Elementary on Winchester Way and Forest Ridge commuter traffic make tidy, contained work and school-hour awareness part of the job.'
      ]}
      serviceFocus={[
        'Sprinkler repair for sunken heads, leaking valves, root-damaged laterals, and dry bands along sidewalks and drives.',
        'Drip conversion at foundation beds so brick walls, window frames, and mulch stop getting soaked by high-pressure spray.',
        'Controller programming and cycle-and-soak schedules for Bedford clay and the city’s 10 a.m. to 6 p.m. watering window.',
        'Drainage planning for settled side yards, patio lows, and runoff that now aims at 50-year-old slabs.',
        'Outdoor lighting for walkways, oaks, and front entries that matches traditional brick architecture without a modern HOA look.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Bedford clay can absorb water instead of sheeting toward Forest Ridge gutters or a low side yard.',
        'Walk zones after mowing. Settling heads on 50-year-old lots tilt quickly and stripe the front lawn along Winchester and Chattanooga.',
        'Keep spray off brick, windows, and the sidewalk. Established street views show misting and brown bands immediately.',
        'Drop summer runtimes when nights cool. Bedford is not always under a drought stage, but Water is Awesome still publishes weekly ET advice.',
        'Inspect valve boxes and low corners before peak heat. Slow leaks hide under oak leaves long before turf shows stress.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal on established Mid-Cities streets',
          description:
            'Bell Manor is not a gated HOA village, but neighbors and school traffic still see the front lawn every day. We match heads, straighten risers, and cut overspray so Winchester Way and Chattanooga Drive look even without a wholesale redesign.'
        },
        {
          title: 'Water efficiency under Bedford rules',
          description:
            'Bedford asks residents to skip irrigation between 10 a.m. and 6 p.m. even when no drought stage is active. We set start times, rain and freeze sensors, and Water is Awesome weekly guidance so systems are not running like it is still August in October.'
        },
        {
          title: 'Clay, shade, and root-bound laterals',
          description:
            'Expansive clay plus fifty years of oak and elm roots is the usual Bell Manor challenge. Long single cycles run off; shade pockets stay wet; PVC cracks. We rebalance zones and repair laterals instead of only adding runtime.'
        },
        {
          title: 'Foundation drip and storm drainage',
          description:
            '1960s–70s slabs do better with filtered drip at the beds than with spray hitting brick. After heavy rain we look at settled side yards and downspout discharge so irrigation is not fighting standing water against the foundation.'
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
                'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased, and our lawn has never looked better.',
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
                'As a property manager, I have worked with many irrigation companies. Texas Best Sprinklers is professional and reliable, and the smart controller work saved water.',
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
                'I partner with Texas Best Sprinklers on client projects. Their attention to detail and technical expertise keeps landscapes supported by the right irrigation.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Bell Manor street photo'
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
        heading: 'Featured work for homes like these in Bell Manor',
        title: 'Sunken heads, a wet side yard, and a controller still on a summer program',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Bedford / nearby DFW service — not a named Bell Manor street.',
        body: 'A common call on 1960s–70s Bedford lots looks like this: the sunny strip by the driveway browns out, turf under the oaks stays dark and soft, and a side-yard corner holds water against the brick after storms. Clay sheds a long watering cycle before roots drink. Original heads have sunk below the mower line and spray the sidewalk. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting walls and mulch. Controller runtimes move to cycle-and-soak windows that start before 10 a.m. If the wet corner is irrigation plus settled grade and downspouts, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Bell Manor clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Bell Manor lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Forest Ridge gutters, fence lines, and settled side yards.'
        },
        {
          title: 'Heat, ET, and Bell Manor controller schedules',
          description:
            'Mid-Cities summers push evapotranspiration hard. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Bell Manor systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun under Bell Manor oaks and elms',
          description:
            'Post oak and cedar elm canopies create shade pockets next to open turf along Winchester Way and Chattanooga Drive. Shade and sun zones need different nozzles and runtimes, or one side stays soggy while the street strip dies.'
        },
        {
          title: 'Aging Bell Manor irrigation and foundation drip',
          description:
            'Fifty-year-old laterals, valves, and wiring fail under root pressure and clay movement. Foundation beds on brick ranches perform better on filtered drip than on spray. We repair what still works and convert beds instead of watering the slab.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Bell Manor site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit established brick lots and school-street access',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Bell Manor?',
          answer:
            'Bell Manor is an established Bedford subdivision and typically does not operate like a gated architectural HOA. Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Bedford guidance depending on scope. We describe the visible work before it starts so you can check any deed restrictions or city requirements. We do not file permit or association applications unless that is arranged separately.'
        },
        {
          question: 'How should we water Bell Manor clay, shade, and older lots?',
          answer:
            'Most Bell Manor yards need cycle-and-soak on turf, separate runtimes for oak shade versus the sunny driveway strip, and drip at foundation beds. Long single cycles sheet across clay and collect in settled side yards. We set programs around Bedford’s 10 a.m. to 6 p.m. watering window and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and how far grade has settled toward the slab change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Bell Manor?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Root-damaged laterals, main-line leaks, or drainage that needs a layout may need a follow-up. Same-week scheduling is typical; active leaks get priority. We plan around school drop-off on Winchester Way when we can.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'Bedford asks residents to avoid irrigation between 10 a.m. and 6 p.m. even when no formal drought stage is posted. We program start times that fit that window, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Confirm the latest notice on the City of Bedford water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Bedford Heights',
          description: 'Sprinkler repair, irrigation tuning, and drainage planning for established Bedford Heights homes.',
          link: '/bedford/bedford-heights'
        },
        {
          name: 'Mayfair Hills',
          description: 'Controller tuning, leak repair, and clay-soil watering help across nearby Bedford streets.',
          link: '/bedford'
        },
        {
          name: 'Bedford Meadows',
          description: 'Seasonal sprinkler service and drainage planning for Mid-Cities lots in Bedford.',
          link: '/bedford'
        },
        {
          name: 'Stonegate',
          description: 'Irrigation diagnostics and outdoor lighting support for nearby Bedford neighborhoods.',
          link: '/bedford'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, root-damaged laterals, and dry spots on established Bell Manor lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for settled side yards, patio lows, and clay saturation near older Bedford slabs.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed conversions that keep water on plants instead of brick, mulch, and window frames.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Bell Manor Elementary',
          url: 'https://bellmanor.hebisd.edu/',
          description:
            'HEB ISD campus at 1300 Winchester Way, inside the neighborhood. School-zone traffic and the campus lawn are everyday context for how front yards on this street are seen and used.'
        },
        {
          name: 'Generations Park at Boys Ranch',
          url: 'https://bedfordtx.gov/454/Generations-Park-at-Boys-Ranch',
          description:
            'The city’s 68-acre park on Forest Ridge Drive with The Center, an outdoor water park, ballfields, a lake loop, and disc golf — a short trip west of Bell Manor streets.'
        },
        {
          name: 'Bedford Public Library',
          url: 'https://bedfordlibrary.org/',
          description:
            'The library at 2424 Forest Ridge Drive is a regular stop for families along Winchester Way and a straightforward landmark when placing Bell Manor on the Bedford map.'
        },
        {
          name: 'Old Bedford School',
          url: 'https://www.bedfordtx.gov/obs',
          description:
            'The historic school on School Lane, near the library and City Hall, is a local gathering place and a reminder that this part of Bedford grew up around neighborhood campuses.'
        },
        {
          name: 'City of Bedford Parks & Recreation',
          url: 'https://bedfordtx.gov/214/Parks-Recreation',
          description:
            'City listings for parks, trails, and recreation programs, including Generations Park and smaller neighborhood greenspace residents use through the week.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Bell Manor is tied to the{' '}
            <a
              href="https://bedfordtx.gov/"
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
            , and the neighborhood campus at{' '}
            <a
              href="https://bellmanor.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bell Manor Elementary
            </a>
            . Families also use{' '}
            <a
              href="https://bedfordtx.gov/454/Generations-Park-at-Boys-Ranch"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Generations Park at Boys Ranch
            </a>{' '}
            and the{' '}
            <a
              href="https://bedfordlibrary.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bedford Public Library
            </a>{' '}
            on Forest Ridge Drive — which is why overspray onto walks and uneven front turf gets noticed quickly.
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
            , and the city’s{' '}
            <a
              href="https://bedfordtx.gov/665/Water-Conservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              water conservation page
            </a>
            , which currently asks residents to skip irrigation from 10 a.m. to 6 p.m. History and events at{' '}
            <a
              href="https://www.bedfordtx.gov/obs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Old Bedford School
            </a>{' '}
            sit a few minutes west — useful civic context, not a reason to ignore lot-level drip at foundations or drainage after
            storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Bell Manor?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
