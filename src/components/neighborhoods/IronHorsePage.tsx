import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

const curatedReviewItems = [fortWorthReview, southlakeReview, kellerReview]
  .filter((review): review is NonNullable<typeof review> => Boolean(review))
  .map((review) => ({
    reviewer: review.name,
    location: `${review.location}, TX`,
    date: review.time,
    quote: review.content,
    stars: review.stars
  }));

export default function IronHorsePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="North Richland Hills"
      citySlug="north-richland-hills"
      neighborhoodName="Iron Horse"
      canonicalUrl="https://sprinkleranddrains.com/north-richland-hills/iron-horse"
      pageTitle="Iron Horse Sprinkler Repair & Drainage in North Richland Hills, TX"
      metaDescription="Sprinkler repair, drip, and drainage for Iron Horse Addition Phase II homes on Valhalla Drive, Pinehurst Drive, and Sawgrass Court in North Richland Hills, TX 76180, set to the NRH even Wednesday/Saturday and odd Thursday/Sunday schedule. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Iron Horse Sprinkler Repair & Drainage"
      heroDescription="Iron Horse Addition Phase II is a single-family subdivision in North Richland Hills, ZIP 76180, with homes on Valhalla Drive, Pinehurst Drive, Sawgrass Court, and other golf-named streets. Lots from the mid-2000s need zone-by-zone testing, drip at foundation beds, and a controller set to NRH watering days."
      introHeading="Phase II lots, front-yard utility easements, and the NRH watering plan"
      intro={
        <>
          <p>
            Iron Horse Addition Phase II is the name the{' '}
            <a href="https://www.tad.org/search-results?query=IRON+HORSE+ADDITION+PHASE+II&searchType=SubdivisionName" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">Tarrant Appraisal District</a>{' '}
            uses for this North Richland Hills subdivision. Its records list single-family homes in ZIP 76180 on streets
            including Valhalla Drive, Pinehurst Drive, Inverness Drive, Torrey Pines Drive, St. Andrews Drive, Southern
            Hills Drive, Hilton Head Drive, Pebble Beach Court, and Sawgrass Court. Sampled accounts show year-built dates
            of 2004, 2005, 2006, and 2007, and land area from about 0.22 acre to about 0.36 acre. Those homes are in{' '}
            <a href="https://www.birdvilleschools.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">Birdville ISD</a>.
          </p>
          <p>
            A City of North Richland Hills informal report dated October 13, 2003 (
            <a href="https://laserfiche.nrhtx.com/WebLink/DocView.aspx?dbid=0&id=115834&repo=NRH" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">IR 2003-107</a>
            ) says the City Council approved the Iron Horse Addition Phase II final plat with front-yard utility easements,
            after Oncor began serving new subdivisions from the front of the lot. Heads and valve boxes near a sidewalk,
            driveway, or pad-mounted transformer need tight arcs so water stays on the lawn. This plat is not Iron Horse
            Commons, whose plats were recorded June 11, 2018, and it is not the golf course. Iron Horse Golf Course publishes
            its address as{' '}
            <a href="https://ironhorsetx.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">6200 Skylark Circle</a>,
            also in ZIP 76180.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Iron Horse as part of our North Richland Hills work.
            We are a licensed irrigator (LI22462). We program controllers for the city&apos;s year-round plan: no Monday
            watering, even addresses Wednesday and Saturday, odd addresses Thursday and Sunday, and no spray irrigation
            from 10 a.m. to 6 p.m. Details are on the{' '}
            <a href="https://www.nrhtx.com/543/Water-Conservation" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">NRH water conservation page</a>
            . We do not claim a count of jobs in Iron Horse. We walk each zone and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">/contact</a>.
          </p>
        </>
      }
      highlights={[
        'Iron Horse Addition Phase II is a single-family subdivision in North Richland Hills, ZIP 76180, per Tarrant Appraisal District records, with homes on Valhalla Drive, Pinehurst Drive, Sawgrass Court, and other golf-named streets.',
        'Sampled appraisal accounts show year-built dates of 2004, 2005, 2006, and 2007, and land area from about 0.22 acre to about 0.36 acre.',
        'The city report of October 13, 2003 says the Phase II final plat was approved with front-yard utility easements, so curb-side heads have to miss sidewalks, drives, and utility pads.',
        'NRH homes water on assigned days: even addresses Wednesday and Saturday, odd addresses Thursday and Sunday, never Monday, and no spray from 10 a.m. to 6 p.m.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry spots on through streets and court frontages.',
        'Arc and nozzle adjustment so spray stays off sidewalks, driveways, and front-yard utility pads.',
        'Drip conversion at foundation beds and tree rings on clay soil.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak schedules on NRH even/odd days.',
        'Drainage planning for side-yard lows, downspouts, and runoff between neighboring back yards.'
      ]}
      localTips={[
        'Use the last digit of your address: even Wednesday and Saturday, odd Thursday and Sunday. No Monday watering and no spray from 10 a.m. to 6 p.m.',
        'Handheld hoses, drip, and soaker hoses are treated separately from spray under the city rules. Do not water during rain.',
        'Split long runtimes into short cycles with a break between them so clay can absorb water.',
        'Check heads closest to the sidewalk or a front-yard transformer after mowing. They are the first to tilt or sink.',
        'Confirm the current NRH water conservation notice before changing days. The plan was last updated in 2024, and rules can tighten if lake levels drop.'
      ]}
      trustCards={[
        { title: 'City schedule on every controller', description: 'We set Iron Horse controllers to the NRH even/odd days and the Monday shutoff, with starts outside the 10 a.m. to 6 p.m. window.' },
        { title: 'Spray stays off the walk', description: 'Front-yard easements and court frontages need tight arcs so water lands on turf, not concrete or a utility pad.' },
        { title: 'Drip where beds meet brick', description: 'Foundation beds and tree rings do better on drip than on spray that soaks walls and mulch.' },
        { title: 'Permits handled correctly', description: 'New or expanded systems in NRH need a permit before work, a licensed irrigator, and rain and freeze sensors.' }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        { src: '/assets/images/optimized/Sprinkler-Repair.png', alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn', caption: 'Head and nozzle repair, nearby DFW project photo, not a named Iron Horse address' },
        { src: '/assets/images/optimized/drainage/3249.webp', alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project', caption: 'Drainage work, nearby DFW project photo, not a named Iron Horse address' },
        { src: '/assets/images/optimized/lighting/3419.webp', alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project', caption: 'Landscape lighting, nearby DFW project photo' }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Iron Horse',
        title: 'A front zone that wets the sidewalk while a side yard stays dry',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical North Richland Hills and nearby DFW service. Not a named Iron Horse address.',
        body: 'A common call on a mid-2000s lot looks like this: heads near the sidewalk or a front-yard utility pad throw onto concrete, the drive stays wet after every cycle, and a side or back corner turns brown. The controller may still run on Monday or at midday, which NRH rules do not allow. We map zones, check pressure and head height, match nozzles and arcs to the frontage, move foundation beds to drip, and split runtimes into cycle-and-soak on the correct even or odd days. If the wet spot is a downspout or settled grade, we talk through drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        { title: 'Clay and cycle-and-soak', description: 'North Texas clay sheds a long first cycle. Shorter repeats move water into the root zone instead of the gutter.' },
        { title: 'Front-yard easements', description: 'The Phase II plat was approved with front-yard utility easements. Arcs have to miss sidewalks, drives, and any pad in that easement.' },
        { title: 'Court streets versus through streets', description: 'Sawgrass Court and Pebble Beach Court have shorter frontages than streets such as Pinehurst Drive or Southern Hills Drive, so those zones often need their own nozzles and runtimes.' },
        { title: 'Systems from the mid-2000s', description: 'Sampled homes were built in 2004 through 2007. Valves, wiring, and laterals from that era fail as clay moves. Drip at foundation beds keeps water off brick.' }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Iron Horse site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit NRH watering days and permit rules',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        { question: 'Which watering days apply to my Iron Horse address?', answer: 'Under the North Richland Hills year-round plan, there is no watering on Monday, even addresses water Wednesday and Saturday, and odd addresses water Thursday and Sunday. Spray irrigation is not allowed from 10 a.m. to 6 p.m., or during rain. Handheld hoses, drip, and soaker hoses are treated separately. Confirm the current notice on the city water conservation page before changing days.' },
        { question: 'Why does my front zone spray the sidewalk?', answer: 'Phase II was platted with front-yard utility easements, and court frontages are short. Heads with the wrong arc or nozzle, or heads that have tilted after mowing, throw onto the walk, the drive, or a utility pad. City rules require heads to stay on private property and not spray roads, sidewalks, driveways, or masonry. We reset arcs, match nozzles, and raise or replace sunken heads.' },
        { question: 'Do I need a permit for sprinkler work in North Richland Hills?', answer: 'Repairs that stay inside the existing layout usually do not. New or substantially expanded systems need a city irrigation permit before work starts. Plans are submitted by a licensed irrigator registered with the city, new systems need rain and freeze sensors, and spaces narrower than 48 inches may not use above-ground heads. We are licensed irrigator LI22462.' },
        { question: 'Is Iron Horse the same as Iron Horse Commons?', answer: 'No. This page is Iron Horse Addition Phase II, the single-family plat with streets such as Valhalla Drive, Pinehurst Drive, and Sawgrass Court. Iron Horse Commons is a later addition; its management certificate cites plats recorded June 11, 2018. Iron Horse Golf Course, at 6200 Skylark Circle, is a separate property.' },
        { question: 'What do repairs vs drip vs drainage typically cost here?', answer: 'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, and grade change the price. An on-site quote is required; these are planning ranges, not a bid.' }
      ]}
      relatedAreas={[
        { name: 'Smithfield', description: 'Irrigation repair and drainage for historic Smithfield lots north of Loop 820.', link: '/north-richland-hills/smithfield' },
        { name: 'Home Town', description: 'Drip and drainage for Home Town streets and Canal District townhomes.', link: '/north-richland-hills/home-town' },
        { name: 'Meadow Ridge', description: 'Sprinkler repair and drip for Meadow Ridge Estates court lots off Rufe Snow Drive.', link: '/north-richland-hills/meadow-ridge' }
      ]}
      popularServices={[
        { title: 'Sprinkler Repair', description: 'Head replacement, valve leaks, dry spots, and controller fixes on Phase II lots.', link: '/services/sprinkler-repair' },
        { title: 'Drip Irrigation', description: 'Foundation and bed drip so spray stops soaking brick and walks.', link: '/services/drip-irrigation' },
        { title: 'Drainage Solutions', description: 'Planning for side-yard lows, downspouts, and runoff between yards.', link: '/services/drainage-solutions' }
      ]}
      attractions={[
        { name: 'NRH Water Conservation', url: 'https://www.nrhtx.com/543/Water-Conservation', description: 'Current watering days, hours, and conservation tips from the City of North Richland Hills.' },
        { name: 'NRH Permit Information', url: 'https://www.nrhtx.com/1310/Permit-Information', description: 'Irrigation permit requirements, including rain and freeze sensors and head placement.' },
        { name: 'Iron Horse Golf Course', url: 'https://ironhorsetx.com/', description: 'Golf course at 6200 Skylark Circle, North Richland Hills, TX 76180. A separate property from the Phase II homes.' }
      ]}
      localLivingContent={
        <>
          <p>
            Iron Horse Addition Phase II is in the <a href="https://www.nrhtx.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">City of North Richland Hills</a>{' '}
            and is served by <a href="https://www.birdvilleschools.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Birdville ISD</a>.
            Homes sit on streets such as Valhalla Drive, Pinehurst Drive, Southern Hills Drive, and Sawgrass Court in ZIP 76180.
          </p>
          <p>
            Outdoor watering follows the city&apos;s{' '}
            <a href="https://www.nrhtx.com/543/Water-Conservation" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">water conservation rules</a>{' '}
            and the{' '}
            <a href="https://www.nrhtx.com/673/Conservation-Plan" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">water conservation plan</a>,
            last updated in 2024. New irrigation work follows the city&apos;s{' '}
            <a href="https://www.nrhtx.com/1310/Permit-Information" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">permit requirements</a>.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Iron Horse?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
