import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function TheLakesPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Trophy Club"
      citySlug="trophy-club"
      neighborhoodName="The Lakes of Trophy Club"
      canonicalUrl="https://sprinkleranddrains.com/trophy-club/the-lakes"
      pageTitle="The Lakes of Trophy Club Sprinkler Repair & Drainage in Trophy Club, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for The Lakes of Trophy Club lots on Trophy Club MUD water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="The Lakes of Trophy Club Sprinkler Repair & Drainage"
      heroDescription="The Lakes of Trophy Club is a gated Denton County neighborhood of about 339 homes built between 1998 and 2002, according to the association, on lots of roughly 0.15 to 0.35 acre around three greenbelt ponds. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set for Trophy Club MUD even/odd days, not a copied common-area clock."
      introHeading="Pond-side greenbelts and house meters do not share one watering clock"
      intro={
        <>
          <p>
            The Lakes of Trophy Club is a residential subdivision inside the Town of Trophy Club, Denton County, ZIP
            76262 — not The Highlands, not Hogan&apos;s Glen, and not Old Town. The Lakes of Trophy Club Homeowners
            Association, Inc. covers Phases 1, 2, and 3 of the plat. The association describes 339 homes built between
            1998 and 2002 on lots that typically run about 0.15 to 0.35 acre, with walking trails along three greenbelt
            ponds, a community pool, and a gated Meadow Ridge entrance. County and listing records place homes on
            streets such as Parkway Court in Phase 1 and Ridgewood Drive in Phase 3. The{' '}
            <a
              href="https://www.trophyclub.org/343/HOAs-Clubs-Organizations"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Town of Trophy Club HOA directory
            </a>{' '}
            lists The Lakes of Trophy Club as its own association, separate from the Highlands neighborhoods and
            Hogan&apos;s Glen. The mix of 1998-era pads and larger 2002-era lots matters for irrigation. Older systems
            on tighter lots tend to have aging heads and valves, while pond-side and greenbelt edges can hold water
            after storms. A controller copied from a pond-edge common area, a pool, or a Highlands school lawn will not
            fit a house meter on a cul-de-sac lot.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services The Lakes of Trophy Club as part of our Trophy Club
            and Highway 114 work. We are a licensed irrigator (LI22462). Homes in Trophy Club are served by{' '}
            <a
              href="https://www.tcmud.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Trophy Club Municipal Utility District No. 1
            </a>{' '}
            at 100 Municipal Drive; the district buys water wholesale from the City of Fort Worth and keeps Monday off
            so tanks can refill. The district&apos;s{' '}
            <a
              href="https://www.tcmud.org/watering-schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              watering schedule
            </a>{' '}
            is twice weekly year-round: even last digits Wednesday and Saturday, odd last digits Thursday and Sunday,
            and commercial addresses Tuesday and Friday. Watering is not permitted between 10 a.m. and 6 p.m. on any
            day. Soaker hose and drip irrigation are allowed any time except Monday, and a hand-held hose or bucket may
            be used at any time. We do not copy a Hogan&apos;s Glen gate clock or a Roanoke guess onto a Lakes house
            meter. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. New or expanded irrigation work may need
            a town permit — see the{' '}
            <a
              href="https://www.trophyclub.org/210/When-a-Permit-is-Required"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Town of Trophy Club Permit Department
            </a>{' '}
            (682-237-2917) before work starts, and check with the association before visible changes. We do not claim a
            count of jobs on Parkway Court or Ridgewood Drive, or at the Meadow Ridge entrance, and we do not treat the pool or
            pond greenbelts as a substitute for diagnosing a private yard. We walk zones, keep spray off drives and
            sidewalks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'The Lakes of Trophy Club is on Trophy Club MUD No. 1 — Fort Worth wholesale with Monday off so tanks refill. Copying a pool, pond-edge, or commercial Tuesday/Friday clock onto a house meter is the usual controller mistake.',
        'The association describes 339 homes built between 1998 and 2002. Original systems from that era are roughly 24 to 28 years old, so worn heads, buried nozzles, and leaking valves are common checks.',
        'Lots run about 0.15 to 0.35 acre by the association\'s description, so one runtime does not fit both a tight cul-de-sac pad and a larger Phase 3 lot.',
        'This is not The Highlands PID, not Hogan’s Glen’s gated golf-edge map, and not Old Town. The Lakes has its own association and its own gated Meadow Ridge entrance.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands on Parkway Court, Ridgewood Drive, and the surrounding Lakes streets.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on association-visible fronts.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit the current Trophy Club MUD even/odd day.',
        'Drainage planning for patio lows and runoff toward greenbelt and pond edges after storms.',
        'Outdoor lighting repair and additions for entries and drives that stay visible from the street without changing the neighborhood character.'
      ]}
      localTips={[
        'Confirm the current Trophy Club MUD notice before you pick watering days. Lakes house meters follow the residential even/odd schedule, not the commercial Tuesday/Friday days.',
        'Use the last digit of the physical address: even Wednesday/Saturday, odd Thursday/Sunday. Skip 10 a.m. to 6 p.m. and leave Monday off.',
        'Use shorter cycle-and-soak windows so North Texas clay can absorb water instead of sending it toward a sidewalk, a patio low, or a greenbelt edge.',
        'With systems installed between 1998 and 2002, walk each zone once a season and look for tilted, buried, or cracked heads before the water bill tells you.',
        'Ask the association before you change visible heads, lighting, or grade, and ask the Town Permit Department whether new or expanded irrigation needs a permit.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and a controller left on a peak-heat program wastes water in October.'
      ]}
      trustCards={[
        {
          title: 'Its own association, not a Highlands form',
          description:
            'The Lakes of Trophy Club Homeowners Association, Inc. covers Phases 1 through 3. It is listed separately from the Highlands neighborhoods and Hogan’s Glen in the town directory, so architecture questions go to the Lakes association, not another neighborhood packet.'
        },
        {
          title: 'TCMUD even/odd rules, not a commercial guess',
          description:
            'Trophy Club MUD No. 1 assigns two watering days from the last digit of the address, bans spray from 10 a.m. to 6 p.m., and keeps Monday off. Commercial addresses water Tuesday and Friday. We set house controllers for the current district notice.'
        },
        {
          title: 'Aging 1998–2002 systems on varied lot sizes',
          description:
            'Homes here were built over about four years, and lots range from roughly 0.15 to 0.35 acre. Older heads, valves, and timers on tight pads and larger Phase 3 lots rarely need the same zone times, so we walk each yard rather than apply one runtime to the street.'
        },
        {
          title: 'Foundation drip and greenbelt drainage, not more spray',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water near the pond greenbelts.'
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
        heading: 'Featured work for homes like these in The Lakes of Trophy Club',
        title: 'An original-era controller still running one long summer cycle',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Trophy Club / nearby DFW service — not a named Lakes street, and not work at the pool or pond greenbelts.',
        body: 'A common Lakes call looks like this: a controller on a late-1990s or early-2000s system is still running one long summer cycle on every zone. Clay sheds the first pass, leftover spray hits the drive, and a shaded corner stays brown while a south-facing strip cooks against pavement. Trophy Club MUD only allows two assigned days from the last address digit, with Monday off so tanks refill, so an everyday program wastes water and can draw a district notice. We map which zones the owner controls, check the meter against the current district notice, replace worn heads and match nozzles so spray stays off drives and sidewalks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows on the assigned days. If a low patio is irrigation plus a downspout, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Clay and cycle-and-soak in The Lakes',
          description:
            'Expansive North Texas clay on lots like these often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward sidewalks, drives, and patio lows.'
        },
        {
          title: 'Heat, ET, and TCMUD controller schedules',
          description:
            'The district already bans spray from 10 a.m. to 6 p.m. House controllers still need the correct even/odd day, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October.'
        },
        {
          title: 'System age on 1998–2002 homes',
          description:
            'Controllers, valves, and heads installed when the neighborhood was built are well past their first decade. Zone-by-zone testing finds failed heads and valve leaks that a timer reset will not fix.'
        },
        {
          title: 'Association approval, greenbelt edges, and foundation drip',
          description:
            'Visible head, lighting, or grading changes go through the Lakes association. Patio lows and downspouts add to clay that already drains slowly toward pond and greenbelt edges. Foundations belong on drip, not another hour of spray.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'The Lakes of Trophy Club site assessment and issue mapping, including pond-edge lows, foundation beds, and any aging zones',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with TCMUD even/odd days and association curb appeal in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or town approval for sprinkler or drainage work in The Lakes of Trophy Club?',
          answer:
            'Plan on checking with both when the work is visible or new. The Lakes of Trophy Club Homeowners Association, Inc. covers Phases 1 through 3. The Town of Trophy Club Permit Department (682-237-2917, permitting@trophyclub.org) can tell you whether a new or expanded irrigation system needs a permit. Ordinary head and pipe repairs that stay inside the existing layout usually do not, but we still describe the visible scope before work starts. A licensed irrigator (we are LI22462) should design or alter the system. Dig Tess (811) locates public lines. We do not file town or association applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water The Lakes of Trophy Club clay and mixed lot sizes?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Confirm the current TCMUD notice before you pick days — even Wednesday/Saturday, odd Thursday/Sunday, no 10 a.m.–6 p.m. watering, Monday off. Soaker hose and drip may run any time except Monday. We do not copy a commercial Tuesday/Friday clock or a Hogan’s Glen guess onto a Lakes house meter.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, association appearance rules, and grade toward greenbelt edges change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in The Lakes of Trophy Club?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority. Call (817) 304-7896.'
        },
        {
          question: 'How do you set controllers for Trophy Club MUD watering rules here?',
          answer:
            'Confirm the current notice on tcmud.org/watering-schedule before you change days. The district assigns two watering days from the last digit of the physical address (even Wednesday and Saturday, odd Thursday and Sunday), bans watering from 10 a.m. to 6 p.m., and keeps Monday off so tanks refill. Commercial addresses water Tuesday and Friday. We program start times that match the district notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water toward sidewalks. New sod or seed can get a 30-day variance permit from the district, which still excludes Mondays and 10 a.m.–6 p.m. Always confirm the latest district notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'The Highlands',
          description:
            'Trophy Club’s multi-section planned development with its own PID and associations — a different map than The Lakes.',
          link: '/trophy-club/the-highlands'
        },
        {
          name: "Hogan's Glen",
          description:
            'Gated Indian Creek enclave next to the Hogan championship course — a different association and golf-edge map.',
          link: '/trophy-club/hogans-glen'
        },
        {
          name: 'Marshall Creek',
          description:
            'A City of Roanoke addition nearby on Roanoke water, not Trophy Club MUD.',
          link: '/roanoke/marshall-creek'
        },
        {
          name: 'Briarwyck',
          description:
            'Roanoke’s Briarwyck 114 community, on City of Roanoke water with a different watering notice.',
          link: '/roanoke/briarwyck'
        },
        {
          name: 'Vaquero',
          description:
            'Westlake’s guard-gated golf community nearby on 114, not Trophy Club MUD water.',
          link: '/westlake/vaquero'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on Lakes of Trophy Club lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff toward greenbelt edges after storms.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Town of Trophy Club',
          url: 'https://www.trophyclub.org/',
          description:
            'Town Hall at 1 Trophy Wood Drive is the official source for ordinances, HOA directory, and permits.'
        },
        {
          name: 'Town HOA directory',
          url: 'https://www.trophyclub.org/343/HOAs-Clubs-Organizations',
          description:
            'The town’s list of homeowners associations, including The Lakes of Trophy Club, and who to contact about whether a property is in an HOA.'
        },
        {
          name: 'Trophy Club MUD watering schedule',
          url: 'https://www.tcmud.org/watering-schedule',
          description:
            'Even/odd days, the 10 a.m.–6 p.m. restriction, Monday-off tank refill, and the new-grass variance process live on the district site.'
        },
        {
          name: 'When a permit is required',
          url: 'https://www.trophyclub.org/210/When-a-Permit-is-Required',
          description:
            'The Town Permit Department answers whether new or altered utility systems need a permit. Phone 682-237-2917.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in The Lakes of Trophy Club is tied to the{' '}
            <a
              href="https://www.trophyclub.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Trophy Club
            </a>{' '}
            at 1 Trophy Wood Drive and the{' '}
            <a
              href="https://www.trophyclub.org/343/HOAs-Clubs-Organizations"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              town&apos;s HOA directory
            </a>
            , which lists The Lakes of Trophy Club as its own association. The neighborhood is gated at Meadow Ridge,
            with trails along greenbelt ponds and a community pool described by the association.
          </p>
          <p>
            Outdoor watering follows the{' '}
            <a
              href="https://www.tcmud.org/watering-schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Trophy Club MUD watering schedule
            </a>
            , the town&apos;s{' '}
            <a
              href="https://www.trophyclub.org/384/Water-Conservation-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              water conservation page
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
            . This is The Lakes of Trophy Club on Trophy Club MUD — not The Highlands, not Hogan&apos;s Glen, and not
            a Roanoke neighborhood. Pond greenbelts and the pool are shared amenities, not a reason to ignore drip at
            foundations or drainage after storms on clay.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in The Lakes of Trophy Club?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
