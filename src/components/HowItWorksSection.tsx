
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
          
          {/* Image or illustration */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden h-[500px] relative">
            <div className="relative w-full h-full">
              <Image 
                src="/assets/images/optimized/Truck-image-solo.png" 
                alt="Texas Best Sprinklers service truck" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-irrigation-blue to-transparent opacity-30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="bg-irrigation-green px-4 py-2 rounded-full inline-block mb-4 text-sm font-medium">
                Expert Installation
              </div>
              <h3 className="text-2xl font-bold mb-2">Professionally Installed Systems</h3>
              <p>Our certified technicians ensure your irrigation system is installed correctly and operates efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
