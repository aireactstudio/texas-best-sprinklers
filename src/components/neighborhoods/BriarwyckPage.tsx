import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function BriarwyckPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Roanoke"
      citySlug="roanoke"
      neighborhoodName="Briarwyck"
      canonicalUrl="https://sprinkleranddrains.com/roanoke/briarwyck"
      pageTitle="Briarwyck Sprinkler Repair & Drainage in Roanoke, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Briarwyck 114 lots on City of Roanoke water in ZIP 76262. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Briarwyck Sprinkler Repair & Drainage"
      heroDescription="Briarwyck is a Meritage-built Denton County addition in the City of Roanoke, ZIP 76262 — HOA-visible clay lots on Hackworth, Manchester, and Lancelot next to Roanoke Elementary, not Fairway Ranch on Litsey and not Historic Oak Street. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller that splits house even/odd days from HOA, park, and school Tuesday/Friday clocks."
      introHeading="School-corridor clay needs two calendars, not one leftover summer clock"
      intro={
        <>
          <p>
            Briarwyck is a City of Roanoke residential addition in Denton County, ZIP 76262. It is not Fairway Ranch
            on Litsey Road and Fairway Ranch Parkway, not Historic Downtown Oak Street, and not Trophy Club&apos;s
            similarly named Highlands. The association of record is Briarwyck 114 Homeowners&apos; Association, Inc.,
            formed February 2, 2007. Denton County plats cover Phase 1 (including a 2007 replat), Phase 2B, Phases
            3A–3D, Phase 4, Phase 6B, and Phase 3B through 2015. Streets we use to describe those lots include Hackworth
            Street, Bentley Drive, Manchester Drive, Sodbury Court, Allister Court, Sandhurst Drive, Bristol Street,
            Brighton Street, Dorset Court, Lancelot Drive, and Marshall Creek Road. Northwest ISD moved Roanoke
            Elementary into the addition in 2010; the campus sits at 1401 Lancelot Drive after leaving the historic
            606 North Walnut site. Briarwyck Park is the city park at 1375 Marshall Creek Road. That mix is the
            irrigation problem: a house controller copied from a park or school clock assumes Tuesday and Friday
            commons watering, while private Roanoke addresses stay on even Saturday/Wednesday or odd Sunday/Thursday
            days with Monday off. A leftover peak-summer cycle soaks the sidewalk the association sees on Hackworth
            while a shaded Manchester side yard stays brown. Extra spray just adds runoff toward Marshall Creek Road
            and the elementary frontage that already sit on the same clay. Realtor pages sometimes lump this addition
            with Fairway Ranch or with Roanoke&apos;s listed Highlands. This page is Briarwyck 114 lots only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Briarwyck as part of our Roanoke and Denton County
            work. We are a licensed irrigator (LI22462). Most addresses sit on{' '}
            <a
              href="https://roanoketexas.gov/448/Watering-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              City of Roanoke water
            </a>
            {' '}
            — a Fort Worth wholesale customer — not Trophy Club MUD and not a Flower Mound even-Tuesday clock. Year-round
            rules limit spray to two assigned days: even addresses Saturday and Wednesday, odd addresses Sunday and
            Thursday, and apartments, businesses, parks, and common areas Tuesday and Friday. Monday is off. Spray is
            banned from 10 a.m. to 6 p.m. Handheld hose, drip, soaker hose, and tree bubblers may run any day. We follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. New or expanded irrigation goes through the
            city&apos;s{' '}
            <a
              href="https://roanoketexas.gov/485/Permits"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Permits
            </a>
            {' '}
            page at permits@roanoketexas.com; the irrigation application lists a $50 residential fee — confirm the
            current amount before you file. Visible lighting, grading, and layout changes can still need Briarwyck 114
            ACC notice through{' '}
            <a
              href="https://www.briarwyck114.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              briarwyck114.com
            </a>
            . We do not claim a count of jobs on Hackworth Street, Manchester Drive, Lancelot Drive, or Marshall Creek
            Road, and we do not treat Roanoke Elementary turf, Briarwyck Park, or FairPlay civic irrigation as a
            substitute for diagnosing a private yard. We walk zones, keep spray off walks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Briarwyck is City of Roanoke water — Fort Worth wholesale — not Trophy Club MUD and not a Fairway Ranch park-edge clock. Copying a Tuesday/Friday commons program onto a private Hackworth address is the usual controller mistake.',
        'Roanoke Elementary at 1401 Lancelot Drive and Briarwyck Park at 1375 Marshall Creek Road put weekday traffic on Manchester, Lancelot, and Marshall Creek. Tilted heads and dry strips show because parents notice the corridor every school morning.',
        '2007–2015 Meritage plats on Hackworth, Sodbury, Sandhurst, and Dorset leave HOA-visible fronts. Unmatched nozzles and overspray are judged from the street, not from a gated Indian Creek lot.',
        'Do not confuse this addition with Fairway Ranch on Litsey Road, Historic Oak Street, Roanoke’s separately listed Highlands, or Trophy Club’s Highlands. The association is Briarwyck 114 HOA.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along Hackworth Street, Manchester Drive, Lancelot Drive, and Marshall Creek Road.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on compact Briarwyck fronts.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit City of Roanoke even/odd house days — not a copied park or school Tuesday/Friday clock.',
        'Drainage planning for patio lows, sidewalk pooling, and runoff that follows Marshall Creek Road grade after storms on Denton County clay.',
        'Outdoor lighting repair and additions for entries and walks that stay visible on the way to Roanoke Elementary without changing the HOA street character.'
      ]}
      localTips={[
        'Confirm the current City of Roanoke watering notice before you pick days. Even addresses are Saturday and Wednesday; odd addresses are Sunday and Thursday; Monday stays off.',
        'Keep HOA commons, Briarwyck Park, and school turf on Tuesday and Friday. A house-only clock on Hackworth or Dorset should not copy that runtime.',
        'Use shorter cycle-and-soak windows so Briarwyck clay can absorb water instead of sending it across Manchester Drive or toward the Lancelot school frontage.',
        'Walk zones after mowing. Settling heads on 2007–2015 fronts tilt quickly and stripe the lawn the association and school traffic see.',
        'Keep spray off brick, sidewalks, and Marshall Creek Road. Pedestrian and drop-off streets here show misting and brown bands immediately.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and Briarwyck clocks often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'HOA curb appeal on Hackworth and Manchester',
          description:
            'Briarwyck 114 fronts are judged from the street and from school traffic on Lancelot Drive. We match nozzles, straighten risers, and cut overspray so the association view stays even without treating this like Fairway Ranch acreage or a gated Hogan’s Glen lot.'
        },
        {
          title: 'House even/odd versus Tuesday/Friday commons',
          description:
            'Private Briarwyck addresses follow Roanoke even Saturday/Wednesday or odd Sunday/Thursday days with a Monday shutoff. HOA commons, Briarwyck Park, and school turf water Tuesday and Friday. We set those windows separately so a house controller is not copying a park clock.'
        },
        {
          title: 'School-corridor clay on Lancelot and Marshall Creek',
          description:
            'Expansive clay plus 2007–2015 Meritage pads is the usual Briarwyck challenge. Long single cycles run off toward Marshall Creek Road while shade pockets on Manchester stay wet. We rebalance zones and repair laterals instead of only adding runtime.'
        },
        {
          title: 'Foundation drip and patio drainage after storms',
          description:
            'Street-facing beds do better on filtered drip than on spray hitting brick. After heavy rain we look at patio lows, downspout discharge, and how Marshall Creek Road already moves stormwater so irrigation is not fighting standing water against the slab.'
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
                'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased, and our lawn has never looked better.',
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
                'I partner with Texas Best Sprinklers on client projects. Their attention to detail and technical expertise keeps landscapes supported by the right irrigation.',
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Briarwyck street photo'
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
        heading: 'Featured work for homes like these in Briarwyck',
        title: 'The sunny Hackworth front burned while a shaded Manchester corner stayed wet',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Roanoke / nearby DFW service — not a named Briarwyck street, and not work at Roanoke Elementary, Briarwyck Park, or FairPlay civic irrigation.',
        body: 'A common Briarwyck call looks like this: the sunny strip along Hackworth Street or Marshall Creek Road browns out, a Manchester or Sodbury side yard under canopy stays dark and soft, and a patio corner holds water against the brick after storms. Clay sheds a long watering cycle before roots drink. Builder heads sit too close to the walk and spray the sidewalk the association and school traffic see on Lancelot Drive. The controller may still start on Monday, in the middle of the day, or on Tuesday like Briarwyck Park and Roanoke Elementary — all against the city’s year-round private-yard rules. Lots near 1375 Marshall Creek Road already sit next to a city park drainage and trail corridor. We map which zones the owner actually controls, check pressure and head height, match nozzles so throw fits a 2007–2015 Meritage pad, and move foundation beds onto drip where spray was hitting walls and mulch. Controller runtimes split into cycle-and-soak windows on the correct even or odd days, after 6 p.m. or before 10 a.m. Common-area and school clocks stay off the private program. If the wet corner is irrigation plus settled grade and downspouts, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Briarwyck clay and cycle-and-soak on Meritage pads',
          description:
            'Expansive North Texas clay on Hackworth Street and Manchester Drive lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward sidewalks, Marshall Creek Road, and settled patios. This is not Fairway Ranch park-edge acreage and not Historic Oak Street storefront planters.'
        },
        {
          title: 'Heat, ET, and Briarwyck controller schedules',
          description:
            'Denton County summers push evapotranspiration hard on street-facing turf. We set seasonal programs around Roanoke even/odd house days, the Monday shutoff, HOA and park Tuesday/Friday commons, and Water is Awesome weekly guidance so Briarwyck systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade pockets versus sun on Briarwyck school-corridor fronts',
          description:
            'Street trees and park-edge canopy create shade pockets next to open turf along Lancelot Drive and Marshall Creek Road. Shade and sun zones need different nozzles and runtimes, or the side yard stays soggy while the HOA strip the drop-off line sees dies.'
        },
        {
          title: 'HOA appearance, compact Briarwyck irrigation, and foundation drip',
          description:
            'Builder laterals, valves, and wiring on 2007–2015 plats fail under clay movement and tight plantings. Foundation beds perform better on filtered drip than on spray. Briarwyck 114 notices unmatched heads and overspray — we keep the street view even without treating this like Fairway Ranch, Oak Street, or Trophy Club’s Highlands.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Briarwyck site assessment and issue mapping, including Lancelot-facing turf, Marshall Creek Road grade, and any HOA-visible front',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit 76262 lots, Briarwyck 114 ACC-visible work, city irrigation permits when a new system is in play, and school-corridor access',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Briarwyck?',
          answer:
            'Briarwyck 114 Homeowners’ Association, Inc. reviews exterior improvements through its ACC portal. Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout, but visible piping, lighting, and grading changes can still need association notice. New or substantially expanded irrigation systems in the City of Roanoke generally need an irrigation permit emailed to permits@roanoketexas.com; the published residential application lists a $50 fee — confirm the current amount. Drainage that changes grading or visible piping may still need city guidance. We describe the visible work before it starts so you can check association documents or city requirements. We do not file permit or association applications unless that is arranged separately.'
        },
        {
          question: 'How should we water Briarwyck clay, shade, and school-corridor lots?',
          answer:
            'Most Briarwyck yards need cycle-and-soak on turf, separate runtimes for shaded Manchester or Sodbury corners versus the sunny Hackworth or Marshall Creek Road strip, and drip at foundation beds. Long single cycles sheet across clay and collect on patios. We set private programs around Roanoke even/odd days, the Monday shutoff, the 10 a.m. to 6 p.m. spray ban, and Water is Awesome weekly advice. HOA commons, Briarwyck Park, and Roanoke Elementary follow the Tuesday/Friday park calendar — do not copy that onto a private address, and do not copy campus irrigation onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access on 2007–2015 Meritage lots, existing pipe condition, HOA appearance rules, and how far grade has settled toward Marshall Creek Road or the slab change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Briarwyck?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Lateral leaks, main-line issues, or drainage that needs a layout may need a follow-up. Same-week scheduling is typical; active leaks get priority. We plan around Marshall Creek Road, Lancelot Drive, and school arrival at Roanoke Elementary when possible — buses use Lancelot, and car traffic is routed off the Manchester/Lancelot intersection.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'The City of Roanoke is a Fort Worth wholesale customer. Year-round rules are no watering Monday; even addresses Saturday and Wednesday; odd addresses Sunday and Thursday; apartments, businesses, parks, and common areas Tuesday and Friday. Spray irrigation is not permitted from 10 a.m. to 6 p.m. Handheld hose, drip, soaker hose, and tree bubblers may run any day. We program start times and day patterns that fit those rules, keep HOA and school commons off the private-yard clock, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street or toward Marshall Creek Road. Always confirm the latest notice on the City of Roanoke watering-restrictions page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Fairway Ranch',
          description:
            'Wilbow master-planned Roanoke lots on Litsey Road and Fairway Ranch Parkway — a different addition than Briarwyck 114 on Lancelot and Hackworth.',
          link: '/roanoke'
        },
        {
          name: 'Marshall Creek',
          description:
            'Roanoke streets listed separately from Briarwyck. Marshall Creek Road is the park and school corridor for this addition, not a substitute plat name.',
          link: '/roanoke'
        },
        {
          name: 'The Highlands',
          description:
            'Roanoke’s listed Highlands — not Trophy Club’s multi-HOA Highlands and not Briarwyck 114.',
          link: '/roanoke'
        },
        {
          name: "Hogan's Glen",
          description:
            'Guard-gated Trophy Club lots on Indian Creek and Trophy Club MUD water — a different town and a different watering calendar.',
          link: '/trophy-club/hogans-glen'
        },
        {
          name: 'Historic Downtown Roanoke',
          description:
            'Oak Street civic lots around City Hall and the visitor center — compact township pads, not Meritage Briarwyck fronts.',
          link: '/roanoke'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, nozzle matching, and dry spots on Briarwyck 114 lawns along Hackworth, Manchester, and Lancelot.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed conversions that keep water on plants instead of brick, mulch, and school-corridor sidewalks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, sidewalk pooling, and clay saturation near Briarwyck slabs and the Marshall Creek Road corridor.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Briarwyck Park',
          url: 'https://www.roanoketexas.gov/185/City-Parks',
          description:
            'The city park at 1375 Marshall Creek Road with a playground, benches, picnic tables, and a walking trail — the civic neighbor many Briarwyck lots already sit beside, not a private-yard watering model.'
        },
        {
          name: 'Roanoke Elementary School',
          url: 'https://roanoke.nisdtx.org/',
          description:
            'Northwest ISD campus at 1401 Lancelot Drive, moved into the Briarwyck addition in 2010. School-week traffic on Lancelot, Manchester, and Marshall Creek is part of daily life on nearby lots.'
        },
        {
          name: 'Roanoke Public Library',
          url: 'https://roanoketexas.gov/166/Library',
          description:
            'The city library at 308 S. Walnut Street is a short drive from the addition and from Historic Oak Street — civic context, not a reason to skip lot-level drip at foundations.'
        },
        {
          name: 'Roanoke Recreation Center',
          url: 'https://www.roanoketexas.gov/191/Recreation-Center',
          description:
            'The 38,000-square-foot rec center at 501 Roanoke Road is the city’s indoor fitness and gym hub off US 377 — useful town context, not a substitute for diagnosing a Hackworth controller.'
        },
        {
          name: 'Roanoke Visitor Center & Museum',
          url: 'https://www.roanoketexas.gov/207/Visitor-Center-Museum',
          description:
            'The restored 1886 rock building at 114 N. Oak Street in Historic Downtown Roanoke. Oak Street civic turf is not a Briarwyck backyard.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Briarwyck is tied to the{' '}
            <a
              href="https://roanoketexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Roanoke
            </a>
            , campuses in{' '}
            <a
              href="https://www.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Northwest ISD
            </a>
            , and the neighborhood campus at{' '}
            <a
              href="https://roanoke.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Roanoke Elementary
            </a>
            {' '}
            on Lancelot Drive. Families also use{' '}
            <a
              href="https://www.roanoketexas.gov/185/City-Parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Briarwyck Park
            </a>
            {' '}
            on Marshall Creek Road, the{' '}
            <a
              href="https://roanoketexas.gov/166/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Roanoke Public Library
            </a>
            {' '}
            on Walnut Street, and the{' '}
            <a
              href="https://www.roanoketexas.gov/191/Recreation-Center"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Recreation Center
            </a>
            {' '}
            at 501 Roanoke Road — which is why overspray onto walks and uneven front turf gets noticed quickly.
          </p>
          <p>
            Outdoor watering here follows the city&apos;s year-round Fort Worth wholesale schedule, not a Trophy Club
            MUD clock and not a Flower Mound even-Tuesday plan. Check the city&apos;s{' '}
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
            , weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>
            , and association documents at{' '}
            <a
              href="https://www.briarwyck114.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Briarwyck 114 HOA
            </a>
            . Civic stops such as the{' '}
            <a
              href="https://www.roanoketexas.gov/207/Visitor-Center-Museum"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Visitor Center &amp; Museum
            </a>
            {' '}
            on Oak Street sit a short drive from Lancelot Drive — useful town context, not a reason to ignore lot-level
            drip at foundations or drainage after storms on 76262 clay.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Briarwyck?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
