import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

export default function WedgwoodPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Fort Worth"
      citySlug="fort-worth"
      neighborhoodName="Wedgwood"
      canonicalUrl="https://sprinkleranddrains.com/fort-worth/wedgwood"
      pageTitle="Wedgwood Sprinkler Repair & Drainage in Fort Worth, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Wedgwood in Fort Worth, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Wedgwood Sprinkler Repair & Drainage"
      heroDescription="Midcentury brick ranches on W-named streets in ZIP 76133 sit on expansive clay, mature canopy, and original 1950s–70s irrigation. We diagnose leaks, rebalance shade versus sun, and plan drainage so water soaks in instead of sheeting toward Granbury Road, Altamesa Boulevard, and I-20 gutters."
      introHeading="When a Winifred Drive lawn has no sidewalk, runoff has nowhere polite to go"
      intro={
        <>
          <p>
            Wedgwood is a midcentury master-planned pocket of southwest Fort Worth, developed from the 1950s into the
            1970s, bounded roughly by Interstate 20 on the north, Granbury Road on the northwest, Altamesa Boulevard on the
            south, and McCart Avenue and Westcreek Drive on the east. Curvilinear streets such as Winifred Drive, Whitman
            Avenue, Wedgmont Drive, Wrigley Drive, Woodway Drive, and Welch Avenue almost all start with W. Most houses are
            all-brick ranches with attached garages on larger lots than a typical new Mid-Cities tract. Many blocks still
            have few or no sidewalks, so irrigation overspray and stormwater hit the street instead of a parkway strip.
            Parks were sited next to schools on purpose: Wedgwood Park at 5309 Winifred Drive shares a block with Bruce
            Shulkey Elementary at 5533 Whitman Avenue (opened 1958). That layout, plus mature oaks and pecans, is why one
            zone can stay damp under canopy while the street-facing turf bakes — and why leftover water from a long cycle
            rolls toward curb, alley, or a neighbor&apos;s slab instead of into clay.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Wedgwood as part of our Fort Worth work. We are a licensed
            irrigator (LI22462). We program controllers for the city&apos;s year-round twice-a-week spray schedule — even
            addresses Wednesday and Saturday, odd addresses Thursday and Sunday, no spray 10 a.m. to 6 p.m. — and we follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly watering advice instead of leaving a peak-August runtime running into October. Drip, soaker hose, bubbler,
            and handheld watering may run any day under current city rules, which is why foundation beds on these brick
            ranches often belong on drip. We do not claim a count of jobs on Winifred, Whitman, or Woodway. We do walk
            zones, check pressure on long ranch lots, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Original 1950s–70s systems on Wedgwood lots often have too few zones and mixed replacement heads; dry street strips and wet shade pockets show up on the same visit.',
        'Few sidewalks mean overspray and clay runoff hit the curb quickly. Cycle-and-soak has to actually soak, not sheet down Winifred or Woodway.',
        'Parks next to schools (Wedgwood Park and Shulkey) and the linear grade at Krauss-Baker Park change how stormwater sits after a heavy rain — lot drainage is not the same as a gated greenbelt HOA.',
        'Brick-ranch foundations and mature tree rings perform better on drip than leftover spray that hits masonry, mulch, and trunks.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along W-named streets and curb returns.',
        'Drip conversion at foundation beds and tree rings so brick ranches and established trees stop getting soaked by high-pressure spray.',
        'Controller programming and cycle-and-soak for Fort Worth even/odd watering days, the 10 a.m.–6 p.m. spray ban, and Tarrant County heat.',
        'Drainage planning for settled side yards, patio pooling, and runoff that follows curvilinear streets toward Altamesa, McCart, or park edges after storms.',
        'Outdoor lighting repair and additions for entries and mature trees without treating Wedgwood like a new gated subdivision.'
      ]}
      localTips={[
        'Use shorter cycle-and-soak windows so Wedgwood clay can absorb water instead of sending it down streets that often have no sidewalk buffer.',
        'Walk zones after mowing. Settling heads on 50- to 70-year lots tilt quickly and stripe the front lawn toward the curb.',
        'Keep spray off drives, street pavement, and neighboring lots. City watering rules treat runoff and broken heads as waste, even where there is no gated HOA.',
        'Drop summer runtimes when nights cool. Water is Awesome still publishes weekly ET-based advice for Tarrant County, and Fort Worth does not need an August schedule in October.',
        'Inspect valve boxes before peak heat. Slow leaks hide under oak and pecan mulch long before turf on Whitman or Winifred shows stress.'
      ]}
      trustCards={[
        {
          title: 'Curb appeal without inventing a gated HOA',
          description:
            'Original Wedgwood is a civic neighborhood with associations and a garden club, not a single gated architectural committee. Front lawns still face the street. We match heads, straighten risers, and cut overspray so the view from Winifred or Welch stays even without unauthorized layout changes.'
        },
        {
          title: 'Fort Worth twice-a-week watering and Tarrant supply',
          description:
            'Spray irrigation is limited to assigned days, with no watering 10 a.m.–6 p.m. Drip, handheld, soaker, and bubbler may run any day under current city rules. We set controllers for those windows, rain and freeze protection where hardware allows, and Water is Awesome weekly guidance.'
        },
        {
          title: 'Midcentury clay lots, mature canopy, and few sidewalks',
          description:
            'Expansive clay plus oaks and pecans split each ranch lot into shade pockets and a hot street strip. Long single cycles create runoff that hits pavement instead of a sidewalk parkway. We rebalance zones instead of just adding runtime.'
        },
        {
          title: 'Foundation drip and drainage after southwest Fort Worth storms',
          description:
            'Brick slabs and tree rings do better on drip than leftover spray. After heavy rain we look at patio lows and downspout discharge so irrigation is not fighting standing water headed toward Krauss-Baker grades or a neighbor’s side yard.'
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
                'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased by 30%, and our lawn has never looked better.',
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
                'As a property manager, I have worked with many irrigation companies. Texas Best Sprinklers is by far the most professional and reliable.',
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
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/sprinkler.png',
          alt: 'Sprinkler system work on a North Texas residential lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Wedgwood street photo'
        },
        {
          src: '/assets/images/optimized/drainage-weatherford.png',
          alt: 'Drainage work on a Texas Best Sprinklers project in North Texas',
          caption: 'Yard drainage at a low grade — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/Irrigation-Repair.png',
          alt: 'Irrigation diagnostic and repair work on a North Texas residential system',
          caption: 'Controller and zone diagnosis — nearby DFW / Fort Worth-area project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Wedgwood',
        title: 'A brick-ranch street strip stayed brown while shade by the slab stayed wet',
        image: '/assets/images/optimized/Sprinkler-Repair.png',
        imageAlt: 'Sprinkler repair work on a North Texas residential system',
        locationNote: 'Composite of typical Fort Worth / nearby DFW service — not a named Wedgwood street.',
        body: 'A common call on Wedgwood’s midcentury lots looks like this: the original controller still runs one long cycle, mixed heads throw unevenly across a ranch lawn, oaks hold moisture against the brick, and the street-facing strip stays dry because there is no sidewalk parkway to hide the miss. Clay sheds that first pass before roots drink, then leftover water follows curb toward Granbury, Altamesa, or a patio low. We map zones, check static and operating pressure, match nozzles so throw and precipitation line up, and move foundation and tree watering onto drip where spray was hitting masonry and trunks. Controller runtimes split into cycle-and-soak windows that fit Fort Worth watering days and the 10 a.m.–6 p.m. spray ban. If the low pad is irrigation plus downspout water, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Wedgwood clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Wedgwood lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward curbs on Winifred, Woodway, and other W-named streets that frequently have no sidewalk buffer.'
        },
        {
          title: 'Heat, ET, and Wedgwood controller schedules',
          description:
            'Southwest Fort Worth summers push evapotranspiration hard. We set seasonal programs around even/odd watering days, keep spray out of the 10 a.m.–6 p.m. window, and point homeowners to Water is Awesome weekly guidance so Wedgwood systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'Head and nozzle appearance on Wedgwood streets',
          description:
            'Without sidewalks, tilted risers, misting, and overspray onto pavement show immediately. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional for neighbors, the garden club’s civic standards, and city waste rules.'
        },
        {
          title: 'Shade versus sun, plus park-adjacent drainage on Wedgwood lots',
          description:
            'Oaks and pecans create shade pockets next to open turf. Lots near Wedgwood Park, Shulkey, or the Woodway-to-McCart linear park at Krauss-Baker also need check valves and, where water stands after storms, a drainage plan that respects existing ranch character — not a new-subdivision greenbelt HOA template.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Wedgwood site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with city watering rules and street appearance in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Wedgwood?',
          answer:
            'Original Wedgwood is not a single gated HOA plat. Civic neighborhood associations and the Wedgwood Garden Club care about appearance, but irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading, visible piping, or discharge toward streets and park edges, and lighting that alters the street view, may need City of Fort Worth guidance. New irrigation systems typically require a licensed irrigator and may need a city permit; ordinary head and pipe repairs usually do not. We describe the visible scope before work starts so you can check any association rules that apply to your block. We do not file association applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Wedgwood clay, shade, and ranch lots?',
          answer:
            'Most Wedgwood yards need cycle-and-soak on turf, separate runtimes for oak and pecan shade versus full sun, and drip at foundation beds. Ranch lots with long runs often need pressure regulation so far heads do not mist onto the street. We set programs around Fort Worth even/odd watering days, keep spray out of 10 a.m.–6 p.m., and use Water is Awesome weekly advice, then fine-tune after watching how clay absorbs on your lot.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, and slope toward curb or park edges change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Wedgwood?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'Fort Worth generally waters even residential addresses Wednesday and Saturday and odd addresses Thursday and Sunday, with no spray irrigation 10 a.m.–6 p.m. Non-residential sites use Tuesday and Friday. Drip, handheld hose, soaker hose, and bubblers may run any day under current city rules. We program start times and day patterns that fit those expectations, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Seasonal check-ups keep the controller from treating October like August. Always confirm the latest city or supplier notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Ridglea',
          description: 'Irrigation and drainage support for west Fort Worth homes toward Hulen and Camp Bowie.',
          link: '/fort-worth'
        },
        {
          name: 'Arlington Heights',
          description: 'Sprinkler repair and drainage for established west-side Fort Worth lots near Camp Bowie.',
          link: '/fort-worth'
        },
        {
          name: 'Fairmount',
          description: 'Irrigation and drainage for historic bungalow lots south of downtown Fort Worth.',
          link: '/fort-worth'
        },
        {
          name: 'Cultural District',
          description: 'Drip, lighting, and irrigation for mixed-use and nearby residential properties west of downtown.',
          link: '/fort-worth'
        },
        {
          name: 'Downtown Fort Worth',
          description: 'Courtyard, plaza, and amenity-turf irrigation closer to the city core.',
          link: '/fort-worth'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on midcentury ranch lawns and W-named streets.',
          link: '/fort-worth/sprinkler-repair-services-in-fort-worth-tx'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and tree-ring drip so brick slabs and mature canopy stop getting soaked by high-pressure spray.',
          link: '/fort-worth/drip-irrigation-services-in-fort-worth-tx'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward curbs, Altamesa, and park edges.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Wedgwood Park',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/wedgwood-park',
          description:
            'City park at 5309 Winifred Drive, set next to Bruce Shulkey Elementary. Useful context for how nearby grades and school-adjacent turf behave — not a substitute for lot-level drainage on the ranch next door.'
        },
        {
          name: 'Krauss Baker Park',
          url: 'https://www.fortworthtexas.gov/departments/parks/parks-and-trails/krauss-baker-paker',
          description:
            'An 18.6-acre linear park at 3517 Park Lake Drive between Woodway Drive and McCart Avenue. A reminder that stormwater in this part of 76133 follows long grades, not just backyard swales.'
        },
        {
          name: 'Wedgwood Library',
          url: 'https://www.fortworthtexas.gov/departments/library/branches/lib-loc-wdg',
          description:
            'Fort Worth’s first branch library, still operating at 3816 Kimberly Lane. Flower beds here are maintained by the Wedgwood Garden Club — civic landscape care, not a reason to ignore controller schedules at home.'
        },
        {
          name: 'Southwest Community Center',
          url: 'https://www.fortworthtexas.gov/departments/parks/services/community-centers/southwest-community-center',
          description:
            'Recreation hub at 6300 Welch Avenue inside the neighborhood. A regular stop for families, which is why uneven front turf on Welch and nearby W-streets gets noticed.'
        },
        {
          name: 'Bruce Shulkey Elementary',
          url: 'https://bruceshulkey.fwisd.org/',
          description:
            'FWISD campus at 5533 Whitman Avenue, opened in 1958 when Wedgwood was new. Park-and-school pairing is part of the original plan and part of why irrigation next door has to respect shared grades.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Wedgwood is tied to the{' '}
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
              href="https://www.fortworthtexas.gov/departments/parks/parks-and-trails"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Parks &amp; Recreation
            </a>
            . Families also use the{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/library/branches/lib-loc-wdg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Wedgwood Library
            </a>{' '}
            and the{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks/services/community-centers/southwest-community-center"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Southwest Community Center
            </a>{' '}
            on Welch Avenue, which is why overspray onto the street and uneven front turf get noticed quickly.
          </p>
          <p>
            Outdoor watering here follows Fort Worth Water&apos;s{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/twice-per-week"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              year-round twice-per-week irrigation rules
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
            , regional supply context from the{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>
            , and neighborhood history from the{' '}
            <a
              href="https://wedgwoodhistoricalassociation.org/wedgwoods-history"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Wedgwood Historical Association
            </a>
            . Civic parks at{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks/parks-and-trails/wedgwood-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Wedgwood Park
            </a>{' '}
            and{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/parks/parks-and-trails/krauss-baker-paker"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Krauss Baker Park
            </a>{' '}
            sit inside the neighborhood — nearby public turf, not a reason to ignore lot-level irrigation, drip at brick
            foundations, or drainage after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Wedgwood?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
