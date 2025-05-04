'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Droplet, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import AreasServed from '@/components/AreasServed';

export default function SprinklerInstallationPage() {
  // Service data
  const serviceInfo = {
    title: "Sprinkler System Installation",
    metaDescription: "Professional sprinkler system installation in Fort Worth, TX. Our custom irrigation systems ensure even water distribution and maximum efficiency for your landscape.",
    description: "Our expert team designs and installs custom irrigation systems tailored to your landscape's specific needs, ensuring optimal water coverage and efficiency.",
    icon: <Droplet size={32} />,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    features: [
      "Custom system design for your landscape",
      "Professional installation by certified technicians",
      "Water-efficient sprinkler heads and nozzles",
      "Smart controller options with weather sensors",
      "Zoning for different plant water needs",
      "Drip irrigation for garden beds and trees",
      "Comprehensive system walkthrough and training"
    ],
    content: [
      {
        heading: "Custom Irrigation Design",
        text: "Before installation begins, we create a detailed irrigation plan customized to your landscape. Our designs factor in plant types, soil conditions, sun exposure, and slope to ensure every area of your yard receives the right amount of water. We focus on water efficiency without compromising lawn and plant health."
      },
      {
        heading: "Professional Installation",
        text: "Our experienced technicians handle every aspect of your irrigation system installation, from trenching and pipe laying to head placement and controller programming. We carefully place components to maximize coverage while minimizing visual impact on your landscape."
      },
      {
        heading: "Smart Technology Integration",
        text: "Modern sprinkler systems benefit from smart controllers that adjust watering schedules based on weather conditions. We can install Wi-Fi enabled controllers that connect to weather services, soil moisture sensors, and rain sensors to optimize water usage and allow remote management from your smartphone."
      },
      {
        heading: "Drip Irrigation Options",
        text: "For garden beds, trees, and container plants, we incorporate water-efficient drip irrigation systems that deliver moisture directly to plant roots. These systems minimize water waste through evaporation and runoff, while helping prevent leaf diseases by keeping foliage dry."
      }
    ]
  };

  // Related services for this page
  const relatedServices = [
    {
      title: "Drainage Solutions",
      description: "Prevent water damage to your property with our professional drainage systems designed to effectively manage water flow.",
      icon: <Droplet size={32} />,
      path: "/services/drainage-solutions"
    },
    {
      title: "Outdoor Lighting",
      description: "Enhance your property's beauty, security, and functionality with our custom-designed outdoor lighting solutions.",
      icon: <Droplet size={32} />,
      path: "/services/lighting"
    },
    {
      title: "Maintenance",
      description: "Our proactive maintenance services extend the life of your irrigation system, optimize water efficiency, and prevent costly breakdowns.",
      icon: <Droplet size={32} />,
      path: "/services/maintenance"
    }
  ];
  
  return (
    <>
      {/* Hero/Header */}
      <div className="relative h-96">
        <Image 
          src={serviceInfo.image} 
          alt={serviceInfo.title} 
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-irrigation-blue bg-opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              {serviceInfo.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceInfo.title}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {serviceInfo.description}
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
              {/* Features List */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Key Installation Features
                </h2>
                <ul className="space-y-3">
                  {serviceInfo.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Content Sections */}
              {serviceInfo.content.map((section, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
                    {section.heading}
                  </h2>
                  <p className="text-gray-800 leading-relaxed text-lg">
                    {section.text}
                  </p>
                </div>
              ))}
              
              {/* Our Installation Process */}
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Our Installation Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="h-12 w-12 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Initial Assessment</h3>
                    <p className="text-gray-800">
                      We evaluate your landscape, soil conditions, and water source to understand your property's unique irrigation needs.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="h-12 w-12 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Custom Design</h3>
                    <p className="text-gray-800">
                      Our designers create a detailed irrigation plan that ensures even water distribution and maximum efficiency.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="h-12 w-12 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Professional Installation</h3>
                    <p className="text-gray-800">
                      Our certified technicians install pipes, valves, heads, and controllers with minimal disruption to your landscape.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="h-12 w-12 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">System Demonstration</h3>
                    <p className="text-gray-800">
                      We provide a comprehensive walkthrough of your new system, including controller programming and maintenance tips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div>
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Request a Free Quote</h3>
                <p className="text-gray-800 mb-6">
                  Ready to enhance your landscape with a custom irrigation system? Fill out the form below for a free consultation and quote.
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
                    <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type
                    </label>
                    <select 
                      id="property-type" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                    >
                      <option value="">Select Property Type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="hoa">HOA/Community</option>
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
                      placeholder="Tell us about your property and irrigation needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Request Quote
                  </button>
                </form>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Or call us directly:</h4>
                  <p className="text-irrigation-blue font-bold text-lg">(817) 304-7896</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-irrigation-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Why Choose Texas Best Sprinklers</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our professional approach to irrigation installation ensures your landscape receives the care and quality it deserves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Licensed & Certified</h3>
              <p className="text-gray-800">
                Our technicians are fully licensed and certified to design and install irrigation systems that comply with all local codes and regulations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Energy Efficient</h3>
              <p className="text-gray-800">
                We prioritize water conservation by using high-efficiency components and smart technology that can reduce water usage by up to 30%.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-darkGreen">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Warranty Protection</h3>
              <p className="text-gray-800">
                All our installations come with comprehensive warranties on parts and labor, giving you peace of mind and protection for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Areas Served */}
      <AreasServed 
        serviceName="Sprinkler Installation"
        serviceSlug="sprinkler-installation"
        title="Installation Services Throughout DFW"
        subtitle="Click on your city below for location-specific installation information and services."
      />
      
      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Related Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore other irrigation and landscape services we offer to keep your property looking its best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6">
                  <div className="h-14 w-14 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-green">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-irrigation-darkBlue">{service.title}</h3>
                  <p className="text-gray-800 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href={service.path} 
                    className="text-irrigation-darkGreen font-medium hover:text-irrigation-darkBlue flex items-center"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More about {service.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Transform Your Landscape with a Professional Irrigation System?"
        subtitle="Contact us today to schedule a free consultation and custom irrigation design proposal."
        buttonText="Get Started Today"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
