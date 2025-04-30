
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Droplet, CloudRain, Settings, TreeDeciduous, CloudSun, Check } from 'lucide-react';

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
        heading: "Quality Components & Installation",
        text: "We use only industry-leading components from manufacturers like Rain Bird, Hunter, and Toro to ensure your system's reliability and longevity. Our professional installation team carefully places all components, minimizing disruption to existing landscaping and ensuring proper coverage throughout your property."
      },
      {
        heading: "Smart Irrigation Technology",
        text: "Modern sprinkler systems should adapt to changing weather conditions. We install smart controllers that automatically adjust watering schedules based on local weather data, soil moisture levels, and seasonal changes. This technology helps prevent overwatering, reduces water waste, and can significantly lower your water bills."
      },
      {
        heading: "Comprehensive Service & Support",
        text: "Our relationship doesn't end after installation. We provide thorough system training, seasonal maintenance programs, and prompt repair services to keep your irrigation system functioning perfectly year after year. All installations come with a comprehensive warranty on both parts and labor."
      }
    ],
    faqs: [
      {
        question: "How much does a sprinkler system typically cost?",
        answer: "The cost of a sprinkler system depends on several factors including the size of your property, the number of zones required, the type of components used, and any special features you select. For most residential properties in Fort Worth, systems typically range from $2,500 to $7,500. We provide detailed, no-obligation quotes after a thorough site assessment."
      },
      {
        question: "How long does installation take?",
        answer: "Most residential sprinkler system installations are completed in 1-3 days, depending on the system's size and complexity. Commercial projects may take longer. Our team works efficiently to minimize disruption to your property and routine."
      },
      {
        question: "Will installation damage my existing landscape?",
        answer: "We use specialized equipment and techniques that minimize disruption to your existing landscape. Our installation team is trained to carefully work around established plants, trees, and hardscaping. While some soil disturbance is unavoidable, we restore all areas after installation is complete."
      }
    ]
  },
  "drainage-solutions": {
    title: "Drainage Solutions",
    metaDescription: "Professional drainage system installation in Fort Worth, TX. Protect your property from water damage with our custom drainage solutions for residential and commercial properties.",
    description: "Prevent water damage to your property with our professional drainage systems designed to effectively manage water flow and protect your landscape investments.",
    icon: <CloudRain size={32} />,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    features: [
      "Comprehensive site assessment and water flow analysis",
      "Custom drainage solutions for your specific needs",
      "French drains, channel drains, and surface drains",
      "Sump pump installation and basement waterproofing",
      "Erosion control solutions",
      "Gutter and downspout extensions",
      "Environmentally friendly water management options"
    ],
    content: [
      {
        heading: "Professional Drainage Assessment",
        text: "Our drainage experts begin with a thorough evaluation of your property, identifying problem areas, water flow patterns, and potential risks. We analyze soil conditions, grades, and existing structures to develop a complete understanding of your drainage needs."
      },
      {
        heading: "Custom Drainage Solutions",
        text: "Based on our assessment, we design a drainage system tailored to your property's unique requirements. Solutions may include French drains to collect and redirect subsurface water, channel drains for hardscaped areas, catch basins to collect surface water, or a combination of techniques to effectively manage water flow throughout your property."
      },
      {
        heading: "Expert Installation",
        text: "Our experienced installation team uses specialized equipment and proper techniques to install your drainage system with minimal disruption to your landscape. We ensure proper grading, adequate pipe sizing, and appropriate connections to effectively move water away from vulnerable areas of your property."
      },
      {
        heading: "Protecting Your Investment",
        text: "Proper drainage is one of the most important aspects of landscape maintenance. Our drainage solutions protect your home's foundation, prevent landscape erosion, reduce mosquito breeding areas, and help maintain healthy plant root systems by preventing oversaturation."
      }
    ],
    faqs: [
      {
        question: "How can I tell if I need a drainage system?",
        answer: "Common signs that indicate drainage problems include standing water that remains for 24+ hours after rain, water pooling near your foundation, basement dampness or flooding, eroded soil in landscaped areas, or dying plants due to oversaturated soil. If you notice any of these issues, it's important to address them promptly."
      },
      {
        question: "What types of drainage systems do you install?",
        answer: "We install a variety of drainage solutions including French drains, surface drains, channel drains, dry wells, sump pumps, downspout extensions, and rain gardens. The right solution depends on your specific situation, which we determine during our professional assessment."
      },
      {
        question: "Do drainage systems require maintenance?",
        answer: "Yes, all drainage systems require some maintenance to function properly. The level of maintenance depends on the system type, but generally includes periodic clearing of debris from inlets, checking for proper flow, and occasionally flushing the system. We offer maintenance programs to ensure your drainage system continues to function effectively."
      }
    ]
  },
  "outdoor-lighting": {
    title: "Outdoor Lighting",
    metaDescription: "Professional outdoor lighting installation in Fort Worth, TX. Enhance the beauty and security of your property with our custom landscape lighting design and installation services.",
    description: "Enhance your property's beauty, security, and functionality with our custom-designed outdoor lighting solutions for pathways, gardens, and architectural features.",
    icon: <CloudSun size={32} />,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    features: [
      "Custom lighting design for your unique property",
      "Energy-efficient LED lighting systems",
      "Landscape lighting for gardens, trees, and pathways",
      "Architectural accent lighting",
      "Security and safety lighting",
      "Swimming pool and water feature lighting",
      "Smart lighting controls and automation"
    ],
    content: [
      {
        heading: "Custom Lighting Design",
        text: "Our lighting designers work with you to understand your goals for your outdoor spaces. Whether you want to enhance architectural features, illuminate pathways for safety, create ambiance for outdoor entertaining, or boost security, we create a custom lighting plan that achieves your objectives while complementing your property's unique characteristics."
      },
      {
        heading: "Energy-Efficient Solutions",
        text: "We exclusively install high-quality, energy-efficient LED lighting systems that provide beautiful illumination while minimizing energy consumption. These systems typically use 80% less electricity than traditional lighting, have a much longer lifespan, and require less maintenance."
      },
      {
        heading: "Professional Installation",
        text: "Our installation team carefully places each fixture for maximum effect and minimal visibility during daylight hours. We use proper wiring techniques, waterproof connections, and quality transformers to ensure your system's reliability. All wiring is buried and landscapes are restored to their original condition after installation."
      },
      {
        heading: "Smart Controls",
        text: "Enhance the convenience and efficiency of your outdoor lighting with smart control options. From basic timers and photocells to complete home automation integration, we offer solutions that allow you to control your lighting with a smartphone app, set automated schedules, or create custom lighting scenes for different occasions."
      }
    ],
    faqs: [
      {
        question: "How much does landscape lighting cost?",
        answer: "The cost of landscape lighting varies based on the size of your property, the number of fixtures needed, the complexity of the installation, and the type of fixtures and controls selected. Basic systems typically start around $2,000, while comprehensive lighting designs for larger properties may range from $5,000 to $15,000 or more."
      },
      {
        question: "How long do LED landscape lights last?",
        answer: "Quality LED landscape lighting fixtures typically have a lifespan of 15-20 years for the LED components. The fixture housings, when made from high-quality materials like solid brass, can last for decades with proper maintenance."
      },
      {
        question: "Can outdoor lighting be added to my existing landscape?",
        answer: "Absolutely! Outdoor lighting can be installed in existing landscapes with minimal disruption. Our installation team takes great care to protect your plants and hardscaping during the installation process, and all disturbed areas are restored after work is complete."
      }
    ]
  },
  "sprinkler-repair": {
    title: "Sprinkler Repair & Maintenance",
    metaDescription: "Expert sprinkler repair and maintenance services in Fort Worth, TX. Keep your irrigation system running efficiently with our professional repair, maintenance, and tune-up services.",
    description: "Our comprehensive repair and maintenance services keep your irrigation system running efficiently year after year, preventing water waste and ensuring landscape health.",
    icon: <Settings size={32} />,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    features: [
      "Prompt diagnosis and repair of all system issues",
      "Sprinkler head replacement and adjustment",
      "Valve repair and replacement",
      "Controller programming and updates",
      "Leak detection and pipe repairs",
      "System winterization and spring start-up",
      "Preventative maintenance programs"
    ],
    content: [
      {
        heading: "Expert Diagnosis & Repair",
        text: "Our technicians are trained to quickly identify and fix any issues with your irrigation system. From replacing broken sprinkler heads and repairing leaking pipes to troubleshooting electrical problems and controller malfunctions, we have the expertise to get your system back to optimal performance."
      },
      {
        heading: "Seasonal Services",
        text: "Proper seasonal maintenance is crucial for extending the life of your irrigation system and ensuring efficient operation. We offer professional spring start-up services to prepare your system for the growing season and winterization services to protect your investment from freeze damage during colder months."
      },
      {
        heading: "System Upgrades",
        text: "Technology in irrigation is constantly improving. We can upgrade your existing system with water-saving components like pressure-regulating spray heads, high-efficiency nozzles, smart controllers, rain sensors, and soil moisture sensors. These upgrades can significantly reduce water consumption while improving plant health."
      },
      {
        heading: "Preventative Maintenance Programs",
        text: "Our maintenance programs provide regular system inspections and adjustments to catch small issues before they become costly problems. Scheduled maintenance ensures your irrigation system remains efficient, extends its lifespan, and maintains optimal performance throughout the changing seasons."
      }
    ],
    faqs: [
      {
        question: "How can I tell if my sprinkler system needs repairs?",
        answer: "Common signs include dry spots in your lawn, unusually high water bills, sprinkler heads that aren't popping up or are spraying incorrectly, water pooling in certain areas, or zones that don't turn on. If you notice any of these issues, it's best to have your system inspected promptly."
      },
      {
        question: "Do you offer emergency repair services?",
        answer: "Yes, we understand that irrigation system failures can cause significant damage if not addressed quickly. We offer emergency repair services for situations like major leaks or system malfunctions that might damage your property or waste large amounts of water."
      },
      {
        question: "How often should sprinkler systems be serviced?",
        answer: "For optimal performance, we recommend a professional inspection and tune-up at least twice yearly – once in spring before heavy use begins and once in fall before winterization. More frequent inspections may be beneficial for larger or older systems."
      }
    ]
  },
  "lawn-care": {
    title: "Lawn & Landscape Care",
    metaDescription: "Professional lawn care and landscaping services in Fort Worth, TX. Keep your yard looking its best with our comprehensive maintenance, fertilization, and weed control services.",
    description: "Our professional lawn care services include mowing, fertilization, weed control, and seasonal clean-up to keep your yard looking its best year-round.",
    icon: <TreeDeciduous size={32} />,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    features: [
      "Professional lawn mowing and edging",
      "Custom fertilization programs",
      "Weed control treatments",
      "Aeration and overseeding",
      "Mulch installation and bed maintenance",
      "Shrub and tree pruning",
      "Seasonal clean-up services"
    ],
    content: [
      {
        heading: "Comprehensive Lawn Care",
        text: "Our lawn care programs provide everything your lawn needs to stay healthy and beautiful throughout the year. From regular mowing with professional-grade equipment to custom fertilization applications tailored to your soil's specific needs, we take a holistic approach to lawn health."
      },
      {
        heading: "Weed & Pest Management",
        text: "We use targeted applications of pre-emergent and post-emergent herbicides to control weeds while minimizing chemical use. Our integrated pest management approach addresses insect problems effectively while protecting beneficial organisms in your landscape ecosystem."
      },
      {
        heading: "Seasonal Services",
        text: "Different seasons require different lawn care approaches. Our seasonal services include spring clean-ups to remove winter debris, summer maintenance to keep your lawn lush during heat stress, fall leaf removal, and winter preparation to protect your landscape during dormancy."
      },
      {
        heading: "Landscape Bed Maintenance",
        text: "Beyond lawn care, we provide complete maintenance for your landscape beds, including pruning, mulching, weed control, and plant health care. Our attention to detail ensures your entire landscape maintains a manicured, professional appearance."
      }
    ],
    faqs: [
      {
        question: "How often should my lawn be mowed?",
        answer: "During the growing season, most lawns in the Fort Worth area benefit from weekly mowing. However, the ideal frequency depends on grass type, growth rate, and seasonal conditions. We adjust our mowing schedule throughout the year to match your lawn's specific needs."
      },
      {
        question: "What's included in your lawn care packages?",
        answer: "Our basic lawn care package includes regular mowing, edging, and blowing. More comprehensive packages add services like fertilization, weed control, aeration, overseeding, and seasonal clean-ups. We can customize a program specifically for your property's needs and your budget."
      },
      {
        question: "Is your lawn care environmentally friendly?",
        answer: "Yes, we emphasize sustainable practices in all our lawn care services. This includes proper mowing heights to reduce water needs, targeted fertilization to minimize runoff, integrated pest management to reduce chemical use, and proper irrigation management to conserve water."
      }
    ]
  },
  "commercial-irrigation": {
    title: "Commercial Irrigation Services",
    metaDescription: "Professional commercial irrigation services in Fort Worth, TX. Our experienced team designs, installs, and maintains water-efficient irrigation systems for businesses, HOAs, and municipal properties.",
    description: "Specialized irrigation solutions for commercial properties, including businesses, HOAs, apartment complexes, and municipal spaces.",
    icon: <Droplet size={32} />,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    features: [
      "Custom irrigation design for commercial properties",
      "Water-efficient systems for large landscapes",
      "Sports field and golf course irrigation",
      "HOA and apartment complex solutions",
      "Water usage monitoring and reporting",
      "Commercial-grade components and controllers",
      "Ongoing maintenance and service contracts"
    ],
    content: [
      {
        heading: "Commercial-Grade Irrigation Solutions",
        text: "Commercial properties have unique irrigation needs that require specialized expertise. Our team designs robust irrigation systems that can handle the demands of large landscapes while providing efficient water distribution and ease of maintenance. We use commercial-grade components designed for durability and long-term performance."
      },
      {
        heading: "Water Management for Commercial Properties",
        text: "Water conservation is particularly important for commercial properties with extensive landscaping. We implement advanced technologies like flow monitoring, master valve systems, high-efficiency nozzles, and smart controllers to minimize water waste while maintaining landscape quality. Our systems can often reduce water bills by 20-40%."
      },
      {
        heading: "Specialized Applications",
        text: "Whether you need irrigation for sports fields, municipal parks, HOA common areas, or business campuses, we have the expertise to design and install systems optimized for these specialized applications. We understand the unique requirements of different commercial landscapes and create solutions accordingly."
      },
      {
        heading: "Service Contracts & Support",
        text: "We offer comprehensive service contracts for commercial clients, providing regular maintenance, prompt repairs, and seasonal adjustments to keep your irrigation system functioning optimally. Our team can work directly with property managers, HOA boards, or facility maintenance staff to ensure seamless service."
      }
    ],
    faqs: [
      {
        question: "How can commercial irrigation save our business money?",
        answer: "A professionally designed commercial irrigation system can significantly reduce water consumption, lower water bills, decrease landscape replacement costs, and minimize liability from issues like overspray on walkways. The return on investment typically occurs within 2-5 years, after which the savings continue for the life of the system."
      },
      {
        question: "Do you work with property management companies?",
        answer: "Yes, we frequently partner with property management companies to provide irrigation services for their portfolio properties. We can establish master service agreements, standardized pricing, and coordinated maintenance schedules across multiple properties."
      },
      {
        question: "Can you retrofit our existing commercial irrigation system?",
        answer: "Absolutely. We specialize in upgrading existing commercial systems to improve efficiency and performance. Common retrofits include adding smart controllers, installing high-efficiency nozzles, implementing drip irrigation in appropriate areas, and adding flow monitoring capabilities."
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const serviceInfo = serviceId && serviceData[serviceId as keyof typeof serviceData];
  
  useEffect(() => {
    if (serviceInfo) {
      document.title = `${serviceInfo.title} | Texas Best Sprinklers Fort Worth`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", serviceInfo.metaDescription);
      }
    }
  }, [serviceInfo]);

  if (!serviceInfo) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-20">
          <div className="container-custom">
            <h1 className="text-3xl font-bold text-center">Service not found</h1>
            <p className="text-center mt-4">Sorry, the service you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center bg-irrigation-green bg-opacity-20 px-4 py-2 rounded-full mb-6">
                {serviceInfo.icon}
                <span className="ml-2 text-irrigation-green font-medium">Professional Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-irrigation-blue">
                {serviceInfo.title}
              </h1>
              <p className="text-xl text-gray-700">
                {serviceInfo.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="rounded-lg overflow-hidden shadow-xl mb-8">
                  <img 
                    src={serviceInfo.image} 
                    alt={serviceInfo.title} 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Features & Benefits</h3>
                  <ul className="space-y-3">
                    {serviceInfo.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-irrigation-green mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                {serviceInfo.content.map((content, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-bold mb-4 text-irrigation-blue">{content.heading}</h2>
                    <p className="text-gray-700">{content.text}</p>
                  </div>
                ))}
                
                <div className="bg-white rounded-lg shadow-md p-8 mt-8">
                  <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Why Choose Texas Best Sprinklers</h3>
                  <p className="text-gray-700 mb-4">
                    With years of experience serving the Fort Worth area, our team combines technical expertise with exceptional customer service to deliver results that exceed expectations.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Licensed and insured professionals",
                      "Extensive industry experience",
                      "Quality workmanship guarantee",
                      "Transparent, competitive pricing",
                      "Responsive customer service"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-irrigation-green mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-irrigation-blue text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {serviceInfo.faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-irrigation-blue">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA 
          title={`Ready for Professional ${serviceInfo.title}?`}
          subtitle="Contact us today for a free consultation and quote tailored to your specific needs."
          buttonText="Get a Free Quote"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
