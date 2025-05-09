import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const grandPrairieData: ServiceContent = {
  title: 'Professional Drainage Solutions in Grand Prairie, TX',
  metaDescription: 'Expert drainage system installation and repair services in Grand Prairie. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-grand-prairie.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Grand Prairie homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Grand Prairie'),
  testimonial: {
    quote: "The drainage system from Texas Best Sprinklers has completely eliminated the standing water in our yard. Their team was professional and thorough.",
    author: "Thomas J.",
    location: "Grand Prairie",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
