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
  CircleCheckBig
} from 'lucide-react';
import CTA from '@/components/CTA';
import AboutTheArea, { LocalAttraction } from '@/components/AboutTheArea';
import { buildNeighborhoodStructuredData } from '@/components/neighborhoods/structuredData';

interface FAQItem {
  question: string;
  answer: string;
}

interface ReviewItem {
  reviewer: string;
  date: string;
  quote: string;
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
  intro: string;
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
}

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
  localLivingContent
}: NeighborhoodPageTemplateProps) {
  const structuredData = buildNeighborhoodStructuredData({
    canonical: canonicalUrl,
    neighborhoodName: `${neighborhoodName}, ${cityName}`,
    pageTitle,
    description: metaDescription,
    faqItems: faqs
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-irrigation-blue/70" />
        </div>

        <div className="container-custom relative z-10 py-20 lg:py-24">
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

            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 mb-3">Neighborhood Snapshot</p>
              <h2 className="text-2xl font-bold mb-4">Built for {neighborhoodName} Properties</h2>
              <p className="text-white/90 text-sm mb-6">
                Localized sprinkler, irrigation, and drainage support designed for North Texas heat, clay soil performance, and neighborhood
                curb appeal standards.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/10 border border-white/10 p-3">
                  <p className="text-2xl font-bold text-emerald-300">15+</p>
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
              <p className="text-slate-700 leading-relaxed">{intro}</p>
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

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What {neighborhoodName} Homeowners Say</h2>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max gap-5 animate-neighborhood-reviews hover:[animation-play-state:paused]">
              {[...reviews, ...reviews].map((review, idx) => (
                <div
                  key={`${review.reviewer}-${review.date}-${idx}`}
                  className="w-[320px] md:w-[360px] rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <Quote className="h-6 w-6 text-irrigation-blue/40 mb-3" />
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={`${review.reviewer}-${idx}-${star}`} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{review.quote}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{review.reviewer}</p>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{neighborhoodName} FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2 inline-flex items-start gap-2">
                  <CircleCheckBig className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        title={`Need sprinkler help in ${neighborhoodName}?`}
        subtitle={`Get licensed, local service from the ${cityName} team at Texas Best Sprinklers.`}
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
