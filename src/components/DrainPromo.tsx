import Link from 'next/link';
import { Droplets, ArrowRight } from 'lucide-react';

export default function DrainPromo() {
  return (
    <div className="mb-10 rounded-xl overflow-hidden shadow-lg border border-irrigation-darkGreen/30">
      {/* Top accent bar */}
      <div className="bg-irrigation-darkGreen px-4 py-2 text-center">
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/90">
          Limited Time Offer
        </span>
      </div>

      {/* Main body */}
      <div className="bg-gradient-to-br from-irrigation-darkGreen/10 via-white to-irrigation-blue/5 px-5 py-6 sm:px-8 sm:py-8 text-center">
        <Droplets size={36} className="mx-auto mb-3 text-irrigation-blue" />

        <h3 className="text-2xl sm:text-3xl font-extrabold text-irrigation-darkBlue leading-tight">
          Free Sprinkler Inspection
        </h3>
        <p className="text-lg sm:text-xl font-semibold text-irrigation-darkGreen mt-1">
          with Any Drain Job Approved
        </p>

        <p className="text-gray-600 mt-3 max-w-md mx-auto text-sm sm:text-base">
          Move forward with a drainage project and we&apos;ll inspect your entire sprinkler system at no charge.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-5 bg-irrigation-darkGreen hover:bg-irrigation-darkBlue text-white font-bold text-base sm:text-lg px-6 py-3 rounded-lg transition-colors shadow-md"
        >
          Claim Your Free Inspection
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
