"use client";

import React from 'react';
import Link from 'next/link';
import { Droplet, Wrench, Sprout, ClipboardList, Repeat2 } from 'lucide-react';

export interface CityServiceItem {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
}

interface CityServicesListProps {
  cityName: string;
  items: CityServiceItem[];
}

export default function CityServicesList({ cityName, items }: CityServicesListProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-irrigation-blue">
            Other Services We Offer in {cityName}
          </h2>
          <p className="text-gray-600 mt-2">
            Explore more professional sprinkler and irrigation services available in {cityName}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className="group border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-white hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-full bg-irrigation-darkGreen/10 text-irrigation-darkGreen flex items-center justify-center">
                  {item.icon ?? <Sprout className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-irrigation-darkBlue group-hover:text-irrigation-green">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  )}
                  <span className="inline-flex items-center text-sm text-irrigation-darkGreen mt-3">
                    View service
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
