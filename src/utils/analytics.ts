// Google Analytics tracking utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Track phone call clicks
 */
export const trackPhoneCall = (phoneNumber: string, pagePath?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'engagement',
      event_label: phoneNumber,
      page_path: pagePath || window.location.pathname,
      page_title: document.title,
      custom_parameter_1: 'phone_click'
    });
    
    console.log('GA4 Event: Phone call tracked', {
      phone: phoneNumber,
      page: pagePath || window.location.pathname
    });
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formType: string, serviceName?: string, pagePath?: string) => {
  const waitForGtag = (callback: () => void, maxAttempts = 10) => {
    let attempts = 0;
    const checkGtag = () => {
      attempts++;
      if (typeof window !== 'undefined' && window.gtag) {
        callback();
      } else if (attempts < maxAttempts) {
        setTimeout(checkGtag, 500);
      } else {
        console.log('GA4 tracking failed - gtag not available after waiting');
      }
    };
    checkGtag();
  };

  waitForGtag(() => {
    const eventData = {
      event_category: 'lead_generation',
      event_label: formType,
      service_type: serviceName || 'general',
      page_path: pagePath || window.location.pathname,
      page_title: document.title,
      custom_parameter_1: 'contact_form'
    };
    
    window.gtag('event', 'form_submission', eventData);
    console.log('✅ GA4 Form submission tracked:', {
      formType,
      service: serviceName,
      page: pagePath || window.location.pathname
    });
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaText: string, ctaType: string, pagePath?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: ctaText,
      cta_type: ctaType,
      page_path: pagePath || window.location.pathname,
      page_title: document.title
    });
    
    console.log('GA4 Event: CTA click tracked', {
      cta: ctaText,
      type: ctaType,
      page: pagePath || window.location.pathname
    });
  }
};

/**
 * Track service page views
 */
export const trackServiceView = (serviceName: string, location?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_view', {
      event_category: 'page_view',
      event_label: serviceName,
      service_location: location || 'general',
      page_path: window.location.pathname,
      page_title: document.title
    });
    
    console.log('GA4 Event: Service view tracked', {
      service: serviceName,
      location: location
    });
  }
};
