import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';

export default function GranadaPage() {
  return (
    <>
      <NeighborhoodPageTemplate
        cityName='Westlake'
        citySlug='westlake'
        neighborhoodName='Granada'
        canonicalUrl='https://sprinkleranddrains.com/westlake/granada'
        pageTitle='Granada Sprinkler Services in Westlake, TX'
        metaDescription='Sprinkler repair, irrigation tuning, drainage planning, and lighting support for Granada homeowners in Westlake, TX. Licensed service for luxury lots near Dove Road and Solana.'
        heroTitle='Granada Sprinkler Services in Westlake, TX'
        heroDescription='Licensed irrigation, sprinkler repair, drainage, and lighting service for Granada’s luxury Westlake homes with generous lots, HOA landscape standards, and North Texas clay soil.'
        introHeading='Irrigation Planning for Granada Properties'
        intro='Granada is an 84-home luxury subdivision on about 84 acres between Dove Road and Solana Boulevard in Westlake. Lots typically run from roughly 23,500 to 30,000 square feet, which is large enough for substantial turf and beds but more compact than one-acre estate neighborhoods nearby. Texas Best Sprinklers, Drainage and Lighting helps Granada homeowners keep coverage even, repair aging or undersized components, tune controllers for Westlake watering windows, and plan drainage that protects foundations and curb appeal.'
        highlights={[
          'Licensed irrigator service for Granada homeowners who need reliable diagnostics, repair, and seasonal calibration on Westlake luxury lots.',
          'Coverage balancing for front lawns that face neighborhood streets where HOA curb appeal is highly visible.',
          'Controller programming and nozzle matching for mixed turf, foundation beds, and side-yard landscape lines.',
          'Drainage recommendations for clay-soil pooling, downspout discharge, and low corners after heavy rain.',
          'Outdoor lighting service for entries, specimen trees, and walkways that match Granada’s established street character.'
        ]}
        serviceFocus={[
          'Sprinkler repair for broken heads, leaking valves, overspray onto drives, and dry bands along beds and sidewalks.',
          'Irrigation repair and controller troubleshooting for systems that skip zones, run too long, or waste water on compact estate lots.',
          'Smart controller setup and seasonal runtime optimization for Westlake watering schedules.',
          'Drainage solutions for standing water, fence-line runoff, and saturation near patios and foundations.',
          'Outdoor lighting service for front entries, trees, and outdoor living spaces throughout Granada.'
        ]}
        localTips={[
          'Use cycle-and-soak watering so Westlake clay can absorb moisture before it sheds toward Dove Road gutters or neighboring lots.',
          'Check spray alignment after landscape work. Granada lots are large enough for mature beds that quickly block or tilt heads.',
          'Inspect valve boxes before summer. Slow leaks on these properties can raise water use without an obvious wet spot in the front yard.',
          'Adjust runtimes in spring and fall so the system is not still running a peak-August schedule.',
          'Review HOA landscape expectations before adding lighting or changing visible irrigation layout along the street.'
        ]}
        reviews={[
          {
            reviewer: 'Homeowner in Granada',
            date: 'March 2026',
            quote:
              'They corrected overspray onto the driveway and rebalanced the front zones so the lawn color finally matches from curb to bed line.'
          },
          {
            reviewer: 'Granada resident',
            date: 'February 2026',
            quote:
              'Clear pricing, careful work around existing landscaping, and a controller schedule that actually fits Westlake watering days.'
          },
          {
            reviewer: 'Family in Granada, Westlake',
            date: 'January 2026',
            quote:
              'The side-yard drainage issue had been lingering for two summers. They explained the grade problem and fixed the irrigation contribution the same visit.'
          }
        ]}
        considerations={[
          {
            title: 'Visible Street Frontage',
            description:
              'Granada lots are sized for substantial homes and landscaping, and street views are a core part of the neighborhood. Uneven turf, misting heads, and overspray onto pavement show immediately. Matched nozzles and pressure regulation keep the front presentation consistent.'
          },
          {
            title: 'Compact Estate Layouts',
            description:
              'Compared with one-acre Westlake neighborhoods, Granada lots pack more landscape into a smaller envelope. Zones often need tighter throw, better head spacing, and drip in beds so shrubs are not soaked by turf spray.'
          },
          {
            title: 'Dove Road and Solana Corridor Drainage',
            description:
              'The neighborhood sits between Dove Road and Solana Boulevard. Stormwater and irrigation runoff need a clear path away from slabs and neighboring yards. We look at both irrigation contribution and lot grade when pooling appears.'
          },
          {
            title: 'Westlake Clay and Seasonal Heat',
            description:
              'Clay soil in this part of town rejects long watering cycles. Cycle-and-soak programming and seasonal controller updates protect turf without creating runoff during summer restrictions.'
          }
        ]}
        pricing={[
          { label: 'Sprinkler Repair Visit', range: '$175–$475 typical scope' },
          { label: 'Smart Controller Upgrade', range: '$475–$1,100 installed' },
          { label: 'Drainage Improvement', range: '$1,800–$7,500 based on layout' },
          { label: 'Outdoor Lighting Service', range: '$300–$2,500 depending on scope' }
        ]}
        processSteps={[
          'Schedule a Granada site assessment',
          'Walk each zone and document pressure, coverage, leaks, and controller settings',
          'Review repair, upgrade, or drainage recommendations before work begins',
          'Complete clean repairs with durable components and careful landscape protection',
          'Calibrate runtimes and review Westlake watering guidance'
        ]}
        faqs={[
          {
            question: 'Do you service Granada homes in Westlake?',
            answer:
              'Yes. We provide sprinkler repair, irrigation diagnostics, drainage planning, and outdoor lighting support throughout Granada and the rest of the Westlake service area.'
          },
          {
            question: 'Can most Granada sprinkler repairs be finished in one visit?',
            answer:
              'Most common repairs such as broken heads, minor leaks, clogged nozzles, and controller adjustments can often be completed in one visit when standard parts are available. Larger valve, wiring, or drainage work may need a follow-up scope.'
          },
          {
            question: 'How do you keep irrigation from spraying drives and sidewalks?',
            answer:
              'We check head spacing, nozzle type, pressure, and tilt. On Granada’s street-facing lawns, matched precipitation and pressure regulation usually stop misting and overspray without starving the turf.'
          },
          {
            question: 'Can you also look at drainage during a sprinkler visit?',
            answer:
              'Yes. If water sits along a fence, patio, or foundation, we can evaluate those areas during the visit and recommend practical drainage options that fit the lot.'
          }
        ]}
        relatedAreas={[
          {
            name: 'Vaquero',
            description: 'Estate-lot irrigation and drainage service for Westlake’s guard-gated golf community.',
            link: '/westlake/vaquero'
          },
          {
            name: 'Entrada',
            description: 'Sprinkler, drainage, and lighting support for Westlake’s mixed-use village homes and villas.',
            link: '/westlake/entrada'
          },
          {
            name: 'Glenwyck Farms',
            description: 'Large-lot irrigation and creek-adjacent drainage planning in Westlake.',
            link: '/westlake/glenwyck-farms'
          }
        ]}
        popularServices={[
          {
            title: 'Sprinkler Repair',
            description: 'Broken heads, valve leaks, wiring issues, low pressure, and uneven coverage corrections.',
            link: '/westlake/sprinkler-repair-services-in-westlake-tx'
          },
          {
            title: 'Irrigation Repair',
            description: 'System-level diagnostics for zone control, controller performance, pressure, and scheduling.',
            link: '/westlake/irrigation-repair-services-in-westlake-tx'
          },
          {
            title: 'Drainage Solutions',
            description: 'French drains, runoff planning, and practical fixes for low spots and pooling concerns.',
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
            name: 'Solana Business Park',
            url: 'https://www.westlake-tx.org',
            description: 'The nearby Westlake employment and office corridor along Solana Boulevard, a short drive from Granada streets.'
          },
          {
            name: 'Westlake Academy',
            url: 'https://www.westlakeacademy.org',
            description: 'Westlake’s IB charter school, a frequent school option for Granada families along with Carroll ISD campuses.'
          },
          {
            name: 'Town of Westlake',
            url: 'https://www.westlake-tx.org',
            description: 'Municipal hub for water utilities, planning, and subdivision standards that affect irrigation and drainage projects.'
          }
        ]}
        localLivingContent={
          <>
            <p>
              Granada sits north of Dove Road and south of Solana Boulevard in Westlake, with about 84 luxury homes on generously sized lots. Daily living mixes quiet residential streets with quick access to Highway 114, Southlake shopping, and Westlake’s office corridor.
            </p>
            <p>
              Texas Best Sprinklers, Drainage and Lighting serves the{' '}
              <a
                href='/westlake'
                className='font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4'
              >
                Westlake service area
              </a>{' '}
              including nearby{' '}
              <a
                href='/westlake/vaquero'
                className='font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4'
              >
                Vaquero
              </a>{' '}
              and{' '}
              <a
                href='/westlake/terra-bella'
                className='font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4'
              >
                Terra Bella
              </a>
              . Granada properties benefit from irrigation work that respects HOA street presentation and Westlake clay-soil watering limits.
            </p>
          </>
        }
      />
      <section className='py-12 px-4 bg-white'>
        <div className='mx-auto max-w-4xl prose prose-slate lg:prose-lg'>
          <h2 className='text-2xl font-bold text-slate-800 mb-6'>About the Granada Area</h2>
          <p>
            Granada is a Westlake luxury subdivision of about 84 homes on roughly 84 acres. Town zoning for the community sets a minimum lot size around 23,500 square feet and an average near 30,000 square feet, with substantial minimum home sizes. The result is an upscale but more compact estate feel than one-acre neighborhoods such as Glenwyck Farms or Terra Bella.
          </p>
          <p>
            The{' '}
            <a href='https://granadahoa.com/homepage.aspx' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              Granada Residential Community HOA
            </a>{' '}
            governs common standards, and families often look to{' '}
            <a href='https://www.westlakeacademy.org' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              Westlake Academy
            </a>{' '}
            or Carroll ISD. Dove Road provides access to Highway 114, DFW Airport, and Southlake Town Square.
          </p>
          <p>
            Water use and landscape changes should follow{' '}
            <a href='https://www.westlake-tx.org/171/Water-Utilities' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              Westlake water utilities
            </a>{' '}
            guidance and association rules. Irrigation systems that keep turf even, beds healthy, and runoff off hardscape are a practical part of maintaining Granada’s street character.
          </p>
        </div>
      </section>
    </>
  );
}
