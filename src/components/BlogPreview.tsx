
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

interface BlogPreviewProps {
  posts?: BlogPost[];
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ 
  posts = [
    {
      id: 1,
      title: "How Professional Irrigation Boosts Your Lawn's Health",
      excerpt: "Discover how the right irrigation system can transform your lawn from average to exceptionally lush and healthy.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      date: "June 12, 2023",
      category: "Lawn Care",
      slug: "how-professional-irrigation-boosts-lawn-health",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Water-Efficient Sprinkler Systems",
      excerpt: "Learn how modern sprinkler technology can reduce water consumption while maintaining a vibrant landscape.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      date: "May 28, 2023",
      category: "Water Conservation",
      slug: "guide-water-efficient-sprinkler-systems",
    },
    {
      id: 3,
      title: "5 Common Irrigation Mistakes Homeowners Make",
      excerpt: "Avoid these frequent pitfalls that can waste water, damage your landscape, and increase your water bills.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      date: "April 15, 2023",
      category: "Tips & Tricks",
      slug: "common-irrigation-mistakes-homeowners-make",
    },
  ]
}) => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-2 rounded-full mb-4">
            Our Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-blue">
            Latest Irrigation Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and expert advice on irrigation and water conservation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative w-full h-48">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 2} // Load first two images with priority
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-irrigation-green font-medium">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block mb-3">
                  <h3 className="text-xl font-bold text-irrigation-blue hover:text-irrigation-green transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-irrigation-green font-medium hover:text-irrigation-darkGreen flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-secondary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
