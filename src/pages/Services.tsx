
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';
import { Droplet, CloudRain, Settings, TreeDeciduous, CloudSun } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-8">
        <div className="h-16 w-16 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mb-6 text-irrigation-green">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-irrigation-blue">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          to={`/services/${id}`} 
          className="text-irrigation-green font-medium hover:text-irrigation-darkGreen flex items-center"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  // Add SEO metadata
  useEffect(() => {
    document.title = "Expert Irrigation, Drainage & Lighting Services | Texas Best Sprinklers";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional irrigation, drainage and outdoor lighting services in Fort Worth, TX. Our expert team provides high-quality installation, maintenance and repair services for residential and commercial properties.");
    }
  }, []);

  const services = [
    {
      id: "sprinkler-installation",
      title: "Sprinkler System Installation",
      description: "Custom-designed irrigation systems for residential and commercial properties that ensure even water distribution and efficient coverage for your landscape.",
      icon: <Droplet size={32} />
    },
    {
      id: "drainage-solutions",
      title: "Drainage Solutions",
      description: "Prevent water damage and erosion with our professional drainage systems designed to protect your property and landscape investments.",
      icon: <CloudRain size={32} />
    },
    {
      id: "outdoor-lighting",
      title: "Outdoor Lighting",
      description: "Enhance the beauty and security of your property with our custom outdoor lighting solutions for pathways, gardens, and architectural features.",
      icon: <CloudSun size={32} />
    },
    {
      id: "sprinkler-repair",
      title: "Sprinkler Repair & Maintenance",
      description: "Comprehensive repair and maintenance services to keep your irrigation system running efficiently throughout the year.",
      icon: <Settings size={32} />
    },
    {
      id: "lawn-care",
      title: "Lawn & Landscape Care",
      description: "Professional lawn care services including mowing, fertilization, weed control, and seasonal clean-up to keep your yard looking its best.",
      icon: <TreeDeciduous size={32} />
    },
    {
      id: "commercial-irrigation",
      title: "Commercial Irrigation Services",
      description: "Specialized irrigation solutions for commercial properties, including businesses, HOAs, apartment complexes, and municipal spaces.",
      icon: <Droplet size={32} />
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-irrigation-blue">
                Our Irrigation & Landscaping Services
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Professional solutions for all your irrigation, drainage, and outdoor lighting needs in Fort Worth, Texas.
              </p>
              <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-6 py-3 rounded-full">
                Licensed & Insured Professionals
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
                What We Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">
                Comprehensive Irrigation & Landscape Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From sprinkler system installation to outdoor lighting, we provide all the services you need to create and maintain a beautiful, efficient landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon}
                  id={service.id}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
                  The Texas Best Sprinklers Advantage
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  When you choose Texas Best Sprinklers, Drainage and Lighting LLC, you're not just hiring a contractor – you're partnering with a team committed to excellence, quality, and customer satisfaction.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Licensed and insured professionals",
                    "Custom-designed solutions for your unique property",
                    "High-quality materials and components",
                    "Water-efficient irrigation systems",
                    "Comprehensive warranties on parts and labor",
                    "Ongoing maintenance programs",
                    "24/7 emergency service"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 mr-3 text-irrigation-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                  alt="Professional irrigation system maintaining a lush green landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">
                How We Work
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our streamlined process ensures quality results and complete customer satisfaction from start to finish.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "We begin with a thorough assessment of your property and discuss your specific needs and goals."
                },
                {
                  step: "02",
                  title: "Design & Planning",
                  description: "Our experts create a custom solution designed specifically for your landscape and requirements."
                },
                {
                  step: "03",
                  title: "Installation",
                  description: "Our professional team installs your system with minimal disruption to your property."
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  description: "We provide maintenance, service, and support to keep your systems working perfectly."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-12 w-12 bg-irrigation-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
                Common Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our irrigation, drainage, and lighting services.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  question: "How often should I have my sprinkler system serviced?",
                  answer: "We recommend a professional inspection and tune-up of your sprinkler system at least twice a year – once in spring before the growing season begins and once in fall to prepare for winter. Regular maintenance ensures efficient operation and can prevent costly repairs."
                },
                {
                  question: "Do you offer warranties on your work?",
                  answer: "Yes, we provide comprehensive warranties on both parts and labor for all of our installations. Our sprinkler systems typically come with a 2-year warranty on parts and labor, while drainage systems come with a 3-year warranty."
                },
                {
                  question: "How long does a typical sprinkler system installation take?",
                  answer: "The timeframe for installation depends on the size and complexity of your property. Most residential installations can be completed in 1-3 days, while larger commercial projects may take longer. We'll provide you with a specific timeline during your consultation."
                },
                {
                  question: "Can you work with my existing irrigation system?",
                  answer: "Absolutely! We specialize in upgrading and repairing existing systems. Our team can assess your current setup and make recommendations for improvements to increase efficiency and performance."
                },
                {
                  question: "What types of outdoor lighting do you install?",
                  answer: "We offer a wide variety of outdoor lighting options, including path lights, spotlights, well lights, deck lights, and architectural lights. We use energy-efficient LED fixtures that provide beautiful illumination while keeping energy costs low."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <h3 className="text-xl font-bold mb-3 text-irrigation-blue">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTA 
          title="Ready to Transform Your Landscape?"
          subtitle="Contact us today for a free consultation and estimate on your irrigation, drainage, or lighting project."
          buttonText="Get Your Free Quote"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
