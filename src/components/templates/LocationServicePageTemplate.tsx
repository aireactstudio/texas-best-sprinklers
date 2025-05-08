/**
 * LocationServicePageTemplate.tsx
 * A unified template for all location-specific service pages
 */
import React from 'react';
import Link from 'next/link';
import { ServiceContent } from '@/data/types/serviceTypes';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import LocationStructuredData from '@/components/LocationStructuredData';
import { isServiceAvailableAtLocation } from '@/utils/dataUtils';
import CTA from '@/components/CTA';
import LocationHighlights from '@/components/LocationHighlights';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import ServiceAreas from '@/components/ServiceAreas';
import StyledArticleContent from '@/components/StyledArticleContent';

export interface LocationServicePageProps {
  location: string;
  cityName: string;
  serviceContent: ServiceContent;
  articleContent: string | null;
  serviceTypeSlug: string;
  serviceTitle: string;
  backButtonText: string;
  structuredDataProps: {
    serviceName: string;
    serviceType: string;
    serviceSlug: string;
    city: string;
    locationSlug: string;
    description: string;
    price: string;
    ratingValue: string;
    reviewCount: string;
    testimonial: {
      author: string;
      text: string;
      rating: number;
    };
  };
  serviceAreaText?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  articleTitle?: string;
  themeColor?: string;
}

export default function LocationServicePageTemplate({
  location,
  cityName,
  serviceContent,
  articleContent,
  serviceTypeSlug,
  serviceTitle,
  backButtonText,
  structuredDataProps,
  serviceAreaText = 'We provide professional services throughout {cityName} and surrounding areas.',
  ctaTitle = 'Professional {serviceTitle} in {cityName}',
  ctaSubtitle = 'Contact us today to schedule your service or get a free quote.',
  articleTitle = 'Additional Information About {serviceTitle} in {cityName}',
  themeColor = 'irrigation-blue'
}: LocationServicePageProps) {
  
  if (!serviceContent) {
    return notFound();
  }

  // Parse any template strings
  const parsedServiceAreaText = serviceAreaText.replace('{cityName}', cityName);
  const parsedCtaTitle = ctaTitle.replace('{serviceTitle}', serviceTitle).replace('{cityName}', cityName);
  const parsedArticleTitle = articleTitle.replace('{serviceTitle}', serviceTitle).replace('{cityName}', cityName);

  return (
    <>
      {/* Structured Data */}
      <LocationStructuredData {...structuredDataProps} />
      
      {/* Full ServicePage content with hero section */}
      <ServicePage 
        serviceContent={serviceContent}
        location={cityName}
      />
      
      {/* Location-specific information */}
      <div className="container mx-auto px-4 pb-8">
        <LocationHighlights 
          locationSlug={location}
          serviceName={serviceTitle}
        />
      </div>
      
      {/* Service Area Map */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-center text-${themeColor}`}>
            {cityName} Service Area
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
            {parsedServiceAreaText}
          </p>
          <div className="flex flex-col space-y-8">
            <div className="w-full">
              <ServiceAreaMap 
                locationSlug={location} 
                title={`${serviceTitle} Service Area in ${cityName}`}
                radiusMiles={5}
                className="bg-white p-6 rounded-lg shadow-md w-full"
              />
            </div>
            <div className="w-full bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Other Areas We Serve</h3>
              <p className="text-gray-600 mb-5">Click below for service information in these areas:</p>
              <ServiceAreas 
                serviceType={serviceTypeSlug}
              />
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">For immediate service in {cityName}:</h4>
                <p className={`text-${themeColor} font-bold text-lg`}>(817) 520-0044</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Main Services */}
      <section className="py-8 bg-irrigation-gray">
        <div className="container-custom">
          <Link href={`/services/${serviceTypeSlug}`} className="flex items-center text-irrigation-darkGreen hover:text-irrigation-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>{backButtonText}</span>
          </Link>
        </div>
      </section>
      
      {/* CTA */}
      <CTA 
        title={parsedCtaTitle}
        subtitle={ctaSubtitle}
        buttonText="Request Service"
        buttonLink="/contact"
        locationName={cityName}
      />
      
      {/* Styled Article Content - Moved to bottom */}
      {articleContent && (
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-center text-${themeColor}`}>
              {parsedArticleTitle}
            </h2>
            <StyledArticleContent 
              htmlContent={articleContent} 
              serviceName={serviceTitle} 
              cityName={cityName} 
            />
          </div>
        </section>
      )}
    </>
  );
}
