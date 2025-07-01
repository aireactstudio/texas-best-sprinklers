// Quick environment check script
console.log('Environment Variables Check:');
console.log('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? '✓ Set' : '✗ Missing');
console.log('NODE_ENV:', process.env.NODE_ENV);

if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
  console.log('\n❌ CRITICAL: Google Maps API key is missing!');
  console.log('Create a .env.local file in your project root with:');
  console.log('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here');
} else {
  console.log('\n✅ Google Maps API key is configured');
}
