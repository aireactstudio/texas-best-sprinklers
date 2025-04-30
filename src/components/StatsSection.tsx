
import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "1000+",
      label: "Projects Completed",
    },
    {
      value: "4.9",
      label: "Google Rating",
    },
    {
      value: "100+",
      label: "Google Reviews",
    },
    {
      value: "Fort Worth",
      label: "Texas",
    },
  ];

  return (
    <section className="bg-irrigation-green py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-white text-opacity-90 text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
