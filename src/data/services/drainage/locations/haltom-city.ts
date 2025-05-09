import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const haltomCityData: ServiceContent = {
  title: 'Professional Drainage Solutions in Haltom City, TX',
  metaDescription: 'Expert drainage system installation and repair services in Haltom City. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-haltom-city.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Haltom City homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Haltom City'),
  testimonial: {
    quote: "After struggling with yard drainage for years, Texas Best Sprinklers installed a system that solved all our problems. Excellent service and results!",
    author: "Patricia N.",
    location: "Haltom City",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
