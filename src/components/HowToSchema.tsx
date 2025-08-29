import React from 'react';

interface HowToSchemaProps {
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
}

const HowToSchema: React.FC<HowToSchemaProps> = ({ steps }) => {
  // Create the HowTo structured data
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Started with Texas Best Sprinklers",
    "description": "Follow these steps to transform your landscape with professional irrigation, drainage, or lighting solutions from Texas Best Sprinklers.",
    "totalTime": "PT2H", // Estimated total time: 2 hours for consultation and planning
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "Free consultation"
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
      "url": `https://sprinkleranddrains.com/#step-${index + 1}`,
      "name": step.title,
      "itemListElement": {
        "@type": "HowToDirection",
        "text": step.description
      },
      "position": index + 1
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
    />
  );
};

export default HowToSchema;
