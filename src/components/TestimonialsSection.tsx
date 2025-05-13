'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  stars: number;
  content: string;
  time?: string;
  photo?: string;
}

interface ExpandedReviews {
  [key: string]: boolean;
}

interface BusinessInfo {
  name: string;
  rating: number;
  userRatingsTotal: number;
  googleUrl: string;
}

interface TestimonialsSectionProps {
  cityFilter?: string;
  maxDisplayCount?: number;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ cityFilter, maxDisplayCount = 10 }) => {
  const [expandedReviews, setExpandedReviews] = useState<ExpandedReviews>({});
  
  const toggleReviewExpansion = (id: string) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    // Fallback testimonials in case API fails
    {
      id: "1",
      name: "Michael Thompson",
      location: "Fort Worth",
      content: "Texas Best Sprinklers transformed our lawn with a state-of-the-art irrigation system. Our water bills have decreased by 30%, and our lawn has never looked better! Professional service from start to finish.",
      stars: 5,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      location: "Arlington",
      content: "As a property manager, I've worked with many irrigation companies. Texas Best Sprinklers is by far the most professional and reliable. Their smart controller installation has saved our complex thousands in water costs.",
      stars: 5,
    },
    {
      id: "3",
      name: "David Rodriguez",
      location: "Keller",
      content: "I partner with Texas Best Sprinklers on all my client projects. Their attention to detail and technical expertise ensures that my landscape designs always have the perfect irrigation solution to support healthy plant growth.",
      stars: 5,
    },
  ]);
  
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    name: 'Texas Best Sprinklers',
    rating: 5,
    userRatingsTotal: 100,
    googleUrl: 'https://g.page/r/CSwRGl0HZDGRChI/review'
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false); // Disabled autoplay by default
  const carouselRef = useRef<HTMLDivElement>(null);
  const reviewsPerPage = 3; // Number of reviews to show at once

  // Fetch reviews from our API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/reviews');
        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          setTestimonials(data.reviews);
          if (data.businessInfo) {
            setBusinessInfo(data.businessInfo);
          }
        } else if (data.error) {
          console.error('Error fetching reviews:', data.error);
          setError(data.error);
        }
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Filter testimonials by location if cityFilter is provided
  const filteredTestimonials = cityFilter 
    ? testimonials.filter(testimonial => 
        testimonial.location.toLowerCase().includes(cityFilter.toLowerCase())
      )
    : testimonials;
    
  // If no testimonials match the filter, use all testimonials
  const displayTestimonials = filteredTestimonials.length > 0 ? filteredTestimonials : testimonials;

  // Calculate total number of pages for carousel
  const totalPages = Math.ceil(displayTestimonials.length / reviewsPerPage);
  
  // Handle next/previous navigation
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };
  
  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };
  
  // Handle dot navigation
  const goToPage = (pageIndex: number) => {
    setActiveIndex(pageIndex);
  };
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [autoplay, displayTestimonials.length]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  // Get current visible testimonials
  const currentTestimonials = displayTestimonials.slice(
    activeIndex * reviewsPerPage,
    (activeIndex * reviewsPerPage) + reviewsPerPage
  );

  // Generate star rating display
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
      ))}
    </div>
  );

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Header with business stats */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
          <div className="flex items-center justify-center">
            <div className="bg-gray-100 rounded-full px-3 py-1 inline-flex items-center">
              <span className="text-lg font-bold text-gray-800 mr-1">{businessInfo.rating.toFixed(1)}</span>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill={i < Math.round(businessInfo.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm ml-1">({businessInfo.userRatingsTotal} reviews)</span>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-6">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-irrigation-blue"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded p-2 mb-4 max-w-md mx-auto text-center">
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-xs text-red-600">{error} - Showing sample testimonials.</p>
            </div>
          </div>
        ) : null}
        
        {/* Testimonials Carousel */}
        <div 
          ref={carouselRef} 
          className="relative max-w-5xl mx-auto" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {/* Current testimonials */}
              <div className="w-full flex flex-wrap">
                {currentTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full md:w-1/3 p-2">
                    <div className="bg-white rounded-lg border border-gray-200 h-full p-4 flex flex-col">
                      {/* Google icon */}
                      <div className="flex justify-between items-center mb-3">
                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
                        </svg>
                        
                        {/* Rating stars */}
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3.5 h-3.5 text-yellow-500" fill={i < testimonial.stars ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      {/* User info */}
                      <div className="flex items-center mb-3">
                        {testimonial.photo ? (
                          <img 
                            src={testimonial.photo} 
                            alt={testimonial.name} 
                            className="h-8 w-8 rounded-full object-cover mr-2 border border-gray-200"
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-irrigation-green text-white flex items-center justify-center font-bold text-xs mr-2">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <h3 className="font-medium text-gray-800 text-sm">{testimonial.name}</h3>
                          <div className="flex items-center">
                            <p className="text-gray-500 text-xs">{testimonial.location}</p>
                            {testimonial.time && (
                              <p className="text-gray-400 text-xs ml-1">• {testimonial.time}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow flex flex-col">
                        <p className={`text-gray-700 text-sm ${expandedReviews[testimonial.id] ? '' : 'line-clamp-3'}`}>{testimonial.content}</p>
                        {testimonial.content.length > 150 && (
                          <button 
                            onClick={() => toggleReviewExpansion(testimonial.id)}
                            className="text-blue-600 text-xs mt-2 self-start hover:underline focus:outline-none"
                          >
                            {expandedReviews[testimonial.id] ? 'Read Less' : 'Read More'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md text-gray-600 hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md text-gray-600 hover:bg-gray-100 transition-colors z-10"
            aria-label="Next review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-1.5">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        
        {/* View All Reviews Button */}
        <div className="mt-6 text-center">
          <a 
            href={businessInfo.googleUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white font-medium py-2 px-5 rounded-full text-sm shadow-md hover:bg-blue-700 transition-colors"
          >
            View All Reviews on Google
            <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
