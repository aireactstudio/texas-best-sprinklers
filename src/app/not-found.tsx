import React from "react";
import Link from "next/link";
import { Droplet } from "lucide-react";

export default function NotFound() {
  return (
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
            href="/" 
            className="btn-primary min-w-[200px]"
          >
            Return to Home
          </Link>
          <Link 
            href="/contact" 
            className="btn-secondary min-w-[200px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
