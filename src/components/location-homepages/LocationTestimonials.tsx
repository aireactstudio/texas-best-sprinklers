'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

interface LocationTestimonialsProps {
  locationName: string;
}

export default function LocationTestimonials({ locationName }: LocationTestimonialsProps) {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: locationName,
      rating: 5,
      text: `Texas Best Sprinklers transformed our yard! Their team was professional, punctual, and the irrigation system they installed has kept our lawn green all summer. Highly recommend them to anyone in ${locationName}.`,
      service: 'Sprinkler Installation'
    },
    {
      name: 'Mike Rodriguez',
      location: locationName,
      rating: 5,
      text: `Had an emergency sprinkler break on a weekend and they came out the same day! Quick, efficient, and reasonably priced. They really know the ${locationName} area and what works best here.`,
      service: 'Emergency Repair'
    },
    {
      name: 'Lisa Chen',
      location: locationName,
      rating: 5,
      text: `We've been using them for maintenance for 3 years now. They always show up on time, do great work, and our water bill has actually gone down since they optimized our system. Great service in ${locationName}!`,
      service: 'System Maintenance'
    },
    {
      name: 'David Thompson',
      location: locationName,
      rating: 5,
      text: `The landscape lighting they installed is absolutely beautiful! It's added so much curb appeal to our home. Their knowledge of ${locationName} lighting regulations and HOA requirements was invaluable.`,
      service: 'Outdoor Lighting'
    },
    {
      name: 'Jennifer Martinez',
      location: locationName,
      rating: 5,
      text: `After years of drainage problems, Texas Best Sprinklers finally solved our issues. No more standing water after storms! They really understand the soil conditions here in ${locationName}.`,
      service: 'Drainage Solutions'
    },
    {
      name: 'Robert Wilson',
      location: locationName,
      rating: 5,
      text: `From estimate to completion, everything was smooth and professional. The team explained everything clearly and cleaned up perfectly. Best irrigation company in ${locationName} hands down!`,
      service: 'Full System Install'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What {locationName} Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what your neighbors in {locationName} 
            have to say about our irrigation and lighting services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-sm text-green-600 font-medium mt-1">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
              <div className="text-sm text-gray-500">in {locationName}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="text-sm text-gray-500">Google Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
              <div className="text-sm text-gray-500">in Texas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
              <div className="text-sm text-gray-500">Guaranteed</div>
            </div>
          </div>
        </div>

        {/* Local Recognition */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {locationName}'s Most Trusted Irrigation Experts
            </h3>
            <p className="text-green-100 mb-6">
              Serving {locationName} with professional irrigation, lighting, and drainage solutions since 2009.
              Licensed, insured, and committed to your satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Licensed & Insured</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">BBB Accredited</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Local Family Business</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
