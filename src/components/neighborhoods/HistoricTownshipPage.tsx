import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function HistoricTownshipPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Grapevine"
      citySlug="grapevine"
      neighborhoodName="Historic Township"
      canonicalUrl="https://sprinkleranddrains.com/grapevine/historic-township"
      pageTitle="Historic Township Sprinkler Repair & Drainage in Grapevine, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Historic Township lots around Grapevine’s original 1854 plat and Main Street. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Historic Township Sprinkler Repair & Drainage"
      heroDescription="Historic Township is Grapevine’s 1854 original plat — South Main storefronts plus compact residential lots east toward Austin, Hudgins, and Jenkins — not a Silver Lake Weekley HOA and not a 1980s Dove Crossing cul-de-sac. Clay, Main Street heat, and Cotton Belt grades need cycle-and-soak irrigation, drip at brick foundations, and drainage that stays on the lot."
      introHeading="Main Street heat and Original Town clay need a different clock than a Dove Loop Weekley lot"
      intro={
        <>
          <p>
            Historic Township is the original Grapevine town laid out in 1854 as about six square blocks in ZIP 76051. City
            zoning still calls this the Historic Grapevine Township (HGT) District, roughly bounded by Northwest Highway,
            Ball Street, the Cotton Belt railroad, Austin Street, and Wood Street. South Main from Northwest Highway to West
            College is the Commercial Historic District. East of Main, between East Wall Street and East College Street, is
            the Original Town Historic District. The streets that actually ring those blocks are Austin, Church, College,
            Franklin, Hall, Hudgins, Jenkins, Leonard, Nash, Texas (the old Morehead Street), and Wall. City Hall sits at
            200 South Main. That mix is the irrigation problem: a controller that treats a South Main planter like a
            quarter-acre Weekley lawn will soak the sidewalk while a shaded Hudgins or Jenkins side yard stays brown.
            Mature pecans and oaks throw deep shade next to west-facing turf that bakes against festival-weekend pavement.
            Extra spray just adds runoff toward the Cotton Belt corridor, Ball Street civic grounds, and the same walks
            visitors use for Main Street Fest. Realtor pages sometimes lump this district with Silver Lake or Dove Crossing.
            This page is the original township and near-Main residential blocks only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Historic Township as part of our Grapevine work. We are a
            licensed irrigator (LI22462). Grapevine prohibits irrigation from 10 a.m. to 6 p.m. year-round, requires rain
            and freeze sensors, and forbids discharging irrigation onto streets, sidewalks, and driveways. When Stage 1 of
            the drought plan is posted, even addresses water Wednesday and Saturday, odd addresses Thursday and Sunday,
            Monday is off, and non-residential or common meters use Tuesday and Friday. Most of the city supply comes from
            the Tarrant Regional Water District, with about 30 percent from Lake Grapevine. Most Historic Township listings
            show no HOA watering the front — the house or shop controller is the only clock on the lot, and the HGT overlay
            still notices visible piping, lighting, and grading changes. We program that clock for the current city notice
            and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. We do not claim a count of jobs on South Main
            or Church Street, and we do not treat Heritage Park or Nash Farm civic irrigation as a substitute for diagnosing
            a private yard. We walk zones, keep spray off walks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Storefront planters and amenity strips on South Main sit against heat-island pavement, so they brown or pond on the same clock that would look fine on a Dove Loop estate lot.',
        'Compact Original Town pads on Hudgins, Jenkins, Austin, and Church throw leftover spray onto walks and neighbor fences faster than a typical Grapevine HOA lawn.',
        'There is usually no HOA watering the front. The house or shop controller has to follow Grapevine’s year-round hours and Stage 1 days on its own — unlike Stone Bridge Oaks fronts.',
        'Do not confuse this district with Silver Lake off Dove Loop, Dove Crossing on Thistlewood, Stone Bridge Oaks on Glade Road, or Meadowmere Park at 3000 Meadowmere Lane. Historic Township is the 1854 core next to the Cotton Belt depot.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Church, College, and near-Main side yards.',
        'Drip conversion at foundation beds, street trees, and storefront planters so historic brick stops getting hit by leftover spray.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit Grapevine’s 10 a.m.–6 p.m. ban and Stage 1 days when they apply.',
        'Drainage planning for patio lows, alley grades, and runoff that follows the Cotton Belt corridor toward Ball Street after storms.',
        'Outdoor lighting repair and additions for entries and walks that stay visible on the way to Main Street without changing the historic street character.'
      ]}
      localTips={[
        'Confirm whether the meter is residential or a shop before you pick Stage 1 days. A storefront on South Main is Tuesday and Friday, not Wednesday/Saturday.',
        'Use shorter cycle-and-soak windows so Historic Township clay can absorb water instead of sending it across Main Street sidewalks or toward the railroad.',
        'Walk zones after mowing and after Main Street Fest weekends. Heads along South Main and Church get kicked, buried, or tilted by foot traffic and parking.',
        'Keep spray off walks, drives, and neighboring lots. Grapevine ordinance prohibits irrigation that discharges onto paved surfaces.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and a controller still on August wastes water in October.'
      ]}
      trustCards={[
        {
          title: 'Historic curb appeal without an HOA watering the front',
          description:
            'Most Historic Township lots have no association irrigation. Tilted heads, misting, and dry strips show on Church Street and South Main because the owner owns the whole street view — and festival visitors walk it. We match nozzles and cut overspray without inventing an HOA scope that is not there.'
        },
        {
          title: 'Grapevine hours, Stage 1 days, and Tarrant supply',
          description:
            'Irrigation is banned from 10 a.m. to 6 p.m. year-round. Rain and freeze sensors are required. When Stage 1 is posted, even houses water Wednesday and Saturday; odd houses Thursday and Sunday; shops and common areas Tuesday and Friday. We set Historic Township controllers for the current city notice, not a Silver Lake HOA calendar.'
        },
        {
          title: 'Original-town clay next to Main Street heat',
          description:
            'Compact 76051 lots and mature shade are the Historic Township challenge. One long cycle floods the neighbor walk while a sunny planter on South Main cooks. This is not a lake-edge problem from Grapevine Lake and not a new-subdivision rotor problem on Dove Loop.'
        },
        {
          title: 'Foundation drip and Cotton Belt drainage',
          description:
            'Historic brick does better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water headed toward the Cotton Belt industrial district, Heritage Park at 411 Ball Street, and Nash Farm at 626 Ball Street.'
        }
      ]}
      reviews={[
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
                'I partner with Texas Best Sprinklers on client projects. Their attention to detail ensures landscape designs have the right irrigation support.',
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
                'Called Texas Best Sprinklers for a repair on my existing system. They diagnosed the problem quickly and had it fixed the same day.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Historic Township street photo'
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
        heading: 'Featured work for homes like these in Historic Township',
        title: 'The Main Street planter looked wet while a shaded Hudgins corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Grapevine / nearby DFW service — not a named Historic Township street, and not work at Heritage Park, Nash Farm, or City Hall.',
        body: 'A common Historic Township call looks like this: a controller on Church Street or Texas Street is still running one long summer cycle. Clay sheds the first pass. Leftover spray hits the sidewalk, which Grapevine treats as illegal discharge onto pavement, while a shaded corner toward Hudgins or Jenkins stays brown because canopy grew in after the historic pad was finished. Across Main, a storefront planter cooks against festival-weekend pavement and needs drip, not more spray. There is no HOA front system to hide the stripes. The clock may still be watering through the 10 a.m.–6 p.m. window, or a shop meter may be copying a neighbor’s Wednesday/Saturday days. We map which zones the owner actually controls, check whether the meter is residential or a storefront, match nozzles so spray stays off walks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows that fit city hours and even/odd days when Stage 1 is posted. If the low patio is irrigation plus a downspout, we talk through drainage instead of adding spray that will run toward the Cotton Belt tracks and Ball Street. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Historic Township clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 76051 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward South Main sidewalks, alley gravel, and the Cotton Belt corridor. This is not lake-edge saturation from Grapevine Lake — it is historic clay on compact pads that happen to sit next to Main Street.'
        },
        {
          title: 'Heat, ET, and Historic Township controller schedules',
          description:
            'Main Street pavement holds heat after sunset, and the city bans irrigation from 10 a.m. to 6 p.m. every day. House-only and shop controllers still need seasonal programs, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October.'
        },
        {
          title: 'Original Town shade versus Main Street heat in Historic Township',
          description:
            'Pecans and oaks on Hudgins, Jenkins, and Austin create deep shade next to a west-facing strip that bakes against South Main. Shared runtimes overwater the shade pocket and starve the sunny planter. Separate nozzle types and zone timing keep both sides of a Historic Township lot honest without changing the historic street view.'
        },
        {
          title: 'Cotton Belt drainage and foundation drip in Historic Township',
          description:
            'The Cotton Belt industrial district already sits along the rail line at South Main. Patio lows and downspouts on near-Main lots add to that path toward Ball Street. Historic brick foundations belong on drip, not another hour of spray. Do not confuse this district with Silver Lake, Dove Crossing, or Meadowmere Park.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Historic Township site assessment and issue mapping, including Main Street-facing planters and any Cotton Belt-side grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Grapevine watering hours, HGT curb appeal, and close-lot overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Historic Township?',
          answer:
            'Most Historic Township listings show no HOA, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. The HGT overlay and historic districts can still apply to visible exterior changes, lighting, and grading. Grapevine requires a city permit for new irrigation system installations, a plan, licensed-irrigator registration, and rain/freeze sensors. Ordinary head and pipe repairs usually do not need a new-system permit. Drainage that changes grading or visible piping may need city stormwater guidance. We describe the visible scope before work starts so you can check the overlay. We do not file city or historic-review applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Historic Township clay, shade, and Main Street-facing lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds and storefront planters. Tight Church, Hudgins, and Jenkins lots need short throw so spray stays off walks and neighbor fences. Main Street planters often belong on drip, not rotors. Program around Grapevine’s year-round 10 a.m.–6 p.m. ban. If Stage 1 is active, even addresses water Wednesday and Saturday and odd addresses Thursday and Sunday; Monday is off; shops use Tuesday and Friday. Do not copy a Silver Lake HOA calendar or Heritage Park civic days onto a house clock.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot width, alley parking, and slope toward the Cotton Belt change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Historic Township?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Parking on Main Street, alley access, and wiring faults or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Grapevine watering rules here?',
          answer:
            'Irrigation is prohibited between 10 a.m. and 6 p.m. year-round. City ordinance also requires rain and freeze sensors and forbids discharging irrigation onto streets, sidewalks, and driveways. When Stage 1 of the drought plan is activated, residential even addresses water Wednesday and Saturday, odd addresses Thursday and Sunday, Monday is a no-watering day, and shops or common areas use Tuesday and Friday. We program start times and day patterns that match the current city notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into walks. Always confirm the latest Grapevine or supplier notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Silver Lake',
          description:
            'Weekley villa and estate irrigation off Dove Loop — a different 1999–2010 Grapevine plat, not this 1854 township.',
          link: '/grapevine/silver-lake'
        },
        {
          name: 'Stone Bridge Oaks',
          description:
            'Grenadier patio homes and townhomes off Glade Road, where the HOA already waters the street-view landscape.',
          link: '/grapevine/stone-bridge-oaks'
        },
        {
          name: 'Dove Crossing',
          description:
            '1980s clay lots on Thistlewood, Ryan Ridge, and Mockingbird near Dove Park — not Historic Main Street.',
          link: '/grapevine/dove-crossing'
        },
        {
          name: 'Meadowmere Park',
          description:
            'Civic Grapevine Lake park at 3000 Meadowmere Lane — not a Historic Township street and not Heritage Park on Ball Street.',
          link: '/grapevine'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on compact historic Grapevine lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and planter drip so historic brick stops getting soaked by leftover spray on South Main and Church.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward the Cotton Belt corridor and Ball Street.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Grapevine Commercial Historic District',
          url: 'https://www.grapevinetexas.gov/1658/National-Register-of-Historic-Places',
          description:
            'South Main from Northwest Highway to West College Street is the walkable commercial core. Useful context for heat-island planters and sidewalk overspray — not a private Historic Township backyard.'
        },
        {
          name: 'Grapevine Public Library',
          url: 'https://www.grapevinetexas.gov/1854/Library',
          description:
            'The library at 1201 Municipal Way is a short trip from the original township and a straightforward landmark when describing this part of Grapevine.'
        },
        {
          name: 'Parks & Facilities — Heritage Park cluster',
          url: 'https://www.grapevinetexas.gov/463/Parks-Facilities',
          description:
            'City parks directory covering the Botanical Gardens at Heritage Park, 411 Ball Street. Civic landscape on the HGT bound — not a substitute for lot-level irrigation on Church or Hudgins.'
        },
        {
          name: 'Nash Farmstead',
          url: 'https://www.grapevinetexas.gov/1659/Recorded-Texas-Historic-Landmarks-RTHL',
          description:
            'The 1869 Nash Farm at 626 Ball Street is a Recorded Texas Historic Landmark and National Register property. Civic farm, not a private Historic Township sprinkler job.'
        },
        {
          name: 'Historic Main Street District',
          url: 'https://www.grapevinetexasusa.com/things-to-do/historic-downtown-grapevine/',
          description:
            'The visitor district around Main Street, the Vintage Railroad, and the Palace Arts Center at 300 South Main. Festival weekends are why tilted heads on the square get noticed so quickly.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Historic Township is tied to the{' '}
            <a
              href="https://www.grapevinetexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Grapevine
            </a>
            , campuses in{' '}
            <a
              href="https://www.gcisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Grapevine-Colleyville ISD
            </a>
            , and the{' '}
            <a
              href="https://www.grapevinetexas.gov/1854/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Grapevine Public Library
            </a>{' '}
            on Municipal Way. Families also walk the{' '}
            <a
              href="https://www.grapevinetexas.gov/1658/National-Register-of-Historic-Places"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              National Register districts
            </a>
            , use{' '}
            <a
              href="https://www.grapevinetexas.gov/463/Parks-Facilities"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Parks &amp; Facilities
            </a>
            {' '}
            listings for Heritage Park, and visit{' '}
            <a
              href="https://www.grapevinetexas.gov/1659/Recorded-Texas-Historic-Landmarks-RTHL"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Nash Farm
            </a>{' '}
            on Ball Street. City history for the 1854 plat is on the official{' '}
            <a
              href="https://www.grapevinetexas.gov/777/Grapevine-History-1843---1900"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              1843–1900 history page
            </a>
            .
          </p>
          <p>
            Outdoor watering follows Grapevine’s{' '}
            <a
              href="https://www.grapevinetexas.gov/525/Water-Conservation-Watering-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Conservation &amp; Watering Restrictions
            </a>
            , including the year-round 10 a.m.–6 p.m. irrigation ban. New systems go through{' '}
            <a
              href="https://www.grapevinetexas.gov/136/Applications-Permits"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Applications &amp; Permits
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
            , regional supply context from the{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>
            {' '}and{' '}
            <a
              href="https://www.savetarrantwater.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Save Tarrant Water
            </a>
            , and stormwater notes from{' '}
            <a
              href="https://www.grapevinetexas.gov/531/Stormwater-Watershed-Quality-Management"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Stormwater &amp; Watershed Quality
            </a>
            . Heritage Park and Nash Farm are civic Grapevine access — not a reason to treat every township lot as a garden
            campus or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Historic Township?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
