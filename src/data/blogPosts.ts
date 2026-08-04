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
<p>If your Fort Worth-area yard has soft low spots, trip hazards, or puddles that hang around after every storm, you are not imagining it. North Texas sits on expansive clay that moves with moisture — and that movement shows up in your grade long before you notice foundation trouble.</p>

<p>When the dips get bigger than a shovel-and-wheelbarrow fix, <a href="/services/sod-and-land-leveling">professional land leveling with a Bobcat track loader</a> is how we reshape the yard so water leaves the property the way it should.</p>

<h2>Why North Texas clay creates low spots and drainage headaches</h2>

<p>Much of the Dallas–Fort Worth metro sits on heavy clay soils in and around the Blackland Prairie. The USDA Natural Resources Conservation Service’s official description of the <a href="https://soilseries.sc.egov.usda.gov/OSD_Docs/H/HOUSTON_BLACK.html" target="_blank" rel="noopener noreferrer">Houston Black soil series</a> is a classic example: deep, clay-rich Vertisols that crack when dry and swell when wet.</p>

<p>That wet/dry cycle is hard on lawns and foundations. Texas A&amp;M AgriLife Extension has long warned homeowners that drought and uneven moisture around a slab can stress foundations — see AgriLife’s guidance on <a href="https://galveston.agrilife.org/files/2012/03/08-12-2015-Drought-Conditions-Pose-Threat-to-Home-Foundations-by-Dr.-William-M.-Johnson.pdf" target="_blank" rel="noopener noreferrer">drought conditions and home foundations</a>. Standing water near the house keeps clay wetter on one side of the slab than the other. Dry spells shrink it again. Over time you get differential movement, soft spots in the turf, and grades that no longer slope away from the home.</p>

<p>Texas Master Gardener resources also note how sticky clay resists water movement and needs thoughtful prep — a useful primer is their PDF on <a href="https://txmg.org/orange/files/2020/05/Improving-Clay-Soil.pdf" target="_blank" rel="noopener noreferrer">improving clay soil</a>. For yard grading, the takeaway is simple: if the surface does not drain, clay holds the problem in place.</p>

<h2>When machine land leveling beats hand grading</h2>

<p>Hand grading still has a place — small dips near beds, patio edges, or a single soft corner. Once you are dealing with:</p>

<ul>
  <li>Yard-wide settling or multiple low zones</li>
  <li>Water that ponds for hours after rain</li>
  <li>Negative or flat grade toward the foundation</li>
  <li>Dirt work before new sod, hardscape, or drainage</li>
</ul>

<p>…you need machine power. A <a href="https://www.bobcat.com/na/en/equipment/loaders/compact-track-loaders" target="_blank" rel="noopener noreferrer">compact track loader</a> (Bobcat-style) moves real volume: cut high spots, fill lows, haul material, and rough-in a new grade without waiting on a rental fleet. Tracks also tend to float better on soft North Texas clay than wheeled machines, which means less tearing up the yard while we get the slope right.</p>

<p>At Texas Best Sprinklers we run land leveling in-house with our own Bobcat track loader, then fine-grade and sand/topdress so the finish is smooth enough for sod. Details on what that includes are on our <a href="/services/sod-and-land-leveling">SOD installation &amp; land leveling</a> service page.</p>

<h2>Positive grade: the drainage goal that protects your home</h2>

<p>Land leveling is not just about a lawn that looks flat. The job is to rebuild <strong>positive grade</strong> — a surface that sheds water away from the house and out of living areas. Industry and insurance-oriented guidance commonly targets roughly <strong>six inches of fall over the first ten feet</strong> away from the foundation, then continues moving water toward street, swale, or a designed drainage system.</p>

<p>Federal flood-readiness resources from Ready.gov emphasize keeping water away from the structure as part of protecting a home — start with <a href="https://www.ready.gov/floods" target="_blank" rel="noopener noreferrer">Ready.gov’s flood guidance</a> if you want the homeowner-level overview. On clay lots in Fort Worth, Keller, Weatherford, and nearby cities, that usually means a combination of regrading plus, when needed, <a href="/services/drainage-solutions">drainage solutions</a> such as <a href="/services/french-drains">French drains</a>, surface drains, or downspout extensions.</p>

<h2>How land leveling pairs with sod, irrigation, and drainage</h2>

<p>Grading alone is half the story. A finished North Texas lawn works when these pieces line up:</p>

<ol>
  <li><strong>Land leveling / dirt work</strong> — reshape the yard with the track loader, then fine-grade.</li>
  <li><strong>Drainage</strong> — where grade alone cannot carry water far enough, add collection and discharge paths.</li>
  <li><strong>SOD installation</strong> — lock in the surface, cut down mud and erosion, and get an instant lawn.</li>
  <li><strong>Irrigation adjustments</strong> — retune heads and zones so the new turf gets even coverage without soaking the foundation line.</li>
</ol>

<p>That is why we keep land leveling under the same service as sod. If you are already opening the ground, it is the right time to fix slope, irrigation, and drainage together instead of redoing the yard twice. Explore the full scope on <a href="/services/sod-and-land-leveling">sod &amp; land leveling</a>, or jump to <a href="/services/sprinkler-installation">sprinkler installation</a> and <a href="/services/drainage-solutions">drainage</a> if those are the bigger need.</p>

<p>Curious which turf fits your yard after a regrade? Our <a href="/#grass-guide">North Texas grass guide</a> on the homepage breaks down Zoysia, Bermuda, and St. Augustine in local conditions.</p>

<h2>Safety before any digging: call 811</h2>

<p>Before a track loader cuts a yard — or before any trench for drainage — mark underground utilities. In Texas, start with the official one-call system at <a href="https://www.texas811.org/" target="_blank" rel="noopener noreferrer">Texas 811</a> (or dial 811). Locates protect gas, electric, water, and communication lines, and they are a non-negotiable step on every job that disturbs soil.</p>

<p>If you want to map what kind of soil you are standing on before a big project, USDA’s <a href="https://websoilsurvey.nrcs.usda.gov/" target="_blank" rel="noopener noreferrer">Web Soil Survey</a> is the free federal tool for looking up soil map units on your parcel.</p>

<h2>When to call a professional</h2>

<p>Schedule a land-leveling visit if you notice:</p>

<ul>
  <li>Puddles that linger near the slab, patio, or AC pad</li>
  <li>Soft, sinking turf or uneven walk paths</li>
  <li>Mulch beds or fence lines that channel water toward the house</li>
  <li>A yard you want to re-sod, but the grade is wrong first</li>
</ul>

<p>Structural foundation repair is a separate specialty — if you already have significant cracks, sticking doors, or engineer recommendations, get that evaluated. For grade, drainage, sod, and irrigation on residential lots across Fort Worth and surrounding cities, we can assess the surface and put a practical plan together.</p>

<p><a href="/contact">Request a free estimate</a> for land leveling and sod, or read more about equipment, grading, and lawn finish work on our <a href="/services/sod-and-land-leveling">SOD installation &amp; land leveling</a> page.</p>

<h2>Key takeaways</h2>

<ul>
  <li>Expansive North Texas clay moves with moisture and creates low spots that hold water.</li>
  <li>Compact track loaders make full-yard regrades realistic without relying on hand labor alone.</li>
  <li>Positive grade away from the foundation is the real goal — not just a “flat” look.</li>
  <li>Best results pair leveling with sod, irrigation tuning, and drainage when needed.</li>
  <li>Always call <a href="https://www.texas811.org/" target="_blank" rel="noopener noreferrer">Texas 811</a> before digging.</li>
</ul>
`.trim(),
    image: 'https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/massive-drainage-project.webp?updatedAt=1763144537814',
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
