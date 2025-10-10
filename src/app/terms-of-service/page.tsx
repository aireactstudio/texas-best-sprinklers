import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Texas Best Sprinklers',
  description: 'Terms governing use of the Texas Best Sprinklers, Drainage and Lighting LLC website and services.',
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main className="py-12 md:py-16">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-irrigation-darkBlue mb-6">Terms of Service</h1>
        <p className="text-irrigation-a11y-gray-dark mb-8">
          By accessing or using this website, you agree to be bound by these Terms of Service. If you do not
          agree to these terms, please do not use our site.
        </p>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Use of Our Services</h2>
            <p>Content is provided for informational purposes. Quotes and service availability are subject to confirmation.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Intellectual Property</h2>
            <p>All trademarks, logos, and content are owned by Texas Best Sprinklers, Drainage and Lighting LLC unless otherwise noted.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Limitation of Liability</h2>
            <p>We are not liable for indirect or consequential damages arising from use of this site.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Contact</h2>
            <p>
              Questions? Email <a href="mailto:sprinkleranddrains@gmail.com" className="text-irrigation-darkGreen underline">sprinkleranddrains@gmail.com</a> or call <a href="tel:+18173047896" className="text-irrigation-darkGreen underline">(817) 304-7896</a>.
            </p>
          </div>

          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </section>

        <div className="mt-10">
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
