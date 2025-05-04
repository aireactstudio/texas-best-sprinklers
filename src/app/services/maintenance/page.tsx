'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Settings, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import AreasServed from '@/components/AreasServed';

export default function MaintenancePage() {
  // Service data
  const serviceInfo = {
    title: "Irrigation System Maintenance",
    metaDescription: "Professional irrigation system maintenance services in Fort Worth, TX. Keep your sprinkler system running efficiently with our seasonal tune-ups, inspections, and preventative maintenance programs.",
    description: "Our proactive maintenance services extend the life of your irrigation system, optimize water efficiency, and prevent costly breakdowns through regular inspections and seasonal care.",
    icon: <Settings size={32} />,
    image: "https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2176&q=80",
    features: [
      "Seasonal system activation and winterization",
      "Comprehensive multi-point inspections",
      "Water efficiency audits and adjustments",
      "Sprinkler head cleaning and adjustment",
      "Preventative maintenance programs",
      "Controller programming optimization",
      "Backflow testing and certification"
    ],
    content: [
      {
        heading: "Seasonal Services",
        text: "We provide essential seasonal services including spring system activation and fall winterization to protect your irrigation investment. Our winterization process uses compressed air to remove all water from your system, preventing freeze damage during cold weather."
      },
      {
        heading: "Preventative Maintenance Programs",
        text: "Our maintenance programs provide scheduled care for your irrigation system to prevent problems before they occur. Programs include regular inspections, minor repairs, adjustment of sprinkler heads, system programming updates, and water efficiency monitoring."
      },
      {
        heading: "Water Efficiency Audits",
        text: "Our comprehensive water efficiency audits evaluate your entire irrigation system's performance. We measure distribution uniformity, identify water waste, and make precise adjustments to ensure your landscape receives the right amount of water without excess consumption."
      },
      {
        heading: "Backflow Testing and Certification",
        text: "We provide certified backflow testing services to meet local requirements and protect your water supply. Our licensed technicians can perform annual backflow prevention device tests, provide necessary documentation for local authorities, and make repairs when needed."
      }
    ]
  };

  // Related services for this page
  const relatedServices = [
    {
      title: "Sprinkler Repair",
      description: "Our efficient repair services diagnose and fix all types of irrigation system issues, from simple fixes to complex problems.",
      icon: <Settings size={32} />,
      path: "/services/sprinkler-repair"
    },
    {
      title: "Outdoor Lighting",
      description: "Enhance your property's beauty, security, and functionality with our custom-designed outdoor lighting solutions.",
      icon: <Settings size={32} />,
      path: "/services/lighting"
    },
    {
      title: "Drainage Solutions",
      description: "Prevent water damage to your property with our professional drainage systems designed to effectively manage water flow.",
      icon: <Settings size={32} />,
      path: "/services/drainage-solutions"
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
                  Key Maintenance Services
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
              
              {/* Benefits */}
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Benefits of Regular Maintenance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Extended System Life</h3>
                    <p className="text-gray-800">
                      Regular maintenance prevents premature wear and extends the life of your irrigation system components by years.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Water Conservation</h3>
                    <p className="text-gray-800">
                      Properly maintained systems use up to 30% less water than neglected systems, reducing your water bills and environmental impact.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Healthier Landscape</h3>
                    <p className="text-gray-800">
                      Even water distribution ensures your plants, lawn, and trees receive the right amount of moisture for optimal growth.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Problem Prevention</h3>
                    <p className="text-gray-800">
                      Identifying and addressing small issues before they become major problems saves you time and money on emergency repairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div>
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Schedule Maintenance</h3>
                <p className="text-gray-800 mb-6">
                  Ready to keep your irrigation system running at peak efficiency? Fill out the form below to schedule a maintenance visit.
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
                    <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select 
                      id="service-type" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                    >
                      <option value="">Select a Service</option>
                      <option value="spring-activation">Spring System Activation</option>
                      <option value="fall-winterization">Fall Winterization</option>
                      <option value="maintenance-program">Maintenance Program</option>
                      <option value="system-inspection">System Inspection</option>
                      <option value="backflow-testing">Backflow Testing</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                      placeholder="Tell us about your system..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Schedule Service
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
      
      {/* Maintenance Programs */}
      <section className="py-16 bg-irrigation-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">Our Maintenance Programs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose the right level of care for your irrigation system with our flexible maintenance plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-irrigation-blue py-4">
                <h3 className="text-xl font-bold text-center text-white">Basic Care</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-irrigation-darkBlue">$199</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Spring system activation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Fall winterization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Basic controller programming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">10% discount on repairs</span>
                  </li>
                </ul>
                <button className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Select Plan
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border-2 border-irrigation-blue">
              <div className="bg-irrigation-darkBlue py-4 relative">
                <h3 className="text-xl font-bold text-center text-white">Premium Care</h3>
                <div className="absolute top-0 right-0 bg-irrigation-green text-white text-xs px-2 py-1 uppercase font-bold rotate-12 transform translate-x-2 -translate-y-1">
                  Most Popular
                </div>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-irrigation-darkBlue">$349</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Spring system activation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Fall winterization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Mid-season checkup & adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Smart controller programming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">20% discount on repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Priority scheduling</span>
                  </li>
                </ul>
                <button className="w-full bg-irrigation-darkBlue hover:bg-irrigation-blue text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Select Plan
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-irrigation-blue py-4">
                <h3 className="text-xl font-bold text-center text-white">Complete Care</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-irrigation-darkBlue">$499</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Spring system activation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Fall winterization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Quarterly checkups & adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Advanced smart controller setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">30% discount on repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Same-day emergency service</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Annual backflow testing included</span>
                  </li>
                </ul>
                <button className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Areas Served */}
      <AreasServed 
        serviceName="Irrigation Maintenance"
        serviceSlug="maintenance"
        title="Maintenance Services Throughout DFW"
        subtitle="Click on your city below for location-specific maintenance programs and services."
      />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-irrigation-darkBlue mb-10 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <Link key={index} href={service.path} className="block group">
                <div className="bg-irrigation-gray rounded-lg p-6 transition-all duration-300 group-hover:shadow-lg">
                  <div className="h-16 w-16 bg-irrigation-blue rounded-full flex items-center justify-center mb-4 text-white transition-all duration-300 group-hover:bg-irrigation-darkBlue">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-irrigation-darkBlue">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Keep Your Irrigation System Running at Peak Efficiency?"
        subtitle="Contact us today to schedule a maintenance service or enroll in one of our care programs."
        buttonText="Schedule Maintenance"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
