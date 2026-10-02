import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function HomeTownPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="North Richland Hills"
      citySlug="north-richland-hills"
      neighborhoodName="Home Town"
      canonicalUrl="https://sprinkleranddrains.com/north-richland-hills/home-town"
      pageTitle="Home Town Sprinkler Repair & Drainage in North Richland Hills, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Home Town lots and Canal District homes in North Richland Hills, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Home Town Sprinkler Repair & Drainage"
      heroDescription="Home Town sits between Mid-Cities Boulevard and Boulevard 26 in ZIP 76180 — a walkable new-urbanist mix of townhomes, garden homes, and cottages around The Lakes and Walker’s Creek. Compact clay pads, HOA-visible fronts, and lake-edge runoff need licensed repair, drip at courtyards, and a controller that splits private yards from common-area watering days."
      introHeading="Walkable streets still sit on clay that sheds a long watering cycle"
      intro={
        <>
          <p>
            Home Town — often styled HomeTown — is North Richland Hills&apos; 287-acre mixed-use village between
            Mid-Cities Boulevard and Highway 26 / Boulevard 26. The community was planned for sidewalks, street trees,
            and roughly a thousand homes plus retail and office, not for historic Smithfield ranch pads north of Loop 820.
            ZIP 76180. Plats include Home Town NRH West and later Hometown Canal District phases along Bridge Street,
            Ice House Drive, Madrid Street, Grand Avenue, and Mangham Street. Townhomes and 35- to 45-foot cottage or
            garden lots leave little room for a misting spray head. Many yards back to The Lakes at HomeTown — the
            27-acre linear park and wildlife preserve at 8700 Bridge Street — or sit a short walk from Walker Creek
            Elementary at 8780 Bridge Street and Birdville High School at 9100 Mid-Cities Boulevard. HOA fronts and
            canal-edge turf are judged from the sidewalk every day. Original builder controllers often treat every
            leftover weekday like August and ignore that city parks and association commons water on Tuesday and Friday
            while private addresses stay on even or odd days. This is not Cotton Belt-era Smithfield, not an Iron Horse
            golf lot, and not a gated hillside plat.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Home Town as part of our North Richland Hills and
            Mid-Cities work. We are a licensed irrigator (LI22462). We program controllers for NRH&apos;s year-round
            twice-weekly plan: no Monday spray, even addresses Wednesday and Saturday, odd addresses Thursday and Sunday,
            and no irrigation from 10 a.m. to 6 p.m. Drip, handheld hoses, and soaker hoses are treated separately. New
            spray systems in the city must include rain and freeze sensors. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly ET advice instead of leaving a peak-heat runtime running into fall. We do not claim a count of jobs on
            Bridge Street, Ice House Drive, Madrid Street, or Grand Avenue. We do walk each zone, keep overspray off
            sidewalks and lake-edge paths, and quote through{' '}
            <a
              href="/contact"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Canal District townhomes and cottage lots on Bridge Street, Ice House Drive, and Madrid Street leave almost no room for a high-pressure spray head that wets the walk, the neighbor, or the lake path.',
        'ZIP 76180 pads mix courtyard shade with a baked strip along Mid-Cities Boulevard or Boulevard 26 — one runtime soaks the slab and still burns the street view the HOA sees.',
        'HOA commons, The Lakes, and city parks water Tuesday and Friday. Private Home Town addresses stay on even or odd days with a Monday shutoff. Mixing those calendars is the usual controller mistake.',
        'Lots that back to The Lakes or Walker’s Creek Trail already sit on a drainage corridor. More spray will not dry a patio that now holds clay against brick after storms.'
      ]}
      serviceFocus={[
        'Sprinkler repair for sunken heads, leaking valves, mismatched nozzles, and dry bands on compact Home Town fronts and Canal District courtyards.',
        'Drip conversion at foundation beds, planters, and narrow side yards so brick, window frames, and mulch stop getting soaked by spray.',
        'Controller programming and cycle-and-soak for NRH clay, Monday shutoff, even/odd private days, and HOA or common-area Tuesday/Friday windows.',
        'Drainage planning for patio lows, courtyard pooling, and runoff that aims at 76180 slabs or toward The Lakes / Walker’s Creek corridor instead of a clean curb.',
        'Outdoor lighting for walkways, street trees, and front entries that matches Home Town’s pedestrian streetscape without flooding the sidewalk or a neighbor’s window.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so compact clay can absorb water instead of sheeting toward Bridge Street sidewalks, Ice House Drive, or a lake-edge lot.',
        'Walk zones after mowing. Settling heads on narrow Canal District fronts tilt quickly and stripe the lawn the HOA and school traffic see.',
        'Confirm whether the zone is a private yard or an HOA/common area before adding a start day. Commons and parks water Tuesday and Friday; private even/odd addresses do not.',
        'Keep spray off brick, sidewalks, and The Lakes path. Pedestrian streets here show misting and brown bands immediately.',
        'Drop summer runtimes when nights cool. Water is Awesome still publishes weekly ET advice even when no extra drought stage is posted.'
      ]}
      trustCards={[
        {
          title: 'HOA curb appeal on a walkable street',
          description:
            'Home Town’s association and sidewalk traffic see every front lawn. We match heads, straighten risers, and cut overspray so Canal District and Home Town West street views stay even without a wholesale redesign or a Home Town lighting look-alike from another city.'
        },
        {
          title: 'Two watering calendars on one block',
          description:
            'Private Home Town addresses follow NRH even/odd days and a Monday shutoff. Association commons, The Lakes, and city parks water Tuesday and Friday. We set those windows separately so a courtyard controller is not copying a median clock — or the reverse.'
        },
        {
          title: 'Compact clay next to a lake corridor',
          description:
            'Expansive clay plus short townhome and cottage pads is the usual Home Town challenge. Long single cycles run off toward The Lakes or Walker’s Creek; shade courtyards stay wet. We rebalance zones and repair laterals instead of only adding runtime.'
        },
        {
          title: 'Courtyard drip and lake-edge drainage',
          description:
            'Narrow foundation beds do better on filtered drip than on spray hitting brick. After heavy rain we look at patio lows, downspout discharge, and how the Home Town lakes and trail corridor already move stormwater so irrigation is not fighting standing water against the slab.'
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
                'They diagnosed the problem quickly and had it fixed the same day. The technician showed me how to program the controller for conservation.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Home Town street photo'
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
        heading: 'Featured work for homes like these in Home Town',
        title: 'A Canal District courtyard stayed wet while the street-view strip burned',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical North Richland Hills / nearby DFW service — not a named Home Town street.',
        body: 'A common call on Home Town and Canal District lots looks like this: the sunny strip along Bridge Street or Ice House Drive browns out, the courtyard under the street tree stays dark and soft, and a patio corner holds water against the brick after storms. Clay sheds a long watering cycle before roots drink. Builder heads sit too close to the walk and spray the sidewalk the HOA sees. The controller may still start on Monday, in the middle of the day, or on Tuesday like a park — all against NRH’s year-round private-yard rules. Lots that back to The Lakes already sit on a drainage corridor that the city and trail system were built to carry. We map zones, check pressure and head height, match nozzles so throw fits a 35- to 45-foot pad, and move foundation and courtyard beds onto drip where spray was hitting walls and mulch. Controller runtimes split into cycle-and-soak windows on the correct even or odd days, after 6 p.m. or before 10 a.m. Common-area clocks stay off the private program. If the wet corner is irrigation plus settled grade and downspouts, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Home Town clay and cycle-and-soak on short pads',
          description:
            'Expansive North Texas clay on Bridge Street and Ice House Drive lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward sidewalks, The Lakes bank, and settled courtyards.'
        },
        {
          title: 'Heat, ET, and Home Town controller schedules',
          description:
            'Mid-Cities summers push evapotranspiration hard on street-facing turf. We set seasonal programs around NRH even/odd days, the Monday shutoff, HOA Tuesday/Friday commons, and Water is Awesome weekly guidance so Home Town systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade courtyards versus sun on Home Town fronts',
          description:
            'Street trees and canal-edge canopy create shade pockets next to open turf along Mid-Cities Boulevard and Boulevard 26. Shade and sun zones need different nozzles and runtimes, or the courtyard stays soggy while the HOA strip dies.'
        },
        {
          title: 'HOA appearance, compact Home Town irrigation, and foundation drip',
          description:
            'Builder laterals, valves, and wiring on townhome and cottage lots fail under clay movement and tight plantings. Foundation and courtyard beds perform better on filtered drip than on spray. Home Town’s association notices unmatched heads and overspray — we keep the street view even without treating this like historic Smithfield or an Iron Horse golf lot.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Home Town site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit compact 76180 lots, HOA-visible fronts, city irrigation permits when a new system is in play, and Canal District access',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Home Town?',
          answer:
            'Home Town has an active residential association (HomeTown North Richland Hills Residential Association / HomeTown West). Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout, but visible piping, lighting, and grading changes can still need association notice. New or substantially expanded irrigation systems in North Richland Hills generally need a city irrigation permit and a licensed irrigator; new spray systems must include rain and freeze sensors. Drainage that changes grading or visible piping may still need City of North Richland Hills guidance. We describe the visible work before it starts so you can check association documents or city requirements. We do not file permit or association applications unless that is arranged separately.'
        },
        {
          question: 'How should we water Home Town clay, courtyards, and compact lots?',
          answer:
            'Most Home Town yards need cycle-and-soak on turf, separate runtimes for courtyard shade versus the sunny Bridge Street or Ice House Drive strip, and drip at foundation beds. Long single cycles sheet across clay and collect on patios. We set private programs around NRH even/odd days, the Monday shutoff, the 10 a.m. to 6 p.m. spray ban, and Water is Awesome weekly advice. HOA commons and The Lakes follow the Tuesday/Friday park calendar — do not copy that onto a private address.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access on townhome and cottage lots, existing pipe condition, and how far grade has settled toward The Lakes or the slab change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Home Town?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Lateral leaks under tight courtyards, main-line issues, or drainage that needs a layout may need a follow-up. Same-week scheduling is typical; active leaks get priority. We plan around Mid-Cities Boulevard, Boulevard 26, and school traffic at Walker Creek Elementary and Birdville High when possible.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'North Richland Hills’ year-round conservation plan is no watering Monday; even addresses Wednesday and Saturday; odd addresses Thursday and Sunday; apartments, businesses, parks, and common areas Tuesday and Friday. Spray irrigation is not permitted from 10 a.m. to 6 p.m. Handheld hose, drip, and soaker hose are treated separately. New irrigation systems must be equipped with rain and freeze sensors. We program start times and day patterns that fit those rules, keep HOA commons off the private-yard clock, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street or toward The Lakes. Always confirm the latest notice on the City of North Richland Hills water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Smithfield',
          description: 'Historic Cotton Belt-era NRH lots north of Loop 820 — a different district than Home Town’s 76180 village.',
          link: '/north-richland-hills/smithfield'
        },
        {
          name: 'Chapman Heights',
          description: 'Hillside NRH lots with clay and slope — not Home Town’s canal and sidewalk plats.',
          link: '/north-richland-hills'
        },
        {
          name: 'Meadow Ridge',
          description: 'Irrigation and drainage support for Meadow Ridge homes elsewhere in North Richland Hills.',
          link: '/north-richland-hills'
        },
        {
          name: 'Vista Ridge',
          description: 'Sprinkler repair and seasonal controller work for Vista Ridge streets on NRH clay.',
          link: '/north-richland-hills'
        },
        {
          name: 'Wintergreen Acres',
          description: 'Nearby Hurst 76054 lots that also use Birdville ISD campuses, including Smithfield Middle.',
          link: '/hurst/wintergreen-acres'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, nozzle matching, and dry spots on compact Home Town and Canal District lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Courtyard and foundation-bed conversions that keep water on plants instead of brick, mulch, and sidewalks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, courtyard pooling, and clay saturation near Home Town slabs and The Lakes corridor.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'The Lakes at HomeTown',
          url: 'https://www.nrhtx.com/Facilities/Facility/Details/33',
          description:
            'A 27-acre linear neighborhood park at 8700 Bridge Street with a chain of lakes, fishing pier, hike-and-bike trail, and wildlife preserve — the drainage corridor many Canal District lots already sit beside.'
        },
        {
          name: 'Walker Creek Elementary',
          url: 'https://walkercreekelementary.birdvilleschools.net/',
          description:
            'Birdville ISD campus at 8780 Bridge Street, opened in 2005. School-week traffic on Bridge Street is part of daily life on nearby Home Town lots.'
        },
        {
          name: "Walker's Creek Park",
          url: 'https://www.nrhtx.com/facilities/facility/details/Walkers-Creek-Park-27',
          description:
            'A 57-acre community park at 8403 Emerald Hills Way with softball fields, a playground, and trail connections into the Walker’s Creek system that threads Home Town.'
        },
        {
          name: 'North Richland Hills Library',
          url: 'https://www.library.nrhtx.com/294/Contact-Us',
          description:
            'The 54,000-square-foot library at 9015 Grand Avenue sits just off Boulevard 26 at Walker Boulevard — one of the civic buildings the city placed inside the Home Town village.'
        },
        {
          name: 'NRH2O Family Water Park',
          url: 'https://www.nrh2o.com/',
          description:
            'The city’s 17-acre municipal water park at 9001 Boulevard 26, a short hop from Home Town streets and the Walker’s Creek Trail — civic context, not a private-yard watering model.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Home Town is tied to the{' '}
            <a
              href="https://www.nrhtx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of North Richland Hills
            </a>
            , campuses in{' '}
            <a
              href="https://www.birdvilleschools.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Birdville Independent School District
            </a>
            , and the neighborhood campus at{' '}
            <a
              href="https://walkercreekelementary.birdvilleschools.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Walker Creek Elementary
            </a>
            . Families also use{' '}
            <a
              href="https://www.nrhtx.com/Facilities/Facility/Details/33"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              The Lakes at HomeTown
            </a>
            ,{' '}
            <a
              href="https://www.library.nrhtx.com/294/Contact-Us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              North Richland Hills Library
            </a>
            {' '}on Grand Avenue, and the{' '}
            <a
              href="https://www.nrhtx.com/facilities/facility/details/Walkers-Creek-Trail-36"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Walker&apos;s Creek Trail
            </a>
            {' '}— which is why overspray onto walks and uneven front turf gets noticed quickly.
          </p>
          <p>
            Outdoor watering here follows NRH&apos;s year-round conservation plan, not a hours-only neighboring city.
            Check the city&apos;s{' '}
            <a
              href="https://www.nrhtx.com/543/Water-Conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              water conservation page
            </a>
            ,{' '}
            <a
              href="https://www.nrhtx.com/1310/Permit-Information"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              irrigation permit requirements
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
            . Civic stops such as{' '}
            <a
              href="https://www.nrh2o.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              NRH2O Family Water Park
            </a>
            {' '}and the{' '}
            <a
              href="https://www.nrhtx.com/235/Parks-Trails/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              NRH parks and trails directory
            </a>
            {' '}sit a short walk or drive from Bridge Street and Boulevard 26 — useful village context, not a reason to
            ignore lot-level drip at courtyards or drainage after storms on compact 76180 pads.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Home Town?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
