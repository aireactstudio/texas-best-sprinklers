import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function LakesidePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Flower Mound"
      citySlug="flower-mound"
      neighborhoodName="Lakeside"
      canonicalUrl="https://sprinkleranddrains.com/flower-mound/lakeside"
      pageTitle="Lakeside Sprinkler Repair & Drainage in Flower Mound, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Lakeside DFW lots on Town of Flower Mound water in ZIP 75022. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Lakeside Sprinkler Repair & Drainage"
      heroDescription="Lakeside DFW is Flower Mound’s walkable mixed-use district on Grapevine Lake in ZIP 75022 — townhomes, villas, and tower courtyards on clay next to restaurant-row pavement. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set for Town even-Tuesday or odd-Wednesday days, not a Monday/Thursday commercial clock."
      introHeading="House watering days and restaurant-row clocks do not match on the same clay lot"
      intro={
        <>
          <p>
            Lakeside — listed as Lakeside DFW, with Lakeside Village as the later lakefront phase — is a roughly
            160-acre mixed-use addition to the{' '}
            <a
              href="https://www.flowermound.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Town of Flower Mound
            </a>
            , not Bridlewood golf, not Wellington of Flower Mound, not the City of Highland Village, and not the Town of
            Lakeside near Eagle Mountain Lake. Tarrant County plats record Lakeside DFW Phase 1 (D213146097, July 7,
            2013), Phase 2 (D216101226, May 13, 2016), and Phase 3 (D216183051, August 11, 2016), with the declaration
            of covenants filed June 9, 2013 (D213158754). The master association is Lakeside DFW Association, Inc. The
            district sits at International Parkway and Lakeside Parkway in southeast Flower Mound, about ten minutes from
            DFW Airport, next to Lake Grapevine. ZIP 75022. Listing and builder notes place homes along Lakeside Parkway,
            Sunset Boulevard, West Village Parkway, and Lakeside Village Boulevard. Product types on the same walkable
            map include compact townhomes, the 15-story Lakeside Tower condominiums at 2800 Lakeside Parkway, and custom
            villa lots on Lakeside Parkway and Sunset Boulevard. A controller copied from Moviehouse, boardwalk, or
            restaurant-row irrigation — or from a Wellington interior-lot guess — will soak a sidewalk while a shaded
            courtyard stays brown.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Lakeside as part of our Flower Mound and Highway 121
            work. We are a licensed irrigator (LI22462). Most addresses sit on Town of Flower Mound water, not Trophy
            Club MUD and not a Grapevine calendar. The town&apos;s{' '}
            <a
              href="https://www.flowermound.gov/621/Water-Conservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Long-Term Water Conservation Plan
            </a>{' '}
            limits automatic and hose-end spray to two days a week: even last digits Tuesday and Friday, odd last digits
            Wednesday and Saturday, and HOA, commercial, or multifamily commons Monday and Thursday. Spray is banned from
            10 a.m. to 6 p.m. Handheld hose, drip, soaker, and on-site rain barrels may run anytime. We follow{' '}
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
            ; plan review is about five working days. Visible piping, lighting, and grading still go through the current
            POA or nested association rules — confirm those documents before changing a Lakeside Parkway or Sunset
            Boulevard front. We do not claim a count of jobs on Lakeside Parkway, Sunset Boulevard, West Village Parkway,
            or Lakeside Village Boulevard, and we do not treat Moviehouse turf, the boardwalk, Murrell Park, Northshore
            Park, or Lakeside Tower amenity irrigation as a substitute for diagnosing a private yard. We walk zones, keep
            spray off walks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Lakeside house meters follow Town of Flower Mound even-Tuesday / odd-Wednesday days. Copying the Monday/Thursday commercial, HOA, or multifamily clock on Lakeside Parkway is the wrong starting point.',
        'Walkable fronts on Lakeside Parkway, Sunset Boulevard, and West Village Parkway show overspray immediately. Pedestrian traffic and restaurant-row parking leave little room for a misting head.',
        'Compact townhome and tower courtyards sit next to custom villa turf on the same clay. One long cycle floods a courtyard while a west-facing Sunset Boulevard strip stays brown.',
        'Do not confuse this district with Bridlewood golf, Wellington of Flower Mound, Highland Village, Grapevine’s Silver Lake, or the Town of Lakeside near Eagle Mountain. Lakeside Tower is 2800 Lakeside Parkway, ZIP 75022.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Lakeside Parkway, Sunset Boulevard, West Village Parkway, and Lakeside Village Boulevard.',
        'Drip conversion at foundation beds, villa courtyards, and street-facing planters so brick and walkable sidewalks stop getting hit by leftover spray.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit the current Town even/odd day — not a copied restaurant-row or tower-amenity Monday/Thursday calendar.',
        'Drainage planning for patio lows, clay saturation, and runoff that follows grade toward Grapevine Lake, the Northshore Trail, or a boardwalk-edge lot after storms.',
        'Outdoor lighting repair and additions that stay POA-reviewable and do not shine into neighboring yards, the public sidewalk, or the lake path.'
      ]}
      localTips={[
        'Confirm the current Town Long-Term Water Conservation Plan notice before you pick watering days. A Lakeside house meter does not follow the Moviehouse or boardwalk Monday/Thursday clock.',
        'Use the last digit of the physical address: even Tuesday/Friday, odd Wednesday/Saturday. Skip 10 a.m. to 6 p.m. Drip and soaker may run anytime.',
        'Use shorter cycle-and-soak windows so Lakeside clay can absorb water instead of sending it across a Lakeside Parkway walk or toward the lake trail.',
        'Ask whether an HOA, commercial, or multifamily clock already waters a shared edge near the tower, villas, or restaurant row. A house-only controller should not copy that runtime.',
        'Visible heads, lighting, and grading on a walkable mixed-use street often need POA or nested-association review even when a town repair does not need a new permit. Confirm the current documents before you change the front.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and mixed-use controllers often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'Walkable fronts the POA and restaurant traffic see',
          description:
            'Lakeside Parkway, Sunset Boulevard, and West Village Parkway sit inside a mixed-use district where pedestrians, shop parking, and association rules see every front. Tilted heads and dry bands show because people walk those streets every day. We match nozzles without inventing a no-HOA xeriscape scope.'
        },
        {
          title: 'Town even/odd rules, not a commercial Monday/Thursday guess',
          description:
            'Most Lakeside meters sit on Town of Flower Mound water. House spray is twice a week by address digit, with a 10 a.m.–6 p.m. ban. HOA commons, commercial lots, and multifamily properties water Monday and Thursday. We set house controllers for the current town notice, not the Moviehouse clock, not a tower amenity calendar, and not a Wellington or Bridlewood guess.'
        },
        {
          title: 'Townhome courtyards next to villa sun on the same clay',
          description:
            'Compact townhomes and Lakeside Tower courtyards often sit in shade and heat-island bounce from parking, while custom villa fronts on Lakeside Parkway and Sunset Boulevard can cook against pavement on the same clay. One long cycle floods a courtyard and still leaves a west-facing strip brown. This is not Bridlewood golf-edge shade and not Highland Village.'
        },
        {
          title: 'Foundation drip plus drainage toward Grapevine Lake',
          description:
            'Brick and stone do better on drip than leftover spray. Extra spray that ponds at a patio is not just a turf problem on expansive clay that already sheds toward the lake, Northshore Trail, or a boardwalk-edge lot. Civic park and restaurant-row turf is not a private Lakeside backyard.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Lakeside street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Lakeside street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Lakeside',
        title: 'The Lakeside Parkway walk looked wet while a villa strip on Sunset Boulevard stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Flower Mound / nearby DFW service — not a named Lakeside street, and not work at Moviehouse, the boardwalk, Murrell Park, Northshore Park, or Lakeside Tower amenity lawns.',
        body: 'A common Lakeside call looks like this: a controller on Lakeside Parkway, Sunset Boulevard, or West Village Parkway is still running one long summer cycle, and the day pattern was copied from the Monday/Thursday commercial or multifamily clock that waters restaurant-row and tower commons. Clay sheds the first pass. Leftover spray hits a walkable sidewalk while a shaded townhome courtyard stays brown because heat-island bounce from parking and International Parkway is not the same as a west-facing villa strip. Across the street, a custom Lakeside Parkway or Sunset Boulevard front cooks against pavement and needs drip, not more spray. Stage rules only allow two assigned house days from the last address digit, so a leftover everyday program wastes water and can draw a town notice. We map which zones the owner actually controls, check the meter against the current town notice, match nozzles so spray stays off walks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows on the assigned days rather than a commercial-commons guess. If the low patio is irrigation plus lake-edge grade, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Lakeside clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 75022 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding across a Lakeside Parkway walk or toward Grapevine Lake. This is not Bridlewood golf-edge saturation and not Wellington interior-lot shade — it is Lakeside mixed-use clay on Town of Flower Mound water.'
        },
        {
          title: 'Heat, ET, and two controller calendars in Lakeside',
          description:
            'Pavement on International Parkway and restaurant-row parking holds heat after sunset, and the town already bans spray from 10 a.m. to 6 p.m. House controllers still need the correct even/odd day, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. A commercial Monday/Thursday commons clock is not a substitute for the current town notice.'
        },
        {
          title: 'Lakeside townhome shade versus villa sun',
          description:
            'Compact townhomes and tower courtyards often sit under building shade and heat-island bounce, while custom villa fronts on Lakeside Parkway and Sunset Boulevard can face full west sun on the same clay. Shared runtimes overwater the sidewalk and starve a courtyard corner. Separate nozzle types and zone timing keep both sides of a Lakeside lot honest without changing the walkable curb look.'
        },
        {
          title: 'Foundation drip, POA lighting, and lake-edge drainage in Lakeside',
          description:
            'Visible piping, lighting, and grading on a mixed-use street often still need POA or nested-association review even when buried repair stays inside an existing layout. Patio lows and downspouts add to clay that already drains toward Grapevine Lake, Northshore Trail, or a boardwalk-edge lot. Foundations belong on drip, not another hour of spray. Do not confuse this district with Wellington, Bridlewood, Highland Village, or the Town of Lakeside.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Lakeside site assessment and issue mapping, including Lakeside Parkway-facing turf, sidewalk overspray, and any shade/sun split on townhome courtyards versus villa lots',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Town even/odd days, POA curb appeal, and commercial-commons overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Lakeside?',
          answer:
            'Plan on the town when the system is new or expanded, and plan on the POA or nested association when the look of the yard changes. Lakeside DFW Association, Inc. governs the addition; villa, townhome, and tower sections may have additional documents. Visible heads, lighting, bed redesign, and grading commonly need written association review even when buried sprinkler repair stays inside the existing layout. Confirm the current management certificate and design guidelines before you change a Lakeside Parkway or Sunset Boulevard front. The Town of Flower Mound requires an irrigation permit for new or expanded systems: sealed plans from a licensed irrigator registered with the town, a listed backflow tester, and eTRAKiT submittal. Plan review is about five working days. Ordinary head and pipe repairs that stay inside the existing layout usually do not need a new town permit, but we still describe the visible scope before work starts. A licensed irrigator (we are LI22462) should design or alter the system. We do not file town or association applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Lakeside clay, courtyards, and villa lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Walkable Lakeside Parkway and Sunset Boulevard turf often belongs on a shorter throw or drip, not a long rotor cycle copied from restaurant-row commons. Confirm the current town notice before you pick days — even Tuesday/Friday, odd Wednesday/Saturday, no 10 a.m.–6 p.m. spray. Drip, soaker, handheld hose, and rain barrels may run anytime. We do not copy the Monday/Thursday commercial, HOA, or multifamily clock onto a house meter. Do not copy Murrell Park, Northshore Park, Moviehouse, or Lakeside Tower amenity irrigation onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, POA appearance rules, town pressure, courtyard shade, and lake-edge grade change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Lakeside?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority. If work will change lighting, beds, or grade, budget association review time before the visible part of the job starts.'
        },
        {
          question: 'How do you set controllers for Lakeside watering rules here?',
          answer:
            'Confirm the current Long-Term Water Conservation Plan notice on flowermound.gov/621/Water-Conservation before you change days. The town assigns two watering days from the last digit of the physical address (even Tuesday and Friday, odd Wednesday and Saturday), bans spray from 10 a.m. to 6 p.m., and assigns HOA commons, commercial, and multifamily properties Monday and Thursday. We program start times that match the town notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water across a sidewalk or toward the lake trail. Drip and soaker may run any day. Properties establishing new landscaping can be exempt until final irrigation review — confirm the latest town notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Wellington',
          description:
            'Flower Mound’s 2,363-home residential association on Furlong Drive — not the Lakeside mixed-use district on Lakeside Parkway.',
          link: '/flower-mound/wellington'
        },
        {
          name: 'Bridlewood',
          description:
            'Flower Mound’s master-planned golf community with its own villages and HOA map — not Lakeside DFW or Lakeside Village.',
          link: '/flower-mound/bridlewood'
        },
        {
          name: 'Canyon Falls',
          description:
            'The master-planned community on the Argyle / Northlake edge — already a separate service page, not a Lakeside street.',
          link: '/argyle/canyon-falls'
        },
        {
          name: 'Silver Lake',
          description:
            'Weekley lots in Grapevine off Dove Loop. Nearby lake-adjacent clay, Grapevine watering days instead of Flower Mound Tuesday/Friday.',
          link: '/grapevine/silver-lake'
        },
        {
          name: "Hogan's Glen",
          description:
            'Trophy Club’s gated golf-edge enclave on MUD water. Nearby on 114, not Town of Flower Mound even/odd days.',
          link: '/trophy-club/hogans-glen'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on Lakeside mixed-use clay lots in ZIP 75022.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and walkable sidewalks stop getting soaked by leftover spray on Lakeside Parkway and Sunset Boulevard.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Grapevine Lake or the Northshore Trail after storms.',
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
          name: 'Northshore Park',
          url: 'https://www.flowermound.gov/parkdirectory',
          description:
            'The town park at 3100 Woodpark Drive sits near the lake trail system southeast of Lakeside Parkway. Park turf is not a private Lakeside backyard.'
        },
        {
          name: 'Murrell Park',
          url: 'https://www.swf-wc.usace.army.mil/grapevine/Recreation/Parks/Corpsparks.shtml',
          description:
            'The U.S. Army Corps park at 880 Simmons Road on Grapevine Lake has boat ramps, picnic tables, and Northshore Trail access. Civic lake irrigation is not a house-meter substitute.'
        },
        {
          name: 'Old Settlers Elementary',
          url: 'https://oldsettlers.lisd.net/',
          description:
            'Lewisville ISD campus at 2525 Old Settlers Road. Lakeside mixed-use addresses were rezoned here for 2025–26 — still not a campus irrigation contract.'
        },
        {
          name: 'Flower Mound water conservation',
          url: 'https://www.flowermound.gov/621/Water-Conservation/',
          description:
            'Even/odd house days, the 10 a.m.–6 p.m. ban, and HOA/commercial Monday/Thursday commons rules live on the town site. Civic guidance for town customers — not a private-yard substitute.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Lakeside is tied to the{' '}
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
              href="https://oldsettlers.lisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Old Settlers Elementary
            </a>{' '}
            at 2525 Old Settlers Road,{' '}
            <a
              href="https://shadowridge.lisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Shadow Ridge Middle School
            </a>{' '}
            at 2050 Aberdeen Road, and{' '}
            <a
              href="https://fmhs.lisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Flower Mound High School
            </a>{' '}
            at 3411 Peters Colony Road. Families use{' '}
            <a
              href="https://www.flowermound.gov/parkdirectory"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Northshore Park
            </a>{' '}
            at 3100 Woodpark Drive and{' '}
            <a
              href="https://www.swf-wc.usace.army.mil/grapevine/Recreation/Parks/Corpsparks.shtml"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Murrell Park
            </a>{' '}
            at 880 Simmons Road for lake and trail time; those civic clocks are not a Lakeside house schedule.
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
            . This is Lakeside DFW on town water — not Bridlewood golf, not Wellington of Flower Mound, not Canyon Falls,
            and not Highland Village. Restaurant-row turf, Moviehouse plantings, and lake parks are civic or commercial
            access — not a reason to treat every lot as commons-edge or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Lakeside?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
