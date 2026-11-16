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

export default function CaldwellCreekPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Colleyville"
      citySlug="colleyville"
      neighborhoodName="Caldwell Creek"
      canonicalUrl="https://sprinkleranddrains.com/colleyville/caldwell-creek"
      pageTitle="Caldwell Creek Sprinkler Repair & Drainage in Colleyville, TX"
      metaDescription="Irrigation repair, drip, and drainage for Caldwell's Creek Addition homes in northwest Colleyville, TX 76034, on Bellefonte Lane, Shepherds Glen, Whippoorwill Court, Lismore Court, and Caldwell Creek Drive. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Caldwell Creek Sprinkler Repair & Drainage"
      heroDescription="Caldwell's Creek Addition is a single-family subdivision in northwest Colleyville, ZIP 76034, with court and interior streets around common ponds and trails. Cul-de-sac lots on North Texas clay need tight spray arcs, drip at foundations, and a controller matched to the city's current watering notice."
      introHeading="Northwest Colleyville courts, pond-edge lots, and clay that sheds a long first cycle"
      intro={
        <>
          <p>
            Caldwell&apos;s Creek Addition is the name the{' '}
            <a href="https://www.tad.org/search-results?query=CALDWELL%27S+CREEK+ADDITION&searchType=SubdivisionName" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">Tarrant Appraisal District</a>{' '}
            uses for this Colleyville subdivision (neighborhood code 3C700C). Its records list single-family homes in ZIP 76034 on Bellefonte Lane, Shepherds Glen, Whippoorwill Court, Lismore Court, and Caldwell Creek Drive. Court layouts mean short frontages, pie-shaped back yards, and curb strips that meet the street at the bulb, so spray that is a few degrees off lands on concrete instead of turf.
          </p>
          <p>
            The{' '}
            <a href="https://caldwellscreekhoa.com/overview" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">Caldwell&apos;s Creek Homeowners Association</a>{' '}
            describes the neighborhood as 98 single-family homes built from the mid-1990s into the early 2000s, with cul-de-sac streets, walking paths, and common ponds. Texas Best Sprinklers, Drainage and Lighting services Caldwell Creek as part of our Colleyville work. We are a licensed irrigator (LI22462). We do not claim a count of jobs here. We walk each zone and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">/contact</a>.
          </p>
        </>
      }
      highlights={[
        "Caldwell's Creek Addition is a single-family subdivision in Colleyville, ZIP 76034, per Tarrant Appraisal District records, with homes on Bellefonte Lane, Shepherds Glen, Whippoorwill Court, Lismore Court, and Caldwell Creek Drive.",
        'The neighborhood HOA describes about 98 homes on cul-de-sac streets with shared paths and ponds. Lots that back to common open space or water often need separate bed and turf zones.',
        'Court lots have short, curved frontages. Heads near a cul-de-sac bulb need tight arcs so water stays off the street and drive.',
        'Colleyville enforces state irrigation standards and city permits for new or expanded systems. Confirm the current watering days and hours before changing a controller.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry spots on court and interior frontages.',
        'Arc and nozzle adjustment at curb strips and cul-de-sac bulbs so spray stays on turf.',
        'Drip conversion at foundation beds, tree rings, and pond- or path-facing planting beds.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak schedules matched to the current city watering notice.',
        'Drainage planning for side-yard lows, downspouts, and runoff toward common ponds or neighboring yards.'
      ]}
      localTips={[
        'Confirm Colleyville\'s current watering days and hours before you change a controller. Drought stages used by Tarrant Regional Water District customer cities can tighten a two-day plan.',
        'When Stage 1 style limits are in effect, many customer cities prohibit spray irrigation from 10 a.m. to 6 p.m. Handheld hoses, drip, and soaker hoses are often treated separately from spray. Check the current notice.',
        'Split long runtimes into short cycles with a break between them so North Texas clay can absorb water instead of shedding it toward the gutter or a common pond.',
        'Check the heads closest to the street after mowing or curb work. They are the first to tilt or sink on a court lot.',
        'New or expanded irrigation work in Colleyville is reviewed under city irrigation procedures and Texas irrigator licensing rules. Repairs that stay inside the existing layout are a different question than a new system.'
      ]}
      trustCards={[
        { title: 'City notice on every controller', description: 'We set Caldwell Creek controllers to Colleyville\'s current watering days and hours, and we point you to the official notice rather than guessing a drought stage.' },
        { title: 'Spray stays off the court', description: 'Short curved frontages need tight arcs and matched nozzles so water lands on turf, not concrete.' },
        { title: 'Drip where beds meet brick', description: 'Foundation beds, tree rings, and pond-edge plantings do better on drip than on spray that soaks walls and mulch.' },
        { title: 'Permits handled correctly', description: 'Colleyville enforces Texas Occupation Code irrigation standards. New or expanded systems generally need a city irrigation permit and a licensed irrigator.' }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        { src: '/assets/images/optimized/Sprinkler-Repair.png', alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn', caption: 'Head and nozzle repair, nearby DFW project photo, not a named Caldwell Creek address' },
        { src: '/assets/images/optimized/drainage/3249.webp', alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project', caption: 'Drainage work, nearby DFW project photo, not a named Caldwell Creek address' },
        { src: '/assets/images/optimized/lighting/3419.webp', alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project', caption: 'Landscape lighting, nearby DFW project photo' }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Caldwell Creek',
        title: 'A curb strip that waters the street while a pond-side corner stays dry',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Colleyville and nearby DFW service. Not a named Caldwell Creek address.',
        body: 'A common call on a court lot looks like this: the front heads near the bulb throw past the curb, the drive stays wet after every cycle, and a back corner that faces a common path or pond turns brown. The controller may still run at midday, which regional conservation guidance does not allow when time-of-day limits are in effect. We map zones, check pressure and head height, match nozzles and arcs to the curved frontage, move foundation and pond-edge beds to drip, and split runtimes into cycle-and-soak on the days the city currently assigns. If the wet spot is a downspout or settled grade, we talk through drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        { title: 'Clay and cycle-and-soak', description: 'North Texas clay sheds a long first cycle. Shorter repeats move water into the root zone instead of the gutter or a common pond bank.' },
        { title: 'Curved frontages', description: 'Cul-de-sac lots have short, angled curb lines. Arcs and nozzles have to match or spray hits the street and drive.' },
        { title: 'Ponds and shared paths', description: 'Lots that face common open space or water often have different sun, wind, and runoff than interior lots, so those zones need their own runtime.' },
        { title: 'Aging systems and foundations', description: 'Systems from the mid-1990s and early 2000s see valves and laterals fail as clay moves. Drip at foundation beds keeps water off brick and helps keep soil moisture even.' }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Caldwell Creek site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit Colleyville watering notices and permit rules',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        { question: 'Which watering days apply to my Caldwell Creek address?', answer: 'Colleyville watering days and hours follow the city\'s current conservation notice and can change with regional drought stages. Tarrant Regional Water District Stage 1 guidance used by many customer cities limits automatic sprinklers to two days a week on an even/odd address schedule and prohibits spray between 10 a.m. and 6 p.m. Confirm the current Colleyville notice before you change a controller.' },
        { question: 'Why does my front zone spray the street?', answer: 'Court frontages are short and curved. Heads with the wrong arc or nozzle, or heads that have tilted after mowing, throw past the curb. We reset arcs, match nozzles, and raise or replace sunken heads.' },
        { question: 'Do I need a permit for sprinkler work in Colleyville?', answer: 'Repairs that stay inside the existing layout are often handled differently than a new or substantially expanded system. Colleyville enforces Texas Occupation Code irrigation standards and publishes irrigation system procedures through Building Inspections. New work generally needs a city irrigation permit and a licensed irrigator. We are licensed irrigator LI22462.' },
        { question: 'What do repairs vs drip vs drainage typically cost here?', answer: 'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, and grade change the price. An on-site quote is required; these are planning ranges, not a bid.' },
        { question: 'How fast can a leak or dry zone be diagnosed?', answer: 'Most head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults or main-line leaks may need a follow-up. Active leaks get priority. Call (817) 304-7896.' }
      ]}
      relatedAreas={[
        { name: 'Timarron', description: 'Irrigation repair and drainage for Timarron lots in nearby Southlake.', link: '/southlake/timarron' },
        { name: 'Dove Crossing', description: 'Sprinkler repair and drip for nearby Grapevine lots.', link: '/grapevine/dove-crossing' },
        { name: 'Old Town', description: 'Irrigation repair and drainage for Old Town Trophy Club streets.', link: '/trophy-club/old-town' }
      ]}
      popularServices={[
        { title: 'Sprinkler Repair', description: 'Head replacement, valve leaks, dry spots, and controller fixes on court lots.', link: '/services/sprinkler-repair' },
        { title: 'Drip Irrigation', description: 'Foundation and bed drip so spray stops soaking brick, walks, and pond-edge plantings.', link: '/services/drip-irrigation' },
        { title: 'Drainage Solutions', description: 'Planning for side-yard lows, downspouts, and runoff toward common areas.', link: '/services/drainage-solutions' }
      ]}
      attractions={[
        { name: 'Colleyville Irrigation Procedures', url: 'https://www.colleyville.com/government/departments-a-l/building-inspections/building-inspection-guidelines/irrigation-systems-procedures', description: 'City of Colleyville irrigation system procedures and state licensing standards for new work.' },
        { name: 'Colleyville Irrigation System Evaluation', url: 'https://www.colleyville.com/government/departments-m-z/public-works/water-and-wastewater/water-irrigation-system-evaluation', description: 'City information on the residential sprinkler evaluation program offered with Tarrant Regional Water District.' },
        { name: 'TRWD Drought Plan Actions', url: 'https://savetarrantwater.com/drought/', description: 'Regional drought-stage watering guidance used by many Tarrant County customer cities.' },
        { name: 'Colleyville Nature Center', url: 'https://www.colleyville.com/Home/Components/FacilityDirectory/FacilityDirectory/14/467', description: 'City nature center and trail information near northwest Colleyville.' },
        { name: 'McPherson Park', url: 'https://www.colleyville.com/Home/Components/FacilityDirectory/FacilityDirectory/22/466', description: 'City park information for McPherson Park in Colleyville.' }
      ]}
      localLivingContent={
        <>
          <p>
            Caldwell Creek is in the{' '}
            <a href="https://www.colleyville.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">City of Colleyville</a>{' '}
            and is served by{' '}
            <a href="https://www.gcisd.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Grapevine-Colleyville ISD</a>,
            which Tarrant Appraisal District lists on properties in this addition. The HOA notes nearby city amenities such as the Colleyville Nature Center and McPherson Park.
          </p>
          <p>
            Outdoor watering should follow the city&apos;s current notice and{' '}
            <a href="https://www.colleyville.com/government/departments-a-l/building-inspections/building-inspection-guidelines/irrigation-systems-procedures" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">irrigation system procedures</a>.
            Regional drought stages are summarized by{' '}
            <a href="https://savetarrantwater.com/drought/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Save Tarrant Water</a>.
            Weekly runtime advice from{' '}
            <a href="https://waterisawesome.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Water is Awesome</a>{' '}
            helps adjust schedules with the weather.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Caldwell Creek?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
