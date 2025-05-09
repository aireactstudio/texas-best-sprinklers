import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const benbrookData: ServiceContent = {
  title: 'Professional Drainage Solutions in Benbrook, TX',
  metaDescription: 'Expert drainage system installation and repair services in Benbrook. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-benbrook.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Benbrook homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Benbrook'),
  testimonial: {
    quote: "Texas Best Sprinklers designed and installed a drainage system that completely resolved our yard's water issues. Their expertise and service were outstanding.",
    author: "James H.",
    location: "Benbrook",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
