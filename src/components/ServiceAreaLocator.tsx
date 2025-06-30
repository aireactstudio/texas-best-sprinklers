'use client';

import React, { useEffect, useRef, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { useGoogleMaps } from './GoogleMapsLoader';

interface ServiceAreaLocatorProps {
  title?: string;
  subtitle?: string;
}

// Service area locations for Texas Best Sprinklers
const SERVICE_LOCATIONS = [
  { name: 'Fort Worth', lat: 32.7555, lng: -97.3308, radius: 15 },
  { name: 'Arlington', lat: 32.7357, lng: -97.1081, radius: 10 },
  { name: 'Keller', lat: 32.9343, lng: -97.2297, radius: 8 },
  { name: 'Southlake', lat: 32.9412, lng: -97.1342, radius: 8 },
  { name: 'Colleyville', lat: 32.8906, lng: -97.1467, radius: 8 },
  { name: 'Grapevine', lat: 32.9343, lng: -97.0780, radius: 8 },
  { name: 'North Richland Hills', lat: 32.8342, lng: -97.2289, radius: 10 },
  { name: 'Bedford', lat: 32.8449, lng: -97.1433, radius: 8 },
  { name: 'Euless', lat: 32.8370, lng: -97.0819, radius: 8 },
  { name: 'Hurst', lat: 32.8234, lng: -97.1705, radius: 8 },
  { name: 'Watauga', lat: 32.8776, lng: -97.2547, radius: 8 },
  { name: 'Haltom City', lat: 32.7996, lng: -97.2691, radius: 8 },
  { name: 'Mansfield', lat: 32.5632, lng: -97.1417, radius: 10 },
  { name: 'Grand Prairie', lat: 32.7459, lng: -97.0077, radius: 10 },
  { name: 'Benbrook', lat: 32.6732, lng: -97.4606, radius: 8 },
  { name: 'Flower Mound', lat: 33.0145, lng: -97.0969, radius: 10 },
  { name: 'Lewisville', lat: 33.0462, lng: -97.0103, radius: 10 },
  { name: 'Coppell', lat: 32.9545, lng: -97.0150, radius: 8 },
  { name: 'Irving', lat: 32.8140, lng: -96.9489, radius: 10 },
  { name: 'Trophy Club', lat: 33.0015, lng: -97.1900, radius: 8 },
  { name: 'Roanoke', lat: 33.0040, lng: -97.2258, radius: 8 },
  { name: 'Westlake', lat: 33.0001, lng: -97.1950, radius: 8 },
  { name: 'Weatherford', lat: 32.7593, lng: -97.7972, radius: 12 },
  { name: 'Annetta', lat: 32.6865, lng: -97.6511, radius: 8 },
  { name: 'Brock', lat: 32.6732, lng: -97.9383, radius: 8 },
  { name: 'Millsap', lat: 32.7487, lng: -98.0092, radius: 8 },
  { name: 'Peaster', lat: 32.8515, lng: -97.8661, radius: 8 },
  { name: 'Hudson Oaks', lat: 32.7554, lng: -97.7114, radius: 8 },
  { name: 'Aledo', lat: 32.6968, lng: -97.6006, radius: 8 },
  { name: 'Willow Park', lat: 32.7632, lng: -97.6511, radius: 8 },
  { name: 'Springtown', lat: 32.9679, lng: -97.6803, radius: 8 },
  { name: 'Cool', lat: 32.8346, lng: -97.9972, radius: 8 },
  { name: 'Azle', lat: 32.8954, lng: -97.5450, radius: 8 },
  { name: 'Mineral Wells', lat: 32.8085, lng: -98.1128, radius: 10 },
];

const ServiceAreaLocator: React.FC<ServiceAreaLocatorProps> = ({ 
  title = "Our Service Areas",
  subtitle = "We provide expert irrigation and drainage services throughout the Fort Worth area"
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const { isLoaded: mapLoaded } = useGoogleMaps();

  // Initialize the map once the script is loaded
  useEffect(() => {
    // Clean up function to prevent memory leaks
    let mounted = true;
    
    const initMap = () => {
      // Don't initialize if component unmounted or dependencies not ready
      if (!mounted || !mapLoaded || !window.google?.maps?.Map || !mapRef.current) return;
      
      try {
        // Clear any existing content to prevent duplicate elements
        if (mapRef.current) {
          mapRef.current.innerHTML = '';
        }
        
        // Create the map centered on Fort Worth
        const map = new window.google.maps.Map(mapRef.current!, {
        center: { lat: 32.7555, lng: -97.3308 },
        zoom: 9,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 16 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#dedede" }, { lightness: 21 }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
          },
          {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
          },
        ],
      });

      // Create markers and circles for each location
      const markers: google.maps.Marker[] = [];
      const circles: google.maps.Circle[] = [];
      const infoWindows: google.maps.InfoWindow[] = [];

      SERVICE_LOCATIONS.forEach((location, index) => {
        // Create marker - using the standard Marker as AdvancedMarkerElement may require additional setup
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map,
          title: location.name,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1e7e34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            `),
            scaledSize: new google.maps.Size(36, 36),
            anchor: new google.maps.Point(18, 36),
          },
          animation: google.maps.Animation.DROP,
          optimized: false,
        });
        markers.push(marker);

        // Create service area circle
        const circle = new google.maps.Circle({
          strokeColor: "#1e7e34",
          strokeOpacity: 0.3,
          strokeWeight: 2,
          fillColor: "#1e7e34",
          fillOpacity: 0.1,
          map,
          center: { lat: location.lat, lng: location.lng },
          radius: location.radius * 1609.34, // Convert miles to meters
          visible: false,
        });
        circles.push(circle);

        // Create info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 200px;">
              <h3 style="margin: 0 0 8px; font-size: 16px; color: #1e7e34;">${location.name}</h3>
              <p style="margin: 0; font-size: 14px;">Service radius: ${location.radius} miles</p>
              <a href="/services?location=${location.name.toLowerCase().replace(' ', '-')}" 
                 style="display: inline-block; margin-top: 8px; color: #1e7e34; text-decoration: none; font-weight: bold; font-size: 14px;">
                View Services
              </a>
            </div>
          `,
        });
        infoWindows.push(infoWindow);

        // Add click event to marker
        marker.addListener("click", () => {
          // Close all info windows
          infoWindows.forEach(iw => iw.close());
          
          // Hide all circles
          circles.forEach(c => c.setVisible(false));
          
          // Show this location's info window and circle
          infoWindow.open(map, marker);
          circle.setVisible(true);
          
          // Update active location
          setActiveLocation(location.name);
        });
      });

      // Add click listener to map to close info windows and hide circles when clicking elsewhere
      map.addListener("click", () => {
        infoWindows.forEach(iw => iw.close());
        circles.forEach(c => c.setVisible(false));
        setActiveLocation(null);
      });
      } catch (error) {
        console.error('Error initializing Google Maps:', error);
      }
    };

    // Initialize the map
    // Small timeout to ensure the API is fully loaded
    const timer = setTimeout(() => {
      initMap();
    }, 100);
    
    // Cleanup function
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [mapLoaded]);


  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 opacity-60"></div>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23015e17' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
           }}>
      </div>
      
      {/* Sunlight effect */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-yellow-200 to-transparent opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-green-200 to-transparent opacity-20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map container */}
          <div className="lg:w-2/3">
            <div 
              ref={mapRef} 
              className="w-full h-[500px] rounded-lg shadow-md border border-gray-200"
              style={{ background: '#f5f5f5' }}
            ></div>
          </div>

          {/* Location list */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Our Locations</h3>
              <p className="text-gray-600 mb-4">Click on a location to see its service area:</p>
              
              <div className="space-y-2 max-h-[350px] overflow-y-auto pr-2">
                {SERVICE_LOCATIONS.map((location, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors flex items-center ${
                      activeLocation === location.name
                        ? 'bg-green-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => {
                      // This is just for UI - the actual interaction happens through the map
                      setActiveLocation(location.name);
                    }}
                  >
                    <span className="w-6 h-6 flex items-center justify-center mr-3 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="font-medium">{location.name}</span>
                    <span className="ml-auto text-sm">
                      {location.radius} mi
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-gray-700 font-medium">Need service outside these areas?</p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center mt-2 text-green-600 font-medium hover:text-green-700"
                >
                  Contact us for availability
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Service Area Map */}
          <ErrorBoundary fallback={<div className="h-[480px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex items-center justify-center bg-gray-100"><span className="text-gray-500">Map unavailable at the moment</span></div>}>
            <div className="h-[480px] rounded-xl overflow-hidden shadow-2xl border border-gray-100" ref={mapRef}></div>
          </ErrorBoundary>
        </div>
      </div>

      {/* No Script tag here - using centralized GoogleMapsLoader */}
    </section>
  );
};

export default ServiceAreaLocator;
