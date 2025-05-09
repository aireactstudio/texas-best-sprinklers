import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const hudsonOaksData: ServiceContent = {
  title: 'Professional Drainage Solutions in Hudson Oaks, TX',
  metaDescription: 'Expert drainage system installation and repair services in Hudson Oaks. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-hudson-oaks.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Hudson Oaks homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Hudson Oaks'),
  testimonial: {
    quote: "The drainage system Texas Best installed has completely transformed our yard. No more standing water after rain, and our foundation is now protected.",
    author: "Amanda L.",
    location: "Hudson Oaks",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
