'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Lightbulb, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import { notFound } from 'next/navigation';
import AreasServed from '@/components/AreasServed';
import LocationStructuredData from '@/components/LocationStructuredData';
import { locationData } from './locationData';

export default function LocationSpecificLightingPage({ params }: { params: { location: string } }) {
  const { location } = params;
  
  // Get location data from our object
  const cityInfo = locationData[location as keyof typeof locationData];
  
  // If location not found, show 404
  if (!cityInfo) {
    return notFound();
  }
  
  // Prepare structured data for the page
  const structuredDataProps = {
    serviceName: "Outdoor Lighting",
    serviceType: "Landscape Lighting Service",
    serviceSlug: "lighting",
    city: cityInfo.city,
    locationSlug: location,
    description: cityInfo.metaDescription,
    price: "250",
    ratingValue: "4.9",
    reviewCount: "87",
    testimonial: {
      author: cityInfo.localTestimonial.author,
      text: cityInfo.localTestimonial.quote,
      rating: cityInfo.localTestimonial.rating
    }
  };

  return (
    <>
      {/* Structured Data */}
      <LocationStructuredData {...structuredDataProps} />
      
      {/* Hero/Header */}
      <div className="relative h-96">
        <Image 
          src={cityInfo.heroImage} 
          alt={cityInfo.title} 
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-irrigation-blue bg-opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <Lightbulb size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{cityInfo.title}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional outdoor lighting design and installation for {cityInfo.city} homes and businesses.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Local Intro */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Custom Outdoor Lighting Solutions in {cityInfo.city}
                </h2>
                <p className="text-gray-800 leading-relaxed text-lg mb-6">
                  {cityInfo.intro}
                </p>
                <p className="text-gray-800 leading-relaxed text-lg">
                  Our experienced designers create custom outdoor lighting plans tailored to your {cityInfo.city} property's unique characteristics, enhancing both form and function for years to come.
                </p>
              </div>
              
              {/* Our Services */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Our {cityInfo.city} Outdoor Lighting Services
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Custom lighting design consultations for {cityInfo.city} properties</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Architectural lighting to showcase your home's features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Landscape lighting for trees, gardens, and pathways</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Security lighting for enhanced property protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Pool and water feature lighting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Patio and deck lighting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Smart lighting controls and automation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">LED lighting system upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Professional installation and maintenance plans</span>
                  </li>
                </ul>
              </div>
              
              {/* Areas We Serve */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  {cityInfo.city} Areas We Serve
                </h2>
                <p className="text-gray-800 leading-relaxed text-lg mb-6">
                  Our lighting designers serve all neighborhoods in and around {cityInfo.city}, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
                  {cityInfo.neighborhoodsCovered.map((neighborhood, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-irrigation-green mr-2 flex-shrink-0" />
                      <span className="text-gray-800">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Local Testimonial */}
              <div className="bg-irrigation-gray p-8 rounded-lg relative mb-10">
                <div className="absolute -top-5 -left-2 text-irrigation-blue opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-lg italic text-gray-800 mb-4">"{cityInfo.localTestimonial.quote}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-irrigation-darkBlue">{cityInfo.localTestimonial.author}</p>
                    <div className="flex">
                      {[...Array(cityInfo.localTestimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Why Choose Us */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Why Choose Us for {cityInfo.city} Outdoor Lighting
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Design Expertise</h3>
                    <p className="text-gray-800">
                      Our lighting designers understand {cityInfo.city} architecture and landscapes, creating custom lighting plans that enhance your property's unique features.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Quality Fixtures</h3>
                    <p className="text-gray-800">
                      We use only professional-grade lighting fixtures and components that withstand {cityInfo.city}'s weather conditions and provide years of reliable performance.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Professional Installation</h3>
                    <p className="text-gray-800">
                      Our trained technicians ensure precise installation with minimal disruption to your property and landscaping.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Energy Efficiency</h3>
                    <p className="text-gray-800">
                      We specialize in energy-efficient LED lighting systems that reduce electricity costs while providing superior illumination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div>
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Schedule a Free {cityInfo.city} Lighting Consultation</h3>
                <p className="text-gray-800 mb-6">
                  Transform your {cityInfo.city} property with custom outdoor lighting. Fill out this form to get started.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      {cityInfo.city} Address
                    </label>
                    <input 
                      type="text" 
                      id="address" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      Areas of Interest
                    </label>
                    <select 
                      id="interest" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                    >
                      <option value="">-- Select --</option>
                      <option value="landscape">Landscape Lighting</option>
                      <option value="architectural">Architectural Lighting</option>
                      <option value="security">Security Lighting</option>
                      <option value="pool">Pool/Water Feature Lighting</option>
                      <option value="patio">Patio/Deck Lighting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                      placeholder="Tell us about your lighting project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Request Free Consultation
                  </button>
                </form>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">For immediate service in {cityInfo.city}:</h4>
                  <p className="text-irrigation-blue font-bold text-lg">(817) 304-7896</p>
                </div>
              </div>
              
              {/* Areas Served Component */}
              <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <AreasServed 
                  serviceName="Outdoor Lighting" 
                  serviceSlug="lighting" 
                  title="Other Areas We Serve" 
                  subtitle="Click below for service information in these areas:"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Back to Main Services */}
      <section className="py-8 bg-irrigation-gray">
        <div className="container-custom">
          <Link href="/services/lighting" className="flex items-center text-irrigation-darkGreen hover:text-irrigation-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Main Outdoor Lighting Services</span>
          </Link>
        </div>
      </section>
      
      {/* Related Services */}
      <CTA />
    </>
  );
}
