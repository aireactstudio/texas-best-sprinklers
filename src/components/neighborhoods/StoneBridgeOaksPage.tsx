import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const colleyvilleReview = curatedReviews.find((review) => review.location === 'Colleyville');

export default function StoneBridgeOaksPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Grapevine"
      citySlug="grapevine"
      neighborhoodName="Stone Bridge Oaks"
      canonicalUrl="https://sprinkleranddrains.com/grapevine/stone-bridge-oaks"
      pageTitle="Stone Bridge Oaks Sprinkler Repair & Drainage in Grapevine, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Stone Bridge Oaks in Grapevine, TX. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Stone Bridge Oaks Sprinkler Repair & Drainage"
      heroDescription="Stone Bridge Oaks is a wooded Grapevine patio-home and townhome community off Glade Road, not a lake-edge estate plat. Tight courtyards, HOA-maintained fronts, oak shade, and a creek corridor need cycle-and-soak irrigation, drip at brick and stucco, and drainage that stays on the lot instead of rolling toward common trails."
      introHeading="HOA-watered fronts and private courtyards on a wooded Glade Road plat"
      intro={
        <>
          <p>
            Stone Bridge Oaks sits in central-east Grapevine off East Glade Road between State Highway 360 and SH 121,
            ZIP 76051. The recorded streets homeowners actually use are Trevor Trail, Kaitlyn Lane, and Carly Drive, reached
            from Glade by Euless Grapevine Road. Stone Bridge Oaks Owners&apos; Association, Inc. was formed in 2007. The
            neighborhood was built in two phases: about 24 townhomes from 2006 into 2009, then about 66 villa-style detached
            patio homes by Grenadier Homes from 2009 through 2015. Homes typically run 2,000–4,000 square feet in brick,
            stone, and stucco, tucked into oaks and a creek corridor with nine acres of common nature area, a private
            clubhouse, pool, fitness room, and internal walking trails. The HOA maintains landscape, watering, and exterior
            paint on the street view. That is the irrigation problem here: the association may run common and front turf on
            one calendar while a homeowner still owns a courtyard, side yard, or backyard controller that cannot copy the
            HOA clock.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Stone Bridge Oaks as part of our Grapevine work. We are a
            licensed irrigator (LI22462). Grapevine prohibits irrigation from 10 a.m. to 6 p.m. year-round, requires rain and
            freeze sensors, and — when Stage 1 of the drought plan is active — splits residential even/odd days from HOA and
            common-area watering on Tuesday and Friday. About 70 percent of city supply comes through the Trinity River
            Authority; about 30 percent comes from Lake Grapevine. We program private controllers for those windows and
            follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. We do not claim a count of jobs on Trevor Trail
            or Kaitlyn Lane, and we do not treat HOA landscape watering as a substitute for diagnosing a private courtyard
            system. We walk zones, keep spray off walks and stucco, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Townhome and patio-home pads on Trevor Trail and Kaitlyn Lane show overspray onto HOA walks faster than a typical Grapevine estate lot.',
        'The association waters landscape it maintains; a private courtyard controller still has to follow Grapevine hours and, in Stage 1, a different day set than HOA common turf.',
        'Oaks and the creek corridor split yards into deep shade and short sun strips. One long cycle soaks the slab side and still misses the open corner.',
        'Do not confuse this plat with Grapevine’s Stone Gate neighborhood, Silver Lake off Dove Loop, or lake parks on Meadowmere Lane — this is a Glade Road lock-and-leave community.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along patio-home courtyards and townhome side yards.',
        'Drip conversion at foundation beds and stucco/brick walls so leftover spray stops staining finish the HOA is obligated to paint.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit Grapevine’s 10 a.m.–6 p.m. ban without copying HOA common-area days onto a house clock.',
        'Drainage planning for courtyard lows, fence-line pooling, and runoff that follows the creek and common-trail grades after storms.',
        'Outdoor lighting repair and additions for entries and private walks that stay visible without changing HOA street character.'
      ]}
      localTips={[
        'Ask what the HOA waters before changing a house controller. Front turf and common beds may already be on association irrigation; extra spray from a private zone just floods the walk.',
        'Use shorter cycle-and-soak windows so Stone Bridge Oaks clay can absorb water instead of sending it across Carly Drive sidewalks or toward the creek corridor.',
        'Walk private zones after the landscape crew mows. Settling heads on 2006–2015 pads tilt quickly and stripe the HOA-visible front.',
        'Keep spray off stucco, stone, and neighboring lots. Grapevine ordinance prohibits irrigation discharging onto paved surfaces.',
        'If Stage 1 is active, do not copy HOA common-area Tuesday/Friday days onto a residential controller. Even addresses are Wednesday/Saturday; odd are Thursday/Sunday; Monday is off.'
      ]}
      trustCards={[
        {
          title: 'HOA curb appeal on a maintained street view',
          description:
            'Stone Bridge Oaks HOA maintains landscape, watering, and exteriors. Tilted heads, misting, and dry strips still get noticed because the association is paying to keep the front sharp. We match nozzles and cut overspray without unauthorized layout changes.'
        },
        {
          title: 'Grapevine hours versus HOA watering days',
          description:
            'Year-round irrigation is banned from 10 a.m. to 6 p.m. Rain and freeze sensors are required. When Stage 1 is on, houses follow even/odd days while HOA common areas use Tuesday/Friday. We set private controllers for the current city notice, not the clubhouse clock.'
        },
        {
          title: 'Townhome throw and patio-home shade on one plat',
          description:
            'The 2006 townhomes need short throw and walk control. Later Grenadier patio homes sit deeper in oaks and lose even coverage in courtyards. The Stone Bridge Oaks challenge is rebalancing those products, not treating every yard like a lake-edge estate.'
        },
        {
          title: 'Foundation drip and creek-side drainage',
          description:
            'Brick, stone, and stucco do better on drip than leftover spray. After heavy rain we look at courtyard lows and downspouts so irrigation is not fighting standing water headed toward the creek, common trails, and Glade Road grades.'
        }
      ]}
      reviews={[
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
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Stone Bridge Oaks street photo'
        },
        {
          src: '/assets/images/optimized/drainage/3249.webp',
          alt: 'Drainage work at a low patio on a Texas Best Sprinklers project',
          caption: 'French drain at a low patio — nearby DFW project photo'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Stone Bridge Oaks',
        title: 'The HOA front looked fine while a courtyard and creek-side corner stayed wet and brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Grapevine / nearby DFW service — not a named Stone Bridge Oaks street, and not work at Stone Gate or Meadowmere Park.',
        body: 'A common Stone Bridge Oaks call looks like this: the HOA-maintained front on Trevor Trail or Kaitlyn Lane looks even because association irrigation is already running, but a private courtyard is dark and soft because leftover spray hits the walk and stucco, while a shaded creek-side corner stays brown because oak canopy grew in after the 2009–2015 Grenadier pads were finished. Clay sheds a single long cycle. The house controller is still on a peak-heat program that ignores Grapevine’s 10 a.m.–6 p.m. window and, in Stage 1, may be copying Tuesday/Friday HOA days that do not apply to a residence. We map which zones the homeowner actually owns, check pressure on short townhome throw versus patio-home courtyards, match nozzles so spray stays off HOA walks, and move foundation beds onto drip where spray was hitting brick and stucco. Runtimes split into cycle-and-soak windows that fit city hours and even/odd days when Stage 1 is posted. If the low courtyard is irrigation plus a downspout, we talk through drainage instead of adding spray that will run toward the creek and common trails. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Stone Bridge Oaks clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these Glade Road lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Carly Drive, HOA walks, and the creek corridor. This is not lake-edge saturation from Grapevine Lake — it is clay on a patio-home plat that happens to sit in woods.'
        },
        {
          title: 'Heat, ET, and Stone Bridge Oaks controller schedules',
          description:
            'Grapevine summers push evapotranspiration hard, and the city bans irrigation from 10 a.m. to 6 p.m. every day. Private courtyard systems still need seasonal programs, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after the HOA has already cut common-area water.'
        },
        {
          title: 'HOA head appearance and no-spray-on-pavement rules in Stone Bridge Oaks',
          description:
            'Because the association maintains fronts and exteriors, tilted risers, misting, and overspray show immediately. Grapevine also prohibits irrigation discharging onto paved surfaces. Matched precipitation, pressure regulation, and clean head alignment keep the street view intentional for association standards and city code.'
        },
        {
          title: 'Townhomes, patio homes, shade, and creek drainage on Stone Bridge Oaks pads',
          description:
            'Townhomes need short throw and sidewalk control. Later patio homes mix oak canopy with compact courtyards. Drainage here is lot-level clay, courtyard lows, and creek-side grades — not a private neighborhood lake. Do not confuse this community with Stone Gate, Silver Lake off Dove Loop, or Meadowmere Park at 3000 Meadowmere Lane.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Stone Bridge Oaks site assessment and issue mapping, including which zones the HOA already waters',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with HOA appearance and Grapevine watering hours in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Stone Bridge Oaks?',
          answer:
            'Irrigation repairs that replace heads, valves, or controller settings on a homeowner-owned system usually stay within the existing layout. Changes that alter HOA-maintained landscape, visible piping, or common-area edges, and lighting that changes the street view, may need Stone Bridge Oaks architectural review. Grapevine requires a city permit for new irrigation system installations, a plan, licensed-irrigator registration, and rain/freeze sensors. Ordinary head and pipe repairs usually do not need a new-system permit. We describe the visible scope before work starts so you can check association rules. We do not file HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Stone Bridge Oaks clay, townhome lots, and shaded patio-home courtyards?',
          answer:
            'Confirm what the HOA already irrigates before adding runtime to a house controller. Private turf still needs cycle-and-soak, separate shade versus sun times, and drip at foundation beds. Townhomes need short throw so spray stays off walks. Patio homes under oaks often need less water on the slab side and more even coverage in the open courtyard. Program around Grapevine’s year-round 10 a.m.–6 p.m. ban. If Stage 1 is active, even addresses water Wednesday and Saturday and odd addresses Thursday and Sunday; Monday is off. Do not copy HOA Tuesday/Friday common-area days onto a residence.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, townhome versus patio-home lot size, and slope toward the creek change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Stone Bridge Oaks?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. Wiring faults, main-line leaks, or drainage that needs layout drawings may need a follow-up. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Grapevine watering rules here?',
          answer:
            'Irrigation is prohibited between 10 a.m. and 6 p.m. year-round. City ordinance also requires rain and freeze sensors and forbids discharging irrigation onto streets, sidewalks, and driveways. When Stage 1 of the drought plan is activated, residential even addresses water Wednesday and Saturday, odd addresses Thursday and Sunday, Monday is a no-watering day, and HOA/common areas use Tuesday and Friday. We program start times and day patterns that match the current city notice for the zones you own, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into HOA walks. Always confirm the latest Grapevine or supplier notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Historic Township',
          description: 'Irrigation and drainage for Grapevine properties closer to the original township and Historic Main Street.',
          link: '/grapevine/historic-township'
        },
        {
          name: 'Silver Lake',
          description: 'Weekley villa and estate irrigation off Dove Loop — a different Grapevine plat, not this Glade Road community.',
          link: '/grapevine/silver-lake'
        },
        {
          name: 'Dove Crossing',
          description: '1980s clay lots on Thistlewood, Ryan Ridge, and Mockingbird near Dove Park — no HOA-watered fronts.',
          link: '/grapevine/dove-crossing'
        },
        {
          name: 'Meadowmere Park',
          description:
            'Civic Grapevine Lake park at 3000 Meadowmere Lane — not a Stone Bridge Oaks street and not the HOA trail system.',
          link: '/grapevine'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on townhome side yards and patio-home courtyards.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick, stone, and stucco stop getting soaked by leftover spray on HOA-visible walls.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for courtyard lows, clay saturation, and runoff that moves toward the creek and common trails.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'Grapevine Parks & Facilities',
          url: 'https://www.grapevinetexas.gov/463/Parks-Facilities',
          description:
            'City directory of Grapevine parks and recreation sites. Stone Bridge Oaks has private trails and a clubhouse; public parks such as Parr Park and Bear Creek are the civic spaces residents actually use off the plat.'
        },
        {
          name: 'Grapevine Public Library',
          url: 'https://www.grapevinetexas.gov/1854/Library',
          description:
            'The library at 1201 Municipal Way is a regular stop for GCISD families from the Glade Road side of town — a city landmark, not a reason to ignore courtyard drainage on Kaitlyn Lane.'
        },
        {
          name: 'Grapevine Elementary School',
          url: 'https://ges.gcisd.net/',
          description:
            'GCISD campus at 1801 Hall-Johnson Road, the elementary listed for Stone Bridge Oaks addresses. Nearby civic campus, not HOA common turf and not a lake-edge lot.'
        },
        {
          name: 'Grapevine Commercial Historic District',
          url: 'https://www.grapevinetexas.gov/1658/National-Register-of-Historic-Places',
          description:
            'South Main Street from Northwest Highway to West College Street is a short drive west of Glade Road, not a walk from Trevor Trail. Useful city context, not a claim that this neighborhood sits on Historic Main.'
        },
        {
          name: 'Grapevine hike-and-bike trails',
          url: 'https://www.grapevinetexas.gov/DocumentCenter/View/801/trails_color_revised32913',
          description:
            'City trail map including Cottonbelt Trail and Big Bear Creek Trail, which sit closer to the 360 / Glade side of Grapevine than the Dove Loop lake paths. Useful for stormwater grades, not a private HOA loop.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life around Stone Bridge Oaks is tied to the{' '}
            <a
              href="https://www.grapevinetexas.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Grapevine
            </a>
            , campuses in{' '}
            <a
              href="https://www.gcisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Grapevine-Colleyville ISD
            </a>
            , and{' '}
            <a
              href="https://ges.gcisd.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Grapevine Elementary
            </a>{' '}
            on Hall-Johnson Road. Families also use the{' '}
            <a
              href="https://www.grapevinetexas.gov/1854/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Grapevine Public Library
            </a>{' '}
            and city parks listed under{' '}
            <a
              href="https://www.grapevinetexas.gov/463/Parks-Facilities"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Parks &amp; Facilities
            </a>
            . Historic Main Street on the city’s{' '}
            <a
              href="https://www.grapevinetexas.gov/1658/National-Register-of-Historic-Places"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              National Register districts
            </a>{' '}
            page is a drive west of Glade Road — still part of Grapevine living, not a walk from the clubhouse.
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
            , including the year-round 10 a.m.–6 p.m. irrigation ban. New systems go through{' '}
            <a
              href="https://www.grapevinetexas.gov/136/Applications-Permits"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Applications &amp; Permits
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
            , regional supply context from the{' '}
            <a
              href="https://www.trwd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Tarrant Regional Water District
            </a>
            {' '}and{' '}
            <a
              href="https://www.savetarrantwater.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Save Tarrant Water
            </a>
            , and stormwater notes from{' '}
            <a
              href="https://www.grapevinetexas.gov/531/Stormwater-Watershed-Quality-Management"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Stormwater &amp; Watershed Quality
            </a>
            . Private HOA trails and the creek corridor sit on this plat; lake parks listed on the city’s{' '}
            <a
              href="https://www.grapevinetexas.gov/1720/Life-Jackets"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              lake park locations
            </a>{' '}
            page are civic Grapevine Lake access — not a reason to treat Stone Bridge Oaks lots as waterfront or to ignore drip
            at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Stone Bridge Oaks?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
