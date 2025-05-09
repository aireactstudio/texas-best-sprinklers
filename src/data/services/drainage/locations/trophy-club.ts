import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const trophyClubData: ServiceContent = {
  title: 'Professional Drainage Solutions in Trophy Club, TX',
  metaDescription: 'Expert drainage system installation and repair services in Trophy Club. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-trophy-club.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Trophy Club homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Trophy Club'),
  testimonial: {
    quote: "The drainage solution from Texas Best Sprinklers has completely transformed our property. No more water issues after heavy rain, and their team was excellent to work with.",
    author: "Jennifer A.",
    location: "Trophy Club",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
