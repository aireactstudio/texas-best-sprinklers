import React from 'react';

// Define the steps for each service type
const serviceHowToSteps = {
  irrigation: [
    {
      number: "01",
      title: "Schedule a Consultation",
      description: "Contact us to schedule a free on-site irrigation consultation where we'll assess your landscape needs and water usage patterns."
    },
    {
      number: "02",
      title: "Receive a Custom Design",
      description: "Our irrigation experts will create a tailored sprinkler system design that maximizes efficiency for your specific landscape."
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our certified technicians will install your irrigation system with minimal disruption to your landscape."
    },
    {
      number: "04",
      title: "System Walkthrough",
      description: "We'll show you how to operate your new irrigation system and program it for optimal water conservation."
    }
  ],
  drainage: [
    {
      number: "01",
      title: "Drainage Assessment",
      description: "We'll conduct a thorough assessment of your property to identify water flow patterns and problem areas."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our team will design a custom drainage solution to address your specific water management challenges."
    },
    {
      number: "03",
      title: "Expert Installation",
      description: "Our specialists will install your drainage system, ensuring proper water diversion and landscape protection."
    },
    {
      number: "04",
      title: "Final Inspection",
      description: "We'll test your drainage system to ensure it effectively manages water flow and protects your property."
    }
  ],
  lighting: [
    {
      number: "01",
      title: "Lighting Consultation",
      description: "Meet with our lighting designers to discuss your outdoor lighting goals and preferences."
    },
    {
      number: "02",
      title: "Lighting Design",
      description: "We'll create a custom lighting plan that enhances your property's beauty, security, and functionality."
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our technicians will carefully install your lighting system with attention to detail and minimal disruption."
    },
    {
      number: "04",
      title: "Evening Demonstration",
      description: "We'll return in the evening to make final adjustments and demonstrate your new lighting system."
    }
  ],
  maintenance: [
    {
      number: "01",
      title: "System Evaluation",
      description: "We'll conduct a comprehensive evaluation of your existing irrigation, drainage, or lighting system."
    },
    {
      number: "02",
      title: "Maintenance Plan",
      description: "Based on our evaluation, we'll create a customized maintenance plan to keep your systems in optimal condition."
    },
    {
      number: "03",
      title: "Regular Service",
      description: "Our technicians will perform scheduled maintenance visits to inspect, clean, and adjust your systems."
    },
    {
      number: "04",
      title: "Seasonal Adjustments",
      description: "We'll make seasonal adjustments to ensure your systems perform optimally throughout the year."
    }
  ]
};

const serviceInfo = {
  irrigation: {
    name: "How to Get Started with Irrigation Systems",
    description: "Follow these steps to install a professional irrigation system for your property.",
    estimatedCost: "Starting at $2,500"
  },
  drainage: {
    name: "How to Get Started with Drainage Solutions",
    description: "Follow these steps to resolve water drainage issues on your property.",
    estimatedCost: "Starting at $1,800"
  },
  lighting: {
    name: "How to Get Started with Outdoor Lighting",
    description: "Follow these steps to enhance your property with professional outdoor lighting.",
    estimatedCost: "Starting at $1,500"
  },
  maintenance: {
    name: "How to Get Started with System Maintenance",
    description: "Follow these steps to maintain your irrigation, drainage, or lighting systems.",
    estimatedCost: "Starting at $95 per visit"
  }
};

interface MultiServiceHowToSchemaProps {
  activeTab: 'irrigation' | 'drainage' | 'lighting' | 'maintenance';
}

const MultiServiceHowToSchema: React.FC<MultiServiceHowToSchemaProps> = ({ activeTab }) => {
  // Create HowTo schemas for all services
  const howToSchemas = Object.entries(serviceHowToSteps).map(([service, steps]) => {
    const serviceType = service as keyof typeof serviceInfo;
    
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": serviceInfo[serviceType].name,
      "description": serviceInfo[serviceType].description,
      "totalTime": "PT2H", // Estimated total time: 2 hours for consultation and planning
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": serviceInfo[serviceType].estimatedCost
      },
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Phone or email for initial contact"
        }
      ],
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Property information"
        },
        {
          "@type": "HowToSupply",
          "name": "Landscape details"
        }
      ],
      "step": steps.map((step, index) => ({
        "@type": "HowToStep",
        "url": `https://sprinklersanddrains.com/how-to-get-started#step-${service}-${index + 1}`,
        "name": step.title,
        "itemListElement": {
          "@type": "HowToDirection",
          "text": step.description
        },
        "position": index + 1
      }))
    };
  });

  return (
    <>
      {howToSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default MultiServiceHowToSchema;
