// Export Google Maps API key from environment variable
export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

// Default export for backward compatibility
export default GOOGLE_MAPS_API_KEY;