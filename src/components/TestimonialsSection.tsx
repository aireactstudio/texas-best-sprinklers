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
  const carouselRef = useRef<HTMLDivElement>(null);

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
  // For location pages, use a more relaxed filtering approach
  // 1. If there's a direct city match in location field, prioritize those
  // 2. Otherwise, also include reviews with relevant keywords in content
  // 3. If still no matches or too few matches, include more general reviews
  
  let filteredTestimonials = testimonials;
  
  if (cityFilter) {
    // First, try to find direct matches in location field
    const directLocationMatches = testimonials.filter(testimonial => 
      testimonial.location.toLowerCase().includes(cityFilter.toLowerCase())
    );
    
    // If we have enough direct matches, use those
    if (directLocationMatches.length >= 3) {
      filteredTestimonials = directLocationMatches;
    } else {
      // Otherwise, also include reviews mentioning the city in content
      const cityKeywordMatches = testimonials.filter(testimonial => 
        testimonial.content.toLowerCase().includes(cityFilter.toLowerCase()) ||
        testimonial.location.toLowerCase().includes(cityFilter.toLowerCase())
      );
      
      // If we have enough matches with either approach, use those
      if (cityKeywordMatches.length >= 3) {
        filteredTestimonials = cityKeywordMatches;
      }
      // Otherwise we'll fall back to all testimonials
    }
  }
  
  // If we want to limit the max number of reviews to display
  const displayTestimonials = maxDisplayCount ? filteredTestimonials.slice(0, maxDisplayCount) : filteredTestimonials;

  // Use all filtered testimonials
  const currentTestimonials = displayTestimonials;

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
    <section className="py-12 md:py-16 bg-emerald-50">
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
        
        {/* Testimonials Grid */}
        <div 
          ref={carouselRef} 
          className="relative max-w-7xl mx-auto"
        >
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {currentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex">
                <div className="bg-white rounded-lg border border-gray-200 h-full p-4 flex flex-col w-full">
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
                            src={`/api/image-proxy?url=${encodeURIComponent(testimonial.photo)}&id=${testimonial.id}`}
                            alt={testimonial.name} 
                            className="h-8 w-8 rounded-full object-cover mr-2 border border-gray-200"
                            onError={(e) => {
                              // Hide the image and show fallback on error
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) {
                                fallback.style.display = 'flex';
                              }
                            }}
                            onLoad={(e) => {
                              // Show the image and hide fallback on successful load
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) {
                                fallback.style.display = 'none';
                              }
                            }}
                          />
                        ) : null}
                        <div 
                          className={`h-8 w-8 rounded-full bg-irrigation-green text-white flex items-center justify-center font-bold text-xs mr-2 ${testimonial.photo ? 'hidden' : 'flex'}`}
                          style={{ display: testimonial.photo ? 'none' : 'flex' }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
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
