'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface ServicePageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  serviceType: string;
}

export default function ServicePageLayout({
  children,
  title,
  description,
  icon,
  image,
  features,
  serviceType
}: ServicePageLayoutProps) {
  // Split children into main content and full-width sections
  const childrenArray = React.Children.toArray(children);
  // Main content is the first child (if it's a div)
  const mainContent = childrenArray[0];
  // Full-width sections are any remaining children
  const fullWidthSections = childrenArray.slice(1);
  // Format service type for URL
  const serviceSlug = typeof serviceType === 'string' 
    ? serviceType.toLowerCase().replace(/_/g, '-') 
    : String(serviceType).toLowerCase().replace(/_/g, '-');

  return (
    <>
      {/* Hero/Header */}
      <div className="relative h-[75vh] min-h-[500px]">
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="100vw"
          priority
          className="object-cover brightness-50"
        />
        {/* Additional dark overlay for more contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <div className="mb-8 mx-auto h-24 w-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              {icon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">{title}</h1>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
            <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Sidebar */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-irrigation-darkGreen">Request a Free Quote</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
                    <select 
                      id="location" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                    >
                      <option value="">Select your city</option>
                      <option value="fort-worth">Fort Worth</option>
                      <option value="arlington">Arlington</option>
                      <option value="keller">Keller</option>
                      <option value="southlake">Southlake</option>
                      <option value="colleyville">Colleyville</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                      placeholder="Please provide details about your service needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Request Free Estimate
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-irrigation-darkGreen">Contact Us</h3>
                <p className="text-gray-700 mb-4">For immediate service or questions:</p>
                <div className="mb-4">
                  <p className="font-bold text-irrigation-darkGreen text-xl">(817) 520-0044</p>
                  <p className="text-gray-700">Monday-Friday: 7am-6pm</p>
                  <p className="text-gray-700">Saturday: 8am-2pm</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email:</p>
                  <a href="mailto:info@texasbestsprinklers.com" className="text-irrigation-blue hover:text-irrigation-darkBlue">
                    info@texasbestsprinklers.com
                  </a>
                </div>
              </div>
              
              {/* Why Choose Us */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-irrigation-darkGreen">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Licensed & insured professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Quick response times</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Quality parts & workmanship</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Satisfaction guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* Features List */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Our {title} Services
                </h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Main content - just the first child */}
              {mainContent}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width sections - any additional children */}
      {fullWidthSections}
    </>
  );
}
