// List of all locations we serve
export const LOCATIONS = [
  'fort-worth',     // Main Office
  'weatherford',
  'arlington',
  'keller',
  'southlake',
  'colleyville',
  'grapevine',
  'north-richland-hills',
  'bedford',
  'euless',
  'hurst',
  'mansfield',
  'grand-prairie',
  'haltom-city',
  'watauga',
  'benbrook',
  'flower-mound',
  'lewisville',
  'coppell',
  'irving',
  'trophy-club',
  'roanoke',
  'westlake',
  'azle',
  'mineral-wells',
  'annetta',
  'brock',
  'millsap',
  'peaster',
  'hudson-oaks',
  'aledo',
  'willow-park',
  'springtown',
  'cool'
];

/**
 * Function to check if a location is valid
 * @param location - Location slug to check
 * @returns boolean indicating if the location is valid
 */
export function isValidLocation(location: string): boolean {
  return LOCATIONS.includes(location);
}

// Detailed information about each location
export const locationData = {
  'fort-worth': {
    name: 'Fort Worth',
    nearestOffice: 'Fort Worth',
    distanceFromOffice: 0,
    landmarks: ['Fort Worth Stockyards', 'Sundance Square', 'Fort Worth Water Gardens', 'Dickies Arena'],
    neighborhoods: ['Downtown', 'Fairmount', 'Arlington Heights', 'Westover Hills', 'Rivercrest', 'Westcliff', 'TCU Area', 'Cultural District'],
    coordinates: {
      latitude: 32.7555,
      longitude: -97.3308
    },
    isOfficeLocation: true,
    serviceRadius: 35
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
  'arlington': {
    name: 'Arlington',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 35,
    landmarks: ['AT&T Stadium', 'Globe Life Field', 'Six Flags Over Texas'],
    neighborhoods: ['North Arlington', 'South Arlington', 'East Arlington', 'West Arlington', 'Central Arlington', 'Dalworthington Gardens', 'Pantego'],
    coordinates: {
      latitude: 32.7357,
      longitude: -97.1081
    },
    serviceRadius: 15
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
  'colleyville': {
    name: 'Colleyville',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 29,
    landmarks: ['Colleyville Center', 'Colleyville Nature Center', 'Pleasant Run Trail'],
    neighborhoods: ['Oakmont', 'Whittier Estates', 'Cheek-Sparger Area', 'Villas at Caldwell Creek'],
    coordinates: {
      latitude: 32.8935,
      longitude: -97.1487
    },
    serviceRadius: 10
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
  'bedford': {
    name: 'Bedford',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 30,
    landmarks: ['Bedford Boys Ranch Park', 'Pennington Field', 'Old Bedford School'],
    neighborhoods: ['Bedford Heights', 'Stonegate', 'Hickory Creek', 'Lake Ridge'],
    coordinates: {
      latitude: 32.8446,
      longitude: -97.1434
    },
    serviceRadius: 8
  },
  'euless': {
    name: 'Euless',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 31,
    landmarks: ['Texas Star Golf Course', 'Villages of Bear Creek Park', 'Mary Lib Saleh Euless Public Library'],
    neighborhoods: ['Lakewood Village', 'The Parks at Texas Star', 'Oak Ridge', 'Founders Village'],
    coordinates: {
      latitude: 32.8370,
      longitude: -97.0820
    },
    serviceRadius: 8
  },
  'hurst': {
    name: 'Hurst',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 28,
    landmarks: ['North East Mall', 'Hurst Community Park', 'Chisholm Park'],
    neighborhoods: ['Woodcrest', 'Meadow Park', 'Redbud Estates', 'Harrison Lane'],
    coordinates: {
      latitude: 32.8234,
      longitude: -97.1702
    },
    serviceRadius: 8
  },
  'mansfield': {
    name: 'Mansfield',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 40,
    landmarks: ['Hawaiian Falls Mansfield', 'Elmer W. Oliver Nature Park', 'Historic Downtown Mansfield'],
    neighborhoods: ['Walnut Creek Valley', 'Twin Creeks', 'Woodland Estates', 'Kennedale Estates'],
    coordinates: {
      latitude: 32.5632,
      longitude: -97.1417
    },
    serviceRadius: 10
  },
  'grand-prairie': {
    name: 'Grand Prairie',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 42,
    landmarks: ['Lone Star Park', 'Verizon Theatre', 'Lynn Creek Park'],
    neighborhoods: ['Lake Parks', 'Mira Lagos', 'Grand Peninsula', 'Westchester'],
    coordinates: {
      latitude: 32.7459,
      longitude: -97.0047
    },
    serviceRadius: 12
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
  'benbrook': {
    name: 'Benbrook',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 16,
    landmarks: ['Benbrook Lake', 'Dutch Branch Park', 'Benbrook Community Center/YMCA'],
    neighborhoods: ['Whitestone Ranch', 'Ridglea Country Club Estates', 'Benbrook Hills', 'Trinity Oaks'],
    coordinates: {
      latitude: 32.6732,
      longitude: -97.4606
    },
    serviceRadius: 8
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
  'lewisville': {
    name: 'Lewisville',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 40,
    landmarks: ['Lewisville Lake', 'Old Town Lewisville', 'Music City Mall'],
    neighborhoods: ['Castle Hills', 'Valley Vista', 'Northwood Hills', 'The Colony'],
    coordinates: {
      latitude: 33.0461,
      longitude: -97.0128
    },
    serviceRadius: 10
  },
  'coppell': {
    name: 'Coppell',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 36,
    landmarks: ['Andrew Brown Park', 'Coppell Nature Park', 'Old Town Coppell'],
    neighborhoods: ['Riverchase', 'Denton Creek', 'Vistas of Coppell', 'The Lakes'],
    coordinates: {
      latitude: 32.9545,
      longitude: -97.0150
    },
    serviceRadius: 8
  },
  'irving': {
    name: 'Irving',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 38,
    landmarks: ['Toyota Music Factory', 'Las Colinas Canals', 'Irving Convention Center'],
    neighborhoods: ['Las Colinas', 'Valley Ranch', 'South Irving', 'MacArthur Park'],
    coordinates: {
      latitude: 32.8140,
      longitude: -96.9489
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
  'mineral-wells': {
    name: 'Mineral Wells',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 21,
    landmarks: ['Lake Mineral Wells State Park', 'Clark Gardens', 'Mineral Wells Fossil Park'],
    neighborhoods: ['Downtown Mineral Wells', 'Woodland Park', 'Ram Boulevard'],
    coordinates: {
      latitude: 32.8084,
      longitude: -98.1128
    },
    serviceRadius: 15
  },
  'annetta': {
    name: 'Annetta',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 15,
    landmarks: ['Annetta Cemetery', 'Annettas Town Hall', 'Trinity River Basin'],
    neighborhoods: ['Annetta North', 'Annetta South', 'Clear Fork Estates'],
    coordinates: {
      latitude: 32.6954,
      longitude: -97.6418
    },
    serviceRadius: 8
  },
  'brock': {
    name: 'Brock',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 12,
    landmarks: ['Brock City Park', 'Brock High School', 'Eagle Stadium'],
    neighborhoods: ['McFall Ranch', 'Bearcreek Estates', 'Walsh Ranch'],
    coordinates: {
      latitude: 32.6726,
      longitude: -97.7550
    },
    serviceRadius: 10
  },
  'millsap': {
    name: 'Millsap',
    nearestOffice: 'Weatherford',
    distanceFromOffice: 16,
    landmarks: ['Millsap City Park', 'Millsap High School', 'Millsap Log Cabin Museum'],
    neighborhoods: ['Downtown Millsap', 'Cool Junction', 'Adell'],
    coordinates: {
      latitude: 32.7460,
      longitude: -97.9733
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

// Map of location slugs to their display names
export const LOCATION_MAPPING: Record<string, string> = {
  'fort-worth': 'Fort Worth',
  'weatherford': 'Weatherford',
  'arlington': 'Arlington',
  'keller': 'Keller',
  'southlake': 'Southlake',
  'colleyville': 'Colleyville',
  'grapevine': 'Grapevine',
  'north-richland-hills': 'North Richland Hills',
  'bedford': 'Bedford',
  'euless': 'Euless',
  'hurst': 'Hurst',
  'mansfield': 'Mansfield',
  'grand-prairie': 'Grand Prairie',
  'haltom-city': 'Haltom City',
  'watauga': 'Watauga',
  'benbrook': 'Benbrook',
  'flower-mound': 'Flower Mound',
  'lewisville': 'Lewisville',
  'coppell': 'Coppell',
  'irving': 'Irving',
  'trophy-club': 'Trophy Club',
  'roanoke': 'Roanoke',
  'westlake': 'Westlake',
  'azle': 'Azle',
  'mineral-wells': 'Mineral Wells',
  'annetta': 'Annetta',
  'brock': 'Brock',
  'millsap': 'Millsap',
  'peaster': 'Peaster',
  'hudson-oaks': 'Hudson Oaks',
  'aledo': 'Aledo',
  'willow-park': 'Willow Park',
  'springtown': 'Springtown',
  'cool': 'Cool'
};

// Main locations with offices or primary service areas
export const MAIN_LOCATIONS = [
  'fort-worth',
  'weatherford',
  'arlington',
  'keller',
  'southlake',
  'colleyville',
  'grapevine'
];

// Export a default object with all location-related data and functions
const locationModule = {
  LOCATIONS,
  isValidLocation,
  locationData,
  getLocationData,
  LOCATION_MAPPING,
  MAIN_LOCATIONS
};

export default locationModule;
