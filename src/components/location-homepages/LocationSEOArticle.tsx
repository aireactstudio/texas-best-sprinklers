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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-irrigation-blue mb-3">Arlington Service Area Experts</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
                Arlington Sprinkler Repair & Smart Irrigation Installation—Built for North Texas Heat
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Arlington homeowners see the same pain points every summer: dry patches in full sun, broken spray heads along sidewalks,
                and water bills climbing because systems are outdated or poorly tuned. Texas Best Sprinklers delivers licensed,
                detail-focused <Link href="/services/sprinkler-repair" className="text-irrigation-blue hover:underline font-semibold">sprinkler repair</Link>,
                precision <Link href="/services/sprinkler-installation" className="text-irrigation-blue hover:underline font-semibold">irrigation installation</Link>,
                and proactive maintenance designed specifically for Arlington’s clay soils, slope transitions, and long heat stretches.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From established landscapes in Interlochen and Dalworthington Gardens to newer homes in Viridian and South Arlington,
                we engineer systems that apply water evenly, reduce runoff, and protect both turf and plantings with smart scheduling,
                pressure regulation, and matched precipitation rates.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">What Makes Our Arlington Page Different</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Most service pages stop at generic promises. We focus on performance metrics and field-tested upgrades that matter in Arlington:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Coverage first: we tune arc, radius, and nozzle selection to eliminate common "green by the head, brown between heads" patterns.</li>
                <li>Water-smart controls: Wi-Fi scheduling tied to weather data, plus seasonal runtime adjustments that prevent overwatering.</li>
                <li>Code-aware work: installs and repairs aligned with local backflow, controller, and watering-guideline expectations.</li>
                <li>Durability upgrades: Schedule 40 swing assemblies, waterproof splices, and high-quality components from Hunter, Rain Bird, and Toro.</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Complete Irrigation Services for Arlington Properties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-irrigation-gray/40 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Repair & Optimization</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li><Link href="/services/sprinkler-repair" className="text-irrigation-blue hover:underline font-semibold">Sprinkler repair</Link> for leaks, broken heads, stuck valves, and controller faults</li>
                    <li><Link href="/services/sprinkler-system-check-up" className="text-irrigation-blue hover:underline font-semibold">System check-ups</Link> with zone-by-zone audits and runtime calibration</li>
                    <li><Link href="/services/sprinkler-system-reroutes" className="text-irrigation-blue hover:underline font-semibold">Sprinkler reroutes</Link> for pools, patios, hardscape expansions, and add-ons</li>
                    <li>Pressure and head-spacing corrections to stop misting, overspray, and runoff</li>
                  </ul>
                </div>
                <div className="bg-irrigation-gray/40 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Install & Upgrade</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li><Link href="/services/sprinkler-installation" className="text-irrigation-blue hover:underline font-semibold">New sprinkler installation</Link> with hydraulic zoning and future expansion planning</li>
                    <li><Link href="/services/drip-irrigation" className="text-irrigation-blue hover:underline font-semibold">Drip irrigation conversions</Link> for beds, foundations, and tree rings</li>
                    <li><Link href="/services/drainage-solutions" className="text-irrigation-blue hover:underline font-semibold">Drainage improvements</Link> for low spots and pooling after storms</li>
                    <li>Smart controller upgrades with rain/freeze protection and leak-alert flow monitoring</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Neighborhood-Focused Service Across Arlington</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We actively serve North Arlington, Viridian, Interlochen, Dalworthington Gardens, Pantego, the UT Arlington corridor,
                and South Arlington neighborhoods near Mansfield. Each area has different irrigation demands based on lot layout, tree
                density, and sun exposure—and our zone design reflects those differences.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">Our 5-Step Arlington Irrigation Process</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                <li><span className="font-semibold">On-site diagnosis:</span> Full controller, valve, wiring, and head performance review.</li>
                <li><span className="font-semibold">Pressure + coverage mapping:</span> We identify weak zones, shadowed areas, and overwatered turf.</li>
                <li><span className="font-semibold">Clear recommendations:</span> Options are prioritized by impact, efficiency, and budget.</li>
                <li><span className="font-semibold">Professional execution:</span> Clean trenching, durable fittings, and precise nozzle alignment.</li>
                <li><span className="font-semibold">Smart programming:</span> Seasonal schedules and homeowner walkthrough before we wrap.</li>
              </ol>

              <div className="bg-irrigation-blue/5 border border-irrigation-blue/20 rounded-xl p-5 mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Why Arlington Homeowners Choose Texas Best Sprinklers</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Licensed, insured local team with rapid scheduling windows</li>
                  <li>Upfront estimates and practical repair-vs-replace guidance</li>
                  <li>Workmanship-backed installations and premium component standards</li>
                  <li>Water-efficiency mindset that helps cut waste without sacrificing curb appeal</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6 mb-4">
                If your Arlington system is wasting water, leaving dry spots, or struggling to keep up in peak summer, we can fix it.
                Book a service call or request a design quote and get an irrigation plan built for long-term performance.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-md bg-irrigation-blue px-4 py-2 text-white font-semibold shadow hover:bg-irrigation-darkBlue transition">
                  Book Arlington Service
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-irrigation-blue font-semibold border border-irrigation-blue hover:bg-irrigation-gray/40 transition">
                  Request Irrigation Quote
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
