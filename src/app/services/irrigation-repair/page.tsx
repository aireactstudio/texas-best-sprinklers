'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Settings, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import AreasServed from '@/components/AreasServed';

export default function IrrigationRepairPage() {
  // Service data
  const serviceInfo = {
    title: "Irrigation Repair",
    metaDescription: "Professional irrigation repair services in Fort Worth, TX. Fast, efficient repairs for all sprinkler system issues by licensed technicians.",
    description: "Our expert technicians diagnose and repair all types of irrigation system issues, from minor leaks to major system malfunctions, restoring your system to optimal performance.",
    icon: <Settings size={32} />,
    image: "https://images.unsplash.com/photo-1601154048893-0d6451375c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Emergency repair services",
      "Leak detection and repair",
      "Broken head and pipe replacement",
      "Valve repair and replacement",
      "Controller troubleshooting",
      "Wire tracking and repair",
      "System pressure issues"
    ],
    content: [
      {
        heading: "Fast, Reliable Repair Services",
        text: "When your irrigation system fails, quick action is essential to prevent water waste and landscape damage. Our experienced repair technicians respond promptly to diagnose and fix issues, often providing same-day service for urgent repairs. We arrive fully equipped to handle most repairs on the spot."
      },
      {
        heading: "Comprehensive Diagnostics",
        text: "Our technicians use advanced diagnostic tools and techniques to quickly identify the source of your irrigation problems. From pinpointing underground leaks to troubleshooting electrical issues, we thoroughly evaluate your entire system to catch both obvious and hidden problems."
      },
      {
        heading: "Common Repair Solutions",
        text: "We handle all types of irrigation repairs, including replacing broken sprinkler heads, fixing leaking pipes and connections, repairing or replacing malfunctioning valves, troubleshooting controller issues, locating and fixing wire breaks, and addressing pressure problems that affect system performance."
      },
      {
        heading: "Quality Parts and Workmanship",
        text: "All repairs are performed using high-quality replacement parts that match or exceed your original system components. Our technicians are factory-trained and follow industry best practices to ensure long-lasting repairs that stand the test of time."
      }
    ]
  };

  // Location pages
  const locationPages = [
    {
      city: "Fort Worth",
      url: "/services/irrigation-repair/fort-worth-irrigation-repair",
      description: "Expert irrigation repair services for Fort Worth homeowners and businesses. Fast response times and quality repairs by licensed technicians."
    },
    {
      city: "Arlington",
      url: "/services/irrigation-repair/arlington-irrigation-repair",
      description: "Arlington's trusted irrigation repair specialists. We diagnose and fix sprinkler systems quickly and effectively throughout Arlington."
    },
    {
      city: "Keller",
      url: "/services/irrigation-repair/keller-irrigation-repair",
      description: "Professional irrigation repair in Keller, TX. Fast response for sprinkler emergencies and expert system troubleshooting."
    }
  ];

  // Related services for this page
  const relatedServices = [
    {
      title: "Sprinkler Installation",
      description: "Our expert team designs and installs custom irrigation systems tailored to your landscape's specific needs.",
      icon: <Settings size={32} />,
      path: "/services/sprinkler-installation"
    },
    {
      title: "Maintenance",
      description: "Our proactive maintenance services extend the life of your irrigation system, optimize water efficiency, and prevent costly breakdowns.",
      icon: <Settings size={32} />,
      path: "/services/maintenance"
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
                  Our Repair Services
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
              
              {/* Location-specific pages */}
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Service Areas
                </h2>
                <p className="text-gray-800 leading-relaxed text-lg mb-8">
                  We provide expert irrigation repair services throughout the Fort Worth metro area. Click on your city below for location-specific information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {locationPages.map((location, index) => (
                    <Link href={location.url} key={index}>
                      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">{location.city} Irrigation Repair</h3>
                        <p className="text-gray-800 mb-4">
                          {location.description}
                        </p>
                        <div className="text-irrigation-darkGreen font-medium hover:text-irrigation-darkBlue flex items-center">
                          <span>Services in {location.city}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Signs You Need Repair */}
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Signs Your Irrigation System Needs Repair
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Uneven Watering</h3>
                    <p className="text-gray-800">
                      Brown patches in your lawn or areas that are consistently too wet or too dry could indicate sprinkler head problems or pressure issues.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Visible Leaks</h3>
                    <p className="text-gray-800">
                      Puddles, water bubbling from the ground, or unusually soft/muddy areas in your yard are clear signs of underground leaks.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">High Water Bills</h3>
                    <p className="text-gray-800">
                      A sudden increase in your water bill without a change in usage could indicate a hidden leak in your irrigation system.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">System Won't Turn On</h3>
                    <p className="text-gray-800">
                      If your system won't activate, you could have controller issues, solenoid failures, or electrical problems that need professional attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div>
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Schedule a Repair</h3>
                <p className="text-gray-800 mb-6">
                  Experiencing irrigation system problems? Fill out the form below for fast service and troubleshooting.
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
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Priority
                    </label>
                    <select 
                      id="urgency" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                    >
                      <option value="standard">Standard Service</option>
                      <option value="priority">Priority Service (Additional Fee)</option>
                      <option value="emergency">Emergency Service (Additional Fee)</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Request Repair Service
                  </button>
                </form>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">For emergency repairs, call us directly:</h4>
                  <p className="text-irrigation-blue font-bold text-lg">(817) 304-7896</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Areas Served */}
      <AreasServed 
        serviceName="Irrigation Repair"
        serviceSlug="irrigation-repair"
        title="Repair Services Throughout DFW"
        subtitle="Click on your city below for location-specific repair services and information."
      />
      
      {/* Related Services */}
      <section className="py-16 md:py-24 bg-irrigation-gray">
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
        title="Having Irrigation System Problems?"
        subtitle="Our team of irrigation repair experts is ready to help. Contact us today for fast, reliable service."
        buttonText="Schedule a Repair"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
