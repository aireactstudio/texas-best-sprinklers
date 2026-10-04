import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function AnnettaPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Weatherford"
      citySlug="weatherford"
      neighborhoodName="Annetta"
      canonicalUrl="https://sprinkleranddrains.com/weatherford/annetta"
      pageTitle="Annetta Sprinkler Repair & Drainage in Weatherford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Town of Annetta groundwater lots in ZIP 76008. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Annetta Sprinkler Repair & Drainage"
      heroDescription="The Town of Annetta is its own Parker County city in ZIP 76008 — Deer Creek, Lakes of Aledo, Meadow Park, and Learners Lane clay on town groundwater wells — not the Weatherford courthouse square, not Hudson Oaks, and not Annetta North or Annetta South. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set for Annetta well water, not a Fort Worth wholesale clock copied from I-20."
      introHeading="Groundwater acreage needs Annetta well rules, not a Fort Worth wholesale clock"
      intro={
        <>
          <p>
            Annetta is a separate Type A general-law town incorporated on August 11, 1979, at the same time as Annetta
            North and Annetta South — not a Weatherford subdivision and not those two neighboring towns. Town Hall sits
            at 450 Thunder Head Lane. The mailing ZIP is 76008, so many listings say Aledo even when the meter is Town
            of Annetta water. Farm Road 5 and Learners Lane carry school traffic to Annetta Elementary at 1001 Learners
            Lane. The plats that actually make up the residential town include Deer Creek (annexed 1988), Lakes of
            Aledo (annexed 2007), Meadow Park Estates, and newer acreage such as Creekside Estates on Meadow Bend.
            Streets we use to describe those lots are Thunder Head Lane, Learners Lane, Deer Creek Drive, Old Annetta
            Road, Redbud Lane, Duncan Road, and Crouse Lane. That mix is the irrigation problem: a controller copied
            from Hudson Oaks or Willow Park assumes Fort Worth wholesale surface water and even/odd spray days, while
            Annetta bills its own groundwater customers from the Deer Creek, Lakes of Aledo, and Learners water plants.
            A clock that treats a Deer Creek acre as a compact South Main pad will soak the street while a shaded
            Learners Lane side yard stays brown. Extra spray just adds runoff toward seasonal creeks and septic fields
            that already sit on the same clay. Realtor pages sometimes lump this town with Aledo, Willow Park, or the
            other Annettas. This page is Town of Annetta lots only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Annetta as part of our Weatherford and Parker County
            work. We are a licensed irrigator (LI22462). Annetta bills its own utility customers — it is not
            Weatherford Municipal Utilities and it is not City of Aledo water. The town runs groundwater systems and
            publishes separate Consumer Confidence Reports for Deer Creek, Lakes of Aledo, and the Learners Water
            Plant. TCEQ reconfirmed a Superior Water designation on April 21, 2023. Conservation here is usage-driven:
            smart meters flag leaks, summer irrigation is the usual reason a bill jumps, and Drought Contingency Plan
            Ordinance 239 (April 2025) is the current drought document. We do not invent even/odd spray days for
            Annetta, and we do not copy Weatherford even-Wednesday, Hudson Oaks inverted, or Willow Park calendars onto
            a Thunder Head or Deer Creek controller. Town conservation guidance is to skip the heat of the day, use
            WaterSense controllers and rain sensors, convert foundation beds to drip, and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. New or altered irrigation needs an
            Irrigation/Backflow Test application through the town, and a passing backflow test is due annually. We do
            not claim a count of jobs on Thunder Head Lane, Deer Creek Drive, Learners Lane, or Meadow Bend, and we do
            not treat Town Hall monarch gardens, Annetta Elementary turf, or Split Rail golf irrigation as a substitute
            for diagnosing a private yard. We walk zones, keep spray off walks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Annetta is town groundwater — Deer Creek, Lakes of Aledo, and Learners plants — not Fort Worth wholesale like Hudson Oaks, Willow Park, or City of Aledo. Copying an I-20 even/odd clock is the wrong starting point.',
        'Deer Creek and Creekside lots are larger than courthouse-square pads, so leftover spray travels farther before clay absorbs it — especially on Deer Creek Drive, Meadow Bend, and Old Annetta Road.',
        'Some plats have an HOA or gated street view. Tilted heads and dry strips show on Learners Lane and Deer Creek because school traffic and association fronts notice the street.',
        'Do not confuse this town with Downtown Weatherford, Hudson Oaks, Willow Park, City of Aledo, Annetta North, or Annetta South. Town Hall is 450 Thunder Head Lane, ZIP 76008.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Thunder Head Lane, Deer Creek Drive, and Learners Lane.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on larger Annetta lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit Annetta conservation guidance and the current drought notice — not a copied I-20 calendar.',
        'Drainage planning for patio lows, septic-side saturation, and runoff that follows creek lines after storms on Deer Creek and Meadow Park clay.',
        'Outdoor lighting repair and additions for entries and walks that stay visible on the way to Town Hall without changing HOA or deed-restriction street character.'
      ]}
      localTips={[
        'Confirm the current Drought Contingency Plan on the town site before you pick watering days. Annetta does not publish the same even-Wednesday calendar Weatherford uses.',
        'Use shorter cycle-and-soak windows so Annetta clay can absorb water instead of sending it across Deer Creek Drive, Learners Lane, or toward a septic field.',
        'Ask whether an HOA already waters the front on a Deer Creek, Lakes of Aledo, or Creekside lot. A house-only clock should not copy common-area runtimes.',
        'Skip the heat of the day. Town conservation notes you can lose about 30% of spray to evaporation and wind on Parker County afternoons.',
        'Winterize at the ground shutoff and purge lines. Turning the controller off does not empty Annetta pipe, and freeze damage shows up on the smart meter.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and acreage clocks on Deer Creek often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'HOA curb appeal on Deer Creek and gated acreage',
          description:
            'Deer Creek, Lakes of Aledo, and Creekside fronts are association-visible. Tilted heads, misting, and dry strips show on Deer Creek Drive and Meadow Bend because the street view is part of the plat. We match nozzles and cut overspray without inventing a Downtown Weatherford no-HOA scope.'
        },
        {
          title: 'Annetta groundwater, not a Fort Worth wholesale guess',
          description:
            'Town utility customers sit on Deer Creek, Lakes of Aledo, or Learners well plants with smart meters. Conservation is usage-driven and drought rules live in Ordinance 239. We set Annetta controllers for the current town notice, not Hudson Oaks inverted days and not Weatherford Municipal Utilities.'
        },
        {
          title: 'Acreage lots next to FM 5 heat',
          description:
            'Half-acre to multi-acre pads in Deer Creek and Creekside throw leftover spray farther than a compact square lot. One long cycle floods the curb while a shaded Learners Lane or Thunder Head corner stays brown. This is not Town Creek historic-pad drainage and not an I-20 wholesale-pressure problem.'
        },
        {
          title: 'Foundation drip, septic-side clay, and creek drainage',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water next to septic fields and seasonal creek grade — civic Town Hall gardens are not a private Annetta backyard.'
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
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Annetta street photo'
        },
        {
          src: '/assets/images/optimized/drainage-weatherford.png',
          alt: 'Drainage work from a Texas Best Sprinklers Weatherford-area project',
          caption: 'Drainage work — Weatherford-area project photo, not a named Annetta street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Annetta',
        title: 'The sunny Deer Creek front looked wet while a shaded Learners Lane corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Weatherford-hub / nearby DFW service — not a named Annetta street, and not work at Town Hall gardens, Annetta Elementary, or Split Rail Golf Club.',
        body: 'A common Annetta call looks like this: a controller on Thunder Head Lane, Deer Creek Drive, or Learners Lane is still running one long summer cycle, and the day pattern was copied from Willow Park or Hudson Oaks. Clay sheds the first pass. Leftover spray hits the curb while a shaded corner toward Meadow Bend stays brown because canopy grew in after the acreage pad was finished. Across FM 5, a west-facing strip cooks against pavement and needs drip, not more spray. An HOA on a Deer Creek or Creekside lot may already water the front on a different meter. The clock may still be running through the heat of the day, which town conservation already treats as wasted outdoor water. Smart-meter leak notices sometimes point to a stuck valve the owner never hears. We map which zones the owner actually controls, check whether the meter is residential or common-area, match nozzles so spray stays off walks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows that fit the current Annetta drought notice rather than an I-20 even/odd guess. If the low patio is irrigation plus a downspout next to a septic field, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Annetta clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 76008 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Deer Creek Drive, Learners Lane, and seasonal creek lines. This is not Town Creek historic-pad saturation from Downtown Weatherford — it is acreage clay on town wells that happens to share a ZIP with Aledo.'
        },
        {
          title: 'Heat, ET, and Annetta controller schedules',
          description:
            'FM 5 pavement holds heat after sunset, and town conservation asks residents not to irrigate during the heat of the day. House and HOA controllers still need seasonal programs, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. A well-plant clock on Deer Creek is not a substitute for the current drought notice.'
        },
        {
          title: 'Deer Creek acreage versus Learners Lane school-zone fronts',
          description:
            'Deer Creek and Creekside street views are often HOA-visible on larger pads, while Learners Lane fronts sit in Annetta Elementary school-zone traffic. Shared runtimes overwater the association strip and starve a shaded Thunder Head or Redbud pocket. Separate nozzle types and zone timing keep both sides of an Annetta lot honest without changing the plat’s curb look.'
        },
        {
          title: 'Creek drainage, septic fields, and foundation drip in Annetta',
          description:
            'Many Annetta lots still use septic, so extra spray that ponds at a patio is not just a turf problem. Patio lows and downspouts add to clay that already drains slowly toward creek lines. Foundations belong on drip, not another hour of spray. Do not confuse this town with Downtown Weatherford, Hudson Oaks, Willow Park, City of Aledo, Annetta North, or Annetta South.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Annetta site assessment and issue mapping, including FM 5-facing turf, septic-side lows, and any creek grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Annetta drought notices, HOA curb appeal, and larger-lot overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Annetta?',
          answer:
            'Many Deer Creek, Lakes of Aledo, and Creekside plats have an HOA, and the town says HOA approval is the owner’s responsibility before changing visible heads, lighting, or grading. New or altered irrigation uses the town Irrigation/Backflow Test application (permits@annettatx.gov). A passing backflow test is required annually for each device. Ordinary head and pipe repairs usually stay inside the existing layout. A licensed irrigator (we are LI22462) should design or alter the system. Dig Tess (811) locates public lines; the town does not mark private property. We describe the visible scope before work starts. We do not file city or HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Annetta clay, shade, and larger lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Larger Deer Creek and Creekside pads need matched nozzles so spray stays off walks, neighbor fences, and septic fields. FM 5-facing turf often belongs on a shorter throw or drip, not a long rotor cycle copied from a backyard. Do not irrigate in the heat of the day. Confirm the current Drought Contingency Plan on the town site before you pick days — we do not copy Weatherford even-Wednesday, Hudson Oaks inverted, or Willow Park calendars onto Annetta groundwater meters. Drip, soaker, and handheld hose are usually the better tool at foundations. Do not copy Town Hall garden days or Annetta Elementary civic irrigation onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, HOA appearance rules, well-plant pressure, septic-side grade, and slope toward creek lines change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Annetta?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Smart-meter leak flags, HOA notice, well-plant pressure questions, and wiring faults or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Annetta watering rules here?',
          answer:
            'Confirm the current Drought Contingency Plan and Water Conservation pages on annettatx.org before you change days. Annetta conservation emphasizes skipping the heat of the day, WaterSense controllers, rain sensors, drip at foundations, and Water is Awesome weekly runtimes. The town’s drought document is Ordinance 239 (April 2025); council has also discussed usage-tier fees, so the notice can change. We program start times that match the current town guidance, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into walks. Always confirm the latest town notice before changing days yourself — do not copy a Weatherford or Hudson Oaks calendar.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Downtown Weatherford',
          description:
            'Courthouse-square historic pads in ZIP 76086 — a different city utility and a compact-lot problem, not Annetta acreage wells.',
          link: '/weatherford/downtown'
        },
        {
          name: 'Hudson Oaks',
          description:
            'Parker County city on I-20 with Fort Worth wholesale water and inverted odd/even days. Not an Annetta groundwater clock.',
          link: '/weatherford/hudson-oaks'
        },
        {
          name: 'Willow Park',
          description:
            'I-20 city with Fort Worth wholesale blended through the El Chico tank. Shares Aledo ISD for some addresses — not Town of Annetta wells.',
          link: '/weatherford/willow-park'
        },
        {
          name: 'Aledo',
          description:
            'Neighboring Parker County city that shares ZIP 76008 on many listings. City of Aledo water is not a substitute for diagnosing Thunder Head Lane.',
          link: '/weatherford'
        },
        {
          name: 'Brock',
          description:
            'Rural Parker County community west of Weatherford. Open acreage is a different problem than Annetta’s town well plants and HOA-visible Deer Creek fronts.',
          link: '/weatherford/brock'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on larger Annetta clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on Deer Creek and Learners Lane fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, septic-side ponding, and runoff that moves toward creek lines after storms.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Town of Annetta — Town Hall',
          url: 'https://www.annettatx.org/',
          description:
            'Town Hall at 450 Thunder Head Lane is the official source for utilities, permits, and parks — and the civic neighbor to the private lots this page is about.'
        },
        {
          name: 'Annetta Water Conservation',
          url: 'https://www.annettatx.org/water-conservation',
          description:
            'Town groundwater conservation, smart-meter leak notes, and irrigation tips. Civic guidance for well customers — not a private-yard substitute.'
        },
        {
          name: 'Permits & Platting',
          url: 'https://www.annettatx.org/permits-platting',
          description:
            'Irrigation/backflow applications and annual backflow tests go through permits@annettatx.gov. Town process, not a reason to skip diagnosing Deer Creek Drive.'
        },
        {
          name: 'Annetta Elementary',
          url: 'https://annetta.aledoisd.org/about-us',
          description:
            'Aledo ISD’s Annetta Elementary at 1001 Learners Lane. School-zone traffic is why tilted heads on Learners Lane get noticed — still not a campus irrigation contract.'
        },
        {
          name: 'Aledo Public Library',
          url: 'https://www.epclibrary.com/',
          description:
            'Annetta does not run its own library. Families in Aledo ISD use the Aledo Public Library at 200 Old Annetta Road — a nearby civic stop, not a reason to ignore patio drainage on Thunder Head Lane.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in the Town of Annetta is tied to{' '}
            <a
              href="https://www.annettatx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Annetta
            </a>
            {' '}
            government at 450 Thunder Head Lane, campuses in{' '}
            <a
              href="https://www.aledoisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Aledo ISD
            </a>
            {' '}
            (including{' '}
            <a
              href="https://annetta.aledoisd.org/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Annetta Elementary
            </a>
            {' '}
            on Learners Lane), and the{' '}
            <a
              href="https://www.epclibrary.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Aledo Public Library
            </a>
            {' '}
            on Old Annetta Road. Town history for the 1870s freight station, the Texas &amp; Pacific railroad stop, and
            the August 11, 1979 incorporation of three Annetta towns is on the official{' '}
            <a
              href="https://www.annettatx.org/history"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              History
            </a>
            {' '}
            page, with county context in the{' '}
            <a
              href="https://www.tshaonline.org/handbook/entries/annetta-tx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Texas State Historical Association handbook
            </a>
            . Parker County Master Gardeners keep the monarch waystation at Town Hall — civic landscape, not a private
            Deer Creek backyard.
          </p>
          <p>
            Outdoor watering follows Annetta{' '}
            <a
              href="https://www.annettatx.org/water-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Conservation
            </a>
            {' '}
            guidance and the current drought notice listed with town{' '}
            <a
              href="https://www.annettatx.org/ordinances"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              ordinances
            </a>
            {' '}
            (Ordinance 239). New irrigation work may go through{' '}
            <a
              href="https://www.annettatx.org/permits-platting"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Permits &amp; Platting
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
            {' '}
            and groundwater context from the{' '}
            <a
              href="https://uppertrinitygcd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Upper Trinity Groundwater Conservation District
            </a>
            . This is Town of Annetta well water — not Weatherford Municipal Utilities, not City of Aledo, and not a
            Hudson Oaks inverted calendar. Town Hall gardens and Annetta Elementary are civic Annetta access — not a
            reason to treat every plat as park-edge or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Annetta?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
