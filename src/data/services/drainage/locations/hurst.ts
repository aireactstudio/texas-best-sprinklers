import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const hurstData: ServiceContent = {
  title: 'Professional Drainage Solutions in Hurst, TX',
  metaDescription: 'Expert drainage system installation and repair services in Hurst. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-hurst.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Hurst homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Hurst'),
  testimonial: {
    quote: "The drainage system Texas Best installed has transformed our yard. No more puddles after rain, and our foundation is now protected. Great service!",
    author: "David L.",
    location: "Hurst",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
