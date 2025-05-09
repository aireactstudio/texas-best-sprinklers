import { ServiceContent } from '@/data/types/serviceTypes';
import { ServiceType } from '@/data/serviceTypes';

// Import location data
import { aledoData } from './locations/aledo';
import { annettaData } from './locations/annetta';
import { arlingtonData } from './locations/arlington';
import { azleData } from './locations/azle';
import { bedfordData } from './locations/bedford';
import { benbrookData } from './locations/benbrook';
import { brockData } from './locations/brock';
import { colleyvilleData } from './locations/colleyville';
import { coolData } from './locations/cool';
import { coppellData } from './locations/coppell';
import { eulessData } from './locations/euless';
import { flowerMoundData } from './locations/flower-mound';
import { fortWorthData } from './locations/fort-worth';
import { grandPrairieData } from './locations/grand-prairie';
import { grapevineData } from './locations/grapevine';
import { haltomCityData } from './locations/haltom-city';
import { hudsonOaksData } from './locations/hudson-oaks';
import { hurstData } from './locations/hurst';
import { irvingData } from './locations/irving';
import { kellerData } from './locations/keller';
import { lewisvilleData } from './locations/lewisville';
import { mansfieldData } from './locations/mansfield';
import { millsapData } from './locations/millsap';
import { mineralWellsData } from './locations/mineral-wells';
import { northRichlandHillsData } from './locations/north-richland-hills';
import { peasterData } from './locations/peaster';
import { roanokeData } from './locations/roanoke';
import { southlakeData } from './locations/southlake';
import { springtownData } from './locations/springtown';
import { trophyClubData } from './locations/trophy-club';
import { wataugaData } from './locations/watauga';
import { weatherfordData } from './locations/weatherford';
import { westlakeData } from './locations/westlake';
import { willowParkData } from './locations/willow-park';

// Export all location data
export const maintenanceServiceData: Record<string, ServiceContent> = {
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
  'flower-mound': flowerMoundData,
  'fort-worth': fortWorthData,
  'grand-prairie': grandPrairieData,
  'grapevine': grapevineData,
  'haltom-city': haltomCityData,
  'hudson-oaks': hudsonOaksData,
  'hurst': hurstData,
  'irving': irvingData,
  'keller': kellerData,
  'lewisville': lewisvilleData,
  'mansfield': mansfieldData,
  'millsap': millsapData,
  'mineral-wells': mineralWellsData,
  'north-richland-hills': northRichlandHillsData,
  'peaster': peasterData,
  'roanoke': roanokeData,
  'southlake': southlakeData,
  'springtown': springtownData,
  'trophy-club': trophyClubData,
  'watauga': wataugaData,
  'weatherford': weatherfordData,
  'westlake': westlakeData,
  'willow-park': willowParkData
};

export default maintenanceServiceData;
