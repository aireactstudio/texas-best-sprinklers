# Neighborhood Page Template

Reference for creating neighborhood pages under city routes (example: `/keller/hidden-lakes`).

> Read the full architecture section before coding. Keep route files thin.

---

## Architecture and wire-up

### Universal pattern

Every neighborhood page uses two files:

| File | Path | Role |
|------|------|------|
| Route wrapper | `src/app/{city-slug}/{neighborhood-slug}/page.tsx` | Exports `metadata`, imports and renders implementation component |
| Implementation component | `src/components/neighborhoods/{Name}Page.tsx` | All JSX, arrays, structured data, and content |

Shared layout for all neighborhoods:

- `src/components/templates/NeighborhoodPageTemplate.tsx`

### Anti-pattern to avoid

Do not place full page implementation in `src/app/.../page.tsx`. Keep wrappers around 10-15 lines and move all logic/content into components.

---

## Build steps

### 1) Pick names first

| Form | Example | Used for |
|------|---------|----------|
| URL slug | `hidden-lakes` | Route folder and canonical URL |
| Component name | `HiddenLakesPage` | Implementation component file and export |
| Route function name | `HiddenLakesKellerPage` | Wrapper default export (avoid import collision) |

### 2) Create implementation component

Create: `src/components/neighborhoods/{Name}Page.tsx`

- Import `NeighborhoodPageTemplate`
- Provide neighborhood-specific arrays/content
- Keep this file as single source of page implementation

### 3) Create thin route wrapper

Create: `src/app/{city-slug}/{neighborhood-slug}/page.tsx`

Pattern:

```tsx
import type { Metadata } from 'next';
import HiddenLakesPage from '@/components/neighborhoods/HiddenLakesPage';

export const metadata: Metadata = {
  title: 'Hidden Lakes Sprinkler Services | Keller, TX | Texas Best Sprinklers',
  description: '...',
  alternates: {
    canonical: 'https://sprinkleranddrains.com/keller/hidden-lakes'
  }
};

export default function HiddenLakesKellerPage() {
  return <HiddenLakesPage />;
}
```

Rules:
- no large JSX in wrapper
- include canonical URL
- proper capitalization in title/description

### 4) Wire parent city links

Update `locationData.ts` neighborhood entries to include:

```ts
{ name: 'Hidden Lakes', description: '...', link: '/keller/hidden-lakes' }
```

`LocationServicesAndAreas` renders clickable neighborhood cards when `link` exists.

### 5) Verify locally

- `/keller/hidden-lakes` loads
- `/keller` shows linked neighborhood card
- page has canonical tag and JSON-LD script

---

## Section model for implementation components

Neighborhood pages should use this structure through `NeighborhoodPageTemplate`:

1. Hero with back link, location badge, CTA buttons
2. Trust badge strip
3. Intro section
4. Highlights, service focus, local tips
5. Reviews
6. Neighborhood-specific considerations
7. Pricing transparency block
8. Popular services grid
9. Installation/process steps
10. FAQ section
11. About the area (`AboutTheArea`) rendered at full-width section level
12. Nearby neighborhood internal links
13. Closing CTA

---

## Structured data

Use:

- `buildNeighborhoodStructuredData()` from `src/components/neighborhoods/structuredData.ts`

It generates:
- `BreadcrumbList`
- `WebPage`
- `Service`
- `FAQPage` (when FAQ items exist)

---

## Components used

| Component | Path |
|-----------|------|
| `NeighborhoodPageTemplate` | `@/components/templates/NeighborhoodPageTemplate` |
| `AboutTheArea` | `@/components/AboutTheArea` |
| `buildNeighborhoodStructuredData` | `@/components/neighborhoods/structuredData` |
| `CTA` | `@/components/CTA` |
| `Link` | `next/link` |

---

## Keller test run (implemented)

- `/keller/hidden-lakes`
- `/keller/marshall-ridge`
- `/keller/oakmont`

Implementation files:

- `src/components/neighborhoods/HiddenLakesPage.tsx`
- `src/components/neighborhoods/MarshallRidgePage.tsx`
- `src/components/neighborhoods/OakmontPage.tsx`

---

## Content and SEO rules

### Do
- keep copy unique per neighborhood
- include specific local context (soil, layout, nearby landmarks)
- include 3+ neighborhood FAQs
- keep internal links to city hub and related neighborhoods

### Do not
- duplicate the city page text with name swaps
- hardcode long logic in route wrappers
- use unverified claims
- hotlink images from external sources
