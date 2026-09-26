import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function HudsonOaksPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Weatherford"
      citySlug="weatherford"
      neighborhoodName="Hudson Oaks"
      canonicalUrl="https://sprinkleranddrains.com/weatherford/hudson-oaks"
      pageTitle="Hudson Oaks Sprinkler Repair & Drainage in Weatherford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Hudson Oaks lots along I-20 east of Weatherford. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Hudson Oaks Sprinkler Repair & Drainage"
      heroDescription="Hudson Oaks is its own Parker County city in ZIP 76087 — Red Eagle, Diamond Oaks, Parker Oaks, Enchanted Oaks, and Red Oak Hills clay lots split by I-20 — not the Weatherford courthouse square and not Willow Park. Those plats need cycle-and-soak irrigation, drip at foundations, and a controller set to Hudson Oaks days, not a Weatherford even/odd clock."
      introHeading="I-20 clay lots need Hudson Oaks watering days, not a courthouse-square clock"
      intro={
        <>
          <p>
            Hudson Oaks is a separate city founded in 1978 between Weatherford and Willow Park, not a Weatherford
            subdivision. Interstate 20 splits the city north and south. City Hall and Gene L. Voyles Park sit together at
            210 Hudson Oaks Drive. The residential plats that actually make up the city are Red Eagle, Diamond Oaks,
            Parker Oaks, Enchanted Oaks, and Red Oak Hills. The streets we use to describe those lots are Parker Oaks
            Lane, Diamond Oaks Drive, Red Eagle Trail, North and South Lakeshore Drive, North Oakridge Drive, Inspiration
            Drive, Newell Drive, and Shannon Drive. Mary Martin Elementary is at 719 North Oakridge Drive. A city
            multimodal trail ties Lakeshore and Inspiration toward that campus. That mix is the irrigation problem: a
            controller copied from Downtown Weatherford will water the wrong days, and a clock that treats a Parker Oaks
            half-acre like a compact South Main pad will soak the street while a shaded Oakridge side yard stays brown.
            Larger custom lots sit next to HOA-visible fronts and I-20 / Fort Worth Highway heat. Extra spray just adds
            runoff toward Inspiration Drive, Oakridge, and the same Gene Voyles Park drainage the city is already
            planning to rebuild. Realtor pages sometimes lump this city with Weatherford or Willow Park. This page is
            Hudson Oaks plats only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Hudson Oaks as part of our Weatherford and Parker
            County work. We are a licensed irrigator (LI22462). Hudson Oaks bills its own utility customers — it is not
            Weatherford Municipal Utilities. The city finished a Fort Worth wholesale surface-water connection in 2023
            and switched disinfection to chloramine on January 13, 2023. Stage 1 of the Hudson Oaks conservation plan
            limits outdoor irrigation to two days a week, bans watering on Mondays, and prohibits irrigation from 10 a.m.
            to 6 p.m. on watering days. Residential odd addresses water Wednesday and Saturday. Even addresses water
            Thursday and Sunday. That pairing is the reverse of Weatherford’s even-Wednesday / odd-Thursday calendar.
            Commercial and governmental meters use Tuesday and Friday. The city also offers a Smart Irrigation rebate of
            up to $200 for an approved weather-based controller with flow or pressure control. We program the house or
            HOA clock for the current Hudson Oaks notice and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. We do not claim a count of jobs on Parker
            Oaks Lane, Diamond Oaks Drive, or Red Eagle Trail, and we do not treat Gene Voyles Park civic irrigation as a
            substitute for diagnosing a private yard. We walk zones, keep spray off walks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Hudson Oaks odd addresses water Wednesday and Saturday; even addresses Thursday and Sunday. Copying a Weatherford even-Wednesday clock waters the wrong days here.',
        'Red Eagle, Diamond Oaks, Parker Oaks, Enchanted Oaks, and Red Oak Hills lots are larger than courthouse-square pads, so leftover spray travels farther before clay absorbs it.',
        'Many plats have an HOA or deed-restriction street view. Tilted heads and dry strips show on Oakridge, Lakeshore, and Parker Oaks Lane because the association notices the front.',
        'Do not confuse this city with Downtown Weatherford, Willow Park, Aledo acreage, or Annetta. Hudson Oaks is the 76087 I-20 city with its own utility and Gene Voyles Park at City Hall.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Parker Oaks Lane, Diamond Oaks Drive, and Oakridge Drive.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on larger Hudson Oaks lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit Hudson Oaks Stage 1 days and the 10 a.m.–6 p.m. ban.',
        'Drainage planning for patio lows, I-20-side grade, and runoff that follows Inspiration Drive and Oakridge toward Gene Voyles Park after storms.',
        'Outdoor lighting repair and additions for entries and walks that stay visible on the way to City Hall without changing HOA street character.'
      ]}
      localTips={[
        'Confirm the last digit of the street number before you pick days. Hudson Oaks odd houses are Wednesday/Saturday — the reverse of Weatherford even houses.',
        'Use shorter cycle-and-soak windows so Hudson Oaks clay can absorb water instead of sending it across Lakeshore, Oakridge, or toward the trail at Inspiration Drive.',
        'Ask whether the HOA already waters the front. A house-only clock should not copy common-area Tuesday/Friday days, and a common meter should not copy the house.',
        'Keep spray off walks, drives, and neighboring lots. Stage 1 already treats daytime irrigation as waste, and runoff just loads the city’s stormwater fee work.',
        'Ask Public Works about the Smart Irrigation rebate before you buy a controller. The city inspects weather-based units with flow or pressure control and credits up to $200 on the water bill.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and a controller still on August wastes Fort Worth wholesale water in October.'
      ]}
      trustCards={[
        {
          title: 'HOA curb appeal on I-20 plats',
          description:
            'Many Hudson Oaks fronts are association-visible. Tilted heads, misting, and dry strips show on Parker Oaks Lane and Diamond Oaks Drive because the street view is part of the plat, not a hidden backyard. We match nozzles and cut overspray without inventing a Downtown Weatherford no-HOA scope.'
        },
        {
          title: 'Hudson Oaks days, not a Weatherford guess',
          description:
            'Stage 1 bans watering Monday and from 10 a.m. to 6 p.m. Odd houses water Wednesday and Saturday; even houses Thursday and Sunday; shops and government meters Tuesday and Friday. We set Hudson Oaks controllers for the current city notice, not Weatherford Municipal Utilities.'
        },
        {
          title: 'Larger clay lots next to I-20 heat',
          description:
            'Half-acre and larger pads in Parker Oaks and Red Eagle throw leftover spray farther than a compact square lot. One long cycle floods the curb while a shaded Oakridge corner stays brown. This is not Town Creek historic-pad drainage and not a Willow Park well-pressure problem.'
        },
        {
          title: 'Foundation drip and Gene Voyles drainage',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water headed toward Inspiration Drive, Oakridge, and Gene Voyles Park — where the city’s own park master plan already lists drainage as Phase 1 work.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Hudson Oaks street photo'
        },
        {
          src: '/assets/images/optimized/drainage-weatherford.png',
          alt: 'Drainage work from a Texas Best Sprinklers Weatherford-area project',
          caption: 'Drainage work — Weatherford-area project photo, not a named Hudson Oaks street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Hudson Oaks',
        title: 'The sunny Parker Oaks front looked wet while a shaded Oakridge corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Weatherford-hub / nearby DFW service — not a named Hudson Oaks street, and not work at Gene Voyles Park, City Hall, or Mary Martin Elementary.',
        body: 'A common Hudson Oaks call looks like this: a controller on Parker Oaks Lane or Diamond Oaks Drive is still running one long summer cycle, and the day pattern was copied from Weatherford. Clay sheds the first pass. Leftover spray hits the curb, which Stage 1 already treats as wasted outdoor water, while a shaded corner toward Oakridge or Lakeshore stays brown because canopy grew in after the pad was finished. Across I-20, a west-facing strip along Fort Worth Highway cooks against pavement and needs drip, not more spray. An HOA may already water the front on a different meter. The clock may still be watering Monday or running through the 10 a.m.–6 p.m. window. We map which zones the owner actually controls, check whether the meter is residential or commercial, match nozzles so spray stays off walks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows that fit Hudson Oaks odd/even days — odd Wednesday/Saturday, even Thursday/Sunday. If the low patio is irrigation plus a downspout, we talk through drainage instead of adding spray that will run toward Inspiration Drive and Gene Voyles Park. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Hudson Oaks clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 76087 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Lakeshore Drive, Oakridge, and the trail corridor. This is not Town Creek historic-pad saturation from Downtown Weatherford — it is larger-lot clay that happens to sit next to I-20.'
        },
        {
          title: 'Heat, ET, and Hudson Oaks controller schedules',
          description:
            'I-20 and Fort Worth Highway pavement holds heat after sunset, and the city bans irrigation from 10 a.m. to 6 p.m. on watering days. House and HOA controllers still need seasonal programs, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. The city Smart Irrigation rebate is built for that weather-based adjustment.'
        },
        {
          title: 'HOA fronts versus private side yards in Hudson Oaks',
          description:
            'Red Eagle, Diamond Oaks, and Parker Oaks street views are often association-visible, while side and rear yards stay on the house clock. Shared runtimes overwater the HOA strip and starve a shaded Oakridge pocket. Separate nozzle types and zone timing keep both sides of a Hudson Oaks lot honest without changing the plat’s curb look.'
        },
        {
          title: 'Gene Voyles drainage and foundation drip in Hudson Oaks',
          description:
            'The city trail from Lakeshore and Inspiration toward Mary Martin already follows the same grade many north-side lots use after storms. Patio lows and downspouts add to that path toward Gene Voyles Park, where the approved park master plan lists drainage in Phase 1. Foundations belong on drip, not another hour of spray. Do not confuse this city with Downtown Weatherford, Willow Park, or Aledo acreage.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Hudson Oaks site assessment and issue mapping, including I-20-facing turf and any Inspiration Drive or Oakridge grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Hudson Oaks watering days, HOA curb appeal, and larger-lot overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Hudson Oaks?',
          answer:
            'Many Hudson Oaks plats have an HOA or deed restrictions, so check the association before changing visible heads, lighting, or grading even when the repair stays in the existing layout. New construction, mechanical work, and some drainage changes go through the City of Hudson Oaks Camino permitting portal. A licensed irrigator (we are LI22462) should design or alter the system. Ordinary head and pipe repairs usually do not need a new-system permit. We describe the visible scope before work starts. We do not file city or HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Hudson Oaks clay, shade, and larger lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Larger Parker Oaks and Red Eagle pads need matched nozzles so spray stays off walks and neighbor fences. I-20-facing turf often belongs on a shorter throw or drip, not a long rotor cycle copied from a backyard. Program around Hudson Oaks Stage 1: no Monday, no 10 a.m.–6 p.m. Odd addresses water Wednesday and Saturday; even addresses Thursday and Sunday; commercial and government meters Tuesday and Friday. Do not copy a Weatherford even-Wednesday clock or Gene Voyles Park civic days onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, HOA appearance rules, and slope toward Inspiration Drive or Oakridge change price. An on-site quote is required; these figures are planning ranges, not a bid. Ask the city separately about the Smart Irrigation rebate if you are adding a qualifying controller.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Hudson Oaks?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. I-20 access, HOA notice, and wiring faults or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Hudson Oaks watering rules here?',
          answer:
            'Confirm the current Stage 1 notice on the city’s water-restrictions page before you change days. Irrigation is prohibited Monday and between 10 a.m. and 6 p.m. on watering days. Residential odd addresses water Wednesday and Saturday; even addresses Thursday and Sunday. Commercial and governmental properties water Tuesday and Friday. That odd/even pairing is the reverse of Weatherford’s calendar, so a controller copied from South Main will miss legal days here. We program start times and day patterns that match the current Hudson Oaks notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into walks. Always confirm the latest city notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Downtown Weatherford',
          description:
            'Courthouse-square historic pads in ZIP 76086 — a different city utility and the reverse even/odd pairing from Hudson Oaks.',
          link: '/weatherford/downtown'
        },
        {
          name: 'Willow Park',
          description:
            'Parker County city along I-20 toward Fort Worth. Shares the Fort Worth wholesale water story — still a different municipal clock, not a Hudson Oaks plat.',
          link: '/weatherford'
        },
        {
          name: 'Aledo',
          description:
            'Southeast Parker County acreage and newer tracts. Some Hudson Oaks addresses zone Aledo ISD, but Aledo irrigation is not a substitute for diagnosing Parker Oaks Lane.',
          link: '/weatherford'
        },
        {
          name: 'Annetta',
          description:
            'Small Parker County city south of I-20. We serve it from Weatherford — it is not a Hudson Oaks street.',
          link: '/weatherford'
        },
        {
          name: 'Brock',
          description:
            'Rural Parker County community west of Weatherford. Well pressure and open acreage are a different problem than I-20 clay lots.',
          link: '/weatherford'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on larger Hudson Oaks clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on Parker Oaks and Diamond Oaks fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Inspiration Drive, Oakridge, and Gene Voyles Park.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Gene L. Voyles Park',
          url: 'https://www.hudsonoaks.com/News-articles/Gene-L.-Voyles-Park-Master-Plan-Approved-News-Article',
          description:
            'The city’s signature park at 210 Hudson Oaks Drive, next to City Hall. The 2026 master plan starts with drainage — civic landscape, not a private Hudson Oaks backyard.'
        },
        {
          name: 'City of Hudson Oaks — City Hall',
          url: 'https://www.hudsonoaks.com/',
          description:
            'City Hall at 210 Hudson Oaks Drive is the official source for utilities, parks, and permits — and the civic neighbor to the private lots this page is about.'
        },
        {
          name: 'Hudson Oaks Public Works',
          url: 'https://www.hudsonoaks.com/Government/Departments/Public-Works',
          description:
            'Public Works maintains Gene Voyles Park, medians, and the water system that now takes Fort Worth wholesale supply. Useful context for leaks and after-hours water emergencies — not a house-clock substitute.'
        },
        {
          name: 'COHOHO Corridor of Lights',
          url: 'https://www.hudsonoaks.com/Visitors/eventscoho/COHOHO-Corridor',
          description:
            'The city’s December light corridor around Gene Voyles Park. Festival weekends are why tilted heads on Hudson Oaks Drive get noticed — still not a private-yard irrigation job.'
        },
        {
          name: 'Weatherford Public Library',
          url: 'https://weatherfordtx.gov/142/Library',
          description:
            'Hudson Oaks does not run its own library. Families use the Weatherford Public Library at 1014 Charles Street — a nearby civic stop, not a reason to ignore patio drainage on Lakeshore.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Hudson Oaks is tied to the{' '}
            <a
              href="https://www.hudsonoaks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Hudson Oaks
            </a>
            , campuses in{' '}
            <a
              href="https://www.weatherfordisd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Weatherford ISD
            </a>
            {' '}
            (including Mary Martin Elementary on North Oakridge) and, for some addresses,{' '}
            <a
              href="https://www.aledoisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Aledo ISD
            </a>
            . Families also use{' '}
            <a
              href="https://www.hudsonoaks.com/Visitors/Facilities"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              city facilities
            </a>
            , walk Gene Voyles Park next to City Hall, and visit the{' '}
            <a
              href="https://weatherfordtx.gov/142/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Weatherford Public Library
            </a>
            {' '}
            on Charles Street. City history for the 1978 incorporation is on the official{' '}
            <a
              href="https://www.hudsonoaks.com/Government/History-of-Hudson-Oaks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              History of Hudson Oaks
            </a>
            {' '}
            page.
          </p>
          <p>
            Outdoor watering follows Hudson Oaks{' '}
            <a
              href="https://www.hudsonoaks.com/Residents/Utilities/Current-Water-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Current Water Restrictions
            </a>
            {' '}
            and the city’s{' '}
            <a
              href="https://www.hudsonoaks.com/Residents/Utilities"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Utilities
            </a>
            {' '}
            pages, including the{' '}
            <a
              href="https://www.hudsonoaks.com/Residents/Smart-Irrigation-Program"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Smart Irrigation Program
            </a>
            . New work may go through{' '}
            <a
              href="https://www.hudsonoaks.com/Apply-for-a-Permit"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Apply for a Permit
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
            . This is Hudson Oaks municipal water supplied in part by Fort Worth wholesale surface water — not Weatherford
            Municipal Utilities and not a Tarrant suburb clock. Gene Voyles Park is civic Hudson Oaks access — not a
            reason to treat every plat as park-edge or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Hudson Oaks?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
