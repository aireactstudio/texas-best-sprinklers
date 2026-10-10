import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function TheHighlandsPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Trophy Club"
      citySlug="trophy-club"
      neighborhoodName="The Highlands"
      canonicalUrl="https://sprinkleranddrains.com/trophy-club/the-highlands"
      pageTitle="The Highlands Sprinkler Repair & Drainage in Trophy Club, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Trophy Club’s Highlands PID lots on TCMUD water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="The Highlands Sprinkler Repair & Drainage"
      heroDescription="The Highlands is Trophy Club’s multi-section planned development — Neighborhoods 1–9, Abbey Moor, and Turnberry on the same clay ridge, not a single gated HOA. House meters follow Trophy Club MUD even/odd days while PID commons, parks, and school lawns often run Tuesday and Friday. Those yards need cycle-and-soak, drip at foundations, and a controller that matches the house address, not a copied park or Hogan’s Glen clock."
      introHeading="PID commons clocks are not a house-meter schedule"
      intro={
        <>
          <p>
            The Highlands is a numbered-neighborhood planned development inside the Town of Trophy Club, Denton County,
            ZIP 76262 — not Hogan&apos;s Glen, not Old Town, not Trophy Wood civic streets, and not the Roanoke list
            that also uses the name Highlands. The Town of Trophy Club created Public Improvement District No. 1 here on
            April 16, 2007, for most of the Highlands planned development (about 609 of roughly 696 acres). The town
            describes it as the first municipally bonded PID in Texas. PID assessments paid for roads, drainage, trails,
            parks, entry monuments, and landscaping irrigation on common ground. The town&apos;s HOA directory splits
            the same map three ways: Neighborhoods 1, 2, 5, 6, 7, and 9 under The Highlands at Trophy Club HOA
            (Principal Management Group); Abbey Moor as Neighborhood 8 (Neighborhood Management Inc.); and Turnberry as
            Neighborhoods 3 and 4 (CMA Management). Streets used on this page come from plats and listings, not from a
            realtor tour: Trophy Club Drive in Neighborhood 1, Parkview Drive along Samuel Beck Elementary and Medlin
            Middle, Village Trail at Lakeview Elementary, Earl Drive / Nottingham Drive / Sherwood Drive / Exeter Drive
            in Abbey Moor, Alisa Lane and Abby Lane in Turnberry, plus Glasgow Drive and Carrick Drive in the wider
            Highlands plats. Lot types in the PID plan run from about 3,000 square feet up to 12,000. A controller
            copied from Independence Park, a school lawn, or a gated Indian Creek lot will soak a Parkview strip while a
            shaded Glasgow side yard stays brown.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services The Highlands as part of our Trophy Club and Highway
            114 work. We are a licensed irrigator (LI22462). Most addresses sit on{' '}
            <a
              href="https://www.tcmud.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Trophy Club Municipal Utility District No. 1
            </a>{' '}
            at 100 Municipal Drive. The district buys wholesale water from the City of Fort Worth and keeps Monday off so
            tanks can refill and avoid peak-usage charges. Year-round Stage 1 on the{' '}
            <a
              href="https://www.tcmud.org/watering-schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              TCMUD watering schedule
            </a>{' '}
            is twice weekly: even last digits Wednesday and Saturday, odd last digits Thursday and Sunday, and
            commercial or common areas Tuesday and Friday. Spray is banned from 10 a.m. to 6 p.m. Drip and soaker hoses
            may run any day except Monday. We do not copy a Hogan&apos;s Glen gate clock, a Roanoke guess, or the PID
            commons Tuesday/Friday program onto a Trophy Club Drive house meter. We follow{' '}
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
            . Architecture review is not one form for the whole map — Neighborhoods 1, 2, 5, 6, 7, and 9 use the
            Highlands HOA TownSq portal, Abbey Moor uses its own association, and Turnberry uses CMA. We do not claim a
            count of jobs on Trophy Club Drive, Parkview Drive, Earl Drive, Alisa Lane, or Glasgow Drive, and we do not
            treat Independence Park, Samuel Beck, Lakeview, or Medlin turf as a substitute for diagnosing a private
            yard. We walk zones, keep spray off drives and sidewalks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'The Highlands sits on Trophy Club MUD No. 1 — Fort Worth wholesale with Monday off so tanks refill. Copying a PID, park, or school Tuesday/Friday clock is the wrong starting point for a house meter.',
        'Parkview Drive fronts are judged from weekday school and Independence Park traffic. Tilted heads and overspray show because Beck Elementary, Indy West, and Medlin Middle sit on the same corridor.',
        'Clay sheds a long first cycle on both 12,000-square-foot pads and tighter Abbey Moor / patio-scale lots. Cycle-and-soak and foundation drip matter more here than another hour of spray.',
        'This is not Hogan’s Glen’s gated Indian Creek enclave, not Old Town, not Trophy Wood civic streets, and not Roanoke’s similarly named list. The PID and three HOAs are the map.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Trophy Club Drive, Parkview Drive, Earl Drive, Alisa Lane, and Glasgow Drive.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on HOA-visible lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit the current TCMUD even/odd day — not a copied park, school, or Hogan’s Glen calendar.',
        'Drainage planning for patio lows, PID storm lines, and runoff that follows Parkview and trail grade after storms on clay.',
        'Outdoor lighting repair and additions for entries and drives that stay visible from Parkview and Trophy Club Drive without changing the section’s street character.'
      ]}
      localTips={[
        'Confirm the current TCMUD Stage 1 notice before you pick watering days. Highlands house meters do not follow Independence Park or school Tuesday/Friday clocks.',
        'Use the last digit of the physical address: even Wednesday/Saturday, odd Thursday/Sunday. Skip 10 a.m. to 6 p.m. and leave Monday off.',
        'Use shorter cycle-and-soak windows so Highlands clay can absorb water instead of sending it toward a Parkview sidewalk or a patio low.',
        'Ask which HOA actually reviews your lot — Highlands TownSq, Abbey Moor, or Turnberry — before you change visible heads, lighting, or grade.',
        'Ask whether a PID, park, or common-area clock already waters a shared edge. A house-only controller on Trophy Club Drive should not copy that runtime.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and park-facing clocks often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'Three HOAs, not one ACC form',
          description:
            'Neighborhoods 1, 2, 5, 6, 7, and 9 file architecture requests through The Highlands at Trophy Club HOA. Abbey Moor (Neighborhood 8) and Turnberry (Neighborhoods 3 and 4) are separate associations. Tilted heads on Earl Drive or Alisa Lane still show from the street, but the paperwork is not the Hogan’s Glen gate packet and not a town-wide one-form ACC.'
        },
        {
          title: 'TCMUD even/odd rules, not a PID Tuesday/Friday guess',
          description:
            'Most Highlands meters sit on Trophy Club MUD No. 1. Stage 1 is twice a week by address digit, with a 10 a.m.–6 p.m. ban and Monday off so tanks refill. PID landscaping irrigation and Independence Park clocks are common-area calendars. We set house controllers for the current district notice, not a school lawn and not a Roanoke or Westlake calendar.'
        },
        {
          title: 'Parkview school-corridor clay next to trail-backed shade',
          description:
            'Beck Elementary at 401 Parkview, Independence Park West at 501 Parkview, and Medlin Middle at 601 Parkview put weekday traffic on the same fronts. Trail-backed and Glasgow / Carrick lots often sit in more canopy. One long cycle floods a street strip while a shaded corner stays brown. This is not Hogan’s Glen’s gated golf-edge map.'
        },
        {
          title: 'Foundation drip and PID drainage, not more spray',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water next to the PID storm system the town already bonded. Civic park and campus turf is not a private Highlands backyard.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Highlands street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Highlands street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in The Highlands',
        title: 'The Parkview strip looked soaked while a Glasgow corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Trophy Club / nearby DFW service — not a named Highlands street, and not work at Independence Park, Samuel Beck Elementary, Lakeview Elementary, or Medlin Middle School.',
        body: 'A common Highlands call looks like this: a controller on Trophy Club Drive, Parkview Drive, Earl Drive, or Alisa Lane is still running one long summer cycle, and the day pattern was copied from Independence Park, a school lawn, or a Hogan’s Glen gated guess. Clay sheds the first pass. Leftover spray hits the drive while a shaded Glasgow or Carrick corner stays brown because canopy grew in after the lot was finished. Across the street, a west-facing Parkview strip cooks against pavement and needs drip, not more spray. An Abbey Moor lot on Nottingham or Exeter may already sit next to a PID-maintained edge that does not match the house meter. Stage 1 only allows two assigned days from the last address digit, with Monday off so MUD tanks refill, so a leftover everyday program wastes water and can draw a district notice. Lot size in the PID plan is not one number — 12,000-square-foot pads and tighter 3,000-square-foot lots do not share a rotor runtime. We map which zones the owner actually controls, check the meter against the current TCMUD notice, match nozzles so spray stays off drives and sidewalks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows on the assigned days rather than a park or school guess. If the low patio is irrigation plus a downspout next to PID drainage, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'The Highlands clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 76262 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Parkview sidewalks, Trophy Club Drive, and patio lows. This is not Hogan’s Glen gated-golf saturation and not Old Town compact-pad runoff — it is Highlands PID clay on Trophy Club MUD.'
        },
        {
          title: 'Heat, ET, and TCMUD controller schedules in The Highlands',
          description:
            'Pavement along Parkview and Trophy Club Drive holds heat after sunset, and Stage 1 already bans spray from 10 a.m. to 6 p.m. House controllers still need the correct even/odd day, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. A PID or Independence Park Tuesday/Friday clock is not a substitute for the current district notice.'
        },
        {
          title: 'Parkview fronts versus trail-backed lots in The Highlands',
          description:
            'Lots on Parkview Drive are judged from weekday school and park traffic at Beck, Indy West, and Medlin. Trail-backed and Glasgow / Carrick pads often sit closer to canopy. Shared runtimes overwater the street strip and starve a shaded corner. Separate nozzle types and zone timing keep both sides of a Highlands lot honest without changing the HOA curb look.'
        },
        {
          title: 'Three HOAs, PID drainage, and foundation drip in The Highlands',
          description:
            'Visible head, lighting, or grading changes go through the correct association — Highlands TownSq, Abbey Moor, or Turnberry — not a copied Hogan’s Glen ACC packet. Patio lows and downspouts add to clay that already drains slowly toward the PID storm system. Foundations belong on drip, not another hour of spray. Do not confuse this map with Old Town, Trophy Wood, or Westlake’s Vaquero.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'The Highlands site assessment and issue mapping, including Parkview-facing turf, PID-edge lows, and any trail-backed grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with TCMUD Stage 1 days, the correct HOA curb appeal, and park-corridor overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in The Highlands?',
          answer:
            'Yes, plan on both when the work is visible — and confirm which HOA actually reviews your lot. Neighborhoods 1, 2, 5, 6, 7, and 9 use The Highlands at Trophy Club HOA (Principal Management Group / TownSq architecture requests). Abbey Moor is Neighborhood 8. Turnberry covers Neighborhoods 3 and 4. The Town of Trophy Club charges an $85 irrigation permit for new or expanded systems and expects a backflow test; the Permit Department is at 1 Trophy Wood Drive (682-237-2917, permitting@trophyclub.org). Ordinary head and pipe repairs that stay inside the existing layout usually do not need a new town permit, but we still describe the visible scope before work starts. A licensed irrigator (we are LI22462) should design or alter the system. Dig Tess (811) locates public lines; the town does not mark private property. We do not file town or HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water The Highlands clay, shade, and school-corridor lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Parkview-facing turf often belongs on a shorter throw or drip, not a long rotor cycle copied from a backyard or from Independence Park. Confirm the current TCMUD Stage 1 notice before you pick days — even Wednesday/Saturday, odd Thursday/Sunday, no 10 a.m.–6 p.m. spray, Monday off. Drip and soaker hoses may run any day except Monday. We do not copy a PID commons Tuesday/Friday clock or a Hogan’s Glen gated guess onto a Highlands house meter. Do not copy Samuel Beck, Lakeview, or Medlin civic irrigation onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size (PID lot types range from about 3,000 to 12,000 square feet), HOA appearance rules, MUD pressure, and grade toward Parkview or trail edges change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in The Highlands?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. HOA notice, wiring faults, or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority. Parkview school drop-off and Independence Park events can slow truck access — we plan around that corridor instead of treating it like a gated Hogan’s Glen entrance.'
        },
        {
          question: 'How do you set controllers for The Highlands watering rules here?',
          answer:
            'Confirm the current Stage 1 notice on tcmud.org/watering-schedule before you change days. TCMUD assigns two watering days from the last digit of the physical address (even Wednesday and Saturday, odd Thursday and Sunday), bans spray from 10 a.m. to 6 p.m., and keeps Monday off so tanks refill. Commercial and common areas water Tuesday and Friday — that is the PID / park / school-style calendar, not the house-meter calendar. We program start times that match the district notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water toward sidewalks. New sod needs a MUD variance for the first 30 days and still cannot water Monday or between 10 a.m. and 6 p.m. Always confirm the latest district notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: "Hogan's Glen",
          description:
            'Gated Indian Creek enclave next to the Hogan championship course — a different HOA, gate, and golf-edge map than the Highlands PID.',
          link: '/trophy-club/hogans-glen'
        },
        {
          name: 'Old Town',
          description:
            'Earlier Trophy Club streets closer to the original club development. A different pad and canopy pattern than numbered Highlands neighborhoods.',
          link: '/trophy-club'
        },
        {
          name: 'Trophy Wood',
          description:
            'Town Hall sits at 1 Trophy Wood Drive. Civic and hillside streets here are not a substitute for diagnosing Parkview or Trophy Club Drive.',
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
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on Highlands PID clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on Parkview and Trophy Club Drive fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Parkview and trail grade after storms.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Town of Trophy Club',
          url: 'https://www.trophyclub.org/',
          description:
            'Town Hall at 1 Trophy Wood Drive is the official source for agendas, ordinances, PID questions, and permits — and the civic neighbor to the private lots this page is about.'
        },
        {
          name: 'Independence Park',
          url: 'https://www.trophyclub.org/474/Independence-Park',
          description:
            'Twenty-three acres on both sides of Parkview. Independence Park West at 501 Parkview sits between Beck Elementary and Medlin Middle. Civic irrigation, not a house-meter substitute.'
        },
        {
          name: 'Samuel Beck Elementary',
          url: 'https://beck.nisdtx.org/',
          description:
            'Northwest ISD campus at 401 Parkview Drive. School-zone traffic is why tilted heads get noticed on Highlands fronts — still not a campus irrigation contract.'
        },
        {
          name: 'Lakeview Elementary',
          url: 'https://lakeview.nisdtx.org/',
          description:
            'Northwest ISD campus at 100 Village Trail. One of the on-site schools the Highlands HOA lists inside the planned development. Civic turf, not a private backyard.'
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
            Daily life in The Highlands is tied to the{' '}
            <a
              href="https://www.trophyclub.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Trophy Club
            </a>{' '}
            at 1 Trophy Wood Drive, the town&apos;s{' '}
            <a
              href="https://www.trophyclub.org/361/Public-Improvement-District-PID"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Public Improvement District
            </a>{' '}
            for this planned development, and campuses in{' '}
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
              href="https://beck.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Samuel Beck Elementary
            </a>{' '}
            at 401 Parkview Drive,{' '}
            <a
              href="https://lakeview.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Lakeview Elementary
            </a>{' '}
            at 100 Village Trail, and{' '}
            <a
              href="https://medlin.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Medlin Middle School
            </a>{' '}
            at 601 Parkview Drive. Architecture requests for Neighborhoods 1, 2, 5, 6, 7, and 9 go through{' '}
            <a
              href="https://www.thehighlandsattrophyclubhoa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              The Highlands at Trophy Club HOA
            </a>
            ; Abbey Moor and Turnberry keep their own associations. Families use{' '}
            <a
              href="https://www.trophyclub.org/474/Independence-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Independence Park
            </a>{' '}
            on Parkview for sports and play; those civic clocks are not a Highlands house schedule.
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
            </a>{' '}
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
            . This is The Highlands on Trophy Club MUD and PID No. 1 — not Hogan&apos;s Glen, not Old Town, not Trophy
            Wood civic streets, and not a Roanoke neighborhood that happens to share the name. Park turf and campus lawns
            are civic access — not a reason to treat every lot as a sports field or to ignore drip at foundations after
            storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in The Highlands?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
