import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Texas Best Sprinklers',
  description:
    'Learn how Texas Best Sprinklers, Drainage and Lighting LLC collects, uses, and protects your information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-12 md:py-16">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-irrigation-darkBlue mb-6">Privacy Policy</h1>
        <p className="text-irrigation-a11y-gray-dark mb-8">
          Texas Best Sprinklers, Drainage and Lighting LLC ("we", "us", or "our") is committed to
          protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your
          information when you visit our website or interact with our services.
        </p>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact information you provide (name, email, phone).</li>
              <li>Service request details you submit through forms.</li>
              <li>Basic analytics data (pages visited, device/browser info, approximate location).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to inquiries and provide requested services.</li>
              <li>To improve our website, services, and customer experience.</li>
              <li>To communicate updates, promotions, and announcements (you may opt out any time).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share information with trusted service providers
              who assist in operating our website or business (e.g., hosting, analytics), under confidentiality
              agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies for functionality and analytics. You can control cookies
              through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your information. However,
              no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Your Choices</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request access, correction, or deletion of your information.</li>
              <li>Opt out of marketing emails by following unsubscribe instructions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-irrigation-blue mb-2">Contact Us</h2>
            <p>
              Questions about this policy? Contact us at{' '}
              <a className="text-irrigation-darkGreen underline" href="mailto:sprinkleranddrains@gmail.com">
                sprinkleranddrains@gmail.com
              </a>{' '}
              or call{' '}
              <a className="text-irrigation-darkGreen underline" href="tel:+18173047896">
                (817) 304-7896
              </a>.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        <div className="mt-10">
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
