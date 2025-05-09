import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const azleData: ServiceContent = {
  title: 'Professional Drainage Solutions in Azle, TX',
  metaDescription: 'Expert drainage system installation and repair services in Azle. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-azle.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Azle homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Azle'),
  testimonial: {
    quote: "The drainage system Texas Best installed has completely eliminated the standing water in our yard. Their team was professional and the work was completed on schedule.",
    author: "Sarah J.",
    location: "Azle",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
