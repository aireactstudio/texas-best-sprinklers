import React from 'react';

interface LegalContainerProps {
  lastUpdated?: string;
  children: React.ReactNode;
}

/**
 * Branded container and typography for legal-like pages.
 * - Gradient page background handled by parent page.
 * - Renders a last-updated badge and a card with enhanced prose styles.
 */
export default function LegalContainer({ lastUpdated, children }: LegalContainerProps) {
  const year = lastUpdated ?? new Date().getFullYear().toString();
  return (
    <section className="container-custom py-12 md:py-16">
      <div className="mb-6 inline-flex items-center rounded-full bg-irrigation-blue/10 text-irrigation-blue px-4 py-1 text-sm font-medium">
        Last updated: {year}
      </div>
      <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 md:p-10">
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-irrigation-darkBlue
            prose-h2:mt-10 prose-h2:scroll-mt-24 prose-h2:font-extrabold prose-h2:tracking-tight
            prose-h2:border-t prose-h2:border-slate-200 prose-h2:pt-6 first:prose-h2:mt-0 first:prose-h2:border-t-0 first:prose-h2:pt-0
            prose-p:text-slate-700 prose-strong:text-irrigation-darkBlue
            prose-a:text-irrigation-blue hover:prose-a:text-irrigation-green
            prose-li:marker:text-irrigation-green prose-ul:my-4 prose-ol:my-4
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
}
