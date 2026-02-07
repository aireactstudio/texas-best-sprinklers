'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Quote, Play, Pause, Gauge } from 'lucide-react';
import { Button } from "@/components/ui/button";

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

  // Animation state
  const speedOptions = [1, 2, 3, 4, 5];
  const [speedIndex, setSpeedIndex] = useState(0); // Start at 1x
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const lastTimestampRef = useRef<number>();
  const setWidthRef = useRef(0);

  const currentSpeed = speedOptions[speedIndex];
  const baseSpeed = 30; // Slightly slower base speed for text readability

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

  let filteredTestimonials = testimonials;
  
  if (cityFilter) {
    const directLocationMatches = testimonials.filter(testimonial => 
      testimonial.location.toLowerCase().includes(cityFilter.toLowerCase())
    );
    
    if (directLocationMatches.length >= 3) {
      filteredTestimonials = directLocationMatches;
    } else {
      const cityKeywordMatches = testimonials.filter(testimonial => 
        testimonial.content.toLowerCase().includes(cityFilter.toLowerCase()) ||
        testimonial.location.toLowerCase().includes(cityFilter.toLowerCase())
      );
      
      if (cityKeywordMatches.length >= 3) {
        filteredTestimonials = cityKeywordMatches;
      }
    }
  }
  
  const currentTestimonials = maxDisplayCount ? filteredTestimonials.slice(0, maxDisplayCount) : filteredTestimonials;

  // Setup Animation Loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container || loading || currentTestimonials.length === 0) return;

    // Wait for DOM to update with new items
    const timeoutId = setTimeout(() => {
      const computeSetWidth = () => {
        if (!container) return;
        const children = Array.from(container.children).slice(0, currentTestimonials.length) as HTMLElement[];
        // Calculate total width of one set of items including margins/gap
        // We use flex gap, so we need to account for it. 
        // The gap is set to 24px (gap-6).
        const gap = 24; 
        const total = children.reduce((acc, child) => acc + child.offsetWidth + gap, 0);
        setWidthRef.current = total;
      };

      computeSetWidth();
      window.addEventListener("resize", computeSetWidth);

      const animate = (timestamp: number) => {
        if (!lastTimestampRef.current) {
          lastTimestampRef.current = timestamp;
        }

        const deltaTime = (timestamp - (lastTimestampRef.current || timestamp)) / 1000; // seconds
        lastTimestampRef.current = timestamp;

        if (!isPaused && !isHovered) {
          scrollPositionRef.current += baseSpeed * currentSpeed * deltaTime;
          const totalWidth = setWidthRef.current;
          
          if (totalWidth > 0 && scrollPositionRef.current >= totalWidth) {
            scrollPositionRef.current -= totalWidth;
          }
          container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", () => {}); // cleanup listener
    };
  }, [currentSpeed, isPaused, isHovered, loading, currentTestimonials.length]);

  const cycleSpeed = () => setSpeedIndex((prev) => (prev + 1) % speedOptions.length);
  const togglePause = () => setIsPaused((prev) => !prev);

  // Create 3 sets for seamless scrolling
  const displayItems = [...currentTestimonials, ...currentTestimonials, ...currentTestimonials];

  return (
    <section className="py-16 bg-slate-100 overflow-hidden">
      <div className="container-fluid px-0">
        {/* Modern Header */}
        <div className="container mx-auto px-4 text-center mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Loved by Neighbors in {cityFilter || 'Your Area'}
          </h2>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <span className="text-2xl font-bold text-gray-900">{businessInfo.rating.toFixed(1)}</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 font-medium border-l border-gray-200 pl-2 ml-1">
                {businessInfo.userRatingsTotal}+ Google Reviews
              </span>
            </div>
            
            {/* Controls */}
            <div className="flex justify-center items-center gap-3 mt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={togglePause}
                aria-label={isPaused ? "Play carousel" : "Pause carousel"}
                className="rounded-full bg-white hover:bg-gray-50"
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                onClick={cycleSpeed}
                aria-label={`Change speed (current: ${currentSpeed}x)`}
                className="rounded-full min-w-[80px] gap-2 bg-white hover:bg-gray-50"
              >
                <Gauge className="h-4 w-4" />
                <span className="font-semibold">{currentSpeed}x</span>
              </Button>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-irrigation-blue"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto text-center" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        ) : (
          <div 
            className="relative w-full mt-8 mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient masks for smooth fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

            {/* JS Animated Carousel Track */}
            <div className="overflow-hidden">
              <div 
                ref={containerRef}
                className="flex gap-6 px-3 will-change-transform"
                style={{ width: 'max-content' }}
              >
                {displayItems.map((testimonial, index) => (
                  <ReviewCard 
                    key={`${testimonial.id}-${index}`} 
                    testimonial={testimonial} 
                    expanded={expandedReviews[testimonial.id]} 
                    onToggle={() => toggleReviewExpansion(testimonial.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center">
          <a 
            href={businessInfo.googleUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-gray-700 hover:text-irrigation-blue font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            <span>Read all {businessInfo.userRatingsTotal}+ reviews on Google</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Extracted Card Component for cleaner code
const ReviewCard = ({ testimonial, expanded, onToggle }: { testimonial: Testimonial, expanded: boolean, onToggle: () => void }) => (
  <div 
    className="flex flex-col bg-slate-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 w-[300px] md:w-[400px] h-[320px] border border-gray-200 relative overflow-hidden flex-shrink-0"
  >
    {/* Decorative Quote Icon */}
    <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-50 transition-colors duration-300 rotate-180" />
    
    {/* Rating */}
    <div className="flex mb-3 text-yellow-400 relative z-10">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>

    {/* Content */}
    <div className="flex-grow mb-4 relative z-10 overflow-hidden">
      <p className={`text-gray-600 leading-relaxed text-sm md:text-base ${expanded ? 'overflow-y-auto max-h-[160px] pr-1 custom-scrollbar' : 'line-clamp-5'}`}>
        "{testimonial.content}"
      </p>
      {testimonial.content.length > 150 && (
        <button 
          onClick={(e) => {
             e.stopPropagation();
             onToggle();
          }}
          className="text-irrigation-blue text-xs font-semibold mt-1 hover:underline focus:outline-none flex items-center gap-1"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>

    {/* Footer: User Info & Google Icon */}
    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto relative z-10">
      <div className="flex items-center gap-3">
        {testimonial.photo ? (
          <img 
            src={testimonial.photo}
            alt={testimonial.name} 
            className="h-8 w-8 rounded-full object-cover border-2 border-white shadow-sm"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-irrigation-blue to-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div className="overflow-hidden">
          <h3 className="font-bold text-gray-900 text-sm truncate">{testimonial.name}</h3>
          <div className="flex items-center text-xs text-gray-500">
            <span className="font-medium truncate">{testimonial.location}</span>
          </div>
        </div>
      </div>
      
      {/* Google Icon */}
      <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 flex-shrink-0">
        <svg className="w-3.5 h-3.5" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          <path fill="none" d="M0 0h48v48H0z"/>
        </svg>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
