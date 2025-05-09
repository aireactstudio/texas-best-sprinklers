import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const irvingData: ServiceContent = {
  title: 'Professional Drainage Solutions in Irving, TX',
  metaDescription: 'Expert drainage system installation and repair services in Irving. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-irving.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Irving homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Irving'),
  testimonial: {
    quote: "Texas Best Sprinklers designed a drainage system that perfectly addressed our property's water issues. Their expertise and attention to detail were impressive.",
    author: "Michael C.",
    location: "Irving",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
