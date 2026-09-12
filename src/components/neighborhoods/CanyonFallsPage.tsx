import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function CanyonFallsPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Argyle"
      citySlug="argyle"
      neighborhoodName="Canyon Falls"
      canonicalUrl="https://sprinkleranddrains.com/argyle/canyon-falls"
      pageTitle="Canyon Falls Sprinkler Repair & Drainage in Argyle, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Canyon Falls in Argyle, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Canyon Falls Sprinkler Repair & Drainage"
      heroDescription="Canyon Falls sits on rolling Denton County clay north of FM 1171, with HOA front lawns, builder-default controllers, and lots that fall toward Graham Branch. We diagnose leaks, split shade versus sun zones, and plan drainage that stays on the pad instead of running toward trails and ponds."
      introHeading="Slope toward Graham Branch changes how a Canyon Falls lawn should be watered"
      intro={
        <>
          <p>
            Canyon Falls is a roughly 1,200-acre master-planned community on the north side of Cross Timbers Road (FM
            1171), between US 377 and I-35W. The plat crosses Town of Argyle, Town of Northlake, and Flower Mound lines,
            so a house in Wildwood, Knollwood, Timberland, Huntleigh, Parkdale, or Oak Alley can share the same HOA
            while sitting under a different city watering rule. Rolling prairie, high bluffs, and the 200-acre Graham
            Branch Creek Preserve mean many lots are not flat builder pads: turf on the street side bakes, a back
            corner stays damp under oaks, and leftover spray follows sidewalks and trail easements after a long cycle.
            Homes are typically large (about 2,700 to 5,000-plus square feet) with builder irrigation that still runs
            like it is August. SBB Community Management administers the HOA, and front-yard maintenance is part of the
            assessment — which is why tilted heads, overspray onto walks, and dry strips show up as association
            appearance issues, not just private lawn complaints.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Canyon Falls as part of our{' '}
            <a href="/argyle" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              Argyle
            </a>{' '}
            work. We are a licensed irrigator (LI22462). Water may come from the Town of Northlake, the Town of Flower
            Mound, or Argyle MUD depending on the address, and Upper Trinity Regional Water District guidance is
            two-day-per-week outdoor watering. Northlake-served even addresses typically water Wednesday and Saturday;
            odd addresses Thursday and Sunday; no automatic watering Monday or between 10 a.m. and 6 p.m.; handheld,
            drip, and soaker use is treated differently than spray. We program controllers for the provider that
            actually bills the meter, follow{' '}
            <a
              href="https://utrwd.com/saving-water/save-outdoors/water-less-yall/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              UTRWD outdoor watering advice
            </a>
            , and do not claim a count of jobs on Canyon Falls Drive or a named village street. Quotes go through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Lots that fall toward Graham Branch or HOA trails shed a long first cycle. Cycle-and-soak is a layout issue, not extra runtime.',
        'HOA front-yard maintenance makes tilted heads, misting, and sidewalk overspray a curb-appeal problem as soon as the street view is mowed.',
        'Shade along preserve oaks stays wet while the FM 1171–facing strip burns if both sides share one zone and one runtime.',
        'Watering days depend on whether Northlake, Flower Mound, or Argyle MUD serves the meter — one controller template does not fit the whole community.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands on HOA-visible front turf and side yards.',
        'Drip conversion at foundation beds, tree rings, and shade plantings so spray stops hitting mulch, trunks, and brick.',
        'Controller programming and cycle-and-soak matched to the lot’s water provider, North Texas clay, and 10 a.m.–6 p.m. spray limits.',
        'Drainage planning for sloped pads, patio pooling, and runoff that follows sidewalks toward preserve trailheads after storms.',
        'Outdoor lighting repair and additions that keep entries and oaks visible without changing HOA street character.'
      ]}
      localTips={[
        'Confirm which utility bills the house before changing watering days. Canyon Falls addresses are not all on the same provider.',
        'Use shorter cycle-and-soak windows so clay can absorb water instead of sending it to Canyon Falls sidewalks, ponds, or Graham Branch edges.',
        'Walk zones after mowing. Settling heads on HOA front lawns tilt quickly and stripe the street view the association already maintains.',
        'Drop summer runtimes when nights cool. UTRWD two-day guidance still assumes you are not running a peak-heat program in October.',
        'On sloped lots, check the last downhill head. Pressure and drainage there are often why the back corner stays soggy while the front strip looks fine.'
      ]}
      trustCards={[
        {
          title: 'HOA curb-appeal compliance',
          description:
            'Canyon Falls assessments include front-yard landscape maintenance, so street-facing turf is watched. We match head types, straighten risers, and cut overspray so the HOA view stays even without unauthorized layout changes.'
        },
        {
          title: 'Water efficiency under Denton County rules',
          description:
            'Providers here sit under Upper Trinity two-day outdoor watering. Northlake-served lots typically use even Wednesday/Saturday or odd Thursday/Sunday windows, with no spray 10 a.m.–6 p.m. We set the controller for the meter that actually serves the house.'
        },
        {
          title: 'Clay, slope, and preserve-edge shade',
          description:
            'Rolling Canyon Falls lots combine expansive clay, grade toward Graham Branch, and oak canopy at preserve edges. Long single cycles create runoff; shade pockets stay wet. We rebalance zones instead of just adding minutes.'
        },
        {
          title: 'Drip, smart controllers, and storm drainage',
          description:
            'Foundation drip, pressure-regulated heads, and seasonal programs help large builder lots. After heavy rain we look at patio lows and downspout discharge so irrigation is not fighting water headed toward HOA trails or fishing ponds.'
        }
      ]}
      reviews={[
        kellerReview
          ? {
              reviewer: kellerReview.name,
              location: 'Keller, TX',
              date: kellerReview.time,
              quote: kellerReview.content,
              stars: kellerReview.stars
            }
          : {
              reviewer: 'David Rodriguez',
              location: 'Keller, TX',
              date: '1 month ago',
              quote:
                'I partner with Texas Best Sprinklers on all my client projects. Their attention to detail and technical expertise ensures landscape designs have the right irrigation support.',
              stars: 5
            },
        southlakeReview
          ? {
              reviewer: southlakeReview.name,
              location: 'Southlake, TX',
              date: southlakeReview.time,
              quote: southlakeReview.content,
              stars: southlakeReview.stars
            }
          : {
              reviewer: 'Jennifer Martinez',
              location: 'Southlake, TX',
              date: '2 months ago',
              quote:
                'We had Texas Best Sprinklers install a complete irrigation system for our new landscaping. The team was professional, efficient, and the quality of work was outstanding.',
              stars: 5
            },
        colleyvilleReview
          ? {
              reviewer: colleyvilleReview.name,
              location: 'Colleyville, TX',
              date: colleyvilleReview.time,
              quote: colleyvilleReview.content,
              stars: colleyvilleReview.stars
            }
          : {
              reviewer: 'Robert Johnson',
              location: 'Colleyville, TX',
              date: '4 months ago',
              quote:
                'They diagnosed the problem quickly and had it fixed the same day. The technician showed me how to program the controller for water conservation.',
              stars: 5
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler system work on a North Texas residential lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Canyon Falls street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work on a Texas Best Sprinklers project in North Texas',
          caption: 'Yard drainage at a low grade — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on a Texas Best Sprinklers North Texas project',
          caption: 'Entry and tree lighting — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Canyon Falls',
        title: 'A downhill back corner stayed wet while the HOA front strip stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote: 'Composite of typical Argyle-area / nearby DFW service — not a named Canyon Falls village street.',
        body: 'A common call on Canyon Falls’ sloped builder lots looks like this: the controller is still on one long summer cycle, the last downhill heads mist or dump onto clay, and the HOA-visible front strip stays tan because water never soaks in before it leaves the pad. Shade at a preserve-edge oak holds moisture against the slab, then leftover irrigation and downspout water follow the sidewalk toward a trail or pond. We map zones, check static and operating pressure, match nozzles so throw and precipitation line up, and move foundation and tree watering onto drip where spray was hitting trunks and brick. Controller runtimes split into cycle-and-soak windows that fit the lot’s actual water provider — Northlake, Flower Mound, or Argyle MUD — not a generic DFW template. If the low pad is irrigation plus stormwater, we talk through drainage options instead of pretending more spray will dry it out. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Canyon Falls clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on Canyon Falls lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward sidewalks, fishing ponds, and Graham Branch trail edges.'
        },
        {
          title: 'Heat, ET, and Canyon Falls controller schedules',
          description:
            'Denton County summers push evapotranspiration hard. We set seasonal programs around the meter’s two-day window and point homeowners to UTRWD outdoor guidance so Canyon Falls systems are not stuck on a peak-heat runtime in cooler months.'
        },
        {
          title: 'HOA head and nozzle appearance in Canyon Falls',
          description:
            'Front lawns are association-maintained and highly visible from Canyon Falls Drive and village streets. Matched precipitation, pressure regulation, and clean head alignment keep the landscape looking intentional without changing the approved layout.'
        },
        {
          title: 'Slope, shade, and preserve drainage on Canyon Falls lots',
          description:
            'Lots that fall toward Graham Branch or HOA trails need check valves on downhill heads and, where water stands after storms, a drainage plan that respects existing landscape character. Oaks at preserve edges create shade pockets next to full-sun turf that should not share one runtime.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Canyon Falls site assessment and issue mapping',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with HOA front-yard appearance in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Canyon Falls?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings usually stay within the existing layout. Drainage that changes grading, visible piping, or trail-adjacent edges, and lighting that alters the street view, may need Canyon Falls HOA (SBB Community Management) architectural review and, for some drainage work, guidance from the town that actually governs the lot — Argyle, Northlake, or Flower Mound. Ordinary head and pipe repairs usually do not need a new irrigation permit; a new system might. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Canyon Falls clay, shade, and sloped lots?',
          answer:
            'Most Canyon Falls yards need cycle-and-soak on turf, separate runtimes for preserve-edge shade versus full sun, and drip at foundation beds. Sloped lots often need check valves and pressure regulation so downhill heads do not dump. We set programs around the two-day window for the lot’s water provider, keep automatic spray out of the 10 a.m.–6 p.m. heat, and fine-tune after watching how clay absorbs on your pad.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot slope toward Graham Branch, and HOA front-yard constraints change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Canyon Falls?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for local watering rules?',
          answer:
            'First we confirm whether Northlake, Flower Mound, or Argyle MUD serves the meter. Northlake-served even addresses typically water Wednesday and Saturday; odd addresses Thursday and Sunday; no automatic watering Monday or between 10 a.m. and 6 p.m. Upper Trinity asks the region to stay on two days per week. We program start times that fit current provider rules, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into the street. Always confirm the latest town or MUD notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Argyle Meadows',
          description: 'Sprinkler repair, irrigation tuning, and drainage planning for nearby Argyle homes and landscape beds.',
          link: '/argyle/argyle-meadows'
        },
        {
          name: 'Harvest',
          description: 'Irrigation and drainage support for growing landscape areas in the Argyle / Northlake corridor.',
          link: '/argyle'
        },
        {
          name: 'Cross Oaks',
          description: 'Coverage troubleshooting and water-efficient irrigation support near Argyle Meadows and Canyon Falls.',
          link: '/argyle'
        },
        {
          name: '5T Ranch',
          description: 'Sprinkler repair and seasonal controller tuning for nearby Argyle-area properties.',
          link: '/argyle'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description:
            'Head replacement, valve leaks, dry spots, and pressure issues on HOA front lawns and sloped builder systems.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation-bed and tree-ring drip so spray stops soaking mulch, brick, and preserve-edge oaks.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward trails, ponds, and Graham Branch.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Canyon Falls Community & Graham Branch Preserve',
          url: 'https://www.canyonfallstx.com/community/',
          description:
            'The master-planned amenities — Canyon Falls Club at 6950 Canyon Falls Drive, pools, splash pad, Pooch Park, hay barn, and the 200-acre Graham Branch Creek Preserve — sit on the same rolling clay that sheds a long watering cycle toward trails and ponds.'
        },
        {
          name: 'Unity Park',
          url: 'https://www.argyletx.com/138/Unity-Park',
          description:
            'Argyle’s sports hub at 135 Crawford Road, with baseball fields, soccer, and a 1.25-mile path along a creek. A town park, not a reason to ignore lot-level drainage on a Canyon Falls pad.'
        },
        {
          name: 'Argyle Public Parks',
          url: 'https://www.argyletx.com/408/Public-Parks',
          description:
            'Town listings for public parks and trails. Useful context for how Argyle talks about trees, clay, and open space — different from HOA common area inside Canyon Falls.'
        },
        {
          name: 'Argyle Independent School District',
          url: 'https://www.argyleisd.com/',
          description:
            'Several Canyon Falls villages zone to Argyle ISD, including Argyle South Elementary, Argyle Middle, and Argyle High School at 6601 Canyon Falls Drive. Other villages zone to Northwest ISD — confirm by address.'
        },
        {
          name: 'Liberty Christian School',
          url: 'https://www.libertychristian.com/',
          description:
            'A nearby Argyle campus on US 377. School-year traffic on 377 and FM 1171 is part of daily life for Canyon Falls families heading in and out of the community.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Canyon Falls is tied to the{' '}
            <a
              href="https://argyletx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Argyle
            </a>
            , campuses in the{' '}
            <a
              href="https://www.argyleisd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Argyle Independent School District
            </a>
            , and — for some villages —{' '}
            <a
              href="https://www.nisdtx.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Northwest ISD
            </a>
            . Families use{' '}
            <a
              href="https://www.argyletx.com/408/Public-Parks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Argyle public parks
            </a>{' '}
            and{' '}
            <a
              href="https://www.argyletx.com/138/Unity-Park"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Unity Park
            </a>
            , plus HOA trails listed by the{' '}
            <a
              href="https://www.canyonfallstx.com/community/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Canyon Falls community
            </a>
            . That mix of town parks and HOA front lawns is why overspray onto walks and uneven street turf gets noticed quickly.
          </p>
          <p>
            Outdoor watering here follows Denton County supply reality, not a Tarrant-only template. Confirm the schedule
            with your provider —{' '}
            <a
              href="https://town.northlake.tx.us/292/Water-Stage"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Town of Northlake watering stages
            </a>
            , the Town of Flower Mound, or Argyle MUD — and regional two-day guidance from the{' '}
            <a
              href="https://utrwd.com/saving-water/save-outdoors/water-less-yall/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Upper Trinity Regional Water District
            </a>
            . Weekly ET context from{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            is still useful for how much to apply, even when your legal watering days come from a Denton County utility.
            Graham Branch trails and fishing ponds are HOA amenities, not a reason to ignore lot-level irrigation, drip
            at foundations, or drainage after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Canyon Falls?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
