import React from 'react';
import NeighborhoodPageTemplate from '@/components/templates/NeighborhoodPageTemplate';

export default function EntradaPage() {
  return (
    <>
      <NeighborhoodPageTemplate
        cityName='Westlake'
        citySlug='westlake'
        neighborhoodName='Entrada'
        canonicalUrl='https://sprinkleranddrains.com/westlake/entrada'
        pageTitle='Entrada Sprinkler Services in Westlake, TX'
        metaDescription='Sprinkler repair, irrigation tuning, drainage planning, and lighting support for Entrada homes, villas, and townhomes in Westlake, TX. Licensed service around canals, hardscape, and mixed-use landscape.'
        heroTitle='Entrada Sprinkler Services in Westlake, TX'
        heroDescription='Licensed irrigation, sprinkler repair, drainage, and lighting service for Entrada at Westlake, a walkable mixed-use village with villas, townhomes, canals, and tightly designed landscape beds.'
        introHeading='Irrigation and Drainage Planning for Entrada Properties'
        intro='Entrada at Westlake is a European-style mixed-use village of about 80 acres at SH 114 and Davis Boulevard. Homes include single-family villas, townhomes, and condominiums around canals, a lake, cobblestone-style streets, and on-site retail. Irrigation here is not a wide suburban lawn problem. It is a tight mix of small turf, foundation beds, hardscape edges, and water features where overspray, drainage, and controller timing show immediately. Texas Best Sprinklers, Drainage and Lighting helps Entrada residents repair heads and valves, keep water off walks and canals, and plan drainage that protects finishes without wasting water.'
        highlights={[
          'Licensed irrigator service for Entrada villas, townhomes, and condos where landscape zones sit close to hardscape, entries, and water amenities.',
          'Overspray control so spray heads do not wet cobblestone walks, garage aprons, or canal edges.',
          'Controller programming for smaller, more frequent zones that dry differently than estate-lot turf in nearby Westlake neighborhoods.',
          'Drainage planning around canals, lake edges, downspouts, and patio courtyards that can hold water after storms.',
          'Outdoor lighting service for walkways, entries, trees, and common-area-facing elevations in a walkable village setting.'
        ]}
        serviceFocus={[
          'Sprinkler repair for broken heads, leaking valves, low-pressure zones, and coverage gaps in compact turf and bed areas.',
          'Irrigation repair and controller troubleshooting for systems that soak hardscape or miss narrow planting strips.',
          'Smart controller setup and seasonal runtime optimization for Westlake watering schedules.',
          'Drainage solutions for courtyard pooling, downspout discharge, and runoff toward canals or building foundations.',
          'Outdoor lighting service for entries, walkways, and landscape features throughout Entrada.'
        ]}
        localTips={[
          'Prefer drip or low-angle nozzles in narrow beds. Full-circle spray on compact Entrada lots often hits stone, glass, and neighboring units.',
          'Check drains and canal-adjacent grades after heavy rain. Mixed-use paving can send water toward doors if irrigation and storm flow stack up.',
          'Inspect heads after landscape or hardscape work. Tight planting pockets are easy to block with new shrubs or mulch buildup.',
          'Shorten runtimes in spring and fall. Small turf areas overwater quickly when a summer program is left unchanged.',
          'Confirm association rules before adding lighting or changing visible irrigation along shared streets and water amenities.'
        ]}
        reviews={[
          {
            reviewer: 'Homeowner in Entrada',
            date: 'March 2026',
            quote:
              'They stopped the overspray onto our walk and converted a bed to drip. The courtyard finally dries between cycles instead of staying slick.'
          },
          {
            reviewer: 'Entrada resident',
            date: 'February 2026',
            quote:
              'Good communication in a compact neighborhood. They repaired a leaking valve without tearing up the finished landscape around the canal side.'
          },
          {
            reviewer: 'Family in Entrada, Westlake',
            date: 'January 2026',
            quote:
              'The controller was still on a large-lawn schedule. They reset it for our small turf and beds, and water use dropped immediately.'
          }
        ]}
        considerations={[
          {
            title: 'Compact Villas, Townhomes, and Courtyards',
            description:
              'Entrada’s residential mix is denser than Westlake’s estate neighborhoods. Zones are shorter, planting strips are narrower, and mistakes show on hardscape. Nozzle choice and drip conversion matter more than adding more spray.'
          },
          {
            title: 'Canals, Lake, and Water Amenities',
            description:
              'The village is organized around water features, bridges, and lakeside landscape. Irrigation runoff and drainage need to stay out of canals and off building walls. We look at both spray direction and surface flow.'
          },
          {
            title: 'Walkable Mixed-Use Streets',
            description:
              'Retail, dining, a school, and residences share the same 80-acre site. Work has to stay tidy, and irrigation should not soak public walks or storefront-facing pavement that residents and visitors use daily.'
          },
          {
            title: 'Westlake Clay Under Paving',
            description:
              'Clay soil plus courtyards and compacted paving can hold water against slabs. Cycle-and-soak for remaining turf, drip in beds, and clear drainage paths reduce that saturation.'
          }
        ]}
        pricing={[
          { label: 'Sprinkler Repair Visit', range: '$175–$475 typical scope' },
          { label: 'Smart Controller Upgrade', range: '$475–$1,100 installed' },
          { label: 'Drainage Improvement', range: '$1,800–$7,500 based on layout' },
          { label: 'Outdoor Lighting Service', range: '$300–$2,500 depending on scope' }
        ]}
        processSteps={[
          'Schedule an Entrada site assessment and describe irrigation, drainage, or lighting concerns',
          'Walk turf, beds, hardscape edges, and any canal- or courtyard-adjacent zones',
          'Review repair, drip conversion, or drainage recommendations before work begins',
          'Complete clean repairs with careful protection of finished paving and plantings',
          'Calibrate runtimes for compact zones and review Westlake watering guidance'
        ]}
        faqs={[
          {
            question: 'Do you service Entrada villas, townhomes, and condos?',
            answer:
              'Yes. We work on compact residential irrigation systems throughout Entrada, including shared-edge lots where spray, drip, and drainage have to respect neighboring units and common walks.'
          },
          {
            question: 'Can you stop sprinklers from soaking walks and canal edges?',
            answer:
              'Yes. We adjust or replace nozzles, correct head tilt, lower pressure where needed, and often convert narrow beds to drip so water stays in planting soil instead of on stone and water amenities.'
          },
          {
            question: 'Is drainage different here than in estate Westlake neighborhoods?',
            answer:
              'Often yes. Courtyards, paving, and canals change how stormwater moves. We look at downspouts, surface slope, and irrigation contribution together instead of treating drainage as a simple backyard swale.'
          },
          {
            question: 'Do you follow Westlake watering guidelines at Entrada?',
            answer:
              'Yes. We program controllers within Westlake water-utility conservation schedules and help you match runtimes to small turf and bed zones rather than a large-lawn default.'
          }
        ]}
        relatedAreas={[
          {
            name: 'Granada',
            description: 'Irrigation repair and seasonal tuning for luxury Westlake homes near Dove Road and Solana.',
            link: '/westlake/granada'
          },
          {
            name: 'Glenwyck Farms',
            description: 'Estate-lot irrigation and creek-adjacent drainage planning in Westlake.',
            link: '/westlake/glenwyck-farms'
          },
          {
            name: 'Vaquero',
            description: 'Large-lot sprinkler and drainage service in Westlake’s guard-gated golf community.',
            link: '/westlake/vaquero'
          }
        ]}
        popularServices={[
          {
            title: 'Sprinkler Repair',
            description: 'Broken heads, valve leaks, overspray corrections, and coverage fixes for compact Westlake landscape zones.',
            link: '/westlake/sprinkler-repair-services-in-westlake-tx'
          },
          {
            title: 'Irrigation Repair',
            description: 'System-level diagnostics for zone control, controller performance, pressure, and scheduling.',
            link: '/westlake/irrigation-repair-services-in-westlake-tx'
          },
          {
            title: 'Drainage Solutions',
            description: 'Courtyard, downspout, and runoff planning for mixed-use paving and canal-adjacent lots.',
            link: '/services/drainage-solutions'
          },
          {
            title: 'Sprinkler Installation',
            description: 'New irrigation design and installation for Westlake homes adding or replacing coverage.',
            link: '/westlake/sprinkler-installation-services-in-westlake-tx'
          }
        ]}
        attractions={[
          {
            name: 'Entrada at Westlake',
            url: 'https://www.entradasocial.com/',
            description: 'The mixed-use village itself, with residential, retail, dining, canals, and a signature bridge inspired by Venice’s Rialto Bridge.'
          },
          {
            name: 'Chapel at Palacios',
            url: 'https://www.entradasocial.com/',
            description: 'A Spanish-villa-inspired ceremony and event venue inside Entrada, reflecting the neighborhood’s European streetscape.'
          },
          {
            name: 'Town of Westlake',
            url: 'https://www.westlake-tx.org',
            description: 'Municipal information on water utilities, planning, and standards that affect irrigation and drainage at Entrada.'
          },
          {
            name: 'Dallas Fort Worth International Airport',
            url: 'https://www.dfwairport.com',
            description: 'A short drive via SH 114 from Entrada’s location at Davis Boulevard, a primary travel corridor for Westlake residents.'
          }
        ]}
        localLivingContent={
          <>
            <p>
              Entrada is Westlake’s walkable mixed-use village rather than an estate-lot subdivision. Residents live around canals, retail, and compact landscape beds, so irrigation and drainage have to be precise. Overspray and courtyard pooling are the problems we see most often here.
            </p>
            <p>
              Texas Best Sprinklers, Drainage and Lighting serves Entrada as part of the{' '}
              <a
                href='/westlake'
                className='font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4'
              >
                Westlake service area
              </a>
              , along with nearby{' '}
              <a
                href='/westlake/granada'
                className='font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4'
              >
                Granada
              </a>{' '}
              and{' '}
              <a
                href='/westlake/vaquero'
                className='font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4'
              >
                Vaquero
              </a>
              . For leaking zones or controllers that still run like a large lawn, start with our{' '}
              <a
                href='/westlake/sprinkler-repair-services-in-westlake-tx'
                className='font-semibold text-emerald-200 hover:text-emerald-100 underline decoration-2 underline-offset-4'
              >
                Westlake sprinkler repair service
              </a>
              .
            </p>
          </>
        }
      />
      <section className='py-12 px-4 bg-white'>
        <div className='mx-auto max-w-4xl prose prose-slate lg:prose-lg'>
          <h2 className='text-2xl font-bold text-slate-800 mb-6'>About the Entrada Area</h2>
          <p>
            Entrada at Westlake is an approximately 80-acre mixed-use community on the southeast corner of SH 114 and Davis Boulevard. The design is modeled after a Catalonian village, with stone architecture, walkable streets, canals, a lake, and a signature bridge. Residential options include single-family villas, townhomes, and condominiums totaling more than 300 units, plus on-site retail, dining, and a Primrose School.
          </p>
          <p>
            The{' '}
            <a href='https://westlakeentradahoa.com/homepage.aspx' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              Westlake Entrada HOA
            </a>{' '}
            and related owners associations govern common standards. Because homes sit close to shared walks and water amenities, irrigation changes should stay within association and town expectations. Water service follows{' '}
            <a href='https://www.westlake-tx.org/171/Water-Utilities' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              Westlake water utilities
            </a>{' '}
            conservation schedules.
          </p>
          <p>
            Learn more about the village at{' '}
            <a href='https://www.entradasocial.com/' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              Entrada at Westlake
            </a>{' '}
            and town planning resources at the{' '}
            <a href='https://www.westlake-tx.org' target='_blank' rel='noopener noreferrer' className='text-emerald-700 hover:text-emerald-800 underline'>
              Town of Westlake
            </a>
            . For outdoor systems, Entrada rewards precise drip, tight spray control, and drainage that keeps courtyards and canal edges dry.
          </p>
        </div>
      </section>
    </>
  );
}
