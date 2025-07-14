'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Info, Droplets, FileText, Shield, AlertTriangle, Hammer, BookOpen } from 'lucide-react';

interface WaterRestrictionsLinksProps {
  locationName: string;
  locationSlug: string;
}

interface RegulatoryLink {
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
}

interface LocationRegulations {
  waterRestrictions: string;
  additionalLinks: RegulatoryLink[];
}

// Map of location slugs to their respective regulatory links
const LOCATION_REGULATIONS: Record<string, LocationRegulations> = {
  // Fort Worth region
  'fort-worth': {
    waterRestrictions: 'https://www.fortworthtexas.gov/departments/water/savefwwater',
    additionalLinks: [
      {
        title: 'Irrigation System Requirements',
        url: 'https://www.fortworthtexas.gov/departments/water/savefwwater/irrigation/system-requirements',
        description: 'Fort Worth regulations for installing and modifying irrigation systems, including permit requirements.',
        icon: <FileText className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Drainage & Stormwater Management',
        url: 'https://www.fortworthtexas.gov/departments/tpw/stormwater',
        description: 'Fort Worth stormwater management regulations and drainage requirements for properties.',
        icon: <Droplets className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Backflow Prevention',
        url: 'https://www.fortworthtexas.gov/departments/water/backflow',
        description: 'Requirements for backflow prevention devices and testing to protect the public water supply.',
        icon: <Shield className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Outdoor Lighting Ordinances',
        url: 'https://www.fortworthtexas.gov/departments/development-services/zoning',
        description: 'Regulations for outdoor lighting installations and requirements to minimize light pollution.',
        icon: <AlertTriangle className="text-blue-700 w-6 h-6" />
      }
    ]
  },
  'keller': {
    waterRestrictions: 'https://www.cityofkeller.com/services/public-works/environmental-services/water-conservation',
    additionalLinks: [
      {
        title: 'Irrigation Permit Requirements',
        url: 'https://www.cityofkeller.com/services/building-services/plan-review',
        description: 'Keller requirements for irrigation system installation and modifications.',
        icon: <FileText className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Drainage & Erosion Control',
        url: 'https://www.cityofkeller.com/services/public-works/environmental-services/stormwater-quality',
        description: 'Guidelines for proper drainage and erosion control on properties in Keller.',
        icon: <Droplets className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Backflow Prevention Program',
        url: 'https://www.cityofkeller.com/services/public-works/water-and-wastewater/backflow-prevention',
        description: 'Keller\'s requirements for backflow prevention devices and annual testing.',
        icon: <Shield className="text-blue-700 w-6 h-6" />
      }
    ]
  },
  'southlake': {
    waterRestrictions: 'https://www.cityofsouthlake.com/1055/Water-Conservation',
    additionalLinks: [
      {
        title: 'Irrigation System Permitting',
        url: 'https://www.cityofsouthlake.com/1835/Online-Permitting-and-Inspections',
        description: 'Southlake requirements for installing or modifying irrigation systems.',
        icon: <FileText className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Drainage Requirements',
        url: 'https://www.cityofsouthlake.com/3834/Drainage-and-Stormwater',
        description: 'Southlake drainage and stormwater management requirements.',
        icon: <Droplets className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Backflow Testing Requirements',
        url: 'https://www.cityofsouthlake.com/2453/Backflow-Prevention-Program',
        description: 'Guidelines for backflow prevention in Southlake to protect water supplies.',
        icon: <Shield className="text-blue-700 w-6 h-6" />
      }
    ]
  },
  'north-richland-hills': {
    waterRestrictions: 'https://www.nrhtx.com/188/Water-Conservation',
    additionalLinks: [
      {
        title: 'Irrigation Permitting',
        url: 'https://www.nrhtx.com/762/Irrigation-Permits',
        description: 'North Richland Hills requirements for irrigation system installation.',
        icon: <FileText className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Stormwater Management',
        url: 'https://www.nrhtx.com/224/Stormwater-Management',
        description: 'Regulations for drainage and stormwater management in North Richland Hills.',
        icon: <Droplets className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Backflow Prevention',
        url: 'https://www.nrhtx.com/754/Backflow-Prevention',
        description: 'Requirements for backflow prevention devices in North Richland Hills.',
        icon: <Shield className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Outdoor Lighting Standards',
        url: 'https://www.nrhtx.com/DocumentCenter/View/31183/NRH-Zoning-Ordinance',
        description: 'Outdoor lighting standards and requirements for North Richland Hills properties.',
        icon: <AlertTriangle className="text-blue-700 w-6 h-6" />
      }
    ]
  },
  'grapevine': {
    waterRestrictions: 'https://www.grapevinetexas.gov/525/Water-Conservation-Watering-Restrictions',
    additionalLinks: [
      {
        title: 'Irrigation Permits',
        url: 'https://www.grapevinetexas.gov/136/Applications-Permits',
        description: 'Requirements for obtaining irrigation system permits in Grapevine.',
        icon: <FileText className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Drainage Management',
        url: 'https://www.grapevinetexas.gov/531/Stormwater-Watershed-Quality-Management',
        description: 'Grapevine regulations for stormwater management and drainage.',
        icon: <Droplets className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Backflow Prevention Program',
        url: 'https://www.grapevinetexas.gov/894/Backflow-Prevention-Program',
        description: 'Grapevine requirements for backflow prevention and testing.',
        icon: <Shield className="text-blue-700 w-6 h-6" />
      }
    ]
  },
  'colleyville': {
    waterRestrictions: 'https://www.colleyville.com/water-conservation/',
    additionalLinks: [
      {
        title: 'Irrigation System Permits',
        url: 'https://www.colleyville.com/building-permits/',
        description: 'Colleyville requirements for irrigation system installation and repairs.',
        icon: <FileText className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Stormwater Management',
        url: 'https://www.colleyville.com/stormwater-management/',
        description: 'Regulations for drainage and erosion control in Colleyville.',
        icon: <Droplets className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Backflow Prevention',
        url: 'https://www.colleyville.com/backflow-prevention/',
        description: 'Requirements for backflow prevention devices in Colleyville.',
        icon: <Shield className="text-blue-700 w-6 h-6" />
      }
    ]
  },
  'arlington': {
    waterRestrictions: 'https://www.arlingtontx.gov/City-Services/Water-Utilities/Water-Utilities/Water-Conservation',
    additionalLinks: [
      {
        title: 'Irrigation System Permits',
        url: 'https://www.arlingtontx.gov/City-Services/Water-Utilities/Water-Utilities/Water-Utilities-Resources-for-Engineers-Builders-and-Contractors',
        description: 'Arlington requirements for irrigation system installation and modifications.',
        icon: <FileText className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Stormwater Management',
        url: 'https://www.arlingtontx.gov/city_hall/departments/public_works/stormwater_management',
        description: 'Arlington regulations for drainage and stormwater management.',
        icon: <Droplets className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Water Utilities Resources',
        url: 'https://www.arlingtontx.gov/city_hall/departments/water_utilities',
        description: 'Arlington Water Utilities information and resources.',
        icon: <Info className="text-blue-700 w-6 h-6" />
      }
    ]
  },
  'weatherford': {
    waterRestrictions: 'https://www.weatherfordtx.gov/458/Water-Conservation',
    additionalLinks: [
      {
        title: 'Irrigation System Permits',
        url: 'https://www.weatherfordtx.gov/90/Building-Permits',
        description: 'Weatherford regulations for installing irrigation systems.',
        icon: <FileText className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Stormwater Management',
        url: 'https://www.weatherfordtx.gov/173/Stormwater-Management',
        description: 'Weatherford drainage and stormwater management guidelines.',
        icon: <Droplets className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Water Cross-Connection Control',
        url: 'https://www.weatherfordtx.gov/670/Cross-Connection-Control',
        description: 'Requirements for backflow prevention in Weatherford.',
        icon: <Shield className="text-blue-700 w-6 h-6" />
      }
    ]
  },
  'flower-mound': {
    waterRestrictions: 'https://www.flower-mound.com/221/Water-Conservation',
    additionalLinks: [
      {
        title: 'Irrigation Permits',
        url: 'https://www.flower-mound.com/169/Building-Permits',
        description: 'Flower Mound requirements for irrigation system installation.',
        icon: <FileText className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Drainage Criteria',
        url: 'https://www.flower-mound.com/DocumentCenter/View/290/Drainage-Design-Criteria',
        description: 'Flower Mound\'s drainage design criteria and requirements.',
        icon: <Droplets className="text-blue-700 w-6 h-6" />
      },
      {
        title: 'Backflow Prevention Program',
        url: 'https://www.flower-mound.com/812/Backflow-Prevention',
        description: 'Flower Mound backflow prevention requirements and testing.',
        icon: <Shield className="text-blue-700 w-6 h-6" />
      }
    ]
  }
};

// Default regulatory links if specific city isn't found
const DEFAULT_REGULATIONS: LocationRegulations = {
  waterRestrictions: 'https://www.fortworthtexas.gov/departments/water/save',
  additionalLinks: [
    {
      title: 'Texas Administrative Code - Irrigation Systems',
      url: 'https://texreg.sos.state.tx.us/public/readtac$ext.ViewTAC?tac_view=5&ti=30&pt=1&ch=344&sch=F',
      description: 'State-wide regulations for irrigation system design, installation, and operation in Texas.',
      icon: <BookOpen className="text-blue-700 w-6 h-6" />
    },
    {
      title: 'TCEQ Landscape Irrigation Program',
      url: 'https://www.tceq.texas.gov/licensing/irrigation',
      description: 'Texas Commission on Environmental Quality regulations for irrigation systems.',
      icon: <FileText className="text-blue-700 w-6 h-6" />
    },
    {
      title: 'Texas Water Development Board',
      url: 'https://www.twdb.texas.gov/conservation/municipal/index.asp',
      description: 'State resources for water conservation and management.',
      icon: <Droplets className="text-blue-700 w-6 h-6" />
    },
    {
      title: 'Texas Backflow Prevention Association',
      url: 'https://www.abpa.org/page/Texas',
      description: 'Information on backflow prevention requirements throughout Texas.',
      icon: <Shield className="text-blue-700 w-6 h-6" />
    }
  ]
};

export default function WaterRestrictionsLinks({ locationName, locationSlug }: WaterRestrictionsLinksProps) {
  // Get regulations for this specific location or use defaults
  const locationRegulations = LOCATION_REGULATIONS[locationSlug] || DEFAULT_REGULATIONS;
  const { waterRestrictions, additionalLinks } = locationRegulations;
  
  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          <Droplets className="inline-block mr-2 mb-1 text-blue-600" />
          Water & Irrigation Regulations in {locationName}
        </h2>
        
        {/* Water Restrictions Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
              <Info className="text-blue-700 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">{locationName} Water Conservation Guidelines</h3>
              <p className="mb-4 text-gray-700">
                {locationName} has specific water conservation guidelines and restrictions that all residents and businesses must follow. 
                These include designated watering days, time restrictions, and conservation measures to help preserve our water resources.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="italic text-gray-700">"Water is a precious resource in Texas. Following local water restrictions helps ensure sufficient water supply for everyone in our community."</p>
              </div>
              <div className="mt-4">
                <a 
                  href={waterRestrictions} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition-colors"
                >
                  View {locationName} Water Restrictions <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Regulatory Links */}
        <h3 className="text-2xl font-semibold mb-6 text-center">Local Regulations & Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {additionalLinks.map((link, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5">
              <div className="flex items-center mb-3">
                <div className="bg-blue-50 p-2 rounded-full mr-3">
                  {link.icon}
                </div>
                <h4 className="text-lg font-medium">{link.title}</h4>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                {link.description}
              </p>
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                View Official Guidelines <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center text-gray-600 max-w-3xl mx-auto">
          <p>
            Understanding local regulations is essential for compliant sprinkler and drainage installations.
            For expert guidance navigating these requirements, contact <Link href="/contact" className="text-blue-600 hover:text-blue-800">Texas Best Sprinklers</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
