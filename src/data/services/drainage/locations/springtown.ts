import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const springtownData: ServiceContent = {
  title: 'Professional Drainage Solutions in Springtown, TX',
  metaDescription: 'Expert drainage system installation and repair services in Springtown. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-springtown.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Springtown homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Springtown'),
  testimonial: {
    quote: "Texas Best Sprinklers installed a drainage system that completely eliminated the standing water issues in our yard. Their team was professional and efficient.",
    author: "Jason W.",
    location: "Springtown",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
