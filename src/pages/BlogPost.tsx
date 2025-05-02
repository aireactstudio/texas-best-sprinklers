import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import HeroSection from '@/components/HeroSection';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';

// Import blog data
import { blogPosts } from './Blog';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [prevPost, setPrevPost] = useState<any | null>(null);
  const [nextPost, setNextPost] = useState<any | null>(null);
  
  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(post => post.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Set page title and meta description for SEO
      document.title = `${currentPost.title} | Texas Best Sprinklers Blog`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", currentPost.excerpt);
      }
      
      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
      
      // Find previous and next posts
      const currentIndex = blogPosts.findIndex(p => p.id === currentPost.id);
      if (currentIndex > 0) {
        setPrevPost(blogPosts[currentIndex - 1]);
      } else {
        setPrevPost(null);
      }
      
      if (currentIndex < blogPosts.length - 1) {
        setNextPost(blogPosts[currentIndex + 1]);
      } else {
        setNextPost(null);
      }
    }
  }, [slug]);
  
  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <div className="container-custom pt-28 pb-20">
            <h1 className="text-3xl font-bold text-center">Post not found</h1>
            <p className="text-center mt-4">The article you're looking for doesn't exist or has been removed.</p>
            <div className="text-center mt-8">
              <Link to="/blog" className="btn-primary inline-block">
                Back to Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Split the content into paragraphs for better readability
  const paragraphs = post.content.split('. ').map((sentence: string, index: number, array: string[]) => 
    index === array.length - 1 ? sentence : sentence + '.'
  );

  // Group paragraphs into sections
  const contentSections = [];
  let currentSection = [];
  
  for (let i = 0; i < paragraphs.length; i++) {
    currentSection.push(paragraphs[i]);
    
    if (currentSection.length === 2 || i === paragraphs.length - 1) {
      contentSections.push(currentSection.join(' '));
      currentSection = [];
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          title={post.title}
          subtitle={post.excerpt}
        />

        {/* Blog Content */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-8">
                    <article className="prose prose-lg max-w-none">
                      {/* Introduction */}
                      <p className="lead text-xl text-gray-700 mb-6">
                        {post.excerpt}
                      </p>
                      
                      {/* Content Sections */}
                      {contentSections.map((section: string, index: number) => (
                        <React.Fragment key={index}>
                          {index % 2 === 1 && index < contentSections.length - 1 && (
                            <h2 className="text-2xl font-bold mb-4 text-irrigation-blue mt-8">
                              {["Key Benefits", "Important Considerations", "Best Practices", "Expert Tips", "Final Thoughts"][Math.floor(index / 2) % 5]}
                            </h2>
                          )}
                          <p className="mb-6 text-gray-700">
                            {section}
                          </p>
                        </React.Fragment>
                      ))}
                      
                      {/* Tags */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="font-medium text-gray-700 mb-3">Tags:</p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag: string, index: number) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                
                {/* Post Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-lg shadow-md p-6">
                  <div>
                    {prevPost && (
                      <Link 
                        to={`/blog/${prevPost.slug}`} 
                        className="flex items-center text-irrigation-blue hover:text-irrigation-green"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        <span>Previous Post</span>
                      </Link>
                    )}
                  </div>
                  <Link 
                    to="/blog" 
                    className="my-4 sm:my-0 text-irrigation-green font-medium hover:underline"
                  >
                    View All Posts
                  </Link>
                  <div>
                    {nextPost && (
                      <Link 
                        to={`/blog/${nextPost.slug}`} 
                        className="flex items-center text-irrigation-blue hover:text-irrigation-green"
                      >
                        <span>Next Post</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-8">
                {/* Author Bio */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-irrigation-blue">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-irrigation-blue text-white flex items-center justify-center text-2xl font-bold mr-4">
                      {post.author.split(' ')[0][0]}
                    </div>
                    <div>
                      <p className="font-bold">{post.author}</p>
                      <p className="text-gray-600 text-sm">Irrigation Expert</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    With years of experience in the irrigation industry, {post.author.split(' ')[0]} provides valuable insights on water conservation, landscape maintenance, and irrigation technology.
                  </p>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Categories</h3>
                  <ul className="space-y-2">
                    {Array.from(new Set(blogPosts.map(p => p.category))).map((category, index) => (
                      <li key={index}>
                        <Link 
                          to={`/blog?category=${category}`} 
                          className="flex items-center justify-between text-gray-700 hover:text-irrigation-green"
                        >
                          <span>{category}</span>
                          <span className="bg-gray-100 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            {blogPosts.filter(p => p.category === category).length}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4 text-irrigation-blue">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="flex items-start">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-20 h-20 object-cover rounded mr-4"
                          />
                          <div>
                            <Link 
                              to={`/blog/${relatedPost.slug}`} 
                              className="font-medium hover:text-irrigation-green text-irrigation-blue"
                            >
                              {relatedPost.title}
                            </Link>
                            <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <CTA 
          title="Ready to Improve Your Irrigation System?"
          subtitle="Contact our experts today for a personalized consultation and free quote."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
