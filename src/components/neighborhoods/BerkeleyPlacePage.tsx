import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const arlingtonReview = curatedReviews.find((review) => review.location === 'Arlington');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');

const curatedReviewItems = [fortWorthReview, arlingtonReview, kellerReview]
  .filter((review): review is NonNullable<typeof review> => Boolean(review))
  .map((review) => ({
    reviewer: review.name,
    location: `${review.location}, TX`,
    date: review.time,
    quote: review.content,
    stars: review.stars
  }));

export default function BerkeleyPlacePage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Fort Worth"
      citySlug="fort-worth"
      neighborhoodName="Berkeley Place"
      canonicalUrl="https://sprinkleranddrains.com/fort-worth/berkeley-place"
      pageTitle="Berkeley Place Sprinkler Repair & Drainage in Fort Worth, TX"
      metaDescription="Irrigation repair, drip, and drainage for Berkeley Place and Cheltenham lots next to Forest Park in Fort Worth, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Berkeley Place Sprinkler Repair & Drainage"
      heroDescription="Berkeley Place, including the Cheltenham subdivision, sits about two miles southwest of downtown Fort Worth between Park Place, the railroad, Ward Parkway, and Rockridge Terrace. Early-1900s lots next to Forest Park need cycle-and-soak on clay, drip at foundations, and a house controller on Fort Worth even/odd days."
      introHeading="Park-edge lots on Park Place and Warner Road, not a Fairmount overlay"
      intro={
        <>
          <p>
            The{' '}
            <a
              href="https://www.berkeleyplace.org/our-vision"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Berkeley Place Association
            </a>{' '}
            describes the neighborhood, which commonly includes Cheltenham, as about two miles southwest of downtown.
            Its borders are Park Place on the north, the railroad on the east, Ward Parkway on the south, and Rockridge
            Terrace on the west. The Rogers farmhouse still stands at 2230 Warner Road. The association says W. Lee
            &quot;Pappy&quot; O&apos;Daniel lived there and that the house is on the National Register of Historic Places.
            Lily B. Clayton Elementary, opened in 1922 as Mistletoe Heights Elementary, is at 2000 Park Place. Harry&apos;s
            Place opened at 1633 Park Place in 1927 and is now the Old Neighborhood Grill.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Berkeley Place as part of our Fort Worth work. We are a
            licensed irrigator (LI22462). House controllers follow the city&apos;s{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/twice-per-week"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              year-round watering schedule
            </a>
            : no Monday spray, even addresses Wednesday and Saturday, odd addresses Thursday and Sunday, and no
            irrigation systems between 10 a.m. and 6 p.m. Handheld hoses, drip, soaker hoses, and tree bubblers may be
            used any day. Parks and other non-residential sites water Tuesday and Friday. We do not claim a count of jobs
            on Warner Road or Park Place. We walk each zone and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Berkeley Place, including Cheltenham, is the Fort Worth plat between Park Place, the railroad, Ward Parkway, and Rockridge Terrace, about two miles southwest of downtown.',
        'The city historic-district list includes Fairmount and Mistletoe Heights. Berkeley Place is not on that list. The Rogers-O’Daniel House at 2230 Warner Road is a National Register property on its own.',
        'Fort Worth houses water by address: even Wednesday and Saturday, odd Thursday and Sunday, never Monday, and not with sprinklers from 10 a.m. to 6 p.m.',
        'Forest Park and the Fort Worth Zoo sit on the west edge. A park-side lot and an interior Warner Road yard do not share the same shade, grade, or spray throw.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry bands on Park Place, Warner Road, Ward Parkway, and Rockridge Terrace.',
        'Drip at foundation beds and tree rings so leftover spray stops hitting brick and walks.',
        'Controller programming on Fort Worth even/odd days, outside the 10 a.m. to 6 p.m. window, with cycle-and-soak on clay.',
        'Drainage planning for side-yard lows, downspouts, and grade that sheds toward Forest Park after storms.',
        'Outdoor lighting repair for entries and walks that stay visible next to established street trees.'
      ]}
      localTips={[
        'Use the last digit of the house address. Even addresses water Wednesday and Saturday. Odd addresses water Thursday and Sunday. Monday is off.',
        'Do not copy the Forest Park or zoo clock onto a house. Non-residential sites water Tuesday and Friday.',
        'Split long runtimes into short cycles so clay can take water instead of sending it to the curb.',
        'Drip, soaker hoses, and handheld watering may be used any day. Spray may not.',
        'Walk heads after mowing. Tilted risers on older pads throw onto sidewalks, which Fort Worth treats as water waste.'
      ]}
      trustCards={[
        {
          title: 'A house clock, not the park clock',
          description:
            'We set Berkeley Place controllers to Fort Worth even/odd days and the Monday shutoff, with starts outside 10 a.m. to 6 p.m. Forest Park and the zoo stay on the Tuesday and Friday non-residential days.'
        },
        {
          title: 'Not a Fairmount certificate job',
          description:
            'Fairmount and Mistletoe Heights are local historic districts. Berkeley Place is not on the city’s published district list. We still keep repairs inside the existing layout and flag the National Register house at 2230 Warner Road before any visible change there.'
        },
        {
          title: 'Drip where brick meets the bed',
          description:
            'The association notes that early deed restrictions forbade wood exteriors, which is why the Rogers farmhouse was bricked. Foundation beds on these lots do better on drip than on spray aimed at the wall.'
        },
        {
          title: 'Park-edge grade stays on the lot',
          description:
            'The city bought the ravine west of this land in 1907 and turned it into Forest Park. The zoo has been on part of that land since 1910. Irrigation should not add water to a corner that already sheds that way.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn',
          caption: 'Head and nozzle repair, nearby DFW project photo, not a named Berkeley Place address'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work, nearby DFW project photo, not a named Berkeley Place address'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting, nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Berkeley Place',
        title: 'A park-side zone that waters the walk while the shaded side yard stays brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Fort Worth service. Not a named Berkeley Place address, and not work at Forest Park or the zoo.',
        body: 'A common call on these older lots looks like this: front heads throw past a short parkway onto the sidewalk, a shaded side yard stays brown, and the controller still runs on Monday or at midday, which Fort Worth rules do not allow. Lots that grade toward Forest Park can also hold water after a storm. We map zones, check head height and arc, match nozzles so spray stays off walks, move foundation beds to drip, and split runtimes into cycle-and-soak on the correct even or odd days. If the wet spot is a downspout or settled grade, we talk through drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Clay and cycle-and-soak',
          description:
            'North Texas clay sheds a long first cycle. Shorter repeats move water into the root zone instead of the gutter on Park Place or Ward Parkway.'
        },
        {
          title: 'House days versus park days',
          description:
            'Even houses water Wednesday and Saturday. Odd houses water Thursday and Sunday. Parks, the zoo, and other non-residential sites water Tuesday and Friday. Mixing those clocks wastes a watering day.'
        },
        {
          title: 'Historic neighbors, different rules',
          description:
            'Fairmount and Mistletoe Heights are local historic districts with design review. Berkeley Place is not on that city list. One house, 2230 Warner Road, is a National Register property. Do not treat the whole plat like Fairmount.'
        },
        {
          title: 'Forest Park edge',
          description:
            'The association places Forest Park on the west side of the neighborhood. Shade and grade change from Rockridge Terrace toward interior streets. Irrigation should not add to a low corner that already drains toward the park.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Berkeley Place site assessment and issue mapping, including any grade toward Forest Park',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit Fort Worth watering days',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Which watering days apply to my Berkeley Place address?',
          answer:
            'Under Fort Worth’s year-round schedule, there is no sprinkler watering on Monday. Even addresses water Wednesday and Saturday. Odd addresses water Thursday and Sunday. Irrigation systems and sprinklers are not allowed from 10 a.m. to 6 p.m. Parks, businesses, and other non-residential sites water Tuesday and Friday. Handheld hoses, drip, soaker hoses, and tree bubblers may be used any day. Confirm the current notice on the city’s twice-per-week page before changing days.'
        },
        {
          question: 'Does Berkeley Place need a historic-district certificate for sprinkler work?',
          answer:
            'The City of Fort Worth historic-district list includes Fairmount and Mistletoe Heights. Berkeley Place is not on that list, so a neighborhood-wide Certificate of Appropriateness is not the starting point the way it is in Fairmount. The Rogers-O’Daniel House at 2230 Warner Road is on the National Register, and an individual landmark can still have its own review. Like-for-like head, valve, and controller repairs usually stay inside the existing layout. Installing a new system, or altering one by 20 percent or more, needs a city permit from Development Services. A licensed irrigator or a master plumber registered with the city does that work, except a homeowner on their own homestead, who still needs the permit. We describe the visible scope before work starts. We do not file city applications unless that is arranged separately.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, and grade toward Forest Park change the price. An on-site quote is required. These are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed?',
          answer:
            'Most head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs a layout may need a follow-up. Active leaks get priority. Call (817) 304-7896.'
        },
        {
          question: 'Which school and park sit on this plat?',
          answer:
            'Lily B. Clayton Elementary is at 2000 Park Place, Fort Worth, TX 76110, in Fort Worth ISD. The neighborhood association says the campus opened in 1922. Forest Park is the civic park on the west edge. The Fort Worth Zoo, at 1989 Colonial Parkway, has been on part of that land since 1910. Neither the park nor the zoo is a private Berkeley Place amenity, and neither uses the house watering days.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Fairmount',
          description:
            'National Register and local historic-district bungalows south of downtown, with certificate review this plat does not use.',
          link: '/fort-worth/fairmount'
        },
        {
          name: 'Arlington Heights',
          description: 'Irrigation repair and clay-lot drainage for bungalow streets between Camp Bowie and I-30.',
          link: '/fort-worth/arlington-heights'
        },
        {
          name: 'Ridglea',
          description: 'Sprinkler repair and hillside drainage for lots on rolling clay west of Camp Bowie.',
          link: '/fort-worth/ridglea'
        },
        {
          name: 'Cultural District',
          description: 'Courtyard and street-tree irrigation near the museums, a different Fort Worth watering problem.',
          link: '/fort-worth/cultural-district'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and controller fixes on older Fort Worth lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so spray stops soaking brick and walks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for side-yard lows, downspouts, and runoff toward Forest Park.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Berkeley Place Association',
          url: 'https://www.berkeleyplace.org/our-vision',
          description:
            'Neighborhood history, borders from Park Place to Ward Parkway, and the Rogers-O’Daniel House at 2230 Warner Road.'
        },
        {
          name: 'Fort Worth watering schedule',
          url: 'https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/twice-per-week',
          description: 'Year-round even/odd days, the Monday shutoff, and the 10 a.m. to 6 p.m. sprinkler ban.'
        },
        {
          name: 'Lily B. Clayton Elementary',
          url: 'https://lilybclayton.fwisd.org/',
          description: 'Fort Worth ISD campus at 2000 Park Place, opened in 1922 on the north edge of the neighborhood.'
        },
        {
          name: 'Fort Worth Zoo',
          url: 'https://www.fortworthzoo.org/plan-a-visit',
          description:
            'Zoo at 1989 Colonial Parkway, on the Forest Park land west of Berkeley Place since 1910. A civic site, not a house irrigation clock.'
        },
        {
          name: 'Fort Worth historic districts',
          url: 'https://www.fortworthtexas.gov/departments/development-services/historic-preservation',
          description:
            'The city’s local historic-district list, including Fairmount and Mistletoe Heights. Berkeley Place is not on it.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Berkeley Place is in the{' '}
            <a
              href="https://www.fortworthtexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Fort Worth
            </a>
            , ZIP 76110, and{' '}
            <a
              href="https://lilybclayton.fwisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Lily B. Clayton Elementary
            </a>{' '}
            sits at 2000 Park Place in{' '}
            <a
              href="https://www.fwisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth ISD
            </a>
            . The neighborhood association places Forest Park on the west edge. The{' '}
            <a
              href="https://www.fortworthzoo.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fort Worth Zoo
            </a>{' '}
            is at 1989 Colonial Parkway.
          </p>
          <p>
            Outdoor watering follows Fort Worth&apos;s{' '}
            <a
              href="https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/twice-per-week"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              twice-a-week schedule
            </a>
            . New systems and larger alterations go through{' '}
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
            helps adjust runtimes with the weather. Texas Best Sprinklers also serves nearby{' '}
            <a
              href="/fort-worth/fairmount"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Fairmount
            </a>
            .
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Berkeley Place?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
