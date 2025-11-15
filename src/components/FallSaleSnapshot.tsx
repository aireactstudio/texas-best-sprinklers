"use client";

import React from "react";
import { Leaf, Wrench, Percent, Lightbulb, Droplets, Snowflake } from "lucide-react";

// A static, button-less snapshot of the Fall Sale section for screenshots/email use
// Styled to look like a clean PDF handout: centered, calm tones, no links, no hover
export default function FallSaleSnapshot() {
  return (
    <section aria-label="Fall Sale Snapshot" className="relative">
      <div className="relative overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm print:shadow-none">
        {/* Header */}
        <div className="px-8 pt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
            <Leaf className="h-4 w-4" /> Fall Sale
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Seasonal savings on irrigation and installs</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-700">
            Limited-time pricing on winterization, inspection, installations, lighting, and drainage services.
          </p>
        </div>

        {/* Grid (3 / 3 + 2 centered) */}
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 px-8 pb-8 sm:grid-cols-2 lg:grid-cols-3">
          <SnapshotCard
            icon={<Wrench className="h-5 w-5" />}
            iconClass="bg-emerald-100 text-emerald-800"
            title="$20 Sprinkler Inspection & Tune‑Up"
            badge="Most Popular"
            desc="Experienced techs check coverage, leaks, heads, controller & scheduling."
          />

          <SnapshotCard
            icon={<Snowflake className="h-5 w-5" />}
            iconClass="bg-cyan-100 text-cyan-800"
            title="Winterization — $200"
            badge="Fall Offer"
            desc="Shut down water, blow out lines where needed, and protect components from freeze damage."
          />

          <SnapshotCard
            icon={<Percent className="h-5 w-5" />}
            iconClass="bg-blue-100 text-blue-800"
            title="10% Off New Sprinkler Installations"
            badge="New Systems"
            desc="Smart controllers, efficient zones, premium heads & warranty."
          />

          <SnapshotCard
            icon={<Lightbulb className="h-5 w-5" />}
            iconClass="bg-amber-100 text-amber-800"
            title="Outdoor Lighting — 10% Off"
            badge="Curb Appeal"
            desc="Path, accent & security lighting. Energy‑efficient, stunning at night."
            wrapperClass="lg:col-start-1"
          />

          <SnapshotCard
            icon={<Percent className="h-5 w-5" />}
            iconClass="bg-amber-100 text-amber-800"
            title="SOD Installation & Land Leveling — 10% Off All Winter"
            badge="Winter-Long Special"
            desc="Winter-long special on professional SOD install, sanding/topdressing, and grading to fix low spots, improve drainage, and give you an instantly green lawn before spring."
          />

          <SnapshotCard
            icon={<Droplets className="h-5 w-5" />}
            iconClass="bg-indigo-100 text-indigo-800"
            title="Drainage Solutions — 10% Off"
            badge="Solve Standing Water"
            desc="French drains, surface drains, grading & sump solutions to move water out."
            wrapperClass="lg:col-start-3"
          />
        </div>

        {/* Footer note */}
        <div className="mx-auto max-w-5xl border-t border-gray-200 px-8 pb-8 pt-4 text-[13px] leading-relaxed text-gray-700">
          <p>
            Prices shown are promotional and subject to scheduling and availability. Offers end Dec 31 and may not be combined. Please contact Texas Best Sprinklers for full details and service eligibility in your area.
          </p>
        </div>
      </div>
    </section>
  );
}

function SnapshotCard({
  icon,
  title,
  desc,
  badge,
  iconClass,
  wrapperClass,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: string;
  iconClass?: string;
  wrapperClass?: string;
}) {
  return (
    <div className={`relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${wrapperClass ?? ""}`}>
      {badge && (
        <span className="absolute right-3 top-3 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-800">
          {badge}
        </span>
      )}
      <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md ${iconClass ?? "bg-gray-900 text-white"}`}>
        {icon}
      </div>
      <h3 className="text-base font-bold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-700">{desc}</p>
    </div>
  );
}
