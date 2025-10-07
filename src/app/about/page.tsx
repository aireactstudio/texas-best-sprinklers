'use client';

import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTA from '@/components/CTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title="About Texas Best Sprinklers" 
        subtitle="Your trusted partner for water-efficient irrigation solutions since 2008"
      />
      
      {/* Breadcrumbs (always below hero) */}
      <Breadcrumbs />
      
      {/* About Intro */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
                Committed to Excellence in Irrigation
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Texas Best Sprinklers was founded in 2008 with a single mission: to provide high-quality, water-efficient irrigation solutions to property owners throughout the Fort Worth area.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                What started as a small family business has grown into one of the most trusted names in irrigation services in North Texas. Our success is built on a foundation of technical expertise, exceptional customer service, and a genuine commitment to water conservation.
              </p>
              <p className="text-gray-700 text-lg">
                Today, we're proud to serve residential and commercial clients throughout Fort Worth, Weatherford, and surrounding communities with comprehensive irrigation solutions.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl bg-irrigation-blue/5 p-8">
              <div className="flex flex-col h-full justify-center">
                <div className="mb-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-irrigation-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-irrigation-blue">15+ Years of Experience</h3>
                  <p className="text-gray-700">Serving Fort Worth and surrounding areas with professional irrigation solutions since 2008</p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-irrigation-blue">500+</p>
                    <p className="text-sm text-gray-600">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-irrigation-blue">98%</p>
                    <p className="text-sm text-gray-600">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-16 md:py-20 bg-irrigation-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide our business and ensure we deliver the highest quality service to every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-irrigation-blue/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-irrigation-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Quality & Reliability</h3>
              <p className="text-gray-700">
                We use only professional-grade equipment and materials in all our installations and repairs to ensure long-lasting performance. Our work is backed by comprehensive warranties and our commitment to client satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-irrigation-blue/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-irrigation-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Innovation</h3>
              <p className="text-gray-700">
                We continuously stay at the forefront of irrigation technology, incorporating smart controllers, precision sprinkler heads, and water-saving techniques in all our systems. Our team regularly attends industry training to bring the latest solutions to our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-irrigation-blue/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-irrigation-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Environmental Responsibility</h3>
              <p className="text-gray-700">
                Water conservation is central to our business. We design all systems with efficiency in mind, helping clients reduce water consumption while maintaining beautiful landscapes. Our solutions respect both your budget and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Expertise Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Our Areas of Expertise</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive irrigation solutions tailored to the unique needs of each property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="h-48 bg-irrigation-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-irrigation-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-irrigation-blue">System Design & Installation</h3>
                <p className="text-irrigation-green font-medium mb-4">Custom Solutions for Every Property</p>
                <p className="text-gray-700">
                  We design and install irrigation systems tailored to your landscape's specific needs, ensuring optimal coverage and water efficiency for your property.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="h-48 bg-irrigation-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-irrigation-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7519 11.1679L15.7519 10.1679M4 21C4 17.134 7.13401 14 11 14C11.3395 14 11.6724 14.0242 11.9971 14.0709C12.3312 14.1185 12.6601 14.1892 12.9824 14.2825M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5 21.0001L13.5 22.0001M13.5 18.0001L14.5 19.0001M17.5 14.0001L18.5 15.0001M16.5 17.0001L17.5 18.0001M19.5 17.0001L20.5 18.0001M20.5 21.0001L21.5 22.0001" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-irrigation-blue">Repair & Maintenance</h3>
                <p className="text-irrigation-green font-medium mb-4">Keeping Your System Running Smoothly</p>
                <p className="text-gray-700">
                  Our comprehensive maintenance programs and prompt repair services ensure your irrigation system operates at peak efficiency throughout the year.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="h-48 bg-irrigation-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-irrigation-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-irrigation-blue">Smart Irrigation Technology</h3>
                <p className="text-irrigation-green font-medium mb-4">Water-Saving Solutions</p>
                <p className="text-gray-700">
                  We specialize in smart irrigation controllers, rain sensors, and efficient sprinkler heads that reduce water consumption while maintaining healthy landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Work with the Best?"
        subtitle="Contact us today for a free consultation and estimate for your irrigation project."
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
