# Build Issues Log

Last updated: May 8, 2025

## Warning Categories

### 1. Metadata Base Missing
Multiple instances of:
```
⚠ metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
```

### 2. Missing Service Data

#### Sprinkler Installation
The following locations don't have service data for sprinkler-installation:
- weatherford
- north-richland-hills
- bedford
- euless
- azle
- annetta
- watauga
- springtown
- mineral-wells
- cool
- grand-prairie
- hurst
- benbrook
- willow-park
- brock
- roanoke
- westlake
- mansfield
- hudson-oaks
- lewisville
- millsap
- peaster
- aledo
- haltom-city
- trophy-club

#### Missing Sprinkler Installation Articles
Some locations have service data but missing or incomplete article content:
- keller (Article found but couldn't extract content)
- southlake (Article found but couldn't extract content)
- arlington (Article found but couldn't extract content)

### 3. Missing Article Content

#### Drainage Solutions
Missing articles for:
- coppell
- westlake
- mineral-wells
- peaster
- hudson-oaks
- willow-park
- cool
- springtown

#### Maintenance
Missing articles for all locations including:
- weatherford
- arlington
- southlake
- keller
- colleyville
- euless
- north-richland-hills
- grapevine
- (and many more)

#### Outdoor Lighting
Missing articles for:
- azle
- watauga
- grand-prairie
- haltom-city
- millsap
- annetta
- brock
- peaster
- aledo
- mineral-wells
- westlake
- hudson-oaks
- springtown
- willow-park
- cool

#### Irrigation Repair
Missing articles for:
- westlake
- hudson-oaks
- springtown
- aledo
- willow-park
- cool
- peaster

## Action Items

1. **Fix metadataBase property**:
   - Update app/layout.tsx to include metadataBase in the metadata export

2. **Add Missing Service Data**:
   - Create entries in sprinklerInstallationServiceData.ts for the missing locations

3. **Create Missing Articles**:
   - Generate articles for the missing locations in src/data/articles/

4. **Fix Article Extraction**:
   - Debug extraction issues with keller, southlake, and arlington articles
