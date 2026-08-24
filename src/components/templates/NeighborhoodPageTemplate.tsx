'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import {
  CheckCircle2,
  MapPin,
  Shield,
  Star,
  Award,
  Phone,
  Sparkles,
  Wrench,
  Droplets,
  ArrowRight,
  Quote,
  BadgeDollarSign,
  CalendarClock,
  Home,
  Leaf,
  Waves,
  Images
} from 'lucide-react';
import CTA from '@/components/CTA';
import HomeFAQ from '@/components/HomeFAQ';
import AboutTheArea, { LocalAttraction } from '@/components/AboutTheArea';
import LazyLocationMap from '@/components/LazyLocationMap';
import { buildNeighborhoodStructuredData } from '@/components/neighborhoods/structuredData';
import { getLocationData } from '@/data/locationData';

interface FAQItem {
  question: string;
  answer: string;
}

interface ReviewItem {
  reviewer: string;
  date: string;
  quote: string;
  location?: string;
  stars?: number;
}

interface ConsiderationItem {
  title: string;
  description: string;
}

interface PriceItem {
  label: string;
  range: string;
}

interface RelatedAreaItem {
  name: string;
  description: string;
  link?: string;
}

interface PopularServiceItem {
  title: string;
  description: string;
  link: string;
}

interface TrustCardItem {
  title: string;
  description: string;
}

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

interface CaseStudyItem {
  heading?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  locationNote?: string;
}

interface NeighborhoodPageTemplateProps {
  cityName: string;
  citySlug: string;
  neighborhoodName: string;
  canonicalUrl: string;
  pageTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  introHeading: string;
  intro: React.ReactNode;
  highlights: string[];
  serviceFocus: string[];
  localTips: string[];
  reviews: ReviewItem[];
  considerations: ConsiderationItem[];
  pricing: PriceItem[];
  processSteps: string[];
  faqs: FAQItem[];
  relatedAreas: RelatedAreaItem[];
  popularServices: PopularServiceItem[];
  attractions: LocalAttraction[];
  localLivingContent: React.ReactNode;
  trustCards?: TrustCardItem[];
  gallery?: GalleryItem[];
  caseStudy?: CaseStudyItem;
  ctaTitle?: string;
  ctaSubtitle?: string;
  showMap?: boolean;
}

const TRUST_CARD_ICONS = [Home, Leaf, Waves, Shield];

export default function NeighborhoodPageTemplate({
  cityName,
  citySlug,
  neighborhoodName,
  canonicalUrl,
  pageTitle,
  metaDescription,
  heroTitle,
  heroDescription,
  introHeading,
  intro,
  highlights,
  serviceFocus,
  localTips,
  reviews,
  considerations,
  pricing,
  processSteps,
  faqs,
  relatedAreas,
  popularServices,
  attractions,
  localLivingContent,
  trustCards,
  gallery,
  caseStudy,
  ctaTitle,
  ctaSubtitle,
  showMap = true
}: NeighborhoodPageTemplateProps) {
  const locationInfo = getLocationData(citySlug);
  const coordinates =
    locationInfo && 'coordinates' in locationInfo ? locationInfo.coordinates : undefined;
  const serviceRadiusMiles =
    locationInfo && 'serviceRadius' in locationInfo
      ? (locationInfo as { serviceRadius?: number }).serviceRadius
      : undefined;

  const structuredData = buildNeighborhoodStructuredData({
    canonical: canonicalUrl,
    neighborhoodName: `${neighborhoodName}, ${cityName}`,
    cityName,
    pageTitle,
    description: metaDescription,
    faqItems: faqs,
    geo: coordinates,
    serviceRadiusMiles,
    reviews
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Script id={`jsonld-neighborhood-${citySlug}-${neighborhoodName}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <section className="relative overflow-hidden min-h-[70vh] text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/optimized/hero-background.webp"
            alt={`${neighborhoodName} neighborhood irrigation services`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/78 to-slate-950/72" />
        </div>

        <div className="container-custom relative z-10 pt-36 pb-20 lg:pt-40 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-sm mb-5 text-white/90 flex flex-wrap items-center gap-2">
                <Link href={`/${citySlug}`} className="hover:underline font-medium">
                  ← Back to {cityName}
                </Link>
                <span className="text-white/70">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-emerald-300" />
                  Serving {neighborhoodName}, {cityName} TX
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5 drop-shadow-lg">{heroTitle}</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-7">{heroDescription}</p>

              <div className="flex flex-wrap gap-3 mb-7">
                <a
                  href="tel:8173047896"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call (817) 304-7896
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  Get Free Quote
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm text-white/90">
                <div className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-300 fill-current" />
                  <span>5.0 Average Rating</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-300" />
                  <span>Licensed Irrigator LI22462</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-slate-950/65 backdrop-blur-md p-6 md:p-8 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 mb-3">Neighborhood Snapshot</p>
              <h2 className="text-2xl font-bold mb-4">Built for {neighborhoodName} Properties</h2>
              <p className="text-slate-100 text-sm mb-6">
                Localized sprinkler, irrigation, and drainage support designed for North Texas heat, clay soil performance, and neighborhood
                curb appeal standards.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/10 border border-white/10 p-3">
                  <p className="text-2xl font-bold text-emerald-300">10+</p>
                  <p className="text-xs text-white/80">Years Serving DFW</p>
                </div>
                <div className="rounded-lg bg-white/10 border border-white/10 p-3">
                  <p className="text-2xl font-bold text-emerald-300">500+</p>
                  <p className="text-xs text-white/80">Projects Completed</p>
                </div>
                <div className="rounded-lg bg-white/10 border border-white/10 p-3">
                  <p className="text-2xl font-bold text-emerald-300">24/7</p>
                  <p className="text-xs text-white/80">Emergency Support</p>
                </div>
                <div className="rounded-lg bg-white/10 border border-white/10 p-3">
                  <p className="text-2xl font-bold text-emerald-300">3-Year</p>
                  <p className="text-xs text-white/80">New Install Warranty</p>
                </div>
              </div>

              {showMap && coordinates && (
                <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
                  <LazyLocationMap
                    locationData={locationInfo}
                    radiusMiles={serviceRadiusMiles ?? 8}
                    height="220px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-8 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm">
              <Shield className="h-4 w-4 text-irrigation-blue" />
              Licensed &amp; Insured
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm">
              <Star className="h-4 w-4 text-amber-500" />
              5.0 Google Rating
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm">
              <Award className="h-4 w-4 text-emerald-600" />
              3-Year Installation Warranty
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              500+ Completed Projects
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 items-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{introHeading}</h2>
              {typeof intro === 'string' ? (
                <p className="text-slate-700 leading-relaxed">{intro}</p>
              ) : (
                <div className="space-y-4 text-slate-700 leading-relaxed">{intro}</div>
              )}
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-700 mb-2">Fast Response</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Same-week scheduling in most cases</h3>
              <p className="text-sm text-slate-700 mb-5">
                We prioritize active leaks and non-functioning zones, especially during summer stress periods.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-irrigation-blue hover:underline">
                Request your estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-b from-white to-slate-50 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-irrigation-blue mb-3">What Homeowners Notice Most</h3>
              <ul className="space-y-2 text-slate-700 list-disc pl-5">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-b from-white to-slate-50 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-irrigation-blue mb-3">Recommended Services</h3>
              <ul className="space-y-2 text-slate-700 list-disc pl-5">
                {serviceFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm">
                <Link href={`/${citySlug}`} className="font-semibold text-irrigation-blue hover:underline">
                  View all {cityName} services
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-b from-white to-slate-50 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Droplets className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-irrigation-blue mb-3">Neighborhood Watering Tips</h3>
              <ul className="space-y-2 text-slate-700 list-disc pl-5">
                {localTips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {trustCards && trustCards.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why homeowners in {neighborhoodName} call us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {trustCards.map((card, idx) => {
                  const Icon = TRUST_CARD_ICONS[idx % TRUST_CARD_ICONS.length];
                  return (
                    <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{card.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Nearby Homeowners Say</h2>
          <p className="text-slate-600 mb-6 max-w-3xl">
            Quotes below are from real Texas Best Sprinklers customers in {cityName} and nearby DFW cities. We do not invent neighborhood-specific names.
          </p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max gap-5 animate-neighborhood-reviews hover:[animation-play-state:paused]">
              {[...reviews, ...reviews].map((review, idx) => {
                const starCount = review.stars ?? 5;
                return (
                  <div
                    key={`${review.reviewer}-${review.date}-${idx}`}
                    className="w-[320px] md:w-[360px] rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Quote className="h-6 w-6 text-irrigation-blue/40 mb-3" />
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {Array.from({ length: starCount }).map((_, star) => (
                        <Star key={`${review.reviewer}-${idx}-${star}`} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{review.quote}</p>
                    <p className="mt-4 text-sm font-semibold text-slate-900">{review.reviewer}</p>
                    <p className="text-xs text-slate-500">
                      {review.location ? `${review.location} · ${review.date}` : review.date}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-5">
            <Link href={`/${citySlug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-irrigation-blue hover:underline">
              See {cityName} service details and more homeowner feedback
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {gallery && gallery.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <div className="mb-6 flex items-center gap-3">
              <Images className="h-7 w-7 text-irrigation-blue" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Work Near {neighborhoodName}</h2>
            </div>
            <p className="text-slate-600 max-w-3xl mb-8">
              Photos are from Texas Best Sprinklers projects in {cityName} and nearby DFW — not claimed as street-level work inside {neighborhoodName} unless noted.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {gallery.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-slate-700">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {caseStudy && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {caseStudy.heading || `Featured work for homes like these in ${neighborhoodName}`}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
              <div className="relative min-h-[260px] aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
                <Image src={caseStudy.image} alt={caseStudy.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{caseStudy.title}</h3>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">{caseStudy.body}</p>
                {caseStudy.locationNote && <p className="mt-4 text-sm text-slate-500">{caseStudy.locationNote}</p>}
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-irrigation-blue hover:underline">
                  Ask about similar work for your property
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-slate-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{neighborhoodName}-Specific Irrigation Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {considerations.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-emerald-300 mb-2">{item.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Estimated Service Investment in {neighborhoodName}</h2>
            <p className="text-slate-700 max-w-3xl mb-6">
              Final pricing depends on scope, access, part quality, slope, and existing system condition. These ranges help plan budgets before
              an on-site estimate.
            </p>
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
              {pricing.map((item) => (
                <div key={item.label} className="grid grid-cols-2 border-b border-slate-100 last:border-b-0">
                  <div className="px-5 py-3 font-medium text-slate-900 bg-slate-50 inline-flex items-center gap-2">
                    <BadgeDollarSign className="h-4 w-4 text-emerald-600" />
                    {item.label}
                  </div>
                  <div className="px-5 py-3 text-slate-700">{item.range}</div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-irrigation-blue hover:underline">
                Get an exact quote for your {neighborhoodName} property
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Popular Services in {neighborhoodName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {popularServices.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-700 mb-4">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-semibold text-irrigation-blue hover:underline">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-700 text-white">
        <div className="container-custom flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Need a walkthrough of your {neighborhoodName} system?</h2>
            <p className="text-emerald-50 max-w-2xl">
              Call (817) 304-7896 or send photos of dry spots, leaks, or pooling. Quotes go to{' '}
              <Link href="/contact" className="font-semibold text-white underline decoration-2 underline-offset-4">
                /contact
              </Link>
              — there is no online quote widget.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:8173047896"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-emerald-800 hover:bg-emerald-50"
            >
              <Phone className="h-4 w-4" />
              Call (817) 304-7896
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our {neighborhoodName} Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div key={step} className="rounded-2xl border border-slate-200 p-5 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-irrigation-blue to-emerald-500" />
                <p className="text-xs font-semibold text-irrigation-blue mb-2 inline-flex items-center gap-1.5">
                  <CalendarClock className="h-3.5 w-3.5" />
                  Step {idx + 1}
                </p>
                <p className="text-sm text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <HomeFAQ
          title={`${neighborhoodName} FAQs`}
          subtitle={`Common sprinkler and irrigation questions for homeowners in ${neighborhoodName}, ${cityName}`}
          badgeText={`${neighborhoodName} answers`}
          sidebarTitle="Neighborhood Topics"
          sidebarSubtitle={`Questions specific to ${neighborhoodName}`}
          contactButtonText={`Get Help in ${neighborhoodName}`}
          faqs={faqs}
          includeSchema={false}
        />
      )}

      <AboutTheArea
        cityName={cityName}
        neighborhoodName={neighborhoodName}
        attractions={attractions}
        localLivingContent={localLivingContent}
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Also Serving Nearby {cityName} Neighborhoods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedAreas.map((area) => {
              const content = (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 h-full hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-semibold text-slate-900 mb-2">{area.name}</h3>
                  <p className="text-sm text-slate-700">{area.description}</p>
                </div>
              );

              return area.link ? (
                <Link key={area.name} href={area.link} className="block">
                  {content}
                </Link>
              ) : (
                <div key={area.name}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        locationName={neighborhoodName}
        title={ctaTitle ?? `Ready to Improve Irrigation in ${neighborhoodName}?`}
        subtitle={
          ctaSubtitle ??
          `Get a free quote for sprinkler, drainage, or lighting work. Call (817) 304-7896. Licensed irrigator LI22462 serving ${neighborhoodName}, ${cityName}.`
        }
        buttonText="Get Free Estimate"
        buttonLink="/contact"
      />

      <style jsx>{`
        @keyframes neighborhood-review-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-neighborhood-reviews {
          animation: neighborhood-review-marquee 34s linear infinite;
        }
      `}</style>
    </div>
  );
}
