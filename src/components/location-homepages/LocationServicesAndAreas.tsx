import React from 'react';
import Link from 'next/link';

interface LocationServicesAndAreasProps {
  cityName: string;
  routePrefix: string; // e.g., "keller"
  neighborhoods?: Array<string | { name: string; description?: string; link?: string }>;
  serviceAreas?: string[]; // list of nearby/covered areas
}

const getNeighborhoodName = (neighborhood: string | { name: string }) =>
  typeof neighborhood === 'string' ? neighborhood : neighborhood.name;

export default function LocationServicesAndAreas({
  cityName,
  routePrefix,
  neighborhoods = [],
  serviceAreas = []
}: LocationServicesAndAreasProps) {
  const hasNeighborhoods = neighborhoods.length > 0;
  const hasServiceAreas = serviceAreas.length > 0;

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div>
          <h2 className="text-2xl font-bold text-irrigation-blue mb-4">Neighborhoods We Serve</h2>
          {hasNeighborhoods ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood) => {
                const name = getNeighborhoodName(neighborhood);
                const details = typeof neighborhood === 'string' ? undefined : neighborhood.description;
                const link = typeof neighborhood === 'string' ? undefined : neighborhood.link;

                const content = (
                  <div className="h-full rounded-lg border border-gray-200 p-4 bg-gray-50 hover:bg-white transition-colors">
                    <h3 className="font-semibold text-gray-900">{name}</h3>
                    {details && <p className="mt-2 text-sm text-gray-700">{details}</p>}
                    {link && <p className="mt-3 text-sm font-medium text-irrigation-blue">Learn more -&gt;</p>}
                  </div>
                );

                return link ? (
                  <Link key={name} href={link} className="block">
                    {content}
                  </Link>
                ) : (
                  <div key={name}>{content}</div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-700">We serve neighborhoods across {cityName} and surrounding communities.</p>
          )}

          {hasServiceAreas && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Nearby Communities</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
