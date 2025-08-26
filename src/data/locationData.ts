// List of all locations we serve (based on user-provided list)
export const LOCATIONS = [
  'fort-worth',     // Main Office
  'keller',
  'roanoke',
  'saginaw',
  'watauga',
  'westlake',
  'grapevine',
  'northlake',
  'azle',
  'haltom-city',
  'weatherford',
  'argyle',
  'flower-mound',
  'southlake',
  'blue-mound',
  'haslet',
  'north-richland-hills',
  'trophy-club',     // Added from user's list
  // Added to reach full list for header mega menu
  'bedford',
  'euless',
  'hurst'
];

/**
 * Function to check if a location is valid
 * @param location - Location slug to check
 * @returns boolean indicating if the location is valid
 */
export function isValidLocation(location: string): boolean {
  return LOCATIONS.includes(location);
}

// Simplified location data with Fort Worth as the only office location
export const locationData = {
  'fort-worth': {
    name: 'Fort Worth',
    nearestOffice: 'Fort Worth',
    distanceFromOffice: 0,
    landmarks: ['Fort Worth Water Gardens', 'Sundance Square', 'Fort Worth Stockyards'],
    neighborhoods: ['Downtown Fort Worth', 'Cultural District', 'Fairmount', 'Arlington Heights', 'Wedgwood', 'Ridglea'],
    coordinates: {
      latitude: 32.7555,
      longitude: -97.3308
    },
    isOfficeLocation: true,
    serviceRadius: 30
  },
  'weatherford': {
    name: 'Weatherford',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 0,
    landmarks: ['Parker County Courthouse', 'Chandor Gardens', 'Heritage Park'],
    neighborhoods: ['Downtown Weatherford', 'Hudson Oaks', 'Brock', 'Willow Park', 'Aledo', 'Annetta', 'Peaster', 'Millsap', 'Cool', 'Springtown'],
    coordinates: {
      latitude: 32.7593,
      longitude: -97.7972
    },
    isOfficeLocation: true,
    serviceRadius: 30
  },

  'keller': {
    name: 'Keller',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 25,
    landmarks: ['Keller Town Center', 'The Keller Pointe', 'Bear Creek Park'],
    neighborhoods: ['Hidden Lakes', 'Marshall Ridge', 'Oakmont', 'Ridgewood'],
    coordinates: {
      latitude: 32.9343,
      longitude: -97.2297
    },
    serviceRadius: 10
  },
  'southlake': {
    name: 'Southlake',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 28,
    landmarks: ['Southlake Town Square', 'Bob Jones Park', 'The Marq Southlake'],
    neighborhoods: ['Carillon', 'Coventry Manor', 'Timber Lake', 'Southlake Meadows'],
    coordinates: {
      latitude: 32.9414,
      longitude: -97.1342
    },
    serviceRadius: 12
  },

  'grapevine': {
    name: 'Grapevine',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 32,
    landmarks: ['Grapevine Lake', 'Historic Downtown Grapevine', 'Gaylord Texan Resort'],
    neighborhoods: ['Historic Township', 'Meadowmere Park', 'Silver Lake', 'Stone Bridge Oaks'],
    coordinates: {
      latitude: 32.9343,
      longitude: -97.0780
    },
    serviceRadius: 12
  },
  'north-richland-hills': {
    name: 'North Richland Hills',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 27,
    landmarks: ['NRH2O Family Water Park', 'Iron Horse Golf Course', 'NYTEX Sports Centre'],
    neighborhoods: ['Smithfield', 'Chapman Heights', 'Meadow Ridge', 'Vista Ridge'],
    coordinates: {
      latitude: 32.8342,
      longitude: -97.2289
    },
    serviceRadius: 8
  },




  'haltom-city': {
    name: 'Haltom City',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 25,  
    landmarks: ['Haltom City Library', 'Haltom Road Park', 'Buffalo Ridge Park'],
    neighborhoods: ['Garden Acres', 'East View', 'Western Hills', 'Buffalo Ridge'],
    coordinates: {
      latitude: 32.7995,
      longitude: -97.2690
    },
    serviceRadius: 7
  },
  'watauga': {
    name: 'Watauga',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 26,
    landmarks: ['Capp Smith Park', 'Watauga Public Library', 'Foster Village Park'],
    neighborhoods: ['Highland Meadow', 'Parkview', 'Whitener', 'Valley View'],
    coordinates: {
      latitude: 32.8627,
      longitude: -97.2547
    },
    serviceRadius: 7
  },

  'flower-mound': {
    name: 'Flower Mound',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 38,
    landmarks: ['Grapevine Lake', 'Heritage Park', 'Flower Mound Community Activity Center'],
    neighborhoods: ['Bridlewood', 'Wellington', 'Lakeside', 'Highland Village'],
    coordinates: {
      latitude: 33.0145,
      longitude: -97.0969
    },
    serviceRadius: 10
  },



  'trophy-club': {
    name: 'Trophy Club',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 32,
    landmarks: ['Trophy Club Country Club', 'Trophy Club Park', 'Independence Park'],
    neighborhoods: ['The Highlands', 'Old Town', 'The Vineyards', 'Trophy Wood'],
    coordinates: {
      latitude: 33.0011,
      longitude: -97.1900
    },
    serviceRadius: 8
  },
  'roanoke': {
    name: 'Roanoke',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 33,
    landmarks: ['Historic Downtown Roanoke', 'Roanoke Recreation Center', 'Oak Street'],
    neighborhoods: ['Marshall Creek', 'Fairway Ranch', 'The Highlands', 'Woodcreek'],
    coordinates: {
      latitude: 33.0040,
      longitude: -97.2253
    },
    serviceRadius: 8
  },
  'westlake': {
    name: 'Westlake',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 31,
    landmarks: ['Solana Business Park', 'Westlake Academy', 'Vaquero Golf Club'],
    neighborhoods: ['Vaquero', 'Granada', 'Terra Bella', 'Glenwyck Farms'],
    coordinates: {
      latitude: 32.9918,
      longitude: -97.1967
    },
    serviceRadius: 8
  },
  'azle': {
    name: 'Azle',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 14,
    landmarks: ['Eagle Mountain Lake', 'Azle Memorial Library', 'Central Park'],
    neighborhoods: ['Lakeridge Estates', 'Eagle Mountain', 'Cross Timbers', 'Ashwood Estates'],
    coordinates: {
      latitude: 32.8954,
      longitude: -97.5453
    },
    serviceRadius: 15
  },
  'saginaw': {
    name: 'Saginaw',
    nearestOffice: 'Fort Worth',
    distanceFromOffice: 12,
    landmarks: ['Saginaw Community Center', 'Saginaw Park', 'Trinity River'],
    neighborhoods: ['Bluebonnet Hills', 'Saginaw Meadows', 'Trinity Oaks'],
    coordinates: {
      latitude: 32.8735,
      longitude: -97.3631
    },
    serviceRadius: 8
  },
  'northlake': {
    name: 'Northlake',
    nearestOffice: 'Fort Worth',
    distanceFromOffice: 32,
    landmarks: ['Northlake Town Hall', 'Robson Ranch Golf Club', 'Eagle Mountain Lake'],
    neighborhoods: ['Robson Ranch', 'Eagle Mountain Estates', 'Northlake Meadows'],
    coordinates: {
      latitude: 33.1151,
      longitude: -97.2497
    },
    serviceRadius: 12
  },
  'argyle': {
    name: 'Argyle',
    nearestOffice: 'Fort Worth',
    distanceFromOffice: 35,
    landmarks: ['Argyle Town Square', 'Liberty Christian School', 'Cross Oaks Ranch'],
    neighborhoods: ['Canyon Falls', 'Harvest', 'Argyle Meadows', 'Cross Oaks'],
    coordinates: {
      latitude: 33.1215,
      longitude: -97.1836
    },
    serviceRadius: 15
  },
  'blue-mound': {
    name: 'Blue Mound',
    nearestOffice: 'Fort Worth',
    distanceFromOffice: 10,
    landmarks: ['Blue Mound City Hall', 'Saginaw Park', 'Trinity River Trail'],
    neighborhoods: ['Blue Mound Estates', 'Trinity Meadows', 'River Oaks'],
    coordinates: {
      latitude: 32.8618,
      longitude: -97.3364
    },
    serviceRadius: 6
  },
  'haslet': {
    name: 'Haslet',
    nearestOffice: 'Fort Worth',
    distanceFromOffice: 22,
    landmarks: ['Haslet City Hall', 'Alliance Airport', 'Texas Motor Speedway'],
    neighborhoods: ['Alliance', 'Avondale-Haslet', 'Heritage Trace', 'Sendera Ranch'],
    coordinates: {
      latitude: 32.9715,
      longitude: -97.3364
    },
    serviceRadius: 10
  }
};

/**
 * Helper function to get location data
 * @param location - Location slug to lookup
 * @returns Location data object with at least a name property
 */
export const getLocationData = (location: string) => {
  if (!location) {
    // Return a default object instead of null
    return { 
      name: 'Texas', 
      nearestOffice: 'Fort Worth', 
      distanceFromOffice: 0,
      landmarks: ['Texas Best Sprinklers Office']
    };
  }
  
  const locationKey = location.toLowerCase();
  
  // If we have data for this location, return it
  if (locationData[locationKey]) {
    return locationData[locationKey];
  }
  
  // Otherwise, create a default location object with name derived from the slug
  const formattedName = location
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
    
  return { 
    name: formattedName, 
    nearestOffice: 'Fort Worth',
    distanceFromOffice: 30, // Default
    landmarks: ['Local Parks', 'Community Center']
  };
};



// Export a default object with all location-related data and functions
const locationModule = {
  LOCATIONS,
  isValidLocation,
  locationData,
  getLocationData
};

export default locationModule;
