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

export default function ChimneyRockPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Flower Mound"
      citySlug="flower-mound"
      neighborhoodName="Chimney Rock"
      canonicalUrl="https://sprinkleranddrains.com/flower-mound/chimney-rock"
      pageTitle="Chimney Rock Sprinkler Repair & Drainage in Flower Mound, TX"
      metaDescription="Irrigation repair, drip, and drainage for Chimney Rock acre-lot homes in Flower Mound, TX, set for the Town even Tuesday/Friday, odd Wednesday/Saturday schedule. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Chimney Rock Sprinkler Repair & Drainage"
      heroDescription="Chimney Rock is a 48-lot conservation subdivision in western Flower Mound, laid out on a little more than 100 acres with protected open space between home sites. Large lots mean long zones, long pipe runs, and lawn edges that meet natural areas, so we test zone by zone, set controllers for the Town of Flower Mound schedule, and keep drainage on the lot."
      introHeading="Conservation-subdivision lots: big zones, open-space edges, and the Town watering schedule"
      intro={
        <>
          <p>
            Chimney Rock was designed as a conservation subdivision, an approach the Town of Flower Mound encouraged to
            conserve open space and rural character. According to the{' '}
            <a href="http://www.greenerprospects.com/Projects/ChimneyRock.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">designer's project page</a>
            , the plan places 48 lots on a parcel of a little more than 100 acres. Conservation areas were identified
            first, then house sites, then streets and trails, and lot lines last. A 10-acre conservancy lot along the
            public road keeps protected open space outside the public viewshed. That layout means many Chimney Rock yards
            border preserved land rather than another backyard, and irrigation has to stop where the lawn does.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Chimney Rock as part of our Flower Mound work. We are a
            licensed irrigator (LI22462). The Town&apos;s{' '}
            <a href="https://www.flowermound.gov/621/Water-Conservation/" target="_blank" rel="noopener noreferrer" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">water conservation page</a>{' '}
            limits automatic systems and hose-end sprinklers to two days a week: addresses ending in an even number water
            Tuesday and Friday, odd numbers water Wednesday and Saturday, and HOA lots and common areas water Monday and
            Thursday. Automatic and hose-end watering is prohibited from 10 a.m. to 6 p.m. Hand-held hose, drip
            irrigation, and harvested rainwater are allowed at any time. We do not claim a count of jobs in Chimney Rock.
            We walk each zone, keep spray off open space and pavement, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Chimney Rock is a 48-lot conservation subdivision on a little more than 100 acres, per the designer, so lots are larger than a typical Flower Mound tract and many back onto protected open space.',
        'House meters follow the Town of Flower Mound residential schedule: even addresses Tuesday and Friday, odd addresses Wednesday and Saturday. Monday and Thursday are for HOA lots and common areas.',
        'Long lawn runs and wide zones make pressure loss, mismatched nozzles, and dry bands at the far end of a zone more likely than on a small lot.',
        'Where a lawn meets preserved natural area, spray should stop at the edge. Drip works better for beds and trees near that line.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands at the far end of long acre-lot zones.',
        'Pressure and flow checks on long lateral runs, with nozzle matching so the end of a zone gets the same water as the start.',
        'Drip conversion at foundation beds, tree rings, and beds that border open space, so spray stays off natural areas.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak schedules that fit the Town even/odd watering days.',
        'Drainage planning for patio lows, downspouts, and runoff that follows grade across a large lot.'
      ]}
      localTips={[
        'Use the last digit of the street address: even Tuesday and Friday, odd Wednesday and Saturday, and never between 10 a.m. and 6 p.m. for automatic or hose-end watering.',
        'Drip irrigation and hand-held hoses may run at any time under the Town rules, which helps foundation beds on hot days.',
        'Use cycle-and-soak: several short cycles with a break between them, which the Town recommends so clay absorbs water instead of shedding it.',
        'The Town suggests placing a soaker hose or drip line 8 to 18 inches from the foundation and watering until the soil is wet 8 to 10 inches deep.',
        'Walk the far end of each long zone once a season. Tilted or clogged heads there are easy to miss from the house.',
        'Check the Town water conservation page before changing days. The schedule can tighten under drought conditions.'
      ]}
      trustCards={[
        {
          title: 'Town schedule, not the commons clock',
          description: 'Chimney Rock homes follow the Town residential even/odd days. The Monday/Thursday days are for HOA lots and common areas, so we do not copy them onto a house controller.'
        },
        {
          title: 'Open space stays dry',
          description: 'Many lots border preserved land. We aim heads and set arcs so lawn spray stops at the edge, and use drip near natural areas.'
        },
        {
          title: 'Built for large lots',
          description: 'Long zones lose pressure. We measure flow and match nozzles so a zone waters evenly from the valve to the last head.'
        },
        {
          title: 'Drip and drainage, not more spray',
          description: 'Foundation beds and tree rings perform better on drip. After heavy rain we look at patio lows and downspouts before adding runtime.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW project photo, not a named Chimney Rock street'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named Chimney Rock street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Chimney Rock',
        title: 'A long zone that is green near the valve and brown at the far end',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Flower Mound and nearby DFW service. Not a named Chimney Rock address and not work on community open space.',
        body: 'A common call on a large lot looks like this: the zones are long, one runtime was set years ago, and the far end of a zone browns while the area near the valve stays soft. Mixed nozzles, a partly closed valve, or a cracked lateral can all cause it. We measure flow and pressure, replace worn heads, match nozzles, and move foundation beds to drip. Runtimes split into cycle-and-soak windows on the Town watering days. If a wet patio is really a downspout problem, we plan drainage instead of adding spray. The right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Clay and cycle-and-soak',
          description: 'North Texas clay often rejects a long first cycle. Shorter repeats let water reach the root zone instead of running toward the street or open space.'
        },
        {
          title: 'Pressure on long runs',
          description: 'Large lots stretch zones and pipe runs. Pressure loss shows up as weak, short throws at the end of a zone.'
        },
        {
          title: 'Open-space edges',
          description: 'Preserved natural areas next to a lawn should not be irrigated by overspray. Arcs, nozzles, and drip keep water where it belongs.'
        },
        {
          title: 'Association review for visible changes',
          description: 'Chimney Rock has a homeowners association. Check its rules before visible grading, lighting, or landscape changes.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Chimney Rock site assessment and zone mapping, including long runs, open-space edges, and foundation beds',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations that fit the Town watering days',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Which watering days apply to my Chimney Rock address?',
          answer: 'Under the Town of Flower Mound Long-Term Water Conservation Plan, residential addresses ending in an even number water Tuesday and Friday, and odd numbers water Wednesday and Saturday. Automatic and hose-end watering is not allowed from 10 a.m. to 6 p.m. Drip and hand-held hoses may run at any time. Confirm the current Town notice before changing days.'
        },
        {
          question: 'Why is the far end of my zone dry?',
          answer: 'On large lots, long laterals lose pressure, and mixed or worn nozzles make it worse. We measure flow and pressure, check for leaks and partly closed valves, and match nozzles so the whole zone gets even coverage.'
        },
        {
          question: 'Do I need HOA approval for sprinkler or drainage work in Chimney Rock?',
          answer: 'Repairs that stay inside the existing layout are usually simple, but visible changes such as grading, lighting, or new beds may need approval under the association rules. We describe the visible scope before work starts. A licensed irrigator (we are LI22462) should design or alter the system.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer: 'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Lot size, access, existing pipe condition, and grade change the price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Chimney Rock?',
          answer: 'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Active leaks get priority. Call (817) 304-7896.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Bridlewood',
          description: 'Irrigation, drip, and drainage for golf-community lots on the Town even/odd schedule.',
          link: '/flower-mound/bridlewood'
        },
        {
          name: 'Wellington',
          description: 'Cycle-and-soak and drip for 1995-era clay lots in Wellington of Flower Mound.',
          link: '/flower-mound/wellington'
        },
        {
          name: 'Canyon Falls',
          description: 'Sprinkler repair and drainage for hillside lots in Canyon Falls.',
          link: '/argyle/canyon-falls'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and controller fixes on long acre-lot zones.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so slabs and open-space edges stop getting soaked by spray.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, downspouts, and runoff across large lots.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Town of Flower Mound Water Conservation',
          url: 'https://www.flowermound.gov/621/Water-Conservation/',
          description: 'Current residential watering days, hours, and cycle-and-soak tips from the Town.'
        },
        {
          name: 'Heritage Park of Flower Mound',
          url: 'https://www.flowermound.gov/1652/Heritage-Park-of-Flower-Mound',
          description: 'A Town park and a well-known Flower Mound landmark.'
        },
        {
          name: 'Water is Awesome',
          url: 'https://waterisawesome.com/',
          description: 'Regional watering advice that helps adjust runtimes with the weather.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Chimney Rock is in the <a href="https://www.flowermound.gov/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Town of Flower Mound</a>. Its
            conservation layout keeps open space between and around home sites, so lawns, beds, and natural areas sit
            side by side. Town{' '}
            <a href="https://www.flowermound.gov/Archive/ViewFile/Item/1163" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Planning and Zoning minutes from June 2009</a>{' '}
            describe low water pressure as a known issue in western Flower Mound and record staff meeting with the
            Chimney Rock HOA about a planned elevated storage tank nearby.
          </p>
          <p>
            Outdoor watering follows the Town{' '}
            <a href="https://www.flowermound.gov/621/Water-Conservation/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">water conservation rules</a>, and the Town
            works with the Upper Trinity Regional Water District on conservation. Check weekly advice from{' '}
            <a href="https://waterisawesome.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4">Water is Awesome</a>{' '}
            and keep drip at foundations and drainage in mind after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Chimney Rock?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
