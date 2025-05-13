'use client';

import React, { useState } from 'react';

// Define the steps for each service type with icons
const serviceHowToSteps = {
  irrigation: [
    {
      number: "01",
      title: "Schedule a Consultation",
      description: "Contact us to schedule a free on-site irrigation consultation where we'll assess your landscape needs and water usage patterns.",
      icon: "calendar-check"
    },
    {
      number: "02",
      title: "Receive a Custom Design",
      description: "Our irrigation experts will create a tailored sprinkler system design that maximizes efficiency for your specific landscape.",
      icon: "pencil-ruler"
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our certified technicians will install your irrigation system with minimal disruption to your landscape.",
      icon: "tools"
    },
    {
      number: "04",
      title: "System Walkthrough",
      description: "We'll show you how to operate your new irrigation system and program it for optimal water conservation.",
      icon: "hand-pointer"
    }
  ],
  drainage: [
    {
      number: "01",
      title: "Drainage Assessment",
      description: "We'll conduct a thorough assessment of your property to identify water flow patterns and problem areas.",
      icon: "search"
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our team will design a custom drainage solution to address your specific water management challenges.",
      icon: "drafting-compass"
    },
    {
      number: "03",
      title: "Expert Installation",
      description: "Our specialists will install your drainage system, ensuring proper water diversion and landscape protection.",
      icon: "hard-hat"
    },
    {
      number: "04",
      title: "Final Inspection",
      description: "We'll test your drainage system to ensure it effectively manages water flow and protects your property.",
      icon: "clipboard-check"
    }
  ],
  lighting: [
    {
      number: "01",
      title: "Lighting Consultation",
      description: "Meet with our lighting designers to discuss your outdoor lighting goals and preferences.",
      icon: "comments"
    },
    {
      number: "02",
      title: "Lighting Design",
      description: "We'll create a custom lighting plan that enhances your property's beauty, security, and functionality.",
      icon: "lightbulb"
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our technicians will carefully install your lighting system with attention to detail and minimal disruption.",
      icon: "screwdriver"
    },
    {
      number: "04",
      title: "Evening Demonstration",
      description: "We'll return in the evening to make final adjustments and demonstrate your new lighting system.",
      icon: "moon"
    }
  ],
  maintenance: [
    {
      number: "01",
      title: "System Evaluation",
      description: "We'll conduct a comprehensive evaluation of your existing irrigation, drainage, or lighting system.",
      icon: "clipboard-list"
    },
    {
      number: "02",
      title: "Maintenance Plan",
      description: "Based on our evaluation, we'll create a customized maintenance plan to keep your systems in optimal condition.",
      icon: "calendar-alt"
    },
    {
      number: "03",
      title: "Regular Service",
      description: "Our technicians will perform scheduled maintenance visits to inspect, clean, and adjust your systems.",
      icon: "wrench"
    },
    {
      number: "04",
      title: "Seasonal Adjustments",
      description: "We'll make seasonal adjustments to ensure your systems perform optimally throughout the year.",
      icon: "sync-alt"
    }
  ]
};

const serviceNames = {
  irrigation: "Irrigation Systems",
  drainage: "Drainage Solutions",
  lighting: "Outdoor Lighting",
  maintenance: "System Maintenance"
};

const HowToGetStartedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'irrigation' | 'drainage' | 'lighting' | 'maintenance'>('irrigation');

  return (
    <section className="section bg-white py-16" id="how-to-get-started">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-irrigation-a11y-light-green text-irrigation-a11y-green px-4 py-2 rounded-full mb-4 font-medium">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-darkBlue">
            How to Get Started
          </h2>
          <p className="text-lg text-irrigation-a11y-gray-dark max-w-3xl mx-auto">
            Follow these simple steps to transform your outdoor space with our professional services.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
          {Object.entries(serviceNames).map(([key, name]) => (
            <button
              key={key}
              className={`px-6 py-3 font-medium text-lg transition-colors duration-200 relative ${
                activeTab === key 
                  ? 'text-irrigation-green border-b-2 border-irrigation-green -mb-px' 
                  : 'text-gray-600 hover:text-irrigation-green'
              }`}
              onClick={() => setActiveTab(key as any)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Steps Display */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHowToSteps[activeTab].map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                id={`step-${activeTab}-${index + 1}`}
              >
                <div className="border-l-4 border-irrigation-green p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-irrigation-a11y-light-green w-14 h-14 rounded-lg flex items-center justify-center mr-4">
                      <i className={`fas fa-${step.icon} text-irrigation-green text-2xl`}></i>
                    </div>
                    <div>
                      <div className="text-sm text-irrigation-green font-semibold">Step {step.number}</div>
                      <h3 className="text-xl font-bold text-irrigation-blue">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 ml-16">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="btn-primary inline-flex items-center"
          >
            Get Started Today
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToGetStartedSection;
