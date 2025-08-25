import HeroSection from '@/components/HeroSection';
import LegalContainer from '@/components/LegalContainer';

export const metadata = {
  title: 'Terms of Service | Texas Best Sprinklers',
  description: 'Terms governing the use of Texas Best Sprinkler, Drainage and Lighting LLC website and services.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <HeroSection 
        title="Terms of Service"
        subtitle="Guidelines for using our website and services"
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <LegalContainer>
          <div
            style={{
              color: '#0f172a',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
            }}
          >
          <div className="mb-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <a href="#acceptance-of-terms" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Acceptance of Terms</a>
            <a href="#services" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Services</a>
            <a href="#quotes-appointments-and-scheduling" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Quotes & Scheduling</a>
            <a href="#customer-responsibilities" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Customer Responsibilities</a>
            <a href="#payments" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Payments</a>
            <a href="#limited-warranty" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Limited Warranty</a>
            <a href="#website-use" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Website Use</a>
            <a href="#disclaimers-and-limitation-of-liability" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Disclaimers & Liability</a>
            <a href="#changes-to-these-terms" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Changes</a>
            <a href="#governing-law" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Governing Law</a>
            <a href="#contact-us" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Contact</a>
          </div>

          <h2
            id="acceptance-of-terms"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Acceptance of Terms
          </h2>
          <p>
            By accessing sprinkleranddrains.com or engaging Texas Best Sprinkler, Drainage and Lighting LLC ("we", "us", "our"), you
            agree to these Terms of Service. If you do not agree, please do not use the site or request services.
          </p>

          <h2
            id="services"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Services
          </h2>
          <p>
            We provide professional irrigation (sprinkler), drainage, and outdoor lighting design, installation, and repair services
            for residential and commercial properties in and around Fort Worth and Weatherford, Texas.
          </p>

          <h2
            id="quotes-appointments-and-scheduling"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Quotes, Appointments, and Scheduling
          </h2>
          <ul>
            <li>Quotes are estimates based on information available at the time and may change after on-site inspection.</li>
            <li>Appointment times are approximate; weather and job conditions may affect scheduling.</li>
            <li>Customer is responsible for providing safe access to the job site and notifying us of underground utilities when applicable.</li>
          </ul>

          <h2
            id="customer-responsibilities"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Customer Responsibilities
          </h2>
          <ul>
            <li>Provide accurate contact and property information.</li>
            <li>Secure permissions or approvals required for work (e.g., HOA, landlord, or municipal requirements).</li>
            <li>Ensure pets are secured and areas of work are accessible at the scheduled time.</li>
          </ul>

          <h2
            id="payments"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Payments
          </h2>
          <p>
            Payment terms will be provided on your estimate or invoice. Unless otherwise noted, payment is due upon completion of the work.
            Late payments may incur fees as permitted by law.
          </p>

          <h2
            id="limited-warranty"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Limited Warranty
          </h2>
          <p>
            We stand behind our workmanship. Specific warranties for parts and labor will be stated on your estimate or invoice. Warranties
            do not cover damage caused by misuse, neglect, acts of nature, or modifications by others.
          </p>

          <h2
            id="website-use"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Website Use
          </h2>
          <ul>
            <li>Content is provided for informational purposes only and may change without notice.</li>
            <li>You agree not to misuse the site, attempt unauthorized access, or disrupt operations.</li>
            <li>Links to third-party sites are provided as a convenience; we are not responsible for their content or practices.</li>
          </ul>

          <h2
            id="disclaimers-and-limitation-of-liability"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Disclaimers and Limitation of Liability
          </h2>
          <p>
            The website is provided "as is" without warranties of any kind. To the maximum extent permitted by law, we disclaim
            all implied warranties. We are not liable for indirect, incidental, special, or consequential damages arising from your use of
            the website or services.
          </p>

          <h2
            id="changes-to-these-terms"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Continued use of the site or services after changes constitutes acceptance of the updated Terms.
          </p>

          <h2
            id="governing-law"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the State of Texas, without regard to its conflict of laws principles.
          </p>

          <h2
            id="contact-us"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Contact Us
          </h2>
          <ul>
            <li>Phone: (817) 304-7896</li>
            <li>Email: sprinkleranddrains@gmail.com</li>
            <li>Address: 10011 Harmon Rd suite 133, Fort Worth, TX 76177</li>
          </ul>
          </div>
        </LegalContainer>
    </main>
    </>
  );
}
