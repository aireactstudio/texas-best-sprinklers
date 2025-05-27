'use client';

import { Wrench } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreas from '@/components/ServiceAreas';
import CTA from '@/components/CTA';

export default function SprinklerRepairPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.SPRINKLER_REPAIR,
    title: "Sprinkler Repair",
    description: "Our expert technicians diagnose and fix all types of sprinkler system issues, from broken heads and leaks to valve problems and controller malfunctions.",
    icon: <Wrench size={32} className="text-white" />,
    image: "/assets/images/optimized/Sprinkler-Repair.png",
    features: [
      "Fast response times",
      "Broken sprinkler head repair and replacement",
      "Leak detection and repair",
      "Valve and solenoid troubleshooting",
      "Control box programming and repair",
      "Pressure regulation",
      "Zone adjustments"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Professional Sprinkler Repair Services
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            When your sprinkler system isn't functioning properly, you need fast, reliable repair service to prevent water waste and landscape damage. Texas Best Sprinklers provides expert sprinkler repair throughout the Fort Worth area, fixing broken heads, leaking pipes, malfunctioning valves, and controller issues quickly and efficiently.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Common Sprinkler Problems We Fix
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our technicians are trained to diagnose and repair all types of sprinkler system issues, including:
          </p>
          <ul className="mt-4 space-y-2 text-gray-800 leading-relaxed">
            <li className="flex items-start">
              <span className="text-irrigation-green mr-2 mt-1.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span><strong className="text-irrigation-darkBlue">Broken or Damaged Sprinkler Heads:</strong> We repair or replace broken, leaking, or clogged sprinkler heads to ensure proper water distribution.</span>
            </li>
            <li className="flex items-start">
              <span className="text-irrigation-green mr-2 mt-1.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span><strong className="text-irrigation-darkBlue">Leaking Pipes:</strong> We detect and repair underground pipe leaks that waste water and can damage your landscape.</span>
            </li>
            <li className="flex items-start">
              <span className="text-irrigation-green mr-2 mt-1.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span><strong className="text-irrigation-darkBlue">Valve Issues:</strong> We fix stuck, leaking, or malfunctioning valves that prevent your system from operating correctly.</span>
            </li>
            <li className="flex items-start">
              <span className="text-irrigation-green mr-2 mt-1.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span><strong className="text-irrigation-darkBlue">Controller Problems:</strong> We troubleshoot and repair timer issues, programming errors, and electrical problems with your control system.</span>
            </li>
            <li className="flex items-start">
              <span className="text-irrigation-green mr-2 mt-1.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span><strong className="text-irrigation-darkBlue">Water Pressure Problems:</strong> We diagnose and correct issues with high or low water pressure that affect sprinkler performance.</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Our Repair Process
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            When you call Texas Best Sprinklers for repair service, we follow a systematic approach to ensure your system is restored to optimal performance:
          </p>
          <ol className="mt-4 space-y-4 text-gray-800 leading-relaxed list-decimal list-inside">
            <li className="pl-2"><strong className="text-irrigation-darkBlue">Thorough Inspection:</strong> We conduct a complete system check to identify all issues, not just the obvious problems.</li>
            <li className="pl-2"><strong className="text-irrigation-darkBlue">Detailed Diagnosis:</strong> We explain exactly what's wrong with your system and provide upfront pricing for all needed repairs.</li>
            <li className="pl-2"><strong className="text-irrigation-darkBlue">Professional Repairs:</strong> Our technicians use quality replacement parts and proper techniques to ensure lasting repairs.</li>
            <li className="pl-2"><strong className="text-irrigation-darkBlue">System Testing:</strong> After repairs are complete, we run each zone to verify that everything is working correctly.</li>
            <li className="pl-2"><strong className="text-irrigation-darkBlue">Maintenance Recommendations:</strong> We provide advice on preventing future problems and maintaining your system for maximum efficiency.</li>
          </ol>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Why Choose Texas Best Sprinklers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-irrigation-darkBlue">Experienced Technicians</h3>
              <p className="text-gray-700">
                Our repair specialists have extensive training and experience with all major sprinkler system brands and components.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-irrigation-darkBlue">Fast Response Times</h3>
              <p className="text-gray-700">
                We understand that sprinkler problems require prompt attention, so we prioritize rapid response to service calls.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-irrigation-darkBlue">Quality Parts</h3>
              <p className="text-gray-700">
                We use only premium replacement parts that ensure reliable performance and longer system life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-irrigation-darkBlue">Warranty Protection</h3>
              <p className="text-gray-700">
                All our repair work is backed by a satisfaction guarantee and warranty on parts and labor.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Outside of the ServicePageLayout grid */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-irrigation-blue">
          We Provide Sprinkler Repair Throughout the Fort Worth Area
        </h2>
        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Our repair technicians serve homeowners and businesses in Fort Worth, Arlington, Keller, Southlake, Colleyville, Grapevine, and surrounding areas.
        </p>
        <ServiceAreas serviceType="sprinkler-repair" />
      </div>
      
      <div className="mt-16">
        <CTA 
          title="Need Sprinkler Repair Service?"
          subtitle="Contact us today for fast, professional sprinkler repairs by our expert technicians."
          buttonText="Request Service"
        />
      </div>
    </ServicePageLayout>
  );
}
