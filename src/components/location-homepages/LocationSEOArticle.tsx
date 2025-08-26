"use client";

import React from 'react';
import Link from 'next/link';

interface Props {
  locationSlug: string;
  locationName: string;
}

export default function LocationSEOArticle({ locationSlug, locationName }: Props) {
  if (locationSlug !== 'keller') return null;

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-irrigation-gray/40 to-white pointer-events-none" />
      <div className="container-custom relative">
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
          <div className="px-6 sm:px-10 py-8 sm:py-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
              Premium Sprinkler and Irrigation Services in {locationName}, TX
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Texas Best Sprinklers, we proudly serve homeowners and businesses across {locationName}, Texas with reliable, high‑quality
              sprinkler and irrigation solutions tailored to North Texas landscapes. From smart, water‑efficient <Link href="/keller/sprinkler-installation-services-in-keller-tx" className="text-irrigation-blue hover:underline font-semibold">sprinkler installation</Link> to fast, warrantied <Link href="/keller/irrigation-repair-services-in-keller-tx" className="text-irrigation-blue hover:underline font-semibold">irrigation repair</Link>, our licensed team keeps your lawn healthy, efficient, and code‑compliant.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a local company, we understand Keller’s clay soils, rolling grades, and city watering guidelines. We design balanced zones,
              set smart schedules, and install pressure‑regulated heads to reduce misting and overspray. Whether you’re in Marshall Ridge,
              Hidden Lakes, Highland Oaks, or near Keller Town Center, we build systems that deliver uniform coverage and long‑term value.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Comprehensive Services for Keller Properties</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Need a tune‑up before summer heat? Expanding a patio or adding a pool? We offer a full range of services to fit your needs:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <Link href="/keller/sprinkler-repair-services-in-keller-tx" className="text-irrigation-blue hover:underline font-semibold">Sprinkler repair</Link> for broken heads, stuck valves, wiring faults, and coverage problems.
              </li>
              <li>
                Seasonal <Link href="/keller/sprinkler-system-check-up-services-in-keller-tx" className="text-irrigation-blue hover:underline font-semibold">sprinkler system check‑ups</Link> that optimize pressure, nozzles, head height, and controller settings.
              </li>
              <li>
                Smart <Link href="/keller/sprinkler-installation-services-in-keller-tx" className="text-irrigation-blue hover:underline font-semibold">sprinkler installation</Link> using Wi‑Fi controllers, rain/freeze sensors, and high‑efficiency nozzles.
              </li>
              <li>
                Water‑saving <Link href="/keller/drip-irrigation-services-in-keller-tx" className="text-irrigation-blue hover:underline font-semibold">drip irrigation</Link> for beds, trees, and foundations to minimize runoff and evaporation.
              </li>
              <li>
                Construction‑ready <Link href="/keller/sprinkler-system-reroutes-services-in-keller-tx" className="text-irrigation-blue hover:underline font-semibold">sprinkler system reroutes</Link> for pools, patios, and landscape redesigns.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Built for Efficiency, Reliability, and Compliance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every Keller installation and repair is performed to manufacturer specs with professional materials like Schedule 40 PVC
              manifolds, swing joints, brass backflow assemblies where required, and waterproof splices. We match precipitation rates across
              zones and set seasonal schedules to help you stay within Keller watering restrictions while keeping turf and beds thriving.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Local Expertise You Can Trust</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our technicians are experienced with Hunter, Rain Bird, and Toro systems commonly found in {locationName}. We provide clear
              diagnostics, upfront pricing, and a workmanship guarantee. Most common issues—like leaking manifolds, failed solenoids, or
              bad wire splices—are resolved in a single visit so you can get back to enjoying your outdoor space sooner.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-irrigation-gray/40 rounded-lg p-5">
                <h4 className="font-semibold text-gray-900 mb-2">Popular Upgrades in Keller</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Wi‑Fi smart controllers with weather‑based scheduling</li>
                  <li>Pressure‑regulated spray bodies to minimize misting</li>
                  <li>MP Rotator nozzles for uniform distribution</li>
                  <li>Drip conversions for beds and foundations</li>
                </ul>
              </div>
              <div className="bg-irrigation-gray/40 rounded-lg p-5">
                <h4 className="font-semibold text-gray-900 mb-2">Why Homeowners Choose Us</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Licensed, insured, and local to Northeast Tarrant County</li>
                  <li>Clean workmanship and respectful site cleanup</li>
                  <li>Transparent estimates and helpful maintenance tips</li>
                  <li>Warranty on parts we supply and install</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              If your lawn shows dry spots, you notice excessive runoff, or your controller schedules haven’t been updated in a while,
              it’s a great time to book a system check‑up. Small adjustments—like head height, matched nozzles, or updated programs—can
              dramatically improve performance and reduce your water bill.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-md bg-irrigation-blue px-4 py-2 text-white font-semibold shadow hover:bg-irrigation-darkBlue transition">
                Schedule Repair
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-irrigation-blue font-semibold border border-irrigation-blue hover:bg-irrigation-gray/40 transition">
                Request Installation Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
