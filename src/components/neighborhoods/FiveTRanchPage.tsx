import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');

export default function FiveTRanchPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Argyle"
      citySlug="argyle"
      neighborhoodName="5T Ranch"
      canonicalUrl="https://sprinkleranddrains.com/argyle/5t-ranch"
      pageTitle="5T Ranch Sprinkler Repair & Drainage in Argyle, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for 5T Ranch in Argyle, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="5T Ranch Sprinkler Repair & Drainage"
      heroDescription="Custom quarter- to half-acre lots south of Country Club Road sit on North Texas clay, with about half backing to HOA parkland and a detention pond used as recreation space. We diagnose leaks, rebalance long-run spray, and plan drainage that stays on the lot instead of rolling toward trails and fields."
      introHeading="When half the lots back to parkland, watering has to stay on the pad"
      intro={
        <>
          <p>
            5T Ranch is a boutique Argyle subdivision of about 90 custom homes on a roughly 55-acre tract, entered from a
            stone monument on the south side of Country Club Road just east of US 377. Access runs through 5T Ranch Road
            onto streets such as Travelers Terrace, Trigger Trail, and Appaloosa Run. Lots are typically a quarter acre to a
            half acre — larger than a Mid-Cities ranch, tighter than true Denton County acreage — so far heads lose pressure
            while the street strip still shows every tilted nozzle. Civil work here set aside roughly 18–19 acres of park,
            trails, picnic pavilions, a shaded playground, and soccer and tee-ball fields, with the detention pond designed as
            the main active recreation area. Around half of the lots back to that open space. The east edge meets Argyle&apos;s
            T1 Rural/Conservation District, so runoff and overspray are not just a neighbor-to-neighbor issue; they can leave
            the subdivision toward conservation land, Country Club Road drainage, and HOA common turf.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services 5T Ranch as part of our Argyle work. We are a licensed
            irrigator (LI22462). Water in this part of town is billed through{' '}
            <a
              href="https://argylewsc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Argyle Water Supply Corporation
            </a>
            , a utility that is not the Town of Argyle, with regional supply from the{' '}
            <a
              href="https://utrwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Upper Trinity Regional Water District
            </a>
            . That means two-day outdoor spray limits, no automatic watering from 10 a.m. to 6 p.m., and drip or handheld
            watering treated differently than rotor and spray zones. We program controllers for Denton County heat and
            follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-August schedule running into fall. We do not claim a count of jobs on
            Travelers Terrace or Trigger Trail. We do walk zones, check pressure on the longer custom lots, keep water off
            HOA trails, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Quarter- to half-acre custom lots lose pressure at the last heads. Misting and short throw are a layout issue, not a reason to add more runtime.',
        'Lots that back to HOA park, trails, and the detention-pond recreation area send irrigation and stormwater onto common turf if check valves and drainage are ignored.',
        'Stone-entry street views off Country Club Road show overspray, brown bands, and tilted risers quickly. HOA appearance standards notice those misses.',
        'Builder-era controllers on Our Country Homes and Southgate pads often still run like it is August. Seasonal programming matters as much as new nozzles.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along 5T Ranch Road and sidewalk-facing turf.',
        'Drip conversion at foundation beds, tree rings, and shade plantings so spray stops hitting mulch, brick, and HOA trail edges.',
        'Controller programming and cycle-and-soak for Argyle clay, Argyle Water Supply / UTRWD two-day spray limits, and the 10 a.m.–6 p.m. window.',
        'Drainage planning for pads that fall toward the detention pond, playground, and walking trails after Denton County storms.',
        'Outdoor lighting repair and additions that keep entries and oaks visible without changing the Country Club Road street character.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so clay can absorb water instead of sending it to 5T Ranch trails, picnic lawns, or Country Club Road gutters.',
        'Walk zones after mowing. Settling heads on quarter-acre custom lots tilt quickly and stripe the front lawn that faces the stone entry.',
        'If your lot backs to parkland, keep spray off HOA turf, the detention-pond recreation area, and neighboring pads. Association standards show those misses immediately.',
        'Drop summer runtimes when nights cool. UTRWD two-day limits still apply, and Water is Awesome publishes weekly ET-based advice that is usually less than a peak-heat program.',
        'Confirm watering days with Argyle Water Supply for your address. The Town of Argyle does not set the retail schedule for this utility.'
      ]}
      trustCards={[
        {
          title: 'HOA curb-appeal at the Country Club Road entry',
          description:
            'Argyle 5T Ranch Homeowners Association watches landscape appearance from the stone monument inward. We match head types, straighten risers, and cut overspray so street views stay even without unauthorized layout changes.'
        },
        {
          title: 'Water efficiency under UTRWD and Argyle WSC',
          description:
            'This pocket is Denton County, not Tarrant. We set controllers for two-day spray limits, no automatic watering from 10 a.m. to 6 p.m., rain and freeze sensors, and Water is Awesome weekly guidance so systems are not running like it is still August in October.'
        },
        {
          title: 'Clay lots that grade toward park and pond',
          description:
            'Civil design put a large share of the 55 acres into trails, fields, and a detention pond used as recreation space. Long single cycles create runoff toward those common areas. We rebalance zones instead of just adding runtime.'
        },
        {
          title: 'Drip at foundations and pressure control on larger pads',
          description:
            'Custom homes on half-acre lots need pressure-regulated heads at the far corners and drip at slabs and beds. After storms we look at patio lows and downspout discharge so irrigation is not fighting standing water headed toward HOA parkland.'
        }
      ]}
      reviews={[
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
                'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Professional service from start to finish.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed 5T Ranch street photo'
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
        heading: 'Featured work for homes like these in 5T Ranch',
        title: 'The back heads misted while the park-side fence stayed wet',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Argyle / nearby DFW service — not a named 5T Ranch street.',
        body: 'A common call on 5T Ranch’s custom lots looks like this: the last heads on a quarter- to half-acre run mist or barely reach, the street strip along 5T Ranch Road still looks even, and the fence that backs to HOA park or the detention-pond recreation area stays dark because a long first cycle sheds off clay. Water then follows grade toward trails, picnic lawn, or a patio low instead of into the root zone. We map zones, check static and operating pressure, match nozzles so throw and precipitation line up, and move foundation and bed watering onto drip where spray was hitting brick and mulch. Controller runtimes split into cycle-and-soak windows that fit Argyle Water Supply and UTRWD two-day spray rules, with no automatic watering from 10 a.m. to 6 p.m. If the low pad is irrigation plus downspout water headed toward common parkland, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: '5T Ranch clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on 5T Ranch lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Country Club Road, HOA trails, and the detention-pond recreation area.'
        },
        {
          title: 'Heat, ET, and 5T Ranch controller schedules',
          description:
            'Argyle summers push evapotranspiration hard. We set seasonal programs around two-day spray limits and point homeowners to Water is Awesome weekly guidance so 5T Ranch systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'HOA head and nozzle appearance in 5T Ranch',
          description:
            'The stone entry off Country Club Road and sidewalk-facing custom lots show tilted risers, misting, and overspray quickly. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional for association standards.'
        },
        {
          title: 'Park-backed lots, conservation-edge grade, and 5T Ranch drainage',
          description:
            'About half of 5T Ranch lots back to greenbelt, fields, or pond. The east side meets the T1 Rural/Conservation District. Check valves, downspout routing, and — where water stands after storms — a drainage plan keep irrigation from leaving the pad toward HOA common area or conservation land.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        '5T Ranch site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with HOA appearance and park-backed lots in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in 5T Ranch?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading, visible piping, or park-adjacent edges, and lighting that alters the Country Club Road street view, may need Argyle 5T Ranch HOA architectural review and, for some drainage work, Town of Argyle guidance. Ordinary head and pipe repairs typically do not require a town permit the way a new irrigation system can. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water 5T Ranch clay, park-backed lots, and larger custom pads?',
          answer:
            'Most 5T Ranch yards need cycle-and-soak on turf, pressure regulation so far heads on quarter- to half-acre lots do not mist, and drip at foundation beds. Lots that back to HOA park or the detention pond should keep spray on the private pad. We set programs around Argyle Water Supply / UTRWD two-day spray limits, no automatic watering from 10 a.m. to 6 p.m., and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot. Drip, soaker, and handheld watering are treated differently than spray — confirm current rules with your utility.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, and slope toward parkland change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in 5T Ranch?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'Argyle Water Supply Corporation — not Town Hall — is the retail water provider for this neighborhood. Regional UTRWD rules limit automatic spray to no more than two days per week and prohibit spray from 10 a.m. to 6 p.m. Drip, soaker, and handheld watering are often allowed any day when they do not create runoff. We program start times that fit those windows, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street or HOA trails. Always confirm the latest Argyle WSC or UTRWD notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Argyle Meadows',
          description: 'Sprinkler repair, irrigation tuning, and drainage planning for nearby Argyle homes.',
          link: '/argyle/argyle-meadows'
        },
        {
          name: 'Canyon Falls',
          description: 'Irrigation service and seasonal sprinkler tuning for Argyle-area master-planned lots.',
          link: '/argyle'
        },
        {
          name: 'Harvest',
          description: 'Sprinkler repair, controller adjustments, and drainage planning for growing landscape areas.',
          link: '/argyle'
        },
        {
          name: 'Cross Oaks',
          description: 'Coverage troubleshooting and water-efficient irrigation support near Argyle.',
          link: '/argyle'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on quarter- to half-acre custom lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so clay pads and slabs stop getting soaked by high-pressure spray.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward HOA trails and the detention pond.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Unity Park',
          url: 'https://argyletx.com/138/Unity-Park',
          description:
            'Argyle’s sports hub at 135 Crawford Road — baseball fields, soccer, a 1.25-mile path along the creek, and a covered pavilion. Useful context for how nearby grades and stormwater behave, not a substitute for lot-level drainage on 5T Ranch.'
        },
        {
          name: 'Town of Argyle Public Parks',
          url: 'https://argyletx.com/408/Public-Parks',
          description:
            'Official listings for Argyle parks and trails. 5T Ranch also has its own HOA greenbelt, playground, and fields — those common areas are association-maintained, not Town parkland.'
        },
        {
          name: 'Hilltop Elementary',
          url: 'https://hes.argyleisd.com/',
          description:
            'Argyle ISD campus at 1050 Harrison Lane, a short hop from Country Club Road. Many 5T Ranch families orient around this campus for weekday traffic and after-school routines.'
        },
        {
          name: 'Town of Argyle',
          url: 'https://www.argyletx.com/',
          description:
            'Town Hall at 308 Denton Street East is the civic center for permits, public works, and development questions. Retail water for 5T Ranch still goes through Argyle Water Supply, not Town billing.'
        },
        {
          name: 'Argyle ISD',
          url: 'https://www.argyleisd.com/',
          description:
            'District home for Hilltop Elementary, Argyle Middle, and Argyle High. School calendars and campus maps help explain weekday watering windows when families are off the property.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around 5T Ranch is tied to the{' '}
            <a
              href="https://www.argyletx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Argyle
            </a>
            , campuses in{' '}
            <a
              href="https://www.argyleisd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Argyle Independent School District
            </a>
            {' '}
            including{' '}
            <a
              href="https://hes.argyleisd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hilltop Elementary
            </a>
            , and parks listed by the Town at{' '}
            <a
              href="https://argyletx.com/408/Public-Parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Public Parks
            </a>
            {' '}
            and{' '}
            <a
              href="https://argyletx.com/138/Unity-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Unity Park
            </a>
            . The neighborhood’s own trails, playground, and fields sit inside the HOA — they are why overspray onto common turf gets noticed quickly, even though they are not Town parks.
          </p>
          <p>
            Outdoor watering here follows{' '}
            <a
              href="https://argylewsc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Argyle Water Supply Corporation
            </a>
            {' '}
            and regional{' '}
            <a
              href="https://utrwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Upper Trinity Regional Water District
            </a>
            {' '}
            rules, not a Tarrant County even/odd calendar. The Town lists utility contacts on its{' '}
            <a
              href="https://www.argyletx.com/228/Utility-Providers"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Utility Providers
            </a>
            {' '}
            page. Check weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>
            {' '}
            before changing runtimes. Denton Country Club is about a mile from the addition; that is a nearby landmark, not a reason to ignore lot-level irrigation, drip at foundations, or drainage after storms on Travelers Terrace and Trigger Trail.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in 5T Ranch?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
