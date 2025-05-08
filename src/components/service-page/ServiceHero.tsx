import Image from 'next/image';
import Link from 'next/link';
import { ServiceContent } from '@/data/types/serviceTypes';

interface ServiceHeroProps {
  serviceContent: ServiceContent;
}

export default function ServiceHero({ serviceContent }: ServiceHeroProps) {
  return (
    <div className="relative w-full h-[75vh] min-h-[500px]">
      <Image
        src={serviceContent.heroImage}
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {serviceContent.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {serviceContent.metaDescription}
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
        </div>
      </div>
    </div>
  );
}
