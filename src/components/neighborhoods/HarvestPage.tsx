import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');

export default function HarvestPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Argyle"
      citySlug="argyle"
      neighborhoodName="Harvest"
      canonicalUrl="https://sprinkleranddrains.com/argyle/harvest"
      pageTitle="Harvest Sprinkler Repair & Drainage in Argyle, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Harvest in Argyle and Northlake, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Harvest Sprinkler Repair & Drainage"
      heroDescription="Hillwood’s agrihood along I-35W and FM 407 sits on Denton County clay with builder irrigation, HOA-visible sidewalks, and grade toward Central Park and Harvest Lake. Controllers still need seasonal programming, and runoff after storms is a lot-level problem — not a farm-amenity problem."
      introHeading="New sod, two cities, and a controller that still thinks it is move-in week"
      intro={
        <>
          <p>
            Harvest is a Hillwood master-planned agrihood of about 1,200 acres spanning the Town of Argyle and the Town of
            Northlake in Denton County (ZIP 76226). The welcome center is at 1301 Homestead Way. Old Justin Road carries the
            Front Porch pavilion and Argyle West Elementary at 1741 Old Justin Road; Cleveland Gibbs Parkway / Gibbs Road
            reaches Jane Ruestmann Elementary. At full buildout Hillwood plans more than 4,000 homes — townhomes from CB JENI
            plus cottages and traditional homes from David Weekley, Drees, Taylor Morrison, Toll Brothers, and Tri Pointe. That
            mix is not a mature-oak estate plat. Lots are newer, front lawns face sidewalks and the 1.5-mile Central Park spine,
            and many yards still run a builder-default schedule on expansive clay that sheds a long first cycle toward curbs,
            greenways, and the 11-acre Harvest Lake.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Harvest as part of our Argyle work. We are a licensed
            irrigator (LI22462). Water here is supplied by the Upper Trinity Regional Water District, billed through the Town of
            Northlake, and backed by Belmont Fresh Water Supply District No. 1 infrastructure — so watering days follow
            Northlake’s year-round two-day window, not a generic DFW calendar. We program controllers for that schedule and for{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly ET advice instead of leaving a closing-day program running into fall. We do not claim a count of jobs on
            Homestead Way or Old Justin Road. We diagnose zone by zone, protect foundation beds and young street trees, and
            quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Builder systems on still-growing Harvest phases often run one long turf cycle. Clay rejects that first pass, then water sheets to the sidewalk or sits at the patio slab.',
        'Townhome strips and traditional front lawns need different nozzles and runtimes. A Weekley or Toll lot is not a CB JENI courtyard.',
        'HOA and Northlake PID street views punish misting, tilted heads, and dry bands along Homestead Way sidewalks and Central Park-facing lots.',
        'Lots that grade toward greenways or Harvest Lake need check valves and honest drainage so irrigation is not adding to amenity-edge standing water.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along drives and sidewalks on newer lots.',
        'Drip conversion at foundation beds, street trees, and compact townhome plantings so walls and mulch stop getting soaked.',
        'Controller programming and cycle-and-soak schedules for Denton County clay and Northlake / UTRWD watering days.',
        'Drainage planning for low pads, patio pooling, and runoff that follows grade toward Central Park greenways after storms.',
        'Outdoor lighting repair and additions that keep entries and walkways visible without changing HOA street character.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so clay can absorb water instead of sending it to Old Justin Road curbs or greenbelt trails.',
        'Walk zones after mowing. Settling heads on recently finished lots tilt quickly and stripe the HOA-visible front lawn.',
        'Confirm your watering days by address. Northlake even addresses water Wednesday and Saturday; odd addresses Thursday and Sunday — no Monday spray, and no automatic watering from 10 a.m. to 6 p.m.',
        'Handheld, drip, and soaker watering is treated differently than spray. Do not copy a turf program onto foundation beds.',
        'If the controller has never been touched since closing, it is probably still on a generic builder program — not a Harvest clay schedule.'
      ]}
      trustCards={[
        {
          title: 'HOA and PID curb-appeal compliance',
          description:
            'Harvest’s HOA and Northlake Public Improvement District watch landscape appearance along sidewalks, parks, and Central Park edges. We match head types, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Water efficiency under UTRWD and Northlake rules',
          description:
            'Harvest water is UTRWD supply with Northlake billing. Automatic spray is limited to two days a week, with no watering Monday and no spray from 10 a.m. to 6 p.m. We set controllers for those windows, add rain and freeze protection where hardware allows, and point homeowners to Water is Awesome weekly guidance.'
        },
        {
          title: 'Clay, new sod, and builder-default runtimes',
          description:
            'Production lots still settling on Denton County clay shed a long single cycle. We rebalance zones and switch to cycle-and-soak instead of adding more runtime to a program that was never tuned for this soil or for townhome versus traditional lot size.'
        },
        {
          title: 'Drip near slabs and drainage toward the lake spine',
          description:
            'Foundation drip, pressure-regulated heads, and smart controllers reduce waste on mixed lot sizes. After heavy rain we look at patio lows and downspout discharge so irrigation is not fighting water already moving toward Harvest Lake and the Central Park greenway.'
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
                'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased, and the team was professional from start to finish.',
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
                'As a property manager, I have worked with many irrigation companies. Texas Best Sprinklers is professional and reliable, and their smart controller work cut water waste.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Harvest street photo'
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
        heading: 'Featured work for homes like these in Harvest',
        title: 'A builder controller, a dry sidewalk strip, and water sitting at the covered patio',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Argyle / Northlake / nearby DFW service — not a named Homestead Way or Old Justin Road address.',
        body: 'A common call on newer Harvest lots looks like this: the sunny front strip along the sidewalk browns between watering days, beds next to the house stay dark and soggy, and a patio corner holds water after storms even though the sprinklers “worked at closing.” Clay sheds a long builder cycle before roots drink. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and split bed watering onto drip where spray was hitting stone and mulch. Controller runtimes move to cycle-and-soak windows that fit Northlake’s twice-weekly schedule (even Wednesday/Saturday, odd Thursday/Sunday, nothing 10 a.m.–6 p.m.) and Water is Awesome weekly advice. If the low pad is irrigation plus downspout water heading toward a greenway, we talk through drainage and leveling options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Harvest clay and cycle-and-soak',
          description:
            'Expansive Denton County clay on these still-settling lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward curbs, Central Park greenways, and patio slabs.'
        },
        {
          title: 'Heat, ET, and Harvest controller schedules',
          description:
            'North Texas summers push evapotranspiration hard, and many Harvest controllers still carry a generic builder program. We set seasonal programs and point homeowners to Water is Awesome and Water My Yard so systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'HOA head and nozzle appearance in Harvest',
          description:
            'Sidewalks, parks, and Central Park-facing lots show tilted risers, misting, and overspray quickly. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional for association and PID standards.'
        },
        {
          title: 'Townhome shade versus full-sun traditional turf in Harvest',
          description:
            'CB JENI-style townhome courtyards dry differently than a Weekley or Toll Brothers front lawn. Compact lots need low-angle or drip delivery; larger traditional lots need zone-by-zone sun/shade splits and foundation beds on drip rather than spray.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Harvest site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with HOA appearance in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Harvest?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. New irrigation or work that changes visible piping, grading, or common-area edges may need Harvest HOA architectural review, and some drainage work can involve Belmont FWSD No. 1 or Town of Northlake / Town of Argyle guidance depending on the lot. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Harvest clay, townhome strips, and traditional lots?',
          answer:
            'Most Harvest yards need cycle-and-soak on turf, separate runtimes for full-sun fronts versus shadier side yards or townhome courtyards, and drip at foundation beds. Automatic spray follows Northlake’s year-round two-day window: even addresses Wednesday and Saturday; odd addresses Thursday and Sunday; no Monday; no automatic watering from 10 a.m. to 6 p.m. Handheld, drip, and soaker watering is treated differently than spray. Always confirm the current Town of Northlake or UTRWD notice before changing days yourself.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and patio grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Harvest?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'We program start times and day patterns that fit current Northlake / UTRWD expectations, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Check Water Less, Y’all and the Town of Northlake water-stage page before you change days on your own.'
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
          description: 'Irrigation and drainage support for the master-planned community north of FM 1171.',
          link: '/argyle'
        },
        {
          name: 'Cross Oaks',
          description: 'Coverage troubleshooting and clay-soil watering help near Argyle.',
          link: '/argyle'
        },
        {
          name: '5T Ranch',
          description: 'Seasonal sprinkler service and drainage planning for larger Argyle-area lots.',
          link: '/argyle'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on builder systems that still need a Harvest tune.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and townhome courtyard drip so spray stops soaking stone, mulch, and young tree trunks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Central Park greenways and slabs.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Harvest Amenities & Central Park',
          url: 'https://www.harvestbyhillwood.com/amenities/',
          description:
            'The 1.5-mile Central Park spine, Harvest Lake, pools, and the Front Porch on Old Justin Road are why HOA-facing turf and overspray onto sidewalks get noticed on the walk home.'
        },
        {
          name: 'Argyle West Elementary',
          url: 'https://awe.argyleisd.com/',
          description:
            'On-site Argyle ISD campus at 1741 Old Justin Road, across from the Front Porch pavilion. School-year traffic is part of daily irrigation timing on that edge of Harvest.'
        },
        {
          name: 'Jane Ruestmann Elementary',
          url: 'https://jre.argyleisd.com/',
          description:
            'Newer Argyle ISD elementary on Gibbs / Cleveland Gibbs Road serving Harvest families on the AISD side of the community.'
        },
        {
          name: 'Town of Argyle',
          url: 'https://www.argyletx.com/',
          description:
            'Town Hall at 308 Denton Street East. Harvest lots on the Argyle side still live with small-town civic services while the HOA and FWSD handle most day-to-day landscape infrastructure.'
        },
        {
          name: 'Town of Northlake',
          url: 'https://town.northlake.tx.us/',
          description:
            'Many Harvest addresses sit in Northlake city limits and follow Northlake outdoor watering days. Town Hall and utility notices matter more here than a generic Denton County calendar.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Harvest is split between the{' '}
            <a
              href="https://www.argyletx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Argyle
            </a>{' '}
            and the{' '}
            <a
              href="https://town.northlake.tx.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Northlake
            </a>
            . Families are zoned to either{' '}
            <a
              href="https://www.argyleisd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Argyle ISD
            </a>{' '}
            or{' '}
            <a
              href="https://www.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Northwest ISD
            </a>
            , with on-site campuses at{' '}
            <a
              href="https://awe.argyleisd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Argyle West Elementary
            </a>{' '}
            and{' '}
            <a
              href="https://jre.argyleisd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Jane Ruestmann Elementary
            </a>
            . The{' '}
            <a
              href="https://www.harvesthoa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Harvest HOA
            </a>{' '}
            and community amenities along Homestead Way and Old Justin Road are why uneven front turf shows quickly.
          </p>
          <p>
            Outdoor watering follows UTRWD supply reality and Northlake billing. Check weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>
            , the{' '}
            <a
              href="https://town.northlake.tx.us/292/Water-Stage"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Northlake watering schedule
            </a>
            ,{' '}
            <a
              href="https://utrwd.com/saving-water/save-outdoors/water-less-yall/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              UTRWD Water Less, Y&apos;all
            </a>
            , runtime tips from{' '}
            <a
              href="https://www.watermyyard.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water My Yard
            </a>
            , and district notices from{' '}
            <a
              href="https://belmontfwsd1.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Belmont FWSD No. 1
            </a>
            . Central Park and Harvest Lake are community amenities, not a reason to ignore lot-level irrigation, drip at
            foundations, or drainage after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Harvest?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
