import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const aledoData: ServiceContent = {
  title: 'Professional Drainage Solutions in Aledo, TX',
  metaDescription: 'Expert drainage system installation and repair services in Aledo. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-aledo.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Aledo homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Aledo'),
  testimonial: {
    quote: "The drainage system from Texas Best Sprinklers has completely eliminated the water issues in our yard. Their team was professional and the work was completed on schedule.",
    author: "Christopher J.",
    location: "Aledo",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
