
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Droplet } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container-custom text-center">
          <div className="mb-8">
            <Droplet className="w-20 h-20 text-irrigation-green mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-irrigation-blue">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/" 
              className="btn-primary min-w-[200px]"
            >
              Return to Home
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary min-w-[200px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
