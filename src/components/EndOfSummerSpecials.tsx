"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Wrench, Percent, Lightbulb, Droplets, Snowflake } from "lucide-react";

export default function EndOfSummerSpecials() {
  return (
    <section className="relative">
      {/* Refined banner */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

        {/* Header */}
        <div className="px-6 pt-8 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
            <Leaf className="h-4 w-4" /> Fall Sale
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">Seasonal savings on irrigation and installs</h2>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-gray-600">Limited-time pricing on winterization, inspection, installations, lighting, and drainage services.</p>
        </div>

        {/* Offers grid */}
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-5 px-6 pb-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* $20 Sprinkler Inspection & Tune-Up */}
          <OfferCard
            icon={<Wrench className="h-5 w-5" />}
            title="$20 Sprinkler Inspection & Tune‑Up"
            desc="Experienced techs check coverage, leaks, heads, controller & scheduling."
            badge="Most Popular"
            href="/contact"
            cta="Book $20 Inspection"
            accent="bg-emerald-600 hover:bg-emerald-700"
            iconClass="bg-emerald-100 text-emerald-800"
          />

          {/* Winterization Fall Offer */}
          <OfferCard
            icon={<Snowflake className="h-5 w-5" />}
            title="Winterization — $200"
            desc="Shut down water, blow out lines where needed, and protect components from freeze damage."
            badge="Fall Offer"
            href="/contact"
            cta="Book Winterization"
            accent="bg-cyan-600 hover:bg-cyan-700"
            iconClass="bg-cyan-100 text-cyan-800"
            wrapperClass="border-cyan-200 shadow-md shadow-cyan-100"
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
            iconClass="bg-blue-100 text-blue-800"
          />

          {/* Outdoor lighting specials */}
          <OfferCard
            icon={<Lightbulb className="h-5 w-5" />}
            title="Outdoor Lighting — 10% Off"
            desc="Path, accent & security lighting. Energy‑efficient, stunning at night."
            badge="Curb Appeal"
            href="/contact"
            cta="Light My Home"
            accent="bg-amber-600 hover:bg-amber-700"
            iconClass="bg-amber-100 text-amber-800"
            wrapperClass="lg:col-start-1"
          />

          {/* SOD & land leveling specials – winter-long offer */}
          <OfferCard
            icon={<Percent className="h-5 w-5" />}
            title="SOD Installation & Land Leveling — 10% Off All Winter"
            desc="Winter-long special on professional SOD install, sanding/topdressing, and grading to fix low spots, improve drainage, and give you an instantly green lawn before spring."
            badge="Winter-Long Special"
            href="/contact"
            cta="Lock In Winter Pricing"
            accent="bg-amber-700 hover:bg-amber-800"
            iconClass="bg-amber-100 text-amber-800"
            wrapperClass="border-amber-200 shadow-md shadow-amber-100"
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
            iconClass="bg-indigo-100 text-indigo-800"
            wrapperClass="lg:col-start-3"
          />
        </div>

        {/* Disclaimer */}
        <div className="mx-auto max-w-6xl px-6 pb-6 pt-4 text-xs text-gray-600 border-t border-gray-100">
          <p className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-emerald-600" />
            Limited‑time fall sale offers. Most specials end Dec 31. SOD Installation & Land Leveling pricing runs all winter. Cannot be combined with other promotions. Call for details.
          </p>
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
  iconClass,
  wrapperClass,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: string;
  href: string;
  cta: string;
  accent: string;
  iconClass?: string;
  wrapperClass?: string;
}) {
  return (
    <div className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow ${wrapperClass ?? ""}`}> 
      {badge && (
        <span className="absolute right-3 top-3 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-800">
          {badge}
        </span>
      )}
      <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md ${iconClass ?? "bg-gray-900 text-white"}`}>
        {icon}
      </div>
      <h3 className="text-base font-bold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
      <div className="mt-4 md:mt-auto">
        <Link
          href={href}
          className={`inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white ${accent}`}
        >
          {cta}
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}
