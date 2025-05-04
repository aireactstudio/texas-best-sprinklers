'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Settings, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import { notFound } from 'next/navigation';
import AreasServed from '@/components/AreasServed';
import LocationStructuredData from '@/components/LocationStructuredData';

// Location data object with city-specific information
const locationData = {
  "fort-worth-irrigation-repair": {
    city: "Fort Worth",
    title: "Fort Worth Irrigation Repair",
    metaDescription: "Expert irrigation repair services in Fort Worth, TX. Fast, reliable sprinkler system repairs with same-day service available.",
    heroImage: "https://images.unsplash.com/photo-1580133748682-73cc17ee9907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro: "Texas Best Sprinklers provides Fort Worth residents with fast, reliable irrigation repair services. Our licensed technicians are familiar with Fort Worth's unique soil conditions, water regulations, and common sprinkler system issues that affect local properties.",
    neighborhoodsCovered: [
      "Downtown Fort Worth", 
      "Arlington Heights", 
      "Rivercrest", 
      "Westover Hills", 
      "TCU/University Area", 
      "Fairmount", 
      "Mistletoe Heights",
      "Berkeley Place",
      "Tanglewood",
      "Ridglea"
    ],
    localTestimonial: {
      quote: "The technician arrived promptly and quickly identified the issue with our sprinkler system. He had it fixed within an hour, and the price was fair. I'll definitely call Texas Best Sprinklers for any future irrigation needs!",
      author: "Sarah T., Fort Worth",
      rating: 5
    },
    localPermitInfo: "Fort Worth residents should note that irrigation repairs involving valve replacement, backflow device installation, or major system modifications may require permits. Our team handles all permitting requirements for you, ensuring your repair is fully compliant with Fort Worth city codes."
  },
  "arlington-irrigation-repair": {
    city: "Arlington",
    title: "Arlington Irrigation Repair",
    metaDescription: "Arlington's trusted irrigation repair service. We fix sprinkler systems throughout Arlington with fast response times and quality workmanship.",
    heroImage: "https://images.unsplash.com/photo-1517304603128-56b57b9017be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro: "Our Arlington irrigation repair specialists understand the unique challenges of maintaining sprinkler systems in Arlington's clay-heavy soil. We provide expert diagnosis and repair services tailored to Arlington properties.",
    neighborhoodsCovered: [
      "North Arlington", 
      "South Arlington", 
      "East Arlington", 
      "West Arlington", 
      "Central Arlington", 
      "Dalworthington Gardens", 
      "Pantego"
    ],
    localTestimonial: {
      quote: "The most professional irrigation company I've worked with. They fixed our system that had multiple leaks and made sure everything was working perfectly before they left.",
      author: "Michael R., Arlington Heights",
      rating: 5
    },
    localPermitInfo: "Arlington has specific requirements for irrigation repairs involving backflow prevention devices. Our technicians are familiar with Arlington's irrigation codes and will ensure all repairs are compliant with local regulations."
  },
  "keller-irrigation-repair": {
    city: "Keller",
    title: "Keller Irrigation Repair",
    metaDescription: "Professional irrigation repair services in Keller, TX. Expert sprinkler system diagnostics and repairs by licensed technicians.",
    heroImage: "https://images.unsplash.com/photo-1565790554553-e96b2f7a430c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro: "Texas Best Sprinklers has been providing Keller homeowners with reliable irrigation repair services for years. Our technicians are familiar with Keller's water conservation requirements and can help ensure your system operates efficiently.",
    neighborhoodsCovered: [
      "Hidden Lakes", 
      "Marshall Ridge", 
      "Woodland Hills", 
      "The Crossing", 
      "The Estates of Willow Bend", 
      "Ridgewood", 
      "Bourland Meadows"
    ],
    localTestimonial: {
      quote: "After a frustrating experience with another company, Texas Best Sprinklers came to the rescue and fixed our system right the first time. I wish I had called them first!",
      author: "Jennifer K., Keller",
      rating: 5
    },
    localPermitInfo: "Keller has specific water conservation requirements that may affect your irrigation system repairs. Our technicians are knowledgeable about Keller's regulations and will ensure your system is compliant while maximizing efficiency."
  }
};

export default function LocationSpecificRepairPage({ params }: { params: { location: string } }) {
  const { location } = params;
  
  // Get location data from our object above
  const cityInfo = locationData[location as keyof typeof locationData];
  
  // If location not found, show 404
  if (!cityInfo) {
    return notFound();
  }
  
  // Prepare structured data for the page
  const structuredDataProps = {
    serviceName: "Irrigation Repair",
    serviceType: "Sprinkler Repair Service",
    serviceSlug: "irrigation-repair",
    city: cityInfo.city,
    locationSlug: location,
    description: cityInfo.metaDescription,
    price: "75",
    ratingValue: "4.9",
    reviewCount: "124",
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
              <Settings size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{cityInfo.title}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Fast, reliable irrigation repair services for {cityInfo.city} homeowners and businesses.
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
                  Professional Irrigation Repair in {cityInfo.city}
                </h2>
                <p className="text-gray-800 leading-relaxed text-lg mb-6">
                  {cityInfo.intro}
                </p>
                <p className="text-gray-800 leading-relaxed text-lg">
                  Whether you're dealing with leaks, broken heads, controller issues, or a complete system failure, our {cityInfo.city} irrigation repair team has the expertise to quickly diagnose and fix the problem, saving you time, water, and money.
                </p>
              </div>
              
              {/* Our Services */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Our {cityInfo.city} Irrigation Repair Services
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Same-day emergency repair service throughout {cityInfo.city}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Comprehensive system diagnostics and troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Leak detection and repair with minimal landscape disruption</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Valve repair and replacement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Sprinkler head adjustment, repair, and replacement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Controller programming and troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Wire fault detection and repair</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Backflow testing, repair, and certification</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">System efficiency upgrades</span>
                  </li>
                </ul>
              </div>
              
              {/* Areas We Serve */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  {cityInfo.city} Areas We Serve
                </h2>
                <p className="text-gray-800 leading-relaxed text-lg mb-6">
                  Our irrigation repair technicians serve all neighborhoods in and around {cityInfo.city}, including:
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
              
              {/* Local Permit Info */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-10">
                <h2 className="text-2xl font-bold mb-4 text-irrigation-blue">
                  {cityInfo.city} Irrigation Regulations
                </h2>
                <p className="text-gray-800">
                  {cityInfo.localPermitInfo}
                </p>
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
                  Why Choose Us for {cityInfo.city} Irrigation Repair
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Local Expertise</h3>
                    <p className="text-gray-800">
                      Our technicians are familiar with {cityInfo.city}'s unique soil conditions, water regulations, and common irrigation system issues in the area.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Fast Response</h3>
                    <p className="text-gray-800">
                      We prioritize {cityInfo.city} service calls and offer same-day repairs for emergency situations to minimize water waste and landscape damage.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Quality Workmanship</h3>
                    <p className="text-gray-800">
                      All repairs are performed by licensed irrigation technicians using professional-grade parts with warranty protection.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Fair, Upfront Pricing</h3>
                    <p className="text-gray-800">
                      We provide clear estimates before beginning work, with no hidden fees or surprise charges for {cityInfo.city} customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div>
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Schedule {cityInfo.city} Repair Service</h3>
                <p className="text-gray-800 mb-6">
                  Need an irrigation repair in {cityInfo.city}? Fill out this form for fast service from our local technicians.
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
                    <label htmlFor="issue-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Issue Type
                    </label>
                    <select 
                      id="issue-type" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                    >
                      <option value="">Select Issue Type</option>
                      <option value="leak">Leaking System</option>
                      <option value="broken-head">Broken Sprinkler Head</option>
                      <option value="zone-issue">Zone Not Working</option>
                      <option value="controller">Controller Problems</option>
                      <option value="poor-coverage">Poor Coverage/Pressure</option>
                      <option value="other">Other Issue</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Describe Your Problem
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                      placeholder="Please provide details about your irrigation system issue..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Request {cityInfo.city} Repair
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
                  serviceName="Irrigation Repair" 
                  serviceSlug="irrigation-repair" 
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
          <Link href="/services/irrigation-repair" className="flex items-center text-irrigation-darkGreen hover:text-irrigation-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Main Irrigation Repair Services</span>
          </Link>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA 
        title={`Need Irrigation Repair in ${cityInfo.city}?`}
        subtitle="Our local technicians are ready to diagnose and fix your sprinkler system problems quickly and efficiently."
        buttonText="Schedule a Repair"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
