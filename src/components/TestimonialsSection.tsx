
'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  stars: number;
}

interface TestimonialsSectionProps {
  cityFilter?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ cityFilter }) => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Thompson",
      role: "Homeowner",
      location: "Springfield",
      content: "Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased by 30%, and our lawn has never looked better! Professional service from start to finish.",
      stars: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Property Manager",
      location: "Riverside Estates",
      content: "As a property manager, I've worked with many irrigation companies. Texas Best Sprinklers is by far the most professional and reliable. Their smart controller installation has saved our complex thousands in water costs.",
      stars: 5,
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "Landscape Architect",
      location: "Green Horizons",
      content: "I partner with Texas Best Sprinklers on all my client projects. Their attention to detail and technical expertise ensures that my landscape designs always have the perfect irrigation solution to support healthy plant growth.",
      stars: 5,
    },
  ];

  // Filter testimonials by location if cityFilter is provided
  const filteredTestimonials = cityFilter 
    ? testimonials.filter(testimonial => 
        testimonial.location.toLowerCase().includes(cityFilter.toLowerCase())
      )
    : testimonials;
    
  // If no testimonials match the filter, use all testimonials
  const displayTestimonials = filteredTestimonials.length > 0 ? filteredTestimonials : testimonials;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === displayTestimonials.length - 1 ? 0 : current + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [displayTestimonials.length]);

  return (
    <section className="section bg-irrigation-blue relative overflow-hidden">
      {/* Water-like Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto">
            We're proud to have helped hundreds of property owners achieve beautiful, water-efficient landscapes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {displayTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`bg-white rounded-lg shadow-lg p-8 md:p-10 transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex mb-6 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill={i < testimonial.stars ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author info */}
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-irrigation-green text-white flex items-center justify-center font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-irrigation-blue">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}, {testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {displayTestimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                  index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-40'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
