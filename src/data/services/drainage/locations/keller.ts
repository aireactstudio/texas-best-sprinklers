import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const kellerData: ServiceContent = {
  title: 'Professional Drainage Solutions in Keller, TX',
  metaDescription: 'Expert drainage system installation and repair services in Keller. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-keller.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Keller homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Keller'),
  testimonial: {
    quote: "The drainage system Texas Best installed has completely eliminated the water issues in our yard. Their team was knowledgeable and the installation was flawless.",
    author: "Jennifer M.",
    location: "Keller",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
