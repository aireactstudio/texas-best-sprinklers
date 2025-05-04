'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Droplet, CloudRain, Settings, TreeDeciduous, CloudSun, Check } from 'lucide-react';
import CTA from '@/components/CTA';

// Service data
const serviceData = {
  "sprinkler-installation": {
    title: "Sprinkler System Installation",
    metaDescription: "Professional sprinkler system installation in Fort Worth, TX. Our custom irrigation systems ensure even water distribution and maximum efficiency for your landscape.",
    description: "Our expert team designs and installs custom irrigation systems tailored to your landscape's specific needs, ensuring optimal water coverage and efficiency.",
    icon: <Droplet size={32} />,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    features: [
      "Custom system design based on your landscape and soil conditions",
      "High-quality, durable components from trusted manufacturers",
      "Water-efficient sprinkler heads and nozzles",
      "Smart controllers with weather-based adjustments",
      "Professional installation with minimal disruption to your landscape",
      "Thorough system testing and adjustments",
      "Complete owner education on system operation"
    ],
    content: [
      {
        heading: "Expert Sprinkler System Design",
        text: "Before installation begins, our irrigation specialists analyze your landscape's specific requirements, considering factors like plant types, soil conditions, sun exposure, and slope. We create a custom design that divides your yard into irrigation zones based on water needs, ensuring efficient water usage and healthy plant growth."
      },
      {
        heading: "Quality Components",
        text: "We use only professional-grade sprinkler system components from trusted manufacturers like Hunter, Rainbird, and Toro. From pipes and valves to sprinkler heads and controllers, every component is selected for durability, performance, and water efficiency."
      },
      {
        heading: "Professional Installation",
        text: "Our experienced installation teams work efficiently to minimize disruption to your landscape. Using specialized equipment, we carefully install all system components according to our detailed design plan, ensuring proper coverage and optimal performance."
      },
      {
        heading: "Smart Technology Integration",
        text: "Modern sprinkler systems benefit from smart technology that adjusts watering schedules based on weather conditions. We offer smart controllers that connect to local weather stations or use on-site sensors to measure rainfall, temperature, and solar radiation, automatically adjusting watering schedules to deliver just the right amount of water."
      }
    ]
  },
  "drainage-solutions": {
    title: "Drainage Solutions",
    metaDescription: "Professional drainage system installation in Fort Worth, TX. Protect your property from water damage with our custom drainage solutions for residential and commercial properties.",
    description: "Prevent water damage to your property with our professional drainage systems designed to effectively manage water flow and protect your landscape investments.",
    icon: <CloudRain size={32} />,
    image: "https://images.unsplash.com/photo-1583511655085-6c0f5a186571",
    features: [
      "Comprehensive property drainage assessment",
      "Custom solutions for your specific drainage issues",
      "French drain installation",
      "Surface drain installation",
      "Channel drain installation",
      "Dry creek beds and rain gardens",
      "Erosion control solutions"
    ],
    content: [
      {
        heading: "Property Drainage Assessment",
        text: "Our drainage experts begin with a thorough assessment of your property, identifying the sources of water accumulation and natural water flow patterns. We analyze soil composition, slope, existing drainage, and potential problem areas to develop the most effective drainage solution."
      },
      {
        heading: "French Drain Installation",
        text: "French drains are a highly effective solution for many drainage problems. We install trenches filled with gravel and perforated pipe that collect groundwater and redirect it away from problem areas. French drains work underground to prevent water accumulation before it becomes visible."
      },
      {
        heading: "Surface Drainage Solutions",
        text: "For visible water accumulation, we install surface drains and catch basins strategically placed in low spots to collect runoff. These systems connect to underground pipes that channel water away from your property to appropriate discharge points."
      },
      {
        heading: "Landscape Integration",
        text: "Our drainage solutions are designed to blend seamlessly with your landscape. Options like dry creek beds and rain gardens not only manage water flow but also enhance the aesthetic appeal of your property while providing environmental benefits."
      }
    ]
  },
  "outdoor-lighting": {
    title: "Outdoor Lighting",
    metaDescription: "Professional outdoor lighting installation in Fort Worth, TX. Enhance the beauty and security of your property with our custom landscape lighting design and installation services.",
    description: "Enhance your property's beauty, security, and functionality with our custom-designed outdoor lighting solutions for pathways, gardens, and architectural features.",
    icon: <CloudSun size={32} />,
    image: "https://images.unsplash.com/photo-1624385392440-a3454131290f",
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
  },
  "sprinkler-repair": {
    title: "Sprinkler Repair & Maintenance",
    metaDescription: "Expert sprinkler repair and maintenance services in Fort Worth, TX. Keep your irrigation system running efficiently with our professional repair, maintenance, and tune-up services.",
    description: "Our comprehensive repair and maintenance services keep your irrigation system running efficiently year after year, preventing water waste and ensuring landscape health.",
    icon: <Settings size={32} />,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
    features: [
      "Complete system inspections and diagnostics",
      "Repair of leaks, breaks, and damaged components",
      "Valve replacement and repair",
      "Sprinkler head adjustment and replacement",
      "Controller troubleshooting and upgrades",
      "Seasonal system activation and winterization",
      "Preventative maintenance programs"
    ],
    content: [
      {
        heading: "Comprehensive System Inspections",
        text: "Our thorough inspection process identifies issues before they become major problems. We check controller programming, test valves, inspect for leaks, evaluate pressure, examine wiring, adjust sprinkler heads, and review water coverage patterns to ensure optimal system performance."
      },
      {
        heading: "Expert Repairs",
        text: "From simple sprinkler head replacements to complex valve and wiring issues, our repair technicians have the expertise to fix any irrigation system problem. We troubleshoot efficiently to locate issues and make lasting repairs with quality replacement parts."
      },
      {
        heading: "Controller Upgrades",
        text: "Upgrading to a smart controller can significantly improve your irrigation system's efficiency. We can replace outdated controllers with modern, weather-based models that automatically adjust watering schedules based on local conditions, potentially saving thousands of gallons of water annually."
      },
      {
        heading: "Seasonal Services",
        text: "We provide essential seasonal services including spring system activation and fall winterization to protect your irrigation investment. Our winterization process uses compressed air to remove all water from your system, preventing freeze damage during cold weather."
      }
    ]
  },
  "lawn-care": {
    title: "Lawn & Landscape Care",
    metaDescription: "Professional lawn care and landscaping services in Fort Worth, TX. Keep your yard looking its best with our comprehensive maintenance, fertilization, and weed control services.",
    description: "Our professional lawn care services include mowing, fertilization, weed control, and seasonal clean-up to keep your yard looking its best year-round.",
    icon: <TreeDeciduous size={32} />,
    image: "https://images.unsplash.com/photo-1556480435-b7b37fd635d6",
    features: [
      "Regular lawn mowing and edging",
      "Customized fertilization programs",
      "Weed control treatments",
      "Aeration and overseeding",
      "Shrub and tree pruning",
      "Mulch installation and bed maintenance",
      "Seasonal clean-up services"
    ],
    content: [
      {
        heading: "Professional Mowing Services",
        text: "Regular mowing with professional equipment ensures your lawn maintains an optimal height for health and appearance. Our mowing services include proper edging along sidewalks and driveways, string trimming around obstacles, and cleanup of clippings from hard surfaces."
      },
      {
        heading: "Fertilization & Weed Control",
        text: "Our customized fertilization programs provide your lawn with essential nutrients throughout the growing season. We combine this with targeted weed control treatments to eliminate broadleaf weeds, crabgrass, and other unwanted plants, resulting in a thick, healthy, weed-free lawn."
      },
      {
        heading: "Core Aeration & Overseeding",
        text: "Compacted soil restricts root growth and nutrient absorption. Our core aeration service removes small plugs of soil and thatch, allowing air, water, and nutrients to reach root zones. Combining aeration with overseeding introduces improved grass varieties that increase density and improve drought and disease resistance."
      },
      {
        heading: "Complete Landscape Maintenance",
        text: "Beyond lawn care, we provide comprehensive landscape maintenance services including shrub and tree pruning, ornamental bed weeding, mulch installation, seasonal flower planting, and leaf removal to keep your entire property looking its best throughout the year."
      }
    ]
  },
  "commercial-irrigation": {
    title: "Commercial Irrigation Services",
    metaDescription: "Professional commercial irrigation services in Fort Worth, TX. Our experienced team designs, installs, and maintains water-efficient irrigation systems for businesses, HOAs, and municipal properties.",
    description: "Specialized irrigation solutions for commercial properties, including businesses, HOAs, apartment complexes, and municipal spaces.",
    icon: <Droplet size={32} />,
    image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05",
    features: [
      "Commercial-grade irrigation system design",
      "Large-scale installation capabilities",
      "Water-saving technology integration",
      "Central control systems for multiple properties",
      "Compliance with water restrictions and regulations",
      "Scheduled maintenance programs",
      "24/7 emergency service availability"
    ],
    content: [
      {
        heading: "Commercial System Design",
        text: "Commercial properties have unique irrigation requirements. Our design team creates customized systems that address the specific needs of office parks, retail centers, HOAs, apartment complexes, and municipal spaces. We consider water conservation, budget constraints, and maintenance requirements in every design."
      },
      {
        heading: "Water Management Solutions",
        text: "For commercial clients, water management is critical to controlling costs and meeting sustainability goals. We implement advanced technologies like flow sensors, master valves, and central control systems that allow property managers to monitor and manage water usage across multiple zones or properties."
      },
      {
        heading: "Compliance & Reporting",
        text: "Commercial properties must comply with local water restrictions and regulations. Our systems help ensure compliance, and we can provide usage reports and documentation required by municipal authorities. We keep up with changing regulations to ensure your property remains in compliance."
      },
      {
        heading: "Ongoing Support",
        text: "We offer comprehensive maintenance programs tailored to commercial properties, with regular inspections, adjustments, and repairs to keep systems operating at peak efficiency. Our team provides 24/7 emergency service for issues that require immediate attention to prevent property damage or excessive water waste."
      }
    ]
  }
};

export default function ServiceDetail({ params }: { params: { service: string } }) {
  const { service } = params;
  
  // Get service data from our object above
  const serviceInfo = serviceData[service as keyof typeof serviceData];
  
  // If service not found, show 404
  if (!serviceInfo) {
    notFound();
  }
  
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
                      <div className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-irrigation-green" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Detailed Content */}
              <div className="space-y-8">
                {serviceInfo.content.map((section, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-4 text-irrigation-blue">
                      {section.heading}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Request This Service</h3>
                <p className="text-gray-700 mb-6">
                  Fill out the form below to schedule a free consultation and estimate for {serviceInfo.title.toLowerCase()}.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-irrigation-blue focus:border-irrigation-blue"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-irrigation-blue hover:bg-irrigation-darkBlue text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
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
            {Object.entries(serviceData)
              .filter(([key]) => key !== service)
              .slice(0, 3)
              .map(([key, relatedService]) => (
                <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-6">
                    <div className="h-14 w-14 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-4 text-irrigation-green">
                      {relatedService.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-irrigation-darkBlue">{relatedService.title}</h3>
                    <p className="text-gray-800 mb-4">
                      {relatedService.description}
                    </p>
                    <Link 
                      href={`/services/${key}`} 
                      className="text-irrigation-darkGreen font-medium hover:text-irrigation-darkBlue flex items-center"
                      aria-label={`Learn more about ${relatedService.title}`}
                    >
                      <span>Learn More about {relatedService.title}</span>
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
        title="Ready to Get Started?"
        subtitle="Contact us today to schedule a free consultation and estimate for your project."
        buttonText="Contact Us Now"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
