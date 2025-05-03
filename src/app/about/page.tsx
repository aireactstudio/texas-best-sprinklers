'use client';

import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTA from '@/components/CTA';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title="About Texas Best Sprinklers" 
        subtitle="Your trusted partner for water-efficient irrigation solutions since 2008"
      />
      
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
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/images/about-company.jpg"
                alt="Texas Best Sprinklers team"
                className="w-full h-auto object-cover"
              />
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
      
      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our team of irrigation specialists brings decades of combined experience to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team members would go here */}
            {/* Placeholder for team members */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <img 
                src="/assets/images/team-1.jpg" 
                alt="Michael Johnson" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-irrigation-blue">Michael Johnson</h3>
                <p className="text-irrigation-green font-medium mb-4">Founder & Lead Technician</p>
                <p className="text-gray-700">
                  With over 15 years in irrigation system design and installation, Michael leads our team with expertise and a commitment to excellence.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <img 
                src="/assets/images/team-2.jpg" 
                alt="Sarah Williams" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-irrigation-blue">Sarah Williams</h3>
                <p className="text-irrigation-green font-medium mb-4">Design Specialist</p>
                <p className="text-gray-700">
                  Sarah specializes in custom irrigation system design, ensuring optimal coverage and efficiency for residential and commercial properties.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <img 
                src="/assets/images/team-3.jpg" 
                alt="David Martinez" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-irrigation-blue">David Martinez</h3>
                <p className="text-irrigation-green font-medium mb-4">Service Manager</p>
                <p className="text-gray-700">
                  David oversees our service department, ensuring all repairs and maintenance are completed with precision and care.
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
