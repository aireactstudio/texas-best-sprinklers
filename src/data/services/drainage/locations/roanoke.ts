import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const roanokeData: ServiceContent = {
  title: 'Professional Drainage Solutions in Roanoke, TX',
  metaDescription: 'Expert drainage system installation and repair services in Roanoke. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-roanoke.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Roanoke homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Roanoke'),
  testimonial: {
    quote: "The drainage system Texas Best installed has completely eliminated the standing water in our yard. Their team was knowledgeable and the work was completed on schedule.",
    author: "Daniel F.",
    location: "Roanoke",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
