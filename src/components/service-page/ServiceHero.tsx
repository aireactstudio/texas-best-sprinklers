import Image from 'next/image';
import Link from 'next/link';
import { ServiceContent } from '@/data/types/serviceTypes';
import LicenseBadge from '@/components/LicenseBadge';

interface ServiceHeroProps {
  serviceContent: ServiceContent;
  location?: string;
}

export default function ServiceHero({ serviceContent, location }: ServiceHeroProps) {
  return (
    <div
      className="relative w-full h-[75vh] min-h-[500px]"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        marginTop: 'calc(env(safe-area-inset-top) * -1)'
      }}
    >
      <Image
        src="/assets/images/optimized/hero-background.webp"
        alt={serviceContent.title}
        fill
        priority
        sizes="100vw"
        quality={90}
        style={{ objectFit: 'cover' }}
        className="brightness-50" // Darker image overlay
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/hfwAJhAPkz1MYsgAAAABJRU5ErkJggg=="
      />
      {/* Additional dark overlay for more contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full bg-green-600 bg-opacity-80 text-white text-sm font-medium">
            <span>Professional Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {location 
              ? `Our ${serviceContent.serviceType.replace('-', ' ')} Services in ${location}` 
              : serviceContent.title
            }
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {location 
              ? `Explore our professional ${serviceContent.serviceType.replace('-', ' ')} services designed specifically for ${location} properties and conditions` 
              : serviceContent.metaDescription
            }
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link 
              href="#services" 
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors"
            >
              View Services
            </Link>
          </div>
          <div className="flex justify-center mt-4">
            <LicenseBadge variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
