import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function WellingtonPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Flower Mound"
      citySlug="flower-mound"
      neighborhoodName="Wellington"
      canonicalUrl="https://sprinkleranddrains.com/flower-mound/wellington"
      pageTitle="Wellington Sprinkler Repair & Drainage in Flower Mound, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Wellington of Flower Mound lots on Town water in ZIP 75022. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Wellington Sprinkler Repair & Drainage"
      heroDescription="Wellington of Flower Mound is a 2,363-home residential association in ZIP 75022 — clay lots from 1995-era phases through Wellington Estates and Manor. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set for Town even-Tuesday or odd-Wednesday days, not the HOA Monday/Thursday commons clock at Furlong or Mandalay."
      introHeading="House watering days and HOA commons clocks do not match on the same clay lot"
      intro={
        <>
          <p>
            Wellington of Flower Mound is a built-out residential association in the Town of Flower Mound, not
            Bridlewood golf, not Lakeside DFW, not Canyon Falls, and not the City of Highland Village. The{' '}
            <a
              href="https://wellingtonhoa.net/about-the-hoa/wellington-neighborhood.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Wellington of Flower Mound Residential Association
            </a>{' '}
            (WFMRAI) covers Wellington Phases 1–9, Brandywine at Wellington, Hillcrest at Wellington Phases 1–2,
            Wichita Chase Phases 1–4 including Lakewood and the Oaks of Wellington, Wellington Estates Phases 1–3, and
            Wellington Manor — 2,363 homes. The first occupied house was in Phase 1 in 1995. The main clubhouse sits
            at 3520 Furlong Drive; the west pool and playground sit at 3300 Mandalay Drive. Listing and HOA notes
            place homes along Furlong Drive, Sterling Parkway, Mandalay Drive, and the Kenwood Drive corridor by
            Wellington Elementary. ZIP 75022. Denton County. ACC Bulletin #17 still requires at least 50% turf in any
            street-adjacent unfenced yard and keeps the sidewalk strip in grass, so a copied xeriscape plan is not a
            substitute for a working spray-and-drip layout. Mature 1990s canopy on older phases sits next to newer
            estate and manor fronts on the same clay. A controller copied from the HOA Monday/Thursday commons clock,
            or from a Bridlewood golf-edge guess, will soak a Furlong Drive walk while a shaded Hillcrest or Wichita
            Chase side yard stays brown.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Wellington as part of our Flower Mound and Highway
            377 work. We are a licensed irrigator (LI22462). Most addresses sit on{' '}
            <a
              href="https://www.flowermound.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Town of Flower Mound
            </a>{' '}
            water, not Trophy Club MUD and not a private well calendar. The town&apos;s{' '}
            <a
              href="https://www.flowermound.gov/621/Water-Conservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Long-Term Water Conservation Plan
            </a>{' '}
            limits automatic and hose-end spray to two days a week: even last digits Tuesday and Friday, odd last
            digits Wednesday and Saturday, and HOA, commercial, or multifamily commons Monday and Thursday. Spray is
            banned from 10 a.m. to 6 p.m. Handheld hose, drip, soaker, and on-site rain barrels may run anytime. We
            follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. New or expanded irrigation needs a town
            permit with sealed plans and a registered backflow tester through the{' '}
            <a
              href="https://www.flowermound.gov/DocumentCenter/View/515/Irrigation-Information-Packet"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Irrigation Information Packet
            </a>
            ; plan review is about five working days. ACC Bulletin #17 does not require an application for
            below-ground sprinkler or drip install or repair, but landscape lighting, xeriscaping, bed redesign, and
            grading still go through ACC. We do not claim a count of jobs on Furlong Drive, Sterling Parkway, Mandalay
            Drive, or Kenwood Drive, and we do not treat Twin Coves Park, Heritage Park, Wellington Elementary, or the
            HOA pool complexes as a substitute for diagnosing a private yard. We walk zones, keep spray off walks, and
            quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Wellington house meters follow Town of Flower Mound even-Tuesday / odd-Wednesday days. Copying the HOA Monday/Thursday commons clock at Furlong or Mandalay is the wrong starting point.',
        'ACC Bulletin #17 keeps at least 50% turf on street-adjacent unfenced yards and keeps the sidewalk strip in grass. Overspray and dry strips show from Furlong Drive and Sterling Parkway.',
        '1995-era canopy on Phases 1–9 sits next to sunnier Wellington Estates and Manor fronts on the same clay. One long cycle floods a walk while a shaded Hillcrest or Wichita Chase corner stays brown.',
        'Do not confuse this association with Bridlewood golf, Lakeside DFW, Canyon Falls, or the City of Highland Village. The clubhouse is 3520 Furlong Drive, ZIP 75022.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Furlong Drive, Sterling Parkway, Mandalay Drive, and Kenwood Drive.',
        'Drip conversion at foundation beds and street-facing planting so brick and the required sidewalk-strip turf stop getting hit by leftover spray.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit the current Town even/odd day — not a copied HOA Monday/Thursday commons calendar.',
        'Drainage planning for patio lows, clay saturation, and runoff that follows grade toward HOA common areas after storms.',
        'Outdoor lighting repair and additions that stay ACC-reviewable and do not shine into neighboring yards or the public right-of-way.'
      ]}
      localTips={[
        'Confirm the current Town Long-Term Water Conservation Plan notice before you pick watering days. Wellington does not follow an HOA Monday/Thursday house clock.',
        'Use the last digit of the physical address: even Tuesday/Friday, odd Wednesday/Saturday. Skip 10 a.m. to 6 p.m. Drip and soaker may run anytime.',
        'Use shorter cycle-and-soak windows so Wellington clay can absorb water instead of sending it across a Furlong Drive walk or a Sterling Parkway sidewalk strip.',
        'Ask whether an HOA commons clock already waters a shared edge near the Furlong clubhouse or the Mandalay west pool. A house-only controller should not copy that runtime.',
        'Buried sprinkler and drip work usually does not need an ACC application. Landscape lighting, xeriscape, bed redesign, and grading still do. Confirm Bulletin #17 before you change the front.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and 1990s controllers often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'HOA-visible fronts and a 50% turf rule',
          description:
            'Furlong Drive, Sterling Parkway, and Mandalay Drive sit inside one association that still requires 50% turf on street-adjacent unfenced yards and a grass sidewalk strip. Tilted heads and dry bands show because school and clubhouse traffic pass those fronts every day. We match nozzles without inventing a no-HOA xeriscape scope.'
        },
        {
          title: 'Town even/odd rules, not an HOA Monday/Thursday guess',
          description:
            'Most Wellington meters sit on Town of Flower Mound water. House spray is twice a week by address digit, with a 10 a.m.–6 p.m. ban. HOA commons at 3520 Furlong Drive and 3300 Mandalay Drive water Monday and Thursday. We set house controllers for the current town notice, not the pool-complex clock and not a Bridlewood or Trophy Club calendar.'
        },
        {
          title: '1995 canopy next to newer estate sun',
          description:
            'Phases 1–9, Hillcrest, and Wichita Chase often sit under mature oaks, while Wellington Estates and Manor fronts can cook against pavement on the same clay. One long cycle floods a shaded Kenwood Drive corner and still leaves a west-facing strip brown. This is not Bridlewood golf-edge shade and not Highland Village.'
        },
        {
          title: 'Foundation drip plus drainage that the ACC still reviews',
          description:
            'Brick and stone do better on drip than leftover spray. Extra spray that ponds at a patio is not just a turf problem on expansive clay. Buried irrigation usually stays outside ACC, but lighting, xeriscape, and grading still go through the committee. Civic park and school turf is not a private Wellington backyard.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Wellington street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Wellington street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Wellington',
        title: 'The Furlong Drive sidewalk strip looked wet while a shaded Hillcrest corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Flower Mound / nearby DFW service — not a named Wellington street, and not work at Twin Coves Park, Heritage Park, Wellington Elementary, or the HOA pool complexes.',
        body: 'A common Wellington call looks like this: a controller on Furlong Drive, Sterling Parkway, or Mandalay Drive is still running one long summer cycle, and the day pattern was copied from the HOA Monday/Thursday commons clock at the clubhouse or the west pool. Clay sheds the first pass. Leftover spray hits the required grass sidewalk strip while a shaded Hillcrest or Wichita Chase corner stays brown because canopy grew in after the 1995-era lot was finished. Across the street, a newer Wellington Estates or Manor west-facing strip cooks against pavement and needs drip, not more spray. Stage rules only allow two assigned house days from the last address digit, so a leftover everyday program wastes water and can draw a town notice. We map which zones the owner actually controls, check the meter against the current town notice, match nozzles so spray stays off walks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows on the assigned days rather than an HOA commons guess. If the low patio is irrigation plus a downspout, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Wellington clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 75022 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding across a Furlong Drive walk or a Sterling Parkway sidewalk strip. This is not Bridlewood golf-edge saturation and not Highland Village — it is Wellington association clay on Town of Flower Mound water.'
        },
        {
          title: 'Heat, ET, and two controller calendars in Wellington',
          description:
            'Pavement on Sterling Parkway and Kenwood Drive holds heat after sunset, and the town already bans spray from 10 a.m. to 6 p.m. House controllers still need the correct even/odd day, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. An HOA Monday/Thursday commons clock is not a substitute for the current town notice.'
        },
        {
          title: 'Wellington Phase 1–9 shade versus Estates and Manor sun',
          description:
            'Older phases, Hillcrest, and Wichita Chase often sit under mature oaks, while Wellington Estates and Manor fronts can face full west sun on the same clay. Shared runtimes overwater the street strip and starve a shaded corner. Separate nozzle types and zone timing keep both sides of a Wellington lot honest without changing the HOA curb look or the 50% turf rule.'
        },
        {
          title: 'Foundation drip, ACC lighting, and drainage in Wellington',
          description:
            'Bulletin #17 lets buried sprinkler and drip work proceed without an ACC application, but landscape lighting, xeriscape, bed redesign, and grading still need review. Patio lows and downspouts add to clay that already drains slowly toward common areas. Foundations belong on drip, not another hour of spray. Do not confuse this association with Bridlewood, Lakeside DFW, or Canyon Falls.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Wellington site assessment and issue mapping, including Furlong-facing turf, sidewalk-strip overspray, and any shade/sun split on older phases versus Estates or Manor lots',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Town even/odd days, ACC curb appeal, and HOA commons overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Wellington?',
          answer:
            'Plan on the town when the system is new or expanded, and plan on ACC when the look of the yard changes. ACC Bulletin #17 says installation or repair of below-ground lawn or planter sprinkler or drip systems does not require an ACC application. Landscape lighting, xeriscaping, bed redesign, and grading still need written ACC review — the committee has up to 30 days once a complete application is in, and the average is often 5–10 days. The Town of Flower Mound requires an irrigation permit for new or expanded systems: sealed plans from a licensed irrigator registered with the town, a listed backflow tester, and eTRAKiT submittal. Plan review is about five working days. Ordinary head and pipe repairs that stay inside the existing layout usually do not need a new town permit, but we still describe the visible scope before work starts. A licensed irrigator (we are LI22462) should design or alter the system. We do not file town or ACC applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Wellington clay, shade, and large association lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Keep the sidewalk strip in turf and stay inside the 50% street-adjacent turf rule if you are changing beds. Furlong- and Sterling-facing turf often belongs on a shorter throw or drip, not a long rotor cycle copied from a backyard. Confirm the current town notice before you pick days — even Tuesday/Friday, odd Wednesday/Saturday, no 10 a.m.–6 p.m. spray. Drip, soaker, handheld hose, and rain barrels may run anytime. We do not copy the HOA Monday/Thursday commons clock at 3520 Furlong Drive or 3300 Mandalay Drive onto a house meter. Do not copy Twin Coves Park or Wellington Elementary civic irrigation onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, ACC appearance rules, town pressure, and shade from 1990s canopy change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Wellington?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority. If work will change lighting, beds, or grade, budget ACC review time before the visible part of the job starts.'
        },
        {
          question: 'How do you set controllers for Wellington watering rules here?',
          answer:
            'Confirm the current Long-Term Water Conservation Plan notice on flowermound.gov/621/Water-Conservation before you change days. The town assigns two watering days from the last digit of the physical address (even Tuesday and Friday, odd Wednesday and Saturday), bans spray from 10 a.m. to 6 p.m., and assigns HOA commons, commercial, and multifamily properties Monday and Thursday. We program start times that match the town notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water across a sidewalk strip. Drip and soaker may run any day. Properties establishing new landscaping can be exempt until final irrigation review — confirm the latest town notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Bridlewood',
          description:
            'Flower Mound’s master-planned golf community with its own villages and HOA map — not the Wellington association on Furlong Drive.',
          link: '/flower-mound'
        },
        {
          name: 'Lakeside',
          description:
            'A different Flower Mound listing name. Do not copy a lakeside controller guess onto a Wellington house meter.',
          link: '/flower-mound'
        },
        {
          name: 'Canyon Falls',
          description:
            'The master-planned community on the Argyle / Northlake edge — already a separate service page, not a Wellington street.',
          link: '/argyle/canyon-falls'
        },
        {
          name: "Hogan's Glen",
          description:
            'Trophy Club’s gated golf-edge enclave on MUD water. Nearby on 114, not Town of Flower Mound even/odd days.',
          link: '/trophy-club/hogans-glen'
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
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on Wellington clay lots in ZIP 75022.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and the required sidewalk-strip turf stop getting soaked by leftover spray on Furlong Drive and Sterling Parkway.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward HOA common areas after storms.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Town of Flower Mound',
          url: 'https://www.flowermound.gov/',
          description:
            'Town Hall at 2121 Cross Timbers Road is the official source for agendas, ordinances, and permits — and the civic neighbor to the private lots this page is about.'
        },
        {
          name: 'Twin Coves Park',
          url: 'https://www.flowermound.gov/twincoves',
          description:
            'The town park and campground at 5001 Wichita Trail sits on Grapevine Lake in ZIP 75022. Park turf is not a private Wellington backyard.'
        },
        {
          name: 'Heritage Park',
          url: 'https://www.flowermound.gov/1652/Heritage-Park-of-Flower-Mound',
          description:
            'The town’s signature park at 600 Spinks Road. Civic irrigation and splash-pad water are not a house-meter substitute on Furlong Drive.'
        },
        {
          name: 'Wellington Elementary',
          url: 'https://wellington.lisd.net/',
          description:
            'Lewisville ISD campus at 3900 Kenwood Drive. School-zone traffic is why tilted heads get noticed on the way to campus — still not a campus irrigation contract.'
        },
        {
          name: 'Flower Mound water conservation',
          url: 'https://www.flowermound.gov/621/Water-Conservation/',
          description:
            'Even/odd house days, the 10 a.m.–6 p.m. ban, and HOA Monday/Thursday commons rules live on the town site. Civic guidance for town customers — not a private-yard substitute.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Wellington is tied to the{' '}
            <a
              href="https://www.flowermound.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Flower Mound
            </a>{' '}
            at 2121 Cross Timbers Road, campuses in{' '}
            <a
              href="https://www.lisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Lewisville ISD
            </a>
            {' '}
            — including{' '}
            <a
              href="https://wellington.lisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Wellington Elementary
            </a>{' '}
            at 3900 Kenwood Drive,{' '}
            <a
              href="https://liberty.lisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Liberty Elementary
            </a>{' '}
            at 4600 Quail Run Road,{' '}
            <a
              href="https://mckamy.lisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              McKamy Middle School
            </a>{' '}
            at 2401 Old Settlers Road, and{' '}
            <a
              href="https://fmhs.lisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Flower Mound High School
            </a>{' '}
            at 3411 Peters Colony Road. The{' '}
            <a
              href="https://wellingtonhoa.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Wellington of Flower Mound HOA
            </a>{' '}
            handles ACC requests, the Furlong clubhouse, and the Mandalay west complex that sit next to private yards.
            Families use{' '}
            <a
              href="https://www.flowermound.gov/twincoves"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Twin Coves Park
            </a>{' '}
            at 5001 Wichita Trail and{' '}
            <a
              href="https://www.flowermound.gov/1652/Heritage-Park-of-Flower-Mound"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Heritage Park
            </a>{' '}
            at 600 Spinks Road for lake and playground time; those civic clocks are not a Wellington house schedule.
          </p>
          <p>
            Outdoor watering follows the town&apos;s{' '}
            <a
              href="https://www.flowermound.gov/621/Water-Conservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Long-Term Water Conservation Plan
            </a>{' '}
            and the current notice. New or expanded irrigation may go through the{' '}
            <a
              href="https://www.flowermound.gov/DocumentCenter/View/515/Irrigation-Information-Packet"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Irrigation Information Packet
            </a>{' '}
            and{' '}
            <a
              href="https://www.flowermound.gov/172/Plan-Review-Information"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              plan review
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
            . This is Wellington of Flower Mound on town water — not Bridlewood golf, not Lakeside DFW, not Canyon
            Falls, and not Highland Village. HOA pools and town parks are civic or association access — not a reason to
            treat every lot as commons-edge or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Wellington?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
