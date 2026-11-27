import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

const curatedReviewItems = [colleyvilleReview, southlakeReview, kellerReview]
  .filter((review): review is NonNullable<typeof review> => Boolean(review))
  .map((review) => ({
    reviewer: review.name,
    location: `${review.location}, TX`,
    date: review.time,
    quote: review.content,
    stars: review.stars
  }));

export default function RossDownsPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Colleyville"
      citySlug="colleyville"
      neighborhoodName="Ross Downs"
      canonicalUrl="https://sprinkleranddrains.com/colleyville/ross-downs"
      pageTitle="Ross Downs Sprinkler Repair & Drainage in Colleyville, TX"
      metaDescription="Sprinkler repair, drip, and drainage for Ross Downs Estates homes in Colleyville, TX 76034, on Twelve Oaks Lane, Melanie Drive, Reynolds Drive, Atlanta Drive, and McMakin Court. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Ross Downs Sprinkler Repair & Drainage"
      heroDescription="Ross Downs Estates is a single-family neighborhood in northeast Colleyville, ZIP 76034, with early-1990s homes beside Kimzey Park. Gasil sandy loam and Crosstell clay sit on the same streets, so one runtime does not fit every zone. Spray along Melanie Drive has to stay off the park trail and the pond."
      introHeading="Early-1990s lots beside a 20-acre park, on two different East Cross Timbers soils"
      intro={
        <>
          <p>
            Ross Downs Estates is the subdivision name on the{' '}
            <a
              href="https://www.tad.org/search-results?query=ROSS%20DOWNS%20ESTATES&searchType=SubdivisionName"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Tarrant Appraisal District
            </a>{' '}
            roll for this part of Colleyville (neighborhood code 3C020S). Sampled single-family accounts are in the City of
            Colleyville and Grapevine-Colleyville ISD, ZIP 76034, on Twelve Oaks Lane, Atlanta Drive, McMakin Court, Melanie
            Drive, and Reynolds Drive. Those accounts are not one house style. Year-built dates include 1991 at 2500 Twelve
            Oaks Lane, 1992 at 6711 Atlanta Drive and 6618 McMakin Court, 1994 at 2006 Reynolds Drive, 1995 at 2005 Reynolds
            Drive, and 1996 on Melanie Drive. Living area on that sample runs from about 2,591 square feet to about 4,552
            square feet. Land area runs from about 0.24 acre to about 0.53 acre. The district marks a pool on some of those
            accounts and not on others. Legal descriptions in the sample run from Block 1 to Block 15.             On a Melanie Drive account, TAD lists E R O Development Co Inc as a previous owner and a March 30, 1996 deed
            to Carriage Custom Homes Inc. A Reynolds Drive account lists Mike Sandlin Homes Inc as a previous owner. The
            layouts in the ground are not one production plan.
          </p>
          <p>
            The same appraisal search also returns{' '}
            <a
              href="https://www.tad.org/search-results?query=LONGWOOD%20ESTATES%20%40%20ROSS%20DOWNS&searchType=SubdivisionName"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Longwood Estates at Ross Downs
            </a>
            , neighborhood code 3C020M, with homes on Coleman Court, Cole Court, and Danielle Drive. That is a different
            plat. This page is Ross Downs Estates only.
          </p>
          <p>
            <a
              href="https://www.colleyville.com/Facilities/Facility/Details/Kimzey-Park-10"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Kimzey Park
            </a>{' '}
            is the city&apos;s 20-acre neighborhood park at 2201 Broadoak Way. The city describes a one-acre fishing pond,
            playground, practice backstop, open play area, multi-use trail, basketball court, sand volleyball court, and
            pavilion, and lists hours of 6 a.m. to 10 p.m. The appraisal coordinate for 2200 Melanie Drive sits at the west
            edge of that park as mapped by OpenStreetMap. Heads on that frontage have to miss the trail and the pond bank.
            The neighborhood site at rossdowns.com describes a homeowners association that meets the last Tuesday of the
            month at 6:30 p.m. and names Acclaim Management. Texas Best Sprinklers, Drainage and Lighting services Ross Downs
            as part of our Colleyville work. We are a licensed irrigator (LI22462). We do not claim a count of jobs here. We
            walk each zone and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Ross Downs Estates is a single-family subdivision in Colleyville, ZIP 76034, per Tarrant Appraisal District records (neighborhood code 3C020S). Sampled homes are on Twelve Oaks Lane, Atlanta Drive, McMakin Court, Melanie Drive, and Reynolds Drive.',
        'Sampled year-built dates run from 1991 to 1996. Lot area on those accounts is about 0.24 to 0.53 acre. A pool is marked on some accounts and not on others. Longwood Estates at Ross Downs (code 3C020M) is a separate plat.',
        'Kimzey Park, at 2201 Broadoak Way, is a 20-acre city park with a one-acre fishing pond and a multi-use trail. City directions use Twelve Oaks Lane and Melanie Drive. Park-edge spray has to stay on the lawn.',
        'Soil map units at sampled points are Gasil fine sandy loam on 3 to 8 percent slopes and Crosstell fine sandy loam on 1 to 8 percent slopes. Those two East Cross Timbers soils do not take water the same way. Confirm the current Colleyville watering notice before changing a controller.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry bands on 1990s laterals.',
        'Separate runtimes for Gasil sandy loam and Crosstell clay, including arc and nozzle changes so spray stays off walks, drives, and the Kimzey Park edge.',
        'Drip conversion at foundation beds, tree rings, and planting beds that face the park trail or a pool deck.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak windows matched to the current city watering notice.',
        'Drainage planning for side-yard lows, downspouts, and water that runs off Crosstell clay toward the pond or a neighboring lot.'
      ]}
      localTips={[
        'Do not copy a neighbor\'s runtime across the street. A Twelve Oaks point maps as Gasil fine sandy loam. A McMakin Court point and the Kimzey Park point map as Crosstell fine sandy loam. They need different cycles.',
        'On Crosstell, the sandy surface is thin and the clay underneath is very slowly permeable. A long single cycle sheds water. Split the runtime and let it soak.',
        'Keep spray off between the hours the current notice bans. Colleyville\'s utility billing page tells residents to water about one or two times a week and to avoid 10 a.m. to 6 p.m. Stage 1 even/odd days apply only while that stage is actually posted.',
        'After mowing, check heads closest to the sidewalk and the park trail on Melanie Drive. Those are the first to tilt.',
        'New irrigation in Colleyville needs a licensed irrigator, a city permit, and sealed plans. A controller replacement on an automatic system needs a rain shutoff. Strips under 48 inches in width or length that touch hardscape on two sides are not a place for spray.'
      ]}
      trustCards={[
        {
          title: 'Two soils, two schedules',
          description:
            'Gasil takes water through a sandy surface. Crosstell sheds it off clay. We zone and program them separately instead of using one neighborhood runtime.'
        },
        {
          title: 'Spray stays off the park',
          description:
            'Melanie Drive fronts the west edge of Kimzey Park. Heads on that side need short throw so water stays on the lawn.'
        },
        {
          title: 'Drip where beds meet brick',
          description:
            'Foundation beds and tree rings do better on drip than on spray that soaks 1990s brick, mulch, and pool decks.'
        },
        {
          title: 'Permits and rain sensors',
          description:
            'New systems follow Colleyville\'s 2025 irrigation guidelines: a licensed irrigator, a permit, sealed plans, and a rain shutoff. Controller replacements need that sensor too.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn',
          caption: 'Head and nozzle repair, nearby DFW project photo, not a named Ross Downs address'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work, nearby DFW project photo, not a named Ross Downs address'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting, nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Ross Downs',
        title: 'A park-edge zone runs into the trail while a shaded corner stays dry',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Colleyville and nearby DFW service. Not a named Ross Downs address, and not work inside Kimzey Park.',
        body: 'A common call on an early-1990s Ross Downs lot looks like this: heads along a Melanie Drive or Twelve Oaks frontage throw onto the walk or toward the park trail, the drive stays wet after every cycle, and a back corner under trees turns brown. The wet side is often the Crosstell clay, which takes a thin sandy cap and then sheds water. The dry side is often Gasil sandy loam in the shade, where the surface dries while a firmer subsoil sits underneath. A lot that lists a pool may also be soaking the deck. The controller may still run one long cycle in the middle of the day. We map zones, check pressure and head height, match nozzles to the frontage, move foundation beds to drip, and split runtimes into cycle-and-soak on the days the current notice allows. If the wet spot is a downspout or grade falling toward the pond, we talk through drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Gasil sandy loam',
          description:
            'The USDA official series describes Gasil as very deep, well drained, and moderately permeable, with a fine sandy loam surface over sandy clay loam. Depth to that clay increase is about 8 to 20 inches. Runoff is low on 1 to 5 percent slopes and medium on 5 to 12 percent. Native vegetation is post oak and blackjack oak. A Twelve Oaks Lane appraisal coordinate falls on Gasil fine sandy loam, 3 to 8 percent slopes. Those zones can take water, then the subsoil slows it. Shade under mature oaks needs less time than full sun.'
        },
        {
          title: 'Crosstell clay',
          description:
            'Crosstell is moderately well drained and very slowly permeable. The series has a thin fine sandy loam surface, often under 6 inches, over smectitic clay that cracks when dry. Runoff is very high on 1 to 12 percent slopes. A McMakin Court coordinate maps as Crosstell, 1 to 3 percent slopes. The Kimzey Park point maps as Crosstell, 3 to 8 percent slopes, hydrologic group D. Short cycles matter here. A long cycle leaves the sidewalk and the pond bank wet and the root zone dry.'
        },
        {
          title: 'Park edge and short slopes',
          description:
            'USGS 3DEP elevations at the Twelve Oaks, Atlanta, and McMakin appraisal coordinates sit around 606 to 610 feet. This is not a steep hillside. The soil map still shows 1 to 8 percent slopes, and the park pond is the low spot those slopes can feed. Melanie Drive fronts the park. Spray and gutter water both have to be aimed on purpose.'
        },
        {
          title: 'Mixed 1990s systems and pools',
          description:
            'Sampled homes were built from 1991 through 1996 by more than one builder. Valves, wiring, and laterals from that era fail as soil moisture changes, and later repairs are often mixed into the original layout. Where the appraisal account lists a pool, keep spray off the deck and the equipment pad. That is a lot-by-lot check.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Ross Downs site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit Colleyville watering notices and permit rules',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Which watering days apply to my Ross Downs address?',
          answer:
            'Colleyville\'s utility billing page advises watering about one or two times a week and avoiding 10 a.m. to 6 p.m. That is conservation guidance, and the posted drought stage can be stricter. Tarrant Regional Water District Stage 1, when a customer city has it in effect, limits automatic sprinklers and hose-end sprinklers to two days a week: even addresses Wednesday and Saturday, odd addresses Thursday and Sunday, no outdoor watering on Monday, and no sprinklers from 10 a.m. to 6 p.m. Handheld hoses, soaker hoses, and drip are exceptions on that regional plan. Confirm the current Colleyville notice before you change a controller. We do not guess the stage from a neighboring city.'
        },
        {
          question: 'Is Ross Downs the same as Longwood Estates at Ross Downs?',
          answer:
            'No. This page is Ross Downs Estates, neighborhood code 3C020S, with sampled homes on Twelve Oaks Lane, Atlanta Drive, McMakin Court, Melanie Drive, and Reynolds Drive, beside Kimzey Park. Longwood Estates at Ross Downs is neighborhood code 3C020M, on Coleman Court, Cole Court, and Danielle Drive. OpenStreetMap\'s residential area named Ross Downs Estates also includes Wilkes Drive and Wilkes Court inside the same outline. Confirm a specific lot on the appraisal roll before you assume it is this plat.'
        },
        {
          question: 'Why does one side of the yard stay wet and the other stay dry?',
          answer:
            'The soil survey does not show one uniform clay across this neighborhood. Gasil fine sandy loam takes water through a sandy surface, then slows at a sandy clay loam layer. Crosstell fine sandy loam has only a thin sandy cap over tight clay, so a long cycle runs off. Shade, a tilted head, and grade toward Kimzey Park\'s pond change the result again. We test the zones that are actually in the ground. Cycle-and-soak, matched nozzles, and drip at beds usually fix the pattern. If the water is coming from a downspout or a low side yard, drainage is the next conversation.'
        },
        {
          question: 'Do I need a permit for sprinkler work in Colleyville?',
          answer:
            'Colleyville\'s 2025 irrigation guidelines say the installer must hold a license under Texas Occupations Code section 1903.251, register with the city when required, and obtain a permit before installing an irrigation system. Plans are sealed by a licensed irrigator. New automatic systems, and alterations that replace the controller, include a rain sensing shutoff. New spray is not used in landscape areas less than 48 inches in width or length that have hardscape on two or more sides, and heads stay at least 4 inches off hardscape and are aimed off pavement. Repairs that stay inside the existing layout are a different scope from a new system. We are licensed irrigator LI22462. We do not file a homeowners association application unless that is arranged separately. Confirm any deed restrictions on your own lot with the association.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, pool decks, and grade change the price. An on-site quote is required. These figures are planning ranges, not a bid, and they are not a count of work we have done in Ross Downs.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Montclair Parc',
          description: 'Court lots and common open space on the east side of Colleyville.',
          link: '/colleyville/montclair-parc'
        },
        {
          name: 'Caldwell Creek',
          description: 'Irrigation repair and drainage for Caldwell Creek court lots in northwest Colleyville.',
          link: '/colleyville/caldwell-creek'
        },
        {
          name: 'Silver Lake',
          description: 'Irrigation repair and drainage for Silver Lake homes in nearby Grapevine.',
          link: '/grapevine/silver-lake'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and controller fixes on Ross Downs Estates lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation, tree-ring, and park-edge drip so spray stops soaking brick, walks, and decks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for side-yard lows, downspouts, and runoff off Crosstell clay toward Kimzey Park.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Kimzey Park',
          url: 'https://www.colleyville.com/Facilities/Facility/Details/Kimzey-Park-10',
          description:
            'City park at 2201 Broadoak Way, Colleyville, TX 76034. Twenty acres, a one-acre fishing pond, playground, trail, courts, and a pavilion. Hours are 6 a.m. to 10 p.m.'
        },
        {
          name: 'Ross Downs Estates on TAD',
          url: 'https://www.tad.org/search-results?query=ROSS%20DOWNS%20ESTATES&searchType=SubdivisionName',
          description:
            'Tarrant Appraisal District search for Ross Downs Estates in Colleyville. The same words also return the separate Longwood Estates at Ross Downs plat.'
        },
        {
          name: 'Colleyville irrigation guidelines (2025)',
          url: 'https://www.colleyville.com/DocumentCenter/View/239/Irrigation-Guidelines-2025-PDF',
          description:
            'Permit, licensing, rain-shutoff, head setback, and zone-design rules for irrigation work in Colleyville.'
        },
        {
          name: 'Colleyville utility billing water advice',
          url: 'https://www.colleyville.com/380/Utility-Billing',
          description:
            'City conservation notes: about one or two watering days a week, avoid 10 a.m. to 6 p.m., and use drip on beds.'
        },
        {
          name: 'Gasil and Crosstell soil series',
          url: 'https://soilseries.sc.egov.usda.gov/OSD_Docs/G/GASIL.html',
          description:
            'USDA official series descriptions. Gasil is the sandy loam. Crosstell, the associated clay-subsoil soil, is documented on the Crosstell series page.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Ross Downs Estates is in the{' '}
            <a
              href="https://www.colleyville.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Colleyville
            </a>{' '}
            and is taxed by{' '}
            <a
              href="https://www.gcisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Grapevine-Colleyville ISD
            </a>
            , which Tarrant Appraisal District lists on these accounts. Homes on the sampled streets are in ZIP 76034.
            Families use{' '}
            <a
              href="https://www.colleyville.com/Facilities/Facility/Details/Kimzey-Park-10"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Kimzey Park
            </a>{' '}
            at 2201 Broadoak Way. The{' '}
            <a
              href="https://www.colleyville.com/government/departments-m-z/parks/parks-facilities"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              city parks list
            </a>{' '}
            gives the same address. Confirm a school campus for a specific address with the district lookup.
          </p>
          <p>
            Outdoor watering should follow Colleyville&apos;s current notice. The city&apos;s{' '}
            <a
              href="https://www.colleyville.com/380/Utility-Billing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              utility billing page
            </a>{' '}
            describes one or two watering days a week and a 10 a.m. to 6 p.m. window to avoid. Regional drought stages are
            summarized by{' '}
            <a
              href="https://savetarrantwater.com/drought/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Save Tarrant Water
            </a>
            . Weekly runtime advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            helps adjust with the weather. New work follows the city&apos;s{' '}
            <a
              href="https://www.colleyville.com/DocumentCenter/View/239/Irrigation-Guidelines-2025-PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              2025 irrigation guidelines
            </a>
            . Soil context for the two map units here is the USDA{' '}
            <a
              href="https://soilseries.sc.egov.usda.gov/OSD_Docs/G/GASIL.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Gasil
            </a>{' '}
            and{' '}
            <a
              href="https://soilseries.sc.egov.usda.gov/OSD_Docs/C/CROSSTELL.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Crosstell
            </a>{' '}
            series. The neighborhood association site is{' '}
            <a
              href="http://www.rossdowns.com/default.php"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              rossdowns.com
            </a>
            .
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Ross Downs?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
