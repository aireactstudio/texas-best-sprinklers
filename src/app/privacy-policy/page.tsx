import HeroSection from '@/components/HeroSection';
import LegalContainer from '@/components/LegalContainer';

export const metadata = {
  title: 'Privacy Policy | Texas Best Sprinklers',
  description: 'Learn how Texas Best Sprinkler, Drainage and Lighting LLC collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
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
            <a href="#information-we-collect" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Information We Collect</a>
            <a href="#how-we-use-information" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">How We Use Info</a>
            <a href="#analytics-and-cookies" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Analytics & Cookies</a>
            <a href="#email-communications" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Email</a>
            <a href="#information-sharing" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Sharing</a>
            <a href="#data-retention" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Retention</a>
            <a href="#your-choices" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Your Choices</a>
            <a href="#childrens-privacy" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Children’s Privacy</a>
            <a href="#contact-us" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Contact</a>
            <a href="#updates-to-this-policy" className="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Updates</a>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700">
            Texas Best Sprinkler, Drainage and Lighting LLC ("we", "us", "our") values your privacy. This Privacy Policy explains
            what information we collect, how we use it, and your choices. This policy applies to our website sprinkleranddrains.com
            and any related pages, forms, or services we provide.
          </p>

          <h2
            id="information-we-collect"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Information We Collect
          </h2>
          <ul>
            <li>
              Contact details you provide: name, email, phone number, service location, and message content submitted through
              our contact forms.
            </li>
            <li>
              Service-related information: project type and preferences when you inquire about irrigation, drainage, or lighting services.
            </li>
            <li>
              Usage data: pages visited, interactions, device and browser information collected via analytics (e.g., Google Analytics 4).
            </li>
          </ul>

          <h2
            id="how-we-use-information"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            How We Use Information
          </h2>
          <ul>
            <li>Respond to inquiries and provide quotes and customer service.</li>
            <li>Schedule consultations and deliver our services.</li>
            <li>Improve website performance, user experience, and service offerings.</li>
            <li>Maintain security, prevent fraud, and comply with legal obligations.</li>
          </ul>

          <h2
            id="analytics-and-cookies"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Analytics and Cookies
          </h2>
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            We use Google Analytics 4 (GA4) to measure website usage, as described in our analytics documentation.
            GA4 may set cookies and collect usage data. You can opt out by using Google’s opt-out tools or adjusting your browser settings.
          </p>

          <h2
            id="email-communications"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Email Communications
          </h2>
          <p>
            When you submit a form, we may email you to follow up. Emails are delivered via our trusted email service provider.
            You can reply to request changes or stop communications at any time.
          </p>

          <h2
            id="information-sharing"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Information Sharing
          </h2>
          <p>
            We do not sell your personal information. We may share it with:
          </p>
          <ul>
            <li>Service providers who help operate our website and communications (e.g., hosting, email delivery).</li>
            <li>Law enforcement or authorities when required by law or to protect our rights and safety.</li>
          </ul>

          <h2
            id="data-retention"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Data Retention
          </h2>
          <p>
            We keep information only as long as necessary to fulfill the purposes described or as required by law.
          </p>

          <h2
            id="your-choices"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Your Choices
          </h2>
          <ul>
            <li>Opt out of analytics tracking via your browser or Google’s tools.</li>
            <li>Contact us to update or delete personal information where applicable.</li>
          </ul>

          <h2
            id="childrens-privacy"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Children’s Privacy
          </h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal information from children.
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
          <p>
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <ul>
            <li>Phone: (817) 304-7896</li>
            <li>Email: sprinkleranddrains@gmail.com</li>
            <li>Address: 10011 Harmon Rd suite 133, Fort Worth, TX 76177</li>
          </ul>

          <h2
            id="updates-to-this-policy"
            style={{
              color: '#0f172a',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            }}
          >
            Updates to This Policy
          </h2>
          <p>
            We may update this policy to reflect changes to our practices or for legal reasons. We will post the updated date at the top of this page.
          </p>
          </div>
        </LegalContainer>
    </main>
    </>
  );
}
