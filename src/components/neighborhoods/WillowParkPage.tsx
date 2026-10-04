import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import { curatedReviews } from '@/data/curated-reviews';

const fortWorthReview = curatedReviews.find((review) => review.location === 'Fort Worth');
const kellerReview = curatedReviews.find((review) => review.location === 'Keller');
const southlakeReview = curatedReviews.find((review) => review.location === 'Southlake');

export default function WillowParkPage() {
  return (
    <NeighborhoodPageTemplate
      cityName="Weatherford"
      citySlug="weatherford"
      neighborhoodName="Willow Park"
      canonicalUrl="https://sprinkleranddrains.com/weatherford/willow-park"
      pageTitle="Willow Park Sprinkler Repair & Drainage in Weatherford, TX"
      metaDescription="Irrigation repair, drip upgrades, and drainage for Willow Park lots along I-20 east of Weatherford. Licensed irrigator LI22462. Call (817) 304-7896."
      heroTitle="Willow Park Sprinkler Repair & Drainage"
      heroDescription="Willow Park is its own Parker County city in ZIP 76087 — El Chico Ranch Estates, Stage Coach Estates, and newer Willow Park North clay lots split by I-20 — not the Weatherford courthouse square and not Hudson Oaks. Those yards need cycle-and-soak irrigation, drip at foundations, and a controller set to Willow Park even/odd days, not a Hudson Oaks inverted clock."
      introHeading="Ranch-era acreage and I-20 clay need Willow Park watering days, not a Hudson Oaks clock"
      intro={
        <>
          <p>
            Willow Park is a separate city incorporated in 1963 from El Chico Ranch Estates — not a Weatherford
            subdivision and not Hudson Oaks. Interstate 20 and the older Bankhead / U.S. 80 corridor cut the city
            north and south. City Hall is at 120 El Chico Trail, Suite A. The original El Chico ranch house still
            stands at 316 Ranch House Road. Public Works sits at 3500 Indian Camp. Emergency services and municipal
            court share 101 West Stagecoach Trail. The plats that actually make up the older residential city are El
            Chico Ranch Estates, Stage Coach Estates, Hillcrest, Squaw Creek Estates, Willow Crest, Northchase, Willow
            Springs, and Crown Road additions such as Pruitt-Cobb. Streets we use to describe those lots are El Chico
            Trail, Ranch House Road, Stage Coach Trail, Carriage Drive, Spoke Trail, Indian Camp, and Crown Road.
            Newer Willow Park North and Reserves at Trinity lots sit closer to Kings Gate Road, Scenic Trail, and The
            Shops at Willow Park. McCall Elementary is at 400 Scenic Trail. Pfc. Paul Balint Jr. Memorial Park shares
            the 516 Ranch House Road municipal complex; Kings Gate Park follows the Clear Fork of the Trinity just
            north of I-20. That mix is the irrigation problem: a controller copied from Hudson Oaks waters the wrong
            days, and a clock that treats a Carriage Drive acreage lot like a compact South Main pad will soak the
            street while a shaded Ranch House side yard stays brown. Extra spray just adds runoff toward Squaw Creek
            and the Clear Fork. Realtor pages sometimes lump this city with Weatherford, Hudson Oaks, or Aledo. This
            page is Willow Park plats only.
          </p>
          <p>
            Texas Best Sprinklers, Drainage and Lighting services Willow Park as part of our Weatherford and Parker
            County work. We are a licensed irrigator (LI22462). Willow Park bills its own utility customers — it is
            not Weatherford Municipal Utilities. The city is connected to Fort Worth wholesale surface water and still
            blends that supply with city wells through the El Chico tank, so older ranch-era systems can see pressure
            and backflow questions that a brand-new Willow Park North controller never had. Everyday watering limits
            outdoor spray to two days a week, bans watering on Mondays, and prohibits irrigation systems and hose-end
            sprinklers from 10 a.m. to 6 p.m. on watering days. Residential even addresses water Wednesday and
            Saturday. Odd addresses water Thursday and Sunday. That pairing matches Weatherford and is the reverse of
            Hudson Oaks. Businesses, parks, and common areas use Tuesday and Friday. Drip, soaker hose, handheld hose,
            and tree bubblers may run any day, typically in two-hour windows. New turf needs a City Hall variance. We
            program the house or HOA clock for the current Willow Park notice and follow{' '}
            <a
              href="https://waterisawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4"
            >
              Water is Awesome
            </a>{' '}
            weekly advice instead of leaving a peak-summer runtime into fall. We do not claim a count of jobs on El
            Chico Trail, Ranch House Road, Carriage Drive, or Stage Coach Trail, and we do not treat Paul Balint
            Memorial Park or Kings Gate Park civic irrigation as a substitute for diagnosing a private yard. We walk
            zones, keep spray off walks, and quote through{' '}
            <a href="/contact" className="font-semibold text-irrigation-blue hover:text-irrigation-darkBlue underline decoration-2 underline-offset-4">
              /contact
            </a>
            .
          </p>
        </>
      }
      highlights={[
        'Willow Park even addresses water Wednesday and Saturday; odd addresses Thursday and Sunday. Copying a Hudson Oaks odd-Wednesday clock waters the wrong days here.',
        'El Chico and Stage Coach lots are larger than courthouse-square pads, so leftover spray travels farther before clay absorbs it — especially on Carriage Drive and Spoke Trail.',
        'Newer Willow Park North and Reserves at Trinity fronts are HOA-visible. Tilted heads and dry strips show on Kings Gate Road and Scenic Trail because the association notices the street.',
        'Do not confuse this city with Downtown Weatherford, Hudson Oaks, or Aledo acreage. Willow Park is the 1963 I-20 city with City Hall on El Chico Trail and its own well-plus-Fort-Worth utility.'
      ]}
      serviceFocus={[
        'Sprinkler repair for broken heads, leaking valves, buried nozzles, and dry bands along El Chico Trail, Ranch House Road, and Stage Coach Trail.',
        'Drip conversion at foundation beds and street-facing planting so brick and stone stop getting hit by leftover spray on larger ranch-era lots.',
        'Controller programming, rain/freeze sensors, and cycle-and-soak windows that fit Willow Park everyday watering days and the 10 a.m.–6 p.m. ban.',
        'Drainage planning for patio lows, creek-side grade, and runoff that follows Squaw Creek and the Clear Fork toward Kings Gate Park after storms.',
        'Outdoor lighting repair and additions for entries and walks that stay visible on the way to City Hall without changing HOA or deed-restriction street character.'
      ]}
      localTips={[
        'Confirm the last digit of the street number before you pick days. Willow Park even houses are Wednesday/Saturday — the reverse of Hudson Oaks even houses.',
        'Use shorter cycle-and-soak windows so Willow Park clay can absorb water instead of sending it across Ranch House Road, El Chico Trail, or toward Squaw Creek.',
        'Ask whether an HOA already waters the front on a Willow Park North or Reserves at Trinity lot. A house-only clock should not copy common-area Tuesday/Friday days.',
        'Keep spray off walks, drives, and neighboring lots. Everyday guidelines already treat daytime irrigation and hosing pavement as waste.',
        'Ask City Hall about a new-turf variance before you seed or sod a full lawn. Willow Park requires that approval, and a controller still on August will waste Fort Worth wholesale water.',
        'Drop summer runtimes when nights cool. Water is Awesome publishes weekly ET-based advice, and older well-era clocks on El Chico lots often stay stuck on a peak-heat program.'
      ]}
      trustCards={[
        {
          title: 'HOA curb appeal on newer Willow Park North lots',
          description:
            'Reserves at Trinity and Willow Park North fronts are association-visible. Tilted heads, misting, and dry strips show on Kings Gate Road and Scenic Trail because the street view is part of the plat. We match nozzles and cut overspray without inventing a Downtown Weatherford no-HOA scope.'
        },
        {
          title: 'Willow Park days, not a Hudson Oaks guess',
          description:
            'Everyday guidelines ban watering Monday and from 10 a.m. to 6 p.m. Even houses water Wednesday and Saturday; odd houses Thursday and Sunday; shops, parks, and common meters Tuesday and Friday. We set Willow Park controllers for the current city notice, not Hudson Oaks and not Weatherford Municipal Utilities.'
        },
        {
          title: 'Ranch-era acreage next to I-20 heat',
          description:
            'Half-acre and larger pads in El Chico and Stage Coach throw leftover spray farther than a compact square lot. One long cycle floods the curb while a shaded Ranch House or Carriage Drive corner stays brown. This is not Town Creek historic-pad drainage and not a Hudson Oaks inverted-day problem.'
        },
        {
          title: 'Foundation drip and Clear Fork drainage',
          description:
            'Brick and stone do better on drip than leftover spray. After heavy rain we look at patio lows and downspouts so irrigation is not fighting standing water headed toward Squaw Creek, the Clear Fork, and Kings Gate Park — civic landscape, not a private Willow Park backyard.'
        }
      ]}
      reviews={[
        fortWorthReview
          ? {
              reviewer: fortWorthReview.name,
              location: 'Fort Worth, TX',
              date: fortWorthReview.time,
              quote: fortWorthReview.content,
              stars: fortWorthReview.stars
            }
          : {
              reviewer: 'Michael Thompson',
              location: 'Fort Worth, TX',
              date: '2 months ago',
              quote:
                'Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased, and the lawn has never looked better.',
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
            }
      ]}
      gallery={[
        {
          src: '/assets/images/optimized/Sprinkler-Repair.png',
          alt: 'Sprinkler zone repair and nozzle matching on a North Texas lawn',
          caption: 'Zone repair and nozzle matching — nearby DFW, not a claimed Willow Park street photo'
        },
        {
          src: '/assets/images/optimized/drainage-weatherford.png',
          alt: 'Drainage work from a Texas Best Sprinklers Weatherford-area project',
          caption: 'Drainage work — Weatherford-area project photo, not a named Willow Park street'
        },
        {
          src: '/assets/images/optimized/lighting/3419.webp',
          alt: 'Outdoor lighting on trees and a walkway from a Texas Best Sprinklers project',
          caption: 'Landscape lighting at trees and walkways — nearby DFW project photo'
        }
      ]}
      caseStudy={{
        heading: 'Featured work for homes like these in Willow Park',
        title: 'The sunny Stage Coach front looked wet while a shaded Ranch House corner stayed brown',
        image: '/assets/images/optimized/Irrigation-Repair.png',
        imageAlt: 'Irrigation diagnostic and repair work on a North Texas residential system',
        locationNote:
          'Composite of typical Weatherford-hub / nearby DFW service — not a named Willow Park street, and not work at Paul Balint Memorial Park, Kings Gate Park, City Hall, or McCall Elementary.',
        body: 'A common Willow Park call looks like this: a controller on El Chico Trail, Carriage Drive, or Stage Coach Trail is still running one long summer cycle, and the day pattern was copied from Hudson Oaks. Clay sheds the first pass. Leftover spray hits the curb, which everyday guidelines already treat as wasted outdoor water, while a shaded corner toward Ranch House Road stays brown because canopy grew in after the ranch-era pad was finished. Across I-20, a west-facing strip along the service road cooks against pavement and needs drip, not more spray. An HOA on a Willow Park North lot may already water the front on a different meter. The clock may still be watering Monday or running through the 10 a.m.–6 p.m. window. Older El Chico systems may also show pressure or backflow issues after the city began blending Fort Worth wholesale water with well supply at the El Chico tank. We map which zones the owner actually controls, check whether the meter is residential or common-area, match nozzles so spray stays off walks, and move foundation beds onto drip where spray was hitting brick. Runtimes split into cycle-and-soak windows that fit Willow Park even/odd days — even Wednesday/Saturday, odd Thursday/Sunday. If the low patio is irrigation plus a downspout, we talk through drainage instead of adding spray that will run toward Squaw Creek and Kings Gate Park. No invented pipe footage — the right scope comes from walking the lot.'
      }}
      considerations={[
        {
          title: 'Willow Park clay and cycle-and-soak',
          description:
            'Expansive North Texas clay on these 76087 lots often rejects a long first cycle. Shorter repeats let water move into the root zone instead of sliding toward Ranch House Road, El Chico Trail, and Squaw Creek. This is not Town Creek historic-pad saturation from Downtown Weatherford — it is ranch-era and newer-tract clay that happens to sit next to I-20.'
        },
        {
          title: 'Heat, ET, and Willow Park controller schedules',
          description:
            'I-20 and the service-road pavement hold heat after sunset, and the city bans spray irrigation from 10 a.m. to 6 p.m. on watering days. House and HOA controllers still need seasonal programs, rain and freeze sensors, and Water is Awesome weekly guidance so they are not stuck on a peak-heat runtime after nights cool in October. A well-era clock on El Chico Trail is not a substitute for the current Fort Worth wholesale calendar.'
        },
        {
          title: 'El Chico acreage versus newer Willow Park North fronts',
          description:
            'Stage Coach and El Chico street views are often deed-restricted but house-watered, while Willow Park North and Reserves at Trinity fronts may sit on an HOA meter. Shared runtimes overwater the association strip and starve a shaded Carriage Drive or Ranch House pocket. Separate nozzle types and zone timing keep both sides of a Willow Park lot honest without changing the plat’s curb look.'
        },
        {
          title: 'Squaw Creek drainage and foundation drip in Willow Park',
          description:
            'Kings Gate Park and the Clear Fork already follow the same grade many north-side lots use after storms. Patio lows and downspouts add to that path toward Squaw Creek. Foundations belong on drip, not another hour of spray. Do not confuse this city with Downtown Weatherford, Hudson Oaks, or Aledo acreage.'
        }
      ]}
      pricing={[
        { label: 'Irrigation repair', range: '$180–$500 typical projects' },
        { label: 'Drip conversion or expansion', range: '$400–$1,400' },
        { label: 'Drainage planning and install', range: '$1,900–$7,500' }
      ]}
      processSteps={[
        'Willow Park site assessment and issue mapping, including I-20-facing turf and any Squaw Creek or Clear Fork grade',
        'Flow, pressure, and runtime diagnosis',
        'Repair and upgrade recommendations with Willow Park watering days, HOA curb appeal, and larger-lot overspray in mind',
        'Implementation, cleanup, and zone testing',
        'Walkthrough, seasonal schedule, and 3-year new-install warranty if a new system is installed'
      ]}
      faqs={[
        {
          question: 'Do I need HOA or city approval for sprinkler or drainage work in Willow Park?',
          answer:
            'Many newer Willow Park North and Reserves at Trinity plats have an HOA, and older El Chico or Stage Coach lots may still have deed restrictions, so check the association before changing visible heads, lighting, or grading even when the repair stays in the existing layout. New construction, mechanical work, flood-plain work, and some drainage changes go through the City of Willow Park Planning & Development Department (permits@willowpark.org or the city’s MyGov portal). A licensed irrigator (we are LI22462) should design or alter the system. Ordinary head and pipe repairs usually do not need a new-system permit. New turf needs a City Hall variance. We describe the visible scope before work starts. We do not file city or HOA applications for you unless that is arranged separately.'
        },
        {
          question: 'How should we water Willow Park clay, shade, and larger lots?',
          answer:
            'Use cycle-and-soak on clay, separate shade versus sun times, and drip at foundation beds. Larger El Chico and Stage Coach pads need matched nozzles so spray stays off walks and neighbor fences. I-20-facing turf often belongs on a shorter throw or drip, not a long rotor cycle copied from a backyard. Program around Willow Park everyday guidelines: no Monday, no 10 a.m.–6 p.m. spray. Even addresses water Wednesday and Saturday; odd addresses Thursday and Sunday; businesses, parks, and common areas Tuesday and Friday. Drip, soaker, handheld hose, and tree bubblers may run any day in short windows. Do not copy a Hudson Oaks odd-Wednesday clock or Paul Balint Memorial Park civic days onto a house controller.'
        },
        {
          question: 'What do repairs vs drip vs drainage typically cost here?',
          answer:
            'Sibling neighborhood pages use these typical ranges: irrigation repair $180–$500, drip conversion or expansion $400–$1,400, and drainage planning and install $1,900–$7,500. Clay, access, existing pipe condition, lot size, HOA appearance rules, well-era pressure, and slope toward Squaw Creek or the Clear Fork change price. An on-site quote is required; these figures are planning ranges, not a bid.'
        },
        {
          question: 'How fast can a leak or dry zone be diagnosed in Willow Park?',
          answer:
            'Most common head, valve, and controller issues can be diagnosed on the first visit, and many repairs finish the same day when standard parts are on the truck. I-20 access, HOA notice, well-to-surface-water pressure questions, and wiring faults or main-line leaks may need a follow-up. Drainage that needs layout drawings also takes a second trip. Same-week scheduling is typical; active leaks get priority.'
        },
        {
          question: 'How do you set controllers for Willow Park watering rules here?',
          answer:
            'Confirm the current everyday watering guidelines on the city’s Water Department page before you change days. Spray irrigation is prohibited Monday and between 10 a.m. and 6 p.m. on watering days. Residential even addresses water Wednesday and Saturday; odd addresses Thursday and Sunday. Businesses, parks, and common areas water Tuesday and Friday. That even/odd pairing matches Weatherford and is the reverse of Hudson Oaks, so a controller copied from Parker Oaks Lane will miss legal days here. We program start times and day patterns that match the current Willow Park notice, add rain and freeze protection where hardware allows, and use cycle-and-soak so clay is not running water into walks. Always confirm the latest city notice before changing days yourself.'
        }
      ]}
      relatedAreas={[
        {
          name: 'Downtown Weatherford',
          description:
            'Courthouse-square historic pads in ZIP 76086 — a different city utility, even if the even/odd pairing looks familiar.',
          link: '/weatherford/downtown'
        },
        {
          name: 'Hudson Oaks',
          description:
            'Parker County city just west along I-20. Shares the Fort Worth wholesale water story — but Hudson Oaks odd/even days are inverted from Willow Park.',
          link: '/weatherford/hudson-oaks'
        },
        {
          name: 'Aledo',
          description:
            'Southeast Parker County acreage and newer tracts. Many Willow Park addresses zone Aledo ISD, but Aledo irrigation is not a substitute for diagnosing El Chico Trail.',
          link: '/weatherford'
        },
        {
          name: 'Annetta',
          description:
            'Small Parker County city south of I-20. We serve it from Weatherford — it is not a Willow Park street.',
          link: '/weatherford'
        },
        {
          name: 'Brock',
          description:
            'Rural Parker County community west of Weatherford. Well pressure and open acreage are a different problem than I-20 clay lots with Fort Worth wholesale blend.',
          link: '/weatherford/brock'
        }
      ]}
      popularServices={[
        {
          title: 'Sprinkler Repair',
          description: 'Head replacement, valve leaks, dry spots, and pressure issues on larger Willow Park clay lots.',
          link: '/services/sprinkler-repair'
        },
        {
          title: 'Drip Irrigation',
          description: 'Foundation and bed drip so brick and stone stop getting soaked by leftover spray on El Chico and Stage Coach fronts.',
          link: '/services/drip-irrigation'
        },
        {
          title: 'Drainage Solutions',
          description: 'Planning for patio lows, clay saturation, and runoff that moves toward Squaw Creek, the Clear Fork, and Kings Gate Park.',
          link: '/services/drainage-solutions'
        }
      ]}
      attractions={[
        {
          name: 'City of Willow Park — City Hall',
          url: 'https://willowparktx.gov/',
          description:
            'City Hall at 120 El Chico Trail, Suite A, is the official source for utilities, parks, and permits — and the civic neighbor to the private lots this page is about.'
        },
        {
          name: 'El Chico Ranch House',
          url: 'https://willowparktx.gov/195/El-Chico-Ranch-Estates',
          description:
            'The original ranch house at 316 Ranch House Road is why the oldest Willow Park plats exist. Civic history, not a private-yard irrigation job.'
        },
        {
          name: 'Willow Park City Facilities',
          url: 'https://willowparktx.gov/235/City-Facilities',
          description:
            'Pfc. Paul Balint Jr. Memorial Park shares the 516 Ranch House Road municipal complex. Civic landscape next to City services — not a substitute for diagnosing Carriage Drive.'
        },
        {
          name: 'McCall Elementary',
          url: 'https://mccall.aledoisd.org/about-us',
          description:
            'Aledo ISD’s McCall Elementary at 400 Scenic Trail opened in 2008 north of I-20. School-zone traffic is why tilted heads on Scenic Trail get noticed — still not a campus irrigation contract.'
        },
        {
          name: 'Aledo Public Library',
          url: 'https://www.epclibrary.com/',
          description:
            'Willow Park does not run its own library. Families in Aledo ISD use the Aledo Public Library at 200 Old Annetta Road — a nearby civic stop, not a reason to ignore patio drainage on Ranch House Road.'
        }
      ]}
      localLivingContent={
        <>
          <p>
            Daily life in Willow Park is tied to the{' '}
            <a
              href="https://willowparktx.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              City of Willow Park
            </a>
            , campuses in{' '}
            <a
              href="https://www.aledoisd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Aledo ISD
            </a>
            {' '}
            (including McCall Elementary on Scenic Trail), and the city’s own{' '}
            <a
              href="https://willowparktx.gov/235/City-Facilities"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              city facilities
            </a>
            . Families walk the memorial park at the Ranch House Road municipal complex, use Kings Gate Park along the
            Clear Fork, and visit the{' '}
            <a
              href="https://www.epclibrary.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Aledo Public Library
            </a>
            {' '}
            on Old Annetta Road. City history for the 1963 incorporation and El Chico Ranch Estates is on the official{' '}
            <a
              href="https://willowparktx.gov/170/History"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              History of Willow Park
            </a>
            {' '}
            page, with a longer county context in the{' '}
            <a
              href="https://www.tshaonline.org/handbook/entries/willow-park-tx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Texas State Historical Association handbook
            </a>
            .
          </p>
          <p>
            Outdoor watering follows Willow Park{' '}
            <a
              href="https://willowparktx.gov/330/Everyday-watering-guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Everyday watering guidelines
            </a>
            {' '}
            and the city’s{' '}
            <a
              href="https://willowparktx.gov/326/Water-Department"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Water Department
            </a>
            {' '}
            pages, including{' '}
            <a
              href="https://willowparktx.gov/212/Utility-Billing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Utility Billing
            </a>
            . New work may go through{' '}
            <a
              href="https://willowparktx.gov/251/Permits"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4"
            >
              Permits
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
            . This is Willow Park municipal water supplied in part by Fort Worth wholesale surface water and city wells
            — not Weatherford Municipal Utilities and not a Hudson Oaks inverted calendar. Paul Balint Memorial Park
            and Kings Gate Park are civic Willow Park access — not a reason to treat every plat as park-edge or to
            ignore drip at foundations after storms.
          </p>
        </>
      }
      ctaTitle="Ready to Improve Irrigation in Willow Park?"
      ctaSubtitle="Free quote for sprinkler repair, drip, drainage, or lighting. Call (817) 304-7896. Licensed irrigator LI22462."
    />
  );
}
