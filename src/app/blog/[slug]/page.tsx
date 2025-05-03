'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import CTA from '@/components/CTA';

// Import blog data
import { blogPosts } from '@/data/blogPosts';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Find the current post
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, show 404
  if (!post) {
    notFound();
  }
  
  // Find index of current post
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  
  // Get prev and next posts
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  // Find related posts (same category)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);
  
  return (
    <>
      {/* Hero/Header Image */}
      <div className="relative h-96">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-irrigation-blue bg-opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center text-sm opacity-90">
              <span className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Main Content */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose prose-lg max-w-none">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs py-1 px-3 bg-irrigation-blue/10 text-irrigation-blue rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Post Content - in a real app, this would be rich HTML/Markdown */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {post.content}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Water conservation is a critical concern for homeowners in the Fort Worth and Weatherford areas. With proper irrigation system design and regular maintenance, you can significantly reduce your water usage while maintaining a healthy, vibrant landscape.
                  </p>
                  <h2 className="text-2xl font-bold text-irrigation-blue mt-8 mb-4">Key Considerations</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    When planning your irrigation system, it's important to consider your soil type, plant varieties, sun exposure, and local water restrictions. A professionally designed system takes all these factors into account to deliver optimal results.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Texas Best Sprinklers specializes in designing water-efficient irrigation systems that meet the specific needs of North Texas landscapes. Contact us today to learn how we can help you achieve a beautiful, water-smart yard.
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="h-14 w-14 rounded-full bg-irrigation-blue/20 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-irrigation-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{post.author}</h3>
                      <p className="text-gray-600 text-sm">
                        Irrigation Specialist at Texas Best Sprinklers
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Post Navigation */}
                <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4">
                  {prevPost ? (
                    <Link 
                      href={`/blog/${prevPost.slug}`} 
                      className="flex items-center text-irrigation-blue hover:text-irrigation-green transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      <span className="text-sm">Previous: {prevPost.title}</span>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                  
                  {nextPost ? (
                    <Link 
                      href={`/blog/${nextPost.slug}`} 
                      className="flex items-center justify-end text-irrigation-blue hover:text-irrigation-green transition-colors"
                    >
                      <span className="text-sm">Next: {nextPost.title}</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors"
                    >
                      Lawn Care
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors"
                    >
                      Water Conservation
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors"
                    >
                      Smart Technology
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors"
                    >
                      Irrigation Design
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors"
                    >
                      Drainage Solutions
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Related Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="flex items-start">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-16 h-16 object-cover rounded mr-3"
                      />
                      <div>
                        <Link 
                          href={`/blog/${relatedPost.slug}`} 
                          className="font-medium hover:text-irrigation-green transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                      </div>
                    </div>
                  ))}
                  
                  {relatedPosts.length === 0 && (
                    <p className="text-gray-600">
                      No related articles found.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA 
        title="Need Professional Irrigation Services?"
        subtitle="Contact our team of experts for a consultation and free estimate."
        buttonText="Contact Us"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
