export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  /** Plain-text fallback / short summary used by older templates */
  content: string;
  /** Full HTML body when present — preferred by the blog post page */
  contentHtml?: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  tags: string[];
};

// Blog post data (newest first)
export const blogPosts: BlogPost[] = [
  {
    id: 6,
    title: 'Land Leveling With a Bobcat Track Loader: Fixing Low Spots in North Texas Clay',
    excerpt:
      'Why Fort Worth yards settle and puddle on expansive clay — and how machine land leveling, sod, irrigation, and drainage work together to keep water moving away from your home.',
    content:
      'North Texas clay soils expand when wet and shrink when dry, which creates low spots, uneven grades, and water that pools near foundations. Machine land leveling with a compact track loader reshapes the yard so water drains correctly, then pairs with sod, irrigation adjustments, and drainage work for a finished lawn.',
    contentHtml: `
<p>If your Fort Worth-area yard has soft low spots, trip hazards, or puddles that hang around after every storm, you are not imagining it. North Texas sits on <strong>expansive clay</strong> that moves with moisture — and that movement shows up in your grade long before you notice foundation trouble.</p>

<p>When the dips get bigger than a shovel-and-wheelbarrow fix, <a href="/services/sod-and-land-leveling">professional land leveling with a Bobcat track loader</a> is how we reshape the yard so water leaves the property the way it should.</p>

<div class="not-prose my-8 grid gap-4 md:grid-cols-2">
  <figure class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    <img src="/assets/images/optimized/bobcat/bobcat-t450-front.jpg" alt="Texas Best Sprinklers Bobcat T450 compact track loader with bucket" class="h-80 w-full object-cover" />
    <figcaption class="px-4 py-3 text-sm text-gray-500">Our Bobcat T450 track loader — the machine we use for land leveling and dirt work.</figcaption>
  </figure>
  <figure class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    <img src="/assets/images/optimized/bobcat/bobcat-t450-side.jpg" alt="Side profile of Texas Best Sprinklers Bobcat T450 track loader" class="h-80 w-full object-cover" />
    <figcaption class="px-4 py-3 text-sm text-gray-500">Rubber tracks float better on soft North Texas clay than wheeled equipment.</figcaption>
  </figure>
</div>

<h2>Why North Texas clay creates low spots</h2>

<p>Much of the Dallas–Fort Worth metro sits on heavy clay soils in and around the Blackland Prairie. The USDA Natural Resources Conservation Service’s official description of the <a href="https://soilseries.sc.egov.usda.gov/OSD_Docs/H/HOUSTON_BLACK.html" target="_blank" rel="noopener noreferrer">Houston Black soil series</a> is a classic example: deep, clay-rich Vertisols that crack when dry and swell when wet.</p>

<div class="not-prose my-8 grid gap-4 sm:grid-cols-3">
  <div class="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm">
    <p class="m-0 text-xs font-semibold uppercase tracking-wide text-irrigation-blue">Wet season</p>
    <p class="mt-2 mb-0 text-sm leading-relaxed text-gray-700">Clay <strong>swells</strong>, holds water, and softens low areas near the slab and patio.</p>
  </div>
  <div class="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm">
    <p class="m-0 text-xs font-semibold uppercase tracking-wide text-irrigation-blue">Dry season</p>
    <p class="mt-2 mb-0 text-sm leading-relaxed text-gray-700">Clay <strong>shrinks and cracks</strong>, leaving uneven grades and trip hazards in the turf.</p>
  </div>
  <div class="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm">
    <p class="m-0 text-xs font-semibold uppercase tracking-wide text-irrigation-blue">The result</p>
    <p class="mt-2 mb-0 text-sm leading-relaxed text-gray-700"><strong>Differential movement</strong>, puddles, and slopes that no longer drain away from the home.</p>
  </div>
</div>

<p>Texas A&amp;M AgriLife Extension has long warned homeowners that drought and uneven moisture around a slab can stress foundations — see their guidance on <a href="https://galveston.agrilife.org/files/2012/03/08-12-2015-Drought-Conditions-Pose-Threat-to-Home-Foundations-by-Dr.-William-M.-Johnson.pdf" target="_blank" rel="noopener noreferrer">drought conditions and home foundations</a>. Texas Master Gardener resources also cover how sticky clay resists water movement in their PDF on <a href="https://txmg.org/orange/files/2020/05/Improving-Clay-Soil.pdf" target="_blank" rel="noopener noreferrer">improving clay soil</a>.</p>

<div class="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
  <div class="flex items-start gap-3">
    <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700" aria-hidden="true">!</span>
    <div>
      <p class="m-0 text-base font-semibold text-gray-900">Real-world failure</p>
      <p class="mt-2 mb-0 text-sm leading-relaxed text-gray-700">Hand-raking a soft spot rarely fixes yard-wide settling. If water still sits against the foundation after a storm, the grade — not just the grass — is the problem.</p>
    </div>
  </div>
</div>

<h2>When a track loader beats hand grading</h2>

<p>Hand grading still has a place for small dips near beds, patio edges, or a single soft corner. Once you are dealing with bigger issues, you need machine power.</p>

<div class="not-prose my-8 grid gap-6 md:grid-cols-2">
  <div class="rounded-xl border border-emerald-200 bg-white p-6 shadow-sm">
    <p class="m-0 text-base font-semibold text-emerald-700">Hand grading works for</p>
    <ul class="mt-3 mb-0 space-y-2 pl-5 text-sm text-gray-700">
      <li>Small dips near beds or edges</li>
      <li>Light topdressing touch-ups</li>
      <li>Finished areas where precision beats volume</li>
    </ul>
  </div>
  <div class="rounded-xl border border-irrigation-blue/20 bg-white p-6 shadow-sm">
    <p class="m-0 text-base font-semibold text-irrigation-blue">Bring the Bobcat when you have</p>
    <ul class="mt-3 mb-0 space-y-2 pl-5 text-sm text-gray-700">
      <li>Yard-wide settling or multiple low zones</li>
      <li>Water that ponds for hours after rain</li>
      <li>Negative or flat grade toward the foundation</li>
      <li>Dirt work before new sod, hardscape, or drainage</li>
    </ul>
  </div>
</div>

<p>A <a href="https://www.bobcat.com/na/en/equipment/loaders/compact-track-loaders" target="_blank" rel="noopener noreferrer">compact track loader</a> moves real volume: cut high spots, fill lows, haul material, and rough-in a new grade. Tracks also tend to float better on soft North Texas clay than wheeled machines — less tearing up the yard while we get the slope right.</p>

<div class="not-prose my-8 rounded-xl border border-emerald-200 bg-emerald-50/70 p-5 shadow-sm">
  <div class="flex items-start gap-3">
    <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700" aria-hidden="true">✓</span>
    <div>
      <p class="m-0 text-base font-semibold text-gray-900">Pro tip</p>
      <p class="mt-2 mb-0 text-sm leading-relaxed text-gray-700">We run land leveling in-house with our own Bobcat track loader, then fine-grade and sand/topdress so the finish is smooth enough for sod. See the full scope on our <a href="/services/sod-and-land-leveling" class="font-semibold text-irrigation-blue underline">SOD &amp; land leveling</a> page.</p>
    </div>
  </div>
</div>

<h2>Positive grade: the real goal</h2>

<p>Land leveling is not just about a lawn that looks flat. The job is to rebuild <strong>positive grade</strong> — a surface that sheds water away from the house and out of living areas.</p>

<div class="not-prose my-8 overflow-hidden rounded-xl border border-irrigation-blue/15 bg-gradient-to-r from-slate-50 via-white to-sky-50 p-6 shadow-sm">
  <p class="m-0 text-xs font-semibold uppercase tracking-wide text-irrigation-blue">Common drainage target</p>
  <p class="mt-2 mb-1 text-2xl font-bold text-irrigation-darkBlue">~6 inches of fall over the first 10 feet</p>
  <p class="m-0 text-sm leading-relaxed text-gray-600">Then keep moving water toward the street, a swale, or a designed drainage system — not back toward the slab.</p>
</div>

<p>Federal flood-readiness resources from Ready.gov emphasize keeping water away from the structure — start with <a href="https://www.ready.gov/floods" target="_blank" rel="noopener noreferrer">Ready.gov’s flood guidance</a>. On clay lots in Fort Worth, Keller, Weatherford, and nearby cities, that usually means regrading plus, when needed, <a href="/services/drainage-solutions">drainage solutions</a> such as <a href="/services/french-drains">French drains</a>, surface drains, or downspout extensions.</p>

<div class="not-prose my-8 grid gap-4 md:grid-cols-2">
  <figure class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    <img src="https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/massive-drainage-project.webp?updatedAt=1763144537814" alt="Large drainage trench and gravel installation on a residential lot" class="h-48 w-full object-cover" />
    <figcaption class="px-4 py-3 text-sm text-gray-500">Bigger drainage installs often follow a regrade when slope alone cannot carry water far enough.</figcaption>
  </figure>
  <figure class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    <img src="https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/long-shot-of-fort-worth-drainage.webp?updatedAt=1763144537900" alt="Finished Fort Worth yard drainage project across a lawn" class="h-48 w-full object-cover" />
    <figcaption class="px-4 py-3 text-sm text-gray-500">A finished grade should look clean and move stormwater away from living areas.</figcaption>
  </figure>
</div>

<h2>How leveling pairs with sod, irrigation, and drainage</h2>

<p>Grading alone is half the story. A finished North Texas lawn works when these pieces line up:</p>

<div class="not-prose my-8 space-y-3">
  <div class="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-irrigation-blue text-sm font-bold text-white">1</span>
    <div>
      <p class="m-0 font-semibold text-gray-900">Land leveling / dirt work</p>
      <p class="mt-1 mb-0 text-sm text-gray-600">Reshape the yard with the track loader, then fine-grade.</p>
    </div>
  </div>
  <div class="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-irrigation-blue text-sm font-bold text-white">2</span>
    <div>
      <p class="m-0 font-semibold text-gray-900">Drainage</p>
      <p class="mt-1 mb-0 text-sm text-gray-600">Where grade alone cannot carry water far enough, add collection and discharge paths.</p>
    </div>
  </div>
  <div class="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-irrigation-blue text-sm font-bold text-white">3</span>
    <div>
      <p class="m-0 font-semibold text-gray-900">SOD installation</p>
      <p class="mt-1 mb-0 text-sm text-gray-600">Lock in the surface, cut down mud and erosion, and get an instant lawn.</p>
    </div>
  </div>
  <div class="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-irrigation-blue text-sm font-bold text-white">4</span>
    <div>
      <p class="m-0 font-semibold text-gray-900">Irrigation adjustments</p>
      <p class="mt-1 mb-0 text-sm text-gray-600">Retune heads and zones so new turf gets even coverage without soaking the foundation line.</p>
    </div>
  </div>
</div>

<p>That is why we keep land leveling under the same service as sod. If you are already opening the ground, fix slope, irrigation, and drainage together instead of redoing the yard twice. Explore <a href="/services/sod-and-land-leveling">sod &amp; land leveling</a>, <a href="/services/sprinkler-installation">sprinkler installation</a>, and <a href="/services/drainage-solutions">drainage</a> — or check our <a href="/#grass-guide">North Texas grass guide</a> for turf that fits after a regrade.</p>

<h2>Safety before any digging: call 811</h2>

<div class="not-prose my-8 rounded-xl border border-sky-200 bg-sky-50 p-5 shadow-sm">
  <div class="flex items-start gap-3">
    <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700" aria-hidden="true">i</span>
    <div>
      <p class="m-0 text-base font-semibold text-gray-900">Important</p>
      <p class="mt-2 mb-0 text-sm leading-relaxed text-gray-700">Before a track loader cuts a yard — or before any trench for drainage — mark underground utilities through <a href="https://www.texas811.org/" target="_blank" rel="noopener noreferrer" class="font-semibold text-irrigation-blue underline">Texas 811</a> (or dial 811). Locates protect gas, electric, water, and communication lines.</p>
    </div>
  </div>
</div>

<p>Want to map what soil you are standing on before a big project? USDA’s <a href="https://websoilsurvey.nrcs.usda.gov/" target="_blank" rel="noopener noreferrer">Web Soil Survey</a> is the free federal tool for looking up soil map units on your parcel.</p>

<h2>When to call a professional</h2>

<p>Schedule a land-leveling visit if you notice:</p>

<ul>
  <li><strong>Puddles</strong> that linger near the slab, patio, or AC pad</li>
  <li><strong>Soft, sinking turf</strong> or uneven walk paths</li>
  <li><strong>Mulch beds or fence lines</strong> that channel water toward the house</li>
  <li>A yard you want to <strong>re-sod</strong>, but the grade is wrong first</li>
</ul>

<div class="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
  <p class="m-0 text-sm leading-relaxed text-gray-700"><strong>Note:</strong> Structural foundation repair is a separate specialty. If you already have significant cracks, sticking doors, or engineer recommendations, get that evaluated first. For grade, drainage, sod, and irrigation on residential lots, we can assess the surface and put a practical plan together.</p>
</div>

<h2>FAQ</h2>

<h3>Do you own the equipment or rent it?</h3>
<p>We own a Bobcat track loader for land leveling, grading, and dirt work — so larger regrades stay in-house without waiting on rentals.</p>

<h3>Can you level first and install sod in the same project?</h3>
<p>Yes. That is the usual workflow: machine grade → fine grade / sand → SOD → irrigation adjustments. See <a href="/services/sod-and-land-leveling">SOD installation &amp; land leveling</a>.</p>

<h3>What if grade alone is not enough?</h3>
<p>We add drainage where needed — French drains, surface drains, or downspout extensions — so water has somewhere to go after the slope is corrected.</p>

<h2>Key takeaways</h2>

<ul>
  <li>Expansive North Texas clay moves with moisture and creates low spots that hold water.</li>
  <li>Compact track loaders make full-yard regrades realistic without relying on hand labor alone.</li>
  <li>Positive grade away from the foundation is the real goal — not just a “flat” look.</li>
  <li>Best results pair leveling with sod, irrigation tuning, and drainage when needed.</li>
  <li>Always call <a href="https://www.texas811.org/" target="_blank" rel="noopener noreferrer">Texas 811</a> before digging.</li>
</ul>

<div class="not-prose my-10 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
  <p class="m-0 text-lg font-bold text-irrigation-blue">Sources &amp; further reading</p>
  <p class="mt-2 mb-4 text-sm text-gray-600">Authoritative references linked in this article:</p>
  <ul class="m-0 space-y-2.5 pl-0 list-none">
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="https://soilseries.sc.egov.usda.gov/OSD_Docs/H/HOUSTON_BLACK.html" target="_blank" rel="noopener noreferrer">USDA NRCS — Houston Black soil series</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="https://galveston.agrilife.org/files/2012/03/08-12-2015-Drought-Conditions-Pose-Threat-to-Home-Foundations-by-Dr.-William-M.-Johnson.pdf" target="_blank" rel="noopener noreferrer">Texas A&amp;M AgriLife — drought &amp; home foundations (PDF)</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="https://txmg.org/orange/files/2020/05/Improving-Clay-Soil.pdf" target="_blank" rel="noopener noreferrer">Texas Master Gardener — improving clay soil (PDF)</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="https://www.bobcat.com/na/en/equipment/loaders/compact-track-loaders" target="_blank" rel="noopener noreferrer">Bobcat — compact track loaders</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="https://www.ready.gov/floods" target="_blank" rel="noopener noreferrer">Ready.gov — flood guidance</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="https://www.texas811.org/" target="_blank" rel="noopener noreferrer">Texas 811 — call before you dig</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="https://websoilsurvey.nrcs.usda.gov/" target="_blank" rel="noopener noreferrer">USDA Web Soil Survey</a></li>
  </ul>
  <p class="mt-5 mb-0 text-sm text-gray-600">On our site:</p>
  <ul class="mt-2 mb-0 space-y-2.5 pl-0 list-none">
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="/services/sod-and-land-leveling">SOD installation &amp; land leveling</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="/services/drainage-solutions">Drainage solutions</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="/services/french-drains">French drains</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="/services/sprinkler-installation">Sprinkler installation</a></li>
    <li><a class="font-semibold text-irrigation-blue underline underline-offset-2" href="/contact">Request a free estimate</a></li>
  </ul>
</div>

<div class="not-prose my-10 rounded-xl border border-irrigation-blue/20 bg-gradient-to-r from-irrigation-blue/5 to-emerald-50 p-8 text-center shadow-sm">
  <p class="m-0 text-2xl font-bold text-irrigation-blue">Ready for a level yard — and a green lawn?</p>
  <p class="mx-auto mt-3 mb-6 max-w-xl text-sm leading-relaxed text-gray-600">Get a plan for Bobcat grading, drainage-friendly slope, and finished SOD. Free estimates across Fort Worth and surrounding cities.</p>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a href="/contact" class="inline-flex rounded-lg bg-irrigation-blue px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-irrigation-darkBlue">Request Your Estimate</a>
    <a href="/services/sod-and-land-leveling" class="inline-flex rounded-lg border border-irrigation-blue px-5 py-2.5 text-sm font-semibold text-irrigation-blue no-underline hover:bg-white">View SOD &amp; Land Leveling</a>
  </div>
</div>
`.trim(),
    image: '/assets/images/optimized/bobcat/bobcat-t450-front.jpg',
    date: 'August 4, 2026',
    author: 'Texas Best Sprinklers',
    category: 'Lawn Care',
    slug: 'land-leveling-bobcat-track-loader-north-texas-clay',
    tags: [
      'land leveling',
      'Bobcat track loader',
      'North Texas clay',
      'SOD installation',
      'drainage',
      'grading',
    ],
  },
  {
    id: 1,
    title: "How Professional Irrigation Boosts Your Lawn's Health",
    excerpt:
      'Discover how the right irrigation system can transform your lawn from average to exceptionally lush and healthy.',
    content:
      'A professionally installed irrigation system provides consistent, even watering to your entire lawn, eliminating dry spots and preventing overwatering. This consistency is key to developing deep, strong root systems that can better withstand drought, disease, and pests. Furthermore, modern smart irrigation systems can adjust watering schedules based on weather conditions, soil moisture levels, and seasonal changes, ensuring your lawn receives exactly the right amount of water at the optimal time. This precision not only improves lawn health but also conserves water and reduces utility bills.',
    image:
      'https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/long-shot-of-fort-worth-drainage.webp?updatedAt=1763144537900',
    date: 'June 12, 2023',
    author: 'Michael Wilson',
    category: 'Lawn Care',
    slug: 'how-professional-irrigation-boosts-lawn-health',
    tags: ['sprinkler systems', 'lawn health', 'water conservation', 'professional irrigation'],
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Water-Efficient Sprinkler Systems',
    excerpt:
      'Learn how modern irrigation technology can slash your water usage while keeping your landscape vibrant and healthy.',
    content:
      "Water-efficient sprinkler systems incorporate several technologies and design principles that minimize waste while maximizing plant health. Smart controllers adjust watering schedules based on local weather data, ensuring your system doesn't run during rainy periods. Pressure-regulated sprinklers prevent misting and overspray, keeping water exactly where it's needed. Drip irrigation delivers water directly to plant roots, virtually eliminating evaporation and runoff. High-efficiency nozzles distribute water more uniformly and at a slower rate that soil can absorb. When properly integrated and professionally installed, these components can reduce outdoor water consumption by 30-50% while maintaining beautiful, healthy landscapes.",
    image: 'https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/sprinklerHead.webp?updatedAt=1763144537428',
    date: 'May 28, 2023',
    author: 'Jennifer Anderson',
    category: 'Water Conservation',
    slug: 'ultimate-guide-water-efficient-sprinkler-systems',
    tags: ['water efficiency', 'smart irrigation', 'drought-resistant', 'eco-friendly'],
  },
  {
    id: 3,
    title: '5 Signs Your Irrigation System Needs Repair',
    excerpt:
      'Identify the warning signs that indicate your sprinkler system may need professional attention before minor issues become major problems.',
    content:
      "Several indicators suggest your irrigation system needs repair. Uneven water distribution, with some areas soggy while others remain dry, often signals clogged or damaged sprinkler heads. Leaking valves or pipes are evident from unexplained puddles or unusually lush spots in your lawn. A sudden increase in your water bill without changes in usage habits may indicate an underground leak. Sprinkler heads that don't pop up properly or spray erratically likely need adjustment or replacement. Finally, if your controller operates inconsistently or certain zones don't activate, electrical issues may be present. Addressing these problems promptly can prevent water waste, landscape damage, and more expensive repairs down the line.",
    image:
      'https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/massive-drainage-project.webp?updatedAt=1763144537814',
    date: 'April 15, 2023',
    author: 'Robert Johnson',
    category: 'Maintenance',
    slug: 'signs-irrigation-system-needs-repair',
    tags: ['sprinkler repair', 'troubleshooting', 'irrigation maintenance', 'water leaks'],
  },
  {
    id: 4,
    title: 'Choosing the Right Sprinkler Heads for Your Landscape',
    excerpt:
      'Navigate the different types of sprinkler heads and learn which ones are ideal for specific areas of your yard.',
    content:
      'Selecting the right sprinkler heads is essential for efficient irrigation and healthy plants. Spray heads deliver a fan-shaped spray pattern and are ideal for small to medium turf areas with relatively flat terrain. Rotor heads rotate streams of water across the landscape and work well for larger areas, typically covering 20-150 feet. Impact rotors create a distinctive tapping sound and are highly durable, making them suitable for sports fields and large properties. Drip emitters deliver water directly to plant roots and are perfect for gardens, flower beds, and container plants. Multi-stream rotational nozzles combine the benefits of spray and rotor heads, providing excellent distribution uniformity while reducing runoff and wind drift.',
    image:
      'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public',
    date: 'March 3, 2023',
    author: 'Sarah Williams',
    category: 'Equipment',
    slug: 'choosing-right-sprinkler-heads-landscape',
    tags: ['sprinkler heads', 'spray patterns', 'irrigation design', 'landscape zones'],
  },
  {
    id: 5,
    title: 'Seasonal Sprinkler System Maintenance: What You Need to Know',
    excerpt:
      "Follow this comprehensive guide to properly maintain your irrigation system throughout the year in Fort Worth's climate.",
    content:
      "Proper seasonal maintenance keeps your irrigation system functioning efficiently year-round. In spring, inspect for winter damage, clear debris from heads, check for leaks, test each zone, and adjust sprinkler heads for proper coverage. Summer maintenance includes checking for clogged nozzles, adjusting watering schedules based on temperature, and ensuring proper pressure. Fall preparation involves checking for damaged components, adjusting watering times for cooler weather, and cleaning filters. Winter winterization is critical in areas with freezing temperatures: shut off the water supply, drain the system, insulate exposed components, and shut down the controller. Professional irrigation technicians can perform thorough inspections and maintenance to extend your system's lifespan and maximize water efficiency.",
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2',
    date: 'February 17, 2023',
    author: 'David Thompson',
    category: 'Seasonal Care',
    slug: 'seasonal-sprinkler-system-maintenance',
    tags: ['winterization', 'spring startup', 'irrigation maintenance', 'seasonal care'],
  },
];
