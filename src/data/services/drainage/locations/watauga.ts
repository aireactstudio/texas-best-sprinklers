import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const wataugaData: ServiceContent = {
  title: 'Professional Drainage Solutions in Watauga, TX',
  metaDescription: 'Expert drainage system installation and repair services in Watauga. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-watauga.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Watauga homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Watauga'),
  testimonial: {
    quote: "The drainage solution from Texas Best Sprinklers has made a huge difference in our yard. No more standing water after rain, and their team was very professional.",
    author: "Karen W.",
    location: "Watauga",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
