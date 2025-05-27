// Import and export all service articles

// Sprinkler Repair Articles
import fortWorthSprinklerRepairArticle from './sprinkler-repair/fort-worth';
import arlingtonSprinklerRepairArticle from './sprinkler-repair/arlington';
import kellerSprinklerRepairArticle from './sprinkler-repair/keller';
import southlakeSprinklerRepairArticle from './sprinkler-repair/southlake';
import colleyvilleSprinklerRepairArticle from './sprinkler-repair/colleyville';
import grapevineSprinklerRepairArticle from './sprinkler-repair/grapevine';
import northRichlandHillsSprinklerRepairArticle from './sprinkler-repair/north-richland-hills';
import bedfordSprinklerRepairArticle from './sprinkler-repair/bedford';
import eulessSprinklerRepairArticle from './sprinkler-repair/euless';
import hurstSprinklerRepairArticle from './sprinkler-repair/hurst';
import haltomCitySprinklerRepairArticle from './sprinkler-repair/haltom-city';
import weatherfordSprinklerRepairArticle from './sprinkler-repair/weatherford';
import westlakeSprinklerRepairArticle from './sprinkler-repair/westlake';
import willowParkSprinklerRepairArticle from './sprinkler-repair/willow-park';
import aledoSprinklerRepairArticle from './sprinkler-repair/aledo';
import benbrookSprinklerRepairArticle from './sprinkler-repair/benbrook';
import coppellSprinklerRepairArticle from './sprinkler-repair/coppell';
import flowerMoundSprinklerRepairArticle from './sprinkler-repair/flower-mound';
import grandPrairieSprinklerRepairArticle from './sprinkler-repair/grand-prairie';
import irvingSprinklerRepairArticle from './sprinkler-repair/irving';
import lewisvilleSprinklerRepairArticle from './sprinkler-repair/lewisville';
import mansfieldSprinklerRepairArticle from './sprinkler-repair/mansfield';
import roanokeSprinklerRepairArticle from './sprinkler-repair/roanoke';
import trophyClubSprinklerRepairArticle from './sprinkler-repair/trophy-club';
import wataugaSprinklerRepairArticle from './sprinkler-repair/watauga';

// Sprinkler Installation Articles
import weatherfordSprinklerInstallationArticle from './sprinkler-installation/weatherford';
import arlingtonSprinklerInstallationArticle from './sprinkler-installation/arlington';
import kellerSprinklerInstallationArticle from './sprinkler-installation/keller';
import southlakeSprinklerInstallationArticle from './sprinkler-installation/southlake';
import colleyvilleSprinklerInstallationArticle from './sprinkler-installation/colleyville';
import northRichlandHillsArticleHtml from './sprinkler-installation/north-richland-hills';
import bedfordArticleHtml from './sprinkler-installation/bedford';
import eulessArticleHtml from './sprinkler-installation/euless';
import hurstArticleHtml from './sprinkler-installation/hurst';
import mansfieldArticleHtml from './sprinkler-installation/mansfield';
import grandPrairieArticleHtml from './sprinkler-installation/grand-prairie';
import haltomCityArticleHtml from './sprinkler-installation/haltom-city';
import westlakeArticleHtml from './sprinkler-installation/westlake';
import coppellArticleHtml from './sprinkler-installation/coppell';
import grapevineArticleHtml from './sprinkler-installation/grapevine';
import wataugaArticleHtml from './sprinkler-installation/watauga';
import benbrookArticleHtml from './sprinkler-installation/benbrook';
import flowerMoundArticleHtml from './sprinkler-installation/flower-mound';
import lewisvilleArticleHtml from './sprinkler-installation/lewisville';
import irvingArticleHtml from './sprinkler-installation/irving';
import trophyClubArticleHtml from './sprinkler-installation/trophy-club';
import roanokeArticleHtml from './sprinkler-installation/roanoke';

// Export all articles
export { weatherfordSprinklerInstallationArticle };
export { arlingtonSprinklerInstallationArticle };
export { kellerSprinklerInstallationArticle };
export { southlakeSprinklerInstallationArticle };
export { colleyvilleSprinklerInstallationArticle };
export { northRichlandHillsArticleHtml };
export { bedfordArticleHtml };
export { eulessArticleHtml };
export { hurstArticleHtml };
export { mansfieldArticleHtml };
export { grandPrairieArticleHtml };
export { haltomCityArticleHtml };
export { westlakeArticleHtml };
export { coppellArticleHtml };
export { grapevineArticleHtml };
export { wataugaArticleHtml };
export { benbrookArticleHtml };
export { flowerMoundArticleHtml };
export { lewisvilleArticleHtml };
export { irvingArticleHtml };
export { trophyClubArticleHtml };
export { roanokeArticleHtml };

// Sprinkler Repair Exports
export { fortWorthSprinklerRepairArticle };
export { arlingtonSprinklerRepairArticle };
export { kellerSprinklerRepairArticle };
export { southlakeSprinklerRepairArticle };
export { colleyvilleSprinklerRepairArticle };
export { grapevineSprinklerRepairArticle };
export { northRichlandHillsSprinklerRepairArticle };
export { bedfordSprinklerRepairArticle };
export { eulessSprinklerRepairArticle };
export { hurstSprinklerRepairArticle };
export { haltomCitySprinklerRepairArticle };
export { weatherfordSprinklerRepairArticle };
export { westlakeSprinklerRepairArticle };
export { willowParkSprinklerRepairArticle };
export { aledoSprinklerRepairArticle };
export { benbrookSprinklerRepairArticle };
export { coppellSprinklerRepairArticle };
export { flowerMoundSprinklerRepairArticle };
export { grandPrairieSprinklerRepairArticle };
export { irvingSprinklerRepairArticle };
export { lewisvilleSprinklerRepairArticle };
export { mansfieldSprinklerRepairArticle };
export { roanokeSprinklerRepairArticle };
export { trophyClubSprinklerRepairArticle };
export { wataugaSprinklerRepairArticle };

// Article lookup function
export const getServiceArticle = (
  service: string,
  location: string
): string | null => {
  // Normalize the service and location for lookup
  const normalizedService = service.toLowerCase().replace(/\s+/g, '-');
  const normalizedLocation = location.toLowerCase().replace(/\s+/g, '-');
  
  // Lookup map for articles
  const articleMap: Record<string, Record<string, string>> = {
    'sprinkler-installation': {
      'weatherford': weatherfordSprinklerInstallationArticle,
      'arlington': arlingtonSprinklerInstallationArticle,
      'keller': kellerSprinklerInstallationArticle,
      'southlake': southlakeSprinklerInstallationArticle,
      'colleyville': colleyvilleSprinklerInstallationArticle,
      'north-richland-hills': northRichlandHillsArticleHtml,
      'bedford': bedfordArticleHtml,
      'euless': eulessArticleHtml,
      'hurst': hurstArticleHtml,
      'mansfield': mansfieldArticleHtml,
      'grand-prairie': grandPrairieArticleHtml,
      'haltom-city': haltomCityArticleHtml,
      'westlake': westlakeArticleHtml,
      'coppell': coppellArticleHtml,
      'grapevine': grapevineArticleHtml,
      'watauga': wataugaArticleHtml,
      'benbrook': benbrookArticleHtml,
      'flower-mound': flowerMoundArticleHtml,
      'lewisville': lewisvilleArticleHtml,
      'irving': irvingArticleHtml,
      'trophy-club': trophyClubArticleHtml,
      'roanoke': roanokeArticleHtml,
      // Add more locations as they become available
    },
    'sprinkler-repair': {
      'fort-worth': fortWorthSprinklerRepairArticle,
      'arlington': arlingtonSprinklerRepairArticle,
      'keller': kellerSprinklerRepairArticle,
      'southlake': southlakeSprinklerRepairArticle,
      'colleyville': colleyvilleSprinklerRepairArticle,
      'grapevine': grapevineSprinklerRepairArticle,
      'north-richland-hills': northRichlandHillsSprinklerRepairArticle,
      'bedford': bedfordSprinklerRepairArticle,
      'euless': eulessSprinklerRepairArticle,
      'hurst': hurstSprinklerRepairArticle,
      'haltom-city': haltomCitySprinklerRepairArticle,
      'weatherford': weatherfordSprinklerRepairArticle,
      'westlake': westlakeSprinklerRepairArticle,
      'willow-park': willowParkSprinklerRepairArticle,
      'aledo': aledoSprinklerRepairArticle,
      'benbrook': benbrookSprinklerRepairArticle,
      'coppell': coppellSprinklerRepairArticle,
      'flower-mound': flowerMoundSprinklerRepairArticle,
      'grand-prairie': grandPrairieSprinklerRepairArticle,
      'irving': irvingSprinklerRepairArticle,
      'lewisville': lewisvilleSprinklerRepairArticle,
      'mansfield': mansfieldSprinklerRepairArticle,
      'roanoke': roanokeSprinklerRepairArticle,
      'trophy-club': trophyClubSprinklerRepairArticle,
      'watauga': wataugaSprinklerRepairArticle,
      // Add more locations as they become available
    },
    // Add more services as they become available
  };
  
  // Return the article if it exists
  return articleMap[normalizedService]?.[normalizedLocation] || null;
};
