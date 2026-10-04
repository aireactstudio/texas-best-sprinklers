import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function BrockPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Weatherford"
      citySlug="weatherford"
      neighborhoodName="Brock"
      canonicalUrl="https://sprinkleranddrains.com/weatherford/brock"
      pageTitle="Brock Sprinkler Repair & Drainage in Weatherford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Town of Brock acreage and newer plats on Parker County SUD water in ZIP 76087. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Brock Sprinkler Repair & Drainage"
      heroDescription="The Town of Brock is its own Parker County city on FM 1189 and FM 1543 — ranch acreage, newer plats such as Brock Crossing and Valley Spring, and school-zone clay around Eagle Spirit Lane — not the Weatherford courthouse square and not Hudson Oaks. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set for Parker County SUD last-digit watering, not a Weatherford even/odd clock."
      introHeading="Parker County SUD acreage needs a last-digit clock, not a Weatherford even/odd guess"
      intro={
        <>
          <p>
            Brock is a separate Type C general-law town. Voters incorporated it in November 2016. It is not a
            Weatherford subdivision, not Millsap, and not an I-20 wholesale city. The settlement started as Olive
            Branch in the 1870s; John Henry Brock and Willie Brannon built a gin and mill near Grissom Springs around
            1880, and the post office later took the Brock name. Town offices list 2491 FM 1189, Suite 400, with a
            Weatherford mailing ZIP of 76087, so many listings still say Weatherford even when the meter is Parker
            County Special Utility District. Daily traffic follows FM 1189 past Brock Elementary at 3000 FM 1189 and
            the Brock ISD campus cluster on Eagle Spirit Lane, Grindstone Road, and Pritchard Lane. Older ranch pads
            sit next to newer plats the town has actually approved — Brock Crossing, Valley Spring, Eagle Air Parc,
            Rio Brazos Ranch, and The Brock Place Addition at 1433 FM 1189. Streets we use to describe those lots
            include FM 1189, FM 1543, Eagle Spirit Lane, Grindstone Road, Pritchard Lane, Olive Branch Road, Quanah
            Hill Road, Young Bend Road, and Lazy Bend Road. That mix is the irrigation problem: a controller copied
            from Downtown Weatherford assumes twice-weekly even/odd city water, while Brock bills through PCSUD and
            currently follows a last-digit, once-a-week Stage I calendar. A clock that treats a Quanah Hill acre the
            same as a compact South Main pad will soak the bar ditch while a shaded Grindstone side yard stays brown.
            Extra spray just adds runoff toward septic fields and creek grade that already sit on the same clay.
            Realtor pages sometimes lump this town with Weatherford, Millsap, or Hudson Oaks. This page is Town of
            Brock lots only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Brock as part of our Weatherford and Parker County
            work. We are a licensed irrigator (LI22462). Brock does not run a municipal water plant like Weatherford
            Municipal Utilities. Most addresses sit on{' '}
            <a
              href="https://www.parkercountywater.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Parker County Special Utility District
            </a>
            {' '}
            — the successor to the 1974 rural water supply corporation that was organized to serve Brock, Dennis,
            Greenwood, and nearby Millsap. PCSUD blends Greenwood wells, a reverse-osmosis plant, and treated water
            purchased from Mineral Wells. That is not Fort Worth wholesale and it is not an Annetta town-well clock.
            Stage I rationing on the district site assigns one watering day from the last digit of the physical
            address, bans spray from 10 a.m. to 6 p.m., and keeps Sunday off. We do not copy Weatherford
            even-Wednesday, Hudson Oaks inverted, Willow Park, Aledo, or Annetta calendars onto an Eagle Spirit or
            Olive Branch controller. District notices have also flagged pressure changes while a new elevated storage
            tank comes online — leftover misting or a dry strip can follow a pressure swing even when the day is
            correct. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. New construction and visible site work
            go through the town&apos;s{' '}
            <a
              href="https://www.townofbrocktx.gov/1236/Apply-for-a-Permit"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Apply for a Permit
            </a>{' '}
            process and Planning &amp; Zoning. We do not claim a count of jobs on FM 1189, Eagle Spirit Lane,
            Grindstone Road, or Olive Branch Road, and we do not treat Brock ISD turf, the community hall at 2115 FM
            1189, or Brock Cemetery as a substitute for diagnosing a private yard. We walk zones, keep spray off
            drives, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Brock is Parker County SUD water — Greenwood wells, an RO plant, and Mineral Wells treated water — not Weatherford Municipal Utilities and not Fort Worth wholesale. Copying a courthouse-square even/odd clock is the wrong starting point.',
        'Ranch acres on Quanah Hill, Young Bend, and Lazy Bend throw leftover spray farther than a compact square lot, while newer Brock Crossing and Valley Spring fronts are judged from the street.',
        'FM 1189 and Eagle Spirit Lane sit in Brock ISD school-zone traffic. Tilted heads and dry strips show because parents notice the campus corridor every weekday.',
        'Do not confuse this town with Downtown Weatherford, Hudson Oaks, Willow Park, Aledo, Annetta, or Millsap. Town offices are 2491 FM 1189, Suite 400, ZIP 76087.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along FM 1189, Eagle Spirit Lane, Grindstone Road, and Olive Branch Road.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on larger Brock lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit the current PCSUD Stage I last-digit day — not a copied Weatherford calendar.',
        'Drainage planning for patio lows, septic-side saturation, and runoff that follows creek and bar-ditch grade after storms on ranch clay.',
        'Outdoor lighting repair and additions for entries and drives that stay visible on the way to the ISD campuses without changing the rural street character.'
      ]}
      localTips={[
        'Confirm the current PCSUD Stage I notice before you pick watering days. Brock does not publish the same even-Wednesday calendar Weatherford uses.',
        'Use the last digit of the physical address for the assigned day, skip 10 a.m. to 6 p.m., and leave Sunday off unless the district notice changes.',
        'Use shorter cycle-and-soak windows so Brock clay can absorb water instead of sending it across FM 1189, a bar ditch, or toward a septic field.',
        'Ask whether a newer plat already waters a common front. A house-only clock on Brock Crossing or Valley Spring should not copy that runtime.',
        'If spray suddenly mists or a zone goes weak, check whether PCSUD has posted a pressure-transition notice for the elevated tank — do not just add runtime.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and acreage clocks on Quanah Hill often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'School-corridor curb appeal on FM 1189',
          description:
            'Eagle Spirit Lane, Grindstone Road, and the elementary frontage sit in weekday campus traffic. Tilted heads, misting, and dry strips show because the street view is part of daily Brock life. We match nozzles and cut overspray without inventing a Downtown Weatherford no-HOA scope.'
        },
        {
          title: 'PCSUD last-digit rules, not a Weatherford even/odd guess',
          description:
            'Most Brock meters sit on Parker County SUD. Stage I is once a week by address digit, with a 10 a.m.–6 p.m. ban and Sunday off. We set Brock controllers for the current district notice, not Weatherford Municipal Utilities and not Hudson Oaks inverted days.'
        },
        {
          title: 'Ranch acres next to newer plats',
          description:
            'Quanah Hill and Young Bend pads throw leftover spray farther than a compact square lot, while Brock Crossing and Valley Spring fronts are closer to the curb. One long cycle floods the ditch while a shaded Olive Branch or Lazy Bend corner stays brown. This is not Town Creek historic-pad drainage.'
        },
        {
          title: 'Foundation drip, septic-side clay, and SUD pressure',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water next to septic fields. District pressure changes can show up as misting — civic ISD turf is not a private Brock backyard.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Brock street photo'
        },
        {
          src: '/assets/images/optimized/drainage-weatherford.png',
          alt: 'Drainage work from a Texas Best Sprinklers Weatherford-area project',
          caption: 'Drainage work — Weatherford-area project photo, not a named Brock street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Brock',
        title: 'The sunny FM 1189 front looked wet while a shaded Grindstone corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Weatherford-hub / nearby DFW service — not a named Brock street, and not work at Brock ISD campuses, the community hall at 2115 FM 1189, or Brock Cemetery.',
        body: 'A common Brock call looks like this: a controller on FM 1189, Eagle Spirit Lane, or Olive Branch Road is still running one long summer cycle, and the day pattern was copied from Weatherford even-Wednesday or Hudson Oaks inverted days. Clay sheds the first pass. Leftover spray hits the bar ditch while a shaded Grindstone or Lazy Bend corner stays brown because canopy grew in after the ranch pad was finished. Across FM 1189, a west-facing strip cooks against pavement and needs drip, not more spray. A newer Brock Crossing or Valley Spring lot may already have a common-area clock that does not match the house meter. Stage I only allows one assigned day from the last address digit, so a leftover twice-weekly program wastes water and can draw a district notice. Pressure swings while PCSUD moves storage onto the new elevated tank can make one zone mist and another go weak. We map which zones the owner actually controls, check the meter against the current PCSUD notice, match nozzles so spray stays off drives, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows on the assigned day rather than a Weatherford even/odd guess. If the low patio is irrigation plus a downspout next to a septic field, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Brock clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 76087 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward FM 1189, Olive Branch Road, and bar ditches. This is not Town Creek historic-pad saturation from Downtown Weatherford — it is ranch and new-plat clay on Parker County SUD that happens to share a Weatherford mailing ZIP.'
        },
        {
          title: 'Heat, ET, and PCSUD controller schedules',
          description:
            'FM 1189 pavement holds heat after sunset, and Stage I already bans spray from 10 a.m. to 6 p.m. House controllers still need the correct last-digit day, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. A Weatherford even-Wednesday clock is not a substitute for the current district notice.'
        },
        {
          title: 'Eagle Spirit school-zone fronts versus Quanah Hill acreage',
          description:
            'Campus-corridor lots on Eagle Spirit Lane and Grindstone Road are judged from weekday traffic, while Quanah Hill, Young Bend, and Lazy Bend pads are larger and more open. Shared runtimes overwater the street strip and starve a shaded Olive Branch pocket. Separate nozzle types and zone timing keep both sides of a Brock lot honest without changing the rural curb look.'
        },
        {
          title: 'Septic drainage, foundation drip, and SUD pressure in Brock',
          description:
            'Many Brock lots still use septic, so extra spray that ponds at a patio is not just a turf problem. Patio lows and downspouts add to clay that already drains slowly toward creek lines. Foundations belong on drip, not another hour of spray. District pressure changes can look like a broken head. Do not confuse this town with Downtown Weatherford, Hudson Oaks, Willow Park, Aledo, Annetta, or Millsap.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Brock site assessment and issue mapping, including FM 1189-facing turf, septic-side lows, and any creek or bar-ditch grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with PCSUD Stage I days, school-corridor curb appeal, and larger-lot overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Brock?',
          answer:
            'Some newer plats such as Brock Crossing and Valley Spring have association rules, and the town says visible grading, lighting, or layout changes should be checked before work starts. New construction and many site improvements go through the town Apply for a Permit page and Planning & Zoning; staff point owners to the Town Manager at (817) 396-5333. Ordinary head and pipe repairs usually stay inside the existing layout. A licensed irrigator (we are LI22462) should design or alter the system. Dig Tess (811) locates public lines; the town does not mark private property. We describe the visible scope before work starts. We do not file city or HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Brock clay, shade, and larger lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Larger Quanah Hill and Young Bend pads need matched nozzles so spray stays off drives, neighbor fences, and septic fields. FM 1189-facing turf often belongs on a shorter throw or drip, not a long rotor cycle copied from a backyard. Confirm the current PCSUD Stage I notice before you pick days — last digit of the address, no 10 a.m.–6 p.m. spray, Sunday off. We do not copy Weatherford even-Wednesday, Hudson Oaks inverted, Willow Park, Aledo, or Annetta calendars onto Brock SUD meters. Do not copy Brock ISD civic irrigation onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, association appearance rules, SUD pressure, septic-side grade, and slope toward bar ditches change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Brock?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. District pressure questions, HOA notice, wiring faults, or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Brock watering rules here?',
          answer:
            'Confirm the current Stage I notice on parkercountywater.com before you change days. PCSUD assigns one watering day from the last digit of the physical address (0 Monday, 1 Tuesday, 2–3 Wednesday, 4–5 Thursday, 6–7 Friday, 8–9 Saturday), bans outside watering from 10 a.m. to 6 p.m., and keeps Sunday off. We program start times that match that notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into ditches. Always confirm the latest district notice before changing days yourself — do not copy a Weatherford or Hudson Oaks calendar.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Downtown Weatherford',
          description:
            'Courthouse-square historic pads in ZIP 76086 — a different city utility and a compact-lot problem, not Brock acreage on Parker County SUD.',
          link: '/weatherford/downtown'
        },
        {
          name: 'Hudson Oaks',
          description:
            'Parker County city on I-20 with Fort Worth wholesale water and inverted odd/even days. Not a Brock last-digit SUD clock.',
          link: '/weatherford/hudson-oaks'
        },
        {
          name: 'Willow Park',
          description:
            'I-20 city with Fort Worth wholesale blended through the El Chico tank. Shares a 76087 mailing ZIP on some listings — not Town of Brock SUD water.',
          link: '/weatherford/willow-park'
        },
        {
          name: 'Aledo',
          description:
            'Parker County city on City of Aledo / Fort Worth wholesale water. Aledo ISD is not the same as Brock ISD campuses on Eagle Spirit Lane.',
          link: '/weatherford/aledo'
        },
        {
          name: 'Annetta',
          description:
            'Town groundwater lots in ZIP 76008. Annetta well plants are not a substitute for diagnosing FM 1189 on Parker County SUD.',
          link: '/weatherford/annetta'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on larger Brock clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on FM 1189 and Eagle Spirit Lane fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, septic-side ponding, and runoff that moves toward bar ditches after storms.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Town of Brock',
          url: 'https://www.townofbrocktx.gov/',
          description:
            'Town offices at 2491 FM 1189, Suite 400, are the official source for agendas, ordinances, and permits — and the civic neighbor to the private lots this page is about.'
        },
        {
          name: 'Brock Community Center',
          url: 'https://www.townofbrocktx.gov/1251/Brock-Community-Center-Info',
          description:
            'The hall at 2115 FM 1189 is a community gathering spot the town lists but does not own. Civic parking-lot turf is not a private Brock backyard.'
        },
        {
          name: 'Brock Cemetery',
          url: 'https://www.townofbrocktx.gov/1255/Brock-Cemetery-Info',
          description:
            'The 1880 Maddux-donated cemetery on the FM 1543 side of town is volunteer-run. Historic grounds, not a reason to skip diagnosing Olive Branch Road drainage.'
        },
        {
          name: 'Brock ISD',
          url: 'https://www.brockisd.net/',
          description:
            'District offices at 410 Eagle Spirit Lane and campuses on FM 1189, Grindstone, and Pritchard. School-zone traffic is why tilted heads get noticed — still not a campus irrigation contract.'
        },
        {
          name: 'Parker County SUD watering schedule',
          url: 'https://parkercountywater.com/location',
          description:
            'Stage I last-digit days, the 10 a.m.–6 p.m. ban, and current pressure notices live on the district site. Civic guidance for SUD customers — not a private-yard substitute.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in the Town of Brock is tied to{' '}
            <a
              href="https://www.townofbrocktx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Brock
            </a>
            {' '}
            government on FM 1189, campuses in{' '}
            <a
              href="https://www.brockisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Brock ISD
            </a>
            , and the volunteer{' '}
            <a
              href="https://www.townofbrocktx.gov/1255/Brock-Cemetery-Info"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Brock Cemetery
            </a>
            {' '}
            that James and Sarah Maddux helped start in 1880. The town&apos;s own{' '}
            <a
              href="https://www.townofbrocktx.gov/1196/Discover-Brock"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Discover Brock
            </a>
            {' '}
            history — Olive Branch, Grissom Springs, and the 2016 incorporation — sits next to the{' '}
            <a
              href="https://www.tshaonline.org/handbook/entries/brock-tx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Texas State Historical Association handbook
            </a>
            . Families use the{' '}
            <a
              href="https://www.townofbrocktx.gov/1251/Brock-Community-Center-Info"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Brock Community Center
            </a>
            {' '}
            at 2115 FM 1189 for gatherings; the town notes it does not own or manage that hall.
          </p>
          <p>
            Outdoor watering follows{' '}
            <a
              href="https://parkercountywater.com/location"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Parker County SUD Stage I
            </a>
            {' '}
            days and the current district notice, not Weatherford Municipal Utilities. New site work may go through{' '}
            <a
              href="https://www.townofbrocktx.gov/1236/Apply-for-a-Permit"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Apply for a Permit
            </a>
            {' '}
            and{' '}
            <a
              href="https://www.townofbrocktx.gov/1266/Planning-Zoning-Committee"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Planning &amp; Zoning
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
            and district background on the{' '}
            <a
              href="https://www.parkercountywater.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              PCSUD about page
            </a>
            . This is Town of Brock on Parker County SUD — not Weatherford even-Wednesday, not Hudson Oaks inverted
            days, and not Annetta groundwater. Brock ISD turf and the community hall are civic access — not a reason
            to treat every plat as park-edge or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Brock?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
