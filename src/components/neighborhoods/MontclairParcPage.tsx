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

export default function MontclairParcPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Colleyville"
      citySlug="colleyville"
      neighborhoodName="Montclair Parc"
      canonicalUrl="https://sprinkleranddrains.com/colleyville/montclair-parc"
      pageTitle="Montclair Parc Sprinkler Repair & Drainage in Colleyville, TX"
      metaDescription="Irrigation repair, drip, and drainage for Montclair Parc Addition homes in Colleyville, TX 76034, on Miramar Lane, Normandy Drive, Morlaix Court, Reims Court, Clermont Court, St. Emilion Court, and Burgandy Court. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Montclair Parc Sprinkler Repair & Drainage"
      heroDescription="Montclair Parc Addition is a single-family subdivision in Colleyville, ZIP 76034, with court streets, common open space, and a recorded private drainage easement. Mature trees and North Texas clay need tight spray arcs, drip at foundations, and a controller matched to the city's current watering notice."
      introHeading="Eastern Colleyville courts, common open space, and a plat that already names the drainage"
      intro={
        <>
          <p>
            Montclair Parc Addition is the name the{' '}
            <a href="https://www.tad.org/search-results?query=MONTCLAIR%20PARC%20ADDITION&searchType=SubdivisionName" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">Tarrant Appraisal District</a>{' '}
            uses for this Colleyville subdivision (neighborhood code 3C020N). Its records list single-family homes in ZIP 76034 on Miramar Lane, Normandy Drive, Morlaix Court, Reims Court, Clermont Court, St. Emilion Court, and Burgandy Court, which is the spelling on the appraisal roll. The same search shows common-area tracts labeled private access, drainage, and utility easement, and common-area open space. Court lots put a short, curved frontage against the bulb, so a head that has tilted after mowing throws water onto the street.
          </p>
          <p>
            A management certificate for{' '}
            <a href="https://hoa.texas.gov/sites/default/files/certificates/197948/15248-29141/mc/Management%20Certificate%20%282%29.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">Montclair Parc Homeowners Association, Inc.</a>{' '}
            was recorded with the Tarrant County Clerk on September 16, 2025. It identifies the plat as instrument D192244579 (Cabinet A, Slides 1193 and 1194), amended as D193154109 (Cabinet A, Slides 1395 and 1396), and the declaration as D192246276, re-recorded as D192246277, with amendments D208265918 and D211098428. Those file numbers fall in the county&apos;s 1992, 1993, 2008, and 2011 series. A St. Emilion Court account shows a deed dated December 31, 1992 from Montclair Parc Inc. Year-built dates on the roll are mixed: 1994 at 5507 Clermont Court, 1999 at 5709 Morlaix Court, 2005 at 5410 St. Emilion Court, and 2014 at 5513 Clermont Court. Land area on those accounts runs from 0.4597 acre to 0.6783 acre, and the district marks a pool on several of them. A{' '}
            <a href="https://communityimpact.com/grapevine-colleyville-southlake/news/montclair-parc-colleyville/" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">Community Impact profile from October 14, 2013</a>{' '}
            listed a 2004 build-out, an estimated 74 homes, a guard-gated entrance, and a central park around four tiered lakes. That profile is a 2013 description. It does not match every year-built date now on the roll, and it is not a current amenity inventory. Texas Best Sprinklers, Drainage and Lighting services Montclair Parc as part of our Colleyville work. We are a licensed irrigator (LI22462). We do not claim a count of jobs here. We walk each zone and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">/contact</a>.
          </p>
        </>
      }
      highlights={[
        'Montclair Parc Addition is a single-family subdivision in Colleyville, ZIP 76034, per Tarrant Appraisal District records (neighborhood code 3C020N), with homes on Miramar Lane, Normandy Drive, Morlaix Court, Reims Court, Clermont Court, St. Emilion Court, and Burgandy Court.',
        'Appraisal records still carry common-area open space and a tract described as private access, drainage, and utility easement. Water that leaves a yard can end up in that shared drainage.',
        'The HOA management certificate cites a plat in the county\'s 1992 file series and a 1993 amendment. Year-built dates on individual accounts include 1994, 1999, 2005, and 2014. A 2013 Community Impact profile estimated 74 homes, a 2004 build-out, a guard-gated entrance, and four tiered lakes.',
        'Colleyville enforces state irrigation standards and city permits for new or expanded systems. Confirm the current watering days and hours before changing a controller.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry spots under mature trees on lane and court lots.',
        'Arc and nozzle adjustment at curb strips and cul-de-sac bulbs so spray stays on turf.',
        'Drip conversion at foundation beds, tree rings, and plantings that face common open space.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak schedules matched to the current city watering notice.',
        'Drainage planning for side-yard lows, downspouts, and runoff toward the recorded drainage easement or common open space.'
      ]}
      localTips={[
        'Confirm Colleyville\'s current watering days and hours before you change a controller. Drought stages used by Tarrant Regional Water District customer cities can tighten a two-day plan.',
        'When Stage 1 style limits are in effect, many customer cities prohibit spray irrigation from 10 a.m. to 6 p.m. Handheld hoses, drip, and soaker hoses are often treated separately from spray. Check the current notice.',
        'Split long runtimes into short cycles with a break between them so North Texas clay can absorb water instead of shedding it toward the gutter or the common drainage easement.',
        'Check heads under tree canopy and at the street after mowing. Shade and a tilted head are the usual reasons one corner stays dry while the curb stays wet.',
        'New or expanded irrigation work in Colleyville is reviewed under city irrigation procedures and Texas irrigator licensing rules. Repairs that stay inside the existing layout are a different question than a new system.'
      ]}
      trustCards={[
        { title: 'City notice on every controller', description: 'We set Montclair Parc controllers to Colleyville\'s current watering days and hours, and we point you to the official notice rather than guessing a drought stage.' },
        { title: 'Spray stays off the court', description: 'Short curved frontages need tight arcs and matched nozzles so water lands on turf, not concrete.' },
        { title: 'Drip where beds meet brick', description: 'Foundation beds, tree rings, and plantings that face common open space do better on drip than on spray that soaks walls and mulch.' },
        { title: 'Permits handled correctly', description: 'Colleyville enforces Texas Occupation Code irrigation standards. New or expanded systems generally need a city irrigation permit and a licensed irrigator.' }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        { src: '/assets/images/optimized/Sprinkler-Repair.png', alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn', caption: 'Head and nozzle repair, nearby DFW project photo, not a named Montclair Parc address' },
        { src: '/assets/images/optimized/drainage/3249.webp', alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project', caption: 'Drainage work, nearby DFW project photo, not a named Montclair Parc address' },
        { src: '/assets/images/optimized/lighting/3419.webp', alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project', caption: 'Landscape lighting, nearby DFW project photo' }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Montclair Parc',
        title: 'A court bulb that waters the street while a tree-shaded corner stays dry',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Colleyville and nearby DFW service. Not a named Montclair Parc address.',
        body: 'A common call on a court lot looks like this: the front heads near the bulb throw past the curb, the drive stays wet after every cycle, and a back corner under mature trees, or a side yard that falls toward common open space, turns brown. The controller may still run at midday, which regional conservation guidance does not allow when time-of-day limits are in effect. We map zones, check pressure and head height, match nozzles and arcs to the curved frontage, move foundation and tree-ring beds to drip, and split runtimes into cycle-and-soak on the days the city currently assigns. If the wet spot is a downspout or grade falling toward the recorded drainage easement, we talk through drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        { title: 'Clay and cycle-and-soak', description: 'North Texas clay sheds a long first cycle. Shorter repeats move water into the root zone instead of the gutter or the common drainage easement.' },
        { title: 'Curved frontages', description: 'Cul-de-sac lots on Morlaix, Reims, Clermont, St. Emilion, and Burgandy have short, angled curb lines. Arcs and nozzles have to match or spray hits the street and drive.' },
        { title: 'Trees and shared open space', description: 'Canopy blocks spray and changes how fast a zone dries. Lots that face common open space often need a different runtime than an interior front yard.' },
        { title: 'Mixed construction years', description: 'Appraisal year-built dates include 1994, 1999, 2005, and 2014, so one house can still have original valves while the next has a later system. Drip at foundation beds keeps water off brick. Pool decks, which the appraisal roll marks on several accounts, need arcs that stay off the water and the coping.' }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Montclair Parc site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit Colleyville watering notices and permit rules',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        { question: 'Which watering days apply to my Montclair Parc address?', answer: 'Colleyville watering days and hours follow the city\'s current conservation notice and can change with regional drought stages. Tarrant Regional Water District Stage 1 guidance used by many customer cities limits automatic sprinklers to two days a week on an even/odd address schedule and prohibits spray between 10 a.m. and 6 p.m. Confirm the current Colleyville notice before you change a controller.' },
        { question: 'Why does my front zone spray the street?', answer: 'Court frontages are short and curved. Heads with the wrong arc or nozzle, or heads that have tilted after mowing, throw past the curb. We reset arcs, match nozzles, and raise or replace sunken heads.' },
        { question: 'Do I need a permit for sprinkler work in Colleyville?', answer: 'Repairs that stay inside the existing layout are often handled differently than a new or substantially expanded system. Colleyville enforces Texas Occupation Code irrigation standards and publishes irrigation system procedures through Building Inspections. New work generally needs a city irrigation permit and a licensed irrigator. We are licensed irrigator LI22462.' },
        { question: 'What do repairs vs drip vs drainage typically cost here?', answer: 'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, and grade change the price. An on-site quote is required; these are planning ranges, not a bid.' },
        { question: 'How fast can a leak or dry zone be diagnosed?', answer: 'Most head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults or main-line leaks may need a follow-up. Active leaks get priority. Call (817) 304-7896.' }
      ]}
      relatedAreas={[
        { name: 'Caldwell Creek', description: 'Irrigation repair and drainage for Caldwell Creek court lots in northwest Colleyville.', link: '/colleyville/caldwell-creek' },
        { name: 'Dove Crossing', description: 'Sprinkler repair and drip for nearby Grapevine lots.', link: '/grapevine/dove-crossing' },
        { name: 'Silver Lake', description: 'Irrigation repair and drainage for Silver Lake homes in Grapevine.', link: '/grapevine/silver-lake' }
      ]}
      popularServices={[
        { title: 'Sprinkler Repair', description: 'Head replacement, valve leaks, dry spots, and controller fixes on lane and court lots.', link: '/services/sprinkler-repair' },
        { title: 'Drip Irrigation', description: 'Foundation and bed drip so spray stops soaking brick, walks, and plantings by common open space.', link: '/services/drip-irrigation' },
        { title: 'Drainage Solutions', description: 'Planning for side-yard lows, downspouts, and runoff toward the recorded drainage easement.', link: '/services/drainage-solutions' }
      ]}
      attractions={[
        { name: 'Montclair Parc Addition on TAD', url: 'https://www.tad.org/search-results?query=MONTCLAIR%20PARC%20ADDITION&searchType=SubdivisionName', description: 'Tarrant Appraisal District records for Montclair Parc Addition in Colleyville, including streets and common-area tracts.' },
        { name: 'Montclair Parc HOA management certificate', url: 'https://hoa.texas.gov/sites/default/files/certificates/197948/15248-29141/mc/Management%20Certificate%20%282%29.pdf', description: 'September 16, 2025 management certificate for Montclair Parc Homeowners Association, Inc., including the 1992 plat and declaration file numbers.' },
        { name: 'Community Impact: Montclair Parc', url: 'https://communityimpact.com/grapevine-colleyville-southlake/news/montclair-parc-colleyville/', description: 'October 14, 2013 neighborhood profile listing build-out year, an estimated home count, and amenities as described then.' },
        { name: 'Colleyville Irrigation Procedures', url: 'https://www.colleyville.com/government/departments-a-l/building-inspections/building-inspection-guidelines/irrigation-systems-procedures', description: 'City of Colleyville irrigation system procedures and state licensing standards for new work.' },
        { name: 'TRWD Drought Plan Actions', url: 'https://savetarrantwater.com/drought/', description: 'Regional drought-stage watering guidance used by many Tarrant County customer cities.' }
      ]}
      localLivingContent={
        <>
          <p>
            Montclair Parc is in the{' '}
            <a href="https://www.colleyville.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">City of Colleyville</a>{' '}
            and is served by{' '}
            <a href="https://www.gcisd.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Grapevine-Colleyville ISD</a>,
            which Tarrant Appraisal District lists on properties in this addition. Appraisal coordinates for homes on Clermont Court and Morlaix Court sit east of downtown Colleyville, toward the Grapevine side of the city.
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
      ctaTitle="Ready to Improve Irrigation in Montclair Parc?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
