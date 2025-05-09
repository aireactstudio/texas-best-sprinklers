import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';

// Import all location-specific data
import aledoData from './locations/aledo';
import annettaData from './locations/annetta';
import arlingtonData from './locations/arlington';
import azleData from './locations/azle';
import bedfordData from './locations/bedford';
import benbrookData from './locations/benbrook';
import brockData from './locations/brock';
import colleyvilleData from './locations/colleyville';
import coolData from './locations/cool';
import coppellData from './locations/coppell';
import eulessData from './locations/euless';
import flowermoundData from './locations/flower-mound';
import fortworthData from './locations/fort-worth';
import grandprairieData from './locations/grand-prairie';
import grapevineData from './locations/grapevine';
import haltomcityData from './locations/haltom-city';
import hudsonoaksData from './locations/hudson-oaks';
import hurstData from './locations/hurst';
import irvingData from './locations/irving';
import kellerData from './locations/keller';
import lewisvilleData from './locations/lewisville';
import mansfieldData from './locations/mansfield';
import millsapData from './locations/millsap';
import mineralwellsData from './locations/mineral-wells';
import northrichlandhillsData from './locations/north-richland-hills';
import peasterData from './locations/peaster';
import roanokeData from './locations/roanoke';
import southlakeData from './locations/southlake';
import springtownData from './locations/springtown';
import trophyclubData from './locations/trophy-club';
import wataugaData from './locations/watauga';
import weatherfordData from './locations/weatherford';
import westlakeData from './locations/westlake';
import willowparkData from './locations/willow-park';

/**
 * Aggregated irrigation repair service data for all locations
 */
export const irrigationRepairData: Record<string, ServiceContent> = {
  'aledo': aledoData,
  'annetta': annettaData,
  'arlington': arlingtonData,
  'azle': azleData,
  'bedford': bedfordData,
  'benbrook': benbrookData,
  'brock': brockData,
  'colleyville': colleyvilleData,
  'cool': coolData,
  'coppell': coppellData,
  'euless': eulessData,
  'flower-mound': flowermoundData,
  'fort-worth': fortworthData,
  'grand-prairie': grandprairieData,
  'grapevine': grapevineData,
  'haltom-city': haltomcityData,
  'hudson-oaks': hudsonoaksData,
  'hurst': hurstData,
  'irving': irvingData,
  'keller': kellerData,
  'lewisville': lewisvilleData,
  'mansfield': mansfieldData,
  'millsap': millsapData,
  'mineral-wells': mineralwellsData,
  'north-richland-hills': northrichlandhillsData,
  'peaster': peasterData,
  'roanoke': roanokeData,
  'southlake': southlakeData,
  'springtown': springtownData,
  'trophy-club': trophyclubData,
  'watauga': wataugaData,
  'weatherford': weatherfordData,
  'westlake': westlakeData,
  'willow-park': willowparkData,
};

/**
 * Get irrigation repair service data for a specific location
 * @param location The location slug to get data for
 * @returns The service content for the specified location, or null if not found
 */
export const getIrrigationRepairData = (location: string): ServiceContent | null => {
  return irrigationRepairData[location] || null;
};

/**
 * Check if irrigation repair service is available in a specific location
 * @param location The location slug to check
 * @returns True if the service is available in the location, false otherwise
 */
export const isIrrigationRepairAvailable = (location: string): boolean => {
  return location in irrigationRepairData;
};

/**
 * Get all locations where irrigation repair service is available
 * @returns An array of location slugs
 */
export const getIrrigationRepairLocations = (): string[] => {
  return Object.keys(irrigationRepairData);
};

export default irrigationRepairData;