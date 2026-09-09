import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function ArlingtonHeightsPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Fort Worth"
      citySlug="fort-worth"
      neighborhoodName="Arlington Heights"
      canonicalUrl="https://sprinkleranddrains.com/fort-worth/arlington-heights"
      pageTitle="Arlington Heights Sprinkler Repair & Drainage in Fort Worth, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Arlington Heights bungalows in Fort Worth ZIP 76107. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Arlington Heights Sprinkler Repair & Drainage"
      heroDescription="Craftsman, Tudor, and bungalow lots between Camp Bowie, Montgomery, and I-30 sit on expansive clay with parkways, alleys, and mature street trees. We diagnose leaks, convert foundation spray to drip, and plan drainage so water soaks in instead of sheeting toward sidewalks and the freeway edge."
      introHeading="Parkway shade, alley access, and clay on compact historic lots"
      intro={
        <>
          <p>
            Arlington Heights is the triangle in ZIP 76107 bounded by Camp Bowie Boulevard on the north, Montgomery Street on
            the east, and Interstate 30 on the south and west. Streets such as Pershing Avenue, Hillcrest Street, Thomas Place,
            El Campo Avenue, Lafayette Avenue, Bryce Avenue, and Clover Lane hold early-1900s Craftsman, Tudor, and bungalow
            houses on compact lots with parkways and alleys — not a gated Mid-Cities plat. Mature canopy splits each yard into
            deep shade and a hot strip along the walk. After a storm, clay sheds toward curb returns, alley low spots, and the
            I-30 grade faster than a long spray cycle can soak in. That is a different irrigation problem than a museum-campus
            courtyard a few blocks east or a quarter-acre lawn with one sunny front strip.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Arlington Heights as part of our Fort Worth work. We are a
            licensed irrigator (LI22462). We program start times around the city’s year-round rules — even or odd residential
            days and no spray between 10 a.m. and 6 p.m. — and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving a summer schedule running into cooler months. Drip, handheld, soaker, and
            bubbler watering may run any day under the city ordinance, which is why foundation beds and parkway plantings often
            move off spray. The Arlington Heights Neighborhood Association is a civic group, not an HOA that dictates head
            style. We do not claim a count of jobs on Pershing or Hillcrest. We do walk each zone, protect older brick and
            street trees, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original layouts on bungalow lots often have too few zones, so the sunny parkway browns while shade under street trees stays soft.',
        'Alleys between Pershing, El Campo, and Collinwood hide valve boxes and low-side drainage that a front-only walk misses.',
        'Camp Bowie pavement and the I-30 edge raise heat on street-facing turf that already sits on expansive North Texas clay.',
        'AHNA is not a homeowners association. Neighbors and city watering hours still notice misting onto walks, drives, and the Camp Bowie frontage.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along parkways and alley returns.',
        'Drip conversion at foundation beds and tree rings so older brick, siding, and mulch stop getting soaked.',
        'Controller programming and cycle-and-soak schedules that fit Fort Worth even/odd days and the 10 a.m. to 6 p.m. spray ban.',
        'Drainage planning for settled side yards, alley lows, patio pooling, and runoff that moves toward I-30 and Camp Bowie gutters.',
        'Outdoor lighting repair and additions for walkways and entries on established Heights streets.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Arlington Heights clay can absorb water instead of sending it down Hillcrest or Thomas Place to the curb.',
        'Walk the alley as well as the front. Valve boxes and side-yard settlement hide behind garages on these compact lots.',
        'Keep spray off sidewalks, drives, and neighboring lots. The city treats runoff from broken or misaligned heads as water waste.',
        'Drop summer runtimes when nights cool. Water is Awesome still publishes weekly ET-based advice even when drought stages are off.',
        'Confirm even or odd address days before changing the controller. Residential spray days in Fort Worth are not the same as apartment or common-area days a few blocks toward the Cultural District.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without inventing an HOA',
          description:
            'AHNA is a neighborhood association, not a homeowners association that reviews head brands. Front lawns still face parkways and Camp Bowie. We match heads, straighten risers, and cut overspray so the street view stays even without unauthorized layout changes.'
        },
        {
          title: 'Fort Worth watering days and Tarrant supply',
          description:
            'Residential even/odd days and no spray from 10 a.m. to 6 p.m. We set controllers for those windows, add rain and freeze protection where hardware allows, and point homeowners to Water is Awesome weekly guidance.'
        },
        {
          title: 'Clay, parkway shade, and alley settlement',
          description:
            'Expansive clay plus mature street trees is the Arlington Heights pattern: one sunny walk strip browns, shade stays soft, and an alley corner holds water. We rebalance zones instead of adding runtime that just runs to the curb.'
        },
        {
          title: 'Drip at older foundations and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and a current controller reduce waste on bungalow lots. After heavy rain we look at downspouts and low pads so irrigation is not fighting standing water next to a century-old slab or an alley that already sheds toward I-30.'
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
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Arlington Heights street photo'
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
        heading: 'Featured work for homes like these in Arlington Heights',
        title: 'A dry parkway strip, a soggy alley corner, and a controller still on August',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Fort Worth / nearby DFW service — not a named Arlington Heights street.',
        body: 'A common call on established Heights lots looks like this: the sunny strip along the parkway browns out, turf under street trees stays dark and soft, and an alley or patio corner holds water after storms. Clay sheds a long watering cycle before roots drink, and an original three- or four-zone layout cannot treat shade and sun the same. We map zones, check pressure and head height, match nozzles so throw and precipitation line up, and move foundation beds onto drip where spray was hitting brick and mulch. Controller start times move into Fort Worth’s allowed windows with cycle-and-soak repeats. If the low pad is irrigation plus a downspout or alley grade, we talk through drainage instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Arlington Heights clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Arlington Heights lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward parkway curb returns, alley lows, and Camp Bowie gutter lines.'
        },
        {
          title: 'Heat, ET, and Arlington Heights controller schedules',
          description:
            'Fort Worth summers push evapotranspiration hard, and the city still limits spray from 10 a.m. to 6 p.m. We set seasonal programs and point homeowners to Water is Awesome weekly guidance so Arlington Heights systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Shade versus sun on Arlington Heights parkway lots',
          description:
            'Live oaks and other mature canopy create deep shade next to open street turf. Shared runtimes overwater the shade pocket and starve the walk strip. Separate nozzle types and zone timing keep both sides of an Arlington Heights yard honest.'
        },
        {
          title: 'Older Arlington Heights systems, foundations, and alley drainage',
          description:
            'First-generation pipe and mixed replacement heads are common on bungalow and Tudor lots. Foundation drip protects older slabs better than spray. Settled side yards and alley lows need a drainage plan after storms, not another hour on the controller.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Arlington Heights site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that respect city watering hours and neighbor-facing curb appeal',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Arlington Heights?',
          answer:
            'Arlington Heights Neighborhood Association is not a homeowners association, so irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading or visible piping, and lighting that alters the street view, may still need City of Fort Worth guidance. We describe the visible scope before work starts so you can check city rules. We do not file permit applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Arlington Heights clay, shade, and compact lots?',
          answer:
            'Most Arlington Heights yards need cycle-and-soak on turf, separate runtimes for parkway shade versus the sunny walk strip, and drip at foundation beds. Do not run a long single cycle that sheets to Hillcrest, Thomas Place, or the alley. We set programs around Fort Worth’s 10 a.m. to 6 p.m. spray ban and Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, alley access, existing pipe condition, and settled grades change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Arlington Heights?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority. Alley access and I-30-edge parking can affect the visit, so we plan around that when you tell us.'
        },
        {
          question: 'How do you set controllers for Fort Worth watering rules in Arlington Heights?',
          answer:
            'Fort Worth currently assigns even residential addresses Wednesday and Saturday, odd addresses Thursday and Sunday, and apartments, businesses, and common areas Tuesday and Friday. Spray is not allowed between 10 a.m. and 6 p.m. Drip, handheld, soaker, and bubbler watering may run any day. We program start times and day patterns that fit those rules, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest notice on the City of Fort Worth irrigation page before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Cultural District',
          description: 'Courtyard, street-tree, and museum-campus irrigation just east of Montgomery and Camp Bowie.',
          link: '/fort-worth'
        },
        {
          name: 'Downtown Fort Worth',
          description: 'Amenity-lawn and street-tree irrigation closer to Sundance Square and the Water Gardens.',
          link: '/fort-worth'
        },
        {
          name: 'Fairmount',
          description: 'Irrigation and drainage for historic bungalow lots south of downtown with compact parkways and alleys.',
          link: '/fort-worth'
        },
        {
          name: 'Ridglea',
          description: 'Irrigation repair and drainage planning for nearby west Fort Worth neighborhoods farther out Camp Bowie.',
          link: '/fort-worth'
        },
        {
          name: 'Wedgwood',
          description: 'Seasonal sprinkler service and drainage support across southwest Fort Worth.',
          link: '/fort-worth'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry parkway strips, and pressure issues on Arlington Heights systems.',
          link: '/fort-worth/sprinkler-repair-services-in-fort-worth-tx'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and tree-ring drip so older Arlington Heights slabs and brick get water without soaking walks.',
          link: '/fort-worth/drip-irrigation-services-in-fort-worth-tx'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, alley settlement, and runoff that moves toward I-30 and Camp Bowie gutters.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: "Veteran's Memorial Park",
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/veterans-memorial-park',
          description:
            'This half-acre triangle at 4120 Camp Bowie Boulevard sits where Washington, Crestline Road, and Thomas Place meet the boulevard. Walks and beds around the 36th Division memorials are why overspray and broken heads get noticed quickly.'
        },
        {
          name: 'Thomas Place Community Center',
          url: 'https://www.fortworthtexas.gov/departments/parks/services/community-centers/thomas-place-community-center',
          description:
            'The former schoolhouse at 4237 Lafayette Avenue has a playground, court, and after-school programs. Neighbors walk here from Hillcrest and Bryce, so brown parkway strips and sidewalk misting show up on that trip.'
        },
        {
          name: 'Trinity Park',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/trinity-park',
          description:
            'Trinity Park at 2401 University Drive follows the Clear Fork just east of Montgomery. After storms, Heights runoff and clay saturation show up along this greenbelt edge, not only on alley drains.'
        },
        {
          name: 'Fort Worth Botanic Garden',
          url: 'https://fwbg.org/',
          description:
            'The garden at 3220 Botanic Garden Boulevard is a short trip from University Drive. It is useful context for how local clay, shade, and irrigation behave beyond a bungalow parkway.'
        },
        {
          name: 'South Hi Mount Elementary',
          url: 'https://southhimount.fwisd.org/about-our-school',
          description:
            'The 1936 WPA school at 4101 Birchman Avenue sits in the Heights. Families walking or driving to campus notice dry street strips and overspray the same way they notice a leaning head at home.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Arlington Heights is tied to the{' '}
            <a
              href="https://www.fortworthtexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth
            </a>
            , campuses in the{' '}
            <a
              href="https://www.fwisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Independent School District
            </a>
            , and parks listed by{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Parks &amp; Recreation
            </a>
            . Residents also use the civic listings from the{' '}
            <a
              href="https://arlingtonheightsna.com/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Arlington Heights Neighborhood Association
            </a>{' '}
            and the high school campus at{' '}
            <a
              href="https://arlingtonheights.fwisd.org/about-our-school"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Arlington Heights High School
            </a>{' '}
            on the West Freeway, which is why brown parkway strips and sidewalk overspray get noticed on the walk between Camp
            Bowie, Lafayette, and home.
          </p>
          <p>
            Outdoor watering here follows city days and Tarrant County supply reality. Check the{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth irrigation page
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
            , and regional context from the{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>
            . The triangle at{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks/parks-and-trails/veterans-memorial-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Veteran&apos;s Memorial Park
            </a>{' '}
            on Camp Bowie is a reminder that this is a historic west-side neighborhood where irrigation has to respect clay,
            parkway trees, alleys, and city watering days — not a brand-new HOA plat.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Arlington Heights?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
