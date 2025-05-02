import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import HeroSection from '@/components/HeroSection';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Blog post data - exported for use in BlogPost component
export const blogPosts = [
  {
    id: 1,
    title: "How Professional Irrigation Boosts Your Lawn's Health",
    excerpt: "Discover how the right irrigation system can transform your lawn from average to exceptionally lush and healthy.",
    content: "A professionally installed irrigation system provides consistent, even watering to your entire lawn, eliminating dry spots and preventing overwatering. This consistency is key to developing deep, strong root systems that can better withstand drought, disease, and pests. Furthermore, modern smart irrigation systems can adjust watering schedules based on weather conditions, soil moisture levels, and seasonal changes, ensuring your lawn receives exactly the right amount of water at the optimal time. This precision not only improves lawn health but also conserves water and reduces utility bills.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    date: "June 12, 2023",
    author: "Michael Wilson",
    category: "Lawn Care",
    slug: "how-professional-irrigation-boosts-lawn-health",
    tags: ["sprinkler systems", "lawn health", "water conservation", "professional irrigation"]
  },
  {
    id: 2,
    title: "The Ultimate Guide to Water-Efficient Sprinkler Systems",
    excerpt: "Learn how modern sprinkler technology can reduce water consumption while maintaining a vibrant landscape.",
    content: "Water-efficient sprinkler systems incorporate several key technologies that dramatically reduce water usage without sacrificing landscape health. High-efficiency nozzles deliver water more precisely and with larger droplets that resist wind drift. Pressure-regulating spray heads ensure optimal water pressure for maximum efficiency. Smart controllers adjust watering schedules based on weather conditions, automatically skipping irrigation when it rains. Drip irrigation delivers water directly to plant roots, virtually eliminating runoff and evaporation. Together, these technologies can reduce landscape water usage by 30-50% compared to conventional irrigation systems.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    date: "May 28, 2023",
    author: "Sarah Johnson",
    category: "Water Conservation",
    slug: "guide-water-efficient-sprinkler-systems",
    tags: ["water efficiency", "smart controllers", "drip irrigation", "sprinkler technology"]
  },
  {
    id: 3,
    title: "5 Common Irrigation Mistakes Homeowners Make",
    excerpt: "Avoid these frequent pitfalls that can waste water, damage your landscape, and increase your water bills.",
    content: "Many homeowners unknowingly make irrigation mistakes that waste water and harm their landscapes. Watering at the wrong time of day, typically mid-afternoon when evaporation rates are highest, can waste up to 30% of water. Incorrect sprinkler head placement leads to watering sidewalks and driveways instead of plants. Improper system maintenance, including failing to repair leaks and broken heads, wastes water and creates dry spots. Using the same watering schedule year-round ignores seasonal changes in plant water requirements. Finally, installing an irrigation system without proper zoning fails to account for different watering needs throughout the landscape.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    date: "April 15, 2023",
    author: "Robert Garcia",
    category: "Tips & Tricks",
    slug: "common-irrigation-mistakes-homeowners-make",
    tags: ["irrigation mistakes", "water waste", "sprinkler maintenance", "lawn care tips"]
  },
  {
    id: 4,
    title: "Benefits of Installing a Smart Irrigation Controller",
    excerpt: "Discover how smart controllers can revolutionize your watering system and save you money and resources.",
    content: "Smart irrigation controllers represent the latest advancement in watering technology, offering numerous benefits over traditional timers. These sophisticated devices connect to local weather stations or utilize on-site sensors to gather real-time data on rainfall, temperature, humidity, and soil moisture. Using this information, they automatically adjust watering schedules to deliver precisely the amount of water your landscape needs. Studies show that smart controllers can reduce water usage by 20-50% compared to conventional timers, resulting in significant water bill savings while maintaining healthier plants.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    date: "March 10, 2023",
    author: "Emily Carter",
    category: "Technology",
    slug: "benefits-of-smart-irrigation-controllers",
    tags: ["smart irrigation", "water conservation", "smart home", "technology"]
  },
  {
    id: 5,
    title: "Solving Common Drainage Problems in Fort Worth Yards",
    excerpt: "Learn practical solutions for managing water runoff and preventing landscape damage in the Fort Worth area.",
    content: "Fort Worth's clay soils and occasional heavy rainfall create drainage challenges for many homeowners. Standing water not only damages plants but can threaten foundations, create mosquito breeding grounds, and make outdoor areas unusable. Effective drainage solutions begin with a comprehensive site assessment to identify water sources and natural flow patterns. French drains, which consist of gravel-filled trenches with perforated pipes, effectively collect and redirect subsurface water. Surface drains capture runoff and channel it away from problem areas. Dry wells collect water and allow it to slowly percolate into the soil. Proper grading ensures water flows away from structures rather than toward them.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    date: "February 22, 2023",
    author: "Michael Wilson",
    category: "Drainage",
    slug: "solving-drainage-problems-fort-worth-yards",
    tags: ["drainage solutions", "yard drainage", "french drains", "Fort Worth landscaping"]
  },
  {
    id: 6,
    title: "How to Choose the Right Outdoor Lighting for Your Landscape",
    excerpt: "Expert tips for selecting and positioning outdoor lights to enhance your property's beauty and security.",
    content: "Outdoor lighting serves multiple purposes: enhancing landscape beauty, improving security, and extending the usability of outdoor spaces after dark. Path lights guide safe movement through the landscape while highlighting garden borders and walkways. Spotlights and uplights draw attention to architectural features, specimen plants, or trees. Well lights, installed flush with the ground, provide subtle illumination for low plants and hardscape features. Area lights cast a general glow over larger spaces. For maximum longevity and efficiency, choose fixtures made from high-quality materials like brass or copper, and opt for LED bulbs that consume less energy and last significantly longer than traditional bulbs.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    date: "January 18, 2023",
    author: "Sarah Johnson",
    category: "Outdoor Lighting",
    slug: "choosing-right-outdoor-lighting-landscape",
    tags: ["outdoor lighting", "landscape design", "security lighting", "LED lighting"]
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Add SEO metadata
  useEffect(() => {
    document.title = "Irrigation & Landscaping Blog | Texas Best Sprinklers";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert tips and advice on irrigation, drainage, and landscape lighting. Learn about water conservation, sprinkler maintenance, and outdoor lighting design from Texas Best Sprinklers in Fort Worth.");
    }
  }, []);
  
  // Filter posts when category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory]);
  
  // Extract unique categories
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          title="Irrigation & Landscaping Blog"
          subtitle="Expert tips, advice, and insights on irrigation, drainage, and outdoor lighting for Fort Worth homeowners."
        />

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container-custom">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 m-2 rounded-full transition-all ${
                    category === activeCategory
                      ? 'bg-irrigation-green text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Featured Post */}
            {filteredPosts.length > 0 && (
              <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-full">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title} 
                      className="w-full h-full object-cover"
                      style={{ minHeight: '400px' }}
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-block bg-irrigation-green bg-opacity-20 text-irrigation-green px-4 py-1 rounded-full mb-4">
                      {filteredPosts[0].category}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-irrigation-blue">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <div className="flex items-center mr-6">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{filteredPosts[0].date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${filteredPosts[0].slug}`} 
                      className="bg-irrigation-blue hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 inline-block"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-irrigation-green font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="block mb-3">
                      <h3 className="text-xl font-bold text-irrigation-blue hover:text-irrigation-green transition-colors duration-300">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
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
            
            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-4 text-irrigation-blue">No posts found</h3>
                <p className="text-gray-600 mb-6">
                  There are currently no posts in this category. Please check back later or try another category.
                </p>
                <button 
                  onClick={() => setActiveCategory("All")} 
                  className="bg-irrigation-green hover:bg-irrigation-darkGreen text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
                >
                  View All Posts
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-irrigation-blue text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Our Newsletter
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Subscribe to receive the latest irrigation tips, water conservation strategies, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white text-gray-800 flex-grow"
                />
                <Button className="bg-irrigation-green hover:bg-irrigation-darkGreen text-white">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm mt-4 opacity-80">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <CTA 
          title="Need Professional Irrigation or Landscaping Services?"
          subtitle="Contact our experts today for a free consultation and quote on your project."
          variant="secondary"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
