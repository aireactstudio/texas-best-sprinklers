import { Metadata } from 'next';
import ServiceLocationLayout, { generateServiceLocationMetadata } from '@/components/layouts/ServiceLocationLayout';
import { ServiceType } from '@/data/serviceTypes';

type LocationLayoutProps = {
  children: React.ReactNode;
  params: {
    location: string;
  };
};

export async function generateMetadata({ params }: LocationLayoutProps): Promise<Metadata> {
  const { location } = params;
  return generateServiceLocationMetadata(location, ServiceType.LIGHTING);
}

export default ServiceLocationLayout;
