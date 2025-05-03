'use client';

import React, { useEffect, useState } from 'react';

interface AnimatedWaterDropsProps {
  count?: number;
}

/**
 * Client-only animated water drops component
 * This prevents hydration mismatches by rendering only on the client
 */
const AnimatedWaterDrops: React.FC<AnimatedWaterDropsProps> = ({ count = 8 }) => {
  const [mounted, setMounted] = useState(false);
  
  // Only render after component mounts on client
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div 
          key={i}
          className="water-animation absolute"
          style={{
            '--i': i,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            opacity: 0.7,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

export default AnimatedWaterDrops;
