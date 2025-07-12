import { getServerSideSitemap } from 'next-sitemap'
import { LOCATIONS } from '@/data/locationData'
import { ServiceType } from '@/data/types/serviceTypes'

export async function GET() {
  // Define all service types as URL slugs & display names with priorities
  const serviceTypes = [
    { slug: 'drainage-solutions', name: 'Drainage Solutions', priority: 0.8, type: ServiceType.DRAINAGE },
    { slug: 'irrigation-repair', name: 'Irrigation Repair', priority: 0.9, type: ServiceType.IRRIGATION_REPAIR },
    { slug: 'outdoor-lighting', name: 'Outdoor Lighting', priority: 0.7, type: ServiceType.OUTDOOR_LIGHTING },
    { slug: 'maintenance', name: 'Irrigation Maintenance', priority: 0.8, type: ServiceType.MAINTENANCE },
    { slug: 'sprinkler-installation', name: 'Sprinkler Installation', priority: 0.9, type: ServiceType.SPRINKLER_INSTALLATION }
  ]

  // Get all locations
  const locations = LOCATIONS
  // Define main locations (those with higher priority)
  const mainLocations = [
    'fort-worth',
    'weatherford',
    'arlington',
    'keller',
    'southlake',
    'colleyville',
    'grapevine'
  ]
  
  // Current date for lastmod
  const currentDate = new Date().toISOString()
  // Last month date for staggered updates
  const lastMonthDate = new Date()
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)
  const lastMonthIso = lastMonthDate.toISOString()

  // Array to store all URLs
  const allUrls = []
  
  // Add core pages
  allUrls.push(
    {
      loc: 'https://sprinkleranddrains.com/',
      lastmod: currentDate,
      priority: 1.0,
      changefreq: 'daily'
    },
    {
      loc: 'https://sprinkleranddrains.com/about',
      lastmod: lastMonthIso,
      priority: 0.8,
      changefreq: 'monthly'
    },
    {
      loc: 'https://sprinkleranddrains.com/services',
      lastmod: currentDate,
      priority: 0.9,
      changefreq: 'weekly'
    },
    {
      loc: 'https://sprinkleranddrains.com/projects',
      lastmod: currentDate,
      priority: 0.8,
      changefreq: 'weekly'
    },
    {
      loc: 'https://sprinkleranddrains.com/contact',
      lastmod: lastMonthIso,
      priority: 0.8,
      changefreq: 'monthly'
    },
    {
      loc: 'https://sprinkleranddrains.com/blog',
      lastmod: currentDate,
      priority: 0.7,
      changefreq: 'weekly'
    }
  )
  
  // Add service index pages
  for (const service of serviceTypes) {
    allUrls.push({
      loc: `https://sprinkleranddrains.com/services/${service.slug}`,
      lastmod: currentDate,
      priority: service.priority,
      changefreq: 'weekly'
    })
  }
  
  // Add service/location combinations with varied priorities
  for (const service of serviceTypes) {
    // Main locations get higher priority
    for (const location of mainLocations) {
      allUrls.push({
        loc: `https://sprinkleranddrains.com/services/${service.slug}/${location}`,
        lastmod: currentDate,
        priority: service.priority,
        changefreq: 'weekly'
      })
    }
    
    // Secondary locations get slightly lower priority
    for (const location of locations) {
      if (!mainLocations.includes(location)) {
        allUrls.push({
          loc: `https://sprinkleranddrains.com/services/${service.slug}/${location}`,
          lastmod: lastMonthIso,
          priority: service.priority - 0.1,
          changefreq: 'monthly'
        })
      }
    }
  }
  
  // Add location pages with varied priorities
  for (const location of mainLocations) {
    allUrls.push({
      loc: `https://sprinkleranddrains.com/${location}`,
      lastmod: currentDate,
      priority: 0.8,
      changefreq: 'weekly'
    })
  }
  
  // Secondary location pages
  for (const location of locations) {
    if (!mainLocations.includes(location)) {
      allUrls.push({
        loc: `https://sprinkleranddrains.com/${location}`,
        lastmod: lastMonthIso,
        priority: 0.7,
        changefreq: 'monthly'
      })
    }
  }

  return getServerSideSitemap(allUrls)
}
