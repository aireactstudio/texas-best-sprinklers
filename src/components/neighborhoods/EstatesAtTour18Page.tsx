import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

const curatedReviewItems = [kellerReview, southlakeReview, colleyvilleReview]
  .filter((review): review is NonNullable<typeof review> => Boolean(review))
  .map((review) => ({
    reviewer: review.name,
    location: `${review.location}, TX`,
    date: review.time,
    quote: review.content,
    stars: review.stars
  }));

export default function EstatesAtTour18Page() {
  return (
    <NeighborhoodPageTemplate
      cityName="Flower Mound"
      citySlug="flower-mound"
      neighborhoodName="The Estates at Tour 18"
      canonicalUrl="https://sprinkleranddrains.com/flower-mound/estates-at-tour-18"
      pageTitle="The Estates at Tour 18 Sprinkler Repair & Drainage in Flower Mound, TX"
      metaDescription="Irrigation repair, drip, and drainage for gated Estates at Tour 18 homes in Flower Mound, TX, set for the Town even Tuesday/Friday, odd Wednesday/Saturday schedule. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="The Estates at Tour 18 Sprinkler Repair & Drainage"
      heroDescription="Gated estate lots in Flower Mound, ZIP 75022, along Tour 18 Drive, Baltusrol Drive, Amen Corner, and the golf-named courts in Sections 1, 2, and 3. Long zones on Denton County clay need a walk of each zone, drip at foundations, and a controller set to the Town house watering days."
      introHeading="Gated estate lots beside Tour 18: long zones, fairway edges, and the Town watering plan"
      intro={
        <>
          <p>
            The Town of Flower Mound{' '}
            <a
              href="https://www.flowermound.gov/DocumentCenter/View/29132/Street-Listing-Index"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              street listing index
            </a>{' '}
            names The Estates at Tour 18 in three sections. Section 1 includes Tour 18 Drive and Lighthouse Drive.
            Section 2 includes Amen Corner and Doral Court. Section 3 includes Baltusrol Drive, Pine Valley Drive,
            Southern Hills Drive, Muirfield Court, Firestone Drive, and Sawgrass Court. Listing addresses on those
            streets are in Denton County, ZIP 75022, reached from FM 1171. The{' '}
            <a
              href="https://estatesattour18.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Estates of Tour 18 HOA
            </a>{' '}
            describes a gated, guarded entrance and the Tour 18 Dallas Golf Club and clubhouse inside the community.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services these lots as part of our Flower Mound work. We are a
            licensed irrigator (LI22462). House meters follow the Town{' '}
            <a
              href="https://www.flowermound.gov/621/Water-Conservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Long-Term Water Conservation Plan
            </a>
            : even addresses Tuesday and Friday, odd addresses Wednesday and Saturday, and no automatic or hose-end
            watering from 10 a.m. to 6 p.m. HOA common areas water Monday and Thursday. That is not the house-meter
            calendar. We do not claim a count of jobs here. We walk each zone and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'The Town street index lists The Estates at Tour 18 Sections 1, 2, and 3, with homes on Tour 18 Drive, Amen Corner, Doral Court, Baltusrol Drive, Pine Valley Drive, and the other golf-named courts in ZIP 75022.',
        'The HOA describes a gated, guarded entrance and the Tour 18 Dallas Golf Club. Spray that overshoots a long lawn can land on a fairway, a private drive, or a neighboring yard.',
        'House addresses use the Town even Tuesday/Friday or odd Wednesday/Saturday days. HOA common areas use Monday and Thursday.',
        'Estate-scale zones lose pressure at the far heads. A single long runtime on clay wets the valve end and leaves the back of the zone dry.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, sunken nozzles, and dry ends of long estate zones.',
        'Arc and nozzle matching so spray stays off fairways, private streets, and drives.',
        'Drip conversion at foundation beds and tree rings on clay soil.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak schedules on the Town house days.',
        'Drainage planning for side-yard lows, downspouts, and grade that sheds toward a patio or a fairway edge.'
      ]}
      localTips={[
        'Use the last digit of the street address: even Tuesday and Friday, odd Wednesday and Saturday. Do not copy the Monday/Thursday commons clock onto a house controller.',
        'Keep automatic and hose-end spray out of 10 a.m. to 6 p.m. Drip, hand-held hoses, and on-site well water (with the sign the Town requires) are treated separately.',
        'Split long runtimes into short cycles with a break so clay can absorb water before it runs off an estate lawn.',
        'If the lot has an on-site sewage system, keep new spray lines at least five feet from the field and the tanks. The Town requires an as-built and an RP backflow device on those lots.',
        'Schedule the visit with the homeowner. The entrance is gated and guarded, and visible exterior work needs HOA design-review approval before it starts.'
      ]}
      trustCards={[
        {
          title: 'House days, not the commons clock',
          description:
            'We set house controllers to the Town even/odd days and keep starts outside 10 a.m. to 6 p.m. Common-area Monday/Thursday watering stays on the HOA meter.'
        },
        {
          title: 'Spray stays off the fairway',
          description:
            'Long lawns next to Tour 18 need matched nozzles and tight arcs so water lands on the yard that owns the meter.'
        },
        {
          title: 'Drip where beds meet the house',
          description:
            'Foundation beds and tree rings do better on drip than on spray that soaks walls, mulch, and trunks.'
        },
        {
          title: 'Town permit and HOA review',
          description:
            'New irrigation in Flower Mound needs a permit, sealed plans, and a rain/freeze sensor. The HOA still requires written design-review approval. Town approval does not replace it.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler head and nozzle repair on a North Texas residential lawn',
          caption: 'Head and nozzle repair, nearby DFW project photo, not a named Estates at Tour 18 address'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Yard drainage installation from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work, nearby DFW project photo, not a named Estates at Tour 18 address'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Landscape lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting, nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in The Estates at Tour 18',
        title: 'A long zone that soaks the patio and misses the back of the lawn',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Flower Mound and nearby DFW service. Not a named Estates at Tour 18 address.',
        body: 'A common call on an estate lot looks like this: the heads nearest the valve puddle the patio, the far end of the same zone turns brown, and a few degrees of extra arc throw water toward a fairway or the private drive. The controller may still be on a Monday/Thursday commons schedule, which is not the house calendar. We map zones, check pressure and head height, match nozzles to the throw, move foundation beds to drip, and split runtimes into cycle-and-soak on the correct even or odd days. If the wet corner is a downspout or settled grade, we talk through drainage instead of adding spray. Lots with an on-site sewage system get the five-foot separation the Town requires and RP backflow rules before any new line is drawn. The right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Clay and cycle-and-soak',
          description:
            'North Texas clay sheds a long first cycle. Shorter repeats move water into the root zone instead of down a long lawn toward the street or a fairway.'
        },
        {
          title: 'Long zones and pressure',
          description:
            'Estate lots mean long laterals. Mixed nozzles and a partly closed valve leave the far heads misting while the near heads flood.'
        },
        {
          title: 'Golf-course edges',
          description:
            'The community includes the Tour 18 Dallas Golf Club. Arcs have to stop at the lawn. Overspray onto a fairway or cart path is wasted water and a bad neighbor.'
        },
        {
          title: 'Two approvals, one system',
          description:
            'A new or expanded system needs the Town irrigation permit and, when the work is visible, written HOA design-review approval. Repairs inside the existing layout are a different conversation. We describe the scope before work starts.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Estates at Tour 18 site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit Town watering days, the irrigation permit, and HOA design review',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Which watering days apply to my Estates at Tour 18 address?',
          answer:
            'Under the Town of Flower Mound Long-Term Water Conservation Plan, residential addresses ending in an even number water Tuesday and Friday, and odd numbers water Wednesday and Saturday. Automatic and hose-end watering is not allowed from 10 a.m. to 6 p.m. HOA common areas, commercial, and multifamily properties water Monday and Thursday. Drip and hand-held hoses may run at any time. Confirm the current notice on the Town water conservation page before changing days.'
        },
        {
          question: 'Why does the back of my lawn dry out while the patio stays wet?',
          answer:
            'Estate zones are long. Mixed nozzles, low pressure, or a tilted head can flood the near end and miss the far end. We measure flow and pressure, match nozzles, and reset arcs so water stays on the lawn.'
        },
        {
          question: 'Do I need a permit and HOA approval for sprinkler work?',
          answer:
            'Repairs that stay inside the existing layout usually do not need a new Town irrigation permit. New or expanded systems do: the Town requires a permit, plans sealed by a licensed irrigator registered with Flower Mound, a rain/freeze sensor, and a backflow test. If the lot has an on-site sewage system, the packet also requires an as-built and at least five feet of separation from the field and the tanks, plus an RP backflow device. The HOA separately requires written design-review approval before exterior modifications. Town approval does not replace that. We are licensed irrigator LI22462. We do not file Town or HOA applications unless that is arranged separately.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Access, pipe condition, and grade change the price. An on-site quote is required. These are planning ranges, not a bid for a named lot.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed?',
          answer:
            'Most head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults or main-line leaks may need a follow-up. Active leaks get priority. Call (817) 304-7896 and have the gate expect us.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Bridlewood',
          description: 'Irrigation repair and drainage for another Flower Mound golf-community set of lots on Town even/odd days.',
          link: '/flower-mound/bridlewood'
        },
        {
          name: 'Wellington',
          description: 'Sprinkler repair, drip, and drainage for Wellington lots, with house days kept separate from HOA commons.',
          link: '/flower-mound/wellington'
        },
        {
          name: 'Canyon Falls',
          description: 'Nearby Argyle and Northlake lots on rolling clay, with a different city and watering notice than Flower Mound.',
          link: '/argyle/canyon-falls'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and controller fixes on long estate zones.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so spray stops soaking walls and mulch.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for side-yard lows, downspouts, and runoff toward patios or fairway edges.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Flower Mound Water Conservation',
          url: 'https://www.flowermound.gov/621/Water-Conservation/',
          description: 'Current residential watering days, hours, and the separate Monday/Thursday calendar for HOA common areas.'
        },
        {
          name: 'Irrigation Information Packet',
          url: 'https://www.flowermound.gov/DocumentCenter/View/515/Irrigation-Information-Packet',
          description: 'Town permit rules for sealed plans, rain/freeze sensors, backflow, and lots with on-site sewage systems.'
        },
        {
          name: 'Flower Mound Parks',
          url: 'https://www.flowermound.gov/802/All-Parks',
          description: 'Town park list, including the Community Activity Center area residents use outside the gate.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            The Estates at Tour 18 is in the{' '}
            <a
              href="https://www.flowermound.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Flower Mound
            </a>
            , in northeast Denton County. The HOA entrance is gated and guarded, and the community includes the Tour 18
            Dallas Golf Club. Listing records for Section 3 homes on Baltusrol Drive show{' '}
            <a
              href="https://www.argyleisd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Argyle ISD
            </a>{' '}
            (Argyle South Elementary, Argyle Middle, and Argyle High). The Town's{' '}
            <a
              href="https://www.flowermound.gov/schoolresources"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              school resources page
            </a>{' '}
            notes that Flower Mound is served by more than one district, so confirm the address before relying on a campus name.
          </p>
          <p>
            Outdoor watering follows the Town{' '}
            <a
              href="https://www.flowermound.gov/621/Water-Conservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              water conservation plan
            </a>
            , and new systems follow the{' '}
            <a
              href="https://www.flowermound.gov/DocumentCenter/View/515/Irrigation-Information-Packet"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              irrigation information packet
            </a>
            . Visible exterior changes also go through the HOA design review committee. Weekly advice from{' '}
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
      ctaTitle="Ready to Improve Irrigation in The Estates at Tour 18?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
