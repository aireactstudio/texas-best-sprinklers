# Google Maps Integration for Texas Best Sprinklers

This document explains how the Google Maps integration works in the Texas Best Sprinklers website.

## About the Integration

The website uses Google Maps to display service areas for each location in the DFW area. Each map shows:
- A pin marking the exact location (Fort Worth, Arlington, Keller, etc.)
- A 5-mile radius circle showing the primary service area

## API Keys

The site uses existing API keys that have already been set up in the `.env.local` file:

```
GOOGLE_MAPS_API_KEY="AIzaSyDTpSiR7Ou74TW_sm60CQp3DDVw6NvPbus"
GOOGLE_PLACES_API_KEY="AIzaSyDTpSiR7Ou74TW_sm60CQp3DDVw6NvPbus"
```

These keys are already exposed to the client-side code through the Next.js configuration, so no additional setup is needed.

## For Future Reference: Getting a New Google Maps API Key

If you need to update the API key in the future:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Library"
4. Enable the Maps JavaScript API
5. Create new credentials and update the `.env.local` file

## Verifying the Integration

After adding the API key:

1. Run the development server (`npm run dev`)
2. Navigate to any service location page (Fort Worth, Arlington, Keller, etc.)
3. Scroll down to the "Local Regulations & Compliance" section
4. You should see a Google Map with a pin at the location's coordinates and a 5-mile radius circle

## Troubleshooting

If the map doesn't appear:

1. Check the browser console for error messages
2. Verify that the API key is correctly added to the `.env.local` file
3. Make sure the Google Maps JavaScript API is enabled in your Google Cloud Console
4. Check if there are any billing issues with your Google Cloud account

## API Usage and Billing

Google Maps Platform uses a pay-as-you-go pricing model. You get a $200 monthly credit which is typically enough for small to medium websites. Monitor your usage in the Google Cloud Console to avoid unexpected charges.
