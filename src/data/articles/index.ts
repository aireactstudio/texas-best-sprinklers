// Import and export all service articles

// Sprinkler Installation Articles
import weatherfordSprinklerInstallationArticle from './sprinkler-installation/weatherford';
import { arlingtonSprinklerInstallationArticle } from './sprinkler-installation/arlington';
import { kellerSprinklerInstallationArticle } from './sprinkler-installation/keller';
import { southlakeSprinklerInstallationArticle } from './sprinkler-installation/southlake';
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
    // Add more services as they become available
  };
  
  // Return the article if it exists
  return articleMap[normalizedService]?.[normalizedLocation] || null;
};
