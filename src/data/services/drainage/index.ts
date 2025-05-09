import { ServiceContent } from '../../types/serviceTypes';

// Import location data files
import { fortWorthData } from './locations/fort-worth';
import { weatherfordData } from './locations/weatherford';

// Import other locations as they are created
import { bedfordData } from './locations/bedford';
import { eulessData } from './locations/euless';
import { hurstData } from './locations/hurst';
import { mansfieldData } from './locations/mansfield';
import { grandPrairieData } from './locations/grand-prairie';
import { haltomCityData } from './locations/haltom-city';
import { wataugaData } from './locations/watauga';
import { benbrookData } from './locations/benbrook';
import { flowerMoundData } from './locations/flower-mound';
import { lewisvilleData } from './locations/lewisville';
import { coppellData } from './locations/coppell';
import { irvingData } from './locations/irving';
import { trophyClubData } from './locations/trophy-club';
import { roanokeData } from './locations/roanoke';
import { westlakeData } from './locations/westlake';
import { annettaData } from './locations/annetta';
import { brockData } from './locations/brock';
import { millsapData } from './locations/millsap';
import { peasterData } from './locations/peaster';
import { hudsonOaksData } from './locations/hudson-oaks';
import { aledoData } from './locations/aledo';
import { willowParkData } from './locations/willow-park';
import { springtownData } from './locations/springtown';
import { coolData } from './locations/cool';
import { arlingtonData } from './locations/arlington';
import { southlakeData } from './locations/southlake';
import { colleyvilleData } from './locations/colleyville';
import { grapevineData } from './locations/grapevine';
import { kellerData } from './locations/keller';
import { northRichlandHillsData } from './locations/north-richland-hills';
import { azleData } from './locations/azle';
import { mineralWellsData } from './locations/mineral-wells';

/**
 * Drainage Solutions service data for each location
 */
export const drainageServiceData: Record<string, ServiceContent> = {
  'fort-worth': fortWorthData,
  'weatherford': weatherfordData,
  'bedford': bedfordData,
  'euless': eulessData,
  'hurst': hurstData,
  'mansfield': mansfieldData,
  'grand-prairie': grandPrairieData,
  'haltom-city': haltomCityData,
  'watauga': wataugaData,
  'benbrook': benbrookData,
  'flower-mound': flowerMoundData,
  'lewisville': lewisvilleData,
  'coppell': coppellData,
  'irving': irvingData,
  'trophy-club': trophyClubData,
  'roanoke': roanokeData,
  'westlake': westlakeData,
  'annetta': annettaData,
  'brock': brockData,
  'millsap': millsapData,
  'peaster': peasterData,
  'hudson-oaks': hudsonOaksData,
  'aledo': aledoData,
  'willow-park': willowParkData,
  'springtown': springtownData,
  'cool': coolData,
  'arlington': arlingtonData,
  'southlake': southlakeData,
  'colleyville': colleyvilleData,
  'grapevine': grapevineData,
  'keller': kellerData,
  'north-richland-hills': northRichlandHillsData,
  'azle': azleData,
  'mineral-wells': mineralWellsData
};

// For backward compatibility with existing code
export default drainageServiceData;
