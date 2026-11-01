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

export default function MeadowRidgePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="North Richland Hills"
      citySlug="north-richland-hills"
      neighborhoodName="Meadow Ridge"
      canonicalUrl="https://sprinkleranddrains.com/north-richland-hills/meadow-ridge"
      pageTitle="Meadow Ridge Sprinkler Repair & Drainage in North Richland Hills, TX"
      metaDescription="Irrigation repair, drip, and drainage for Meadow Ridge Estates homes off Rufe Snow Drive in North Richland Hills, TX, set for the NRH even Wednesday/Saturday, odd Thursday/Sunday schedule. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Meadow Ridge Sprinkler Repair & Drainage"
      heroDescription="Meadow Ridge Estates is a small single-family addition in North Richland Hills, ZIP 76180, with homes on Meadowridge Court and along Rufe Snow Drive. Cul-de-sac lots on North Texas clay need zone-by-zone testing, drip at foundations, and a controller set to NRH watering days."
      introHeading="Cul-de-sac lots off Rufe Snow: clay, curb strips, and the NRH watering plan"
      intro={
        <>
          <p>
            Meadow Ridge Estates Addition is the name the{' '}
            <a href="https://www.tad.org/search-results?query=MEADOW+RIDGE+ESTATES+ADDITION&searchType=SubdivisionName" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">Tarrant Appraisal District</a>{' '}
            uses for this North Richland Hills subdivision. Its records list single-family homes on Meadowridge Court and
            on Rufe Snow Drive in ZIP 76180. A court layout means short frontages, pie-shaped back yards, and curb strips
            that meet the street at the bulb, so spray that is a few degrees off lands on concrete instead of turf.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Meadow Ridge as part of our North Richland Hills work.
            We are a licensed irrigator (LI22462). We program controllers for the city&apos;s year-round plan: no Monday
            watering, even addresses Wednesday and Saturday, odd addresses Thursday and Sunday, and no spray irrigation
            from 10 a.m. to 6 p.m. Details are on the{' '}
            <a href="https://www.nrhtx.com/543/Water-Conservation" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">NRH water conservation page</a>
            . We do not claim a count of jobs in Meadow Ridge. We walk each zone and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">/contact</a>.
          </p>
        </>
      }
      highlights={[
        'Meadow Ridge Estates Addition is a single-family subdivision in North Richland Hills, ZIP 76180, per Tarrant Appraisal District records, with homes on Meadowridge Court and Rufe Snow Drive.',
        'Court lots have short, curved frontages. Heads near the cul-de-sac bulb need tight arcs so water stays off the street and drive.',
        'NRH homes water on assigned days: even addresses Wednesday and Saturday, odd addresses Thursday and Sunday, never Monday.',
        'Lots that face Rufe Snow Drive see more traffic and heat off the pavement than the interior court, so those zones often need their own runtime.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry spots on court and Rufe Snow frontages.',
        'Arc and nozzle adjustment at curb strips and the cul-de-sac bulb so spray stays on turf.',
        'Drip conversion at foundation beds and tree rings on clay soil.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak schedules on NRH even/odd days.',
        'Drainage planning for side-yard lows, downspouts, and runoff between neighboring back yards.'
      ]}
      localTips={[
        'Use the last digit of your address: even Wednesday and Saturday, odd Thursday and Sunday. No Monday watering and no spray from 10 a.m. to 6 p.m.',
        'Handheld hoses, drip, and soaker hoses are treated separately from spray under the city rules.',
        'Split long runtimes into short cycles with a break between them so clay can absorb water.',
        'Check the heads closest to the street after mowing or curb work. They are the first to tilt or sink.',
        'Confirm the current NRH water conservation notice before changing days. Rules can tighten during drought.'
      ]}
      trustCards={[
        { title: 'City schedule on every controller', description: 'We set Meadow Ridge controllers to the NRH even/odd days and the Monday shutoff, with starts outside the 10 a.m. to 6 p.m. window.' },
        { title: 'Spray stays off the court', description: 'Short curved frontages need tight arcs and matched nozzles so water lands on turf, not concrete.' },
        { title: 'Drip where beds meet brick', description: 'Foundation beds and tree rings do better on drip than on spray that soaks walls and mulch.' },
        { title: 'Permits handled correctly', description: 'New or expanded systems in NRH generally need a city irrigation permit, a licensed irrigator, and rain and freeze sensors.' }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        { src: '/assets/images/optimized/Sprinkler-Repair.png', alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn', caption: 'Head and nozzle repair, nearby DFW project photo, not a named Meadow Ridge address' },
        { src: '/assets/images/optimized/drainage/3249.webp', alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project', caption: 'Drainage work, nearby DFW project photo, not a named Meadow Ridge address' },
        { src: '/assets/images/optimized/lighting/3419.webp', alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project', caption: 'Landscape lighting, nearby DFW project photo' }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Meadow Ridge',
        title: 'A curb strip that waters the street while the back corner browns',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical North Richland Hills and nearby DFW service. Not a named Meadow Ridge address.',
        body: 'A common call on a court lot looks like this: the front heads near the bulb throw past the curb, the drive stays wet after every cycle, and a back corner of a pie-shaped yard turns brown. The controller may still run on Monday or at midday, which NRH rules do not allow. We map zones, check pressure and head height, match nozzles and arcs to the curved frontage, move foundation beds to drip, and split runtimes into cycle-and-soak on the correct even or odd days. If the wet spot is a downspout or settled grade, we talk through drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        { title: 'Clay and cycle-and-soak', description: 'North Texas clay sheds a long first cycle. Shorter repeats move water into the root zone instead of the gutter.' },
        { title: 'Curved frontages', description: 'Cul-de-sac lots have short, angled curb lines. Arcs and nozzles have to match or spray hits the street and drive.' },
        { title: 'Rufe Snow versus the court', description: 'Lots on Rufe Snow Drive face more heat and traffic than interior court lots, so sun and shade zones need separate runtimes.' },
        { title: 'Aging systems and foundations', description: 'Older valves and laterals fail as clay moves. Drip at foundation beds keeps water off brick and helps keep soil moisture even.' }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Meadow Ridge site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit NRH watering days and permit rules',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        { question: 'Which watering days apply to my Meadow Ridge address?', answer: 'Under the North Richland Hills year-round plan, there is no watering on Monday, even addresses water Wednesday and Saturday, and odd addresses water Thursday and Sunday. Spray irrigation is not allowed from 10 a.m. to 6 p.m. Confirm the current notice on the city water conservation page before changing days.' },
        { question: 'Why does my front zone spray the street?', answer: 'Court frontages are short and curved. Heads with the wrong arc or nozzle, or heads that have tilted after mowing, throw past the curb. We reset arcs, match nozzles, and raise or replace sunken heads.' },
        { question: 'Do I need a permit for sprinkler work in North Richland Hills?', answer: 'Repairs that stay inside the existing layout usually do not. New or substantially expanded systems generally need a city irrigation permit and a licensed irrigator, and new spray systems must include rain and freeze sensors. We are licensed irrigator LI22462.' },
        { question: 'What do repairs vs drip vs drainage typically cost here?', answer: 'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, and grade change the price. An on-site quote is required; these are planning ranges, not a bid.' },
        { question: 'How fast can a leak or dry zone be diagnosed?', answer: 'Most head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults or main-line leaks may need a follow-up. Active leaks get priority. Call (817) 304-7896.' }
      ]}
      relatedAreas={[
        { name: 'Smithfield', description: 'Irrigation repair and drainage for historic Smithfield lots north of Loop 820.', link: '/north-richland-hills/smithfield' },
        { name: 'Home Town', description: 'Drip and drainage for Home Town streets and Canal District townhomes.', link: '/north-richland-hills/home-town' },
        { name: 'Bellaire Park North', description: 'Sprinkler repair and drip for nearby Hurst lots.', link: '/hurst/bellaire-park-north' }
      ]}
      popularServices={[
        { title: 'Sprinkler Repair', description: 'Head replacement, valve leaks, dry spots, and controller fixes on court lots.', link: '/services/sprinkler-repair' },
        { title: 'Drip Irrigation', description: 'Foundation and bed drip so spray stops soaking brick and walks.', link: '/services/drip-irrigation' },
        { title: 'Drainage Solutions', description: 'Planning for side-yard lows, downspouts, and runoff between yards.', link: '/services/drainage-solutions' }
      ]}
      attractions={[
        { name: 'NRH Water Conservation', url: 'https://www.nrhtx.com/543/Water-Conservation', description: 'Current watering days, hours, and conservation tips from the City of North Richland Hills.' },
        { name: 'NRH Irrigation Permits', url: 'https://www.nrhtx.com/762/Irrigation-Permits', description: 'City permit requirements for new or expanded irrigation systems.' },
        { name: 'NRH Parks & Trails', url: 'https://www.nrhtx.com/235/Parks-Trails/', description: 'City parks and trail information for North Richland Hills.' }
      ]}
      localLivingContent={
        <>
          <p>
            Meadow Ridge is in the <a href="https://www.nrhtx.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">City of North Richland Hills</a>{' '}
            and is served by <a href="https://www.birdvilleschools.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Birdville ISD</a>.
            Homes sit on Meadowridge Court and along Rufe Snow Drive, one of the main north-south roads through the city.
          </p>
          <p>
            Outdoor watering follows the city&apos;s{' '}
            <a href="https://www.nrhtx.com/543/Water-Conservation" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">water conservation rules</a>{' '}
            and{' '}
            <a href="https://www.nrhtx.com/762/Irrigation-Permits" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">irrigation permit requirements</a>.
            Weekly advice from{' '}
            <a href="https://waterisawesome.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Water is Awesome</a>{' '}
            helps adjust runtimes with the weather.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Meadow Ridge?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
