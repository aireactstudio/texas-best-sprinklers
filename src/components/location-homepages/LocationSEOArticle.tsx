"use client";

import React from 'react';
import Link from 'next/link';

interface Props {
  locationSlug: string;
  locationName: string;
}

export default function LocationSEOArticle({ locationSlug, locationName }: Props) {
  if (locationSlug === 'westlake') {
    return (
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-irrigation-gray/40 to-white pointer-events-none" />
        <div className="container-custom relative">
          <div className="bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
            <div className="px-6 sm:px-10 py-8 sm:py-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
                Exclusive Estate Irrigation & Sprinkler Services in Westlake, TX
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Westlake is known for its distinctive estates, rolling hills, and meticulous landscaping. At Texas Best Sprinklers, we provide
                premier irrigation services designed to meet the high standards of Westlake homeowners. Whether you reside in Vaquero,
                Glenwyck Farms, or Terra Bella, our licensed professionals deliver discreet, high-quality <Link href="/services/sprinkler-installation" className="text-irrigation-blue hover:underline font-semibold">system installation</Link> and repair
                to keep your grounds pristine.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand the unique challenges of large-acreage irrigation, from managing water pressure across elevation changes to
                ensuring comprehensive coverage for expansive turf and complex garden beds. Our smart irrigation solutions help you conserve
                water while maintaining the lush, healthy landscape your property deserves.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Tailored Irrigation Solutions for Westlake Estates</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                From new construction to system modernization, we offer a full suite of services for Westlake properties:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <Link href="/services/sprinkler-repair" className="text-irrigation-blue hover:underline font-semibold">Precision Sprinkler Repair</Link>: Expert diagnostics and repair for complex systems, including wiring issues, pump troubleshooting, and leak detection.
                </li>
                <li>
                  <Link href="/services/sprinkler-system-check-up" className="text-irrigation-blue hover:underline font-semibold">Comprehensive System Audits</Link>: Seasonal inspections to optimize performance, adjust head coverage, and program smart controllers for maximum efficiency.
                </li>
                <li>
                  <Link href="/services/sprinkler-installation" className="text-irrigation-blue hover:underline font-semibold">Custom Design & Installation</Link>: Tailored systems using commercial-grade components from Hunter, Rain Bird, and Toro.
                </li>
                <li>
                  <Link href="/services/drip-irrigation" className="text-irrigation-blue hover:underline font-semibold">Drip Irrigation for Landscaping</Link>: Targeted watering for flower beds, shrubs, and trees to prevent disease and water waste.
                </li>
                <li>
                  <Link href="/services/drainage-solutions" className="text-irrigation-blue hover:underline font-semibold">Advanced Drainage Solutions</Link>: French drains, catch basins, and grading to protect your home and landscape from erosion and standing water.
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Smart Water Management</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Preserving Westlake’s natural beauty requires responsible water stewardship. We specialize in Wi-Fi enabled smart controllers
                that adjust watering schedules based on local weather data, soil moisture sensors, and flow meters to detect leaks instantly.
                Upgrade your system to reduce water usage by up to 50% without sacrificing landscape quality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-irrigation-gray/40 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Why Westlake Trusts Us</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Discreet, professional, and uniformed crews</li>
                    <li>Experience with large-scale estate systems</li>
                    <li>Licensed and insured for your peace of mind</li>
                    <li>Commitment to using only premium materials</li>
                  </ul>
                </div>
                <div className="bg-irrigation-gray/40 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Service Areas Include</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Vaquero</li>
                    <li>Glenwyck Farms</li>
                    <li>Terra Bella</li>
                    <li>Granada</li>
                    <li>Aspen Lane & Paigebrooke</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Don't let irrigation issues compromise your landscape. Whether you need a routine check-up or a complete system overhaul,
                Texas Best Sprinklers brings the expertise and reliability you expect.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-md bg-irrigation-blue px-4 py-2 text-white font-semibold shadow hover:bg-irrigation-darkBlue transition">
                  Schedule Service
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-irrigation-blue font-semibold border border-irrigation-blue hover:bg-irrigation-gray/40 transition">
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (locationSlug === 'arlington') {
    return (
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-irrigation-gray/40 to-white pointer-events-none" />
        <div className="container-custom relative">
          <div className="bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
            <div className="px-6 sm:px-10 py-8 sm:py-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
                Top-Rated Sprinkler Repair & Installation in Arlington, TX
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Home to the Cowboys, Rangers, and beautiful parks like River Legacy, Arlington is a vibrant community that takes pride in its outdoor spaces. 
                At Texas Best Sprinklers, we help Arlington homeowners maintain lush, healthy lawns with expert irrigation services. From the established neighborhoods 
                of Interlochen to the modern developments in Viridian, our licensed technicians provide reliable <Link href="/services/sprinkler-repair" className="text-irrigation-blue hover:underline font-semibold">sprinkler repair</Link> and 
                <Link href="/services/sprinkler-installation" className="text-irrigation-blue hover:underline font-semibold"> new system installation</Link> tailored to local soil conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Arlington's clay-heavy soil and hot summers can be tough on landscapes. We specialize in designing and maintaining systems that deliver 
                precise water coverage, preventing runoff and ensuring deep root growth for drought resistance.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Complete Irrigation Services for Arlington</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Whether you need a quick fix or a comprehensive upgrade, we have you covered:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <Link href="/services/sprinkler-repair" className="text-irrigation-blue hover:underline font-semibold">Fast Sprinkler Repairs</Link>: We fix broken heads, leaking valves, and damaged pipes quickly to prevent water waste.
                </li>
                <li>
                  <Link href="/services/sprinkler-system-check-up" className="text-irrigation-blue hover:underline font-semibold">System Tune-Ups</Link>: Comprehensive inspections to adjust heads, set controllers, and ensure optimal performance.
                </li>
                <li>
                  <Link href="/services/sprinkler-installation" className="text-irrigation-blue hover:underline font-semibold">Smart System Installation</Link>: Water-efficient designs featuring Wi-Fi controllers and rain sensors.
                </li>
                <li>
                  <Link href="/services/drainage-solutions" className="text-irrigation-blue hover:underline font-semibold">Drainage Solutions</Link>: French drains and catch basins to solve standing water issues common in Arlington yards.
                </li>
                 <li>
                  <Link href="/services/sprinkler-system-reroutes" className="text-irrigation-blue hover:underline font-semibold">System Reroutes</Link>: Expert adjustments for pool installations, patio expansions, or landscaping changes.
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Why Arlington Homeowners Choose Us</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to delivering exceptional service and lasting results. Our team uses only high-quality parts from trusted brands 
                like Rain Bird, Hunter, and Toro. We understand local watering restrictions and help you stay compliant while keeping your lawn green.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-irrigation-gray/40 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Arlington Service Promise</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Prompt, reliable scheduling</li>
                    <li>Upfront, transparent pricing</li>
                    <li>Licensed and insured professionals</li>
                    <li>3-year warranty on new installations</li>
                  </ul>
                </div>
                <div className="bg-irrigation-gray/40 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Serving All Arlington Neighborhoods</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Viridian & North Arlington</li>
                    <li>Dalworthington Gardens & Pantego</li>
                    <li>Interlochen & Lake Arlington</li>
                    <li>South Arlington & Mansfield Border</li>
                    <li>Downtown & UT Arlington Area</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ready to upgrade your irrigation system or need a repair? Contact Texas Best Sprinklers today for expert service in Arlington.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-md bg-irrigation-blue px-4 py-2 text-white font-semibold shadow hover:bg-irrigation-darkBlue transition">
                  Book Service
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-irrigation-blue font-semibold border border-irrigation-blue hover:bg-irrigation-gray/40 transition">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
