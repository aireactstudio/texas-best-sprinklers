# Service Area (City-Level) Page Template

Reference for creating and maintaining city-level service area pages on **Texas Best Sprinklers, Drainage and Lighting**. Use **Keller**, **Arlington**, or **Fort Worth** as the most complete examples today; use this doc as the target standard for all cities.

**Live URL pattern:** `https://sprinkleranddrains.com/{city-slug}` (e.g. `/keller`, `/arlington`)

---

## File Structure

### Current (production)

| Piece | Path | Notes |
|-------|------|--------|
| **Route** | `src/app/[location]/page.tsx` | Dynamic route; validates slug via `isValidLocation()` |
| **Orchestrator** | `src/components/location-homepages/LocationHomepage.tsx` | Shared layout for all cities |
| **Data** | `src/data/locationData.ts` | `LOCATIONS`, `locationData`, `getLocationData()` |
| **Long-form SEO (3 cities only)** | `src/components/location-homepages/LocationSEOArticle.tsx` | Keller, Arlington, Westlake branches |

### Target (recommended refactor)

Each city gets **2 files** (mirrors a maintainable Bellevue-style setup):

1. **Component:** `src/components/service-areas/{cityname}.tsx` (lowercase, no hyphens — e.g. `fortworth.tsx`, `northrichlandhills.tsx`)
2. **Route:** `src/app/{city-slug}/page.tsx` (kebab-case — e.g. `fort-worth/page.tsx`, `north-richland-hills/page.tsx`)

The route file stays thin: metadata + `<CityComponent />`.

When you add **neighborhood pages** under a city:

- Neighborhood component: `src/components/neighborhoods/{Name}Page.tsx`
- Route: `src/app/{city-slug}/{neighborhood-slug}/page.tsx`
- Add `link` on the city's `neighborhoods` prop (see **Neighborhoods** below)

**Cities in `LOCATIONS` (22):**  
`fort-worth`, `keller`, `roanoke`, `saginaw`, `watauga`, `westlake`, `grapevine`, `northlake`, `azle`, `haltom-city`, `weatherford`, `argyle`, `flower-mound`, `southlake`, `blue-mound`, `haslet`, `north-richland-hills`, `trophy-club`, `arlington`, `bedford`, `euless`, `hurst`

**Note:** `generateStaticParams()` in `[location]/page.tsx` only lists 15 slugs — align it with `LOCATIONS` when updating.

---

## Architecture Overview

### Today: `LocationHomepage`

All cities share one vertical stack (no per-city component file yet):

```
LocationHeroSection → Breadcrumbs → ServicesSection → LocationServicesAndAreas
→ LocationLocalInfo → WaterRestrictions → TestimonialsSection
→ [WeatherfordFAQ] → CTA → [LocationSEOArticle] → JSON-LD
```

### Target: shared `ServiceAreaTemplate`

Introduce `src/components/templates/ServiceAreaTemplate.tsx`. Each city component supplies props + a custom `{City}Article`, optional schema, and `AboutTheArea` **outside** the template (see A8).

```tsx
import ServiceAreaTemplate from "@/components/templates/ServiceAreaTemplate";
import AboutTheArea, { type LocalAttraction } from "@/components/AboutTheArea";
import KellerArticle from "./KellerArticle";

const Keller = () => {
  const faqStructuredData = { /* FAQPage JSON-LD */ };
  const enhancedBusinessData = { /* LocalBusiness + offers */ };

  return (
    <>
      <ServiceAreaTemplate
        city="Keller"
        state="TX"
        locationSlug="keller"
        heroTitle="..."
        heroDescription="..."
        metaTitle="..."
        metaDescription="..."
        zipCodes={["76248", "76262"]}
        neighborhoods={[...]}
        landmarks={[...]}
        climateDescription="..."
        nearestOffice="Fort Worth"
        distanceFromOffice={12}
        articleContent={<KellerArticle />}
        faqStructuredData={faqStructuredData}
        enhancedBusinessData={enhancedBusinessData}
      />
      <AboutTheArea
        cityName="Keller"
        attractions={KELLER_ATTRACTIONS}
        localLivingContent={<>...</>}
      />
    </>
  );
};

export default Keller;
```

---

## Template-Level Sections (`ServiceAreaTemplate`)

Map from current `LocationHomepage` sections → template responsibilities.

| # | Section | Current component | Template prop / behavior |
|---|---------|-------------------|-------------------------|
| 1 | **Hero** | `LocationHeroSection` | `heroTitle`, `heroDescription`, `locationSlug` |
| | | | MapPin badge, phone CTA `(817) 304-7896`, estimate → `/contact`, `LicenseBadge`, `LocationMap` |
| | | | Radius: **9 mi** default; **15 mi** for Keller & Grapevine (`getRadiusMiles`) |
| 2 | **Breadcrumbs** | `Breadcrumbs` | Auto: Home → {City} |
| 3 | **Services grid** | `ServicesSection` | `locationSlug` — cards link to `/{slug}/…-services-in-{slug}-tx` where pages exist |
| 4 | **Services + areas lists** | `LocationServicesAndAreas` | 6 irrigation links + `neighborhoods` / `serviceAreas` |
| 5 | **Why choose us / local expertise** | `LocationLocalInfo` | Optional props OR fold into article A6 (avoid duplicate) |
| 6 | **Water restrictions** | `WaterRestrictions` | `currentLocation={locationSlug}`, links from `DALLAS_AREA_WATER_RESTRICTIONS` |
| 7 | **Reviews** | `TestimonialsSection` | `cityFilter={cityName}`, `maxDisplayCount={10}` |
| 8 | **City FAQ (optional)** | `WeatherfordFAQ` | Only `weatherford` — or pass `faqStructuredData` + inline FAQ in article |
| 9 | **CTA** | `CTA` | City-specific title/subtitle → `/contact` |
| 10 | **Long-form article** | `LocationSEOArticle` | `articleContent={<CityArticle />}` |
| 11 | **Quote / contact** | — | Embed `ContactForm` section or link to `/contact` (contact page has full form) |
| 12 | **Service area locator** | `ServiceAreaLocator` | Optional footer: links to all `LOCATIONS` |

### Hero details (match `LocationHeroSection`)

- Background: `/assets/images/optimized/hero-background.webp`
- H1 pattern: `#1 Sprinkler & Irrigation Services in {City}`
- Trust row: Licensed & Insured (LI22462), 15+ Years, Satisfaction
- Phone tracking: `trackPhoneCall` from `@/utils/analytics`
- Map: `LocationMap` inside `ErrorBoundary` (client-only)

### Services grid (6 cards — irrigation focus)

Use these as the standard six (align with `LocationServicesAndAreas` + global `/services/*`):

| Card | Global service URL |
|------|-------------------|
| Sprinkler Installation | `/services/sprinkler-installation` |
| Sprinkler Repair | `/services/sprinkler-repair` |
| Irrigation Repair | `/services/irrigation-repair` |
| Sprinkler System Check-Up | `/services/sprinkler-system-check-up` |
| Drainage Solutions | `/services/drainage-solutions` |
| Outdoor Lighting | `/services/outdoor-lighting` |

**Location-specific URLs** (when built):  
`/{city-slug}/{service-slug}-services-in-{city-slug}-tx`  
Example: `/keller/sprinkler-repair-services-in-keller-tx`

Today, Keller and Fort Worth have the richest set of location service pages; other cities often link to global `/services/…` until pages exist.

### Neighborhoods & areas we serve

**Props:** `neighborhoods`, `landmarks`, `zipCodes`, `serviceAreas` (nearby cities/suburbs)

**Neighborhood type (target):**

```ts
interface Neighborhood {
  name: string;
  description: string;
  link?: string; // e.g. "/keller/hidden-lakes" → card shows "Learn More →"
}
```

- **Object** `{ name, description, link? }`: card with optional link to neighborhood page
- **String**: pill/badge only
- **Landmarks:** pills under “Serving properties near” (from `locationData.landmarks`)
- **Zip codes:** pill badges
- **`serviceAreas`:** nearby communities (add to `locationData` — field is referenced but not populated today)

**Data source:** extend `locationData[slug]`:

```ts
'keller': {
  name: 'Keller',
  landmarks: [...],
  neighborhoods: [...],  // string[] today → migrate to Neighborhood[]
  serviceAreas: ['Southlake', 'Colleyville', 'Watauga', ...],
  zipCodes: ['76248', '76262'],
  // existing: nearestOffice, distanceFromOffice, coordinates, serviceRadius
}
```

---

## Article Content Sections (`{City}Article`)

Custom component per city: `src/components/service-areas/articles/KellerArticle.tsx` (or inline in city file). Minimum **2,000 words** unique content; **3,000+** for priority cities (Fort Worth, Keller, Arlington, Southlake, Grapevine).

### A1. Company introduction

- H2: vary — e.g. “Your Local {City} Irrigation Team”, “Sprinkler & Drainage Experts in {City}, TX”
- Stat row (4 cards): Years in business (since 2008) | Projects completed (500+) | Star rating (5.0) | Licensed irrigator (LI22462)
- Intro: family-owned, Fort Worth + Weatherford offices, serve {city} and surrounding DFW

### A2. How we service properties in this area

- H2: vary — e.g. “How We Repair & Install Sprinkler Systems in {Area}”
- Process: free on-site estimate → assessment → repair/install → calibration & walkthrough
- Mention: Schedule 40 PVC, swing joints, brass backflow, Hunter / Rain Bird / Toro

### ~~A3. Why choose Texas Best~~ — REMOVED from article

**DO NOT** duplicate “Why Choose Us” in the article. `LocationLocalInfo` / template section 5 covers trust. One block only.

### A3. Services & systems we install

- H2: “Irrigation, Drainage & Lighting Services” (not “{City} Services” on every heading)
- H3 examples (vary wording):
  - “Smart Sprinkler Systems for North Texas Heat”
  - “Drainage for Clay Soil & Standing Water”
  - “Low-Voltage Landscape Lighting”
- Link to `/services/*` and city-specific URLs when they exist
- **Do not** claim services you don’t offer (e.g. don’t list pool irrigation if not a standard offering)

### A4. Free estimates & transparent pricing

- H2: “Free On-Site Estimates” or “Upfront Pricing”
- Bullets: no-obligation estimate, clear scope before work, uniformed technicians
- CTA → `/contact`

### A5. Warranty & guarantees

- H2: “Warranty Coverage on New Installations”
- **3-year warranty** on new installs; workmanship on repairs
- Shield icon card + bullet list (match site claims)

### A6. Local challenges & solutions

- H2: “Installation Expertise for {Area} Terrain” / “North Texas Clay & Summer Heat”
- Two columns: **Local challenges** (5–6) | **Our solutions** (5–6 with CheckCircle)
- Examples: expansive clay, freeze risk, watering restrictions, low pressure, mature tree roots, drainage after storms
- **DO NOT** also pass `localChallenges`/`localSolutions` as template props if the article includes this block

### A7. Water restrictions, permits & compliance — REQUIRED

- H2: “Watering Rules & What to Know Before You Irrigate in {City}”
- **H3: Why irrigation planning differs by city**  
  Clay soil, HOA rules, municipal watering schedules, backflow requirements.
- **H3: Local watering restrictions & permits**  
  - Link to the city’s official conservation page (use `DALLAS_AREA_WATER_RESTRICTIONS` or research Parker County / Tarrant / Denton county sources).
  - Cover: twice-weekly schedules, odd/even watering, drought stages, backflow testing expectations.
  - Licensed irrigator: **LI22462** — work complies with Texas TCEQ / local codes.
  - End with: verify current rules with [{City} Water Department / Development Services] and your HOA.
- **H3: Frequently asked questions**  
  Card with 4–5 Q&As: timeline, cost range factors, neighbor/easement issues, best season for install, smart controller benefits.
- **Disclaimer** (muted box):  
  “Watering schedules and municipal codes change. Confirm current restrictions with [official city source] and your HOA before adjusting your system.”

**Example sources to research:**

| City type | Where to link |
|-----------|----------------|
| DFW member cities | City water conservation / drought plan URLs |
| Fort Worth | City of Fort Worth water conservation |
| Weatherford | Parker County / City of Weatherford utilities |
| HOA-heavy (Southlake, Westlake) | Note HOA approval for major landscape/irrigation changes |

### A8. About the area (Discover {City}) — REQUIRED

Uses **`AboutTheArea`** (`src/components/AboutTheArea.tsx` — **create this component** if missing).

- Render **outside** `ServiceAreaTemplate` / `articleContent` (sibling in a fragment) so two-column layout isn’t constrained by `max-w-4xl`.
- **Column 1 — Attractions:** 5–6 items with `name`, `url` (real working links), `description` (100% original copy)
- **Column 2 — Local living:** 2 paragraphs with 6–8 external links (schools, parks, libraries, trails, dining)
- **Inline link class** (required on every `<a>`):

```tsx
className="font-semibold text-irrigation-blue underline decoration-2 underline-offset-4"
```

- **Images:** only assets under `/assets/images/` or your CDN — no hotlinking Wikimedia/competitors

```tsx
const KELLER_ATTRACTIONS: LocalAttraction[] = [
  {
    name: "Keller Town Center",
    url: "https://…",
    description: "Original 1–2 sentences…",
  },
];
```

---

## Props reference (`ServiceAreaTemplate`)

```ts
interface ServiceAreaTemplateProps {
  city: string;
  state: string;
  locationSlug: string;
  heroTitle?: string;
  heroDescription?: string;
  metaTitle?: string;
  metaDescription?: string;
  zipCodes?: string[];
  neighborhoods?: (string | Neighborhood)[];
  landmarks?: string[];
  serviceAreas?: string[];
  nearestOffice?: string;
  distanceFromOffice?: number;
  climateDescription?: string;
  articleContent?: React.ReactNode;
  faqStructuredData?: object;
  enhancedBusinessData?: object;
  showWaterRestrictions?: boolean; // default true
  showCityFAQ?: boolean;           // e.g. Weatherford
}

interface Neighborhood {
  name: string;
  description: string;
  link?: string;
}
```

---

## Structured data

### Auto-generated (template)

- **BreadcrumbList:** Home → {City Name}
- **WebPage:** name, `url`, `about` Place (see `LocationHomepage` today)
- **LocalBusiness / HomeAndConstructionBusiness:**
  - `name`: `SITE_CONFIG.fullName`
  - `telephone`: `(817) 304-7896`
  - `url`: `https://sprinkleranddrains.com/{locationSlug}`
  - `areaServed`: City + optional `GeoCircle` from coordinates
  - `aggregateRating`: only if backed by real review feed (Arlington page has an example — keep consistent with Google Business)
  - **Do not** invent review counts

### Custom (pass as props)

- **faqStructuredData** — `FAQPage` with 4–5 city-specific questions
- **enhancedBusinessData** — `hasOfferCatalog` for services you actually offer:

```ts
// Offer catalog should match real services only, e.g.:
["Sprinkler Repair", "Sprinkler Installation", "Irrigation Repair",
 "Drainage Solutions", "Outdoor Lighting", "Sprinkler Winterization"]
```

- Reference ItemLists from `WaterRestrictions` (`#dfw-water-restrictions`, `#city-regulations-{slug}`)

### Normalization rules

- Canonical: `https://sprinkleranddrains.com/{locationSlug}`
- `@type`: include `HomeAndConstructionBusiness` where appropriate
- Strip self-served `aggregateRating` unless tied to verified review source
- `areaServed` must match page city; use `GeoCircle` when `coordinates` exist in `locationData`

---

## Route page pattern

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Keller from "@/components/service-areas/keller";
import { isValidLocation } from "@/data/locationData";
import { SITE_CONFIG } from "@/config/site";

interface PageProps {
  params: { location: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isValidLocation(params.location)) {
    return { title: "Location Not Found" };
  }
  return {
    title: "Keller Sprinkler & Irrigation Services | Texas Best Sprinklers",
    description: "Professional sprinkler installation, repair & maintenance in Keller, TX. Licensed irrigator LI22462. Free estimates. Call (817) 304-7896.",
    alternates: {
      canonical: `https://sprinkleranddrains.com/${params.location}`,
    },
    openGraph: {
      title: `Keller Sprinkler Services | ${SITE_CONFIG.fullName}`,
      url: `https://sprinkleranddrains.com/${params.location}`,
      images: [{
        url: "https://sprinkleranddrains.com/assets/images/optimized/hero-background.webp",
        width: 1200,
        height: 630,
      }],
    },
  };
}

export default function Page({ params }: PageProps) {
  if (!isValidLocation(params.location)) notFound();
  return <Keller />;
}

export async function generateStaticParams() {
  // Import LOCATIONS from locationData — keep in sync
  return [{ location: "keller" }, /* … */];
}
```

---

## Components used

| Component | Import | Purpose |
|-----------|--------|---------|
| `ServiceAreaTemplate` | `@/components/templates/ServiceAreaTemplate` | Target unified layout (**to build**) |
| `LocationHomepage` | `@/components/location-homepages/LocationHomepage` | **Current** shared layout |
| `LocationHeroSection` | `@/components/location-homepages/LocationHeroSection` | Hero + map |
| `LocationMap` | `@/components/LocationMap` | Google Map + service radius circle |
| `ServicesSection` | `@/components/ServicesSection` | Service cards grid |
| `LocationServicesAndAreas` | `@/components/location-homepages/LocationServicesAndAreas` | Service links + areas list |
| `LocationLocalInfo` | `@/components/location-homepages/LocationLocalInfo` | Local expertise cards |
| `WaterRestrictions` | `@/components/location-homepages/WaterRestrictions` | Municipal watering links + JSON-LD |
| `TestimonialsSection` | `@/components/TestimonialsSection` | Filtered reviews |
| `CTA` | `@/components/CTA` | Estimate CTA |
| `ContactForm` | `@/components/ContactForm` | Full form (contact page or embedded) |
| `Breadcrumbs` | `@/components/Breadcrumbs` | Nav trail |
| `LicenseBadge` | `@/components/LicenseBadge` | LI22462 in hero |
| `AboutTheArea` | `@/components/AboutTheArea` | Discover {City} (**to build**) |
| `ServiceAreaLocator` | `@/components/ServiceAreaLocator` | All-city link grid (homepage/footer) |
| `SITE_CONFIG` | `@/config/site` | Branding + license number |

---

## Content guidelines

### Word count

- Minimum **2,000** unique words in `{City}Article` per city
- **3,000+** for tier-1: Fort Worth, Keller, Arlington, Southlake, Grapevine, Weatherford

### Research before writing

1. **Municipal watering rules** — Official conservation pages; twice-weekly / drought stages
2. **Soil & terrain** — Clay, slope, freeze risk (North Texas)
3. **HOAs** — Southlake, Westlake, Trophy Club, Keller — design review mentions where relevant
4. **Landmarks** — 5–7 from `locationData` or expand
5. **Neighborhoods** — 6–12 with descriptions; add `link` when neighborhood routes exist
6. **Zip codes** — All primary zips for the city
7. **Office proximity** — `nearestOffice`, `distanceFromOffice` from `locationData`

### SEO title

`{City} Sprinkler & Irrigation Services | {Differentiator} | Texas Best Sprinklers`

Capitalize city name. Include brand.

### Meta description (~160 chars)

Professional {City} sprinkler installation, repair & drainage. Licensed irrigator LI22462. {Differentiator}. 5-star rated. Free estimates — (817) 304-7896.

---

## SEO rules

### DO

- Write **100% unique** article content per city
- Cite **official** city/county water and code pages with links
- Include **local** neighborhoods, landmarks, clay-soil/heat context
- Use **neighborhood objects** with `name` + `description`; add `link` when subpages exist
- Add **FAQPage** + **LocalBusiness** JSON-LD where accurate
- Include **water restrictions / compliance** (A7)
- Link to `/services/*`, `/{city}/…-services-in-…-tx`, and `/contact`
- **Vary H2/H3** — not every heading prefixed with the city name
- Use **`SITE_CONFIG.licenseNumber`** (LI22462) in trust copy

### DON'T

- Reuse articles with city name swaps only
- List neighborhoods without descriptions
- Skip watering-rule research or official links
- Publish cities with fewer than **6 neighborhoods** and **5 landmarks** (in data or article)
- Duplicate “Why Choose Us” in article + `LocationLocalInfo`
- Pass `localChallenges`/`localSolutions` props **and** article A6
- Copy competitor or chamber-of-commerce blurbs
- Hotlink external images
- Claim specific brands/models on a job unless verified (generic “smart controller upgrade” is fine)

---

## Checklist for new or updated city page

- [ ] Data in `locationData.ts`: coordinates, landmarks, neighborhoods, zipCodes, serviceAreas, nearestOffice, distanceFromOffice
- [ ] Component at `src/components/service-areas/{cityname}.tsx` (target) OR extend `LocationSEOArticle` branch (interim)
- [ ] Route `src/app/{city-slug}/page.tsx` — metadata, canonical, Open Graph
- [ ] `generateStaticParams` includes this slug
- [ ] `AboutTheArea` **outside** template: 5–6 attractions, local living with link classNames
- [ ] `heroTitle`, `heroDescription`, `metaTitle`, `metaDescription`
- [ ] `zipCodes`, `neighborhoods` (6+), `landmarks` (5+)
- [ ] `climateDescription` (North Texas + city-specific nuance)
- [ ] Article A1–A8 including **A7 water restrictions** with official links
- [ ] **No** duplicate “Why Choose Us” in article
- [ ] **No** duplicate challenges/solutions in props + article
- [ ] **Varied** H2/H3 headings
- [ ] FAQ in article + `faqStructuredData`
- [ ] `enhancedBusinessData` (recommended)
- [ ] Internal links to services + contact
- [ ] Map radius correct (15 mi Keller/Grapevine; 9 mi default)
- [ ] All content original; license LI22462 accurate
- [ ] Sitemap / `llms.txt` updated if you maintain city lists there

---

## Linking to neighborhood pages

1. Create neighborhood component + `src/app/{city-slug}/{neighborhood-slug}/page.tsx`
2. In city `neighborhoods` array, set `link: "/{city-slug}/{neighborhood-slug}"`
3. Template renders clickable card with “Learn More →”

City hub → neighborhood spokes improves internal linking and local SEO (same pattern as MyFence Bellevue → Somerset).

---

## Migration notes (current → target)

| Item | Current | Action |
|------|---------|--------|
| URL | `/{slug}` | Keep (no mass URL change unless redirects planned) |
| Layout | `LocationHomepage` | Extract → `ServiceAreaTemplate` |
| Per-city content | 3 cities in `LocationSEOArticle` | Move to `{City}Article` + city files |
| `serviceAreas` field | Missing in data | Add to `locationData` |
| `AboutTheArea` | Not implemented | New component + per-city data |
| Weatherford FAQ | `WeatherfordFAQ.tsx` | Keep or merge into article + FAQ schema |
| Service area index | `ServiceAreaLocator` on homepage | Optional `/service-areas` index page later |

---

## Quick reference: site constants

| Constant | Value |
|----------|--------|
| Domain | `https://sprinkleranddrains.com` |
| Phone | `(817) 304-7896` |
| License | `LI22462` (`SITE_CONFIG.licenseNumber`) |
| Brand | Texas Best Sprinklers, Drainage and Lighting |
| HQ | Fort Worth (10011 Harmon Rd Suite 133) |
| 2nd office | Weatherford |
| Primary services | Irrigation, drainage, outdoor lighting |

---

## Related templates

- **Location service pages:** `LocationServicePageTemplate.tsx` — `/{city}/{service}-services-in-{city}-tx`
- **Global service pages:** `ServicePageTemplate.tsx` — `/services/{service}`
- **Neighborhood pages:** `docs/neighborhood-template.md` — `/{city}/{neighborhood}`
