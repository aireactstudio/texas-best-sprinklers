/**
 * Bundle Analyzer Configuration
 * This helps identify and eliminate unused JavaScript
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer;
