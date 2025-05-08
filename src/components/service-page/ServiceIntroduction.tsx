import { ServiceContent } from '@/data/types/serviceTypes';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceIntroductionProps {
  serviceContent: ServiceContent;
  location: string;
}

export default function ServiceIntroduction({ serviceContent, location }: ServiceIntroductionProps) {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-7/12 relative">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Professional {serviceContent.serviceType.charAt(0).toUpperCase() + serviceContent.serviceType.slice(1).replace('-', ' ')} in {location}
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none mb-6">
              <p>{serviceContent.intro}</p>
            </div>
            
            <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/assets/images/optimized/outdoor_lighting_2.webp" 
                alt="Professional service in action" 
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceContent.services && serviceContent.services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-5/12 bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-1">What Our Customers Say</h3>
              <div className="flex justify-center">
                <div className="flex text-yellow-400">
                  <FaCheckCircle />
                  <FaCheckCircle />
                  <FaCheckCircle />
                  <FaCheckCircle />
                  <FaCheckCircle />
                </div>
              </div>
            </div>
            
            <blockquote className="italic text-gray-600 mb-6">
              "The team at Texas Best Sprinklers provided excellent service for our property. Their attention to detail and professional approach made all the difference. Highly recommend their services to anyone in {location}!"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Sarah J.</p>
                <p className="text-sm text-gray-600">{location} Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
