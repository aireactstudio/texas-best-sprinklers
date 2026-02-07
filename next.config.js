/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('./src/utils/bundle-analyzer');

// For tree-shaking and unused code elimination
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Expose environment variables to the browser
  // Note: Only the Maps key is needed client-side (for rendering maps).
  // The Places API key stays server-only (used in /api/reviews route).
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimisticClientCache: true,
    // Disabling turbotrace to avoid build warnings
    // serverMinification: true, // Removing unsupported option
  },
  
  // Webpack configuration for optimal chunking
  webpack: (config, { dev, isServer }) => {
    // Only apply in production builds for client-side bundles
    if (!dev && !isServer) {
      // Enhanced granular chunking strategy
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 30, // Increased for more granular chunks
        minSize: 10000, // Reduced to 10KB min chunk size
        maxSize: 60000, // Smaller target size for faster loading
        cacheGroups: {
          // Split react and related packages
          react: {
            test: /[\/]node_modules[\/](react|react-dom|scheduler|prop-types|use-subscription)[\/]/,
            name: 'framework-react',
            priority: 40,
            chunks: 'all',
          },
          // NextJS library
          next: {
            test: /[\/]node_modules[\/](next|@next)[\/]/,
            name: 'framework-next',
            priority: 39,
            chunks: 'all',
          },
          // UI utilities (headlessui, radix, etc)
          uiLibs: {
            test: /[\/]node_modules[\/](@headlessui|@radix-ui|framer-motion|react-transition-group)[\/]/,
            name: 'ui-libraries',
            priority: 35,
            chunks: 'all',
          },
          // Google Maps related packages
          maps: {
            test: /[\/]node_modules[\/](@react-google-maps|google-map-react)[\/]/,
            name: 'google-maps',
            priority: 30,
            chunks: 'all',
          },
          // Other third party libraries
          vendors: {
            test: /[\/]node_modules[\/]/,
            name: 'vendors',
            reuseExistingChunk: true,
            priority: 20,
            chunks: 'all',
          },
          // App components used on multiple pages
          commons: {
            name: 'commons',
            minChunks: 2, // Used in at least 2 places
            priority: 10,
            reuseExistingChunk: true,
          },
          // Create route-specific bundles
          routes: {
            name: module => {
              const routeName = getRouteNameFromModule(module);
              return routeName ? `route-${routeName}` : false;
            },
            minChunks: 1,
            priority: 3,
          },
        },
      };
      
      // Helper function to extract route name from module path
      function getRouteNameFromModule(module) {
        if (!module.resource) return false;
        // Match pages directory structure for route-based chunking
        const routeMatch = module.resource.match(/[\\/]pages[\\/](.*?)[\\/][^\\/]+$/);
        return routeMatch ? routeMatch[1].replace(/[\\/]/g, '-') : false;
      }
    }
    return config;
  },
  
  // Image optimization settings
  images: {
    // Next.js image formats - prioritizing modern formats
    formats: ['image/avif', 'image/webp'],
    // Comprehensive device size coverage for responsive images
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
    // Using remotePatterns instead of deprecated domains
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4004',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 31536000, // 1 year for better caching
    dangerouslyAllowSVG: true, // Allow SVG for icons
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Script optimization is handled through dynamic imports instead

  
  // Ensure we can handle URLs with dots in them for potential filetypes
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Handle specific redirects for better UX
  async redirects() {
    return [
      {
        // Only redirect specific old service slugs that aren't valid anymore
        // The wildcard pattern needs to be more specific to avoid catching the base route
        source: '/services/:slug(irrigation|sprinklers|drainage)/:subpath*',
        destination: '/services/:slug',
        permanent: false,
      },
    ];
  },
}

// Apply bundle analyzer wrapper
module.exports = withBundleAnalyzer(nextConfig)
