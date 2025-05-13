import { ServiceContent } from '@/data/types/serviceTypes';
import ServiceHero from './ServiceHero';
import ServiceIntroduction from './ServiceIntroduction';
import ServiceBenefits from './ServiceBenefits';
import ServiceOfferings from './ServiceOfferings';
import { ComplianceSection, ProcessSection, FAQSection, RelatedServicesSection } from './AdditionalSections';

interface ServicePageProps {
  serviceContent: ServiceContent;
  location: string;
  heroOnly?: boolean;
}

/**
 * The main ServicePage component that orchestrates rendering of all service page sections
 * This component has been refactored into smaller, more focused subcomponents
 * 
 * @param serviceContent - Service content data to display
 * @param location - Location name for the service
 * @param heroOnly - If true, only show the hero section (for special pages)
 */
export default function ServicePage({ serviceContent, location, heroOnly = false }: ServicePageProps) {
  // Validate that content meets minimum display requirements
  if (!serviceContent || !serviceContent.title || !serviceContent.benefits) {
    return <MissingContentMessage />;
  }

  return (
    <div className="service-page">
      {/* Hero Section */}
      <ServiceHero serviceContent={serviceContent} />

      {/* Introduction Section with features and testimonial */}
      {!heroOnly && <ServiceIntroduction serviceContent={serviceContent} location={location} />}

      {/* Enhanced Benefits Section with scrollable cards */}
      {!heroOnly && <ServiceBenefits serviceContent={serviceContent} location={location} />}

      {/* Services Offered Section with scrollable cards */}
      {!heroOnly && <ServiceOfferings serviceContent={serviceContent} location={location} />}

      {/* Compliance Information */}
      {!heroOnly && <ComplianceSection serviceContent={serviceContent} location={location} />}

      {/* Process and FAQ Sections side by side */}
      {!heroOnly && (
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <ProcessSection serviceContent={serviceContent} location={location} />
          </div>
          <div className="w-full lg:w-1/2">
            <FAQSection serviceContent={serviceContent} location={location} />
          </div>
        </div>
      )}

      {/* Related Services Section */}
      {!heroOnly && <RelatedServicesSection serviceContent={serviceContent} location={location} />}
    </div>
  );
}

/**
 * Message to display when service content is not available
 */
function MissingContentMessage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center">Service information not available</h1>
      <p className="text-center mt-4">
        We're currently updating our content for this service. Please check back soon or{' '}
        <a href="/contact" className="text-green-600 hover:underline">
          contact us
        </a>{' '}
        for more information.
      </p>
    </div>
  );
}
