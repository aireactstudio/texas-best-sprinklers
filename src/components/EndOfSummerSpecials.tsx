"use client";

import React from "react";
import Link from "next/link";
import { Sprout, Wrench, Percent, Lightbulb, Droplets, Sun } from "lucide-react";

export default function EndOfSummerSpecials() {
  return (
    <section className="relative">
      {/* Refined banner */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

        {/* Header */}
        <div className="px-6 pt-8 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-800">
            <Sprout className="h-4 w-4" /> Spring Special
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">Spring savings on irrigation and installs</h2>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-gray-600">Limited-time spring pricing on inspections, start-ups, installations, lighting, and drainage services.</p>
        </div>

        {/* Offers grid */}
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-5 px-6 pb-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* $60 Sprinkler Inspection & Tune-Up */}
          <OfferCard
            icon={<Wrench className="h-5 w-5" />}
            title="$60 Sprinkler Inspection & Tune‑Up"
            desc="Experienced techs perform a full system check — includes: (1) head coverage & alignment inspection, (2) leak detection & valve testing, and (3) controller programming & schedule optimization for spring watering."
            badge="Most Popular"
            href="/contact"
            cta="Book $60 Inspection"
            accent="bg-emerald-600 hover:bg-emerald-700"
            iconClass="bg-emerald-100 text-emerald-800"
            serviceHref="/services/sprinkler-system-check-up"
            serviceLabel="View check-up service"
          />

          {/* Spring Start-Up Offer */}
          <OfferCard
            icon={<Sun className="h-5 w-5" />}
            title="Spring Start‑Up — $99"
            desc="Pressurize your system after winter, test each zone, adjust heads for even coverage, and set a water-saving schedule ready for the season."
            badge="Spring Offer"
            href="/contact"
            cta="Book Spring Start‑Up"
            accent="bg-sky-600 hover:bg-sky-700"
            iconClass="bg-sky-100 text-sky-800"
            wrapperClass="border-sky-200 shadow-md shadow-sky-100"
            serviceHref="/services/maintenance"
            serviceLabel="View maintenance service"
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
            serviceHref="/services/sprinkler-installation"
            serviceLabel="View installation service"
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
            serviceHref="/services/outdoor-lighting"
            serviceLabel="View lighting service"
          />

          {/* SOD & land leveling specials – spring offer */}
          <OfferCard
            icon={<Sprout className="h-5 w-5" />}
            title="SOD Installation & Land Leveling — 10% Off This Spring"
            desc="Spring special on professional SOD install, sanding/topdressing, and grading to fix low spots, improve drainage, and give you an instantly green lawn this season."
            badge="Spring Special"
            href="/contact"
            cta="Lock In Spring Pricing"
            accent="bg-amber-700 hover:bg-amber-800"
            iconClass="bg-amber-100 text-amber-800"
            wrapperClass="border-amber-200 shadow-md shadow-amber-100"
            serviceHref="/services/sod-and-land-leveling"
            serviceLabel="View SOD service"
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
            serviceHref="/services/drainage-solutions"
            serviceLabel="View drainage service"
          />
        </div>

        {/* Disclaimer */}
        <div className="mx-auto max-w-6xl px-6 pb-6 pt-4 text-xs text-gray-600 border-t border-gray-100">
          <p className="flex items-center gap-2">
            <Sprout className="h-4 w-4 text-emerald-600" />
            Limited‑time spring sale offers. <span className="font-semibold text-gray-700">Mention this ad on our website when you call or book to redeem.</span> Most specials run through the spring season. Cannot be combined with other promotions. Call for details.
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
  serviceHref,
  serviceLabel,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: string;
  href: string; // primary CTA (usually contact)
  cta: string;
  accent: string;
  iconClass?: string;
  wrapperClass?: string;
  serviceHref?: string; // optional deep link to service page
  serviceLabel?: string; // optional label for service link
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
      <div className="mt-4 md:mt-auto flex flex-col gap-2">
        <Link
          href={href}
          className={`inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white ${accent}`}
        >
          {cta}
        </Link>
        {serviceHref && (
          <Link
            href={serviceHref}
            className="inline-flex items-center justify-center text-xs font-medium text-irrigation-darkGreen hover:text-irrigation-darkBlue underline-offset-2 hover:underline"
          >
            <span>{serviceLabel || 'View service details'}</span>
          </Link>
        )}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}
