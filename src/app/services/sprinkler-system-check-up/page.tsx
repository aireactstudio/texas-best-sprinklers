'use client';

import { ClipboardCheck } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function SprinklerSystemCheckUpPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.MAINTENANCE,
    title: "Sprinkler System Check-Up",
    description: "Our comprehensive sprinkler system check-up ensures your irrigation system is operating at peak efficiency, saving water and protecting your landscape investment.",
    icon: <ClipboardCheck size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Complete system inspection",
      "Head-by-head adjustment",
      "Controller programming review",
      "Water efficiency analysis",
      "Pressure testing",
      "Coverage evaluation",
      "Minor repairs on-the-spot"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Comprehensive System Evaluation
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our thorough sprinkler system check-up service evaluates every aspect of your irrigation system to ensure optimal performance. Our certified technicians inspect all components, from sprinkler heads and nozzles to valves, controllers, and pressure regulators, identifying both current issues and potential problems before they lead to costly repairs.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Performance Optimization
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            During your system check-up, we make adjustments to maximize efficiency and effectiveness. This includes aligning sprinkler heads, adjusting spray patterns, correcting pressure issues, and programming your controller for optimal watering schedules based on your specific landscape needs and local weather conditions.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Water Conservation Assessment
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Water conservation is a priority in our check-up service. We evaluate your system's water usage efficiency, identifying ways to reduce waste while maintaining healthy landscape hydration. Our recommendations may include updating to water-efficient nozzles, adding smart controllers, or adjusting run times to prevent over-watering.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Seasonal Readiness
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our check-up services can be tailored to prepare your system for changing seasons. Whether it's a spring start-up inspection to ensure your system is ready after winter dormancy, or a fall check-up before winterization, we'll make sure your irrigation system is properly prepared for seasonal transitions.
          </p>
        </div>
        
        {/* Benefits of Regular Check-Ups */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            Benefits of Regular Sprinkler System Check-Ups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Lower Water Bills</h3>
              <p className="text-gray-800">
                Regular check-ups identify and fix inefficiencies that waste water, potentially reducing your water bills by 20-30%.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Healthier Landscape</h3>
              <p className="text-gray-800">
                Properly adjusted systems ensure even water distribution, eliminating dry spots and overwatered areas for a more vibrant, healthy landscape.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Extended System Life</h3>
              <p className="text-gray-800">
                Identifying and addressing minor issues before they escalate helps extend the operational life of your entire irrigation system.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Environmental Responsibility</h3>
              <p className="text-gray-800">
                Optimized systems minimize water waste, contributing to water conservation efforts in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom sections */}
      <div className="mt-20">
        <ServiceAreaLocator
          title="Our Service Areas"
          subtitle="Texas Best Sprinklers provides expert sprinkler inspection services throughout the Fort Worth metroplex"
        />
      </div>
      
      <div className="mt-12 mb-20">
        <CTA 
          title="Schedule Your Sprinkler System Check-Up Today" 
          subtitle="Ensure your irrigation system is performing at its best. Contact us now to schedule a comprehensive check-up with our expert technicians."
        />
      </div>
    </ServicePageLayout>
  );
}
