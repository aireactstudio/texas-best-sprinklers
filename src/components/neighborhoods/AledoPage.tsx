import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');

export default function AledoPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Weatherford"
      citySlug="weatherford"
      neighborhoodName="Aledo"
      canonicalUrl="https://sprinkleranddrains.com/weatherford/aledo"
      pageTitle="Aledo Sprinkler Repair & Drainage in Weatherford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Aledo Original Town lots and Parks of Aledo clay in ZIP 76008. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Aledo Sprinkler Repair & Drainage"
      heroDescription="Aledo is its own Parker County city in ZIP 76008 — Original Town lots along Front Street, Elm, and Maverick plus Parks of Aledo clay off Bailey Ranch Road — not the Weatherford courthouse square and not Walsh in Fort Worth. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set to Aledo’s clock, not a Weatherford or Hudson Oaks day pattern."
      introHeading="Railroad-town clay and Bailey Ranch HOA fronts need different clocks"
      intro={
        <>
          <p>
            Aledo is a separate city in southeastern Parker County, not a Weatherford subdivision. The Texas and Pacific
            Railroad laid tracks here in 1879; the stop was first Parker Station, then Aledo in 1882 after a railroad
            official’s hometown in Illinois. The city incorporated on May 8, 1963. Original Town still sits against those
            tracks: North and South Front Streets, Elm Street at FM 1187, Maverick Street, Pecan Drive, and Old Annetta
            Road. City Hall, the library, and the municipal complex are at 200 Old Annetta Road. The Aledo Community
            Center is across the street at 104 Robinson Court. East of that core, Parks of Aledo, Point Vista, The Lakes,
            and The Bluff fill Bailey Ranch Road, Kingfisher Lane, and Mallard Drive off I-20 exit 420 and FM 1187. Aledo
            High School, Tim Buchanan Stadium, and the district offices sit at 1000–1008 Bailey Ranch Road. That mix is
            the irrigation problem: a controller copied from Downtown Weatherford waters the wrong utility, a clock that
            treats a compact Front Street pad like a Parks of Aledo trail lot soaks the walk while a shaded Original Town
            side yard stays brown, and leftover spray on Bailey Ranch clay runs toward HOA greenbelts instead of into the
            root zone. Realtor pages sometimes lump this city with Walsh or Annetta. This page is City of Aledo lots
            only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Aledo as part of our Weatherford and Parker County work.
            We are a licensed irrigator (LI22462). Aledo bills its own utility customers — it is not Weatherford Municipal
            Utilities. The city’s annual drinking-water report lists Fort Worth wholesale surface water (Lake Worth, Eagle
            Mountain Lake, and related Fort Worth sources) as the supply. Aledo’s Water Conservation Plan prohibits
            outdoor watering from 10 a.m. to 6 p.m. and limits irrigation to twice a week. Confirm the current assigned
            days on the city’s conservation page before you copy a neighbor’s clock — Aledo days are not Hudson Oaks’
            inverted odd/even pairing and not a Weatherford even-Wednesday guess. New or expanded systems need an
            irrigation permit signed by a licensed irrigator; ordinary head and pipe repairs usually stay in the existing
            layout. We program the house or HOA clock for the current Aledo notice, follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice, and point customers to the city’s My Water Advisor leak alerts instead of leaving a
            peak-summer runtime into fall. We do not claim a count of jobs on Front Street, Bailey Ranch Road, or
            Kingfisher Lane, and we do not treat Community Center Park, Bearcat Park, or stadium turf as a substitute for
            diagnosing a private yard. We walk zones, keep spray off walks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Aledo bans outdoor watering from 10 a.m. to 6 p.m. and limits irrigation to twice a week. Copying a Weatherford even-Wednesday clock or Hudson Oaks inverted days misses this city’s notice.',
        'Original Town pads on Front Street, Elm, and Maverick are tighter than Parks of Aledo lots on Bailey Ranch Road, so leftover spray hits walks and the railroad-side heat island faster.',
        'Parks of Aledo, Point Vista, and later phases have HOA-visible fronts. Tilted heads and dry strips show on Kingfisher Lane and Mallard Drive because the association notices the street.',
        'Do not confuse this city with Downtown Weatherford, Hudson Oaks, Willow Park, Annetta, or Walsh (mostly Fort Worth even when the address zones Aledo ISD). Aledo is the 76008 railroad town with City Hall on Old Annetta Road.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Front Street, Elm Street, Bailey Ranch Road, and Kingfisher Lane.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on both Original Town pads and larger Parks of Aledo lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit Aledo’s 10 a.m.–6 p.m. ban and twice-a-week conservation plan.',
        'Drainage planning for patio lows, trail-side grade on Bailey Ranch clay, and runoff that follows older creek lines toward Howard Way Park and the Community Center green.',
        'Outdoor lighting repair and additions for entries and walks that stay visible on the way to Old Annetta Road without changing Original Town or HOA street character.'
      ]}
      localTips={[
        'Confirm the current Aledo watering-day assignment before you pick start times. The 10 a.m.–6 p.m. ban is year-round; twice-a-week days are posted by the city, not copied from Weatherford.',
        'Use shorter cycle-and-soak windows so Aledo clay can absorb water instead of sending it across Front Street, Bailey Ranch Road, or toward Parks of Aledo greenbelts.',
        'Ask whether the HOA already waters the front at Parks of Aledo or Point Vista. A house-only clock should not copy common-area days, and a common meter should not copy the house.',
        'Keep spray off walks, drives, and the railroad-side heat on Front Street. Daytime irrigation is already treated as waste, and runoff just loads storm drains after a Parker County storm.',
        'Register the city meter in My Water Advisor so a stuck valve or main-line leak shows up as a usage spike instead of a surprise bill on Fort Worth wholesale water.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and a controller still on August wastes Aledo water in October.'
      ]}
      trustCards={[
        {
          title: 'HOA curb appeal on Parks of Aledo fronts',
          description:
            'Parks of Aledo, Point Vista, The Lakes, and The Bluff street views are association-visible. Tilted heads, misting, and dry strips show on Bailey Ranch Road, Kingfisher Lane, and Mallard Drive because the trail-and-greenbelt plat is part of the look. We match nozzles and cut overspray without inventing an Original Town no-HOA scope.'
        },
        {
          title: 'Aledo days, not a Weatherford or Hudson Oaks guess',
          description:
            'Aledo prohibits irrigation from 10 a.m. to 6 p.m. and caps outdoor watering at twice a week. We set controllers for the current City of Aledo notice and Fort Worth wholesale supply — not Weatherford Municipal Utilities and not Hudson Oaks’ inverted odd/even pairing.'
        },
        {
          title: 'Two lot sizes on the same clay',
          description:
            'A compact Front Street or Maverick pad throws leftover spray onto walks in one cycle, while a Parks of Aledo trail lot needs more throw and still sheds the first pass. One long summer runtime floods the curb on Original Town and still leaves a shaded Bailey Ranch corner brown. This is not courthouse-square drainage and not a Willow Park well-pressure problem.'
        },
        {
          title: 'Foundation drip and creek-side drainage',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water headed toward Howard Way Park’s old creek line on Village Parkway, Community Center Park on Old Annetta, or Parks of Aledo greenbelts — civic and HOA drainage, not a reason to add more spray.'
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
                'As a property manager, I have worked with many irrigation companies. Texas Best Sprinklers is by far the most professional and reliable.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Aledo street photo'
        },
        {
          src: '/assets/images/optimized/drainage-weatherford.png',
          alt: 'Drainage work from a Texas Best Sprinklers Weatherford-area project',
          caption: 'Drainage work — Weatherford-area project photo, not a named Aledo street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Aledo',
        title: 'The sunny Bailey Ranch front looked wet while a shaded Front Street corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Weatherford-hub / nearby DFW service — not a named Aledo street, and not work at Community Center Park, Bearcat Park, Tim Buchanan Stadium, or City Hall.',
        body: 'A common Aledo call looks like this: a controller on Bailey Ranch Road, Kingfisher Lane, or Mallard Drive is still running one long summer cycle, and the day pattern was copied from Weatherford or from a Walsh neighbor who is not even on Aledo water. Clay sheds the first pass. Leftover spray hits the HOA walk, which the conservation plan already treats as wasted outdoor water, while a shaded Original Town corner on Elm or Maverick stays brown because canopy grew in after the pad was finished. Across FM 1187, a west-facing strip along Front Street cooks against railroad and pavement heat and needs drip, not more spray. An HOA at Parks of Aledo may already water the front on a different meter. The clock may still be running through the 10 a.m.–6 p.m. window. We map which zones the owner actually controls, check whether the meter is a City of Aledo account, match nozzles so spray stays off walks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows that fit Aledo’s twice-a-week plan. If the low patio is irrigation plus a downspout, we talk through drainage instead of adding spray that will run toward Village Parkway, Old Annetta, or the Parks of Aledo trail system. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Aledo clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 76008 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Front Street, Bailey Ranch Road, and Parks of Aledo greenbelts. This is not Town Creek historic-pad saturation from Downtown Weatherford — it is mixed Original Town and trail-lot clay that happens to sit next to FM 1187 and I-20.'
        },
        {
          title: 'Heat, ET, and Aledo controller schedules',
          description:
            'Railroad pavement on Front Street and Friday-night traffic on Bailey Ranch Road hold heat after sunset, and the city bans irrigation from 10 a.m. to 6 p.m. House and HOA controllers still need seasonal programs, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. My Water Advisor is built for catching a zone that never shut off.'
        },
        {
          title: 'Original Town versus Parks of Aledo HOA fronts',
          description:
            'Front Street, Elm, Maverick, and Pecan Drive street views are usually not a gated HOA. Parks of Aledo, Point Vista, and The Bluff fronts are association-visible, while side and rear yards stay on the house clock. Shared runtimes overwater the HOA strip and starve a shaded Original Town pocket. Separate nozzle types and zone timing keep both sides of an Aledo lot honest without changing the plat’s curb look.'
        },
        {
          title: 'Creek-side drainage and foundation drip in Aledo',
          description:
            'Howard Way Park at the end of Village Parkway, across from Vandagriff Elementary, sits on a line neighbors remember as a natural creek before the playground. Patio lows and downspouts add to that path and to Community Center Park on Old Annetta. Foundations belong on drip, not another hour of spray. Do not confuse this city with Downtown Weatherford, Hudson Oaks, Willow Park, Annetta, or Walsh.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Aledo site assessment and issue mapping, including Original Town shade, Parks of Aledo trail lots, and any Village Parkway or Old Annetta grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Aledo watering rules, HOA curb appeal, and mixed lot size in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Aledo?',
          answer:
            'Parks of Aledo, Point Vista, The Lakes, and The Bluff have HOAs, so check the association before changing visible heads, lighting, or grading even when the repair stays in the existing layout. Original Town lots on Front Street, Elm, and Maverick typically do not have a gated HOA, but new or expanded irrigation still needs a City of Aledo irrigation permit signed by a licensed irrigator (we are LI22462), and irrigation contractors must be registered with the city. Ordinary head and pipe repairs usually do not need a new-system permit. We describe the visible scope before work starts. We do not file city or HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Aledo clay, shade, and mixed lot sizes?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Compact Original Town pads need matched nozzles so spray stays off walks and neighbor fences. Parks of Aledo trail lots often belong on a shorter throw or drip at the street, not a long rotor cycle copied from a backyard. Program around Aledo’s conservation plan: no irrigation from 10 a.m. to 6 p.m., and a twice-a-week maximum. Confirm the current assigned days on the city’s water-conservation page. Do not copy a Weatherford even-Wednesday clock, Hudson Oaks inverted days, or Tim Buchanan Stadium civic watering onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, HOA appearance rules, and slope toward Village Parkway or Parks of Aledo greenbelts change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Aledo?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. FM 1187 traffic, Friday-night stadium access on Bailey Ranch Road, HOA notice, and wiring faults or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Aledo watering rules here?',
          answer:
            'Confirm the current City of Aledo Water Conservation Plan notice before you change days. Irrigation is prohibited between 10 a.m. and 6 p.m. Outdoor watering is limited to twice a week. Assigned days are posted by the city — they are not automatically Weatherford’s even-Wednesday / odd-Thursday pairing and they are not Hudson Oaks’ inverted calendar. We program start times and day patterns that match the current Aledo notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into walks. Always confirm the latest city notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Downtown Weatherford',
          description:
            'Courthouse-square historic pads in ZIP 76086 — a different city utility and a compact square layout, not Aledo Original Town or Parks of Aledo.',
          link: '/weatherford/downtown'
        },
        {
          name: 'Hudson Oaks',
          description:
            'Parker County city on I-20 with its own inverted odd/even watering days. Some Hudson Oaks addresses zone Aledo ISD, but that is not Aledo municipal water.',
          link: '/weatherford/hudson-oaks'
        },
        {
          name: 'Willow Park',
          description:
            'Parker County city along I-20 toward Fort Worth. Shares a Fort Worth wholesale water story — still a different municipal clock, not an Aledo plat.',
          link: '/weatherford'
        },
        {
          name: 'Annetta',
          description:
            'Small Parker County city south of I-20. We serve it from Weatherford — it is not an Aledo street.',
          link: '/weatherford'
        },
        {
          name: 'Brock',
          description:
            'Rural Parker County community west of Weatherford. Well pressure and open acreage are a different problem than Original Town clay or Parks of Aledo HOA fronts.',
          link: '/weatherford'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on Original Town pads and Parks of Aledo clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on Front Street and Bailey Ranch Road fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Village Parkway, Old Annetta, and Parks of Aledo greenbelts.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Aledo Community Center & Park',
          url: 'https://www.aledotx.gov/parks/pages/aledo-community-center-park',
          description:
            'The city’s gathering park at 104 Robinson Court, across Old Annetta Road from the municipal complex — walking trail, pavilion, and green, not a private Aledo backyard.'
        },
        {
          name: 'City of Aledo — City Hall',
          url: 'https://www.aledotx.gov/',
          description:
            'City Hall at 200 Old Annetta Road is the official source for utilities, parks, and permits — and the civic neighbor to the Original Town lots this page is about.'
        },
        {
          name: 'Aledo Public Library',
          url: 'https://www.epclibrary.com/',
          description:
            'The city library at 200 Old Annetta Road serves Aledo ISD and Parker County. A downtown civic stop, not a reason to ignore patio drainage on Front Street.'
        },
        {
          name: 'Aledo ISD campuses',
          url: 'https://www.aledoisd.org/about-aledo-isd/aledo-isd-campuses',
          description:
            'Coder Elementary on Vernon Road, Vandagriff near Howard Way Park, and the high school cluster on Bailey Ranch Road shape daily traffic — civic campuses, not house-clock substitutes.'
        },
        {
          name: 'Handbook of Texas — Aledo',
          url: 'https://www.tshaonline.org/handbook/entries/aledo-tx',
          description:
            'The railroad-town history behind Parker Station, the 1882 rename, and the 1963 incorporation. Context for Original Town lots — not a landscaping brief.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Aledo is tied to the{' '}
            <a
              href="https://www.aledotx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Aledo
            </a>
            , campuses in{' '}
            <a
              href="https://www.aledoisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Aledo ISD
            </a>
            {' '}
            (including Coder Elementary on Vernon Road and the high school campus on Bailey Ranch Road), and the{' '}
            <a
              href="https://www.epclibrary.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Aledo Public Library
            </a>
            {' '}
            at 200 Old Annetta Road. Families use the{' '}
            <a
              href="https://www.aledotx.gov/parks/pages/aledo-community-center-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Community Center &amp; Park
            </a>
            {' '}
            across Old Annetta, and they follow Friday-night traffic around Tim Buchanan Stadium — still not a private-yard
            irrigation job. Railroad-town history is in the{' '}
            <a
              href="https://www.tshaonline.org/handbook/entries/aledo-tx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Handbook of Texas Aledo entry
            </a>
            .
          </p>
          <p>
            Outdoor watering follows the City of Aledo{' '}
            <a
              href="https://www.aledotx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Conservation
            </a>
            {' '}
            notice and{' '}
            <a
              href="https://www.aledotx.gov/utility-billing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Utility Billing
            </a>
            . Track the meter with{' '}
            <a
              href="https://www.mywateradvisor2.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              My Water Advisor
            </a>
            . New irrigation work may need a city permit; start from the city’s{' '}
            <a
              href="https://www.aledotx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Permits &amp; Forms
            </a>
            {' '}
            pages. Check weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>
            {' '}
            and regional tips from{' '}
            <a
              href="https://www.savetarrantwater.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Save Tarrant Water
            </a>
            . This is Aledo municipal water supplied by Fort Worth wholesale surface water — not Weatherford Municipal
            Utilities and not a Walsh / Fort Worth HOA clock. Community Center Park and Bearcat Park are civic Aledo
            access — not a reason to treat every plat as park-edge or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Aledo?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
