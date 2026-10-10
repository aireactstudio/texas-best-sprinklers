import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function MarshallCreekPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Roanoke"
      citySlug="roanoke"
      neighborhoodName="Marshall Creek"
      canonicalUrl="https://sprinkleranddrains.com/roanoke/marshall-creek"
      pageTitle="Marshall Creek Sprinkler Repair & Drainage in Roanoke, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Marshall Creek lots on City of Roanoke water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Marshall Creek Sprinkler Repair & Drainage"
      heroDescription="Marshall Creek is a City of Roanoke addition in Denton County, ZIP 76262 — compact single-family lots on Sycamore Lane and along Marshall Creek Road, with Block A office lots between Schooling Road and Lakeview Drive. Those yards sit on Sanger and Branyon clay and need cycle-and-soak irrigation, drip at foundations, and a house controller that does not copy the Tuesday/Friday office clock."
      introHeading="Fifty-foot pads and office lots do not share one watering clock"
      intro={
        <>
          <p>
            Marshall Creek is an addition to the City of Roanoke in Denton County, not Fairway Ranch on Litsey Road,
            not Briarwyck on Lancelot Drive, and not Trophy Club&apos;s gated Hogan&apos;s Glen. The plat is recorded
            in Volume 610, Page 257 of the Denton County plat records, in the Thomas Kelly Survey, Abstract No. 704.
            City Ordinance 2014-114 (June 24, 2014) covers Lots 1 through 10, Block A — about 2.237 acres, or 97,460
            square feet — between the north line of Marshall Creek Road, the east line of Schooling Road, and Lakeview
            Drive, a 60-foot right-of-way, at Marshall Creek Boulevard. The ordinance exhibit marks those Block A lots
            for office use only. The same exhibit shows Ash Lane and says lots drawn at about 100 feet wide and 100
            feet deep may be split into two 50-foot lots with a 5,000-square-foot minimum; lots without that split
            line are not eligible to subdivide. Sycamore Lane is the residential street where Marshall Creek Block B
            lots are platted, a short connection toward Oak Street and US 377. ZIP 76262. City minutes from 2016 still
            call part of Block A, including 117 Marshall Creek Road, the Marshall Creek Subdivision formerly known as
            Green Acres Estates. That mix is the irrigation problem. A 50-foot house pad on Sycamore Lane throws spray
            across a 5-foot side yard. A controller copied from the Block A office strip assumes the city&apos;s
            Tuesday and Friday non-residential days. Extra spray on group D clay either sheets off a slight Sanger
            slope or sits on a nearly level Branyon flat. Realtor pages sometimes lump every 76262 address into
            Trophy Club, or treat the Corps park down Marshall Creek Road as this plat. This page is Marshall Creek
            lots only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Marshall Creek as part of our Roanoke and Highway
            114 work. We are a licensed irrigator (LI22462). The subdivision is inside the{' '}
            <a
              href="https://roanoketexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              City of Roanoke
            </a>
            , a wholesale customer of Fort Worth, so house meters follow the city irrigation ordinance rather than
            Trophy Club MUD. On the official{' '}
            <a
              href="https://roanoketexas.gov/448/Watering-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Lawn &amp; Landscape Irrigation Restrictions
            </a>{' '}
            page, odd last digits water Sunday and Thursday, even last digits water Saturday and Wednesday, and
            apartments, businesses, parks, and common areas water Tuesday and Friday. No watering is allowed on
            Monday. Spray is banned from 10 a.m. to 6 p.m. Handheld hose, drip irrigation, soaker hose, and tree
            bubbler may run any day at any time — the city wrote that exception for foundations, trees, and other
            high-value plants. Watering questions go to 817-491-6099. We do not copy a Trophy Club MUD guess, a
            Westlake calendar, or the Block A office clock onto a Sycamore Lane house meter. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. New or expanded irrigation tied to city
            water needs an irrigation permit and a backflow test report through the{' '}
            <a
              href="https://roanoketexas.gov/485/Permits"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              City of Roanoke Permits
            </a>{' '}
            desk (permits@roanoketexas.com). The city&apos;s irrigation permit application lists a $50 residential
            fee — confirm the current amount on that application before you file. Ordinance 2014-114 sets lot and
            office standards for this plat and does not name a residential association. We do not claim a count of
            jobs on Sycamore Lane, Marshall Creek Road, Schooling Road, or Lakeview Drive, and we do not treat
            Marshall Creek Park turf — the Corps of Engineers lease managed by the Town of Trophy Club — or historic
            Oak Street landscaping as a substitute for diagnosing a private yard. We walk zones, keep spray off
            drives, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Marshall Creek is City of Roanoke water — Fort Worth wholesale — not Trophy Club MUD. Copying the Tuesday/Friday business and park clock onto a private Sycamore Lane address is the usual controller mistake.',
        'Ordinance 2014-114 sets detached single-family lots at a 5,000-square-foot minimum, 50 feet wide and 100 feet deep, with a 5-foot side yard. Overspray crosses that gap onto the neighbor and the street.',
        'USDA soil mapping along Sycamore Lane shows Sanger clay on 1 to 3 percent slopes and Branyon clay on 0 to 1 percent slopes. Both are hydrologic group D. A long first cycle sheds or ponds instead of soaking in.',
        'Do not confuse this plat with Fairway Ranch, Briarwyck, Historic Oak Street, or Trophy Club Park. Block A, Lots 1–10, between Schooling Road and Lakeview Drive, is marked for office use only.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Sycamore Lane, Marshall Creek Road, Schooling Road, and Lakeview Drive.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on 50-foot lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit the current City of Roanoke even/odd day — not the Block A office or park Tuesday/Friday clock.',
        'Drainage planning for patio lows on nearly level Branyon clay and runoff that follows a slight Sanger slope toward Marshall Creek Road after storms.',
        'Outdoor lighting repair and additions for entries and short drives that stay visible from the street without treating the office frontage as a house yard.'
      ]}
      localTips={[
        'Confirm the current City of Roanoke notice before you pick watering days. Marshall Creek does not follow a Trophy Club MUD or Westlake calendar.',
        'Use the last digit of the physical address: even Saturday/Wednesday, odd Sunday/Thursday. Skip 10 a.m. to 6 p.m. and leave Monday off.',
        'Offices, parks, and common areas water Tuesday and Friday. A house-only controller on Sycamore Lane should not copy the Block A office strip.',
        'Use shorter cycle-and-soak windows so Sanger and Branyon clay can take water instead of sheeting across a 50-foot pad or sitting on a flat patio.',
        'Handheld hose, drip, soaker hose, and tree bubbler may run any day. That is the city exception for foundations and high-value plants, not a reason to run spray every morning.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly advice, and compact-lot clocks often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'Fifty-foot fronts with a five-foot side yard',
          description:
            'The 2014 planned-development standards for Marshall Creek single-family lots set a 5,000-square-foot minimum, a 50-foot width, a 100-foot depth, a 20-foot front yard, and a 5-foot side yard. Tilted heads and misting show because the next house is close. We match nozzles and cut overspray without inventing a Fairway Ranch HOA scope.'
        },
        {
          title: 'City even/odd rules, not a Block A Tuesday/Friday guess',
          description:
            'House meters in the city follow odd Sunday/Thursday or even Saturday/Wednesday, with Monday off and no spray from 10 a.m. to 6 p.m. Lots 1–10, Block A, are office use, so that frontage follows the business Tuesday/Friday calendar. We set Sycamore Lane controllers for the house notice, not the office strip and not Trophy Club MUD.'
        },
        {
          title: 'Sanger slope next to Branyon flats',
          description:
            'Along Sycamore Lane, USDA mapping shows Sanger clay on gentle slopes and Branyon clay on nearly level ground. Both are smectitic, hydrologic group D. One long cycle sheds off the slope while a flat patio stays wet. This is not a Fairway Ranch ridge lot and not gated golf-edge clay.'
        },
        {
          title: 'Foundation drip, not another hour of spray',
          description:
            'The city allows drip, soaker hose, and tree bubblers any day so foundations and high-value plants can be watered without a spray day. After heavy rain we look at patio lows and downspouts so irrigation is not fighting water already sitting on group D clay. Corps park turf down Marshall Creek Road is not a private backyard.'
        }
      ]}
      includeReviewSchema={false}
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Marshall Creek street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Marshall Creek street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Marshall Creek',
        title: 'The sunny Sycamore pad looked wet while a shaded side yard stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Roanoke / nearby DFW service — not a named Marshall Creek street, and not work at Block A offices, Marshall Creek Park, or historic Oak Street.',
        body: 'A common Marshall Creek call looks like this: a controller on Sycamore Lane or Marshall Creek Road is still running one long summer cycle, and the day pattern was copied from the Block A office Tuesday/Friday clock or from a Trophy Club guess. Sanger clay on a slight slope sheds the first pass. Leftover spray crosses the 5-foot side yard while a shaded corner stays brown. Across the street, a nearly level Branyon pad holds water against the patio and needs a shorter cycle, not more spray. Roanoke only allows two assigned house days from the last address digit, with Monday off, so a leftover everyday program wastes water and can draw a city notice. We map which zones the owner actually controls, check the meter against the current city notice, match nozzles so spray stays off the neighbor and the drive, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows on the assigned days rather than an office or park guess. If the low patio is irrigation plus a downspout on group D clay, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Sanger and Branyon clay and cycle-and-soak',
          description:
            'Along Sycamore Lane, USDA soil mapping shows Sanger clay, 1 to 3 percent slopes, and Branyon clay, 0 to 1 percent slopes. Both dominant components are fine, smectitic, thermic Udic Haplusterts in hydrologic group D. Near Marshall Creek Road and Schooling Road the mapped unit is Mingo clay loam, also group D. Shorter repeats let water move into the root zone instead of sheeting off a slope or sitting on a flat patio. This is Marshall Creek clay on City of Roanoke water, not a Fairway Ranch ridge and not Hogan’s Glen golf-edge clay.'
        },
        {
          title: 'Heat, ET, and City of Roanoke controller schedules',
          description:
            'Pavement on a 50-foot lot holds heat after sunset, and the city already bans spray from 10 a.m. to 6 p.m. House controllers still need the correct even/odd day, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool. A Block A office or park Tuesday/Friday clock is not a substitute for the current city notice. Watering questions: 817-491-6099.'
        },
        {
          title: 'Sycamore house fronts versus the Block A office strip',
          description:
            'Residential lots on Sycamore Lane and along Marshall Creek Road are judged from the street, while Lots 1–10, Block A, between Schooling Road and Lakeview Drive are marked for office use only. Shared runtimes overwater a house strip and still miss a shaded side yard. Separate nozzle types and the correct customer calendar keep both sides honest without treating the office frontage as a backyard.'
        },
        {
          title: 'Foundation drip and the 2014 lot standards',
          description:
            'Ordinance 2014-114 allows detached single-family houses up to two and one-half stories or 35 feet, with a 20-foot front yard, a 5-foot side yard, and a 10-foot rear yard on the planned-development single-family standards. Foundations belong on drip, which the city allows any day, not another hour of spray. The ordinance does not create a named residential association. Do not confuse this plat with Fairway Ranch, Briarwyck, or Trophy Club Park.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Marshall Creek site assessment and issue mapping, including Sycamore Lane turf, side-yard overspray, and any patio low on Branyon clay',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with City of Roanoke watering days and the office-versus-house calendar in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need city approval for sprinkler or drainage work in Marshall Creek?',
          answer:
            'Plan on the city when the system is new or expanded. The City of Roanoke requires an irrigation permit for systems tied to city water, plus a backflow test report; applications go to permits@roanoketexas.com from the Permits page at City Hall, 500 S. Oak Street. The city’s irrigation permit application lists a $50 residential fee — confirm the current amount before you file. Ordinary head and pipe repairs that stay inside the existing layout usually do not need a new city permit, but we still describe the visible scope before work starts. Ordinance 2014-114 sets development standards for this plat and does not name a residential association. A licensed irrigator (we are LI22462) should design or alter the system. Dig Tess (811) locates public lines. We do not file city applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Marshall Creek clay and compact lots?',
          answer:
            'Use cycle-and-soak on Sanger, Branyon, and Mingo clay, separate shade versus sun times, and drip at foundation beds. Fifty-foot pads need matched nozzles so spray stays off the 5-foot side yard, the neighbor, and the street. Confirm the current City of Roanoke notice before you pick days — even Saturday/Wednesday, odd Sunday/Thursday, no 10 a.m.–6 p.m. spray, Monday off. Handheld hose, drip, soaker, and tree bubbler may run any day. We do not copy the Block A office Tuesday/Friday clock, a park clock, or a Trophy Club guess onto a house meter.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot width, and whether grade holds water on a Branyon flat or sheds on a Sanger slope change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Marshall Creek?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority. Call (817) 304-7896. We do not treat US 377 or Oak Street traffic as a reason to skip walking the lot.'
        },
        {
          question: 'How do you set controllers for Marshall Creek watering rules here?',
          answer:
            'Confirm the current notice on roanoketexas.gov/448/Watering-Restrictions before you change days. Roanoke assigns two watering days from the last digit of the physical address (even Saturday and Wednesday, odd Sunday and Thursday), bans spray from 10 a.m. to 6 p.m., and keeps Monday off. Businesses, parks, and common areas water Tuesday and Friday — that is the calendar for the Block A office lots, not for a Sycamore Lane house meter. We program start times that match the city notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so group D clay is not running water into the street. New sod or hydromulch needs a city variance. Always confirm the latest city notice before changing days yourself. Watering questions: 817-491-6099.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Fairway Ranch',
          description:
            'A separately listed Roanoke neighborhood on Litsey Road. A different street pattern than Sycamore Lane and Schooling Road.',
          link: '/roanoke'
        },
        {
          name: 'Briarwyck',
          description:
            'Roanoke lists Briarwyck separately. Marshall Creek Road continues past this plat; it is not a substitute name for these lots.',
          link: '/roanoke'
        },
        {
          name: 'Woodcreek',
          description:
            'Another name on the Roanoke neighborhoods list. Do not treat it as a Marshall Creek Block A or Block B street.',
          link: '/roanoke'
        },
        {
          name: "Hogan's Glen",
          description:
            'Trophy Club’s gated Indian Creek enclave on Trophy Club MUD water — nearby, not City of Roanoke billing.',
          link: '/trophy-club/hogans-glen'
        },
        {
          name: 'Historic Downtown Roanoke',
          description:
            'Oak Street and City Hall at 500 S. Oak. Compact township storefronts, not a Sycamore Lane house pad.',
          link: '/roanoke'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on compact Marshall Creek clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on 50-foot Sycamore Lane fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows on Branyon clay and runoff that moves down a Sanger slope after storms.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'City of Roanoke',
          url: 'https://roanoketexas.gov/',
          description:
            'City Hall at 500 S. Oak Street is the official source for ordinances, utility billing, and permits — and the civic neighbor to the private lots this page is about.'
        },
        {
          name: 'Ordinance 2014-114',
          url: 'https://www.roanoketexas.gov/DocumentCenter/View/4068/Marshall-Creek-PD-2014-16',
          description:
            'The planned-development ordinance for Lots 1–10, Block A, including the 5,000-square-foot lot minimums and the office-use note for that block.'
        },
        {
          name: 'Roanoke watering restrictions',
          url: 'https://roanoketexas.gov/448/Watering-Restrictions',
          description:
            'Year-round even/odd days, the 10 a.m.–6 p.m. ban, Monday off, and the drip and soaker exception. Watering questions: 817-491-6099.'
        },
        {
          name: 'City of Roanoke permits',
          url: 'https://roanoketexas.gov/485/Permits',
          description:
            'Irrigation permit applications go to permits@roanoketexas.com. The published residential irrigation permit fee is $50 — confirm it on the current application.'
        },
        {
          name: 'Marshall Creek Park lease',
          url: 'https://www.swf-wc.usace.army.mil/grapevine/Recreation/Parks/Leaseparks.shtml',
          description:
            'The Corps of Engineers lists Marshall Creek Park as a Grapevine Lake lease managed by the Town of Trophy Club. Park turf is not a private Marshall Creek backyard.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Marshall Creek is tied to the{' '}
            <a
              href="https://roanoketexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Roanoke
            </a>{' '}
            at 500 S. Oak Street. Sycamore Lane sits a short drive from Oak Street and US 377, and Marshall Creek
            Road, Schooling Road, Lakeview Drive, and Marshall Creek Boulevard frame the Block A lots in Ordinance
            2014-114. Families heading east on Marshall Creek Road reach the Corps of Engineers lease the Army calls{' '}
            <a
              href="https://www.swf-wc.usace.army.mil/grapevine/Recreation/Parks/Leaseparks.shtml"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Marshall Creek Park
            </a>
            , managed by the Town of Trophy Club. That park clock is not a house schedule on this plat.
          </p>
          <p>
            Outdoor watering follows the city&apos;s year-round Fort Worth wholesale schedule, not a Trophy Club MUD
            clock. Check the city&apos;s{' '}
            <a
              href="https://roanoketexas.gov/448/Watering-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              watering restrictions page
            </a>
            ,{' '}
            <a
              href="https://roanoketexas.gov/485/Permits"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              irrigation permit requirements
            </a>
            , the{' '}
            <a
              href="https://www.roanoketexas.gov/DocumentCenter/View/4068/Marshall-Creek-PD-2014-16"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              2014 planned-development ordinance
            </a>
            , and weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>
            . This is Marshall Creek on City of Roanoke water — not Fairway Ranch, not Briarwyck, and not Hogan&apos;s
            Glen. Office frontage and Corps park turf are not a reason to ignore drip at foundations or drainage after
            storms on group D clay.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Marshall Creek?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
