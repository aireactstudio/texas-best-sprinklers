import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function SmithfieldPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="North Richland Hills"
      citySlug="north-richland-hills"
      neighborhoodName="Smithfield"
      canonicalUrl="https://sprinkleranddrains.com/north-richland-hills/smithfield"
      pageTitle="Smithfield Sprinkler Repair & Drainage in North Richland Hills, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for historic Smithfield lots in North Richland Hills, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Smithfield Sprinkler Repair & Drainage"
      heroDescription="Historic Smithfield sits north of Loop 820 between Davis Boulevard and Smithfield Road in ZIP 76182. Aging spray on clay, mixed shade under oaks, and runoff toward Mid-Cities Boulevard need licensed repair, drip at foundations, and a controller set to North Richland Hills watering days — not a Home Town HOA clock."
      introHeading="Oldest NRH streets still water clay as if the Cotton Belt never arrived"
      intro={
        <>
          <p>
            Smithfield is North Richland Hills&apos; oldest residential district — the early-1900s community that grew up
            around the Cotton Belt, then was annexed into the city around 1960. The city&apos;s planning map still places
            it north of Loop 820 between Davis Boulevard and Smithfield Road, with Mid-Cities Boulevard on the south
            and Smithfield Elementary on Northeast Parkway to the north. ZIP 76182. Lots here are established clay pads
            with mature post oak and pecan, not the new-urbanist Home Town streets west of Boulevard 26 and not the
            hillside plats around Iron Horse. Original irrigation, where it still exists, was laid out for younger trees
            and flatter grade. Roots crush PVC, heads sink below the mower line, and Davis Boulevard or Smithfield Road
            traffic sees every misting head. TEXRail&apos;s Smithfield Station at 6420 Smithfield Road — one block north of
            Mid-Cities — added parking, rail drainage, and weekday traffic that older side yards were never graded for.
            This is not Chapman Heights, not Meadow Ridge, and not a gated HOA village.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Smithfield as part of our North Richland Hills and
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
            weekly ET advice instead of leaving an August schedule running into fall. We do not claim a count of jobs on
            Smithfield Road, Davis Boulevard, or Northeast Parkway. We do walk each zone, protect established trees, and
            quote through{' '}
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
        'Historic Smithfield laterals under Davis Boulevard, Smithfield Road, and Northeast Parkway lots often have buried heads, brittle pipe, and wiring that fails under mature oak and pecan roots.',
        'ZIP 76182 pads mix deep shade in side yards with a baked strip along Loop 820, Mid-Cities, or Davis — one runtime soaks the slab and still burns the street view.',
        'NRH’s Monday shutoff plus even/odd days and a 10 a.m. to 6 p.m. spray ban catch controllers that still treat every leftover day like peak August.',
        'Station-area parking and Mid-Cities stormwater changed how water leaves older lots; more spray will not dry a corner that now holds clay against brick.'
      ]}
      serviceFocus={[
        'Sprinkler repair for sunken heads, leaking valves, root-damaged laterals, and dry bands along Davis Boulevard and Smithfield Road sidewalks.',
        'Drip conversion at foundation beds so brick ranches, window frames, and mulch stop getting soaked by high-pressure spray.',
        'Controller programming and cycle-and-soak for NRH clay, Monday shutoff, even/odd days, and the 10 a.m. to 6 p.m. spray window.',
        'Drainage planning for settled side yards, patio lows, and runoff that now aims at 76182 slabs or toward Mid-Cities gutters instead of rolling cleanly to the curb.',
        'Outdoor lighting for walkways, oaks, and front entries that matches traditional Smithfield architecture without a Home Town streetscape look.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so NRH clay can absorb water instead of sheeting toward Loop 820, Davis Boulevard, or a low side yard.',
        'Walk zones after mowing. Settling heads on older Smithfield lots tilt quickly and stripe the front lawn that faces Smithfield Road traffic.',
        'Confirm the address is even or odd before adding a start day. NRH skips Monday entirely and treats apartments, businesses, and parks on Tuesday and Friday.',
        'Keep spray off brick, sidewalks, and the Mid-Cities collector. Street views here show misting and brown bands immediately.',
        'Drop summer runtimes when nights cool. Water is Awesome still publishes weekly ET advice even when no extra drought stage is posted.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without copying Home Town HOA rules',
          description:
            'Historic Smithfield typically does not operate like Home Town’s architectural review. Davis Boulevard, Smithfield Road, and school traffic on Northeast Parkway still see the front lawn every day. We match heads, straighten risers, and cut overspray so the street view stays even without a wholesale redesign.'
        },
        {
          title: 'Water efficiency under NRH’s year-round plan',
          description:
            'North Richland Hills is not a hours-only city. Even addresses water Wednesday and Saturday; odd addresses Thursday and Sunday; no Monday; no spray from 10 a.m. to 6 p.m. Drip, handheld, and soaker are treated separately. We set those windows and Water is Awesome weekly guidance.'
        },
        {
          title: 'Clay lots north of Loop 820',
          description:
            'Expansive clay plus decades of oak and pecan roots is the usual Smithfield challenge. Long single cycles run off; shade pockets stay wet; PVC cracks. We rebalance zones and repair laterals instead of only adding runtime.'
        },
        {
          title: 'Foundation drip and station-area drainage',
          description:
            'Older slabs do better with filtered drip at the beds than with spray hitting brick. After heavy rain we look at settled side yards, downspout discharge, and how TEXRail / Mid-Cities grading changed flow so irrigation is not fighting standing water against the foundation.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Smithfield street photo'
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
        heading: 'Featured work for homes like these in Smithfield',
        title: 'A Davis Boulevard strip stayed brown while the shaded side yard stayed wet',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical North Richland Hills / nearby DFW service — not a named Smithfield street.',
        body: 'A common call on historic Smithfield lots looks like this: the sunny strip along Davis Boulevard or Smithfield Road browns out, turf under the oaks stays dark and soft, and a side-yard corner holds water against the brick after storms. Clay sheds a long watering cycle before roots drink. Original heads have sunk below the mower line and spray the sidewalk. The controller may still start on Monday or in the middle of the day — both against NRH’s year-round rules. Near Mid-Cities, extra pavement from the TEXRail station lot can send stormwater toward older pads that were never regraded. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting walls and mulch. Controller runtimes split into cycle-and-soak windows on the correct even or odd days, after 6 p.m. or before 10 a.m. If the wet corner is irrigation plus settled grade and downspouts, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Smithfield clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Davis Boulevard and Smithfield Road lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Loop 820 gutters, Mid-Cities curb returns, and settled side yards.'
        },
        {
          title: 'Heat, ET, and Smithfield controller schedules',
          description:
            'Mid-Cities summers push evapotranspiration hard. We set seasonal programs around NRH even/odd days, the Monday shutoff, and Water is Awesome weekly guidance so Smithfield systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on Smithfield historic pads',
          description:
            'Oak and pecan canopies create shade pockets next to open turf along Northeast Parkway and interior streets. Shade and sun zones need different nozzles and runtimes, or one side stays soggy while the Davis Boulevard strip dies.'
        },
        {
          title: 'Aging Smithfield irrigation, HOA character, and foundation drip',
          description:
            'Decades-old laterals, valves, and wiring fail under root pressure and clay movement. Foundation beds on brick homes perform better on filtered drip than on spray. The city has a Smithfield conservation plan for neighborhood character, but most lots here are not Home Town HOA fronts — we still keep heads matched and overspray off the walk.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Smithfield site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit historic 76182 lots, city irrigation permits when a new system is in play, and Davis Boulevard access',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Smithfield?',
          answer:
            'Historic Smithfield typically does not operate like a gated architectural HOA — that is Home Town, not this Cotton Belt-era district. Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. New or substantially expanded irrigation systems in North Richland Hills generally need a city irrigation permit and a licensed irrigator; new spray systems must include rain and freeze sensors. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of North Richland Hills guidance. We describe the visible work before it starts so you can check any deed restrictions or city requirements. We do not file permit or association applications unless that is arranged separately.'
        },
        {
          question: 'How should we water Smithfield clay, shade, and historic lots?',
          answer:
            'Most Smithfield yards need cycle-and-soak on turf, separate runtimes for oak shade versus the sunny Davis Boulevard or Smithfield Road strip, and drip at foundation beds. Long single cycles sheet across clay and collect in settled side yards. We set programs around NRH even/odd days, the Monday shutoff, the 10 a.m. to 6 p.m. spray ban, and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and how far grade has settled toward the slab change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Smithfield?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Root-damaged laterals, main-line leaks, or drainage that needs a layout may need a follow-up. Same-week scheduling is typical; active leaks get priority. We plan around Loop 820 and Mid-Cities traffic when possible.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'North Richland Hills’ year-round conservation plan is no watering Monday; even addresses Wednesday and Saturday; odd addresses Thursday and Sunday; apartments, businesses, and parks Tuesday and Friday. Spray irrigation is not permitted from 10 a.m. to 6 p.m. Handheld hose, drip, and soaker hose are treated separately. New irrigation systems must be equipped with rain and freeze sensors. We program start times and day patterns that fit those rules, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Always confirm the latest notice on the City of North Richland Hills water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Chapman Heights',
          description: 'Hillside NRH lots with clay and slope — a different plat than historic Smithfield north of 820.',
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
          name: 'Home Town',
          description: 'Newer new-urbanist NRH streets — not the Cotton Belt-era Smithfield district in 76182.',
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
          description: 'Head replacement, valve leaks, root-damaged laterals, and dry spots on historic Smithfield lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed conversions that keep water on plants instead of brick, mulch, and window frames.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for settled side yards, patio lows, and clay saturation near older NRH slabs and Mid-Cities runoff.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Northfield Park',
          url: 'https://www.nrhtx.com/facilities/facility/details/Northfield-Park-24',
          description:
            'A 34-acre community park at 7804 Davis Boulevard in ZIP 76182 — one of the city’s original parks, with ball fields, trails, and a playground a short hop from Smithfield streets.'
        },
        {
          name: 'Smithfield Elementary',
          url: 'https://smithfieldelementary.birdvilleschools.net/',
          description:
            'Birdville ISD campus at 8001 Northeast Parkway, North Richland Hills 76182. School-week traffic on Northeast Parkway is part of daily life on nearby lots.'
        },
        {
          name: 'TEXRail Smithfield Station',
          url: 'https://www.nrhtx.com/956/TEXRail',
          description:
            'Trinity Metro’s North Richland Hills/Smithfield stop at 6420 Smithfield Road, about a block north of Mid-Cities Boulevard. Rail parking and weekday traffic changed how stormwater leaves older adjacent pads.'
        },
        {
          name: 'North Richland Hills Library',
          url: 'https://www.library.nrhtx.com/294/Contact-Us',
          description:
            'The 54,000-square-foot library at 9015 Grand Avenue is the civic reading stop for 76180/76182 families — a reminder that street-facing turf in NRH is seen all week.'
        },
        {
          name: 'NRH Parks and Trails',
          url: 'https://www.nrhtx.com/235/Parks-Trails/',
          description:
            'City directory for community and neighborhood parks, including Northfield, Fossil Creek, and the hike-and-bike system that connects toward both TEXRail stations.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Smithfield is tied to the{' '}
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
              href="https://smithfieldelementary.birdvilleschools.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Smithfield Elementary
            </a>
            . Families also use{' '}
            <a
              href="https://www.nrhtx.com/facilities/facility/details/Northfield-Park-24"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Northfield Park
            </a>{' '}
            on Davis Boulevard and the{' '}
            <a
              href="https://www.library.nrhtx.com/294/Contact-Us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              North Richland Hills Library
            </a>{' '}
            on Grand Avenue — which is why overspray onto walks and uneven front turf gets noticed quickly.
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
              href="https://www.nrhtx.com/762/Irrigation-Permits"
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
            . Parks listed on the{' '}
            <a
              href="https://www.nrhtx.com/235/Parks-Trails/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              NRH parks and trails directory
            </a>
            , plus{' '}
            <a
              href="https://www.nrhtx.com/956/TEXRail"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              TEXRail Smithfield Station
            </a>
            , sit a short drive from Davis Boulevard and Smithfield Road — useful civic context, not a reason to ignore
            lot-level drip at foundations or drainage after storms on historic 76182 pads.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Smithfield?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
