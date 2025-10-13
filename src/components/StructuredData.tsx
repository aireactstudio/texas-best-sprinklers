import React from 'react';
import { curatedReviews } from '@/data/curated-reviews';
import { blogPosts } from '@/data/blogPosts';

interface StructuredDataProps {
  businessInfo: {
    name: string;
    rating: number;
    userRatingsTotal: number;
    googleUrl: string;
  };
  reviews: any[];
}

export default function StructuredData({ businessInfo, reviews }: StructuredDataProps) {
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
  for (const review of reviews) {
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

  // Create BreadcrumbList structured data
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

  // Create blog article structured data
  const homepageBlogPosts = blogPosts.slice(0, 3); // Get the first 3 blog posts shown on homepage
  
  // Create an array to hold all structured data objects
  const allStructuredData = [
    structuredData,
    websiteData,
    breadcrumbData,
    organizationData,
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": homepageBlogPosts.map((post, index) => ({
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
    }
  ];

  return (
    <>
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

// Helper function to convert relative time to ISO date
function convertRelativeTimeToDate(relativeTime: string): string {
  const now = new Date();
  
  // Extract number from relative time string (e.g., "6 months ago" -> 6)
  const match = relativeTime.match(/(\d+)/);
  if (!match) {
    // Default to 3 months ago if we can't parse
    const date = new Date(now);
    date.setMonth(now.getMonth() - 3);
    return date.toISOString().split('T')[0];
  }
  
  const number = parseInt(match[1], 10);
  if (isNaN(number)) {
    // Default to 3 months ago if we can't parse
    const date = new Date(now);
    date.setMonth(now.getMonth() - 3);
    return date.toISOString().split('T')[0];
  }
  
  if (relativeTime.includes('day')) {
    const date = new Date(now);
    date.setDate(now.getDate() - number);
    return date.toISOString().split('T')[0];
  } 
  else if (relativeTime.includes('week')) {
    const date = new Date(now);
    date.setDate(now.getDate() - (number * 7));
    return date.toISOString().split('T')[0];
  }
  else if (relativeTime.includes('month')) {
    const date = new Date(now);
    date.setMonth(now.getMonth() - number);
    return date.toISOString().split('T')[0];
  }
  else if (relativeTime.includes('year')) {
    const date = new Date(now);
    date.setFullYear(now.getFullYear() - number);
    return date.toISOString().split('T')[0];
  }
  
  // Default to 3 months ago if we can't parse
  const date = new Date(now);
  date.setMonth(now.getMonth() - 3);
  return date.toISOString().split('T')[0];
}
