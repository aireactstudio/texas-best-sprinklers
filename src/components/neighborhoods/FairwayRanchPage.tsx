import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function FairwayRanchPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Roanoke"
      citySlug="roanoke"
      neighborhoodName="Fairway Ranch"
      canonicalUrl="https://sprinkleranddrains.com/roanoke/fairway-ranch"
      pageTitle="Fairway Ranch Sprinkler Repair & Drainage in Roanoke, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Fairway Ranch lots on City of Roanoke water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Fairway Ranch Sprinkler Repair & Drainage"
      heroDescription="Fairway Ranch is Roanoke’s ~500-home master-planned community off Litsey Road — ridge lots on Highpoint Way, park-edge pads on Broadmoor Way, and HOA-visible fronts on Fairway Ranch Parkway. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set for City of Roanoke even/odd days, not a copied downtown Oak Street or Trophy Club golf-course clock."
      introHeading="Ridge lots and greenbelt clay still need two watering calendars"
      intro={
        <>
          <p>
            Fairway Ranch is a Wilbow master-planned community in the City of Roanoke, not Historic Downtown Oak
            Street, not Marshall Creek, and not a Trophy Club golf enclave. Access is State Highway 114 to Litsey
            Road, then Fairway Ranch Parkway or Ranch View Way. ZIP 76262. Denton County. Recorded plats include
            Fairway Ranch Phase 1, Phase 2, and Phase 3A. Streets we use to describe those lots include Fairway Ranch
            Parkway, Broadmoor Way, Highpoint Way, Ranch View Way, Champions Way, Champions Court, Myers Park Trail,
            and Riviera Road. The association is Roanoke Fairway Ranch Residential Association, Inc. (filed 2013),
            managed with FirstService Residential and a resident portal at fairwayranch.connectresident.com. The
            streetscape is the one Wilbow marketed: curvilinear blocks, rolled curbs, tree-lined parkways, and
            ornamental lights — HOA-visible from the roundabout on Fairway Ranch Parkway. Wayne A. Cox Elementary sits
            next door at 1100 Litsey Road. The City of Roanoke lists Fairway Ranch Park at 1025 Broadmoor Way with a
            playground, benches, and a pavilion. Developer notes put the community on high ground overlooking pecan
            forest and river bottoms, with about 50 acres of public parks dedicated to the city. That mix is the
            irrigation problem. A Highpoint Way ridge lot sheds a long first cycle. A Broadmoor Way pad next to the
            city park or a greenbelt can hold water after the same storm. A controller copied from compact Oak Street
            downtown, or from a gated Hogan&apos;s Glen golf-edge clock, will mist one zone and pond another. Extra
            spray just adds runoff toward greenbelt grade and HOA pond edges that already sit on the same North Texas
            clay. Realtor pages sometimes lump every 76262 address into “Trophy Club / Roanoke / Westlake.” This page
            is Fairway Ranch lots only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Fairway Ranch as part of our Roanoke and Highway 114
            work. We are a licensed irrigator (LI22462). Most addresses sit on{' '}
            <a
              href="https://roanoketexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              City of Roanoke
            </a>
            {' '}
            water, billed from City Hall at 500 S. Oak Street. Roanoke is a wholesale customer of Fort Worth, so the
            city keeps a year-round twice-weekly spray calendar. On the official{' '}
            <a
              href="https://roanoketexas.gov/448/Watering-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Lawn &amp; Landscape Irrigation Restrictions
            </a>
            {' '}
            page, odd last digits water Sunday and Thursday, even last digits water Saturday and Wednesday, and
            apartments, businesses, parks, and common areas water Tuesday and Friday. Spray is banned on Monday and
            from 10 a.m. to 6 p.m. Handheld hose, drip, soaker, and tree bubbler may run any day at any time — the
            city wrote that exception for foundations, trees, and high-value plants. We do not copy a Trophy Club MUD
            guess, a Westlake calendar, or a downtown Oak Street storefront clock onto a Fairway Ranch Parkway house
            meter. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. New or expanded irrigation tied to city
            water needs an irrigation permit and a backflow test through the{' '}
            <a
              href="https://roanoketexas.gov/485/Permits"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              City of Roanoke Permits
            </a>
            {' '}
            desk (permits@roanoketexas.com). The residential irrigation permit application lists a $50 fee — confirm
            the current amount on that page before you file. New sod or hydromulch needs a city variance. Visible
            head, lighting, or grading changes should go through the Fairway Ranch HOA before they change the rolled-curb
            street look. We do not claim a count of jobs on Fairway Ranch Parkway, Broadmoor Way, Highpoint Way, or
            Ranch View Way, and we do not treat Fairway Ranch Park, Cox Elementary turf, Roanoke Community Park, or
            historic Oak Street landscaping as a substitute for diagnosing a private yard. We walk zones, keep spray
            off drives, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Fairway Ranch is City of Roanoke water — Fort Worth wholesale with a year-round twice-weekly spray calendar. Copying a park or HOA Tuesday/Friday clock is the wrong starting point for a house meter.',
        'Rolled-curb fronts on Fairway Ranch Parkway and Broadmoor Way are judged from the roundabout and from school traffic on Litsey Road. Tilted heads and overspray show.',
        'Ridge lots on Highpoint Way shed a long first cycle, while greenbelt and park-edge clay on Broadmoor can hold water after the same storm. Cycle-and-soak and foundation drip matter more here than another hour of spray.',
        'Do not confuse this community with Historic Downtown Oak Street, Marshall Creek, Roanoke’s separately listed Highlands, or gated Hogan’s Glen in Trophy Club. Access is Litsey Road to Fairway Ranch Parkway, ZIP 76262.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Fairway Ranch Parkway, Broadmoor Way, Highpoint Way, and Ranch View Way.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on HOA-visible lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit the current City of Roanoke even/odd day — not a copied park, HOA-commons, or Trophy Club calendar.',
        'Drainage planning for patio lows, greenbelt saturation, and runoff that follows ridge-to-pond grade after storms on clay.',
        'Outdoor lighting repair and additions for entries and drives that stay visible from Fairway Ranch Parkway without changing the HOA street character.'
      ]}
      localTips={[
        'Confirm the current Roanoke watering notice before you pick days. Fairway Ranch house meters do not follow the city-park or HOA-commons Tuesday/Friday clock.',
        'Use the last digit of the physical address: even Saturday/Wednesday, odd Sunday/Thursday. Skip 10 a.m. to 6 p.m. and leave Monday off.',
        'Use shorter cycle-and-soak windows so Fairway Ranch clay can absorb water instead of sending it toward a Broadmoor greenbelt, HOA pond edge, or a Highpoint drive.',
        'Ask whether a common-area, pool, or Fairway Ranch Park clock already waters a shared edge. A house-only controller on Broadmoor Way should not copy that runtime.',
        'Check the Fairway Ranch HOA resident portal before visible head, lighting, or grading changes. Ordinary in-place repairs usually stay inside the existing layout.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and 2010s builder clocks often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'HOA-visible curb appeal on rolled-curb parkways',
          description:
            'Fairway Ranch Parkway, Broadmoor Way, and Highpoint Way sit inside a mandatory HOA with rolled curbs and ornamental lights. Tilted heads, misting, and dry strips show because school traffic on Litsey and neighborhood walkers pass the same fronts every day. We match nozzles and cut overspray without inventing a no-HOA Oak Street downtown scope.'
        },
        {
          title: 'City of Roanoke even/odd rules, not a park Tuesday/Friday guess',
          description:
            'Most Fairway Ranch meters sit on City of Roanoke water as a Fort Worth wholesale customer. Year-round spray is twice a week by address digit, with a 10 a.m.–6 p.m. ban and Monday off. Parks, apartments, businesses, and common areas water Tuesday and Friday — including Fairway Ranch Park on Broadmoor. We set house controllers for the current city notice, not that commons clock and not a Trophy Club MUD guess.'
        },
        {
          title: 'Highpoint ridge clay next to Broadmoor greenbelt shade',
          description:
            'Highpoint Way and upper Fairway Ranch Parkway lots sit on the ridge. Broadmoor Way and greenbelt-backed pads sit lower, closer to dedicated park land and pond edges. One long cycle floods a drive while a shaded corner stays brown. This is not compact historic Oak Street and not gated Hogan’s Glen golf-edge clay.'
        },
        {
          title: 'Foundation drip, pond edges, and slope toward dedicated parks',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water next to greenbelt grade and HOA fishing ponds. Civic park and Cox Elementary turf is not a private Fairway Ranch backyard.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Fairway Ranch street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Fairway Ranch street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Fairway Ranch',
        title: 'The sunny Highpoint ridge looked wet while a shaded Broadmoor corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Roanoke / nearby DFW service — not a named Fairway Ranch street, and not work at Fairway Ranch Park, Wayne A. Cox Elementary, Roanoke Community Park, or historic Oak Street.',
        body: 'A common Fairway Ranch call looks like this: a controller on Fairway Ranch Parkway, Broadmoor Way, or Highpoint Way is still running one long summer cycle, and the day pattern was copied from the city-park Tuesday/Friday clock, the HOA pool and commons, or from a Trophy Club guess. Clay on the ridge sheds the first pass. Leftover spray hits the rolled-curb drive while a shaded greenbelt corner stays brown because trees filled in after the 2010s lots were finished. Across the street, a west-facing strip cooks against pavement and needs drip, not more spray. A Broadmoor Way lot may already sit next to Fairway Ranch Park at 1025 Broadmoor — civic irrigation on Tuesday and Friday that does not match the house meter. Roanoke only allows two assigned house days from the last address digit, with Monday off, so a leftover everyday program wastes water and can draw a city notice. Elevation from Highpoint toward pond and greenbelt grade can make one zone mist and another pond. We map which zones the owner actually controls, check the meter against the current city notice, match nozzles so spray stays off drives, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows on the assigned days rather than a park or golf-course guess. If the low patio is irrigation plus a downspout next to greenbelt grade, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Fairway Ranch clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 76262 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Highpoint drives, Broadmoor greenbelt, and HOA pond edges. This is not compact historic Oak Street saturation and not gated Hogan’s Glen golf-edge clay — it is Fairway Ranch ridge and park-edge clay on City of Roanoke water.'
        },
        {
          title: 'Heat, ET, and City of Roanoke controller schedules',
          description:
            'Pavement on Fairway Ranch Parkway holds heat after sunset, and the city already bans spray from 10 a.m. to 6 p.m. House controllers still need the correct even/odd day, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a 2010s builder peak-heat runtime after nights cool in October. A park or HOA Tuesday/Friday clock is not a substitute for the current city notice.'
        },
        {
          title: 'Fairway Ranch Parkway fronts versus Highpoint ridge shade',
          description:
            'Lots on Fairway Ranch Parkway and Broadmoor Way are judged from weekday neighborhood and Litsey school traffic, while Highpoint Way pads often sit higher with a different sun/shade split. Shared runtimes overwater the street strip and starve a shaded corner. Separate nozzle types and zone timing keep both sides of a Fairway Ranch lot honest without changing the rolled-curb look.'
        },
        {
          title: 'Pond edges, foundation drip, and HOA rules in Fairway Ranch',
          description:
            'The community includes fishing ponds, greenbelts, and city-dedicated park land, so extra spray that ponds at a patio is not just a turf problem. Patio lows and downspouts add to clay that already drains slowly toward those edges. Foundations belong on drip, not another hour of spray. Visible head, lighting, or grading changes should go through the HOA first. Do not confuse this community with Historic Downtown Roanoke, Marshall Creek, or Trophy Club’s Hogan’s Glen.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Fairway Ranch site assessment and issue mapping, including Fairway Ranch Parkway-facing turf, Broadmoor park-edge lows, and any Highpoint ridge grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with City of Roanoke watering days, HOA curb appeal, and greenbelt overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Fairway Ranch?',
          answer:
            'Plan on the city when the system is new or expanded, and on the HOA when the work is visible. Fairway Ranch is a mandatory association (Roanoke Fairway Ranch Residential Association, Inc. / FirstService Residential). Check the resident portal before changing visible heads, lighting, or grading. The City of Roanoke requires an irrigation permit for systems tied to city water, plus a backflow test report; applications go to permits@roanoketexas.com from the Permits page at City Hall, 500 S. Oak Street. The city’s irrigation permit application lists a $50 residential fee — confirm the current amount before you file. Ordinary head and pipe repairs that stay inside the existing layout usually do not need a new city permit, but we still describe the visible scope before work starts. A licensed irrigator (we are LI22462) should design or alter the system. Dig Tess (811) locates public lines; the city does not mark private property. We do not file city or HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Fairway Ranch clay, ridge lots, and greenbelt edges?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Ridge and park-edge pads need matched nozzles so spray stays off drives, neighbor fences, and greenbelts. Fairway Ranch Parkway-facing turf often belongs on a shorter throw or drip, not a long rotor cycle copied from a backyard. Confirm the current City of Roanoke notice before you pick days — even Saturday/Wednesday, odd Sunday/Thursday, no 10 a.m.–6 p.m. spray, Monday off. Handheld hose, drip, soaker, and tree bubbler may run any day. We do not copy Fairway Ranch Park’s Tuesday/Friday civic clock, an HOA pool clock, or a Trophy Club guess onto a house meter. Do not copy Cox Elementary or Community Park civic irrigation onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, HOA appearance rules, city pressure on the ridge, greenbelt grade, and slope toward ponds change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Fairway Ranch?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. HOA notice, wiring faults, or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority. Call (817) 304-7896. We do not treat Litsey Road school traffic or the Fairway Ranch Parkway roundabout as a reason to skip walking the lot.'
        },
        {
          question: 'How do you set controllers for Fairway Ranch watering rules here?',
          answer:
            'Confirm the current notice on roanoketexas.gov/448/Watering-Restrictions before you change days. Roanoke assigns two watering days from the last digit of the physical address (even Saturday and Wednesday, odd Sunday and Thursday), bans spray from 10 a.m. to 6 p.m., and keeps Monday off. Parks, apartments, businesses, and common areas water Tuesday and Friday — that is not the house-meter calendar. We program start times that match the city notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water toward greenbelt grade. New sod or hydromulch needs a city variance. Always confirm the latest city notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Marshall Creek',
          description:
            'Another Roanoke-area listing on the city hub — a different street pattern than Fairway Ranch Parkway and Broadmoor Way.',
          link: '/roanoke'
        },
        {
          name: 'Woodcreek',
          description:
            'A separately listed Roanoke neighborhood. Do not treat it as a Fairway Ranch Phase 1–3A street.',
          link: '/roanoke'
        },
        {
          name: 'Briarwyck',
          description:
            'Roanoke lists Briarwyck Park at 1375 Marshall Creek Road. Civic park turf is not a Fairway Ranch house meter.',
          link: '/roanoke'
        },
        {
          name: "Hogan's Glen",
          description:
            'Trophy Club’s gated Indian Creek enclave on Trophy Club MUD water — nearby on 114, not City of Roanoke billing.',
          link: '/trophy-club/hogans-glen'
        },
        {
          name: 'Historic Downtown Roanoke',
          description:
            'Oak Street storefronts and compact historic lots around 500 S. Oak. A different pad and heat pattern than Fairway Ranch.',
          link: '/roanoke'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on Fairway Ranch ridge and park-edge clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on Fairway Ranch Parkway and Broadmoor Way fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, greenbelt ponding, and runoff that moves toward park-edge grade after storms.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'City of Roanoke',
          url: 'https://roanoketexas.gov/',
          description:
            'City Hall at 500 S. Oak Street is the official source for agendas, ordinances, utility billing, and permits — and the civic neighbor to the private lots this page is about.'
        },
        {
          name: 'Fairway Ranch Park',
          url: 'https://www.roanoketexas.gov/185/City-Parks',
          description:
            'The city park at 1025 Broadmoor Way has a playground, benches, and a pavilion. Park turf waters on the civic Tuesday/Friday clock — not a private Fairway Ranch backyard.'
        },
        {
          name: 'Historic Downtown Roanoke',
          url: 'https://roanoketexas.gov/211/Historic-Downtown',
          description:
            'Nine blocks of Oak Street, Austin Street Plaza at 221 North Oak, and the 1886 Rock Building visitor center. Downtown heat and storefront planters are not a Fairway Ranch ridge lot.'
        },
        {
          name: 'Wayne A. Cox Elementary',
          url: 'https://cox.nisdtx.org/',
          description:
            'Northwest ISD campus at 1100 Litsey Road, next to Fairway Ranch. School-zone traffic is why tilted heads get noticed on the way in — still not a campus irrigation contract.'
        },
        {
          name: 'Roanoke watering restrictions',
          url: 'https://roanoketexas.gov/448/Watering-Restrictions',
          description:
            'Year-round even/odd days, the 10 a.m.–6 p.m. ban, Monday off, and drip/soaker exceptions live on the city site. Civic guidance for Roanoke customers — not a private-yard substitute.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Fairway Ranch is tied to the{' '}
            <a
              href="https://roanoketexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Roanoke
            </a>
            {' '}
            at 500 S. Oak Street, campuses in{' '}
            <a
              href="https://www.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Northwest ISD
            </a>
            {' '}
            — including{' '}
            <a
              href="https://cox.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Wayne A. Cox Elementary
            </a>
            {' '}
            at 1100 Litsey Road — and errands on{' '}
            <a
              href="https://roanoketexas.gov/211/Historic-Downtown"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Historic Downtown Oak Street
            </a>
            . The Fairway Ranch HOA resident portal at{' '}
            <a
              href="https://fairwayranch.connectresident.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              fairwayranch.connectresident.com
            </a>
            {' '}
            is the association channel for amenities and architectural questions. Families use{' '}
            <a
              href="https://www.roanoketexas.gov/185/City-Parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fairway Ranch Park
            </a>
            {' '}
            at 1025 Broadmoor Way, the{' '}
            <a
              href="https://www.roanoketexas.gov/191/Recreation-Center"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Roanoke Recreation Center
            </a>
            {' '}
            at 501 Roanoke Road, and the{' '}
            <a
              href="https://roanoketexas.gov/166/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Roanoke Public Library
            </a>
            {' '}
            at 308 S. Walnut; those civic clocks are not a Fairway Ranch house schedule.
          </p>
          <p>
            Outdoor watering follows{' '}
            <a
              href="https://roanoketexas.gov/448/Watering-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Roanoke irrigation restrictions
            </a>
            {' '}
            and the current utility notice, with questions to 817-491-6099. New or expanded irrigation may go through{' '}
            <a
              href="https://roanoketexas.gov/485/Permits"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Roanoke permits
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
            . This is Fairway Ranch on City of Roanoke water — not Historic Downtown Oak Street, not Marshall Creek, and
            not Trophy Club Hogan&apos;s Glen. Park turf, school lawns, and HOA commons are civic or association
            access — not a reason to treat every lot as park-edge or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Fairway Ranch?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}