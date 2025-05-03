'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CTA from '@/components/CTA';
import { Droplet, CloudRain, Settings, TreeDeciduous, CloudSun } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-8">
        <div className="h-16 w-16 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-6 text-irrigation-green">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-irrigation-blue">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          href={`/services/${id}`} 
          className="text-irrigation-green font-medium hover:text-irrigation-darkGreen flex items-center"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title="Professional Irrigation Services" 
        subtitle="Expert sprinkler system solutions for Fort Worth and Weatherford properties"
      />
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-700 mx-auto max-w-4xl">
              Texas Best Sprinklers offers a complete range of irrigation services to meet the needs of residential and commercial property owners throughout Fort Worth and Weatherford.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Sprinkler System Installation"
              description="Custom-designed irrigation systems for new construction or landscape renovations, professionally installed for optimal coverage and water efficiency."
              icon={<Droplet size={32} />}
              id="sprinkler-installation"
            />
            
            <ServiceCard 
              title="Sprinkler Repair & Maintenance"
              description="Comprehensive repair services for all types of sprinkler systems, from fixing broken heads and leaking pipes to full system troubleshooting."
              icon={<Settings size={32} />}
              id="sprinkler-repair"
            />
            
            <ServiceCard 
              title="Drainage Solutions"
              description="Expert design and installation of yard drainage systems to prevent water accumulation, protect your landscape, and prevent foundation damage."
              icon={<CloudRain size={32} />}
              id="drainage-solutions"
            />
            
            <ServiceCard 
              title="Smart Irrigation Controls"
              description="Upgrade your system with weather-based, Wi-Fi enabled controllers that automatically adjust watering schedules based on local conditions."
              icon={<CloudSun size={32} />}
              id="smart-irrigation"
            />
            
            <ServiceCard 
              title="Drip Irrigation"
              description="Water-efficient drip systems for gardens, flower beds, and container plants that deliver moisture directly to plant roots with minimal waste."
              icon={<TreeDeciduous size={32} />}
              id="drip-irrigation"
            />
            
            <ServiceCard 
              title="Commercial Irrigation"
              description="Specialized irrigation solutions for commercial properties, HOAs, municipal parks, and sports fields, focusing on water conservation and coverage."
              icon={<Droplet size={32} />}
              id="commercial-irrigation"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-irrigation-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
                Why Choose Texas Best Sprinklers?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-irrigation-green/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-irrigation-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-irrigation-blue">Licensed & Insured Professionals</h3>
                    <p className="text-gray-700">
                      Our team includes licensed irrigation professionals with extensive training and expertise in all aspects of sprinkler system design, installation, and repair.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-irrigation-green/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-irrigation-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-irrigation-blue">Quality Parts & Materials</h3>
                    <p className="text-gray-700">
                      We use only professional-grade equipment and components from trusted manufacturers, ensuring your system is built to last with minimal maintenance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-irrigation-green/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-irrigation-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-irrigation-blue">Water Conservation Focus</h3>
                    <p className="text-gray-700">
                      All our irrigation solutions are designed with water efficiency in mind, helping you maintain a beautiful landscape while minimizing water usage and costs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-irrigation-green/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-irrigation-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-irrigation-blue">Warranty & Service Guarantee</h3>
                    <p className="text-gray-700">
                      We stand behind our work with comprehensive warranties on installations and a satisfaction guarantee on all repairs and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/images/why-choose-us.jpg"
                alt="Texas Best Sprinklers professional at work"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">Our Service Areas</h2>
            <p className="text-lg text-gray-700 mx-auto max-w-4xl">
              We proudly provide irrigation services to residential and commercial properties throughout Tarrant and Parker counties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8 text-center hover:border-irrigation-blue transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-irrigation-blue">Fort Worth</h3>
              <p className="text-gray-700 mb-6">
                Serving all areas of Fort Worth including Arlington Heights, TCU, Tanglewood, Westover Hills, Ridglea, Wedgwood, and surrounding neighborhoods.
              </p>
              <Link 
                href="/fort-worth" 
                className="inline-flex items-center text-irrigation-green font-medium hover:text-irrigation-darkGreen"
              >
                Fort Worth Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-8 text-center hover:border-irrigation-blue transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-irrigation-blue">Weatherford</h3>
              <p className="text-gray-700 mb-6">
                Serving Weatherford, Hudson Oaks, Willow Park, Aledo, Brock, and other communities throughout Parker County.
              </p>
              <Link 
                href="/weatherford" 
                className="inline-flex items-center text-irrigation-green font-medium hover:text-irrigation-darkGreen"
              >
                Weatherford Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Improve Your Irrigation System?"
        subtitle="Contact us today for a free consultation and estimate on any of our services."
        buttonText="Contact Us Now"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
