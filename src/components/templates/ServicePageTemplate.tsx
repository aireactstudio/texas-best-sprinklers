/**
 * ServicePageTemplate.tsx
 * A unified template for all service main pages
 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import CTA from '@/components/CTA';
import ServiceAreas from '@/components/ServiceAreas';

export interface ServiceMainPageProps {
  serviceType: ServiceType;
  title: string;
  metaDescription: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  content: Array<{
    heading: string;
    text: string;
  }>;
  customSections?: React.ReactNode; // For service-specific sections
}

export default function ServicePageTemplate({
  serviceType,
  title,
  metaDescription,
  description,
  icon,
  image,
  features,
  content,
  customSections
}: ServiceMainPageProps) {
  // Convert serviceType enum to string for URLs
  const serviceTypeSlug = serviceType.toLowerCase().replace(/_/g, '-');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-irrigation-gray py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {icon}
                <h1 className="text-3xl md:text-4xl font-bold text-irrigation-darkGreen">
                  {title}
                </h1>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                {description}
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-irrigation-blue">Our Services Include:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-irrigation-green text-white rounded-md font-medium hover:bg-irrigation-darkGreen transition-colors text-center"
                >
                  Request Service
                </Link>
                <Link
                  href={`/services/${serviceTypeSlug}/fort-worth`}
                  className="px-6 py-3 border border-green-600 text-green-600 rounded-md font-medium hover:bg-green-50 transition-colors text-center"
                >
                  View Fort Worth Services
                </Link>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-[400px] w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {content.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-irrigation-darkGreen">{section.heading}</h2>
                <p className="text-gray-700">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sections - Service specific content */}
      {customSections}

      {/* Areas Served */}
      <ServiceAreas serviceType={serviceTypeSlug} />

      {/* CTA */}
      <CTA
        title={`Professional ${title} Services`}
        subtitle="Contact us today to schedule your service or get a free quote."
        buttonText="Request Service"
        buttonLink="/contact"
      />
    </>
  );
}
