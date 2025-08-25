'use client';

import { useEffect } from 'react';

export default function GADebugger() {
  useEffect(() => {
    // Check if GA is loaded after a delay
    const checkGA = () => {
      console.log('=== GA Debug Check ===');
      console.log('window.gtag exists:', typeof window.gtag !== 'undefined');
      console.log('window.dataLayer exists:', typeof (window as any).dataLayer !== 'undefined');
      console.log('dataLayer contents:', (window as any).dataLayer);
      
      if (typeof window.gtag !== 'undefined') {
        console.log('✅ Google Analytics is loaded and ready');
        // Send a test event
        window.gtag('event', 'test_event', {
          event_category: 'debug',
          event_label: 'ga_loaded_successfully'
        });
        console.log('📊 Test event sent to GA');
      } else {
        console.log('❌ Google Analytics is not loaded');
      }
    };

    // Check immediately
    checkGA();
    
    // Check again after 2 seconds
    setTimeout(checkGA, 2000);
    
    // Check again after 5 seconds
    setTimeout(checkGA, 5000);
  }, []);

  return null; // This component doesn't render anything
}
