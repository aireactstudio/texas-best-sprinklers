import React from 'react';
import Image from 'next/image';

interface LocalProjectsProps {
  cityName: string;
}

const LocalProjects: React.FC<LocalProjectsProps> = ({ cityName }) => {
  // Sample projects data - in a real application, this would come from a CMS or database
  const projects = [
    {
      id: 1,
      title: `Custom Residential Irrigation in ${cityName}`,
      description: `Complete sprinkler system installation for a residential property in ${cityName}, featuring smart irrigation controllers and efficient zone planning.`,
      image: '/lovable-uploads/46ae61a0-fbce-461d-9b45-e27c5db476bd.png',
      neighborhood: cityName === 'Fort Worth' ? 'Wedgwood' : 'Downtown',
      date: 'March 2025'
    },
    {
      id: 2,
      title: `${cityName} Commercial Property Irrigation`,
      description: `Commercial irrigation system design and installation for an office complex in ${cityName}, optimized for water conservation and coverage.`,
      image: '/lovable-uploads/46ae61a0-fbce-461d-9b45-e27c5db476bd.png',
      neighborhood: cityName === 'Fort Worth' ? 'Arlington Heights' : 'Hudson Oaks',
      date: 'January 2025'
    },
    {
      id: 3,
      title: `Drought-Resistant System in ${cityName}`,
      description: `Water-efficient irrigation system installed for a ${cityName} residence, featuring drip irrigation zones and rain sensors.`,
      image: '/lovable-uploads/46ae61a0-fbce-461d-9b45-e27c5db476bd.png',
      neighborhood: cityName === 'Fort Worth' ? 'TCU Area' : 'Brock',
      date: 'February 2025'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-2 text-irrigation-darkBlue">Recent Projects in {cityName}</h2>
        <p className="text-lg text-irrigation-a11y-gray-dark mb-10">
          Check out some of our recently completed irrigation projects in the {cityName} area
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-irrigation-blue font-semibold">{project.neighborhood}</span>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalProjects;
