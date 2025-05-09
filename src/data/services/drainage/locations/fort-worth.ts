import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const fortWorthData: ServiceContent = {
  title: 'Professional Drainage Solutions in Fort Worth, TX',
  metaDescription: 'Expert drainage system installation and repair services in Fort Worth. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-fort-worth.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Fort Worth homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Fort Worth'),
  testimonial: {
    quote: "The drainage system Texas Best installed has completely eliminated the standing water issues we had in our backyard. Their team was professional and the work was completed on schedule.",
    author: "Michael R.",
    location: "Fort Worth",
    rating: 5
  },
  updatedAt: '2025-05-08'
};