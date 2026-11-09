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

export default function TanglewoodPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Fort Worth"
      citySlug="fort-worth"
      neighborhoodName="Tanglewood"
      canonicalUrl="https://sprinkleranddrains.com/fort-worth/tanglewood"
      pageTitle="Tanglewood Sprinkler Repair & Drainage in Fort Worth, TX"
      metaDescription="Irrigation repair, drip, and drainage for Tanglewood Addition homes on Bellaire Drive South, Shady Creek Drive, and Overton Park Drive East in Fort Worth, TX 76109. Controllers set to the city even/odd schedule. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Tanglewood Sprinkler Repair & Drainage"
      heroDescription="Tanglewood Addition is a Fort Worth subdivision in ZIP 76109. Tarrant Appraisal District records list homes on Bellaire Drive South, Tanglewood Trail, Shady Creek Drive, Blackhaw Avenue, Preston Hollow Road, and Overton Park Drive East. Established lots need zone testing, drip at foundations, and a controller on Fort Worth’s year-round watering days."
      introHeading="Bellaire Drive South lots, clay, and Fort Worth’s twice-a-week clock"
      intro={
        <>
          <p>
            The{' '}
            <a
              href="https://www.tad.org/search-results?query=TANGLEWOOD+ADDITION-FORT+WORTH&searchType=SubdivisionName"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Tarrant Appraisal District
            </a>{' '}
            records this subdivision as Tanglewood Addition-Fort Worth, neighborhood code 4T001Z. Property records in
            that addition include Bellaire Drive South, Tanglewood Trail, Shady Creek Drive, Blackhaw Avenue, Preston
            Hollow Road, and Overton Park Drive East, with mailing addresses in ZIP 76109. The same appraisal code also
            includes some Mockingbird Lane Addition addresses, so this page is about homes whose legal description is
            Tanglewood Addition-Fort Worth. A sample Bellaire Drive South account lists the City of Fort Worth and
            Fort Worth ISD among its taxing jurisdictions.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Tanglewood as part of our Fort Worth work. We are a
            licensed irrigator (LI22462). Fort Worth publishes a year-round schedule: no watering on Monday, even
            residential addresses Wednesday and Saturday, odd addresses Thursday and Sunday, non-residential sites
            Tuesday and Friday, and no spray irrigation from 10 a.m. to 6 p.m. Handheld hose, drip, and soaker hose are
            treated separately. The details are on the city&apos;s{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/twice-per-week"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              twice-a-week watering page
            </a>
            . We do not claim a count of jobs in Tanglewood. We walk each zone and quote through{' '}
            <a
              href="/contact"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Tarrant Appraisal District lists Tanglewood Addition-Fort Worth under neighborhood code 4T001Z, with homes on Bellaire Drive South, Tanglewood Trail, Shady Creek Drive, Blackhaw Avenue, Preston Hollow Road, and Overton Park Drive East in ZIP 76109.',
        'A Bellaire Drive South account in that addition lists Fort Worth ISD. Campus assignment is by address, so confirm the current school with the district.',
        'Fort Worth residential watering is year-round and address-based: even Wednesday and Saturday, odd Thursday and Sunday, never Monday, and no spray from 10 a.m. to 6 p.m.',
        'Streets that front Bellaire Drive South and Overton Park Drive East show overspray quickly. Heads that tilt after mowing throw onto pavement instead of turf.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry strips on Bellaire, Shady Creek, and Overton Park frontages.',
        'Arc and nozzle adjustment so spray stays on turf along curbs, drives, and sidewalks.',
        'Drip conversion at foundation beds and tree rings where spray soaks brick and mulch.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak runtimes on Fort Worth even/odd days.',
        'Drainage planning for side-yard lows, downspouts, and runoff that sits on clay after a storm.'
      ]}
      localTips={[
        'Use the last digit of the address: even Wednesday and Saturday, odd Thursday and Sunday. No Monday watering and no spray from 10 a.m. to 6 p.m.',
        'Handheld hoses, drip, and soaker hoses are treated separately from spray under the city rules.',
        'Split long runtimes into shorter cycles with a break so clay can take water instead of sending it to the gutter.',
        'Check heads closest to Bellaire Drive South and the curb after mowing. They are the first to tilt or sink.',
        'Confirm the current Fort Worth notice before changing days. Drought stages can tighten the year-round schedule.'
      ]}
      trustCards={[
        {
          title: 'City schedule on the controller',
          description:
            'We set Tanglewood controllers to Fort Worth even/odd days and the Monday shutoff, with starts outside the 10 a.m. to 6 p.m. window.'
        },
        {
          title: 'Spray stays off the curb',
          description:
            'Bellaire Drive South and Overton Park Drive East frontages need tight arcs so water lands on turf, not pavement.'
        },
        {
          title: 'Drip where beds meet brick',
          description: 'Foundation beds and tree rings do better on drip than on spray that soaks walls and mulch.'
        },
        {
          title: 'Permits when the layout changes',
          description:
            'Fort Worth requires a permit to install an irrigation system or to alter one by 20 percent or more, and rain and freeze sensors on systems installed on or after June 1, 2007.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn',
          caption: 'Head and nozzle repair, nearby DFW project photo, not a named Tanglewood address'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work, nearby DFW project photo, not a named Tanglewood address'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting, nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Tanglewood',
        title: 'A Bellaire frontage that waters the curb while a side yard stays brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Fort Worth service. Not a named Tanglewood address.',
        body: 'A common call on an established Fort Worth lot looks like this: heads along the front curb throw past the sidewalk, the drive stays wet after every cycle, and a side yard turns brown under trees. The controller may still run on Monday or at midday, which Fort Worth rules do not allow. We map zones, check pressure and head height, match nozzles and arcs to the frontage, move foundation beds to drip, and split runtimes into cycle-and-soak on the correct even or odd days. If the wet spot is a downspout or settled grade, we talk through drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Clay and cycle-and-soak',
          description:
            'North Texas clay sheds a long first cycle. Shorter repeats move water into the root zone instead of the gutter along Bellaire Drive South.'
        },
        {
          title: 'Street-facing frontages',
          description:
            'Lots on Bellaire Drive South and Overton Park Drive East show misaligned heads immediately. Arcs and nozzles have to match or spray hits pavement.'
        },
        {
          title: 'Established trees and mixed sun',
          description:
            'Tree cover and open turf on the same lot need different runtimes. One program across every zone leaves shade soggy and sun brown.'
        },
        {
          title: 'Older layouts and foundations',
          description:
            'Valves and laterals fail as soil moves. Drip at foundation beds keeps spray off brick and helps keep moisture off the wall.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Tanglewood site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit Fort Worth watering days and permit rules',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Which watering days apply to my Tanglewood address?',
          answer:
            'Fort Worth’s year-round schedule has no watering on Monday. Even residential addresses water Wednesday and Saturday. Odd residential addresses water Thursday and Sunday. Non-residential sites water Tuesday and Friday. Spray irrigation is not allowed from 10 a.m. to 6 p.m. Confirm the current notice on the city twice-a-week watering page before changing days.'
        },
        {
          question: 'Why does the front zone spray the street?',
          answer:
            'Heads with the wrong arc or nozzle, or heads that have tilted after mowing, throw past the curb on Bellaire Drive South and Overton Park Drive East. We reset arcs, match nozzles, and raise or replace sunken heads.'
        },
        {
          question: 'Do I need a permit for sprinkler work in Fort Worth?',
          answer:
            'The city requires a permit to install an irrigation system, or to alter one by 20 percent or more, including in the extraterritorial jurisdiction. A backflow prevention device is required at the connection to the water supply. Rain and freeze sensors are required on systems installed on or after June 1, 2007, and adding those sensors needs a permit obtained by a licensed irrigator or master plumber. Repairs that stay inside the existing layout are a different scope. We are licensed irrigator LI22462. See the city irrigation system requirements page for the current rules.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, and grade change the price. An on-site quote is required; these are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed?',
          answer:
            'Most head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults or main-line leaks may need a follow-up. Active leaks get priority. Call (817) 304-7896.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Ridglea',
          description: 'Irrigation repair, drip, and hillside drainage for Ridglea lots west of Tanglewood.',
          link: '/fort-worth/ridglea'
        },
        {
          name: 'Arlington Heights',
          description: 'Sprinkler repair and drip for bungalow lots between Camp Bowie and I-30.',
          link: '/fort-worth/arlington-heights'
        },
        {
          name: 'Cultural District',
          description: 'Courtyard irrigation and drainage near the museums, north of the 76109 neighborhoods.',
          link: '/fort-worth/cultural-district'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and controller fixes.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so spray stops soaking brick and walks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for side-yard lows, downspouts, and runoff between yards.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Fort Worth watering schedule',
          url: 'https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/twice-per-week',
          description: 'Year-round even/odd days, the 10 a.m. to 6 p.m. spray window, and rain and freeze sensor rules.'
        },
        {
          name: 'Fort Worth irrigation requirements',
          url: 'https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/system-requirements',
          description: 'Permit, backflow, and licensed-irrigator rules for new or substantially altered systems.'
        },
        {
          name: 'Fort Worth ISD',
          url: 'https://www.fwisd.org/',
          description: 'The school district listed on Tarrant Appraisal District jurisdictions for a Tanglewood Addition account. Confirm the campus for a specific address.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Tanglewood Addition sits in the{' '}
            <a
              href="https://www.fortworthtexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth
            </a>{' '}
            and is in{' '}
            <a
              href="https://www.fwisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth ISD
            </a>
            , which appears on the taxing jurisdictions for a Bellaire Drive South account in the addition. Homes in
            the subdivision records use ZIP 76109.
          </p>
          <p>
            Outdoor watering follows the city&apos;s{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/twice-per-week"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              year-round twice-a-week rules
            </a>
            . New or expanded systems follow the{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/system-requirements"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              irrigation system requirements
            </a>
            . Weekly advice from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            helps adjust runtimes with the weather.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Tanglewood?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
