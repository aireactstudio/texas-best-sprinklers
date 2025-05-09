import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const coolData: ServiceContent = {
  title: 'Professional Drainage Solutions in Cool, TX',
  metaDescription: 'Expert drainage system installation and repair services in Cool. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-cool.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Cool homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Cool'),
  testimonial: {
    quote: "The drainage system Texas Best installed has completely transformed our property. No more standing water after rain, and their team was very professional.",
    author: "Andrew B.",
    location: "Cool",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
