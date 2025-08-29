export interface WaterRestrictionLink {
  city: string;
  url: string;
}

export const DALLAS_AREA_WATER_RESTRICTIONS: WaterRestrictionLink[] = [
  { city: 'Addison', url: 'https://addisontexas.net/index.php?section=Water%20Conservation%20Plan' },
  { city: 'Allen', url: 'https://www.cityofallen.org/929/water-conservation' },
  { city: 'Carrollton', url: 'http://www.cityofcarrollton.com/departments/departments-g-p/public-works/water-conservation/water-restrictions-and-supply-updates' },
  { city: 'Celina', url: 'https://www.celina-tx.gov/949/water-conservation' },
  { city: 'The Colony', url: 'https://www.thecolonytx.gov/' },
  { city: 'Coppell', url: 'https://www.coppelltx.gov/605/Watering-Techniques' },
  { city: 'Dallas', url: 'https://savedallaswater.com/twice-weekly-watering-schedule/' },
  { city: 'Fairview', url: 'https://www.fairviewtexas.org/departments/water-trash.html' },
  { city: 'Frisco', url: 'https://www.friscotexas.gov/445/water-efficiency-plan' },
  { city: 'Garland', url: 'http://www.garlandwater.com/gov/rz/utilities/water/conserve/plan.asp' },
  { city: 'Highland Park', url: 'http://www.hptx.org/index.aspx?nid=299' },
  { city: 'Highland Village', url: 'https://www.highlandvillage.org/430/drought-regulations-water-restrictions' },
  { city: 'Lewisville', url: 'https://www.cityoflewisville.com/about-us/city-services/sustainability/water-conservation/outdoor-watering-restrictions' },
  { city: 'Little Elm', url: 'http://www.littleelm.org/809/water-conservation-guidelines' },
  { city: 'Lucas', url: 'https://www.lucastexas.us/watering-days/' },
  { city: 'McKinney', url: 'https://www.mckinneytexas.org/511/outdoor-water-use' },
  { city: 'Melissa', url: 'https://www.cityofmelissa.com/departments/utility_billing/waterconservation/index.php' },
  { city: 'Murphy', url: 'https://murphytx.org/399/water-conservation' },
  { city: 'Parker', url: 'https://www.pwsd.org/874/Water-Efficiency-Conservation' },
  { city: 'Plano', url: 'https://www.plano.gov/403/Plano-Water-Resources' },
  { city: 'Princeton', url: 'https://www.princetontx.gov/251/Water' },
  { city: 'Prosper', url: 'https://www.prospertx.gov/government/departments/water-conservation/' },
  { city: 'Richardson', url: 'https://www.cor.net/departments/public-services/water/water-conservation' },
  { city: 'Rockwall', url: 'http://www.rockwall.com/conservation.asp' },
  { city: 'Sachse', url: 'https://www.cityofsachse.com/331/water-conservation-restrictions' },
  { city: 'University Park', url: 'https://www.uptexas.org/watering' },
  { city: 'Wylie', url: 'http://www.wylietexas.gov/departments/public_works/water.php' },
].sort((a, b) => a.city.localeCompare(b.city));
