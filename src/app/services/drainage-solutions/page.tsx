"use client";

import Link from 'next/link';
import { CloudRain } from 'lucide-react';
import { ServiceType } from '@/data/serviceTypes';
import ServicePageLayout from '@/components/templates/ServicePageLayout';
import ServiceAreaLocator from '@/components/ServiceAreaLocator';
import CTA from '@/components/CTA';

export default function DrainageSolutionsPage() {
  // Service data for the template
  const serviceProps = {
    serviceType: ServiceType.DRAINAGE,
    title: "Drainage Corrections & French Drains",
    description: "Stop yard flooding and protect your foundation from Fort Worth's heavy winter rains and clay soil with custom drainage corrections and French drains.",
    icon: <CloudRain size={32} className="text-white" />,
    image: "/assets/images/optimized/hero-background.webp",
    features: [
      "Fix yard flooding and standing water after storms",
      "French drains designed for North Texas clay soil",
      "Surface drains and catch basins for low spots",
      "Downspout tie-ins to move roof water away from the house",
      "Regrading to push water away from foundations and patios",
      "Pumped drainage systems for tough, low-lying yards"
    ]
  };

  return (
    <ServicePageLayout {...serviceProps}>
      {/* Content Sections */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Custom Drainage Solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Every property has unique drainage needs based on soil type, slope, and existing landscape features. We design custom drainage systems that address your specific water management challenges, whether you're dealing with standing water, soggy areas, or foundation concerns.
            {" "}
            <Link href="/services/yard-drainage-systems" className="text-irrigation-darkGreen hover:text-irrigation-darkBlue underline-offset-2 hover:underline">
              Learn more about complete yard drainage systems.
            </Link>
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            French Drain Systems
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            French drains are subsurface drainage systems that collect and redirect groundwater away from problem areas. Our expert installation ensures proper depth, slope, and materials to efficiently channel water away from your foundation, lawn, or garden areas.
            {" "}
            <Link href="/services/french-drains" className="text-irrigation-darkGreen hover:text-irrigation-darkBlue underline-offset-2 hover:underline">
              See our dedicated French drain service.
            </Link>
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Surface Water Management
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            For visible water pooling and runoff issues, we install surface drains and channel systems that quickly collect and direct water to appropriate discharge locations. These systems are particularly effective for driveways, patios, and other hardscape areas where water tends to collect.
            {" "}
            <Link href="/services/channel-drains" className="text-irrigation-darkGreen hover:text-irrigation-darkBlue underline-offset-2 hover:underline">
              Learn more about channel drains and surface drainage.
            </Link>
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Foundation Protection
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Water collecting around your foundation can lead to costly structural damage. Our comprehensive foundation drainage solutions, including proper grading, drainage channel systems, and waterproofing measures, protect your home's structural integrity from water-related issues.
          </p>
        </div>
        
        {/* Problem-focused section */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            What’s happening in your yard?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Yard flooding & standing water</h3>
              <p className="text-gray-800">
                After winter storms, water sits in low spots and soggy areas instead of draining away. This ruins grass, creates mud pits, and turns parts of your yard into unusable space.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Water pooling at your foundation</h3>
              <p className="text-gray-800">
                Water collects along the side of your house, garage, or patio after it rains. On North Texas clay soil, this constant moisture can put stress on your foundation and lead to cracks or movement over time.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Saturated clay & foundation movement</h3>
              <p className="text-gray-800">
                Our heavy clay swells when it’s wet and shrinks when it dries out. That constant movement can create doors that stick, cracks in brick or drywall, and other signs your foundation is under stress.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Soggy patios & unusable outdoor spaces</h3>
              <p className="text-gray-800">
                Water running across walkways, patios, and outdoor living areas makes them slippery, muddy, and hard to use. Proper drainage keeps these high-traffic spaces dry and enjoyable after storms.
              </p>
            </div>
          </div>
        </div>

        {/* High-impact solutions section */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
            High-impact drainage solutions we install
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-6">
            We combine multiple drainage tools to match your property’s specific problems—from standing water in the yard to water collecting at your foundation and patios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">
                <Link href="/services/french-drains" className="hover:underline underline-offset-2 text-irrigation-darkBlue">
                  French drains
                </Link>
              </h3>
              <p className="text-gray-800">
                Subsurface systems that collect water from saturated clay and move it away from foundations, low spots, and planting beds.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">
                <Link href="/services/channel-drains" className="hover:underline underline-offset-2 text-irrigation-darkBlue">
                  Surface drains & catch basins
                </Link>
              </h3>
              <p className="text-gray-800">
                Grates and basins that grab water off the surface in the worst puddle areas, then route it safely away from the home.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">Downspout tie-ins</h3>
              <p className="text-gray-800">
                We connect gutters and downspouts into the drainage system so roof runoff doesn’t dump next to your foundation or walkways.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-irrigation-darkBlue">
                <Link href="/services/sump-pumps" className="hover:underline underline-offset-2 text-irrigation-darkBlue">
                  Regrading & pumped systems
                </Link>
              </h3>
              <p className="text-gray-800">
                For tough, low-lying yards, we reshape slopes or add sump/pump systems to lift water out and keep outdoor spaces usable after storms.
              </p>
            </div>
          </div>
        </div>

        {/* Why winter is the best time section */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
            Why winter is the best time to fix drainage
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Winter is when North Texas clay soil shows its true colors. Heavy rains, saturated ground, and standing water make it easy to see exactly where your yard and foundation are at risk. Fixing drainage now means you’re solving the real problems instead of guessing in the dry months.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>See where water actually collects so we can design the right French drains, surface drains, and discharge points.</li>
            <li>Relieve constant moisture around your foundation before it turns into costly movement or cracks.</li>
            <li>Keep patios, walkways, and outdoor living areas usable instead of muddy and slick all winter long.</li>
            <li>Get ahead of spring projects by fixing grading and drainage first, then improving grass, beds, or hardscape after.</li>
          </ul>
        </div>

        {/* Drainage Inspection mini-offer */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 border border-irrigation-gray/40">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-irrigation-blue">
            Schedule a Drainage Inspection
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Not sure what you need yet? A simple on-site drainage inspection will show you exactly what’s going on and what it will take to fix it.
          </p>
          <p className="text-gray-800 font-semibold mb-2">Your inspection typically includes:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-4">
            <li>Walk-through of your yard, patios, and problem areas after recent rains.</li>
            <li>Check of grading, downspout locations, and how water moves across your property.</li>
            <li>Recommendations for French drains, surface drains, downspout tie-ins, regrading, or pumped solutions as needed.</li>
            <li>Clear next steps and ballpark ranges so you can decide how to move forward.</li>
          </ul>
          <p className="text-gray-800">
            Use the contact form on this page to request a drainage inspection and let us know where you’re seeing water problems. We’ll schedule a visit and put together a practical plan to keep your yard and foundation protected.
          </p>
        </div>
      </div>
      
      {/* FULL WIDTH SECTIONS - These will span the entire width below the sidebar */}
      
      {/* Areas Served - Full width section */}
      <section className="py-16 bg-irrigation-gray mt-16">
        <div className="container-custom">
          <ServiceAreaLocator
            title="Our Service Areas"
            subtitle="Texas Best Sprinklers provides expert drainage solutions throughout the Fort Worth metroplex"
          />
        </div>
      </section>
      
      {/* CTA - Full width section */}
      <CTA 
        title="Ready to Solve Your Drainage Problems?"
        subtitle="Contact us today to schedule a drainage consultation and get a customized solution."
        buttonText="Get Your Solution"
        buttonLink="/contact"
      />
    </ServicePageLayout>
  );
}
