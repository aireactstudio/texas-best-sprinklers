import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

const curatedReviewItems = [southlakeReview, kellerReview, colleyvilleReview]
  .filter((review): review is NonNullable<typeof review> => Boolean(review))
  .map((review) => ({
    reviewer: review.name,
    location: `${review.location}, TX`,
    date: review.time,
    quote: review.content,
    stars: review.stars
  }));

export default function GladeLandingPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Grapevine"
      citySlug="grapevine"
      neighborhoodName="Glade Landing"
      canonicalUrl="https://sprinkleranddrains.com/grapevine/glade-landing"
      pageTitle="Glade Landing Sprinkler Repair & Drainage in Grapevine, TX"
      metaDescription="Sprinkler repair, drip, and drainage for Glade Landing Addition homes on Brettenmeadow Drive, Haydenbend Circle, and Altacrest Court in Grapevine, TX 76051. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Glade Landing Sprinkler Repair & Drainage"
      heroDescription="Glade Landing Addition is a single-family Grapevine neighborhood in ZIP 76051, with homes on Brettenmeadow Drive, Haydenbend Circle, Fairmount Drive, Ashcroft Drive, and Altacrest Court. Mid-1980s brick lots beside Glade Landing Park need zone-by-zone testing, drip at foundation beds, and a controller set to Grapevine watering hours."
      introHeading="Mid-1980s single-family lots beside a neighborhood park"
      intro={
        <>
          <p>
            Glade Landing Addition is the name the{' '}
            <a
              href="https://www.tad.org/search-results?query=GLADE+LANDING+ADDITION&searchType=SubdivisionName"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Tarrant Appraisal District
            </a>{' '}
            uses for this Grapevine subdivision. Its records list residential single-family homes in the City of Grapevine
            and Grapevine-Colleyville ISD, ZIP 76051, on Haydenbend Circle, Brettenmeadow Drive, Fairmount Drive, Ashcroft
            Drive, and Altacrest Court. Sampled accounts show year-built dates of 1986 and 1987, living area from about
            1,535 to about 2,708 square feet, and land area from about 0.17 acre to about 0.26 acre. Some of those accounts
            list a pool and some do not. Previous-owner lines on sampled deeds name Glade Landing Dev Corp, with 1986 and
            1987 builder deeds for Gemcraft Homes and D.T. Construction, and a Raldon Corp deed on one Brettenmeadow Drive
            lot.
          </p>
          <p>
            The City of Grapevine history for 1975–1990 says Glade Landing Park was established in 1986 at 5201 Brettenmeadow
            Drive on 0.80 acres. Parks and Recreation lists it as a neighborhood park, closed from one-half hour after sunset
            to one-half hour before sunrise. That park is on Brettenmeadow Drive inside this plat. It is a different place
            from Glade Crossing Park at 521 Westbury Drive and from Shadow Glen Park at 1815 Altacrest Drive. It is also a
            different plat from Stone Bridge Oaks, the patio-home community off East Glade Road.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Glade Landing as part of our Grapevine work. We are a
            licensed irrigator (LI22462). Grapevine prohibits irrigation from 10 a.m. to 6 p.m. year-round. About 70 percent
            of city supply comes through the Trinity River Authority from Cedar Creek and Richland Chambers; about 30 percent
            comes from Lake Grapevine. When Stage 1 of the drought plan is active, the city’s published schedule keeps Monday
            off, waters even addresses Wednesday and Saturday, and waters odd addresses Thursday and Sunday. The August 2020
            city door hanger lists Tuesday and Friday for businesses. We program the
            house controller for the notice that is actually in effect and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice. We do not claim a count of jobs on Brettenmeadow Drive or Haydenbend Circle. We walk each zone and
            quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Glade Landing Addition is a single-family subdivision in Grapevine, ZIP 76051, per Tarrant Appraisal District records, with homes on Brettenmeadow Drive, Haydenbend Circle, Fairmount Drive, Ashcroft Drive, and Altacrest Court.',
        'Sampled appraisal accounts show year-built dates of 1986 and 1987, living area from about 1,535 to about 2,708 square feet, and land area from about 0.17 acre to about 0.26 acre.',
        'The city established Glade Landing Park in 1986 at 5201 Brettenmeadow Drive on 0.80 acres, so heads along that frontage have to stay off the walk and the park edge.',
        'Grapevine bans irrigation from 10 a.m. to 6 p.m. every day. When Stage 1 is active, even addresses water Wednesday and Saturday and odd addresses water Thursday and Sunday.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry bands on circle lots, courts, and through-street frontages.',
        'Arc and nozzle adjustment so spray stays off sidewalks, drives, and the edge of Glade Landing Park.',
        'Drip conversion at foundation beds, tree rings, and pool-side planting where sampled lots list a pool.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak windows that fit Grapevine’s 10 a.m.–6 p.m. ban and Stage 1 days when they apply.',
        'Drainage planning for side-yard lows, downspouts, and water that sits against 1980s brick after a storm.'
      ]}
      localTips={[
        'Keep spray off between 10 a.m. and 6 p.m. every day. Confirm the current Grapevine notice before you copy a neighbor’s days.',
        'If Stage 1 is active, even addresses water Wednesday and Saturday and odd addresses water Thursday and Sunday. Monday is off. The August 2020 city door hanger lists Tuesday and Friday for businesses.',
        'Split long runtimes into short cycles so clay can take the water. A single long cycle on a 1986 pad often leaves the walk wet and the root zone dry.',
        'After mowing, check heads closest to the sidewalk or the park path on Brettenmeadow Drive. Those are the first to tilt.',
        'Where a lot has a pool, keep spray off the deck and the fence. Foundation beds do better on drip than on leftover rotor throw.'
      ]}
      trustCards={[
        {
          title: 'City hours on every controller',
          description:
            'We set Glade Landing controllers outside the year-round 10 a.m. to 6 p.m. window, and to even/odd days only when Grapevine has Stage 1 in effect.'
        },
        {
          title: 'Spray stays off the park edge',
          description:
            'Glade Landing Park sits at 5201 Brettenmeadow Drive. Heads on that frontage need tight arcs so water lands on the lawn, not the walk or the park.'
        },
        {
          title: 'Drip where beds meet brick',
          description:
            'Foundation beds and tree rings on these mid-1980s brick homes do better on drip than on spray that soaks walls, mulch, and pool decks.'
        },
        {
          title: 'Permits handled correctly',
          description:
            'Irrigation contractors register with Grapevine before pulling an irrigation permit. New systems follow the city’s irrigation application and state rain and freeze sensor rules.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn',
          caption: 'Head and nozzle repair — nearby DFW project photo, not a named Glade Landing address'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Glade Landing address'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Glade Landing',
        title: 'A park-side front zone stays wet while a shaded side yard stays dry',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Grapevine and nearby DFW service. Not a named Glade Landing address, and not work at Glade Landing Park.',
        body: 'A common call on a mid-1980s Glade Landing lot looks like this: heads along Brettenmeadow Drive or a Haydenbend Circle walk throw onto concrete, the drive stays wet after every cycle, and a side or back corner under a tree that has grown in since the late 1980s turns brown. A lot that lists a pool may also be soaking the deck. The controller may still run one long cycle in the middle of the day, which Grapevine rules do not allow. We map zones, check pressure and head height, match nozzles and arcs to the frontage, move foundation beds to drip, and split runtimes into cycle-and-soak outside the 10 a.m. to 6 p.m. window. If Stage 1 is posted, the days follow the even or odd address. If the wet spot is a downspout or settled grade, we talk through drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Clay and cycle-and-soak',
          description:
            'North Texas clay on these south Grapevine lots sheds a long first cycle. Shorter repeats move water into the root zone instead of across the sidewalk or toward the park edge on Brettenmeadow Drive.'
        },
        {
          title: 'Systems from the mid-1980s',
          description:
            'Sampled homes were built in 1986 and 1987. Valves, wiring, and laterals from that era fail as clay moves, and many houses have had later repairs mixed into the original layout. We test what is in the ground now.'
        },
        {
          title: 'Circle lots, courts, and the park frontage',
          description:
            'Haydenbend Circle and Altacrest Court have shorter, curved frontages than a through street such as Fairmount Drive or Brettenmeadow Drive. Those zones need their own nozzles. Lots facing Glade Landing Park also have to miss the public walk.'
        },
        {
          title: 'Pools on some of the sampled lots',
          description:
            'TAD marks a pool on some Glade Landing accounts and not on others. Where a pool is present, spray should stay off the deck, the equipment pad, and the fence. That is a lot-by-lot check, not a feature of every house.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Glade Landing site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit Grapevine watering hours and permit rules',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Which watering days apply to my Glade Landing address?',
          answer:
            'Grapevine prohibits irrigation of lawns and landscape between 10 a.m. and 6 p.m. every day. That rule is on the city’s water conservation page and does not depend on a drought stage. When Stage 1 of the drought plan is activated, the city’s August 2020 water conservation door hanger lists no watering on Monday, even addresses (0, 2, 4, 6, 8) on Wednesday and Saturday, odd addresses (1, 3, 5, 7, 9) on Thursday and Sunday, and Tuesday and Friday for businesses. Stage 1 is not always in effect. Confirm the current notice on the city water conservation page or Save Tarrant Water before changing days.'
        },
        {
          question: 'Is Glade Landing the same as Stone Bridge Oaks or Glade Crossing?',
          answer:
            'No. This page is Glade Landing Addition, the single-family plat Tarrant Appraisal District lists on Brettenmeadow Drive, Haydenbend Circle, Fairmount Drive, Ashcroft Drive, and Altacrest Court, with Glade Landing Park at 5201 Brettenmeadow Drive. Stone Bridge Oaks is a separate patio-home and townhome community off East Glade Road. Glade Crossing Park is at 521 Westbury Drive. Shadow Glen Park is at 1815 Altacrest Drive.'
        },
        {
          question: 'Do I need a permit for sprinkler work in Grapevine?',
          answer:
            'The city irrigation code requires irrigating contractors to register with Grapevine before they secure permits, and the building department accepts an irrigation permit application. Repairs that stay inside the existing layout are a different scope from a new system. New installations should go through that irrigation application. Texas irrigation rules call for rain and freeze sensors on new systems. We are licensed irrigator LI22462. We describe the scope before work starts. We do not file a homeowners association application unless that is arranged separately, and a homeowner should confirm any deed restrictions on their own lot.'
        },
        {
          question: 'How should we water clay lots, park-side fronts, and homes with a pool?',
          answer:
            'Most Glade Landing yards need cycle-and-soak on turf, separate runtimes for shade versus sun, and drip at foundation beds. Fronts on Brettenmeadow Drive need short throw so spray stays off the walk and the park. Circle and court lots need nozzles matched to a curved frontage. Where the appraisal account lists a pool, keep spray off the deck. Program around the year-round 10 a.m. to 6 p.m. ban, and use even/odd days only while Stage 1 is actually posted.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, pool decks, and grade change the price. An on-site quote is required. These figures are planning ranges, not a bid, and they are not a count of work we have done in Glade Landing.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Stone Bridge Oaks',
          description: 'Patio and townhome irrigation on East Glade Road, a different plat from Glade Landing Addition.',
          link: '/grapevine/stone-bridge-oaks'
        },
        {
          name: 'Dove Crossing',
          description: 'Mid-1980s clay lots on Thistlewood Lane, Ryan Ridge, and Mockingbird Drive near Dove Park.',
          link: '/grapevine/dove-crossing'
        },
        {
          name: 'Silver Lake',
          description: 'Weekley villa and estate lots off Dove Loop in northeast Grapevine.',
          link: '/grapevine/silver-lake'
        },
        {
          name: 'Historic Township',
          description: 'Irrigation and drainage closer to Grapevine’s original plat and Historic Main Street.',
          link: '/grapevine/historic-township'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and controller fixes on Glade Landing Addition lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation, tree-ring, and pool-side drip so spray stops soaking brick, walks, and decks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for side-yard lows, downspouts, and water that sits against mid-1980s brick.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Glade Landing Park',
          url: 'https://gograpevine.com/listing/glade-landing-park/',
          description:
            'City neighborhood park at 5201 Brettenmeadow Drive, Grapevine, TX 76051. The city’s 1975–1990 history says it was established in 1986 on 0.80 acres.'
        },
        {
          name: 'Grapevine Water Conservation',
          url: 'https://www.grapevinetexas.gov/525/Water-Conservation-Watering-Restrictions',
          description:
            'Year-round 10 a.m. to 6 p.m. irrigation ban, the drought contingency ordinance, and links to regional supply guidance.'
        },
        {
          name: 'Grapevine irrigation permits',
          url: 'https://www.grapevinetexas.gov/136/Applications-Permits',
          description:
            'Building inspection applications, including the irrigation permit used for new system work.'
        },
        {
          name: 'Grapevine-Colleyville ISD',
          url: 'https://www.gcisd.net/',
          description:
            'TAD lists Grapevine-Colleyville ISD on Glade Landing accounts. Confirm the campus for a specific address with the district lookup.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Glade Landing Addition is in the{' '}
            <a
              href="https://www.grapevinetexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Grapevine
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
            . Homes on Brettenmeadow Drive, Haydenbend Circle, Fairmount Drive, Ashcroft Drive, and Altacrest Court are in
            ZIP 76051. Families use{' '}
            <a
              href="https://gograpevine.com/listing/glade-landing-park/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Glade Landing Park
            </a>{' '}
            at 5201 Brettenmeadow Drive, which the city’s{' '}
            <a
              href="https://www.grapevinetexas.gov/778/Grapevine-History-1975---1990"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              1975–1990 history
            </a>{' '}
            dates to 1986.
          </p>
          <p>
            Outdoor watering follows Grapevine’s{' '}
            <a
              href="https://www.grapevinetexas.gov/525/Water-Conservation-Watering-Restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Conservation &amp; Watering Restrictions
            </a>
            , including the year-round 10 a.m.–6 p.m. irrigation ban. The city’s August 2020 water conservation door hanger
            publishes the Stage 1 day pattern for times when that stage is activated. New irrigation work follows the city’s{' '}
            <a
              href="https://www.grapevinetexas.gov/136/Applications-Permits"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              permit applications
            </a>{' '}
            and the{' '}
            <a
              href="https://www.grapevinetexas.gov/DocumentCenter/View/217/Irrigation-Code"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              irrigation code
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
            , supply context from the{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>{' '}
            and{' '}
            <a
              href="https://www.savetarrantwater.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Save Tarrant Water
            </a>
            , and stormwater notes from the city’s{' '}
            <a
              href="https://www.grapevinetexas.gov/531/Stormwater-Watershed-Quality-Management"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              stormwater page
            </a>
            .
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Glade Landing?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
