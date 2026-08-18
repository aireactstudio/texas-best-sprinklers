'use client';

import Link from 'next/link';
import { Fragment } from 'react';

const linkClass = 'text-irrigation-blue hover:underline font-semibold';

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <Fragment key={index}>{part}</Fragment>;
        const [, label, href] = match;
        if (href.startsWith('/')) {
          return (
            <Link key={index} href={href} className={linkClass}>
              {label}
            </Link>
          );
        }
        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {label}
          </a>
        );
      })}
    </>
  );
}

const SECTIONS: Array<{ heading: string; paragraphs: string[] }> = [
  {
    heading: 'Why Southlake yards need a local approach',
    paragraphs: [
      'Southlake landscapes are unique. Heavy clay soils, maturing trees, and strict but sensible watering rules mean your yard in Carillon, Timarron, Southlake Meadows, Coventry Manor, Timber Lake, Kirkwood Hollow, or Shady Oaks behaves differently than a lawn just a few miles away.',
      'The city’s mix of established neighborhoods and newer builds, from lots near [Southlake Town Square](https://www.southlaketownsquare.com/) to homes around [Bob Jones Park](https://www.experiencesouthlaketexas.com/695/Bob-Jones-Park), creates real variation in drainage, sunlight, and water pressure. Successful irrigation, drainage, sod, and outdoor lighting in ZIP 76092 always starts with understanding how Southlake’s clay soils, city requirements, and regional water supplies work together.',
      'Southlake homeowners also operate under local rules and resources that directly affect how and when you water, how you manage runoff, and who can legally work on your sprinkler system. Knowing those details helps protect your landscape investment and keeps you in step with the [City of Southlake](https://www.cityofsouthlake.com/) and regional water providers. The city’s [resident resources](https://www.cityofsouthlake.com/1543/Resident-Resources) directory is a useful starting point for utilities, permits, and neighborhood programs.',
    ],
  },
  {
    heading: 'Irrigation in Southlake: rules, systems, and smart watering',
    paragraphs: [
      'Southlake follows a year-round, twice-per-week watering schedule outlined on the city’s [Water Smart, Outside](https://www.cityofsouthlake.com/2776/Water-Smart-Outside) page. Even-numbered addresses water on Wednesday and Saturday, while odd-numbered addresses water on Thursday and Sunday.',
      'Automatic sprinkler systems can only run between 6:00 p.m. and 10:00 a.m. on those designated days, which aligns watering with cooler temperatures and less wind. Hand-held hose watering is allowed outside those hours, giving you flexibility for spot-watering new plants or problem areas while still honoring the city’s [water conservation plan](https://www.cityofsouthlake.com/1055/Water-Conservation) and the [water conservation ordinance](https://library.municode.com/tx/southlake/codes/code_of_ordinances?nodeId=SPAGEOR_CH19UT_ARTIIWA_DIV3WACO).',
      'Any new irrigation system in Southlake requires a permit through the city’s [online permitting and inspections](https://www.cityofsouthlake.com/1835/Online-Permitting-and-Inspections) portal. Ordinary repairs like replacing a broken head or fixing a short section of pipe typically do not require a permit, but they still must follow the city’s [landscape irrigation guidelines](https://www.cityofsouthlake.com/DocumentCenter/View/45655/Irrigation-Guidelines).',
      'Texas requires that irrigation systems be designed and installed by a state-licensed irrigator. The [TCEQ landscape irrigator licensing](https://www.tceq.texas.gov/licensing/licenses/lilic) program and the agency’s [landscape irrigation rules](https://www.tceq.texas.gov/drinkingwater/irrigation) cover who can sell, design, install, and repair systems in this state. When you schedule [sprinkler installation](/services/sprinkler-installation), it is important to confirm that your contractor holds the appropriate license and understands Southlake’s specific permitting requirements.',
      'For homeowners who want a professional check on existing systems, Southlake participates in the [W.I.S.E. Guys sprinkler evaluation](https://www.cityofsouthlake.com/2777/WISE-Guys---Sprinkler-Evaluation) program. Pairing an evaluation like this with a routine [sprinkler system check-up](/services/sprinkler-system-check-up) helps catch hidden leaks, misaligned heads, and poor scheduling that waste water and stress your lawn.',
      'Regional water supplies from the [Tarrant Regional Water District](https://www.trwd.com/) and conservation education through [Save Tarrant Water](https://www.savetarrantwater.com/) and [Water is Awesome weekly watering advice](https://waterisawesome.com/weekly-watering-advice/) give Southlake residents up-to-date recommendations on how much to water each week. When we tune controllers in neighborhoods like Timber Lake or Shady Oaks, we often combine those weekly guidelines with on-the-ground observations of your specific lawn and plantings.',
    ],
  },
  {
    heading: 'Clay soils, sod, and land leveling in Southlake yards',
    paragraphs: [
      'Much of Tarrant County, including Southlake, features dense, shrinking and swelling clay soils. The USDA describes similar heavy clays in the [Houston Black soil series](https://soilseries.sc.egov.usda.gov/OSD_Docs/H/HOUSTON_BLACK.html), and while local soils vary, Southlake homeowners face the same core challenges: poor infiltration, compaction, and seasonal cracking.',
      'On flat or gently sloped lots in Southlake Meadows or Coventry Manor, clay soils can cause water to pool, run off, or sit against foundations and patios. Proper grading and [sod and land leveling](/services/sod-and-land-leveling) create a subtle but intentional slope away from the house, helping water move toward safe discharge points instead of into your flower beds or under your slab.',
      'When installing new sod, Texas-specific resources from [Texas A&M AgriLife Extension](https://agrilifeextension.tamu.edu/) emphasize preparing clay soils with surface contouring and good contact between soil and sod. In Southlake, that often means addressing low spots that collect water, correcting uneven builder-grade yards, and tying new grades into existing fences, driveways, and neighboring lawns.',
      'A new lawn in Carillon or Timarron might look perfectly flat on move-in day, but the first spring storm can reveal low-lying seams where water lingers for days. Leveling combined with tuned [drip irrigation](/services/drip-irrigation) in beds can reduce runoff while helping turf establish deep roots, especially under the shade of large oaks or elms common around [Experience Southlake parks](https://www.experiencesouthlaketexas.com/302/About-Parks-Facilities).',
    ],
  },
  {
    heading: 'Drainage and stormwater: protecting foundations and landscapes',
    paragraphs: [
      'Southlake treats stormwater seriously, and homeowners are part of that system. The city’s page on [stormwater and drainage in Southlake](https://www.cityofsouthlake.com/4368/Stormwater-and-Drainage-in-Southlake) explains how runoff flows from private property into streets and public drainage channels, and [Your Property & Drainage](https://www.cityofsouthlake.com/4369/Your-Property-and-Drainage) spells out what the city maintains versus what stays the homeowner’s or HOA’s responsibility.',
      'The city’s [storm drainage policy](https://library.municode.com/tx/southlake/codes/code_of_ordinances?nodeId=SPAGEOR_CH9.5EN_ARTIISTDRPO) outlines responsibilities for managing on-site drainage without creating problems for neighbors or public infrastructure. In practical terms, that means the way your downspouts, French drains, and grading are designed in Timber Lake or Kirkwood Hollow needs to move water efficiently without sending it across property lines or eroding shared easements.',
      'Standing water is more than a nuisance. On Southlake’s clay-heavy lots, chronic saturation near foundations can contribute to movement, landscape plant loss, and mosquito breeding. Custom [drainage solutions](/services/drainage-solutions) such as [French drains](/services/french-drains), catch basins, and surface swales help capture roof and yard runoff and direct it toward appropriate discharge points.',
      'Any time digging is involved, whether for drainage trenches, irrigation lines, or landscape lighting, homeowners should contact [Texas 811](https://texas811.org/) before work begins. Texas law requires a locate request at least two business days before excavating, even in your own backyard. That is especially important in established areas near [Carroll ISD](https://www.southlakecarroll.edu/) campuses, where utilities and communication lines may cross multiple yards.',
      'Because irrigation systems tie into the potable water supply, Southlake also maintains a [backflow prevention program](https://www.cityofsouthlake.com/2453/Backflow-Prevention-Program). Ensuring backflow assemblies are installed and tested as required protects both your home and the city’s water system and is an essential step when connecting new or expanded sprinkler zones.',
    ],
  },
  {
    heading: 'Outdoor lighting for Southlake homes and outdoor living',
    paragraphs: [
      'Southlake’s outdoor lifestyle, from evening walks at [Bob Jones Nature Center & Preserve](https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve) to dinner around Town Square and other spots listed by [Visit Southlake](https://visitsouthlaketexas.com/), extends naturally into backyard spaces. Thoughtful [outdoor lighting](/services/outdoor-lighting) allows homeowners to enjoy patios, pools, and front elevations safely and beautifully after dark.',
      'Texas Best Sprinklers recently completed an architectural LED lighting project for a white-brick Southlake home, featuring soft wall-washing, chimney and entry accents, tree uplights, and driveway lanterns. The photos on this Southlake page and our [projects](/projects) page show how layered lighting can highlight brick textures, rooflines, and mature trees without creating glare for neighbors.',
      'In neighborhoods like Carillon or Shady Oaks, many homeowners want to balance curb appeal with dark-sky awareness, focusing fixtures downward and using warmer color temperatures to reduce sky glow. Path lighting along curved drives, subtle step lights on front porches, and gentle uplighting on specimen trees can transform a home’s nighttime presence while helping guests navigate walkways safely.',
      'Outdoor lighting and irrigation often intersect. When we design lighting for homes near civic and park corridors, we carefully route wiring to avoid existing irrigation lines. Coordinating [sprinkler repair](/services/sprinkler-repair), [irrigation repair](/services/irrigation-repair), and lighting installation together helps prevent one system from damaging another.',
    ],
  },
  {
    heading: 'Smart water use, monitoring, and Southlake-specific tools',
    paragraphs: [
      'Southlake homeowners have access to several tools that make managing water use easier. The city promotes [EyeOnWater](https://southlaketx.eyeonwater.com/), which allows residents to track water consumption, spot potential leaks, and see the impact of irrigation adjustments in near real-time.',
      'Combining EyeOnWater monitoring with a professionally tuned controller and weather-based scheduling gives you a practical way to keep your landscape healthy while respecting the watering schedule on [Water Smart, Outside](https://www.cityofsouthlake.com/2776/Water-Smart-Outside). When Texas Best Sprinklers adjusts controllers in Timarron or Southlake Meadows, we often reference those local rules and regional advice from Water is Awesome to keep run times matched to seasonal needs.',
      'Because irrigation requires specialized knowledge, Southlake homeowners benefit from working with contractors who understand both state and local requirements. TCEQ licensing exists to ensure irrigators meet training and continuing education standards, and Southlake’s permitting and inspection processes are designed to protect homeowners and the broader community.',
    ],
  },
  {
    heading: 'Working with a local contractor who knows Southlake',
    paragraphs: [
      'Texas Best Sprinklers focuses on North Texas communities like Southlake and nearby [Keller](/keller), [Colleyville](/colleyville), [Grapevine](/grapevine), and [Westlake](/westlake), but every Southlake project is designed around this city’s specific soils, drainage patterns, and watering rules. Whether we are tuning a controller in Coventry Manor, installing [drip irrigation](/services/drip-irrigation) in a shaded Timarron courtyard, or redesigning drainage for a sloped lot in Kirkwood Hollow, we start with how water actually moves across your property.',
      'If you are planning a new irrigation system, addressing drainage issues, re-sodding and leveling your yard, or adding architectural outdoor lighting in Southlake, Texas Best Sprinklers can help you align your project with city requirements and local conditions. To discuss your Southlake home and schedule a free estimate, reach out through our [contact](/contact) page.',
    ],
  },
];

export default function SouthlakeSEOArticle() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-irrigation-gray/40 to-white pointer-events-none" />
      <div className="container-custom relative">
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
          <div className="px-6 sm:px-10 py-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-irrigation-blue mb-3">
              Southlake Service Area Guide
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
              Southlake Irrigation, Drainage &amp; Outdoor Lighting Essentials
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Practical guidance for Southlake homeowners on irrigation, drainage, sod and land leveling, and outdoor
              lighting — grounded in city watering rules, clay soils, and neighborhood conditions.
            </p>

            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-gray-700 leading-relaxed mb-4">
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            ))}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-irrigation-blue px-4 py-2 text-white font-semibold shadow hover:bg-irrigation-darkBlue transition"
              >
                Request a Southlake Estimate
              </Link>
              <Link
                href="/services/outdoor-lighting"
                className="inline-flex items-center rounded-md bg-white px-4 py-2 text-irrigation-blue font-semibold border border-irrigation-blue hover:bg-irrigation-gray/40 transition"
              >
                Outdoor Lighting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
