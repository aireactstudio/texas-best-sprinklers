
import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
    },
    {
      value: "30%",
      label: "Average Water Savings",
    },
    {
      value: "15+",
      label: "Years of Experience",
    },
    {
      value: "100%",
      label: "Customer Satisfaction",
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
