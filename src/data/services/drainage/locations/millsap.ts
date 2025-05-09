import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const millsapData: ServiceContent = {
  title: 'Professional Drainage Solutions in Millsap, TX',
  metaDescription: 'Expert drainage system installation and repair services in Millsap. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-millsap.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Millsap homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Millsap'),
  testimonial: {
    quote: "The drainage system installed by Texas Best Sprinklers has completely eliminated the water issues on our property. Their team was professional and thorough.",
    author: "Laura M.",
    location: "Millsap",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
