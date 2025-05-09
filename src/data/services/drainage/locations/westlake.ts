import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const westlakeData: ServiceContent = {
  title: 'Professional Drainage Solutions in Westlake, TX',
  metaDescription: 'Expert drainage system installation and repair services in Westlake. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-westlake.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Westlake homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Westlake'),
  testimonial: {
    quote: "The drainage solution from Texas Best Sprinklers has completely resolved the water issues on our property. Their team was professional and the quality of work was outstanding.",
    author: "Elizabeth R.",
    location: "Westlake",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
