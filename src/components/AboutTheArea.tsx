import React from 'react';
import { ExternalLink, Compass, Building2 } from 'lucide-react';

export interface LocalAttraction {
  name: string;
  url: string;
  description: string;
}

interface AboutTheAreaProps {
  cityName: string;
  neighborhoodName?: string;
  attractions: LocalAttraction[];
  localLivingContent: React.ReactNode;
}

export default function AboutTheArea({
  cityName,
  neighborhoodName,
  attractions,
  localLivingContent
}: AboutTheAreaProps) {
  const areaLabel = neighborhoodName ? `${neighborhoodName}, ${cityName}` : cityName;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Discover {areaLabel}</h2>
        <p className="text-slate-200 mb-8 max-w-3xl">
          Neighborhood-specific context helps homeowners plan better irrigation, drainage, and seasonal maintenance decisions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 inline-flex items-center gap-2">
              <Compass className="h-5 w-5 text-emerald-300" />
              Attractions and Places Nearby
            </h3>
            <ul className="space-y-4">
              {attractions.map((attraction) => (
                <li key={attraction.name} className="rounded-xl border border-white/10 bg-black/10 p-4">
                  <a
                    href={attraction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-200 underline decoration-2 underline-offset-4"
                  >
                    {attraction.name}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="text-sm text-slate-200 mt-2">{attraction.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 inline-flex items-center gap-2">
              <Building2 className="h-5 w-5 text-emerald-300" />
              Local Living
            </h3>
            <div className="space-y-4 text-slate-200 leading-relaxed">{localLivingContent}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
