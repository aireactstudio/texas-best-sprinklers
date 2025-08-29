'use client';

import { useEffect, useState } from 'react';
import { curatedReviews } from '@/data/curated-reviews';
import { blogPosts } from '@/data/blogPosts';

// Define the steps for each service type HowTo schema
const serviceHowToSteps = {
  irrigation: [
    {
      number: "01",
      title: "Schedule a Consultation",
      description: "Contact us to schedule a free on-site irrigation consultation where we'll assess your landscape needs and water usage patterns."
    },
    {
      number: "02",
      title: "Receive a Custom Design",
      description: "Our irrigation experts will create a tailored sprinkler system design that maximizes efficiency for your specific landscape."
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our certified technicians will install your irrigation system with minimal disruption to your landscape."
    },
    {
      number: "04",
      title: "System Walkthrough",
      description: "We'll show you how to operate your new irrigation system and program it for optimal water conservation."
    }
  ],
  drainage: [
    {
      number: "01",
      title: "Drainage Assessment",
      description: "We'll conduct a thorough assessment of your property to identify water flow patterns and problem areas."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our team will design a custom drainage solution to address your specific water management challenges."
    },
    {
      number: "03",
      title: "Expert Installation",
      description: "Our specialists will install your drainage system, ensuring proper water diversion and landscape protection."
    },
    {
      number: "04",
      title: "Final Inspection",
      description: "We'll test your drainage system to ensure it effectively manages water flow and protects your property."
    }
  ],
  lighting: [
    {
      number: "01",
      title: "Lighting Consultation",
      description: "Meet with our lighting designers to discuss your outdoor lighting goals and preferences."
    },
    {
      number: "02",
      title: "Lighting Design",
      description: "We'll create a custom lighting plan that enhances your property's beauty, security, and functionality."
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our technicians will carefully install your lighting system with attention to detail and minimal disruption."
    },
    {
      number: "04",
      title: "Evening Demonstration",
      description: "We'll return in the evening to make final adjustments and demonstrate your new lighting system."
    }
  ],
  maintenance: [
    {
      number: "01",
      title: "System Evaluation",
      description: "We'll conduct a comprehensive evaluation of your existing irrigation, drainage, or lighting system."
    },
    {
      number: "02",
      title: "Maintenance Plan",
      description: "Based on our evaluation, we'll create a customized maintenance plan to keep your systems in optimal condition."
    },
    {
      number: "03",
      title: "Regular Service",
      description: "Our technicians will perform scheduled maintenance visits to inspect, clean, and adjust your systems."
    },
    {
      number: "04",
      title: "Seasonal Adjustments",
      description: "We'll make seasonal adjustments to ensure your systems perform optimally throughout the year."
    }
  ]
};

const serviceInfo = {
  irrigation: {
    name: "How to Get Started with Irrigation Systems",
    description: "Follow these steps to install a professional irrigation system for your property.",
    estimatedCost: "Starting at $2,500"
  },
  drainage: {
    name: "How to Get Started with Drainage Solutions",
    description: "Follow these steps to resolve water drainage issues on your property.",
    estimatedCost: "Starting at $1,800"
  },
  lighting: {
    name: "How to Get Started with Outdoor Lighting",
    description: "Follow these steps to enhance your property with professional outdoor lighting.",
    estimatedCost: "Starting at $1,500"
  },
  maintenance: {
    name: "How to Get Started with System Maintenance",
    description: "Follow these steps to maintain your irrigation, drainage, or lighting systems.",
    estimatedCost: "Starting at $95 per visit"
  }
};

export default function StructuredDataPreview() {
  const [apiReviews, setApiReviews] = useState([]);
  const [businessInfo, setBusinessInfo] = useState({
    name: 'Texas Best Sprinklers',
    rating: 5,
    userRatingsTotal: 100,
    googleUrl: 'https://g.page/r/CSwRGl0HZDGRChI/review'
  });
  const [loading, setLoading] = useState(true);

  // Fetch reviews for structured data
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/reviews');
        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          setApiReviews(data.reviews);
          if (data.businessInfo) {
            setBusinessInfo(data.businessInfo);
          }
        }
      } catch (err) {
        console.error('Failed to fetch reviews for structured data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Get curated reviews - these are our verified, high-quality reviews
  const curatedReviewsData = curatedReviews;
  
  // Process API reviews - only include unique ones
  const seenNames = new Set();
  const uniqueReviews = [];
  
  // First add all curated reviews and track their names
  for (const review of curatedReviewsData) {
    seenNames.add(review.name.toLowerCase());
    uniqueReviews.push({
      id: review.id,
      name: review.name,
      role: review.role || 'Customer',
      location: review.location,
      content: review.content,
      stars: review.stars,
      time: review.time,
      source: 'Manual' as const
    });
  }
  
  // Then add unique API reviews (ones with names we haven't seen yet)
  for (const review of apiReviews) {
    if (!seenNames.has(review.name.toLowerCase())) {
      seenNames.add(review.name.toLowerCase());
      uniqueReviews.push({
        id: `google-${review.id}`,
        name: review.name,
        role: review.role || 'Customer',
        location: review.location,
        content: review.content,
        stars: review.stars,
        time: review.time,
        photo: review.photo,
        source: 'Google' as const
      });
    }
  }
  
  // Use only the unique reviews
  const allReviews = uniqueReviews;

  // Calculate average rating
  const totalStars = allReviews.reduce((sum, review) => sum + review.stars, 0);
  const averageRating = (totalStars / allReviews.length).toFixed(1);
  const totalReviews = allReviews.length;

  // Create the structured data object
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "description": "Texas Best Sprinklers provides professional irrigation, drainage, and lighting services for residential and commercial properties in the Dallas-Fort Worth area.",
    "url": "https://sprinkleranddrains.com",
    "telephone": "+1-817-304-7896",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10011 Harmon Rd suite 133",
      "addressLocality": "Fort Worth",
      "addressRegion": "TX",
      "postalCode": "76177",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7555,
      "longitude": -97.2958
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/TexasBest1/",
      "https://www.instagram.com/texasbestoutdoorlighting/",
      "http://x.com/sprinklerdrains",
      "https://www.thumbtack.com/tx/fort-worth/sprinkler-systems-repair/texas-best-sprinklers-drainage-lighting-llc/service/260748333748118695"
    ],
    "priceRange": "$$",
    "image": "https://sprinkleranddrains.com/images/logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": allReviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.time ? convertRelativeTimeToDate(review.time) : "2024-01-01",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.stars,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.content
    }))
  };

  // Create Website structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Texas Best Sprinklers",
    "url": "https://sprinkleranddrains.com",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://sprinkleranddrains.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "CommunicateAction",
        "actionStatus": "PotentialActionStatus",
        "communicateActionType": "RequestQuote",
        "name": "Request a Quote",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://sprinkleranddrains.com/contact",
          "inLanguage": "en-US"
        }
      }
    ]
  };

  // Create BreadcrumbList structured data for homepage
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sprinkleranddrains.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sprinkleranddrains.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://sprinkleranddrains.com/contact"
      }
    ]
  };
  
  // Create Service+Location BreadcrumbList example
  const serviceLocationBreadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sprinkleranddrains.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sprinkleranddrains.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Drainage Solutions",
        "item": "https://sprinkleranddrains.com/services/drainage-solutions"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Drainage Solutions in Fort Worth",
        "item": "https://sprinkleranddrains.com/services/drainage-solutions/fort-worth"
      }
    ]
  };

  // Create HowTo structured data for all services
  const howToDataCollection = Object.entries(serviceHowToSteps).map(([service, steps]) => {
    const serviceType = service as keyof typeof serviceInfo;
    
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": serviceInfo[serviceType].name,
      "description": serviceInfo[serviceType].description,
      "totalTime": "PT2H", // Estimated total time: 2 hours for consultation and planning
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": serviceInfo[serviceType].estimatedCost
      },
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Phone or email for initial contact"
        }
      ],
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Property information"
        },
        {
          "@type": "HowToSupply",
          "name": "Landscape details"
        }
      ],
      "step": steps.map((step, index) => ({
        "@type": "HowToStep",
        "url": `https://sprinkleranddrains.com/how-to-get-started#step-${service}-${index + 1}`,
        "name": step.title,
        "itemListElement": {
          "@type": "HowToDirection",
          "text": step.description
        },
        "position": index + 1
      }))
    };
  });
  
  // Use the irrigation HowTo data as the primary example
  const howToData = howToDataCollection[0];
  
  // Create Blog Article structured data for homepage
  const blogArticlesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogPosts.slice(0, 3).map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": new Date(post.date).toISOString(),
        "dateModified": new Date(post.date).toISOString(),
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Texas Best Sprinklers",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sprinkleranddrains.com/images/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://sprinkleranddrains.com/blog/${post.slug}`
        },
        "keywords": post.tags.join(", "),
        "url": `https://sprinkleranddrains.com/blog/${post.slug}`
      }
    }))
  };
  
  // Create Organization structured data (parent of LocalBusiness)
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessInfo.name,
    "url": "https://sprinkleranddrains.com",
    "logo": "https://sprinkleranddrains.com/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/TexasBest1/",
      "https://www.instagram.com/texasbestoutdoorlighting/",
      "http://x.com/sprinklerdrains",
      "https://www.thumbtack.com/tx/fort-worth/sprinkler-systems-repair/texas-best-sprinklers-drainage-lighting-llc/service/260748333748118695"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-817-304-7896",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "en"
      }
    ]
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Structured Data Preview</h1>
      
      {loading ? (
        <p>Loading reviews data...</p>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Review Stats</h2>
            <ul className="list-disc pl-6">
              <li>Total Reviews: {totalReviews}</li>
              <li>Average Rating: {averageRating}/5</li>
              <li>API Reviews: {apiReviews.length}</li>
              <li>Curated Reviews: {curatedReviewsData.length}</li>
              <li>Combined Unique Reviews: {allReviews.length}</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">LocalBusiness Schema</h2>
            <p className="text-sm text-gray-600 mb-2">
              This schema contains your business information and reviews.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
              <pre>{JSON.stringify(structuredData, null, 2)}</pre>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">WebSite Schema</h2>
            <p className="text-sm text-gray-600 mb-2">
              This schema helps search engines understand your website functionality.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
              <pre>{JSON.stringify(websiteData, null, 2)}</pre>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">BreadcrumbList Schema (Homepage)</h2>
            <p className="text-sm text-gray-600 mb-2">
              Basic breadcrumb navigation for your homepage.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
              <pre>{JSON.stringify(breadcrumbData, null, 2)}</pre>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Service+Location BreadcrumbList Example</h2>
            <p className="text-sm text-gray-600 mb-2">
              This schema shows how breadcrumbs appear for each service+location page (150+ pages).
              Example: Drainage Solutions in Fort Worth
            </p>
            <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
              <pre>{JSON.stringify(serviceLocationBreadcrumbData, null, 2)}</pre>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Service-Specific HowTo Schemas</h2>
            <p className="text-sm text-gray-600 mb-2">
              These schemas represent the "How to Get Started" processes for each of your main services.
            </p>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">1. Irrigation Systems HowTo</h3>
              <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
                <pre>{JSON.stringify(howToDataCollection[0], null, 2)}</pre>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">2. Drainage Solutions HowTo</h3>
              <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
                <pre>{JSON.stringify(howToDataCollection[1], null, 2)}</pre>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">3. Outdoor Lighting HowTo</h3>
              <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
                <pre>{JSON.stringify(howToDataCollection[2], null, 2)}</pre>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">4. System Maintenance HowTo</h3>
              <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
                <pre>{JSON.stringify(howToDataCollection[3], null, 2)}</pre>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Blog Articles Schema (Homepage)</h2>
            <p className="text-sm text-gray-600 mb-2">
              This schema represents the 3 blog articles displayed on your homepage.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
              <pre>{JSON.stringify(blogArticlesData, null, 2)}</pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Organization Schema</h2>
            <p className="text-sm text-gray-600 mb-2">
              This schema provides high-level organization information.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[300px]">
              <pre>{JSON.stringify(organizationData, null, 2)}</pre>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Testing Instructions</h2>
            <ol className="list-decimal pl-6">
              <li className="mb-2">
                Copy the JSON-LD code above
              </li>
              <li className="mb-2">
                Visit <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google's Rich Results Test</a>
              </li>
              <li className="mb-2">
                Select "Code" tab and paste the JSON-LD
              </li>
              <li className="mb-2">
                Click "Test Code" to validate
              </li>
            </ol>
          </div>
        </>
      )}
    </div>
  );
}

// Helper function to convert relative time to ISO date
function convertRelativeTimeToDate(relativeTime: string): string {
  const now = new Date();
  
  if (relativeTime.includes('day')) {
    const days = parseInt(relativeTime);
    const date = new Date(now);
    date.setDate(now.getDate() - days);
    return date.toISOString().split('T')[0];
  } 
  else if (relativeTime.includes('week')) {
    const weeks = parseInt(relativeTime);
    const date = new Date(now);
    date.setDate(now.getDate() - (weeks * 7));
    return date.toISOString().split('T')[0];
  }
  else if (relativeTime.includes('month')) {
    const months = parseInt(relativeTime);
    const date = new Date(now);
    date.setMonth(now.getMonth() - months);
    return date.toISOString().split('T')[0];
  }
  else if (relativeTime.includes('year')) {
    const years = parseInt(relativeTime);
    const date = new Date(now);
    date.setFullYear(now.getFullYear() - years);
    return date.toISOString().split('T')[0];
  }
  
  // Default to 3 months ago if we can't parse
  const date = new Date(now);
  date.setMonth(now.getMonth() - 3);
  return date.toISOString().split('T')[0];
}
