'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTA from '@/components/CTA';
import { Droplet, CloudRain, CloudSun } from 'lucide-react';

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
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-irrigation-green bg-opacity-20 flex items-center justify-center mr-3 text-irrigation-green">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-irrigation-blue">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <div className="mb-5">
          <h4 className="font-semibold text-irrigation-blue mb-2">Results:</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-irrigation-green mr-2">✓</span>
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title="Featured Irrigation Projects" 
        subtitle="Explore our portfolio of successful installations and transformations"
      />
      
      {/* Projects Overview */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">Our Recent Projects</h2>
            <p className="text-lg text-gray-700 mx-auto max-w-4xl">
              Browse through our recently completed irrigation, drainage, and outdoor lighting projects to see how we transform properties throughout Fort Worth and Weatherford.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Residential Irrigation Overhaul"
              category="Sprinkler System"
              description="Complete redesign and installation of a water-efficient sprinkler system for a 1-acre property in Westover Hills, Fort Worth."
              image="/assets/images/project-1.jpg"
              results={[
                "Reduced water usage by 35%",
                "Improved coverage to eliminate dry spots",
                "Added smart controller with weather adaptation",
                "Zoned system for different plant needs"
              ]}
              icon={<Droplet size={24} />}
            />
            
            <ProjectCard 
              title="Commercial Property Drainage"
              category="Drainage Solution"
              description="Installation of a comprehensive drainage system for a retail center in Weatherford to prevent water accumulation and parking lot flooding."
              image="/assets/images/project-2.jpg"
              results={[
                "Eliminated standing water in parking areas",
                "Prevented foundation issues",
                "Improved customer accessibility during rain",
                "Low-maintenance, self-cleaning system"
              ]}
              icon={<CloudRain size={24} />}
            />
            
            <ProjectCard 
              title="Smart Irrigation Conversion"
              category="Smart Technology"
              description="Upgrade of an existing irrigation system to incorporate smart controllers and high-efficiency components for a large residence in Tanglewood."
              image="/assets/images/project-3.jpg"
              results={[
                "Water usage reduced by 40%",
                "Smartphone control added",
                "Automatic weather adjustments",
                "Integration with rain sensors"
              ]}
              icon={<CloudSun size={24} />}
            />
            
            <ProjectCard 
              title="New Construction Irrigation"
              category="Sprinkler System"
              description="Design and installation of a complete irrigation system for a newly constructed home on a half-acre lot in Aledo."
              image="/assets/images/project-4.jpg"
              results={[
                "Full coverage with minimal water waste",
                "Smart controller installation",
                "Drip zones for garden beds",
                "Future-ready system with expansion capability"
              ]}
              icon={<Droplet size={24} />}
            />
            
            <ProjectCard 
              title="HOA Common Area Upgrade"
              category="Commercial"
              description="Renovation of irrigation systems for all common areas in a Fort Worth homeowners association, covering multiple acres of landscape."
              image="/assets/images/project-5.jpg"
              results={[
                "Reduced monthly water costs by 25%",
                "Enhanced landscape appearance",
                "Added central control system",
                "Minimized maintenance requirements"
              ]}
              icon={<Droplet size={24} />}
            />
            
            <ProjectCard 
              title="French Drain Installation"
              category="Drainage Solution"
              description="Installation of an extensive French drain system for a sloped property in Weatherford experiencing severe runoff and erosion issues."
              image="/assets/images/project-6.jpg"
              results={[
                "Eliminated landscape erosion",
                "Protected home foundation",
                "Preserved landscape plantings",
                "Invisible solution that maintained aesthetics"
              ]}
              icon={<CloudRain size={24} />}
            />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              These are just a few examples of our recent projects. We've completed hundreds of irrigation and drainage installations throughout Fort Worth, Weatherford, and surrounding areas.
            </p>
          </div>
        </div>
      </section>
      
      {/* Project Process */}
      <section className="py-16 md:py-24 bg-irrigation-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">Our Project Process</h2>
            <p className="text-lg text-gray-700 mx-auto max-w-4xl">
              Every Texas Best Sprinklers project follows our proven process to ensure successful outcomes and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue mt-4">Consultation</h3>
              <p className="text-gray-700">
                We begin with a thorough site evaluation and consultation to understand your needs, challenges, and goals for your property.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue mt-4">Design & Planning</h3>
              <p className="text-gray-700">
                Our design team creates a customized solution that optimizes water usage, coverage, and addresses any specific landscape requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue mt-4">Professional Installation</h3>
              <p className="text-gray-700">
                Our experienced technicians install your system with minimal disruption to your property, ensuring all components are properly placed.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-irrigation-blue mt-4">Follow-up & Support</h3>
              <p className="text-gray-700">
                After installation, we provide system training, fine-tuning, and ongoing support to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTA 
        title="Ready to Start Your Project?"
        subtitle="Contact us today to schedule a consultation and get a free estimate for your irrigation needs."
        buttonText="Get Started"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
