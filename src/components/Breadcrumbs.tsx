'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname() || '/';

  if (pathname === '/') return null;

  const segments = pathname
    .split('?')[0]
    .split('#')[0]
    .split('/')
    .filter(Boolean);

  const crumbs = [
    { label: 'Home', href: '/' },
    ...segments.map((seg, idx) => {
      const href = '/' + segments.slice(0, idx + 1).join('/');
      const label = decodeURIComponent(seg)
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (m) => m.toUpperCase());
      return { label, href };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 border-b border-gray-300">
      <div className="container-custom py-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={c.href} className="flex items-center">
                {i > 0 && <span className="mx-2 text-gray-400">/</span>}
                {isLast ? (
                  <span className="font-semibold text-gray-900">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-irrigation-blue transition-colors">
                    {c.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
