import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function BridlewoodPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Flower Mound"
      citySlug="flower-mound"
      neighborhoodName="Bridlewood"
      canonicalUrl="https://sprinkleranddrains.com/flower-mound/bridlewood"
      pageTitle="Bridlewood Sprinkler Repair & Drainage in Flower Mound, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Bridlewood golf-community lots on Town of Flower Mound water in ZIP 75028. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Bridlewood Sprinkler Repair & Drainage"
      heroDescription="Bridlewood is Flower Mound’s master-planned golf community — clay lots around Bridlewood Golf Club, oak shade in Remington Park, and HOA-visible fronts on Par Drive and Fairway Drive. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set for Flower Mound even Tuesday/Friday days, not a copied HOA Monday/Thursday commons clock."
      introHeading="Golf-edge turf and oak shade still sit on clay that sheds a long watering cycle"
      intro={
        <>
          <p>
            Bridlewood is a master-planned golf community in the Town of Flower Mound, ZIP 75028 — not Wellington, not
            Lakeside DFW, not Canyon Falls, and not the City of Highland Village. The{' '}
            <a
              href="https://www.bridlewoodhoa.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Bridlewood Homeowners Association
            </a>{' '}
            lists the association office at 5000 Par Drive and describes eleven villages: Balmoral, Belmont, Bridlewood
            Farms, Bristol Place, Carriage Glen, Coventry, Lexington Downs, Remington Park, Steeplechase, The Reserve,
            and Windsor Heights. Streets used on this page come from that village map and town listings: Par Drive,
            Country Club Drive, Fairway Drive, Remington Park Drive, Auburn Drive, Fairbank Lane, and West Windsor
            Boulevard. Bridlewood Golf Club sits at 4000 West Windsor Boulevard. Bridlewood Elementary is at 4901
            Remington Park Drive. Lexington Downs and Windsor Heights back to Spring Lake Park at 4815 Windmill Lane.
            Steeplechase and parts of Coventry sit against golf holes. Windsor Heights includes front-yard maintenance
            in the section HOA dues, so a house meter there often only covers the private rear. The Reserve at the end
            of Country Club Drive is gated and belongs to both the master HOA and The Reserve HOA. Clay, mature post
            oaks, and grade toward fairways or the park pond mean a controller copied from Wellington, Highland Village,
            or from the HOA Monday/Thursday commons clock will soak a Fairway Drive apron while a shaded Remington Park
            corner stays brown.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Bridlewood as part of our Flower Mound and Highway 121
            work. We are a licensed irrigator (LI22462). Most addresses sit on Town of Flower Mound water. The town&apos;s{' '}
            <a
              href="https://www.flowermound.gov/621/Water-Conservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Long-Term Water Conservation Plan
            </a>{' '}
            currently assigns two spray days: even last digits Tuesday and Friday, odd last digits Wednesday and
            Saturday. HOA lots, common areas, commercial, and multifamily water Monday and Thursday. Spray and hose-end
            sprinklers are banned from 10 a.m. to 6 p.m. Drip, soaker, handheld hose, rain barrels, and signed on-site
            well water may run any day. We do not copy a Trophy Club even-Wednesday, Fort Worth odd-Thursday, or
            Highland Village guess onto a Par Drive controller. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. New or expanded irrigation needs a town
            permit with sealed plans from a licensed irrigator registered with Flower Mound; lawn-irrigation review is
            listed at about five working days on the{' '}
            <a
              href="https://www.flowermound.gov/172/Plan-Review-Information"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Plan Review Information
            </a>{' '}
            page, and the{' '}
            <a
              href="https://www.flowermound.gov/DocumentCenter/View/515/Irrigation-Information-Packet"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Irrigation Information Packet
            </a>{' '}
            currently lists a $280 irrigation permit plus a registered backflow test. The master HOA maintains common
            landscape and protective standards; Windsor Heights and The Reserve add section rules. We do not claim a
            count of jobs on Fairway Drive, Remington Park Drive, Par Drive, or Country Club Drive, and we do not treat
            Bridlewood Golf Club, Spring Lake Park, or Bridlewood Elementary turf as a substitute for diagnosing a
            private yard. We walk zones, keep spray off drives, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Bridlewood house meters follow Flower Mound even Tuesday/Friday and odd Wednesday/Saturday days. Copying the HOA Monday/Thursday commons clock is the wrong starting point for a private yard.',
        'Steeplechase and Coventry fronts face golf-edge heat; Remington Park lots sit under post oaks near the elementary. One long cycle floods a Fairway Drive apron while a shaded corner stays brown.',
        'Windsor Heights fronts are often HOA-maintained. Diagnose which zones the owner actually controls before adding spray to a shared edge.',
        'Do not confuse this golf community with Wellington, Lakeside, Canyon Falls, or the City of Highland Village. The HOA office is 5000 Par Drive, ZIP 75028.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Fairway Drive, Remington Park Drive, Par Drive, and Country Club Drive.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on HOA-visible lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit the current Flower Mound even/odd day — not a copied HOA Monday/Thursday calendar.',
        'Drainage planning for patio lows, clay saturation, and runoff that follows golf-edge or Spring Lake Park grade after storms.',
        'Outdoor lighting repair and additions for entries and drives that stay visible from Bridlewood Boulevard without changing the HOA street character.'
      ]}
      localTips={[
        'Confirm the current Flower Mound conservation notice before you pick watering days. Bridlewood does not follow a Trophy Club even-Wednesday or Highland Village clock.',
        'Use the last digit of the physical address: even Tuesday/Friday, odd Wednesday/Saturday. Skip 10 a.m. to 6 p.m. HOA commons are Monday/Thursday — not the house-meter calendar.',
        'Use shorter cycle-and-soak windows so Bridlewood clay can absorb water instead of sending it toward a fairway, a drive, or the Spring Lake Park edge.',
        'Ask whether Windsor Heights or another section HOA already waters a shared front. A house-only controller should not copy that runtime.',
        'The master HOA and section associations watch visible heads, lighting, and grading. Ordinary in-place repairs usually stay inside the existing layout.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and golf-facing clocks often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'HOA-visible curb appeal on Par Drive and Fairway Drive',
          description:
            'Bridlewood HOA maintains common landscape and protective standards. Tilted heads, misting, and dry strips show because amenity traffic, golf carts, and school drop-off pass the same fronts. We match nozzles and cut overspray without inventing a no-HOA Wellington scope.'
        },
        {
          title: 'Flower Mound even Tuesday/Friday rules, not an HOA Monday/Thursday guess',
          description:
            'Most Bridlewood meters sit on Town of Flower Mound water. The long-term plan is twice a week by address digit, with a 10 a.m.–6 p.m. ban. Commons water Monday and Thursday. We set house controllers for the current town notice, not Bridlewood Golf Club turf and not a Trophy Club or Highland Village calendar.'
        },
        {
          title: 'Golf-edge sun next to Remington Park oak shade',
          description:
            'Steeplechase and Coventry fairway lots cook against cart paths while Remington Park pads sit under post oaks near the elementary. One long cycle floods a drive while a canopy corner stays brown. This is not Lakeside DFW and not a Highland Village street.'
        },
        {
          title: 'Foundation drip, park-edge clay, and section-HOA fronts',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water toward golf-edge grade or Spring Lake Park. Windsor Heights fronts may already be HOA-watered — civic park and course turf is not a private Bridlewood backyard.'
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
              stars: 5
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Bridlewood street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Bridlewood street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Bridlewood',
        title: 'The sunny Fairway Drive front looked wet while a shaded Remington Park corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Flower Mound / nearby DFW service — not a named Bridlewood street, and not work at Bridlewood Golf Club, Spring Lake Park, or Bridlewood Elementary.',
        body: 'A common Bridlewood call looks like this: a controller on Fairway Drive, Remington Park Drive, or Par Drive is still running one long summer cycle, and the day pattern was copied from the HOA Monday/Thursday commons clock or from a Highland Village guess. Clay sheds the first pass. Leftover spray hits the drive while a shaded Remington Park or Lexington Downs corner stays brown because post oaks grew in after the lot was finished. Across the street, a west-facing Coventry or Steeplechase strip cooks against a cart path and needs drip, not more spray. A Windsor Heights lot may already sit next to a maintained front that does not match the house meter. The town plan only allows two assigned days from the last address digit, so a leftover everyday program wastes water and can draw a town notice. Elevation toward the golf club or Spring Lake Park can make one zone mist and another pond. We map which zones the owner actually controls, check the meter against the current Flower Mound notice, match nozzles so spray stays off drives, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows on the assigned days rather than an HOA guess. If the low patio is irrigation plus a downspout next to golf-edge grade, we talk through drainage instead of adding spray. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Bridlewood clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 75028 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Fairway Drive, a cart path, or the Spring Lake Park edge. This is not Wellington’s street pattern and not Highland Village — it is Bridlewood clay on Town of Flower Mound water.'
        },
        {
          title: 'Heat, ET, and Flower Mound controller schedules',
          description:
            'Pavement along Bridlewood Boulevard and West Windsor holds heat after sunset, and the town already bans spray from 10 a.m. to 6 p.m. House controllers still need the correct even/odd day, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. An HOA Monday/Thursday clock is not a substitute for the current town notice.'
        },
        {
          title: 'Fairway Drive golf fronts versus Remington Park shade',
          description:
            'Lots on Fairway Drive and in Steeplechase or Coventry are judged from golf-edge and amenity traffic, while Remington Park pads often sit closer to post oaks and Bridlewood Elementary. Shared runtimes overwater the street strip and starve a shaded corner. Separate nozzle types and zone timing keep both sides of a Bridlewood lot honest without changing the HOA curb look.'
        },
        {
          title: 'Park-edge drainage, foundation drip, and section HOA rules in Bridlewood',
          description:
            'Lexington Downs and Windsor Heights back to Spring Lake Park, so extra spray that ponds at a patio is not just a turf problem. Patio lows and downspouts add to clay that already drains slowly toward golf holes. Foundations belong on drip, not another hour of spray. Visible head, lighting, or grading changes should go through the master HOA — and The Reserve or Windsor Heights section rules when those apply. Do not confuse this community with Wellington, Lakeside, Canyon Falls, or Highland Village.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Bridlewood site assessment and issue mapping, including Fairway Drive-facing turf, Remington Park shade, and any golf-edge or Spring Lake Park grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Flower Mound watering days, HOA curb appeal, and golf-edge overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Bridlewood?',
          answer:
            'Plan on the town when the work is a new or expanded system, and plan on the association when the work is visible. Flower Mound requires an irrigation permit with sealed plans from a licensed irrigator registered with the town, plus a registered backflow test; the Irrigation Information Packet currently lists a $280 permit and about five working days of plan review. Ordinary head and pipe repairs that stay inside the existing layout usually do not need a new town permit, but we still describe the visible scope before work starts. Bridlewood HOA maintains common landscape and protective standards; The Reserve and Windsor Heights add section HOAs. We are licensed irrigator LI22462. Dig Tess (811) locates public lines; the town does not mark private property. We do not file town or HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Bridlewood clay, shade, and golf-edge lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Golf-edge and park-side pads need matched nozzles so spray stays off drives, cart paths, neighbor fences, and easements. Fairway Drive-facing turf often belongs on a shorter throw or drip, not a long rotor cycle copied from a backyard. Confirm the current Flower Mound notice before you pick days — even Tuesday/Friday, odd Wednesday/Saturday, no 10 a.m.–6 p.m. spray. Drip and soaker may run any day. We do not copy an HOA Monday/Thursday commons clock or a Highland Village guess onto a Bridlewood house meter. Do not copy Bridlewood Golf Club, Spring Lake Park, or Bridlewood Elementary civic irrigation onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, HOA appearance rules, town pressure, golf-edge grade, and park-side drainage change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Bridlewood?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Gate access at The Reserve, HOA notice, wiring faults, or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority. Call ahead if a large truck needs a construction access point at The Reserve gate on Country Club Drive.'
        },
        {
          question: 'How do you set controllers for Bridlewood watering rules here?',
          answer:
            'Confirm the current Long-Term Water Conservation Plan on flowermound.gov/621/Water-Conservation before you change days. Flower Mound assigns two watering days from the last digit of the physical address (even Tuesday and Friday, odd Wednesday and Saturday) and bans spray from 10 a.m. to 6 p.m. HOA lots, common areas, commercial, and multifamily water Monday and Thursday — that is not the house-meter calendar. We program start times that match the town notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water toward a fairway or Spring Lake Park. New landscaping may be exempt before final irrigation review; always confirm the latest town notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Wellington',
          description:
            'Another large Flower Mound master-planned community. Similar clay, a different street map and amenity pattern than Bridlewood’s golf villages.',
          link: '/flower-mound'
        },
        {
          name: 'Lakeside',
          description:
            'Lakeside DFW sits closer to the Grapevine Lake corridor. Do not copy a lake-edge clock onto a Fairway Drive lot.',
          link: '/flower-mound'
        },
        {
          name: 'Canyon Falls',
          description:
            'The Newland community north of FM 1171 spans Argyle, Northlake, and Flower Mound — not a Bridlewood village.',
          link: '/argyle/canyon-falls'
        },
        {
          name: 'Highland Village',
          description:
            'A separate city, not a Flower Mound neighborhood. Different utility and watering notice than Bridlewood.',
          link: '/flower-mound'
        },
        {
          name: 'Silver Lake',
          description:
            'Weekley lots in Grapevine off Dove Loop. Nearby DFW clay, Grapevine watering days instead of Flower Mound Tuesday/Friday.',
          link: '/grapevine/silver-lake'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on Bridlewood golf-community clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on Par Drive and Fairway Drive fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, golf-edge ponding, and runoff that moves toward Spring Lake Park after storms.',
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
          name: 'Spring Lake Park',
          url: 'https://www.flowermound.gov/2028/44267/Spring-Lake-Park',
          description:
            'The town park at 4815 Windmill Lane has a fishing pond, picnic tables, and short multi-use trails behind Lexington Downs and Windsor Heights. Park turf is not a private Bridlewood backyard.'
        },
        {
          name: 'Flower Mound parks',
          url: 'https://www.flowermound.gov/802/All-Parks',
          description:
            'The town parks directory lists Spring Lake Park and the rest of the civic system. Those clocks are not a house-meter substitute on Par Drive.'
        },
        {
          name: 'Bridlewood Elementary',
          url: 'https://bridlewood.lisd.net/',
          description:
            'Lewisville ISD campus at 4901 Remington Park Drive, opened in 1998 in the Marcus High feeder. School-zone traffic is why tilted heads get noticed — still not a campus irrigation contract.'
        },
        {
          name: 'Flower Mound water conservation',
          url: 'https://www.flowermound.gov/621/Water-Conservation/',
          description:
            'Even Tuesday/Friday and odd Wednesday/Saturday days, the 10 a.m.–6 p.m. ban, and HOA Monday/Thursday commons rules live on the town site. Civic guidance for town customers — not a private-yard substitute.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Bridlewood is tied to the{' '}
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
            </a>{' '}
            — including{' '}
            <a
              href="https://bridlewood.lisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bridlewood Elementary
            </a>{' '}
            at 4901 Remington Park Drive — and the public{' '}
            <a
              href="https://www.bridlewoodgolf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bridlewood Golf Club
            </a>{' '}
            at 4000 West Windsor Boulevard. The{' '}
            <a
              href="https://www.bridlewoodhoa.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bridlewood Homeowners Association
            </a>{' '}
            at 5000 Par Drive handles amenities, common landscape, and protective standards; Windsor Heights and The
            Reserve add section associations. Families use{' '}
            <a
              href="https://www.flowermound.gov/2028/44267/Spring-Lake-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Spring Lake Park
            </a>{' '}
            at 4815 Windmill Lane and the rest of the{' '}
            <a
              href="https://www.flowermound.gov/802/All-Parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              town parks system
            </a>{' '}
            for play; those civic clocks are not a Bridlewood house schedule.
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
            and the current notice, plus weekly ET advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>
            . New or expanded irrigation may go through{' '}
            <a
              href="https://www.flowermound.gov/172/Plan-Review-Information"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Plan Review Information
            </a>{' '}
            and the{' '}
            <a
              href="https://www.flowermound.gov/DocumentCenter/View/515/Irrigation-Information-Packet"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Irrigation Information Packet
            </a>
            . Flower Mound also points residents to the{' '}
            <a
              href="https://www.utrwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Upper Trinity Regional Water District
            </a>{' '}
            for regional conservation programs. This is Bridlewood on Town of Flower Mound water — not Wellington, not
            Lakeside, not Canyon Falls, and not Highland Village. Course turf and town parks are civic access — not a
            reason to treat every lot as fairway-edge or to ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Bridlewood?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
