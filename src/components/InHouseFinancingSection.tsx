import Link from 'next/link';
import { Wallet, Building2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';

export default function InHouseFinancingSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="in-house-financing-heading">
      <div className="container-custom">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="border-b border-slate-100 bg-irrigation-darkBlue p-8 text-white lg:col-span-5 lg:border-b-0 lg:border-r lg:border-slate-100 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/95">
                <Wallet className="h-4 w-4" aria-hidden />
                In-house financing
              </div>
              <h2 id="in-house-financing-heading" className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Pay for your project on terms that work for you
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/90">
                Larger installs and drainage work shouldn’t mean juggling a stack of credit applications or surprise
                lender fees. We offer <strong className="font-semibold text-white">in-house financing</strong> so you
                deal directly with our team—from estimate through completion and payment.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Ask about flexible payment options when you schedule your free estimate. We’ll walk you through what’s
                available for your scope of work—no pressure, no runaround.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-irrigation-darkGreen px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Discuss financing on your estimate
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="p-8 lg:col-span-7 lg:p-10">
              <h3 className="text-lg font-bold text-irrigation-darkBlue">Why our in-house financing beats typical third-party offers</h3>
              <p className="mt-2 text-sm text-gray-600">
                Third-party “project financing” often means a separate company, generic terms, and fine print that has
                nothing to do with your yard. Here’s what you get when financing stays with us.
              </p>

              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                    <Building2 className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">One relationship, start to finish</p>
                    <p className="mt-1 text-sm text-gray-600">
                      The same people who scope your irrigation, drainage, or lighting project handle payment
                      conversations—no handoff to a distant call center that doesn’t know your property.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                    <ShieldCheck className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Fewer surprises than third-party lenders</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Outside financing often layers on broker fees, promotional rates that jump later, or rigid
                      minimums. We structure plans around the actual work we’re doing for you—not a one-size-fits-all
                      loan product.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-800">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Straight answers, local accountability</p>
                    <p className="mt-1 text-sm text-gray-600">
                      If something changes on the job, you’re not stuck reconciling a lender’s paperwork with our crew.
                      Questions go to our office—so fixes and billing stay aligned with the workmanship you’re paying
                      for.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="mt-6 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-xs text-gray-600">
                Financing is subject to approval and may vary by project. We’ll explain options clearly before you
                commit—so you can compare in-house terms to any outside offer and choose what fits best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
