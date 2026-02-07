"use client";

import React, { useMemo } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import type { WaterRestrictionLink } from "@/data/waterRestrictions";

interface Props {
  title?: string;
  subtitle?: string;
  links: WaterRestrictionLink[];
  currentLocation?: string;
  className?: string;
}

// Utility: get 3-4 most relevant cities based on current location
function getRelevantCities(links: WaterRestrictionLink[], currentLocation?: string): WaterRestrictionLink[] {
  if (!currentLocation) {
    // If no current location, return first 4 cities
    return links.slice(0, 4);
  }

  const currentCity = currentLocation.toLowerCase();
  
  // Define city groupings for better relevance
  const cityGroups: Record<string, string[]> = {
    'fort-worth': ['Fort Worth', 'Keller', 'Southlake', 'Colleyville'],
    'keller': ['Keller', 'Fort Worth', 'Southlake', 'Colleyville'],
    'southlake': ['Southlake', 'Keller', 'Colleyville', 'Grapevine'],
    'colleyville': ['Colleyville', 'Keller', 'Southlake', 'Grapevine'],
    'grapevine': ['Grapevine', 'Southlake', 'Colleyville', 'Flower Mound'],
    'flower-mound': ['Flower Mound', 'Grapevine', 'Lewisville', 'Denton'],
    'lewisville': ['Lewisville', 'Flower Mound', 'Denton', 'Frisco'],
    'frisco': ['Frisco', 'Plano', 'McKinney', 'Allen'],
    'plano': ['Plano', 'Frisco', 'Richardson', 'Allen'],
    'mckinney': ['McKinney', 'Frisco', 'Allen', 'Prosper'],
    'allen': ['Allen', 'Plano', 'McKinney', 'Frisco'],
    'richardson': ['Richardson', 'Plano', 'Dallas', 'Garland'],
    'dallas': ['Dallas', 'Richardson', 'Garland', 'University Park'],
    'garland': ['Garland', 'Dallas', 'Richardson', 'Mesquite'],
    'mesquite': ['Mesquite', 'Garland', 'Dallas', 'Balch Springs'],
    'balch-springs': ['Balch Springs', 'Mesquite', 'Dallas', 'Garland'],
    'cedar-hill': ['Cedar Hill', 'Duncanville', 'DeSoto', 'Grand Prairie'],
    'duncanville': ['Duncanville', 'Cedar Hill', 'DeSoto', 'Dallas'],
    'desoto': ['DeSoto', 'Cedar Hill', 'Duncanville', 'Lancaster'],
    'lancaster': ['Lancaster', 'DeSoto', 'Cedar Hill', 'Duncanville'],
    'grand-prairie': ['Grand Prairie', 'Arlington', 'Irving', 'Euless'],
    'arlington': ['Arlington', 'Grand Prairie', 'Euless', 'Hurst'],
    'euless': ['Euless', 'Arlington', 'Hurst', 'Bedford'],
    'hurst': ['Hurst', 'Euless', 'Bedford', 'Arlington'],
    'bedford': ['Bedford', 'Hurst', 'Euless', 'Colleyville'],
    'north-richland-hills': ['North Richland Hills', 'Haltom City', 'Richland Hills', 'Watauga'],
    'haltom-city': ['Haltom City', 'North Richland Hills', 'Richland Hills', 'Watauga'],
    'richland-hills': ['Richland Hills', 'North Richland Hills', 'Haltom City', 'Watauga'],
    'watauga': ['Watauga', 'North Richland Hills', 'Haltom City', 'Richland Hills'],
    'weatherford': ['Weatherford', 'Hudson Oaks', 'Willow Park', 'Aledo'],
    'hudson-oaks': ['Hudson Oaks', 'Weatherford', 'Willow Park', 'Aledo'],
    'willow-park': ['Willow Park', 'Weatherford', 'Hudson Oaks', 'Aledo'],
    'aledo': ['Aledo', 'Weatherford', 'Willow Park', 'Hudson Oaks'],
    'burleson': ['Burleson', 'Crowley', 'Joshua', 'Cleburne'],
    'crowley': ['Crowley', 'Burleson', 'Joshua', 'Cleburne'],
    'joshua': ['Joshua', 'Burleson', 'Crowley', 'Cleburne'],
    'cleburne': ['Cleburne', 'Burleson', 'Crowley', 'Joshua'],
    'mansfield': ['Mansfield', 'Arlington', 'Grand Prairie', 'Kennedale'],
    'kennedale': ['Kennedale', 'Mansfield', 'Arlington', 'Grand Prairie'],
    'midlothian': ['Midlothian', 'Waxahachie', 'Red Oak', 'Ovilla'],
    'waxahachie': ['Waxahachie', 'Midlothian', 'Red Oak', 'Ovilla'],
    'red-oak': ['Red Oak', 'Waxahachie', 'Midlothian', 'Ovilla'],
    'ovilla': ['Ovilla', 'Waxahachie', 'Midlothian', 'Red Oak']
  };

  const relevantCityNames = cityGroups[currentCity] || [];
  
  // Find matching cities from the links array
  const relevantCities = relevantCityNames
    .map(cityName => links.find(link => link.city === cityName))
    .filter(Boolean) as WaterRestrictionLink[];

  // If we don't have enough relevant cities, fill with other nearby cities
  if (relevantCities.length < 4) {
    const remainingCities = links
      .filter(link => !relevantCities.some(rel => rel.city === link.city))
      .slice(0, 4 - relevantCities.length);
    relevantCities.push(...remainingCities);
  }

  return relevantCities.slice(0, 4);
}

// Utility: group links by first letter of city
function groupByLetter(links: WaterRestrictionLink[]) {
  const groups: Record<string, WaterRestrictionLink[]> = {};
  for (const item of links) {
    const letter = (item.city?.[0] || "?").toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(item);
  }
  // Sort groups and items
  const sortedLetters = Object.keys(groups).sort();
  for (const k of sortedLetters) {
    groups[k] = groups[k].slice().sort((a, b) => a.city.localeCompare(b.city));
  }
  return { groups, sortedLetters };
}

export default function WaterRestrictions({
  title = "Local Water Restrictions in Dallas Area",
  subtitle = "Find official city watering schedules, conservation plans, and drought-stage guidance.",
  links,
  currentLocation,
  className,
}: Props) {
  // Get 3-4 most relevant cities based on current location
  const relevantCities = useMemo(
    () => getRelevantCities(links, currentLocation),
    [links, currentLocation]
  );

  return (
    <section className={className ?? "py-12 bg-white"}>
      <div className="container-custom">
        <div className="mb-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-irrigation-blue">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 mt-1 text-sm max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Relevant cities grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {relevantCities.map((item) => (
            <li key={item.city} className="group">
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border border-slate-200 rounded-lg bg-slate-50 px-4 py-3 hover:shadow-md transition-all duration-200 hover:border-irrigation-blue"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-irrigation-darkBlue group-hover:text-irrigation-green truncate">
                    {item.city} Water Restrictions
                  </p>
                  <p className="mt-1 text-xs text-gray-500 truncate">{item.url}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-irrigation-darkGreen shrink-0 group-hover:text-irrigation-blue transition-colors" />
              </Link>
            </li>
          ))}
        </ul>

        {/* SEO: JSON-LD for regional directory */}
        <Script id="jsonld-dfw-water-restrictions" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": "#dfw-water-restrictions",
            name: currentLocation ? `Water Restriction Resources near ${currentLocation}` : "Dallas–Fort Worth Water Restriction Resources",
            itemListElement: relevantCities.map((item, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "WebPage",
                name: `${item.city} Water Restrictions`,
                url: item.url,
              },
            })),
          })}
        </Script>
      </div>
    </section>
  );
}
