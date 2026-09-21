import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function SilverLakePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Grapevine"
      citySlug="grapevine"
      neighborhoodName="Silver Lake"
      canonicalUrl="https://sprinkleranddrains.com/grapevine/silver-lake"
      pageTitle="Silver Lake Sprinkler Repair & Drainage in Grapevine, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Silver Lake in Grapevine, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Silver Lake Sprinkler Repair & Drainage"
      heroDescription="Silver Lake is a Weekley-built Grapevine neighborhood off Dove Loop, not a lakefront plat. Clay lots, mixed villa and estate pads, and HOA street views need cycle-and-soak irrigation, drip at foundations, and drainage that stays on the lot instead of rolling toward Dove Loop and lake-trail grades."
      introHeading="Weekley-era controllers still running August on mixed villa and estate lots"
      intro={
        <>
          <p>
            Silver Lake sits in northeast Grapevine off Dove Loop Road between Main Street and Dooley Street, ZIP 76051.
            David Weekley Homes built about 350 houses here from roughly 1999 through 2010 in three products locals still
            treat as one neighborhood: Silver Lake Addition / Estates, the Villas at Silver Lake Estates, and the former
            Manors at Silver Lake. Streets include Silver Oak Drive, Ivy Glen Drive, and Hawthorne Street on the original
            addition, plus Fall Creek, Spring Creek Drive, Water Oak Drive, and Blairstone Pines on the later estates and
            villa sections. Despite the name, these are not Grapevine Lake waterfront lots. Residents walk to lake hike-and-bike
            trails and Historic Main Street. Villa pads are tighter and more HOA-visible; estate and manor lots are larger
            Weekley homes (often 2,000–4,750 square feet) with longer head runs and more foundation bed. That mix is the
            irrigation problem: one controller schedule cannot treat a compact Fall Creek lawn the same as a Silver Oak Drive
            side yard under 20-year canopy.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Silver Lake as part of our Grapevine work. We are a licensed
            irrigator (LI22462). Grapevine prohibits irrigation from 10 a.m. to 6 p.m. year-round, requires rain and freeze
            sensors, and — when Stage 1 of the drought plan is active — splits residential even/odd days from HOA and common-area
            watering on Tuesday and Friday. About 70 percent of city supply comes through the Trinity River Authority; about 30
            percent comes from Lake Grapevine. We program controllers for those windows and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. We do not claim a count of jobs on Silver Oak
            Drive or Fall Creek. We do walk zones, check pressure on the larger pads, keep spray off walks that lead toward
            downtown, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Villa lots on Fall Creek and Blairstone Pines show overspray and dry sidewalk strips faster than larger Silver Oak Drive pads.',
        '1999–2010 Weekley systems often still run one long cycle; clay sheds the first pass before roots drink, then leftover water sheets toward Dove Loop.',
        'The neighborhood is walkable to lake trails and Main Street, so HOA curb appeal and city no-spray-on-pavement rules show up immediately.',
        'HOA common turf (if Stage 1 is on) waters on a different calendar than even/odd houses — mixed calendars, not a single “Silver Lake day.”'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along villa sidewalks and estate front lawns.',
        'Drip conversion at foundation beds and tree rings so Weekley brick and mulch stop getting hit by leftover spray.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit Grapevine’s 10 a.m.–6 p.m. ban and Stage 1 days when they apply.',
        'Drainage planning for patio lows, fence-line pooling, and runoff that follows grade toward Dove Loop and lake-trail corridors after storms.',
        'Outdoor lighting repair and additions for entries and walks that stay visible on the way to Main Street without changing HOA character.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Silver Lake clay can absorb water instead of sending it across Dove Loop sidewalks or toward trail grades.',
        'Walk zones after mowing. Settling heads on 20-year Weekley lots tilt quickly and stripe the street view on Ivy Glen and Hawthorne.',
        'Keep spray off walks, drives, and neighboring lots. Grapevine ordinance prohibits irrigation discharging onto paved surfaces.',
        'If Stage 1 is active, do not copy HOA common-area Tuesday/Friday days onto a residential controller. Even addresses are Wednesday/Saturday; odd are Thursday/Sunday; Monday is off.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and a 2005 controller still on August wastes water in October.'
      ]}
      trustCards={[
        {
          title: 'HOA curb appeal on a walk-to-Main-Street neighborhood',
          description:
            'Silver Lake has an owners association and sits close enough to Historic Main Street that tilted heads, misting, and dry front strips get noticed. We match nozzles, straighten risers, and cut overspray without unauthorized layout changes.'
        },
        {
          title: 'Grapevine hours, Stage 1 days, and Tarrant supply',
          description:
            'Year-round irrigation is banned from 10 a.m. to 6 p.m. Rain and freeze sensors are required. When Stage 1 is on, houses follow even/odd days while HOA common areas use Tuesday/Friday. We set controllers for the current city notice, not a guess.'
        },
        {
          title: 'Two lot types on one Weekley plat',
          description:
            'Villas need tight throw and sidewalk control. Estate and manor lots lose pressure at the far heads and mix shade with open turf. The Silver Lake challenge is rebalancing those products, not treating every yard like a lake-edge estate.'
        },
        {
          title: 'Foundation drip and storm drainage toward Dove Loop',
          description:
            'Weekley brick and foundation beds do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water headed toward Dove Loop and public trail grades.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Silver Lake street photo'
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
        heading: 'Featured work for homes like these in Silver Lake',
        title: 'A villa sidewalk strip stayed wet while the estate back corner stayed dry',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Grapevine / nearby DFW service — not a named Silver Lake street, and not work at Silver Lake Park near Bass Pro Drive.',
        body: 'A common Silver Lake call looks like this: a compact villa lawn along Fall Creek or Blairstone Pines is dark and soft because heads throw onto the walk, while a larger Silver Oak Drive or Water Oak Drive back corner stays brown because the last heads on a long Weekley run mist or barely reach. Clay sheds a single long cycle. Shade that grew in since 1999 holds moisture against the slab. The controller is still on a peak-heat program that ignores Grapevine’s 10 a.m.–6 p.m. window. We map zones, check static and operating pressure, match nozzles so villa throw and estate precipitation line up, and move foundation beds onto drip where spray was hitting brick and mulch. Runtimes split into cycle-and-soak windows that fit city hours and, when Stage 1 is posted, even/odd days. If the low pad is irrigation plus a downspout, we talk through drainage instead of adding spray that will run toward Dove Loop. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Silver Lake clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Silver Lake lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Dove Loop, villa sidewalks, and trail-side grades. This is not lake-edge saturation from Grapevine Lake — it is clay on a Weekley plat that happens to sit near the trails.'
        },
        {
          title: 'Heat, ET, and Silver Lake controller schedules',
          description:
            'Grapevine summers push evapotranspiration hard, and the city bans irrigation from 10 a.m. to 6 p.m. every day. We set seasonal programs, confirm rain and freeze sensors, and point homeowners to Water is Awesome weekly guidance so Silver Lake systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'HOA head appearance and no-spray-on-pavement rules in Silver Lake',
          description:
            'Walkable proximity to Main Street and Dove Loop means tilted risers, misting, and overspray show immediately. Grapevine also prohibits irrigation discharging onto paved surfaces. Matched precipitation, pressure regulation, and clean head alignment keep the street view intentional for association standards and city code.'
        },
        {
          title: 'Villa versus estate lots, shade, and drainage on Silver Lake pads',
          description:
            'Villas need short throw and sidewalk control. Larger estate lots mix oak canopy with open turf and lose pressure at far heads. Do not confuse this neighborhood with Silver Lake Elementary at 1301 N. Dooley Street, The Vineyards Campground next door, or the separate Silver Lake Park concept near Bass Pro Drive. Drainage here is lot-level clay and patio lows, not a private neighborhood lake.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Silver Lake site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with HOA appearance and Grapevine watering hours in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Silver Lake?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Grapevine requires a city permit for new irrigation system installations, a plan, licensed-irrigator registration, and rain/freeze sensors. Ordinary head and pipe repairs usually do not need a new-system permit. Drainage that changes grading or visible piping, and lighting that alters the street view, may need Silver Lake HOA architectural review and city stormwater guidance. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Silver Lake clay, villa lots, and larger estate pads?',
          answer:
            'Most Silver Lake yards need cycle-and-soak on turf, separate runtimes for shade versus sun, and drip at foundation beds. Villa lots need short throw so spray stays off walks. Larger estate lots often need pressure regulation so far heads do not mist. Program around Grapevine’s year-round 10 a.m.–6 p.m. ban. If Stage 1 is active, even addresses water Wednesday and Saturday and odd addresses Thursday and Sunday; Monday is off. Confirm the latest city notice before copying a neighbor’s days.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, villa versus estate lot size, and slope toward Dove Loop change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Silver Lake?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Grapevine watering rules?',
          answer:
            'Irrigation is prohibited between 10 a.m. and 6 p.m. year-round. City ordinance also requires rain and freeze sensors and forbids discharging irrigation onto streets, sidewalks, and driveways. When Stage 1 of the drought plan is activated, residential even addresses water Wednesday and Saturday, odd addresses Thursday and Sunday, Monday is a no-watering day, and HOA/common areas use Tuesday and Friday. We program start times and day patterns that match the current city notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Always confirm the latest Grapevine or supplier notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Historic Township',
          description: 'Irrigation and drainage for Grapevine properties closer to the original township and Historic Main Street.',
          link: '/grapevine'
        },
        {
          name: 'Meadowmere Park',
          description:
            'Nearby Grapevine Lake park access at 3000 Meadowmere Lane — civic lake park, not a Silver Lake subdivision street.',
          link: '/grapevine'
        },
        {
          name: 'Stone Bridge Oaks',
          description: 'Patio and townhome irrigation on Glade Road in central Grapevine.',
          link: '/grapevine'
        },
        {
          name: 'Dove Crossing',
          description: 'Sprinkler repair and drainage planning for established Grapevine lots south of Dove Loop.',
          link: '/grapevine'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on Weekley villa lawns and larger estate pads.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and tree-ring drip so Weekley brick, mulch, and shade beds stop getting soaked by high-pressure spray.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Dove Loop and public trail grades.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Grapevine Public Library',
          url: 'https://www.grapevinetexas.gov/1854/Library',
          description:
            'The library at 1201 Municipal Way is a regular stop for Silver Lake families and a straightforward landmark when describing the neighborhood’s place in Grapevine, not a reason to ignore lot-level irrigation.'
        },
        {
          name: 'Grapevine Commercial Historic District',
          url: 'https://www.grapevinetexas.gov/1658/National-Register-of-Historic-Places',
          description:
            'South Main Street from Northwest Highway to West College Street is walking distance from Silver Lake. Front-yard appearance matters because residents and visitors actually walk that corridor.'
        },
        {
          name: 'Silver Lake Elementary School',
          url: 'https://sles.gcisd.net/page/about-silver-lake',
          description:
            'GCISD campus at 1301 N. Dooley Street (opened 1995), next to The Vineyards Campground at 1501 N. Dooley. Adjacent civic campus, not a Silver Lake HOA lawn or a lake-edge lot.'
        },
        {
          name: 'Meadowmere Park and Grapevine Lake parks',
          url: 'https://www.grapevinetexas.gov/1720/Life-Jackets',
          description:
            'Meadowmere Park at 3000 Meadowmere Lane is the nearby Corps/city lake park with a one-mile trail. Useful context for trail grades and stormwater, not a private pond on Silver Oak Drive.'
        },
        {
          name: 'Grapevine hike-and-bike trails',
          url: 'https://www.grapevinetexas.gov/DocumentCenter/View/801/trails_color_revised32913',
          description:
            'City trail map including the Dove Loop Trail (about 1.83 miles). Silver Lake homeowners use these paths; irrigation runoff that leaves a pad can follow the same grades the trails occupy.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Silver Lake is tied to the{' '}
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
              href="https://sles.gcisd.net/page/about-silver-lake"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Silver Lake Elementary
            </a>{' '}
            on Dooley Street. Families also use the{' '}
            <a
              href="https://www.grapevinetexas.gov/1854/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Grapevine Public Library
            </a>{' '}
            and walk Historic Main Street listed on the city’s{' '}
            <a
              href="https://www.grapevinetexas.gov/1658/National-Register-of-Historic-Places"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              National Register districts
            </a>{' '}
            page, which is why overspray onto walks and uneven front turf gets noticed quickly.
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
            . Lake parks listed on the city’s{' '}
            <a
              href="https://www.grapevinetexas.gov/1720/Life-Jackets"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              lake park locations
            </a>{' '}
            sit nearby — civic Grapevine Lake access, not a reason to treat Silver Lake lots as waterfront or to ignore drip at
            foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Silver Lake?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
