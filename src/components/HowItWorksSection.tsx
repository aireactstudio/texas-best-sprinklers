
import React from 'react';
import Image from 'next/image';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start with a thorough assessment of your landscape, discussing your needs, water usage goals, and budget considerations.",
    },
    {
      number: "02",
      title: "Custom Design",
      description: "Our technicians create a tailored irrigation plan specific to your landscape's layout, soil type, and plant requirements.",
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Expert technicians install your system with minimal disruption, ensuring everything is properly calibrated.",
    },
    {
      number: "04",
      title: "Fine-Tuning & Education",
      description: "We adjust your system for optimal performance and teach you how to use your new irrigation system effectively.",
    },
  ];

  return (
    <section className="section bg-gray-100 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-irrigation-green opacity-5 rounded-l-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-block bg-irrigation-a11y-light-green text-irrigation-a11y-green px-4 py-2 rounded-full mb-4 font-medium">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
              How We Transform Your Landscape
            </h2>
            <p className="text-lg text-irrigation-a11y-gray-dark mb-8">
              We follow a proven, step-by-step approach to create the perfect irrigation solution for your property, ensuring water efficiency and landscape health.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6">
                    <div className="h-12 w-12 rounded-full bg-irrigation-blue flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="h-full w-0.5 bg-irrigation-blue bg-opacity-30 ml-6 my-2"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side content */}
          <div className="bg-white rounded-lg shadow-xl p-8 relative">
            <div className="mb-8">
              <div className="bg-irrigation-a11y-light-green text-irrigation-a11y-green px-4 py-2 rounded-full inline-block mb-4 text-sm font-medium">
                Quality Service
              </div>
              <h3 className="text-2xl font-bold mb-4 text-irrigation-blue">Why Choose Our Process?</h3>
              <p className="text-gray-600 mb-6">
                Our methodical approach ensures your irrigation system is perfectly tailored to your landscape's unique needs, maximizing efficiency and minimizing water waste.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-irrigation-green/20 p-3 rounded-full mr-4 text-irrigation-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-irrigation-darkBlue mb-1">Licensed & Certified</h4>
                  <p className="text-gray-600">All installations performed by trained, licensed irrigation specialists</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-irrigation-green/20 p-3 rounded-full mr-4 text-irrigation-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-irrigation-darkBlue mb-1">Timely Completion</h4>
                  <p className="text-gray-600">Most residential irrigation systems installed in just 1-2 days</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-irrigation-green/20 p-3 rounded-full mr-4 text-irrigation-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-irrigation-darkBlue mb-1">Warranty Protection</h4>
                  <p className="text-gray-600">All new installations backed by our comprehensive service warranty</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="/contact" className="inline-flex items-center text-irrigation-green font-medium hover:text-irrigation-darkGreen transition-colors">
                Schedule Your Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
