'use client';

import { Settings } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreas from '@/components/ServiceAreas';
import CTA from '@/components/CTA';

export default function IrrigationRepairPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.IRRIGATION_REPAIR,
    title: "Irrigation Repair",
    description: "Our expert technicians diagnose and repair all types of irrigation system issues, from minor leaks to major system malfunctions, restoring your system to optimal performance.",
    icon: <Settings size={32} className="text-white" />,
    image: "/assets/images/optimized/Irrigation-Repair.png",
    features: [
      "Emergency repair services",
      "Leak detection and repair",
      "Broken head and pipe replacement",
      "Valve repair and replacement",
      "Controller troubleshooting",
      "Wire tracking and repair",
      "System pressure issues"
    ]
  };
  
  return (
    <ServicePageLayout {...serviceProps}>
      {/* Main Content - This will be displayed alongside the sidebar */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Fast, Reliable Repair Services
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            When your irrigation system fails, quick action is essential to prevent water waste and landscape damage. Our experienced repair technicians respond promptly to diagnose and fix issues, often providing same-day service for urgent repairs. We arrive fully equipped to handle most repairs on the spot.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Comprehensive Diagnostics
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Our technicians use advanced diagnostic tools and techniques to quickly identify the source of your irrigation problems. From pinpointing underground leaks to troubleshooting electrical issues, we thoroughly evaluate your entire system to catch both obvious and hidden problems.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Common Repair Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            We handle all types of irrigation repairs, including replacing broken sprinkler heads, fixing leaking pipes and connections, repairing or replacing malfunctioning valves, troubleshooting controller issues, locating and fixing wire breaks, and addressing pressure problems that affect system performance.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Quality Parts and Workmanship
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            All repairs are performed using high-quality replacement parts that match or exceed your original system components. Our technicians are factory-trained and follow industry best practices to ensure long-lasting repairs that stand the test of time.
          </p>
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
                If your system fails to activate or certain zones don't run, you might have controller issues, damaged valves, or electrical problems.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FULL WIDTH SECTIONS - These will span the entire width below the sidebar */}
      
      {/* Areas Served - Full width section */}
      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-irrigation-darkGreen">
            Areas We Serve
          </h2>
          <ServiceAreas 
            serviceType={ServiceType.IRRIGATION_REPAIR}
          />
        </div>
      </section>
      
      {/* CTA - Full width section */}
      <CTA 
        title="Professional Irrigation Repair Services"
        subtitle="Contact us today to schedule your service or get a free quote."
        buttonText="Request Service"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}