import { Metadata } from 'next';
import ServiceLocationLayout, { generateServiceLocationMetadata } from '@/components/layouts/ServiceLocationLayout';
import { ServiceType } from '@/data/serviceTypes';

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const { location } = params;
  return generateServiceLocationMetadata(location, ServiceType.MAINTENANCE);
}

export default ServiceLocationLayout;
