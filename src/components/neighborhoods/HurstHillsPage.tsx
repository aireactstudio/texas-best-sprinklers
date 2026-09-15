import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function HurstHillsPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Hurst"
      citySlug="hurst"
      neighborhoodName="Hurst Hills"
      canonicalUrl="https://sprinkleranddrains.com/hurst/hurst-hills"
      pageTitle="Hurst Hills Sprinkler Repair & Drainage in Hurst, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Hurst Hills in Hurst, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Hurst Hills Sprinkler Repair & Drainage"
      heroDescription="Established Hurst Hills lots around Hurst Hills Elementary mix mature canopy, expansive clay, and controllers that still ignore even/odd watering days. We diagnose leaks, rebalance spray and drip, and plan drainage so water soaks in instead of running toward Pipeline gutters, Redbud sidewalks, and slabs."
      introHeading="Even/odd watering, clay absorption, and shade on Hurst Hills lots"
      intro={
        <>
          <p>
            Hurst Hills sits in ZIP 76053 on the Mid-Cities clay that stretches between I-820 and Precinct Line Road. Daily life
            is organized around{' '}
            <a
              href="https://hursthills.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Hurst Hills Elementary
            </a>{' '}
            at 525 Billie Ruth Lane, with residential streets such as West Redbud Drive, Kathryn Street, Glenn Drive, and Arcadia
            Street a short walk or school-zone drive away. The school’s unofficial attendance map frames this pocket west of
            Highway 820, south of Trinity Boulevard, east of Precinct Line and Redbud, and north of Pipeline Road. That is not a
            new gated HOA plat. It is established single-family brick with tree canopy that has outgrown the first irrigation
            layout: too few zones, mixed replacement heads, and a controller that still waters like peak August — including on
            Mondays, when Hurst does not allow spray.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Hurst Hills as part of our Hurst and Mid-Cities work. We are a
            licensed irrigator (LI22462). We program start times around the city’s year-round rules — even addresses Wednesday
            and Saturday, odd addresses Thursday and Sunday, no Monday spray, and no automatic irrigation from 10 a.m. to 6 p.m.
            — and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving a summer schedule running into fall. Drip, soaker, and handheld hose are
            treated differently than spray in Hurst, which is why foundation beds on these lots often belong on drip rather than
            leftover rotors. We do not claim a count of jobs on Billie Ruth Lane or West Redbud Drive. We do walk each zone,
            protect established trees and beds, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original irrigation on Hurst Hills lots often has too few zones and mismatched heads; dry sidewalk strips and wet shade pockets show up on the same visit.',
        'Mature canopy along Redbud, Kathryn, and Billie Ruth splits each lot into deep shade and a hot street strip that cannot share one runtime.',
        'Hurst’s even/odd days, Monday shutoff, and 10 a.m. to 6 p.m. spray ban mean night and early-morning cycle-and-soak windows have to actually drain into clay, not sheet to Pipeline gutters.',
        'Foundation beds on older slabs perform better on drip — which Hurst allows any day — than leftover spray that hits brick, siding, and mulch.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along sidewalks and school-zone curb returns.',
        'Drip conversion at foundation beds and tree rings so brick and siding stop getting soaked, using the city’s drip exemption instead of extra spray days.',
        'Controller programming and cycle-and-soak schedules that fit Hurst even/odd days, the Monday shutoff, and Tarrant County heat.',
        'Drainage planning for settled side yards, patio pooling, and runoff that moves toward Pipeline Road and park-adjacent lows after Mid-Cities storms.',
        'Outdoor lighting repair and additions for walkways and entries on established Redbud-area streets without inventing a gated-HOA look.'
      ]}
      localTips={[
        'Confirm your address is even or odd before changing days. Hurst spray is Wednesday/Saturday (even) or Thursday/Sunday (odd), never Monday, and never 10 a.m. to 6 p.m.',
        'Use shorter cycle-and-soak windows so Hurst Hills clay can absorb water instead of sending it down Redbud or toward Pipeline gutters.',
        'Walk zones after mowing. Settling heads on established lots tilt quickly and stripe the front lawn along the sidewalk that school traffic sees.',
        'Move foundation spray to drip where hardware allows. Hurst treats drip, soaker, and handheld hose differently than automatic spray.',
        'Drop summer runtimes when nights cool. Water is Awesome and Save Tarrant Water still publish weekly ET-based advice even when drought stages are off.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without inventing an HOA',
          description:
            'Hurst Hills listings typically do not describe a gated homeowners association. Front lawns still face Billie Ruth Lane, Redbud, and school drop-off. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Hurst watering days and Tarrant supply',
          description:
            'The city keeps year-round even/odd spray days, a Monday shutoff, and a 10 a.m. to 6 p.m. irrigation ban. We set controllers for those windows, add rain and freeze protection where hardware allows, and point homeowners to Water is Awesome and Save Tarrant Water weekly guidance.'
        },
        {
          title: 'Clay, canopy, and school-zone lots',
          description:
            'Expansive clay plus mature trees is the Hurst Hills pattern: one sunny front strip browns, shade stays soft, and a patio corner holds water. Weekday traffic around the elementary makes contained work and tidy cleanup part of the job. We rebalance zones instead of adding runtime that just runs to the curb.'
        },
        {
          title: 'Drip at older foundations and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on established lots. After heavy rain we look at downspouts and low pads near Pipeline and park edges so irrigation is not fighting standing water next to the slab.'
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
        arlingtonReview
          ? {
              reviewer: arlingtonReview.name,
              location: 'Arlington, TX',
              date: arlingtonReview.time,
              quote: arlingtonReview.content,
              stars: arlingtonReview.stars
            }
          : {
              reviewer: 'Sarah Johnson',
              location: 'Arlington, TX',
              date: '3 months ago',
              quote:
                'As a property manager, I have worked with many irrigation companies. Texas Best Sprinklers is professional and reliable, and their controller work has cut water waste.',
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
                'I partner with Texas Best Sprinklers on client projects. Their attention to detail ensures landscape designs have the right irrigation support.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Hurst Hills street photo'
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
        heading: 'Featured work for homes like these in Hurst Hills',
        title: 'A dry sidewalk strip, a soggy shade pocket, and a controller still watering Mondays',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Hurst / nearby Mid-Cities service — not a named Hurst Hills street.',
        body: 'A common call on established Hurst lots looks like this: the sunny strip along the sidewalk browns out, turf under oaks stays dark and soft, and a patio corner holds water after storms. The controller is still set to water every other morning, including Monday, which Hurst does not allow for spray. Clay sheds a long watering cycle before roots drink, and an original three- or four-zone layout cannot treat shade and sun the same. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting brick and mulch. Start times move onto even or odd days inside the 10 a.m. to 6 p.m. ban, with cycle-and-soak repeats. If the low pad is irrigation plus a downspout draining toward Pipeline or a park-edge swale, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Hurst Hills clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Hurst Hills lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Redbud sidewalks, Billie Ruth curb returns, and Pipeline gutter lines.'
        },
        {
          title: 'Heat, ET, and Hurst Hills controller schedules',
          description:
            'Hurst summers push evapotranspiration hard, and the city still limits spray to two days a week with no irrigation from 10 a.m. to 6 p.m. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Hurst Hills systems are not stuck on a peak-heat runtime in cooler months — or watering on Monday.'
        },
        {
          title: 'Shade versus sun on Hurst Hills school-zone lots',
          description:
            'Mature canopy around the elementary and along Redbud and Kathryn creates deep shade next to open front turf. Shared runtimes overwater the shade pocket and starve the street strip. Separate nozzle types and zone timing keep both sides of a Hurst Hills yard honest.'
        },
        {
          title: 'Older Hurst Hills systems, foundations, and storm drainage',
          description:
            'First-generation pipe and mixed replacement heads are common on established Mid-Cities homes. Foundation drip protects older slabs better than spray, and Hurst allows drip any day. Settled side yards and patio lows need a drainage plan after storms, not another hour on the controller.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Hurst Hills site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect Hurst watering days, the Monday shutoff, and neighbor-facing curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Hurst Hills?',
          answer:
            'Most Hurst Hills lots do not have a gated homeowners association, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Hurst guidance. We describe the visible scope before work starts so you can check city rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Hurst Hills clay, shade, and older lots?',
          answer:
            'Most Hurst Hills yards need cycle-and-soak on turf, separate runtimes for tree shade versus the sunny sidewalk strip, and drip at foundation beds. Do not run a long single cycle that sheets to Redbud or Pipeline. We set programs around Hurst’s even/odd days, the Monday shutoff, the 10 a.m. to 6 p.m. spray ban, and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Hurst Hills?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority. We plan around school drop-off on Billie Ruth Lane when that street is part of the visit.'
        },
        {
          question: 'How do you set controllers for Hurst watering rules?',
          answer:
            'Hurst currently uses a year-round schedule: no Monday watering, even-numbered addresses Wednesday and Saturday, odd-numbered addresses Thursday and Sunday, and no irrigation or sprinkler systems between 10 a.m. and 6 p.m. Hand-held hose, drip, and soaker hose are allowed outside those day and time limits. We program start times and day patterns that fit that window, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest notice on the City of Hurst water conservation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Mayfair North',
          description: 'Sprinkler repair, controller tuning, and drainage planning for nearby north Hurst homes.',
          link: '/hurst'
        },
        {
          name: 'Bellaire Park North',
          description: 'Irrigation and drainage support for streets near Bellaire Park and Vivagene Copeland Park.',
          link: '/hurst'
        },
        {
          name: 'Shady Oaks',
          description: 'Seasonal sprinkler service and clay-soil watering help across established Hurst neighborhoods.',
          link: '/hurst'
        },
        {
          name: 'Wintergreen Acres',
          description: 'Coverage troubleshooting and water-efficient irrigation support for nearby Hurst lots.',
          link: '/hurst'
        },
        {
          name: 'Bedford Heights',
          description: 'Sprinkler repair and drainage planning for nearby Bedford homes just east of the Mid-Cities line.',
          link: '/bedford/bedford-heights'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on established Hurst Hills lawns.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Pipeline Road and sidewalks.',
          link: '/services/drainage-solutions'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and tree-ring drip so older Hurst Hills slabs and canopy get water without soaking brick.',
          link: '/services/drip-irrigation'
        }
      ]}
      attractions={[
        {
          name: 'Hurst Hills Elementary',
          url: 'https://hursthills.hebisd.edu/',
          description:
            'HEB ISD campus at 525 Billie Ruth Lane — the weekday landmark for this pocket of Hurst. School-zone parking and drop-off are why tidy, contained irrigation work matters on nearby streets.'
        },
        {
          name: 'Hurst Recreation Center at Central Park',
          url: 'https://www.hursttx.gov/about-us/departments/community-services/find-us',
          description:
            'The rec center at 700 Mary Drive sits in Central Park, east of Hurstview and south of Pipeline. Families from Hurst Hills use the campus all week, which is why brown front strips and sidewalk overspray get noticed quickly.'
        },
        {
          name: 'Chisholm Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/32',
          description:
            'Hurst’s largest park at 2200 Norwood Drive (50 acres, established 1969) with trails, a fishing pond, and the aquatics center. Useful context for how local clay and stormwater behave beyond the neighborhood sidewalk.'
        },
        {
          name: 'Vivagene Copeland Park and Bellaire Park',
          url: 'https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/80/887',
          description:
            'Adjacent parks on Pecan Drive in southeast Hurst (Bellaire Park from 1962; Copeland added later as Bellaire Park North). Combined playgrounds, trails, and sports space a short drive from Hurst Hills lots.'
        },
        {
          name: 'Hurst Public Library',
          url: 'https://www.hursttx.gov/about-us/departments/library',
          description:
            'The library at 901 Precinct Line Road is a straightforward landmark on the east edge of this part of Hurst, along with the pavilion next to it.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Hurst Hills is tied to the{' '}
            <a
              href="https://www.hursttx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Hurst
            </a>
            , campuses in the{' '}
            <a
              href="https://www.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst-Euless-Bedford Independent School District
            </a>
            , and{' '}
            <a
              href="https://hursthills.hebisd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst Hills Elementary
            </a>{' '}
            on Billie Ruth Lane. Families also use the{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/community-services/find-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst Recreation Center
            </a>{' '}
            at Central Park and the{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Hurst Public Library
            </a>{' '}
            on Precinct Line Road, which is why brown front strips and sidewalk overspray get noticed on the walk or drive over.
          </p>
          <p>
            Outdoor watering here follows city days and Tarrant County supply reality. Check the{' '}
            <a
              href="https://www.hursttx.gov/about-us/departments/public-works/water-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Hurst water conservation page
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
            , regional tips from{' '}
            <a
              href="https://www.savetarrantwater.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Save Tarrant Water
            </a>
            , and supply context from the{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>
            . Parks listed by the city — including{' '}
            <a
              href="https://www.hursttx.gov/Home/Components/FacilityDirectory/FacilityDirectory/32"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Chisholm Park
            </a>{' '}
            — are a reminder that this is an older Mid-Cities neighborhood where irrigation has to respect clay, mature trees, and
            Hurst watering days, not a brand-new HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Hurst Hills?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
