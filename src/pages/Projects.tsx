import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/HeroSection';
import { Droplet, CloudRain, CloudSun } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  results: string[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, description, image, results, icon }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-irrigation-blue bg-opacity-30"></div>
        <div className="absolute top-4 left-4 bg-irrigation-green text-white rounded-full px-4 py-1 text-sm font-medium">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="h-10 w-10 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center text-irrigation-green mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-irrigation-blue">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <p className="font-semibold text-irrigation-blue mb-2">Results:</p>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg className="h-4 w-4 mr-2 text-irrigation-green" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Add SEO metadata
  useEffect(() => {
    document.title = "Our Projects | Texas Best Sprinklers, Drainage and Lighting LLC";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "View our portfolio of irrigation, drainage, and outdoor lighting projects in Fort Worth, TX. See how we've helped homeowners and businesses transform their landscapes.");
    }
  }, []);

  const projects = [
    {
      title: "Modern Home Irrigation System",
      category: "Sprinkler Installation",
      description: "Complete sprinkler system installation for a 2-acre residential property in Fort Worth, featuring multiple zones and smart controller integration.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      results: [
        "Reduced water usage by 35%",
        "Improved lawn health and appearance",
        "Automated watering schedule based on weather conditions",
        "Eliminated dry spots and overwatering issues"
      ],
      icon: <Droplet size={24} />
    },
    {
      title: "Extensive Drainage Solution",
      category: "Drainage System",
      description: "Comprehensive drainage solution for a residential property experiencing severe water pooling issues after rainfall.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      results: [
        "Eliminated standing water issues",
        "Protected home foundation from water damage",
        "Reduced soil erosion in landscaped areas",
        "Improved overall yard usability"
      ],
      icon: <CloudRain size={24} />
    },
    {
      title: "Commercial Property Lighting",
      category: "Outdoor Lighting",
      description: "Custom outdoor lighting installation for a commercial office building, enhancing security and curb appeal.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      results: [
        "Improved property security and safety",
        "Enhanced architectural features",
        "Energy-efficient LED system reduced electricity costs",
        "Created welcoming atmosphere for clients and employees"
      ],
      icon: <CloudSun size={24} />
    },
    {
      title: "HOA Community Irrigation",
      category: "Sprinkler Installation",
      description: "Large-scale irrigation system design and installation for a community's common areas and entrance features.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      results: [
        "Uniform coverage for all landscaped areas",
        "Reduced monthly water bills by 28%",
        "Simplified maintenance for HOA groundskeepers",
        "Improved community appearance and property values"
      ],
      icon: <Droplet size={24} />
    },
    {
      title: "Backyard Drainage Renovation",
      category: "Drainage System",
      description: "Complete backyard drainage renovation for a Fort Worth home with severe flooding issues during heavy rainfall.",
      image: "https://images.unsplash.com/photo-1509316973540-ff9c5deb0cd9",
      results: [
        "Eliminated backyard flooding during storms",
        "Properly channeled water away from structures",
        "Created dry, usable outdoor space year-round",
        "Prevented landscape erosion and plant damage"
      ],
      icon: <CloudRain size={24} />
    },
    {
      title: "Restaurant Patio Lighting",
      category: "Outdoor Lighting",
      description: "Custom lighting design for a restaurant patio space to create ambiance and extend evening dining hours.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      results: [
        "Extended outdoor dining hours into evening",
        "Created inviting ambiance for customers",
        "Highlighted landscape and architectural features",
        "Increased evening revenue by 22%"
      ],
      icon: <CloudSun size={24} />
    },
  ];

  const categories = ["All", "Sprinkler Installation", "Drainage System", "Outdoor Lighting"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          title="Our Projects" 
          subtitle="Explore our portfolio of irrigation, drainage, and lighting projects throughout Fort Worth and surrounding areas."
        />

        {/* Projects Filter */}
        <section className="py-10">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 m-2 rounded-full transition-all ${
                    index === 0 
                      ? 'bg-irrigation-green text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.image}
                  results={project.results}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Results Overview */}
        <section className="py-16 bg-irrigation-blue text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                We're proud of the results we've delivered for our clients throughout Fort Worth and surrounding areas.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "150+", label: "Projects Completed" },
                { value: "38%", label: "Average Water Savings" },
                { value: "4.9", label: "Average Customer Rating" },
                { value: "97%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Project Process */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">
                How We Deliver Successful Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures every project is completed efficiently, on budget, and with exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Assessment",
                  description: "We begin with a thorough property assessment and consultation to understand your specific needs and challenges."
                },
                {
                  step: "02",
                  title: "Custom Design & Proposal",
                  description: "Our experts create a customized design and detailed proposal tailored to your property's requirements and your budget."
                },
                {
                  step: "03",
                  title: "Professional Installation",
                  description: "Our skilled technicians install your system with attention to detail, minimal disruption, and quality workmanship."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="h-12 w-12 bg-irrigation-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-irrigation-blue">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* CTA */}
        <CTA 
          title="Ready to Start Your Project?"
          subtitle="Contact us today for a free consultation and discover how we can transform your landscape with expert irrigation, drainage, and lighting solutions."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
