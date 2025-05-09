import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const northRichlandHillsData: ServiceContent = {
  title: 'Professional Drainage Solutions in North Richland Hills, TX',
  metaDescription: 'Expert drainage system installation and repair services in North Richland Hills. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-north-richland-hills.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides North Richland Hills homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('North Richland Hills'),
  testimonial: {
    quote: "The drainage system from Texas Best Sprinklers has completely resolved the water issues on our property. Their team was professional and the quality of work was outstanding.",
    author: "Michael T.",
    location: "North Richland Hills",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
