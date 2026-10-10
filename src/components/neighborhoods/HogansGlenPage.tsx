import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function HogansGlenPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Trophy Club"
      citySlug="trophy-club"
      neighborhoodName="Hogan's Glen"
      canonicalUrl="https://sprinkleranddrains.com/trophy-club/hogans-glen"
      pageTitle="Hogan's Glen Sprinkler Repair & Drainage in Trophy Club, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for gated Hogan’s Glen lots on Trophy Club MUD water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Hogan's Glen Sprinkler Repair & Drainage"
      heroDescription="Hogan’s Glen is the gated enclave inside Trophy Club off Indian Creek — clay lots with mature trees, pond-side grade, and turf that faces the Ben Hogan championship course. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set for Trophy Club MUD even/odd days, not a copied golf-course or Old Town clock."
      introHeading="Gated golf-edge lots still sit on clay that sheds a long watering cycle"
      intro={
        <>
          <p>
            Hogan&apos;s Glen is a guard-gated section of the Town of Trophy Club, not Old Town, not The Highlands, and
            not a Westlake golf community. The association lists the main entrance at 103 Indian Creek. Listing
            directions and HOA notes place homes on Indian Creek, Spyglass, Cypress Court in the Villas of Hogan&apos;s
            Glen, and Hale Court. ZIP 76262. Denton County. The HOA describes a country-club setting next to the
            world&apos;s only Ben Hogan-designed championship course at Trophy Club Country Club, 500 Trophy Club Drive.
            Mature canopy, a community water feature, and published pond-survey and public-drainage-easement documents
            are part of the same clay that already drains slowly after a North Texas storm. Many fronts are judged from
            the gate road at 20 miles per hour — the HOA reminds residents that walkers, joggers, and golf carts share
            those streets. A controller copied from an ungated Highlands section, or from the golf-course clock that
            waters commons on Tuesday and Friday, will soak a Cypress Court drive while a shaded Hale Court side yard
            stays brown. Extra spray just adds runoff toward the pond easement and golf-edge grade. Realtor pages
            sometimes lump every 76262 address into “Trophy Club golf.” This page is Hogan&apos;s Glen lots only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Hogan&apos;s Glen as part of our Trophy Club and
            Highway 114 work. We are a licensed irrigator (LI22462). Most addresses sit on{' '}
            <a
              href="https://www.tcmud.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Trophy Club Municipal Utility District No. 1
            </a>
            {' '}
            at 100 Municipal Drive. The district buys wholesale water from the City of Fort Worth and keeps Monday off
            so tanks can refill and avoid peak-usage charges. Year-round Stage 1 on the{' '}
            <a
              href="https://www.tcmud.org/watering-schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              TCMUD watering schedule
            </a>
            {' '}
            is twice weekly: even last digits Wednesday and Saturday, odd last digits Thursday and Sunday, and
            commercial or common areas Tuesday and Friday. Spray is banned from 10 a.m. to 6 p.m. Drip and soaker hoses
            may run any day except Monday. We do not copy a Roanoke, Westlake, or Old Town guess onto an Indian Creek
            controller. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. New or expanded irrigation in town needs
            an irrigation permit and a backflow test through the{' '}
            <a
              href="https://www.trophyclub.org/210/When-a-Permit-is-Required"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Town of Trophy Club Permit Department
            </a>
            . The Hogan&apos;s Glen HOA also says an ACC request is required before any exterior modification, including
            visible heads, lighting, or grading. We do not claim a count of jobs on Indian Creek, Cypress Court, Hale
            Court, or Spyglass, and we do not treat the championship course, Trophy Club Park, Independence Park, or
            Lakeview Elementary turf as a substitute for diagnosing a private yard. We walk zones, keep spray off
            drives, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Hogan’s Glen is Trophy Club MUD No. 1 water — Fort Worth wholesale with Monday off so tanks refill. Copying a golf-course Tuesday/Friday clock is the wrong starting point for a house meter.',
        'Gated Indian Creek and Cypress Court fronts are judged from the 20 mph gate road. Tilted heads and overspray show because walkers and golf carts pass every day.',
        'Pond-side easements and golf-edge clay shed a long first cycle. Cycle-and-soak and foundation drip matter more here than another hour of spray.',
        'Do not confuse this enclave with Old Town, The Highlands’ many HOA sections, Trophy Wood civic streets, or Westlake’s Vaquero. The main gate is 103 Indian Creek, ZIP 76262.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Indian Creek, Cypress Court, Hale Court, and Spyglass.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on gated lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit the current TCMUD even/odd day — not a copied golf or Old Town calendar.',
        'Drainage planning for patio lows, pond-easement saturation, and runoff that follows golf-edge grade after storms on clay.',
        'Outdoor lighting repair and additions for entries and drives that stay visible from the gate road without changing the HOA street character.'
      ]}
      localTips={[
        'Confirm the current TCMUD Stage 1 notice before you pick watering days. Hogan’s Glen does not follow a golf-course Tuesday/Friday house clock.',
        'Use the last digit of the physical address: even Wednesday/Saturday, odd Thursday/Sunday. Skip 10 a.m. to 6 p.m. and leave Monday off.',
        'Use shorter cycle-and-soak windows so Hogan’s Glen clay can absorb water instead of sending it toward the pond easement or a golf-edge slope.',
        'Ask whether a common-area or course clock already waters a shared edge. A house-only controller on Cypress Court should not copy that runtime.',
        'The HOA requires written ACC approval before visible head, lighting, or grading changes. Ordinary in-place repairs usually stay inside the existing layout.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and golf-facing clocks often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'ACC-visible curb appeal on a 20 mph gate road',
          description:
            'Indian Creek, Spyglass, and Cypress Court sit inside a guard-gated HOA that reviews exterior changes. Tilted heads, misting, and dry strips show because walkers and golf carts pass the same fronts every day. We match nozzles and cut overspray without inventing an Old Town no-HOA scope.'
        },
        {
          title: 'TCMUD even/odd rules, not a golf-course Tuesday/Friday guess',
          description:
            'Most Hogan’s Glen meters sit on Trophy Club MUD No. 1. Stage 1 is twice a week by address digit, with a 10 a.m.–6 p.m. ban and Monday off so tanks refill. We set house controllers for the current district notice, not Trophy Club Country Club commons and not a Roanoke or Westlake calendar.'
        },
        {
          title: 'Golf-edge shade next to full-sun clay',
          description:
            'Mature trees and the Hogan course edge create shade/sun splits on the same lot. One long cycle floods a Hale Court drive while a canopy corner stays brown. This is not The Highlands’ multi-section HOA map and not an ungated Old Town pad.'
        },
        {
          title: 'Foundation drip, pond easements, and slope toward the course',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water next to the HOA pond survey and public drainage easement. Civic park and course turf is not a private Hogan’s Glen backyard.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Hogan’s Glen street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Hogan’s Glen street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Hogan’s Glen',
        title: 'The sunny Indian Creek front looked wet while a shaded Hale Court corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Trophy Club / nearby DFW service — not a named Hogan’s Glen street, and not work at Trophy Club Country Club, Trophy Club Park, Independence Park, or Lakeview Elementary.',
        body: 'A common Hogan’s Glen call looks like this: a controller on Indian Creek, Cypress Court, or Hale Court is still running one long summer cycle, and the day pattern was copied from the golf-course Tuesday/Friday commons clock or from an Old Town guess. Clay sheds the first pass. Leftover spray hits the drive while a shaded Spyglass or Hale Court corner stays brown because canopy grew in after the lot was finished. Across the street, a west-facing strip cooks against pavement and needs drip, not more spray. A Villas of Hogan’s Glen lot on Cypress Court may already sit next to a maintained edge that does not match the house meter. Stage 1 only allows two assigned days from the last address digit, with Monday off so MUD tanks refill, so a leftover everyday program wastes water and can draw a district notice. Elevation toward the Hogan course and the HOA pond easement can make one zone mist and another pond. We map which zones the owner actually controls, check the meter against the current TCMUD notice, match nozzles so spray stays off drives, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows on the assigned days rather than a golf-course guess. If the low patio is irrigation plus a downspout next to the drainage easement, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: "Hogan's Glen clay and cycle-and-soak",
          description:
            'Expansive North Texas clay on these 76262 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Indian Creek, the pond easement, and golf-edge grade. This is not Old Town compact-pad saturation and not The Highlands’ multi-section HOA map — it is gated Hogan’s Glen clay on Trophy Club MUD.'
        },
        {
          title: 'Heat, ET, and TCMUD controller schedules',
          description:
            'Pavement inside the gate holds heat after sunset, and Stage 1 already bans spray from 10 a.m. to 6 p.m. House controllers still need the correct even/odd day, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. A golf-course Tuesday/Friday clock is not a substitute for the current district notice.'
        },
        {
          title: 'Indian Creek gate fronts versus golf-edge shade',
          description:
            'Lots on Indian Creek and Cypress Court are judged from weekday gate traffic, while Hale Court and Spyglass pads often sit closer to canopy and course-edge shade. Shared runtimes overwater the street strip and starve a shaded corner. Separate nozzle types and zone timing keep both sides of a Hogan’s Glen lot honest without changing the gated curb look.'
        },
        {
          title: 'Pond easements, foundation drip, and ACC rules in Hogan’s Glen',
          description:
            'The HOA has published a pond survey and a public drainage easement, so extra spray that ponds at a patio is not just a turf problem. Patio lows and downspouts add to clay that already drains slowly toward the course. Foundations belong on drip, not another hour of spray. Visible head, lighting, or grading changes go through ACC first. Do not confuse this enclave with Old Town, The Highlands, or Westlake’s Vaquero.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Hogan’s Glen site assessment and issue mapping, including Indian Creek-facing turf, pond-easement lows, and any golf-edge grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with TCMUD Stage 1 days, ACC curb appeal, and golf-edge overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Hogan’s Glen?',
          answer:
            'Yes, plan on both when the work is visible. The Hogan’s Glen HOA says an ACC request is required before any exterior modification, change, repair, replacement, or addition — including heads, lighting, and grading. The Town of Trophy Club charges an $85 irrigation permit for new or expanded systems and expects a backflow test; the Permit Department is at 1 Trophy Wood Drive (682-237-2917, permitting@trophyclub.org). Ordinary head and pipe repairs that stay inside the existing layout usually do not need a new town permit, but we still describe the visible scope before work starts. A licensed irrigator (we are LI22462) should design or alter the system. Dig Tess (811) locates public lines; the town does not mark private property. We do not file town or ACC applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Hogan’s Glen clay, shade, and golf-edge lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Golf-edge and pond-side pads need matched nozzles so spray stays off drives, neighbor fences, and easements. Indian Creek-facing turf often belongs on a shorter throw or drip, not a long rotor cycle copied from a backyard. Confirm the current TCMUD Stage 1 notice before you pick days — even Wednesday/Saturday, odd Thursday/Sunday, no 10 a.m.–6 p.m. spray, Monday off. Drip and soaker hoses may run any day except Monday. We do not copy a golf-course Tuesday/Friday commons clock or an Old Town guess onto a Hogan’s Glen house meter. Do not copy Trophy Club Park or Lakeview Elementary civic irrigation onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, ACC appearance rules, MUD pressure, pond-easement grade, and slope toward the course change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Hogan’s Glen?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Gate access, ACC notice, wiring faults, or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority. Call the guard house ahead if a large truck needs a construction access point — Cypress Court listings note the front canopy entrance is not always usable for oversized vehicles.'
        },
        {
          question: 'How do you set controllers for Hogan’s Glen watering rules here?',
          answer:
            'Confirm the current Stage 1 notice on tcmud.org/watering-schedule before you change days. TCMUD assigns two watering days from the last digit of the physical address (even Wednesday and Saturday, odd Thursday and Sunday), bans spray from 10 a.m. to 6 p.m., and keeps Monday off so tanks refill. Commercial and common areas water Tuesday and Friday — that is not the house-meter calendar. We program start times that match the district notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water toward the pond easement. New sod needs a MUD variance for the first 30 days and still cannot water Monday or between 10 a.m. and 6 p.m. Always confirm the latest district notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'The Highlands',
          description:
            'Trophy Club’s multi-section Highlands HOAs — Neighborhoods 1–9, Abbey Moor, and Turnberry — are not the gated Indian Creek enclave.',
          link: '/trophy-club/the-highlands'
        },
        {
          name: 'Old Town',
          description:
            'Earlier Trophy Club streets closer to the original club development. A different pad and canopy pattern than Hogan’s Glen.',
          link: '/trophy-club'
        },
        {
          name: 'Trophy Wood',
          description:
            'Town Hall sits at 1 Trophy Wood Drive. Civic and hillside streets here are not a substitute for diagnosing Cypress Court.',
          link: '/trophy-club'
        },
        {
          name: 'Vaquero',
          description:
            'Westlake’s guard-gated golf community on former Circle T Ranch land — nearby on 114, not Trophy Club MUD water.',
          link: '/westlake/vaquero'
        },
        {
          name: 'Glenwyck Farms',
          description:
            'Westlake wooded lots beside the nature preserve. Similar clay, different city utility and HOA map.',
          link: '/westlake/glenwyck-farms'
        },
        {
          name: 'Marshall Creek',
          description:
            'City of Roanoke compact lots on Sycamore Lane and Marshall Creek Road. City of Roanoke water, not Trophy Club MUD.',
          link: '/roanoke/marshall-creek'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on gated Hogan’s Glen clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on Indian Creek and Cypress Court fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, pond-easement ponding, and runoff that moves toward golf-edge grade after storms.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Town of Trophy Club',
          url: 'https://www.trophyclub.org/',
          description:
            'Town Hall at 1 Trophy Wood Drive is the official source for agendas, ordinances, and permits — and the civic neighbor to the private lots this page is about.'
        },
        {
          name: 'Trophy Club Park',
          url: 'https://www.trophyclub.org/510/General-Amenities',
          description:
            'The town park at 2885 Trophy Park Drive is a civic gathering spot. Park turf is not a private Hogan’s Glen backyard.'
        },
        {
          name: 'Independence Park',
          url: 'https://www.trophyclub.org/474/Independence-Park',
          description:
            'Twenty-three acres on both sides of Parkview for youth sports and courts near Medlin Middle and Beck Elementary. Civic irrigation, not a house-meter substitute.'
        },
        {
          name: 'Lakeview Elementary',
          url: 'https://lakeview.nisdtx.org/',
          description:
            'Northwest ISD campus at 100 Village Trail. School-zone traffic is why tilted heads get noticed on the way to the gate — still not a campus irrigation contract.'
        },
        {
          name: 'Trophy Club MUD watering schedule',
          url: 'https://www.tcmud.org/watering-schedule',
          description:
            'Stage 1 even/odd days, the 10 a.m.–6 p.m. ban, Monday-off tank refill, and sod-variance rules live on the district site. Civic guidance for MUD customers — not a private-yard substitute.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Hogan&apos;s Glen is tied to the{' '}
            <a
              href="https://www.trophyclub.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Trophy Club
            </a>
            {' '}
            at 1 Trophy Wood Drive, campuses in{' '}
            <a
              href="https://www.trophyclub.org/284/Northwest-Independent-School-District-NI"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Northwest ISD
            </a>
            {' '}
            — including{' '}
            <a
              href="https://lakeview.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Lakeview Elementary
            </a>
            {' '}
            at 100 Village Trail — and the private{' '}
            <a
              href="https://www.invitedclubs.com/clubs/trophy-club-country-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Trophy Club Country Club
            </a>
            {' '}
            at 500 Trophy Club Drive. The{' '}
            <a
              href="https://hogansglenhoa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hogan&apos;s Glen HOA
            </a>
            {' '}
            handles gate access, ACC requests, and the pond and drainage documents that sit next to private yards.
            Families use{' '}
            <a
              href="https://www.trophyclub.org/510/General-Amenities"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Trophy Club Park
            </a>
            {' '}
            at 2885 Trophy Park Drive and{' '}
            <a
              href="https://www.trophyclub.org/474/Independence-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Independence Park
            </a>
            {' '}
            on Parkview for sports and play; those civic clocks are not a Hogan&apos;s Glen house schedule.
          </p>
          <p>
            Outdoor watering follows{' '}
            <a
              href="https://www.tcmud.org/watering-schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Trophy Club MUD Stage 1
            </a>
            {' '}
            days and the current district notice, plus the town&apos;s{' '}
            <a
              href="https://www.trophyclub.org/384/Water-Conservation-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              water conservation page
            </a>
            . New or expanded irrigation may go through{' '}
            <a
              href="https://www.trophyclub.org/210/When-a-Permit-is-Required"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              When a Permit is Required
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
            and town background on{' '}
            <a
              href="https://www.trophyclub.org/280/Conservation-Preservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Conservation &amp; Preservation
            </a>
            . This is Hogan&apos;s Glen on Trophy Club MUD — not Old Town, not The Highlands&apos; many HOA sections, and
            not Westlake Vaquero. Course turf and town parks are civic access — not a reason to treat every lot as
            fairway-edge or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Hogan's Glen?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
