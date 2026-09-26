import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');

export default function DowntownWeatherfordPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Weatherford"
      citySlug="weatherford"
      neighborhoodName="Downtown Weatherford"
      canonicalUrl="https://sprinkleranddrains.com/weatherford/downtown"
      pageTitle="Downtown Weatherford Sprinkler Repair & Drainage in Weatherford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Downtown Weatherford lots around the Parker County Courthouse square. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Downtown Weatherford Sprinkler Repair & Drainage"
      heroDescription="Downtown Weatherford is the courthouse-square district in ZIP 76086 — storefronts on the square and compact historic lots a block off South Main — not a Hudson Oaks HOA plat and not rural well acreage west of town. Clay, mature shade, and Town Creek grades need cycle-and-soak irrigation, drip at brick foundations, and drainage that stays on the lot."
      introHeading="Courthouse-square clay and shade need a different clock than an Aledo acre"
      intro={
        <>
          <p>
            Downtown Weatherford is the original Parker County seat around the limestone courthouse at 1 Courthouse Square.
            City Hall sits at 303 Palo Pinto Street. The streets that actually ring the square are Palo Pinto Street, York
            Avenue, Church Street, Waco Street, and Main Street. One block off the square, South Main, North Main, West
            Church, and West Lee hold brick bungalows, early-twentieth-century houses, and a few commercial courtyards on
            compact clay pads. That mix is the irrigation problem: a controller that treats a storefront planter like a
            quarter-acre lawn will soak the sidewalk on York while a shaded South Main side yard stays brown. Mature pecans
            and oaks throw deep shade next to west-facing turf that bakes against courthouse-square pavement. Town Creek
            already carries stormwater south toward Holland Lake Park at 1419 Holland Lake Road. Extra spray just adds
            runoff toward Santa Fe Drive, Jack Borden Way, and the trail corridor. Realtor pages sometimes lump this district
            with Hudson Oaks or Aledo. This page is the courthouse-square and near-square residential blocks only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Downtown Weatherford as part of our Weatherford and Parker
            County work. We are a licensed irrigator (LI22462). Weatherford Municipal Utilities updated its Water
            Conservation and Drought Contingency Plan on April 9, 2024, and kept a year-round outdoor watering schedule:
            no sprinkler irrigation Monday; residential even addresses Wednesday and Saturday; odd addresses Thursday and
            Sunday; apartments, businesses, churches, parks, and other non-residential meters Tuesday and Friday; and no
            outdoor watering with sprinklers between 10 a.m. and 6 p.m. any day. Foundation soaker or drip within 24 inches
            of the slab may run up to two hours without spraying above ground. Most downtown listings show no HOA, so the
            house or shop controller is the only clock on the lot. We program that clock for the current city notice and
            follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. We do not claim a count of jobs on Palo Pinto
            Street or South Main, and we do not treat Chandor Gardens or courthouse-square civic irrigation as a substitute
            for diagnosing a private yard. We walk zones, keep spray off walks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Storefront planters and amenity strips on the square sit against heat-island pavement, so they brown or pond on the same clock that would look fine on a Willow Park lot.',
        'Compact historic pads a block off South Main and West Church throw leftover spray onto walks and neighbor fences faster than a typical Parker County acre.',
        'There is usually no HOA watering the front. The house or shop controller has to follow Weatherford’s year-round days on its own — unlike newer Hudson Oaks subdivisions.',
        'Do not confuse this district with Hudson Oaks, Willow Park, Aledo acreage, or rural well properties west of town. Downtown Weatherford is the 76086 courthouse-square core next to Town Creek.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along South Main, West Church, and near-square side yards.',
        'Drip conversion at foundation beds, street trees, and storefront planters so brick and limestone stop getting hit by leftover spray.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit Weatherford’s Monday-off, twice-a-week calendar and 10 a.m.–6 p.m. ban.',
        'Drainage planning for patio lows, alley grades, and runoff that follows Town Creek toward Holland Lake Park and Heritage Park after storms.',
        'Outdoor lighting repair and additions for entries and walks that stay visible on the way to the square without changing the historic street character.'
      ]}
      localTips={[
        'Confirm whether the meter is residential or non-residential before you pick days. A shop or apartment on the square is Tuesday and Friday, not Wednesday/Saturday.',
        'Use shorter cycle-and-soak windows so Downtown Weatherford clay can absorb water instead of sending it across York Avenue sidewalks or toward Town Creek.',
        'Walk zones after mowing and after First Monday weekends. Heads along the square get kicked, buried, or tilted by foot traffic and parking.',
        'Keep spray off walks, drives, and neighboring lots. City rules prohibit irrigation that runs off or pools on streets and parking lots.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and a controller still on August wastes water in October.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without an HOA watering the front',
          description:
            'Most Downtown Weatherford lots have no association irrigation. Tilted heads, misting, and dry strips show on South Main and West Church because the owner owns the whole street view. We match nozzles and cut overspray without inventing an HOA scope that is not there.'
        },
        {
          title: 'Weatherford Municipal Utility days, not a Tarrant guess',
          description:
            'Year-round irrigation is banned from 10 a.m. to 6 p.m. Monday is off. Even houses water Wednesday and Saturday; odd houses Thursday and Sunday; businesses and common areas Tuesday and Friday. We set Downtown Weatherford controllers for the current city notice, not a Fort Worth or Hudson Oaks calendar.'
        },
        {
          title: 'Historic clay pads next to courthouse-square heat',
          description:
            'Compact 76086 lots and mature shade are the Downtown Weatherford challenge. One long cycle floods the neighbor walk while a sunny planter on Palo Pinto cooks. This is not a rural well-pressure problem and not a new-subdivision rotor problem.'
        },
        {
          title: 'Foundation drip and Town Creek drainage',
          description:
            'Brick and limestone do better on drip than leftover spray. City rules already allow foundation soaker or drip within 24 inches of the slab. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water headed toward Town Creek, Holland Lake, and Heritage Park.'
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
                'As a property manager, I have worked with many irrigation companies. Texas Best Sprinklers is professional and reliable, and their controller work has cut water waste.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Downtown Weatherford street photo'
        },
        {
          src: '/assets/images/optimized/drainage-weatherford.png',
          alt: 'Drainage work from a Texas Best Sprinklers Weatherford-area project',
          caption: 'Drainage work — Weatherford-area project photo, not a named downtown street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Downtown Weatherford',
        title: 'The square-side planter looked wet while a shaded South Main corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Weatherford / nearby DFW service — not a named Downtown Weatherford street, and not work at Chandor Gardens, the courthouse, or Holland Lake Park.',
        body: 'A common Downtown Weatherford call looks like this: a controller on South Main or West Church is still running one long summer cycle. Clay sheds the first pass. Leftover spray hits the sidewalk, which Weatherford treats as wasteful runoff, while a shaded corner toward Town Creek stays brown because canopy grew in after the historic pad was finished. Across the square, a storefront planter on Palo Pinto or York cooks against pavement and needs drip, not more spray. There is no HOA front system to hide the stripes. The clock may still be watering Monday or running through the 10 a.m.–6 p.m. window. We map which zones the owner actually controls, check whether the meter is residential or a shop, match nozzles so spray stays off walks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows that fit city hours and even/odd days. If the low patio is irrigation plus a downspout, we talk through drainage instead of adding spray that will run toward Santa Fe Drive, Heritage Park, and Holland Lake. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Downtown Weatherford clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 76086 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward York Avenue sidewalks, alley gravel, and Town Creek. This is not lake-edge saturation from Lake Weatherford — it is historic clay on compact pads that happen to sit next to the square.'
        },
        {
          title: 'Heat, ET, and Downtown Weatherford controller schedules',
          description:
            'Courthouse-square pavement holds heat after sunset, and the city bans sprinkler irrigation from 10 a.m. to 6 p.m. every day. House-only and shop controllers still need seasonal programs, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October.'
        },
        {
          title: 'Historic-lot shade versus square heat in Downtown Weatherford',
          description:
            'Pecans and oaks a block off South Main create deep shade next to a west-facing strip that bakes against the square. Shared runtimes overwater the shade pocket and starve the sunny planter. Separate nozzle types and zone timing keep both sides of a Downtown Weatherford lot honest without changing the historic street view.'
        },
        {
          title: 'Town Creek drainage and foundation drip in Downtown Weatherford',
          description:
            'Town Creek already moves stormwater from the Chamber trailhead at 401 Fort Worth Highway toward Holland Lake Park. Patio lows and downspouts on near-square lots add to that path. Brick and limestone foundations belong on drip or soaker within 24 inches of the slab — which Weatherford already allows any day — not another hour of spray. Do not confuse this district with Hudson Oaks, Willow Park, or Aledo acreage.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Downtown Weatherford site assessment and issue mapping, including square-facing planters and any Town Creek-side grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Weatherford watering days, historic curb appeal, and close-lot overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Downtown Weatherford?',
          answer:
            'Most Downtown Weatherford listings show no HOA, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout and do not need association review. If your deed or a downtown overlay has a restriction, check it before changing visible piping or lighting. New irrigation system installations typically go through City of Weatherford Development Services / residential permitting, and a licensed irrigator (we are LI22462) should design or alter the system. Ordinary head and pipe repairs usually do not need a new-system permit. We describe the visible scope before work starts. We do not file city applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Downtown Weatherford clay, shade, and square-facing lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds and storefront planters. Tight South Main and West Church lots need short throw so spray stays off walks and neighbor fences. Square-facing planters often belong on drip, not rotors. Program around Weatherford’s year-round 10 a.m.–6 p.m. ban. Even addresses water Wednesday and Saturday; odd addresses Thursday and Sunday; shops and common areas Tuesday and Friday; Monday is off. Do not copy a Hudson Oaks HOA calendar or Holland Lake Park days onto a house clock.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot width, and slope toward Town Creek change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Downtown Weatherford?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Parking on the square, alley access, and wiring faults or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Weatherford watering rules here?',
          answer:
            'The city’s April 9, 2024, conservation plan keeps a year-round twice-a-week schedule. Sprinkler irrigation is prohibited between 10 a.m. and 6 p.m. Monday is a no-irrigation day. Residential even addresses water Wednesday and Saturday; odd addresses Thursday and Sunday. Apartments, businesses, churches, parks, and other non-residential meters water Tuesday and Friday. Foundation soaker or drip within 24 inches of the slab may run up to two hours without spraying above ground. Runoff onto streets and parking lots is prohibited. We program start times and day patterns that match the current city notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into walks. Always confirm the latest Weatherford Utilities notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Hudson Oaks',
          description:
            'Nearby Parker County city east of Weatherford — a different municipal water calendar and usually an HOA street view, not this courthouse-square district.',
          link: '/weatherford/hudson-oaks'
        },
        {
          name: 'Willow Park',
          description:
            'Parker County city along I-20 toward Fort Worth. Larger lots and a different city utility — not Downtown Weatherford’s compact historic pads.',
          link: '/weatherford'
        },
        {
          name: 'Aledo',
          description:
            'Southeast Parker County acreage and newer tracts. Irrigation here is not a substitute for diagnosing a South Main or Palo Pinto lot.',
          link: '/weatherford'
        },
        {
          name: 'Brock',
          description:
            'Rural Parker County community west of Weatherford. Well pressure and open acreage are a different problem than courthouse-square clay.',
          link: '/weatherford'
        },
        {
          name: 'Annetta',
          description:
            'Small Parker County city south of I-20. We serve it from Weatherford — it is not a Downtown Weatherford street.',
          link: '/weatherford'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on compact historic Downtown Weatherford lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and planter drip so brick and limestone stop getting soaked by leftover spray on the square and South Main.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Town Creek, Heritage Park, and Holland Lake.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Holland Lake Park',
          url: 'https://weatherfordtx.gov/461/Holland-Lake-Park',
          description:
            'Forty-acre city park at 1419 Holland Lake Road and a Town Creek trailhead. Useful stormwater context south of the square — not a private Downtown Weatherford amenity and not Lake Weatherford.'
        },
        {
          name: 'Heritage Park — Friendship Playground',
          url: 'https://www.weatherfordtx.gov/3014/Heritage-Park---Friendship-Playground',
          description:
            'City playground at 379 Jack Borden Way next to the Town Creek trail, dog park, and amphitheater. First Monday event grounds sit in this civic park cluster, not on a South Main residential lot.'
        },
        {
          name: 'Town Creek Hike & Bike Trail',
          url: 'https://weatherfordtx.gov/1240/Town-Creek-Hike-Bike-Trail',
          description:
            'A 4.34-mile paved trail opened in 2011, with trailheads at 401 Fort Worth Highway, 801 Santa Fe Drive, Holland Lake Park, and Bose Ikard Elementary. The creek corridor that downtown runoff already follows.'
        },
        {
          name: 'Weatherford Public Library',
          url: 'https://weatherfordtx.gov/142/Library',
          description:
            'City library at 1014 Charles Street, a short drive south of the courthouse on South Main, then Russell to Charles. A regular stop for Weatherford ISD families — not a reason to ignore patio drainage on West Church.'
        },
        {
          name: 'City of Weatherford',
          url: 'https://www.weatherfordtx.gov/',
          description:
            'City Hall at 303 Palo Pinto Street sits on the square. The official source for utilities, parks, and permits — and the civic neighbor to the private lots this page is about.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Downtown Weatherford is tied to the{' '}
            <a
              href="https://www.weatherfordtx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Weatherford
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
            , and the{' '}
            <a
              href="https://weatherfordtx.gov/142/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Weatherford Public Library
            </a>{' '}
            on Charles Street. Families also use{' '}
            <a
              href="https://weatherfordtx.gov/461/Holland-Lake-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Holland Lake Park
            </a>
            ,{' '}
            <a
              href="https://www.weatherfordtx.gov/3014/Heritage-Park---Friendship-Playground"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Heritage Park
            </a>
            , and the{' '}
            <a
              href="https://weatherfordtx.gov/1240/Town-Creek-Hike-Bike-Trail"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town Creek Hike &amp; Bike Trail
            </a>
            . Chandor Gardens on West Lee Avenue is a city-owned historic garden in the same district — civic landscape, not a private South Main backyard.
          </p>
          <p>
            Outdoor watering follows Weatherford’s{' '}
            <a
              href="https://www.weatherfordtx.gov/1478/Water-Conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Conservation
            </a>{' '}
            schedule and the posted{' '}
            <a
              href="https://weatherfordtx.gov/1479/Conservation-Stages/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              conservation stages
            </a>
            . New work may go through{' '}
            <a
              href="https://www.weatherfordtx.gov/3657/Residential"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Residential permitting
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
            . This is Parker County municipal water, not a Tarrant Regional Water District suburb. Town Creek and Holland Lake
            are civic Weatherford access — not a reason to treat every downtown lot as waterfront or to ignore drip at
            foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Downtown Weatherford?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
