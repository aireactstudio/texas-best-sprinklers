import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const lewisvilleData: ServiceContent = {
  title: 'Professional Drainage Solutions in Lewisville, TX',
  metaDescription: 'Expert drainage system installation and repair services in Lewisville. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-lewisville.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Lewisville homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Lewisville'),
  testimonial: {
    quote: "After years of dealing with water pooling in our yard, Texas Best Sprinklers installed a drainage system that solved all our issues. Great service and results!",
    author: "Mark D.",
    location: "Lewisville",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
