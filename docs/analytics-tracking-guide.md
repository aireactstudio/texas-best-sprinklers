# Google Analytics Success Metrics Tracking

## Overview
This document outlines the Google Analytics 4 (GA4) tracking implementation for Texas Best Sprinklers website success metrics.

## Measurement ID
- **GA4 Property ID**: `G-YK85HJGEXC`

## Tracked Events

### 1. Phone Call Tracking
**Event Name**: `phone_call`
- **Category**: `engagement`
- **Triggers**: When users click any phone number link
- **Data Captured**:
  - Phone number clicked
  - Page where click occurred
  - Page title
  - Timestamp

**Locations Tracked**:
- Header navigation (desktop & mobile)
- Footer contact section
- Location-specific hero sections
- Mobile bottom CTA bar

### 2. Form Submission Tracking
**Event Name**: `form_submission`
- **Category**: `lead_generation`
- **Triggers**: When contact forms are successfully submitted
- **Data Captured**:
  - Form type (contact_form)
  - Service type selected
  - Page where form was submitted
  - Page title
  - Timestamp

**Forms Tracked**:
- Main contact form (`/contact`)
- Service page contact forms
- Location-specific contact forms

### 3. CTA Button Tracking
**Event Name**: `cta_click`
- **Category**: `engagement`
- **Triggers**: When users click call-to-action buttons
- **Data Captured**:
  - CTA button text
  - CTA type (primary, secondary, etc.)
  - Page where click occurred
  - Page title

### 4. Service Page Views
**Event Name**: `service_view`
- **Category**: `page_view`
- **Triggers**: When users view service-specific pages
- **Data Captured**:
  - Service name
  - Location (if location-specific)
  - Page path
  - Page title

## Implementation Files

### Core Analytics Utilities
- `/src/utils/analytics.ts` - Main tracking functions
- `/src/utils/analytics-test.ts` - Development testing utilities

### Updated Components
- `/src/components/ContactForm.tsx` - Form submission tracking
- `/src/components/AppHeader.tsx` - Phone call tracking in header
- `/src/components/Footer.tsx` - Phone call tracking in footer
- `/src/components/location-homepages/LocationHeroSection.tsx` - Location-specific phone tracking
- `/src/app/api/contact/route.ts` - Server-side form tracking data

### Google Analytics Setup
- `/src/components/GoogleAnalytics.tsx` - GA4 initialization
- Integrated in `/src/app/layout.tsx`

## Testing & Verification

### Development Testing
```javascript
// Available in browser console during development
testAnalytics() // Test all tracking events
checkGtag()    // Verify gtag is loaded
```

### Production Verification
1. **Real-time Reports**: Check GA4 Real-time reports for immediate event tracking
2. **DebugView**: Use GA4 DebugView for detailed event debugging
3. **Event Reports**: View Events report in GA4 for historical data

## Success Metrics Dashboard

### Key Metrics to Monitor
1. **Phone Call Conversions**
   - Total phone clicks per page
   - Phone click conversion rate
   - Top pages driving phone calls

2. **Form Submission Conversions**
   - Form completion rate by page
   - Service type preferences
   - Form abandonment points

3. **Page Performance**
   - Pages with highest engagement
   - Service pages with best conversion
   - Location-specific performance

### Custom Reports
Create custom reports in GA4 to track:
- Phone calls by page source
- Form submissions by service type
- CTA performance across pages
- Location-specific conversion rates

## Event Parameters

### Standard Parameters (All Events)
- `page_path`: Current page URL path
- `page_title`: Current page title
- `event_category`: Event classification
- `event_label`: Specific event identifier

### Phone Call Events
- `phone_number`: The phone number clicked
- `custom_parameter_1`: Always "phone_click"

### Form Submission Events
- `service_type`: Selected service category
- `custom_parameter_1`: Always "contact_form"

### CTA Click Events
- `cta_type`: Type of CTA (primary, secondary, etc.)
- `cta_text`: Button text content

## Troubleshooting

### Common Issues
1. **Events not appearing**: Check browser console for gtag errors
2. **Delayed reporting**: GA4 can take 24-48 hours for complete data
3. **Development vs Production**: Ensure GA4 property is correctly configured

### Debug Commands
```javascript
// Check if gtag is loaded
typeof window.gtag !== 'undefined'

// View dataLayer
console.log(window.dataLayer)

// Manual event test
gtag('event', 'test_event', { custom_parameter: 'test_value' })
```

## Next Steps
1. Monitor tracking for 1-2 weeks to establish baseline metrics
2. Create custom GA4 dashboards for key stakeholders
3. Set up automated reports for monthly performance reviews
4. Consider adding conversion goals in GA4 for ROI tracking
