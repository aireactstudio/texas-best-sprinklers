import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const flowerMoundData: ServiceContent = {
  title: 'Professional Drainage Solutions in Flower Mound, TX',
  metaDescription: 'Expert drainage system installation and repair services in Flower Mound. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-flower-mound.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Flower Mound homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Flower Mound'),
  testimonial: {
    quote: "The drainage system Texas Best installed has completely transformed our property. No more standing water or soggy areas after rain. Highly recommend!",
    author: "Lisa B.",
    location: "Flower Mound",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
