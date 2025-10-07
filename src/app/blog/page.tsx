'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CTA from '@/components/CTA';
import { Calendar, User } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title="Irrigation Insights Blog" 
        subtitle="Expert tips and advice for maintaining beautiful, water-efficient landscapes"
      />
      
      {/* Breadcrumbs (always below hero) */}
      <Breadcrumbs />
      
      {/* Blog Post Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="block mb-3">
                        <h2 className="text-xl font-bold text-irrigation-blue hover:text-irrigation-green transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-700 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center">
                        <span className="text-xs py-1 px-2 bg-irrigation-blue/10 text-irrigation-blue rounded-full mr-2">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Search Articles</h3>
                <div className="flex">
                  <Input 
                    placeholder="Search for topics..." 
                    className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button className="rounded-l-none bg-irrigation-blue hover:bg-irrigation-darkBlue">
                    Search
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors flex items-center justify-between"
                    >
                      <span>Lawn Care</span>
                      <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full">4</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors flex items-center justify-between"
                    >
                      <span>Water Conservation</span>
                      <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full">6</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors flex items-center justify-between"
                    >
                      <span>Smart Technology</span>
                      <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full">3</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors flex items-center justify-between"
                    >
                      <span>Irrigation Design</span>
                      <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full">5</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#"
                      className="text-gray-700 hover:text-irrigation-green transition-colors flex items-center justify-between"
                    >
                      <span>Drainage Solutions</span>
                      <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full">2</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Subscribe</h3>
                <p className="text-gray-700 mb-4">
                  Get the latest irrigation tips and updates delivered directly to your inbox.
                </p>
                <Input 
                  placeholder="Your email address" 
                  className="mb-3"
                />
                <Button className="w-full bg-irrigation-blue hover:bg-irrigation-darkBlue">
                  Subscribe
                </Button>
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
