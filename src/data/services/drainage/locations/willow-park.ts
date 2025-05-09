import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const willowParkData: ServiceContent = {
  title: 'Professional Drainage Solutions in Willow Park, TX',
  metaDescription: 'Expert drainage system installation and repair services in Willow Park. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-willow-park.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Willow Park homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Willow Park'),
  testimonial: {
    quote: "The drainage solution from Texas Best Sprinklers has completely resolved our yard's water issues. Their team was knowledgeable and the installation was flawless.",
    author: "Nicole P.",
    location: "Willow Park",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
