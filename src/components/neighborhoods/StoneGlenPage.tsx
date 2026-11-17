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

export default function StoneGlenPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Keller"
      citySlug="keller"
      neighborhoodName="Villas of Stone Glen"
      canonicalUrl="https://sprinkleranddrains.com/keller/stone-glen"
      pageTitle="Stone Glen Sprinkler Repair & Drainage in Keller, TX"
      metaDescription="Sprinkler repair, drip conversion, and drainage for Villas of Stone Glen condominium homes in Keller, TX 76248, checked against the City of Keller watering schedule. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Stone Glen Sprinkler Repair & Drainage"
      heroDescription="Villas of Stone Glen is a gated condominium community at 301 Tulip Way in Keller. Shared landscape and common-area irrigation go through the association, and every controller still has to match the City of Keller watering days for that meter."
      introHeading="A 2013–2014 condominium plat beside Bourland Road, not a conventional single-family subdivision"
      intro={
        <>
          <p>
            Stone Glen in Keller is the residential community officially named Villas of Stone Glen. The{' '}
            <a
              href="https://engage.goenumerate.com/s/vosg/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Villas of Stone Glen Condominium Association
            </a>{' '}
            describes a gated community of 115 single-family condominium homes at 301 Tulip Way, Keller, TX 76248.
            Owners hold a unit and a share of the common elements. The association site routes maintenance, architectural
            review, and landscape work through request forms, and it publishes a separate after-hours number for pool or
            irrigation emergencies. That line is the association&apos;s, not ours.
          </p>
          <p>
            The City of Keller approved the project on May 1, 2012, as a senior retirement community on about 16.25 acres
            in the Samuel Needham Survey, on the east side of Bourland Road and roughly 650 feet south of Johnson Road
            (SUP-12-0003). That approval allowed 24-foot private streets in place of the usual 31-foot width. Tarrant
            County plats followed: a final plat of Lot 1, Block A, recorded January 17, 2013 (document D213014709),
            another final plat on March 7, 2013 (D213058013), and 2014 replats of Lot 1R that also took in lots from
            Block B of the Stone Glen Addition (D214128739 and D214158340). The declaration was recorded May 17, 2013
            (D213125247). Those recording details are listed on the association{' '}
            <a
              href="https://www.hoa.texas.gov/sites/default/files/certificates/159867/6569-19901/mc/Villas%20of%20Stone%20Glen%20Condominium%20Association%20Management%20Certificate-001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              management certificate
            </a>{' '}
            posted by the state (document D224048473). Tarrant Appraisal District lists the subdivision as Villas of
            Stone Glen Condos, with units on Tulip Way and Apeldoorn Lane, and shows a 2013 year built on at least one
            Tulip Way home. The retail Stone Glen plat at Keller Parkway and Bourland Road, including the multi-tenant
            building at 721 Keller Parkway, is a different set of lots. This page is about the homes.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting is a licensed irrigator (LI22462). We can be hired by the
            association or by an owner. We do not assume a fee-simple backyard, and we do not treat the pool, clubhouse,
            or common landscape as a private yard. Keller publishes a year-round twice-weekly schedule on its{' '}
            <a
              href="https://www.cityofkeller.com/services/public-works/environmental-services/water-restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              water restrictions page
            </a>
            : even-numbered residential addresses water Wednesday and Saturday, odd-numbered residential addresses water
            Thursday and Sunday, and non-residential locations water Tuesday and Friday. There is no watering on Monday,
            and automatic irrigation is not allowed between 10 a.m. and 6 p.m. A common-area clock and a unit address
            may not share the same days, so we identify the meter before we program anything. We do not claim a count of
            jobs inside this community.
          </p>
        </>
      }
      highlights={[
        'The association describes 115 single-family condominium homes at 301 Tulip Way. Landscape and common-element irrigation start with the association’s request process, not a typical single-family service call.',
        'Plats were recorded in 2013 and 2014. Equipment from that construction is more than a decade old and should be tested zone by zone rather than assumed to match today’s plantings.',
        'The 2012 city approval allowed 24-foot private streets. A head that is out of arc reaches pavement quickly, and Keller prohibits spray onto a street and water running down the street.',
        'Keller assigns different days to residential addresses and to non-residential locations. Confirm which clock you are setting before you pick Wednesday or Tuesday.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, tilted nozzles, and zones that throw onto the private street or a patio.',
        'Drip at foundation beds and tree rings, which Keller’s ordinance allows on days when spray is not permitted.',
        'Controller programming, rain and freeze sensors, and cycle-and-soak schedules matched to the meter’s Keller watering days.',
        'Drainage planning for patio lows, downspouts, and clay that sheds a long spray cycle toward a narrow street.',
        'Outdoor lighting repair and additions coordinated with the association’s architectural request when the change is visible.'
      ]}
      localTips={[
        'Read the last digit of the address only after you know the meter is residential. Even is Wednesday and Saturday. Odd is Thursday and Sunday. Non-residential and many common-area systems are Tuesday and Friday. No Monday watering.',
        'Keep automatic irrigation outside 10 a.m. to 6 p.m. Keller also prohibits a broken or misting head, spray onto a street or parking area, runoff down the street, and watering during precipitation or at or below 32°F.',
        'Handheld hose, drip, a soaker hose, and a tree bubbler may be used any day under the city’s lawn-irrigation ordinance. That is the practical way to water a foundation without running spray on the wrong day.',
        'Use shorter cycle-and-soak windows. North Texas clay often rejects the first long cycle and sends it toward pavement.',
        'After a power outage, reopen the controller. A clock that restarts on a daily program will miss Keller’s assigned days.',
        'Drought stages from the Tarrant Regional Water District can tighten these rules. Check the city page before you change a schedule, and ask Keller about its Residential Sprinkler Evaluation Program with the water district if you want the city’s own checkup.'
      ]}
      trustCards={[
        {
          title: 'Association first on common elements',
          description:
            'The association accepts landscape, maintenance, and architectural requests, and it publishes an after-hours pool or irrigation line at 972-359-1548, option 9. We work from the owner or the association. We do not replace that line.'
        },
        {
          title: 'Residential days and common-area days',
          description:
            'Keller waters even residential addresses Wednesday and Saturday, odd addresses Thursday and Sunday, and non-residential locations Tuesday and Friday. We confirm the meter before we set the clock.'
        },
        {
          title: 'Narrow private streets',
          description:
            'The 2012 approval allowed 24-foot private streets. Heads that overshoot a small courtyard or parkway strip wet the pavement, which Keller treats as a violation.'
        },
        {
          title: 'Drip and drainage, not longer spray',
          description:
            'Patio-home foundations and downspouts do better on drip and a drainage look than on another long spray cycle. Clay and a short setback leave little room for runoff.'
        }
      ]}
      includeReviewSchema={false}
      reviews={curatedReviewItems}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW project photo, not a Villas of Stone Glen address'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work from a Texas Best Sprinklers North Texas project',
          caption: 'Drainage work — nearby DFW project photo, not a named street inside the community'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Villas of Stone Glen',
        title: 'A controller on the wrong days and a head aimed at a narrow street',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Keller and nearby DFW service — not a named Villas of Stone Glen address, and not work at the pool, clubhouse, or association common area.',
        body: 'A common call on a patio-home lot from the early 2010s looks like this: the controller still runs a long cycle, the days do not match the meter’s Keller schedule, and one head throws across a short setback onto the private street. Clay sheds the first pass, the patio stays damp at a downspout, and a shaded courtyard stays soft while a sunnier strip dries out. We map the zones, confirm whether the clock is residential or common-area, replace worn heads and match nozzles, and move foundation beds onto drip. Runtimes then split into cycle-and-soak windows on the assigned days. If the wet patio is a downspout and grade problem, we talk through drainage instead of adding spray. Visible changes get described so they can go through the association’s request process. The right scope comes from walking the property.'
      }}
      considerations={[
        {
          title: 'Common elements versus a unit',
          description:
            'Irrigation on shared landscape is an association matter. Unit-adjacent heads, a valve that only serves one courtyard, and a controller inside a home may be an owner call. We ask which it is before we open a valve box.'
        },
        {
          title: 'Keller schedule and a decade-old clock',
          description:
            'Automatic irrigation belongs on the assigned days and outside 10 a.m. to 6 p.m. Controllers installed with the 2013–2014 construction can lose that program in an outage or still carry a daily schedule from move-in.'
        },
        {
          title: 'Clay, patios, and 24-foot streets',
          description:
            'Expansive clay and a short setback do not tolerate one long cycle. The 2012 approval allowed private streets of 24 feet, so runoff and overspray reach pavement quickly.'
        },
        {
          title: 'Association review for visible changes',
          description:
            'The association publishes architectural and landscape request forms. Head and pipe repairs that stay in the existing layout are usually simple. A new head location, lighting, or grade change should be described before work starts.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Site walk with the owner or association contact, including street-facing heads, foundation beds, and which zones are common elements',
        'Flow, pressure, and runtime diagnosis, and a check of whether the controller is on a residential or non-residential Keller schedule',
        'Written recommendations that fit the city watering days and the association request process',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Who do I call for sprinkler or drainage work in Villas of Stone Glen?',
          answer:
            'Shared landscape and common-element irrigation go through the Villas of Stone Glen Condominium Association. Its site lists maintenance, architectural, and landscape requests, and it publishes an after-hours pool or irrigation emergency line at 972-359-1548, option 9. That number is the association’s, not Texas Best. The association or an owner can hire us for diagnosis and repair. We describe visible work before it starts and do not file association requests unless that is arranged separately. A licensed irrigator (we are LI22462) should design or alter the system. Call (817) 304-7896.'
        },
        {
          question: 'Which Keller watering days apply here?',
          answer:
            'It depends on the meter. On the City of Keller schedule, even-numbered residential addresses water Wednesday and Saturday, odd-numbered residential addresses water Thursday and Sunday, and non-residential locations — the city lists apartments, businesses, industries, parks, and medians — water Tuesday and Friday. There is no watering on Monday, and automatic irrigation is not allowed between 10 a.m. and 6 p.m. The city ordinance also allows a handheld hose, drip irrigation, a soaker hose, or a tree bubbler any day. Broken heads, misting from high pressure, spray onto a street, and water running down the street are prohibited. Drought stages can add tighter rules. Confirm the current notice on the city’s water restrictions page before you change days.'
        },
        {
          question: 'How should we water clay and patio-home foundations here?',
          answer:
            'Use cycle-and-soak on clay, keep spray off the private street, and put foundation beds on drip. The 2012 approval allowed 24-foot private streets, so a long single cycle has little room before it reaches pavement. We test the output of each zone before setting runtimes, and we look at downspouts when a patio is already wet after rain. Seasonal runtimes should drop when nights cool, even though the assigned days stay in place year-round unless a drought stage changes them.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Neighborhood pages on this site use these typical planning ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, association review, and grade change the price. An on-site quote is required. These figures are planning ranges, not a bid for a Villas of Stone Glen address.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs a layout may need a follow-up, especially when the association has to approve visible work first. Same-week scheduling is typical; active leaks get priority. Call (817) 304-7896.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Highland Oaks',
          description: 'Irrigation repair and drainage for established treed lots near Rufe Snow Drive and North Tarrant Parkway.',
          link: '/keller/highland-oaks'
        },
        {
          name: 'Hidden Lakes',
          description: 'Sprinkler repair, controller updates, and drainage for larger Keller lots with mixed sun and shade.',
          link: '/keller/hidden-lakes'
        },
        {
          name: 'Ridgewood',
          description: 'Sprinkler diagnostics and drainage planning for established Ridgewood homes in Keller.',
          link: '/keller/ridgewood'
        },
        {
          name: 'Marshall Ridge',
          description: 'Tune-ups, leak repair, and seasonal controller updates for Marshall Ridge.',
          link: '/keller/marshall-ridge'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Broken heads, valve leaks, dry spots, and controllers that no longer match Keller’s watering days.',
          link: '/keller/sprinkler-repair-services-in-keller-tx'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and courtyard drip so spray is not the only way to water beds and slabs.',
          link: '/keller/drip-irrigation-services-in-keller-tx'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, downspouts, and clay that sheds water toward a private street.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Villas of Stone Glen Association',
          url: 'https://engage.goenumerate.com/s/vosg/',
          description:
            'The association site for maintenance, architectural, and landscape requests, and the published after-hours pool or irrigation emergency line.'
        },
        {
          name: 'Johnson Road Park',
          url: 'https://www.cityofkeller.com/services/parks-recreation/parks-and-trails/keller-parks-and-open-space/johnson-road-park',
          description:
            'A 15-acre city park at 640 Johnson Road, a short distance north of the community, with a trail, pavilions, and access to the library and senior center.'
        },
        {
          name: 'Keller Senior Activities Center',
          url: 'https://www.cityofkeller.com/about-us/departments-h-z/keller-senior-activities-center',
          description:
            'The city’s senior activities center, which Johnson Road Park lists as accessible from the park. The community was approved in 2012 as a senior retirement community.'
        },
        {
          name: 'Keller Water Restrictions',
          url: 'https://www.cityofkeller.com/services/public-works/environmental-services/water-restrictions',
          description:
            'The city’s year-round twice-weekly schedule, midday shutoff, and the rules against broken heads and water running into the street.'
        },
        {
          name: 'Keller ISD',
          url: 'https://www.kellerisd.net/',
          description:
            'The school district shown on Tarrant Appraisal District records for Villas of Stone Glen addresses in Keller.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Villas of Stone Glen sits in the{' '}
            <a
              href="https://www.cityofkeller.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Keller
            </a>
            , ZIP 76248, on the east side of Bourland Road south of Johnson Road. The{' '}
            <a
              href="https://engage.goenumerate.com/s/vosg/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              association
            </a>{' '}
            is the contact for common-area landscape and for the after-hours irrigation line. Day-to-day watering still
            follows the city schedule, including the ban on broken heads and on water running into the street.
          </p>
          <p>
            <a
              href="https://www.cityofkeller.com/services/parks-recreation/parks-and-trails/keller-parks-and-open-space/johnson-road-park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Johnson Road Park
            </a>{' '}
            at 640 Johnson Road is the closest city park and is how the city lists access to the Keller Public Library
            and the{' '}
            <a
              href="https://www.cityofkeller.com/about-us/departments-h-z/keller-senior-activities-center"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller Senior Activities Center
            </a>
            . The retail lots in the Stone Glen Addition along Keller Parkway are nearby, but they are not this
            residential plat. Check{' '}
            <a
              href="https://www.cityofkeller.com/services/public-works/environmental-services/water-restrictions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Keller water restrictions
            </a>{' '}
            when a drought stage is posted, because a drought stage can cut spray back to once a week or stop outdoor watering.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation at Villas of Stone Glen?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
