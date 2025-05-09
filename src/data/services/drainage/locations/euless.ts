import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const eulessData: ServiceContent = {
  title: 'Professional Drainage Solutions in Euless, TX',
  metaDescription: 'Expert drainage system installation and repair services in Euless. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-euless.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Euless homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Euless'),
  testimonial: {
    quote: "After years of dealing with yard flooding, Texas Best installed a drainage system that completely solved our problem. Highly recommend their services!",
    author: "Sarah M.",
    location: "Euless",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
