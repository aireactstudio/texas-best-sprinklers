import { ServiceType } from '../../../serviceTypes';
import type { ServiceContent } from '../../../types/serviceTypes';
import { commonBenefits } from '../common/benefits';
import { commonServices } from '../common/services';
import { getCommonFAQs } from '../common/faqs';

export const annettaData: ServiceContent = {
  title: 'Professional Drainage Solutions in Annetta, TX',
  metaDescription: 'Expert drainage system installation and repair services in Annetta. Prevent water damage, foundation issues, and landscape erosion with custom drainage solutions.',
  heroImage: '/assets/images/drainage-annetta.jpg',
  serviceType: ServiceType.DRAINAGE,
  intro: "Texas Best Sprinklers provides Annetta homeowners with professional drainage solutions designed to protect your property from water damage. Our custom drainage systems effectively manage water flow, prevent flooding, and protect your home's foundation and landscape from costly water damage.",
  benefits: commonBenefits,
  services: commonServices,
  faqs: getCommonFAQs('Annetta'),
  testimonial: {
    quote: "The drainage system Texas Best installed has completely transformed our property. No more standing water or erosion issues after heavy rain.",
    author: "Richard T.",
    location: "Annetta",
    rating: 5
  },
  updatedAt: '2025-05-08'
};
