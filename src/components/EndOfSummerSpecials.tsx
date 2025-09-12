"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Sun, Leaf, Wrench, Percent, Lightbulb, Droplets } from "lucide-react";

export default function EndOfSummerSpecials() {
  return (
    <section className="relative">
      {/* Loud banner */}
      <div className="relative overflow-hidden rounded-2xl border border-yellow-300/60 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 shadow-[0_10px_30px_rgba(245,158,11,0.25)]">
        {/* Decoration */}
        <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-yellow-200/50 blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-300/40 blur-2xl" />

        {/* Header */}
        <div className="flex flex-col items-center gap-3 px-6 pt-8 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black shadow">
            <Sun className="h-4 w-4" /> End of Summer Specials
          </span>
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Save big on inspections, installs, lighting, and drainage
          </h2>
          <Sparkles className="hidden h-6 w-6 text-amber-500 sm:block" />
        </div>

        {/* Offers grid */}
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 px-6 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* $50 Sprinkler Inspection & Tune-Up */}
          <OfferCard
            icon={<Wrench className="h-5 w-5" />}
            title="$50 Sprinkler Inspection & Tune‑Up"
            desc="Experienced techs check coverage, leaks, heads, controller & scheduling."
            badge="Most Popular"
            href="/contact"
            cta="Book $50 Inspection"
            accent="bg-emerald-600 hover:bg-emerald-700"
          />

          {/* 10% off new sprinkler installations */}
          <OfferCard
            icon={<Percent className="h-5 w-5" />}
            title="10% Off New Sprinkler Installations"
            desc="Smart controllers, efficient zones, premium heads & warranty."
            badge="New Systems"
            href="/contact"
            cta="Get 10% Off Install"
            accent="bg-blue-600 hover:bg-blue-700"
          />

          {/* Outdoor lighting specials */}
          <OfferCard
            icon={<Lightbulb className="h-5 w-5" />}
            title="Outdoor Lighting Specials"
            desc="Path, accent & security lighting. Energy‑efficient, stunning at night."
            badge="Curb Appeal"
            href="/contact"
            cta="Light My Home"
            accent="bg-amber-600 hover:bg-amber-700"
          />

          {/* Drainage solutions savings */}
          <OfferCard
            icon={<Droplets className="h-5 w-5" />}
            title="Drainage Solutions — 10% Off"
            desc="French drains, surface drains, grading & sump solutions to move water out."
            badge="Solve Standing Water"
            href="/contact"
            cta="Fix My Drainage"
            accent="bg-indigo-600 hover:bg-indigo-700"
          />
        </div>

        {/* Footer disclaimers and CTA */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 pb-8 text-sm text-gray-700 sm:flex-row">
          <p className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-emerald-600" />
            Limited‑time end‑of‑summer offers. Cannot be combined with other promotions. Call for details.
          </p>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-900"
            >
              Request Service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-50"
            >
              Get Help Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferCard({
  icon,
  title,
  desc,
  badge,
  href,
  cta,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: string;
  href: string;
  cta: string;
  accent: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow transition hover:shadow-lg">
      {badge && (
        <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
          {badge}
        </span>
      )}
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-gray-900 text-white">
        {icon}
      </div>
      <h3 className="text-base font-bold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
      <div className="mt-4">
        <Link
          href={href}
          className={`inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow ${accent}`}
        >
          {cta}
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}
