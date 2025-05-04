'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * OptimizedHero component that implements a two-phase loading strategy
 * 1. Immediately loads an inline base64 tiny image for instant display
 * 2. Then loads the full WebP image once the page is ready
 */
const OptimizedHero = () => {
  const [loaded, setLoaded] = useState(false);
  
  // Tiny inlined image as base64 - this loads instantly (only ~800 bytes)
  const tinyBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAeAEsDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAUGBAMH/8QAJhAAAgIBAwMEAwEAAAAAAAAAAQIDEQAEEiEFMUETIjJRYWKBI//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/APLrYW2BO4k0Ad8/2sP1N9RkL6lFE22NQFJAoXxyfjnNUvVdRp5FQl76tSKJxbr+oaSePdLIkRKbjZrdQ/eaRmkT9HHSGkNrXGSJ6exQxxu00lEKzHkr9n8Z1fojkglZSCCLFZnQdP08cshhkQxbQUTgkE3yeefGB9b0hhASIoVYsQ8d2K+wcQPutc5X/K+uMBS1/wDMYGE9Wj1JMcegEaQkANIbB5s/HsPB7ZI9V0p0+qaCQc+QR3BHY5o6l1XVdRkq9scV+xFJoX9/ucr+rda1XUz6Yz66pLB2KO/8zmrGSZIBEbVePk18vGemfCJdM6HTrECSSy3wL8ZqjijjRrRQWAJs3z9/eADScUmwn8YxmOYmKKQH5AcYzA//2Q==";
  
  // Full image path for second phase loading
  const imagePath = "/assets/images/optimized/hero-background.webp";
  
  // Trigger blur-up animation when the full image loads
  const handleImageLoad = () => {
    setLoaded(true);
  };
  
  // Preload the full image as soon as component mounts
  useEffect(() => {
    // Use the global window.Image constructor
    const img = new window.Image();
    img.src = imagePath;
    
    // Force high priority loading
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imagePath;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base layer: tiny instant-loading placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ 
          backgroundImage: `url(${tinyBase64})`,
          opacity: loaded ? 0 : 0.7,
          filter: 'blur(8px)',
          transform: 'scale(1.05)',
          zIndex: 1
        }}
      />
      
      {/* Main layer: full optimized image with priority loading */}
      <Image
        src={imagePath}
        alt="Hero background"
        fill
        priority
        fetchPriority="high"
        quality={85}
        sizes="100vw"
        onLoad={handleImageLoad}
        className={`object-cover transition-opacity duration-500 z-10 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-irrigation-blue bg-opacity-60 z-20"></div>
    </div>
  );
};

export default OptimizedHero;
