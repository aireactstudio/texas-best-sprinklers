/**
 * Performance optimization utilities
 * Handles priority-based resource loading and performance measurement
 */

/**
 * Tracks key performance metrics
 * @returns Object with performance metric functions
 */
export const performanceMetrics = () => {
  // Create performance timeline for debugging and optimization
  const marks: Record<string, number> = {};
  
  /**
   * Mark a performance point
   * @param name Identifier for the mark
   */
  const mark = (name: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(name);
      marks[name] = Date.now();
    }
  };
  
  /**
   * Measure time between marks
   * @param name Measurement name
   * @param startMark Starting mark
   * @param endMark Ending mark
   * @returns Duration in milliseconds
   */
  const measure = (name: string, startMark: string, endMark: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      try {
        window.performance.measure(name, startMark, endMark);
        const duration = marks[endMark] - marks[startMark];
        // Log only in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`⚡ ${name}: ${duration}ms`);
        }
        return duration;
      } catch (e) {
        console.error('Performance measurement error:', e);
      }
    }
    return 0;
  };
  
  /**
   * Create Web Vitals report
   */
  const reportWebVitals = () => {
    if (typeof window !== 'undefined') {
      // Report CLS, LCP, and FID when available
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Only log in development
          if (process.env.NODE_ENV === 'development') {
            console.log(`📊 Vital: ${entry.name} = ${entry.startTime}ms`);
          }
        });
      });
      
      // Observe performance metrics
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      observer.observe({ type: 'layout-shift', buffered: true });
      observer.observe({ type: 'first-input', buffered: true });
    }
  };
  
  return { mark, measure, reportWebVitals };
};

/**
 * Optimized dynamic import with performance tracking
 * @param importFn Function that imports a module
 * @param options Additional options
 * @returns Promise resolving to the imported module
 */
export const optimizedImport = <T>(
  importFn: () => Promise<T>,
  options: { 
    priority?: 'high' | 'medium' | 'low',
    timeout?: number
  } = {}
): Promise<T> => {
  const { priority = 'medium', timeout = 3000 } = options;
  
  // For high-priority imports, use minimal delay
  if (priority === 'high') {
    return importFn();
  }
  
  // For medium-priority, wait until browser is idle
  if (priority === 'medium' && typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return new Promise((resolve) => {
      (window as any).requestIdleCallback(
        () => resolve(importFn()),
        { timeout }
      );
    });
  }
  
  // For low-priority, use a longer delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFn()), 1000);
  });
};
