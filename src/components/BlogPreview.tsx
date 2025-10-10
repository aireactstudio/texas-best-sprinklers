
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';

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
  // Use the first 3 blog posts from the actual data file
  posts = blogPosts.slice(0, 3).map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    date: post.date,
    category: post.category,
    slug: post.slug,
  }))
}) => {
  // Override the middle (second) card image
  const postsWithOverride = posts.map((p, i) =>
    i === 1 ? { ...p, image: '/assets/images/optimized/sprinkler.png' } : p
  );
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-irrigation-a11y-light-green text-irrigation-a11y-green px-4 py-2 rounded-full mb-4 font-medium">
            Our Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-irrigation-darkBlue">
            Latest Irrigation Insights
          </h2>
          <p className="text-lg text-irrigation-a11y-gray-dark max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and expert advice on irrigation and water conservation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsWithOverride.map((post, index) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-300 hover:scale-105"
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
                  className="text-irrigation-darkGreen font-medium hover:text-irrigation-darkBlue flex items-center"
                  aria-label={`Read full article about ${post.title}`}
                >
                  <span>Read article: {post.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
