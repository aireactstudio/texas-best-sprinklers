import { Metadata } from 'next';
import { ServiceType } from '@/data/serviceTypes';
import ServiceLocationLayout, { generateServiceLocationMetadata } from '@/components/layouts/ServiceLocationLayout';

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const { location } = params;
  return generateServiceLocationMetadata(location, ServiceType.OUTDOOR_LIGHTING);
}

export default ServiceLocationLayout;
