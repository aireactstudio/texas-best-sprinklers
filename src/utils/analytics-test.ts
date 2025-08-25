// Test utility to verify Google Analytics tracking is working
// This file can be imported in development to test tracking events

import { trackPhoneCall, trackFormSubmission, trackCTAClick, trackServiceView } from './analytics';

export const testAnalyticsTracking = () => {
  console.log('🧪 Testing Google Analytics tracking...');
  
  // Test phone call tracking
  console.log('📞 Testing phone call tracking...');
  trackPhoneCall('(817) 304-7896', '/test-page');
  
  // Test form submission tracking
  console.log('📝 Testing form submission tracking...');
  trackFormSubmission('contact_form', 'Irrigation Repair', '/services/irrigation-repair');
  
  // Test CTA click tracking
  console.log('🎯 Testing CTA click tracking...');
  trackCTAClick('Get Free Quote', 'primary_cta', '/');
  
  // Test service view tracking
  console.log('👀 Testing service view tracking...');
  trackServiceView('Sprinkler Installation', 'Fort Worth');
  
  console.log('✅ All tracking events sent. Check your browser console and GA4 DebugView.');
  console.log('📊 Events should appear in GA4 Real-time reports within 1-2 minutes.');
};

// Function to check if gtag is available
export const checkGtagAvailability = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('✅ Google Analytics (gtag) is loaded and available');
    return true;
  } else {
    console.log('❌ Google Analytics (gtag) is not available');
    return false;
  }
};

// Development helper to run tests
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // Add test function to window for easy access in browser console
  (window as any).testAnalytics = testAnalyticsTracking;
  (window as any).checkGtag = checkGtagAvailability;
  
  console.log('🔧 Analytics testing functions available:');
  console.log('- Run testAnalytics() to test all tracking events');
  console.log('- Run checkGtag() to verify gtag is loaded');
}
