import React from 'react';
import Link from 'next/link';

interface LocationServicesAndAreasProps {
  cityName: string;
  routePrefix: string; // e.g., "keller"
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

export default function LocationServicesAndAreas({ cityName, routePrefix, serviceAreas = [] }: LocationServicesAndAreasProps) {
  return (
    <section className="py-16">
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

          {/* Areas Served */}
          <div>
            <h2 className="text-2xl font-bold text-irrigation-blue mb-4">Areas Served</h2>
            {serviceAreas && serviceAreas.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Array.from({ length: 2 }).map((_, colIdx) => (
                  <ul key={colIdx} className="list-disc pl-5 space-y-2 text-gray-800">
                    {serviceAreas
                      .filter((_, i) => i % 2 === colIdx)
                      .map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                  </ul>
                ))}
              </div>
            ) : (
              <p className="text-gray-700">We serve {cityName} and surrounding areas.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
