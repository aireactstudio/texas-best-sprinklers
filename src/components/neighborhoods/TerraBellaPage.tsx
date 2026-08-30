import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';

export default function TerraBellaPage() {
  return (
    <>
      <NeighborhoodPageTemplate
        cityName='Westlake'
        citySlug='westlake'
        neighborhoodName='Terra Bella'
        canonicalUrl='https://sprinkleranddrains.com/westlake/terra-bella'
        pageTitle='Terra Bella Sprinkler Services in Westlake, TX'
        metaDescription='Sprinkler repair, irrigation tuning, drainage planning, and lighting support for Terra Bella estate homes in Westlake, TX. Licensed service for wooded one-acre lots and preserve-adjacent landscapes.'
        heroTitle='Terra Bella Sprinkler Services in Westlake, TX'
        heroDescription='Licensed irrigation, sprinkler repair, drainage, and lighting service for Terra Bella’s gated Westlake estate lots with mature trees, one-acre homesites, and a neighboring nature preserve.'
        introHeading='Irrigation and Drainage Planning for Terra Bella Estate Lots'
        intro='Terra Bella is a small gated Westlake enclave of about 28 estate homes on roughly 55 acres, next to a 22.6-acre open-space preserve with a hike-and-bike trail and natural brook. One-acre wooded lots mean irrigation has to serve mature trees, turf openings, and preserve-facing edges without saturating root zones or pushing runoff into natural drainage. Texas Best Sprinklers, Drainage and Lighting helps Terra Bella homeowners diagnose zone problems, repair components, tune seasonal schedules, and plan drainage that respects the neighborhood’s low-density, wooded character.'
        highlights={[
          'Licensed irrigator service for Terra Bella’s limited number of one-acre estate lots, where each property has its own mix of canopy, turf, and preserve edge.',
          'Root-zone aware watering for mature oaks and wooded beds so trunks are not soaked while turf still receives even coverage.',
          'Controller programming and nozzle selection for large, private lots that do not behave like typical suburban spray layouts.',
          'Drainage planning near the preserve, brook, and trail so stormwater and irrigation runoff do not erode natural edges.',
          'Outdoor lighting service for gated entries, tree canopies, and long driveways common on Terra Bella homesites.'
        ]}
        serviceFocus={[
          'Sprinkler repair for broken heads, leaking valves, low-pressure zones, and coverage gaps across wooded estate lawns and beds.',
          'Irrigation repair and controller troubleshooting for systems that overwater shade or leave sunny turf thin.',
          'Smart controller setup and seasonal runtime optimization for Westlake watering schedules.',
          'Drainage solutions for standing water, clay-soil saturation, and runoff toward the preserve or brook corridor.',
          'Outdoor lighting service for driveways, specimen trees, and outdoor living areas throughout Terra Bella.'
        ]}
        localTips={[
          'Use cycle-and-soak watering so Westlake clay can absorb moisture on one-acre lots instead of running toward the preserve or brook.',
          'Inspect heads after storms. Tree roots and soil movement on wooded lots tilt or bury spray equipment more often than on open lawns.',
          'Keep spray off trunks and the preserve edge. Mature trees need moisture at the drip line, not constant wetting at the base.',
          'Confirm association expectations before adding lighting or changing visible drainage near common open space.',
          'Reset controller runtimes every season. Large lots waste more water than small yards when a summer program is left running into fall.'
        ]}
        reviews={[
          {
            reviewer: 'Homeowner in Terra Bella',
            date: 'March 2026',
            quote:
              'They understood that our lot is mostly canopy with a few open turf pockets. The zone changes stopped the soggy shade and the dry sunny strip at the same time.'
          },
          {
            reviewer: 'Terra Bella resident',
            date: 'February 2026',
            quote:
              'Careful around the trees and the preserve-facing fence line. The drainage recommendation was practical instead of oversized.'
          },
          {
            reviewer: 'Family in Terra Bella, Westlake',
            date: 'January 2026',
            quote:
              'Professional, clear pricing, and a controller that now matches how this wooded lot actually dries out after rain.'
          }
        ]}
        considerations={[
          {
            title: 'One-Acre Wooded Homesites',
            description:
              'Terra Bella’s roughly 28 lots are built around privacy and mature trees. Irrigation layouts need longer laterals, mixed sun and shade zones, and head placement that can be maintained as canopy continues to grow.'
          },
          {
            title: 'Preserve, Trail, and Brook Edges',
            description:
              'A 22.6-acre open-space preserve with a hike-and-bike trail and natural brook sits next to the community. Runoff from large lawns should move away from foundations without accelerating erosion into those natural areas.'
          },
          {
            title: 'Low-Density Gated Setting',
            description:
              'With only a few dozen homes, each property is highly visible to its owners and association. Repairs should be clean, quiet, and consistent with the wooded estate character rather than a high-volume suburban spray pattern.'
          },
          {
            title: 'Clay Soil Under Canopy',
            description:
              'Westlake clay plus shade slows drying after rain and after irrigation. Cycle-and-soak scheduling and drip in beds help water reach roots without keeping the surface constantly wet.'
          }
        ]}
        pricing={[
          { label: 'Sprinkler Repair Visit', range: '$175–$475 typical scope' },
          { label: 'Smart Controller Upgrade', range: '$475–$1,100 installed' },
          { label: 'Drainage Improvement', range: '$1,800–$7,500 based on layout' },
          { label: 'Outdoor Lighting Service', range: '$300–$2,500 depending on scope' }
        ]}
        processSteps={[
          'Schedule a Terra Bella site assessment and describe irrigation, drainage, or lighting concerns',
          'Walk each zone, including canopy, turf openings, and preserve-facing edges',
          'Review findings and repair, upgrade, or drainage recommendations before work begins',
          'Complete clean repairs with careful protection of mature trees and root zones',
          'Calibrate seasonal runtimes and provide guidance for Westlake watering windows'
        ]}
        faqs={[
          {
            question: 'Can you service gated Terra Bella properties in Westlake?',
            answer:
              'Yes. We coordinate access, work quietly on estate lots, and plan irrigation and drainage around mature trees and preserve-adjacent landscape edges.'
          },
          {
            question: 'How do you irrigate around large trees without damaging them?',
            answer:
              'We look at head placement, nozzle output, and runtimes at the drip line rather than soaking trunks. Drip or lower-flow delivery in beds is often a better fit than spray against bark and mulch.'
          },
          {
            question: 'Do you help with drainage toward the preserve or brook?',
            answer:
              'Yes. We evaluate grade, downspouts, and irrigation runoff so water leaves the home site without creating erosion or standing water along natural edges.'
          },
          {
            question: 'What upgrades make sense on a one-acre Terra Bella lot?',
            answer:
              'Smart controllers, pressure-regulated heads, matched nozzles, drip conversion for wooded beds, and valve updates are common upgrades that improve efficiency without changing the neighborhood’s wooded character.'
          }
        ]}
        relatedAreas={[
          {
            name: 'Glenwyck Farms',
            description: 'Wooded one-acre irrigation and creek-adjacent drainage service in Westlake.',
            link: '/westlake/glenwyck-farms'
          },
          {
            name: 'Vaquero',
            description: 'Large-lot irrigation and pressure management in Westlake’s guard-gated golf community.',
            link: '/westlake/vaquero'
          },
          {
            name: 'Granada',
            description: 'Sprinkler repair and seasonal tuning for luxury Westlake homes near Dove Road.',
            link: '/westlake/granada'
          }
        ]}
        popularServices={[
          {
            title: 'Sprinkler Repair',
            description: 'Broken heads, valve leaks, wiring issues, low pressure, and uneven coverage corrections for wooded estate lots.',
            link: '/westlake/sprinkler-repair-services-in-westlake-tx'
          },
          {
            title: 'Irrigation Repair',
            description: 'System-level diagnostics for zone control, controller performance, pressure, and scheduling.',
            link: '/westlake/irrigation-repair-services-in-westlake-tx'
          },
          {
            title: 'Drainage Solutions',
            description: 'French drains, grading adjustments, and runoff planning near preserve edges and clay-soil low spots.',
            link: '/services/drainage-solutions'
          },
          {
            title: 'Sprinkler Installation',
            description: 'New irrigation system design and installation for Westlake homes adding or replacing coverage.',
            link: '/westlake/sprinkler-installation-services-in-westlake-tx'
          }
        ]}
        attractions={[
          {
            name: 'Terra Bella Open-Space Preserve',
            url: 'https://www.westlake-tx.org/86/Residential-Subdivisions',
            description: 'A 22.6-acre preserve with a hike-and-bike trail and natural brook next to Terra Bella’s gated estate lots.'
          },
          {
            name: 'Westlake Academy',
            url: 'https://www.westlakeacademy.org',
            description: 'Westlake’s IB charter school; Terra Bella families may also attend Carroll ISD campuses in nearby Southlake.'
          },
          {
            name: 'Town of Westlake',
            url: 'https://www.westlake-tx.org',
            description: 'Town resources for water utilities, planning, and residential subdivision standards.'
          },
          {
            name: 'Southlake Town Square',
            url: 'https://www.southlaketownsquare.com/',
            description: 'About a 10-minute drive for shopping, dining, and events from Terra Bella via Dove Road and Highway 114.'
          }
        ]}
        localLivingContent={
          <>
            <p>
              Terra Bella is one of Westlake’s smallest gated neighborhoods: about 28 homes on wooded acre-plus lots beside preserved open space. Daily living is quiet, private, and oriented around trees, trails, and a short drive to Southlake and Highway 114.
            </p>
            <p>
              Texas Best Sprinklers, Drainage and Lighting serves Terra Bella alongside nearby{' '}
              <a
                href='/westlake/glenwyck-farms'
                className='font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4'
              >
                Glenwyck Farms
              </a>{' '}
              and the rest of the{' '}
              <a
                href='/westlake'
                className='font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4'
              >
                Westlake service area
              </a>
              . These lots reward irrigation that works with canopy and natural drainage instead of fighting them.
            </p>
          </>
        }
      />
      <section className='py-12 px-4 bg-white'>
        <div className='mx-auto max-w-4xl prose prose-slate lg:prose-lg'>
          <h2 className='text-2xl font-bold text-slate-800 mb-6'>About the Terra Bella Area</h2>
          <p>
            Terra Bella is a gated 54.7-acre Westlake development with about 28 estate-style homes. Many lots are one acre and heavily wooded. The community includes access to a 22.6-acre open-space preserve with walking trails along a natural brook, which is why drainage and irrigation at the lot edge matter as much as coverage in the front yard.
          </p>
          <p>
            Families typically use Carroll ISD or{' '}
            <a href='https://www.westlakeacademy.org' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              Westlake Academy
            </a>
            . Dove Road connects east to Highway 114, DFW Airport, and Southlake Town Square. The neighborhood is listed among Westlake’s{' '}
            <a href='https://www.westlake-tx.org/86/Residential-Subdivisions' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              residential subdivisions
            </a>
            , and landscape or drainage changes should respect both association standards and town guidance.
          </p>
          <p>
            Water service and conservation schedules come through{' '}
            <a href='https://www.westlake-tx.org/171/Water-Utilities' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              Westlake water utilities
            </a>
            . On wooded one-acre lots, a well-tuned system protects trees, turf, and the preserve edge through North Texas heat and storm cycles.
          </p>
        </div>
      </section>
    </>
  );
}
