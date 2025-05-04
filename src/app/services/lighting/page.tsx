'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CloudSun, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import AreasServed from '@/components/AreasServed';

export default function LightingPage() {
  // Service data
  const serviceInfo = {
    title: "Outdoor Lighting",
    metaDescription: "Professional outdoor lighting installation in Fort Worth, TX. Enhance the beauty and security of your property with our custom landscape lighting design and installation services.",
    description: "Enhance your property's beauty, security, and functionality with our custom-designed outdoor lighting solutions for pathways, gardens, and architectural features.",
    icon: <CloudSun size={32} />,
    image: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Custom lighting design for your unique landscape",
      "Energy-efficient LED technology",
      "Path and walkway lighting",
      "Accent lighting for gardens and architectural features",
      "Security lighting solutions",
      "Smart controls and automation",
      "Professional installation with hidden wiring"
    ],
    content: [
      {
        heading: "Custom Lighting Design",
        text: "Our outdoor lighting design process begins with understanding your goals, whether that's enhancing safety, highlighting landscape features, extending outdoor living hours, or improving security. We create a custom lighting plan that balances form and function."
      },
      {
        heading: "Energy-Efficient Solutions",
        text: "We exclusively use high-quality, energy-efficient LED lighting systems that provide beautiful illumination while consuming up to 80% less energy than traditional lighting. LED fixtures also last longer, require less maintenance, and offer superior light quality."
      },
      {
        heading: "Professional Installation",
        text: "Our installation teams carefully place fixtures, run wiring, and connect transformers with minimal disruption to your landscape. We use specialized techniques to hide wiring, ensuring your system looks beautiful day and night."
      },
      {
        heading: "Smart Controls and Automation",
        text: "Modern lighting systems benefit from smart controls that allow you to adjust lighting schedules, brightness, and even colors from your smartphone. We can integrate your outdoor lighting with home automation systems and set up timers, motion sensors, and other convenience features."
      }
    ]
  };

  // Related services for this page
  const relatedServices = [
    {
      title: "Sprinkler Installation",
      description: "Our expert team designs and installs custom irrigation systems tailored to your landscape's specific needs.",
      icon: <CloudSun size={32} />,
      path: "/services/sprinkler-installation"
    },
    {
      title: "Maintenance",
      description: "Our proactive maintenance services extend the life of your irrigation system, optimize water efficiency, and prevent costly breakdowns.",
      icon: <CloudSun size={32} />,
      path: "/services/maintenance"
    },
    {
      title: "Drainage Solutions",
      description: "Prevent water damage to your property with our professional drainage systems designed to effectively manage water flow.",
      icon: <CloudSun size={32} />,
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
                  Key Service Features
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
                  Benefits of Professional Outdoor Lighting
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Enhanced Safety</h3>
                    <p className="text-gray-800">
                      Well-lit pathways, steps, and entryways prevent accidents and make your property safer for family and guests.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Improved Security</h3>
                    <p className="text-gray-800">
                      Strategic lighting deters potential intruders by eliminating dark areas where they might hide.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Extended Outdoor Living</h3>
                    <p className="text-gray-800">
                      Enjoy your outdoor spaces well after sunset, extending your usable living area and entertainment options.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Increased Property Value</h3>
                    <p className="text-gray-800">
                      Quality landscape lighting enhances curb appeal and can increase your property's market value.
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
                  Interested in our outdoor lighting services? Fill out the form below, and our team will get back to you within 24 hours.
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Submit Request
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
      
      {/* Areas Served */}
      <AreasServed 
        serviceName="Outdoor Lighting"
        serviceSlug="lighting"
        title="Outdoor Lighting Services Throughout DFW"
        subtitle="Click on your city below for location-specific lighting solutions and services."
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
        title="Ready to Enhance Your Property with Beautiful Lighting?"
        subtitle="Contact us today to schedule a free consultation and lighting design proposal."
        buttonText="Contact Us Now"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
