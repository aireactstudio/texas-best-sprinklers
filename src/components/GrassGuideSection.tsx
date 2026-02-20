'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Leaf, Droplets, Sun, Shield, ChevronDown, ChevronUp, Scissors, ThermometerSun, TreePine, Footprints } from 'lucide-react';

const grassTypes = [
  {
    name: 'Zoysia',
    tagline: 'Our #1 Recommendation',
    recommended: true,
    color: 'emerald',
    sunReq: '4–8 hrs',
    waterReq: '~1" / week',
    mowing: 'Every 10–14 days',
    traffic: 'Excellent',
    varieties: ['Zeon (fine blade, deep green)', 'Palisades (shade champion)', 'Emerald (dense carpet)'],
    pros: [
      'Best shade tolerance of any warm-season grass',
      'Dense growth chokes out weeds naturally',
      'Drought-hardy — goes dormant, bounces back',
      'Soft, carpet-like feel underfoot',
      'Slow growth = less mowing',
      'Thrives in North Texas heat (100°F+)',
    ],
    cons: [
      'Higher upfront sod cost',
      'Slower to establish (plan 2 full seasons)',
      'Can develop thatch — needs occasional dethatching',
      'Needs soil prep on heavy alkaline clay',
    ],
    irrigation: 'Zoysia performs best with deep, infrequent watering using cycle-and-soak programming. We set sprinkler zones to run shorter intervals (5–8 min per zone depending on head type) to prevent pooling on clay soil, repeated 2–3 times per watering day. A properly calibrated smart controller paired with soil moisture sensors keeps Zoysia green while using 30–40% less water than a standard timer.',
  },
  {
    name: 'Bermuda',
    tagline: 'The Workhorse',
    recommended: false,
    color: 'blue',
    sunReq: '6–8+ hrs',
    waterReq: '~1–1.5" / week',
    mowing: 'Every 5–7 days',
    traffic: 'Excellent',
    varieties: ['Tifway 419 (sports-grade)', 'Celebration (blue-green)', 'Latitude 36 (cold-tolerant)'],
    pros: [
      'Most affordable sod option',
      'Extremely fast establishment',
      'Aggressive self-repair from damage',
      'Handles heavy foot traffic and pets',
      'Low fertilization needs',
    ],
    cons: [
      'Zero shade tolerance — needs full sun',
      'Invasive — grows into beds and sidewalks',
      'Requires frequent mowing in summer',
      'Goes brown earlier in fall',
    ],
    irrigation: 'Bermuda needs consistent moisture during establishment but becomes very drought-tolerant once rooted. We program zones for early-morning deep watering (1" per session) on your city\'s allowed watering days. Pressure-regulated heads prevent misting and waste on Bermuda\'s dense canopy.',
  },
  {
    name: 'St. Augustine',
    tagline: 'The Shade Specialist',
    recommended: false,
    color: 'teal',
    sunReq: '3–6 hrs',
    waterReq: '~1.5" / week',
    mowing: 'Every 7–10 days',
    traffic: 'Moderate',
    varieties: ['Palmetto (most shade-tolerant)', 'Floratam (chinch bug resistant)', 'CitraBlue (compact growth)'],
    pros: [
      'Excellent shade performance',
      'Lush, wide-blade tropical appearance',
      'Good cold tolerance for a warm-season grass',
    ],
    cons: [
      'Highest water demand of the three',
      'Susceptible to chinch bugs and fungal disease',
      'Poor traffic tolerance',
      'Doesn\'t recover well from damage',
      'Struggles in North Texas alkaline clay without amendment',
    ],
    irrigation: 'St. Augustine is thirsty. We design zones with matched precipitation rates and add drip lines along foundation beds where St. Augustine commonly borders structures. A smart controller with rain sensor is essential to manage the higher water budget without violating local restrictions.',
  },
];

export default function GrassGuideSection() {
  const [expandedGrass, setExpandedGrass] = useState<string | null>('Zoysia');

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-green-950 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-4">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-semibold tracking-wide uppercase">Expert Lawn Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Which Grass Is Right for Your <span className="text-emerald-400">North Texas</span> Lawn?
          </h2>
          <p className="text-lg text-green-200/80 max-w-3xl mx-auto leading-relaxed">
            After 10 years of installing and maintaining irrigation systems across the DFW metroplex, we've seen firsthand which turf thrives and which struggles. 
            The wrong grass paired with the wrong irrigation setup wastes water, money, and your weekends. Here's what actually works.
          </p>
        </div>

        {/* Why This Matters callout */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-10 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-3">Why Your Grass Choice Affects Your Irrigation System</h3>
          <p className="text-green-200/70 leading-relaxed">
            Every grass type has different root depth, water absorption rate, and shade behavior. A sprinkler system calibrated for Bermuda will overwater Zoysia and underwater St. Augustine. 
            We design every system around the specific turf on your property — head selection, zone timing, nozzle precipitation rates, and controller programming are all tuned to your grass type, 
            your soil profile, and your city's watering restrictions. That's why choosing the right grass <em>before</em> you install or rezone a system saves thousands long-term.
          </p>
        </div>

        {/* Grass Cards */}
        <div className="space-y-4">
          {grassTypes.map((grass) => {
            const isExpanded = expandedGrass === grass.name;
            return (
              <div
                key={grass.name}
                className={`rounded-2xl border transition-all duration-300 ${
                  grass.recommended
                    ? 'bg-emerald-950/60 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                {/* Card Header */}
                <button
                  onClick={() => setExpandedGrass(isExpanded ? null : grass.name)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      grass.recommended ? 'bg-emerald-500 text-white' : 'bg-white/10 text-green-300'
                    }`}>
                      <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-white">{grass.name}</h3>
                        {grass.recommended && (
                          <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-green-300/70 mt-0.5">{grass.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {/* Quick stats - desktop only */}
                    <div className="hidden md:flex items-center gap-6 text-sm text-green-200/60">
                      <div className="flex items-center gap-1.5">
                        <Sun className="w-3.5 h-3.5" />
                        <span>{grass.sunReq}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Droplets className="w-3.5 h-3.5" />
                        <span>{grass.waterReq}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Scissors className="w-3.5 h-3.5" />
                        <span>{grass.mowing}</span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-green-300/50" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-green-300/50" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 border-t border-white/5 pt-5">
                    {/* Mobile stats */}
                    <div className="flex md:hidden flex-wrap gap-3 mb-5">
                      <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-green-200/70">
                        <Sun className="w-3.5 h-3.5" /> {grass.sunReq} sun
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-green-200/70">
                        <Droplets className="w-3.5 h-3.5" /> {grass.waterReq}
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-green-200/70">
                        <Scissors className="w-3.5 h-3.5" /> Mow {grass.mowing}
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-green-200/70">
                        <Footprints className="w-3.5 h-3.5" /> Traffic: {grass.traffic}
                      </div>
                    </div>

                    {/* Varieties */}
                    <div className="mb-5">
                      <h4 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2">Best Varieties for DFW</h4>
                      <div className="flex flex-wrap gap-2">
                        {grass.varieties.map((v, i) => (
                          <span key={i} className="bg-white/5 border border-white/10 text-green-200/80 text-xs px-3 py-1.5 rounded-lg">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">Strengths</h4>
                        <ul className="space-y-2">
                          {grass.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-green-200/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">Watch Out For</h4>
                        <ul className="space-y-2">
                          {grass.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-green-200/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Irrigation tie-in */}
                    <div className={`rounded-xl p-4 sm:p-5 ${
                      grass.recommended ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-white/5 border border-white/10'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Droplets className={`w-4 h-4 ${grass.recommended ? 'text-emerald-400' : 'text-blue-400'}`} />
                        <h4 className="text-sm font-bold text-white">How We Irrigate {grass.name}</h4>
                      </div>
                      <p className="text-sm text-green-200/60 leading-relaxed">{grass.irrigation}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-3">Not Sure Which Grass You Have?</h3>
            <p className="text-green-200/70 mb-6 max-w-2xl mx-auto">
              We identify your turf type during every service call and system check-up — free of charge. 
              If your current system isn't dialed in for your grass, we'll show you exactly what to adjust. 
              New sod going down? Let us design the irrigation <em>first</em> so every zone is matched from day one.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
              >
                Get a Free Lawn Assessment
              </Link>
              <Link
                href="/services/sprinkler-installation"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3.5 rounded-xl transition-all border border-white/10"
              >
                View Sprinkler Installation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
