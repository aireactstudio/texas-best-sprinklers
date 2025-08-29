"use client";

import React, { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import type { WaterRestrictionLink } from "@/data/waterRestrictions";

interface Props {
  title?: string;
  subtitle?: string;
  links: WaterRestrictionLink[];
  className?: string;
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
  className,
}: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return links;
    return links.filter((l) =>
      [l.city, l.url].some((v) => v.toLowerCase().includes(q))
    );
  }, [links, query]);

  // Flat sorted list for dense display
  const sortedFiltered = useMemo(
    () => filtered.slice().sort((a, b) => a.city.localeCompare(b.city)),
    [filtered]
  );

  return (
    <section className={className ?? "py-8"}>
      <div className="container-custom">
        <div className="mb-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-irrigation-blue">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 mt-1 text-sm max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Search */}
        <div className="mb-4 max-w-xl mx-auto">
          <label className="relative block">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city or URL..."
              className="w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green text-sm"
            />
          </label>
        </div>

        {/* Dense flat list */}
        {sortedFiltered.length === 0 ? (
          <div className="text-center text-gray-600">No matches found.</div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {sortedFiltered.map((item) => (
              <li key={item.city} className="group">
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg bg-white px-3 py-2 hover:shadow-sm transition"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-irrigation-darkBlue group-hover:text-irrigation-green truncate">
                      {item.city} Water Restrictions
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-500 truncate">{item.url}</p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-irrigation-darkGreen shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* SEO: JSON-LD for regional directory */}
        <Script id="jsonld-dfw-water-restrictions" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": "#dfw-water-restrictions",
            name: "Dallas–Fort Worth Water Restriction Resources",
            itemListElement: sortedFiltered.map((item, idx) => ({
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
