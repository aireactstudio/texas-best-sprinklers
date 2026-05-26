import React from 'react';
import Link from 'next/link';

interface LocationServicesAndAreasProps {
  cityName: string;
  routePrefix: string; // e.g., "keller"
  neighborhoods?: Array<string | { name: string; description?: string; link?: string }>;
  serviceAreas?: string[]; // list of nearby/covered areas
}

const services = [
  { title: 'Irrigation Repair', slug: 'irrigation-repair-services-in', },
  { title: 'Sprinkler Repair', slug: 'sprinkler-repair-services-in', },
  { title: 'Sprinkler Installation', slug: 'sprinkler-installation-services-in', },
  { title: 'Sprinkler System Check-Up', slug: 'sprinkler-system-check-up-services-in', },
  { title: 'Sprinkler System Reroutes', slug: 'sprinkler-system-reroutes-services-in', },
  { title: 'Drip Irrigation', slug: 'drip-irrigation-services-in', },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold text-irrigation-blue mb-4">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Array.from({ length: 2 }).map((_, colIdx) => (
                <ul key={colIdx} className="list-disc pl-5 space-y-2 text-gray-800">
                  {services
                    .filter((_, i) => i % 2 === colIdx)
                    .map((svc) => {
                      const href = `/${routePrefix}/${svc.slug}-${routePrefix}-tx`;
                      return (
                        <li key={svc.slug}>
                          <Link href={href} className="hover:underline">
                            {svc.title} in {cityName}, TX
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              ))}
            </div>
          </div>

          {/* Neighborhoods / Areas Served */}
          <div>
            <h2 className="text-2xl font-bold text-irrigation-blue mb-4">Neighborhoods We Serve</h2>
            {hasNeighborhoods ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>
    </section>
  );
}
