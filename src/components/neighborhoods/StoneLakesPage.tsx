import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

const curatedReviewItems = [fortWorthReview, southlakeReview, colleyvilleReview]
  .filter((review): review is NonNullable<typeof review> => Boolean(review))
  .map((review) => ({
    reviewer: review.name,
    location: `${review.location}, TX`,
    date: review.time,
    quote: review.content,
    stars: review.stars
  }));

export default function StoneLakesPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Southlake"
      citySlug="southlake"
      neighborhoodName="Stone Lakes"
      canonicalUrl="https://sprinkleranddrains.com/southlake/stone-lakes"
      pageTitle="Stone Lakes Sprinkler Repair & Drainage in Southlake, TX"
      metaDescription="Sprinkler repair, drip conversion, and drainage for Stone Lakes homes in Southlake, TX 76092, set for the City of Southlake watering schedule. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Stone Lakes Sprinkler Repair & Drainage"
      heroDescription="Stone Lakes is a Southlake subdivision south of FM 1709, platted in phases from 1991 through 1995 and reported as built out in 1997. Systems from that era need zone-by-zone testing, drip at foundation beds, and a controller set to the City of Southlake twice-weekly schedule."
      introHeading="1990s plats, a community lake, and clay that needs shorter watering cycles"
      intro={
        <>
          <p>
            Stone Lakes Subdivision is an addition to the City of Southlake in Tarrant County. The property owners&apos;
            association management certificate recorded August 31, 2021, as Tarrant County document D221253516, lists the
            plats: Phase One on December 12, 1991, Phase Two on June 17, 1993, Phase Three on April 20, 1994, and Phase
            Four on October 3, 1995, plus a Phase Four plat revision on September 21, 2012. The declaration of covenants
            for the first phase was recorded January 3, 1992. The certificate is posted by the{' '}
            <a
              href="https://www.hoa.texas.gov/sites/default/files/certificates/123431/243-525/mc/Official%20Management%20Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Texas Real Estate Commission
            </a>
            . A{' '}
            <a
              href="https://communityimpact.com/grapevine-colleyville-southlake/news/stone-lakes-southlake/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Community Impact feature from August 19, 2014
            </a>{' '}
            described the neighborhood as south of FM 1709, built out in 1997, with more than 300 homes, and within a mile
            of Bicentennial Park. That feature also listed a lake, pool, tennis courts, playground, clubhouse, and bike
            path. Those amenity details are what the paper reported then. Confirm current common-area rules with the
            association before you plan work next to a path or the lake.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Stone Lakes as part of our Southlake work. We are a
            licensed irrigator (LI22462). Southlake publishes a year-round, twice-weekly schedule on its{' '}
            <a
              href="https://www.cityofsouthlake.com/3870/View-Watering-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              watering restrictions page
            </a>
            : even-numbered addresses water Wednesday and Saturday, odd-numbered addresses water Thursday and Sunday, and
            automatic irrigation is allowed only from 6 p.m. to 10 a.m. on those days, while a hand-held hose is permitted
            outside those hours. The city says that schedule follows regional conservation from the Tarrant Regional
            Water District and its wholesale supplier, the City of Fort Worth. Lots are subject to the recorded covenants
            of the Stone Lakes Subdivision Homeowner&apos;s Association, Inc. The 2021 certificate named FirstService
            Residential as managing agent and listed{' '}
            <a
              href="https://StoneLakes.connectresident.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              StoneLakes.connectresident.com
            </a>{' '}
            as the community site. Confirm the current manager before you rely on that contact. We do not claim a count
            of jobs on a specific Stone Lakes street. We walk zones, keep spray off sidewalks and shared paths, and quote
            through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Stone Lakes is in the City of Southlake, Tarrant County, south of FM 1709 (Southlake Boulevard), so the Southlake even-and-odd watering days apply to the address.',
        'Plats run from Phase One in December 1991 through Phase Four in October 1995, with a Phase Four plat revision recorded in 2012. Controllers, valves, and heads are not all the same age.',
        'Community Impact reported build-out in 1997 and more than 300 homes, and it described a community lake plus a pool, courts, playground, clubhouse, and bike path. Treat that amenity list as a 2014 report, not a current inventory.',
        'Bicentennial Park, at 450 W. Southlake Blvd., is the nearby city park the 2014 feature placed within a mile. The park, the community lake, and association paths are not part of a home lot.',
        'Foundation beds and tree rings on these 1990s lots do better on drip than on high-pressure spray, especially where mature trees now shade part of the lawn.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands on Stone Lakes lots from the 1990s build-out.',
        'Drip conversion at foundation beds, tree rings, and front-yard plantings so brick, mulch, and walls stop getting soaked.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak schedules that fit the City of Southlake watering days.',
        'Drainage planning for patio lows, side-yard swales, and runoff that follows grade toward streets, shared paths, or the community lake after storms.',
        'Outdoor lighting repair and additions for entries, trees, and walkways, described in advance so you can check the association covenants.'
      ]}
      localTips={[
        'Use the last digit of the street address: even addresses water Wednesday and Saturday, odd addresses water Thursday and Sunday, and automatic systems may run only from 6 p.m. to 10 a.m.',
        'Use shorter cycle-and-soak windows so North Texas clay can absorb water instead of sending it toward a sidewalk, path, street, or the lake.',
        'On older systems, walk each zone once a season and look for tilted, buried, or cracked heads before a wet spot or a dry strip shows up on the water bill.',
        'After a heavy rain, check side yards and patio lows before you add runtime. Spray on already-wet clay just moves water downhill.',
        'If a lot sits next to the community lake or a shared path, keep heads aimed at the lawn. Those areas are association amenities, not extra irrigation coverage.',
        'Check the Tarrant Regional Water District weekly watering advice and shorten summer runtimes when nights cool in fall. Confirm the latest city notice before you change days yourself.'
      ]}
      trustCards={[
        {
          title: 'One city schedule for the address',
          description:
            'Stone Lakes is in Southlake. Automatic watering is allowed from 6 p.m. to 10 a.m. on the assigned days. We program the controller to the even or odd schedule for the house number and test that it holds.'
        },
        {
          title: 'Covenants checked before visible changes',
          description:
            'Lots are subject to the recorded Stone Lakes covenants. The 2021 management certificate named a managing agent and a resident site. We keep repairs inside the existing layout where we can and describe any visible change so you can ask the association first.'
        },
        {
          title: '1990s systems, tested zone by zone',
          description:
            'Phases were platted from 1991 through 1995 and the neighborhood was reported as built out in 1997. One street can mix original equipment and later repairs. We test each zone rather than copy one runtime across the block.'
        },
        {
          title: 'Clay, shade, and the lake edge',
          description:
            'Expansive clay sheds a long first cycle. Shaded corners and sun-facing strips need different nozzles. Near the community lake we look at grade and downspouts before anyone adds more spray.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW project photo, not a named Stone Lakes street'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Stone Lakes street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Stone Lakes',
        title: 'A 1990s controller schedule that no longer matches the yard',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Southlake and nearby DFW service — not a named Stone Lakes street, and not work on the community lake, pool, or association common areas.',
        body: 'A common call on a lot from this era looks like this: the controller was programmed years ago, one long cycle runs on every zone, and the days may not match the current Southlake schedule. Clay sheds the first pass, leftover spray reaches a sidewalk or a shared path, a shaded corner stays soft while a sun-facing strip browns, and a low side yard holds water after storms. We map the zones, check the controller against the current city schedule, replace worn heads and match nozzles, and move foundation beds onto drip. Runtimes then split into cycle-and-soak windows on the assigned days. If a soggy patio is partly a downspout or grade problem, we talk through drainage instead of adding more spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Clay and cycle-and-soak',
          description:
            'Expansive North Texas clay often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward sidewalks, paths, streets, or the lake.'
        },
        {
          title: 'City schedule and controller age',
          description:
            'Southlake allows automatic watering only from 6 p.m. to 10 a.m. on assigned days. Controllers from the 1990s build-out drift, lose settings in outages, or still carry a program from years ago, so we reprogram and test.'
        },
        {
          title: 'Shade, trees, and mixed exposure',
          description:
            'Trees planted when these phases were built are now mature. Shaded and sun-facing zones need different nozzles and runtimes or one side stays wet while the other dries out.'
        },
        {
          title: 'Lake edge and association approval',
          description:
            'The community lake and shared paths are association amenities. Visible head, lighting, or grading changes may fall under the recorded covenants. Foundations belong on drip, not another hour of spray. We do not work the lake, pool, or common areas as if they were a home lot.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Stone Lakes site assessment and issue mapping, including shade zones, foundation beds, and aging zones',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit the Southlake watering days and the recorded covenants',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need association approval for sprinkler or drainage work in Stone Lakes?',
          answer:
            'Plan on checking when the work is visible or changes the lot. Lots are subject to the Declaration of Covenants, Conditions and Restrictions, and the Stone Lakes Subdivision Homeowner’s Association, Inc. is the property owners’ association named on the management certificate recorded August 31, 2021 (Tarrant County document D221253516). That certificate named FirstService Residential as managing agent. Confirm the current manager and guidelines before you start. Ordinary head and pipe repairs that stay inside the existing layout are usually simple, but we describe the visible scope before work starts. A licensed irrigator (we are LI22462) should design or alter the system. We do not file association applications for you unless that is arranged separately.'
        },
        {
          question: 'Which watering days apply to my Stone Lakes address?',
          answer:
            'Stone Lakes addresses are in the City of Southlake: even-numbered addresses water Wednesday and Saturday, odd-numbered addresses water Thursday and Sunday, and automatic systems may run only from 6 p.m. to 10 a.m. A hand-held hose is allowed outside those hours. Always confirm the latest notice on the city’s watering restrictions page before changing days yourself.'
        },
        {
          question: 'How should we water Stone Lakes clay, shade, and lots near the lake?',
          answer:
            'Use cycle-and-soak on clay, separate shade and sun zones, and put foundation beds on drip. Lots that slope toward a street, a shared path, or the community lake should not get a longer single cycle. We test the actual output of each zone before setting runtimes, and we look at downspouts and grade when water is already standing after rain. Seasonal runtimes should drop when nights cool, even though the assigned days stay the same year-round.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, association review, and grade change the price. An on-site quote is required. These figures are planning ranges, not a bid for a Stone Lakes address.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Stone Lakes?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority. Call (817) 304-7896.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Timarron',
          description: 'Irrigation, drip, and drainage for 1990s and early-2000s master-planned homes on the Southlake schedule.',
          link: '/southlake/timarron'
        },
        {
          name: 'Timber Lake',
          description: 'Sprinkler repair and pond-adjacent watering strategies for 1990s Southlake lots.',
          link: '/southlake/timber-lake'
        },
        {
          name: 'Carillon',
          description: 'Irrigation, drip, and drainage for gated Southlake lots around community lakes and mature trees.',
          link: '/southlake/carillon'
        },
        {
          name: 'Southlake Meadows',
          description: 'Sprinkler repair, drip conversion, and drainage planning for newer Southlake lots.',
          link: '/southlake/southlake-meadows'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and controller fixes on older Stone Lakes systems.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and tree-ring drip so beds and slabs stop getting soaked by high-pressure spray.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff toward sidewalks, paths, and the lake edge.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Stone Lakes association certificate',
          url: 'https://www.hoa.texas.gov/sites/default/files/certificates/123431/243-525/mc/Official%20Management%20Certificate.pdf',
          description:
            'The August 31, 2021 management certificate names the subdivision, the recorded plats, the covenants, and the managing agent listed at that time.'
        },
        {
          name: 'Southlake watering restrictions',
          url: 'https://www.cityofsouthlake.com/3870/View-Watering-Restrictions',
          description:
            'The city’s year-round twice-weekly schedule: even addresses Wednesday and Saturday, odd addresses Thursday and Sunday, automatic watering from 6 p.m. to 10 a.m.'
        },
        {
          name: 'Bicentennial Park',
          url: 'https://www.experiencesouthlaketexas.com/693/Bicentennial-Park',
          description:
            'Southlake’s premier park at 450 W. Southlake Blvd., north of FM 1709. The 2014 Community Impact feature placed Stone Lakes within a mile of it.'
        },
        {
          name: 'Southlake Town Square',
          url: 'https://www.southlaketownsquare.com/',
          description:
            'The city’s main square for errands, dining, and events, a short drive from neighborhoods along Southlake Boulevard.'
        },
        {
          name: 'Southlake Parks & Recreation',
          url: 'https://www.experiencesouthlaketexas.com/148/Parks-Recreation',
          description: 'City parks, trails, and recreation listings that residents use throughout the week.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Stone Lakes is in the{' '}
            <a
              href="https://www.cityofsouthlake.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Southlake
            </a>
            , south of FM 1709. Community Impact’s 2014 feature listed Florence Elementary, Carroll Elementary, and Carroll
            Senior High among campuses near the subdivision. Attendance zones change, so confirm the current assignment
            with{' '}
            <a
              href="https://www.southlakecarroll.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Carroll ISD
            </a>{' '}
            before you rely on a school name.{' '}
            <a
              href="https://www.experiencesouthlaketexas.com/693/Bicentennial-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Bicentennial Park
            </a>{' '}
            sits north of Southlake Boulevard at 450 W. Southlake Blvd. The community lake and paths described in local
            coverage are association amenities, not a substitute for watering and drainage on the lot.
          </p>
          <p>
            Outdoor watering follows the City of Southlake{' '}
            <a
              href="https://www.cityofsouthlake.com/2776/Water-Smart-Outside"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Smart, Outside
            </a>{' '}
            schedule, which the city says is in line with regional conservation efforts from the Tarrant Regional Water
            District and its wholesale supplier, the City of Fort Worth. Check weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            and stormwater notes on{' '}
            <a
              href="https://www.cityofsouthlake.com/4369/Your-Property-and-Drainage"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Your Property & Drainage
            </a>
            . Shared amenities are not a reason to ignore lot-level irrigation, drip at foundations, or drainage after
            storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Stone Lakes?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
