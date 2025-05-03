import { Metadata } from 'next';

// Define valid locations to prevent arbitrary routes
const validLocations = [
  'dallas', 
  'arlington', 
  'denton', 
  'keller',
  'southlake',
  'grapevine',
  'colleyville',
  'bedford',
  'euless',
  'hurst'
];

// Generate metadata dynamically based on location
export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const { location } = params;
  
  // Check if this is a valid location we serve
  if (!validLocations.includes(location.toLowerCase())) {
    return {
      title: 'Location Not Found | Texas Best Sprinklers',
      description: 'The requested service location could not be found.'
    };
  }
  
  // Format location for display (capitalize, replace hyphens with spaces)
  const formattedLocation = location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${formattedLocation} Sprinkler & Irrigation Services | Texas Best Sprinklers`,
    description: `Professional sprinkler installation, repair & maintenance in ${formattedLocation}, TX. Texas Best Sprinklers provides expert irrigation services for ${formattedLocation} homes and businesses.`,
    keywords: `sprinkler installation ${formattedLocation}, irrigation company ${formattedLocation}, sprinkler repair ${formattedLocation}, lawn irrigation ${formattedLocation}`,
  };
}

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
