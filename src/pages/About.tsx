import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const About: React.FC = () => {
  // Add SEO metadata
  React.useEffect(() => {
    document.title = "About PureFlow Irrigation - Expert Irrigation Contractors";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about PureFlow Irrigation's expertise, commitment to water conservation, and how our professional irrigation contractors can transform your landscape.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          title="About Texas Best Sprinklers" 
          subtitle="Your trusted partner for water-efficient irrigation solutions since 2008"
        />

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
                  A Commitment to Water Conservation
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  PureFlow Irrigation was founded on a simple principle: create irrigation systems that conserve our most precious resource—water—while maintaining beautiful, healthy landscapes.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  What began as a small family business has grown into the region's most trusted irrigation contractor, serving hundreds of residential and commercial clients with custom irrigation solutions.
                </p>
                <p className="text-lg text-gray-700">
                  Our team combines decades of expertise with a passion for sustainability, ensuring that every system we install balances water efficiency with optimal landscape health.
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl relative h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                  alt="Lush landscape with professional irrigation system" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-irrigation-blue opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
                Growing Together
              </h2>
              <p className="text-lg text-gray-700">
                From our humble beginnings to becoming the area's leading irrigation contractor, we've remained committed to quality and innovation.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-irrigation-green"></div>
              
              {/* Timeline Items */}
              {[
                {
                  year: "2008",
                  title: "Company Founded",
                  description: "PureFlow Irrigation was established with a focus on water conservation and quality service."
                },
                {
                  year: "2012",
                  title: "Expanded Services",
                  description: "Added commercial irrigation services and expanded our team of certified technicians."
                },
                {
                  year: "2015",
                  title: "Smart Irrigation Focus",
                  description: "Began specializing in smart irrigation controllers and weather-based systems."
                },
                {
                  year: "2018",
                  title: "Water Conservation Award",
                  description: "Received regional recognition for our water-saving irrigation designs."
                },
                {
                  year: "2022",
                  title: "Sustainable Practices",
                  description: "Implemented 100% sustainable practices in all our installation and maintenance services."
                }
              ].map((item, index) => (
                <div key={index} className={`relative z-10 mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-irrigation-blue text-white px-4 py-1 rounded-full mb-2 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="absolute left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-irrigation-green border-4 border-white z-20"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
                Meet Our Irrigation Experts
              </h2>
              <p className="text-lg text-gray-700">
                Our team combines decades of experience with a passion for sustainable landscaping and water conservation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  name: "Michael Wilson",
                  role: "Founder & Lead Designer",
                  description: "With over 20 years in irrigation, Michael leads our design team with a focus on efficiency and sustainability.",
                  initial: "M"
                },
                {
                  name: "Sarah Johnson",
                  role: "Technical Director",
                  description: "Sarah oversees all system installations, ensuring each project meets our high standards of quality and performance.",
                  initial: "S"
                },
                {
                  name: "Robert Garcia",
                  role: "Water Conservation Specialist",
                  description: "Robert's expertise in water management helps clients maximize water savings while maintaining lush landscapes.",
                  initial: "R"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md text-center">
                  <div className="w-24 h-24 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                    {member.initial}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-irrigation-green font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
                  Our Certifications
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-irrigation-blue">
                  Industry-Leading Expertise
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our team holds certifications from the top organizations in irrigation and water conservation, ensuring we deliver the highest quality service to every client.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Irrigation Association Certified Irrigation Contractors",
                    "EPA WaterSense Partners",
                    "Smart Water Application Technologies (SWAT) Certified",
                    "State Licensed Irrigation Contractors",
                    "Rain Bird Select Professional Contractors"
                  ].map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 mr-3 text-irrigation-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-40">
                    <div className="text-center">
                      <div className="h-12 w-12 mx-auto mb-3 text-irrigation-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <p className="font-medium">Certification {i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA */}
        <CTA 
          title="Ready to Work With Our Expert Team?"
          subtitle="Contact us today to schedule a consultation and discover how we can transform your landscape with professional irrigation."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
