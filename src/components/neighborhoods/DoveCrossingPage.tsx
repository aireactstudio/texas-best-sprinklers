import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function DoveCrossingPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Grapevine"
      citySlug="grapevine"
      neighborhoodName="Dove Crossing"
      canonicalUrl="https://sprinkleranddrains.com/grapevine/dove-crossing"
      pageTitle="Dove Crossing Sprinkler Repair & Drainage in Grapevine, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Dove Crossing in Grapevine, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Dove Crossing Sprinkler Repair & Drainage"
      heroDescription="Dove Crossing is a mid-1980s Grapevine plat off Dove Road and Mockingbird Drive, not a Weekley Dove Loop estate and not an HOA-watered patio-home community. Compact clay lots, original spray systems, and park-edge grades toward Dove Park need cycle-and-soak irrigation, drip at brick foundations, and drainage that stays on the lot."
      introHeading="1980s clay pads beside Dove Park, not a Dove Loop Weekley plat"
      intro={
        <>
          <p>
            Dove Crossing sits in north-central Grapevine, ZIP 76051, on the recorded plat Tarrant Appraisal District labels
            DOVE CROSSING. Dove Crossing Dev Co opened the addition in 1984. Nash Phillips/Copus, Hooker/Barnes Homes, and
            later GSM Corp built brick ranches and two-story traditionals from about 1985 through 1990. The streets
            homeowners actually use are Thistlewood Lane, Ryan Ridge, and Mockingbird Drive, reached from Business 114 /
            Northwest Highway by Park Boulevard onto Dove Road, then left onto Mockingbird. Interior pads on Thistlewood and
            Ryan Ridge are often around a tenth to an eighth of an acre. A few Mockingbird lots run closer to a fifth of an
            acre and back to greenbelt that walks toward Grapevine Lake trails. That mix is the irrigation problem: a 1986
            controller cannot treat a tight Thistlewood side yard the same as a Mockingbird backyard that sheds toward park
            and trail grades. Realtor pages sometimes bundle this plat with La Paloma Estates. This page is the Dove Crossing
            addition only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Dove Crossing as part of our Grapevine work. We are a
            licensed irrigator (LI22462). Grapevine prohibits irrigation from 10 a.m. to 6 p.m. year-round, requires rain and
            freeze sensors, and — when Stage 1 of the drought plan is active — splits residential even/odd days from HOA and
            common-area watering on Tuesday and Friday. About 70 percent of city supply comes through the Trinity River
            Authority; about 30 percent comes from Lake Grapevine. Most Dove Crossing listings show no HOA, so the house
            controller is the only clock on the lot. We program that clock for city windows and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. We do not claim a count of jobs on Thistlewood
            Lane or Ryan Ridge, and we do not treat Dove Park turf or lake-trail irrigation as a substitute for diagnosing a
            private yard. We walk zones, keep spray off walks and neighboring lots, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Compact 1985–1990 pads on Thistlewood Lane and Ryan Ridge throw leftover spray onto walks and neighbor fences faster than a typical Grapevine estate lot.',
        'Original 1980s heads and valves have settled for forty years. One long cycle still soaks the slab side and misses the sun strip after clay sheds the first pass.',
        'There is usually no HOA watering the front. The house controller has to follow Grapevine hours on its own — unlike Stone Bridge Oaks, where the association already runs street-view turf.',
        'Do not confuse this plat with Silver Lake off Dove Loop, Stone Bridge Oaks on Glade Road, or Meadowmere Park at 3000 Meadowmere Lane. Dove Crossing is the 1980s addition next to Dove Park and Dove Elementary.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Thistlewood and Ryan Ridge side yards.',
        'Drip conversion at foundation beds and tree rings so 1980s brick and mulch stop getting hit by leftover spray.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit Grapevine’s 10 a.m.–6 p.m. ban without copying a park or HOA calendar onto a house clock.',
        'Drainage planning for patio lows, fence-line pooling, and runoff that follows grade toward Dove Park, Hood Lane, and lake-trail corridors after storms.',
        'Outdoor lighting repair and additions for entries and walks that stay visible on the way to Dove Elementary without changing the 1980s street character.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Dove Crossing clay can absorb water instead of sending it across Mockingbird Drive sidewalks or toward Dove Park grades.',
        'Walk zones after mowing. Settling heads on 1985–1990 pads tilt quickly and stripe the street view on Thistlewood and Ryan Ridge.',
        'Keep spray off walks, drives, and neighboring lots. Grapevine ordinance prohibits irrigation discharging onto paved surfaces, and these lots sit close together.',
        'If Stage 1 is active, even addresses water Wednesday and Saturday and odd addresses Thursday and Sunday. Monday is off. There is no Dove Crossing HOA Tuesday/Friday calendar to copy.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and a 1980s controller still on August wastes water in October.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without an HOA watering the front',
          description:
            'Most Dove Crossing lots have no association irrigation. Tilted heads, misting, and dry strips show on Thistlewood and Ryan Ridge because the homeowner owns the whole street view. We match nozzles and cut overspray without inventing an HOA scope that is not there.'
        },
        {
          title: 'Grapevine hours on a house-only controller',
          description:
            'Year-round irrigation is banned from 10 a.m. to 6 p.m. Rain and freeze sensors are required. When Stage 1 is on, houses follow even/odd days. We set Dove Crossing controllers for the current city notice, not Dove Waterpark hours and not a Silver Lake HOA clock.'
        },
        {
          title: 'Forty-year systems on compact clay pads',
          description:
            '1985–1990 spray on tenth-acre lots is the Dove Crossing challenge. Heads have settled, valves leak, and one long cycle floods the neighbor fence. This is not a 2000s Weekley villa problem and not a Grenadier courtyard problem.'
        },
        {
          title: 'Foundation drip and park-edge drainage',
          description:
            'Brick ranches do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water headed toward Dove Park at 1509 Hood Lane, Mockingbird greenbelt, and lake-trail grades.'
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
                'I partner with Texas Best Sprinklers on all my client projects. Their attention to detail and technical expertise ensures landscape designs have the right irrigation support.',
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
                'They diagnosed the problem quickly and had it fixed the same day. The technician showed me how to program the controller for water conservation.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Dove Crossing street photo'
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
        heading: 'Featured work for homes like these in Dove Crossing',
        title: 'The front looked wet while a park-side corner stayed brown and the neighbor walk stayed soaked',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Grapevine / nearby DFW service — not a named Dove Crossing street, and not work at Silver Lake, Stone Bridge Oaks, or Dove Park itself.',
        body: 'A common Dove Crossing call looks like this: a 1980s controller on Thistlewood Lane or Ryan Ridge is still running one long summer cycle. Clay sheds the first pass. Leftover spray hits the neighbor fence and the sidewalk, which Grapevine treats as a discharge violation, while a shaded corner toward Dove Park or a Mockingbird greenbelt stays brown because canopy grew in after the 1985–1990 pads were finished. There is no HOA front system to hide the stripes. The clock ignores the 10 a.m.–6 p.m. window and, in Stage 1, may still be watering Monday. We map which zones the homeowner actually owns, check pressure on short tenth-acre throw versus the slightly larger Mockingbird pads, match nozzles so spray stays off walks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows that fit city hours and even/odd days when Stage 1 is posted. If the low patio is irrigation plus a downspout, we talk through drainage instead of adding spray that will run toward Hood Lane and lake-trail grades. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Dove Crossing clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these Dove Road lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Mockingbird Drive, neighbor fences, and Dove Park grades. This is not lake-edge saturation from Grapevine Lake — it is 1980s clay on a compact plat that happens to sit next to a city park.'
        },
        {
          title: 'Heat, ET, and Dove Crossing controller schedules',
          description:
            'Grapevine summers push evapotranspiration hard, and the city bans irrigation from 10 a.m. to 6 p.m. every day. House-only controllers still need seasonal programs, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October.'
        },
        {
          title: 'Close lots and no-spray-on-pavement rules in Dove Crossing',
          description:
            'Tenth-acre pads put heads close to walks, drives, and the next house. Tilted risers and misting show immediately, and Grapevine prohibits irrigation discharging onto paved surfaces. Matched precipitation, pressure regulation, and clean head alignment keep the street view intentional without an HOA writing the spec.'
        },
        {
          title: 'Park-edge shade, greenbelt, and drainage on Dove Crossing pads',
          description:
            'Interior Thistlewood and Ryan Ridge lots need short throw and sidewalk control. Some Mockingbird lots mix oak and greenbelt shade with a longer backyard. Drainage here is lot-level clay, patio lows, and park-side grades toward Dove Park and lake trails — not a private neighborhood pond. Do not confuse this community with Silver Lake off Dove Loop, Stone Bridge Oaks on Glade Road, or Meadowmere Park at 3000 Meadowmere Lane.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Dove Crossing site assessment and issue mapping, including compact side yards and any greenbelt-edge grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Grapevine watering hours and close-lot overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Dove Crossing?',
          answer:
            'Most Dove Crossing listings show no HOA, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout and do not need association review. If your deed does have a restriction, check it before changing visible piping or lighting. Grapevine requires a city permit for new irrigation system installations, a plan, licensed-irrigator registration, and rain/freeze sensors. Ordinary head and pipe repairs usually do not need a new-system permit. We describe the visible scope before work starts. We do not file city applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Dove Crossing clay, compact lots, and shaded park-edge yards?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Tight Thistlewood and Ryan Ridge lots need short throw so spray stays off walks and neighbor fences. Mockingbird lots with greenbelt canopy often need less water on the shaded side and more even coverage in the open front. Program around Grapevine’s year-round 10 a.m.–6 p.m. ban. If Stage 1 is active, even addresses water Wednesday and Saturday and odd addresses Thursday and Sunday; Monday is off. Do not copy Dove Park or another neighborhood’s HOA days onto a residence.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing 1980s pipe condition, lot width, and slope toward Dove Park change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Dove Crossing?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Grapevine watering rules here?',
          answer:
            'Irrigation is prohibited between 10 a.m. and 6 p.m. year-round. City ordinance also requires rain and freeze sensors and forbids discharging irrigation onto streets, sidewalks, and driveways. When Stage 1 of the drought plan is activated, residential even addresses water Wednesday and Saturday, odd addresses Thursday and Sunday, and Monday is a no-watering day. We program start times and day patterns that match the current city notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into walks. Always confirm the latest Grapevine or supplier notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Silver Lake',
          description:
            'Weekley villa and estate irrigation off Dove Loop — a different 1999–2010 Grapevine plat, not this 1980s Dove Road addition.',
          link: '/grapevine/silver-lake'
        },
        {
          name: 'Stone Bridge Oaks',
          description:
            'Grenadier patio homes and townhomes off Glade Road, where the HOA already waters the street-view landscape.',
          link: '/grapevine/stone-bridge-oaks'
        },
        {
          name: 'Historic Township',
          description: 'Irrigation and drainage for Grapevine properties closer to the original township and Historic Main Street.',
          link: '/grapevine/historic-township'
        },
        {
          name: 'Meadowmere Park',
          description:
            'Civic Grapevine Lake park at 3000 Meadowmere Lane — not a Dove Crossing street and not Dove Park on Hood Lane.',
          link: '/grapevine'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on compact 1980s Dove Crossing side yards.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so 1980s brick stops getting soaked by leftover spray on close-lot pads.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Dove Park and lake-trail grades.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Dove Park & Casey’s Clubhouse',
          url: 'https://gograpevine.com/listing/dove-park/',
          description:
            'City park at 1509 Hood Lane since 1970, with Dove Waterpark, accessible Casey’s Clubhouse, pickleball, tennis, basketball, and a half-mile trail. The civic park next to this plat — not a private Dove Crossing amenity and not Meadowmere Park.'
        },
        {
          name: 'Dove Elementary School',
          url: 'https://des.gcisd.net/o/des',
          description:
            'GCISD campus at 1932 Dove Road, opened in 1972. The elementary listed for Dove Crossing addresses, a short walk or drive from Mockingbird Drive — not Silver Lake Elementary on Dooley Street.'
        },
        {
          name: 'Grapevine Parks & Facilities',
          url: 'https://www.grapevinetexas.gov/463/Parks-Facilities',
          description:
            'City directory of Grapevine parks and recreation sites. Dove Crossing residents use Dove Park daily; Parr Park and lake access sit farther out and are not this subdivision’s backyard.'
        },
        {
          name: 'Grapevine Public Library',
          url: 'https://www.grapevinetexas.gov/1854/Library',
          description:
            'The library at 1201 Municipal Way is a regular stop for GCISD families from the Dove Road side of town — a city landmark, not a reason to ignore patio drainage on Thistlewood Lane.'
        },
        {
          name: 'Grapevine hike-and-bike trails',
          url: 'https://www.grapevinetexas.gov/DocumentCenter/View/801/trails_color_revised32913',
          description:
            'City trail map including lake and Cottonbelt paths. Some Mockingbird lots walk toward lake-trail grades; that is useful stormwater context, not a claim that every Dove Crossing backyard is waterfront.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Dove Crossing is tied to the{' '}
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
            , and{' '}
            <a
              href="https://des.gcisd.net/o/des"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Dove Elementary
            </a>{' '}
            on Dove Road. Families also use{' '}
            <a
              href="https://gograpevine.com/listing/dove-park/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Dove Park
            </a>
            {' '}at 1509 Hood Lane, the{' '}
            <a
              href="https://www.grapevinetexas.gov/1854/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Grapevine Public Library
            </a>
            , and other sites listed under{' '}
            <a
              href="https://www.grapevinetexas.gov/463/Parks-Facilities"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Parks &amp; Facilities
            </a>
            . Historic Main Street on the city’s{' '}
            <a
              href="https://www.grapevinetexas.gov/1658/National-Register-of-Historic-Places"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              National Register districts
            </a>{' '}
            page is a short drive south — still part of Grapevine living, not a walk from Ryan Ridge.
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
            . Dove Park and the lake paths on the city’s{' '}
            <a
              href="https://www.grapevinetexas.gov/1720/Life-Jackets"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              lake park locations
            </a>{' '}
            page are civic Grapevine access — not a reason to treat every Dove Crossing lot as waterfront or to ignore drip at
            foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Dove Crossing?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
