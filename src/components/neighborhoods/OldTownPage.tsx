import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';
import AboutTheArea, { type LocalAttraction } from '@/components/AboutTheArea';

const OLD_TOWN_ATTRACTIONS: LocalAttraction[] = [
  {
    name: 'Trophy Club Park',
    url: 'https://maps.google.com/?q=Trophy+Club+Park',
    description:
      'Trophy Club Park gives Old Town residents easy access to trails, lake views, and open space for weekend recreation. Its natural setting makes outdoor living and yard upkeep a big part of everyday life nearby.',
  },
  {
    name: 'Harmony Park',
    url: 'https://www.trophyclub.org/Facilities/Facility/Details/Harmony-Park-18',
    description:
      'Harmony Park is a 13 acre neighborhood park with playgrounds, sports courts, and fields that draw families from Old Town throughout the week. The active use of these shared spaces puts extra focus on safe, well maintained yards and irrigation at nearby homes.',
  },
  {
    name: 'Trophy Club Country Club',
    url: 'https://maps.google.com/?q=Trophy+Club+Country+Club',
    description:
      'Trophy Club Country Club anchors the community with golf, social events, and green fairways that set a high bar for turf quality in the area. Homeowners in Old Town often want their own lawns to complement the club’s manicured look.',
  },
  {
    name: 'Trophy Club Town Center',
    url: 'http://www.trophyclub.com',
    description:
      'Trophy Club Town Center offers nearby shopping, dining, and community gatherings for Old Town residents. Its walkable streets and landscaped public areas highlight the value of attractive, well watered landscaping at home.',
  },
  {
    name: 'Freedom Dog Park',
    url: 'https://maps.google.com/?q=Freedom+Dog+Park+Trophy+Club+TX',
    description:
      'Freedom Dog Park provides fenced play areas and open lawn space for local pet owners, including many from Old Town. The heavy foot traffic and pet activity in the neighborhood make durable turf and efficient watering especially important.',
  },
  {
    name: 'Town of Trophy Club Municipal Complex',
    url: 'https://www.trophyclub.org',
    description:
      'The Town of Trophy Club Municipal Complex houses local government offices, events, and community information that guide neighborhood standards for Old Town. Residents rely on these resources when planning property upgrades and outdoor projects.',
  },
];

export default function OldTownPage() {
  return (
    <>
      <NeighborhoodPageTemplate
        cityName='Trophy Club'
        citySlug='trophy-club'
        neighborhoodName='Old Town'
        canonicalUrl='https://sprinkleranddrains.com/trophy-club/old-town'
        pageTitle='Old Town Sprinkler Services in Trophy Club, TX'
        metaDescription='Sprinkler repair, irrigation tune-ups, drainage planning, and outdoor lighting support for Old Town homeowners in Trophy Club, TX.'
        heroTitle='Old Town Sprinkler Services in Trophy Club, TX'
        heroDescription='Licensed sprinkler repair, irrigation tuning, drainage planning, and landscape lighting service for Old Town homes in Trophy Club with mature trees, established lawns, and North Texas clay soil.'
        introHeading='Irrigation Planning for Old Town Trophy Club Properties'
        intro="Old Town in Trophy Club blends established homes, tree-lined streets, and neighborhood parks that keep yards in constant use. Sprinkler systems here must account for mature root systems, sun and shade shifts throughout the day, and clay soil that can shed water instead of absorbing it. Texas Best Sprinklers, Drainage and Lighting helps Old Town homeowners diagnose coverage gaps, repair aging components, tune controllers to local watering guidelines, and plan drainage improvements that protect foundations, patios, and walkways."
        highlights={[
          'Licensed irrigator support for Old Town homeowners who want dependable sprinkler diagnostics, repair, and seasonal calibration tailored to Trophy Club conditions.',
          'Clay-soil watering strategies that help reduce runoff down driveways and streets while still keeping front lawns, side yards, and backyards healthy during long North Texas summers.',
          'Controller programming, nozzle adjustments, and zone balancing for properties with mature trees, shaded sections, and sunny open turf near sidewalks and cul-de-sacs.',
          'Practical drainage recommendations for low spots near fences, landscape beds along the house, and areas that stay soft or muddy after storms.',
        ]}
        serviceFocus={[
          'Sprinkler repair for broken or clogged heads, leaking valves, stuck zones, and inconsistent coverage around Old Town lawns and landscape beds.',
          'Irrigation troubleshooting for systems that run too long, skip zones, or fail to respond correctly to controller programs or rain sensors.',
          'Smart controller setup and seasonal runtime optimization based on Trophy Club watering guidelines and Old Town’s mix of sun, shade, and clay soil.',
          'Drainage solutions for standing water near patios, play areas, and side yards that back up to easements, greenbelts, or neighboring fences.',
          'Outdoor lighting service for front walks, mature trees, and outdoor living spaces so evening curb appeal matches the neighborhood’s daytime look.',
        ]}
        localTips={[
          'Walk your yard at least once a season with the system running to spot clogged heads, tilted sprays, and overspray onto streets or driveways that waste water and create slick surfaces.',
          'Use cycle-and-soak programming on spray zones so clay soil can absorb water in shorter passes instead of letting long run times send it into the street or storm drains.',
          'Pay special attention to zones that water near the foundation and patios in Old Town; small leaks or runtimes that are too long can contribute to soil movement and slab stress.',
          'Check heads and drip lines after tree trimming or landscape updates around Old Town homes, since root growth and new plantings can change water needs and coverage patterns.',
        ]}
        reviews={[
          {
            reviewer: 'Old Town homeowner in Trophy Club',
            date: 'March 2026',
            quote:
              'They walked every zone with us, explained what was causing dry areas along the sidewalk, and adjusted the controller so our lawn finally waters evenly without runoff.',
          },
          {
            reviewer: 'Old Town Trophy Club resident',
            date: 'February 2026',
            quote:
              'The team found a slow valve leak and a few buried heads we had no idea were there. Repairs were explained clearly and the yard looked untouched when they finished.',
          },
          {
            reviewer: 'Family near Old Town in Trophy Club',
            date: 'January 2026',
            quote:
              'From the first phone call to the final walkthrough, they made it easy to understand our options for fixing drainage and improving coverage around our back patio.',
          },
        ]}
        considerations={[
          {
            title: 'Established Lawns and Mature Trees',
            description:
              'Old Town properties often include mature shade trees and long-established lawns. Irrigation needs to respect root zones, adjust for sun and shade patterns, and deliver even coverage without overwatering mulched beds or tree wells.',
          },
          {
            title: 'Clay Soil and Runoff Near Streets',
            description:
              'Trophy Club’s clay-heavy soil can create runoff when sprinklers run too long or at the wrong time of day. Fine-tuning nozzles, pressure, and scheduling helps water soak in rather than washing across sidewalks and residential streets.',
          },
          {
            title: 'Foundation and Hardscape Protection',
            description:
              'Driveways, front walks, and back patios in Old Town see regular use and are often close to key sprinkler zones. Proper head placement, drip usage, and drainage planning help protect concrete, masonry, and foundations from pooling water.',
          },
          {
            title: 'Shared Views and Neighborhood Standards',
            description:
              'With many Old Town homes visible from nearby parks and neighborhood streets, turf health and landscape lighting become part of the area’s shared appearance. Thoughtful irrigation design supports both curb appeal and water conservation.',
          },
        ]}
        pricing={[
          { label: 'Sprinkler Repair Visit', range: '$175-$450 typical scope' },
          { label: 'Smart Controller Upgrade', range: '$450-$1,050 installed' },
          { label: 'Drainage Improvement', range: '$1,500-$6,500 based on layout' },
        ]}
        processSteps={[
          'Schedule an Old Town Trophy Club site assessment',
          'Walk each zone to document pressure, coverage, leaks, and controller settings',
          'Review repair, upgrade, or drainage recommendations and estimated pricing before work begins',
          'Complete clean, careful repairs using durable components matched to local conditions',
          'Calibrate runtimes for Old Town’s clay soil and provide maintenance guidance for seasonal changes and watering guidelines',
        ]}
        faqs={[
          {
            question: 'Can most Old Town Trophy Club sprinkler repairs be completed in a single visit?',
            answer:
              'Many common issues in Old Town—such as broken heads, minor leaks, clogged nozzles, or controller adjustments—can often be handled in one visit when standard parts are available. Larger wiring, valve manifold, or drainage projects may require a follow-up appointment.',
          },
          {
            question: 'How do you help reduce runoff on clay soil in Old Town?',
            answer:
              'We evaluate pressure, nozzle output, slope, and existing schedules, then recommend cycle-and-soak programming, targeted nozzle changes, or drainage improvements so water has time to soak into clay soil instead of running onto sidewalks and streets.',
          },
          {
            question: 'Do you install or set up smart sprinkler controllers for Old Town homes?',
            answer:
              'Yes. We can install smart controllers, integrate rain or soil sensors where appropriate, and program schedules that reflect Trophy Club watering guidelines and the specific layout of your Old Town property.',
          },
          {
            question: 'Can you look at drainage concerns during a sprinkler visit?',
            answer:
              'If you are seeing standing water near fences, patios, or low areas in the yard, we can review those concerns during the same visit, discuss how they relate to your sprinkler system, and outline practical drainage options.',
          },
        ]}
        relatedAreas={[
          {
            name: 'Trophy Club',
            description:
              'Citywide sprinkler repair, irrigation tuning, drainage solutions, and lighting support across Trophy Club neighborhoods.',
            link: '/trophy-club',
          },
          {
            name: 'Lakeside neighborhoods of Trophy Club',
            description:
              'Sprinkler and drainage service for Trophy Club areas near parks, trails, and lake access.',
            link: '/trophy-club',
          },
          {
            name: 'Nearby Roanoke and Southlake',
            description:
              'Irrigation repair and water-efficient upgrades for nearby communities just beyond Trophy Club.',
            link: '/trophy-club',
          },
        ]}
        popularServices={[
          {
            title: 'Sprinkler Repair',
            description:
              'Broken heads, uneven coverage, valve leaks, and system troubleshooting for Old Town properties.',
            link: '/trophy-club/sprinkler-repair-services-in-trophy-club-tx',
          },
          {
            title: 'Irrigation Repair & Optimization',
            description:
              'Controller tuning, zone diagnostics, and smart controller upgrades for Old Town homeowners.',
            link: '/trophy-club/irrigation-repair-services-in-trophy-club-tx',
          },
          {
            title: 'Drainage & Grading Solutions',
            description:
              'French drains, surface drains, and grading adjustments to help move water away from foundations and outdoor living areas.',
            link: '/trophy-club/sprinkler-installation-services-in-trophy-club-tx',
          },
        ]}
        attractions={OLD_TOWN_ATTRACTIONS}
        localLivingContent={
          <>
            <p>
              Old Town in Trophy Club combines established homes, mature trees, and nearby parks that make outdoor spaces a big part of daily life for local
              families. With warm summers and periods of drought common in North Texas, homeowners look to the{' '}
              <a
                href='https://www.trophyclub.org'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
              >
                Town of Trophy Club
              </a>{' '}
              for updates on watering guidelines and conservation programs that affect their yards. Many properties in Old Town feature generous front lawns and
              landscaped backyards, so reliable irrigation and drainage can be just as important as interior upgrades. Staying ahead of soil erosion and runoff
              around driveways and patios helps protect both curb appeal and the long term health of the property.
            </p>
            <p>
              Because Old Town sits close to amenities like{' '}
              <a
                href='https://www.trophyclub.org/Facilities/Facility/Details/Harmony-Park-18'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
              >
                Harmony Park
              </a>{' '}
              and{' '}
              <a
                href='https://maps.google.com/?q=Trophy+Club+Park'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
              >
                Trophy Club Park
              </a>
              , residents often host outdoor gatherings and want their lawns looking green without wasting water. Local guidance from the{' '}
              <a
                href='https://www.trophyclub.org'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
              >
                Town of Trophy Club
              </a>{' '}
              and regional utilities can influence sprinkler schedules and drainage planning, especially during hot, dry stretches. Texas Best serves homeowners
              throughout Trophy Club, including Old Town, helping them tune systems to the local climate and neighborhood expectations. When you are ready to
              explore more service options in the area, the nearby{' '}
              <a
                href='/trophy-club'
                className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
              >
                Trophy Club service area
              </a>{' '}
              page can be a helpful starting point for planning upgrades that protect your landscape and foundation.
            </p>
          </>
        }
      />
      <AboutTheArea
        cityName='Trophy Club'
        neighborhoodName='Old Town'
        sectionTitle='Discover Old Town, Trophy Club'
        intro='Understanding Old Town&apos;s local parks, schools, and neighborhood character helps homeowners plan smarter improvements that fit Trophy Club&apos;s lifestyle and climate.'
        attractions={OLD_TOWN_ATTRACTIONS}
      />
      <section className='py-12 px-4'>
        <div className='mx-auto max-w-4xl'>
          <h2 className='mb-4 text-2xl font-semibold'>About the Old Town Area</h2>
          <p className='mb-4'>
            Tucked into the northern edge of the Dallas–Fort Worth area, Old Town in Trophy Club offers homeowners a blend of established neighborhood charm and
            the conveniences of a modern, master‑planned community. Trophy Club itself is known for its carefully maintained streetscapes, green space, and strong
            residential focus, all supported by the town government at{' '}
            <a href='https://www.trophyclub.org' target='_blank' rel='noopener noreferrer' className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'>
              trophyclub.org
            </a>
            . Old Town reflects that same character, but with a slightly more traditional feel than some of the newer developments, giving the area a sense of
            continuity and rootedness.
          </p>
          <p className='mb-4'>
            Homes in and around Old Town Trophy Club are primarily single‑family residences on well‑kept lots, many with mature trees and landscaped yards that
            demand thoughtful irrigation and drainage. As one of Texas’s early planned communities, Trophy Club emphasizes aesthetic standards and neighborhood
            cohesion, which often means homeowners pay close attention to lawn health, foundation protection, and efficient water use. Local code and enforcement
            details, including seasonal water‑use guidance and conservation programs, are available through the town’s{' '}
            <a
              href='https://www.trophyclub.org/202/Public-Works'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
            >
              Public Works &amp; Utilities
            </a>{' '}
            and related water conservation resources, and are worth reviewing when planning any outdoor projects.
          </p>
          <p className='mb-4'>
            Families in Old Town benefit from access to highly regarded schools in the{' '}
            <a
              href='https://www.nisdtx.org'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
            >
              Northwest Independent School District
            </a>
            , which serves Trophy Club and surrounding communities. Byron Nelson High School, Medlin Middle School, and nearby elementary campuses give the area a
            strong academic backbone, and school events contribute to the close‑knit feel many residents value. Proximity to these schools reduces commute times
            for students and often shapes daily traffic patterns, with morning and afternoon flows centered around the main thoroughfares connecting Old Town to
            the rest of Trophy Club.
          </p>
          <p className='mb-4'>
            Outdoor life is a defining feature of Trophy Club, and Old Town is a short drive or bike ride from several parks, trails, and recreation facilities.
            The town’s park system, managed by{' '}
            <a
              href='https://www.trophyclub.org/196/Parks-Recreation'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
            >
              Trophy Club Parks &amp; Recreation
            </a>
            , includes amenities such as walking trails, sports fields, and playgrounds that make it easy for homeowners to enjoy time outside. Many properties
            back up to or sit near drainage easements and greenbelts, which are great for scenery and recreation but can also create specific runoff and erosion
            considerations that residents must keep in mind.
          </p>
          <p className='mb-4'>
            Commuting from Old Town Trophy Club typically involves short drives to major corridors like SH 114, giving access to employment centers in Westlake,
            Southlake, Roanoke, and the wider DFW metroplex. Despite this regional connectivity, Old Town retains a quiet residential atmosphere, with most
            traffic generated by local school runs, shopping, and community activities. The town’s planning resources, available through the{' '}
            <a
              href='https://www.trophyclub.org/203/Planning-Zoning'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
            >
              Planning &amp; Zoning information
            </a>
            , help guide future development and infrastructure, which homeowners may reference when considering long‑term property improvements.
          </p>
          <p>
            Utilities and municipal services for Old Town are coordinated through the Town of Trophy Club, including water, sewer, and stormwater systems, all of
            which influence how properties handle heavy rains and irrigation runoff. Staying familiar with local ordinances and notices, posted on the{' '}
            <a
              href='https://www.trophyclub.org'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-irrigation-blue underline decoration-2 underline-offset-4'
            >
              Town of Trophy Club
            </a>{' '}
            website, can help homeowners avoid issues related to water restrictions, backflow requirements, or drainage disputes. Combined with the area’s
            established housing stock and active community life, these factors make Old Town Trophy Club a distinctive neighborhood where understanding the local
            environment is central to maintaining a comfortable, resilient home.
          </p>
        </div>
      </section>
    </>
  );
}