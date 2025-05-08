// Generic template for sprinkler installation articles
// This allows us to maintain consistent styling while easily changing content

export interface LocalChallenge {
  title: string;
  icon: 'clipboard' | 'sun' | 'map' | 'check' | 'flag'; // Icon identifiers
  content: string;
}

export interface Benefit {
  title: string;
  content: string;
  icon: 'home' | 'water' | 'sun';
  stat: string;
  statLabel: string;
}

export interface ProcessStep {
  title: string;
  content: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  stars: number; // 1-5
}

export interface SprinklerInstallationArticleData {
  location: string;
  introduction: string;
  challenges: LocalChallenge[];
  benefits: Benefit[];
  process: ProcessStep[];
  timeline: string;
  testimonial: Testimonial;
  conclusion: string;
}

export const generateSprinklerInstallationArticle = (data: SprinklerInstallationArticleData): string => {
  // Function to get the icon SVG based on identifier
  const getIconSvg = (icon: string): string => {
    const icons = {
      clipboard: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />',
      sun: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />',
      map: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />',
      check: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />',
      flag: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />',
      home: '<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" /><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />',
      water: '<path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />'
    };
    
    return icons[icon as keyof typeof icons] || icons.check;
  };

  // Generate challenges section
  const challengesHTML = data.challenges.map(challenge => `
  <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
    <div class="flex items-center mb-4">
      <span class="bg-irrigation-blue bg-opacity-10 p-3 rounded-full mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-irrigation-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          ${getIconSvg(challenge.icon)}
        </svg>
      </span>
      <h4 class="text-xl font-semibold text-irrigation-blue">${challenge.title}</h4>
    </div>
    <p class="text-gray-700">${challenge.content}</p>
  </div>
  `).join('');

  // Generate benefits section
  const benefitsHTML = data.benefits.map(benefit => `
  <div class="bg-white rounded-lg shadow-sm p-6 border border-irrigation-blue border-opacity-20 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-24 h-24 opacity-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-irrigation-blue w-full h-full">
        ${getIconSvg(benefit.icon)}
      </svg>
    </div>

    <h4 class="text-xl font-semibold text-irrigation-blue mb-4 relative z-10">${benefit.title}</h4>
    <p class="text-gray-700 relative z-10">${benefit.content}</p>
    
    <div class="mt-4 pt-4 border-t border-gray-100">
      <div class="flex items-center">
        <span class="text-irrigation-blue font-bold mr-2">${benefit.stat}</span>
        <span class="text-sm text-gray-600">${benefit.statLabel}</span>
      </div>
    </div>
  </div>
  `).join('');

  // Generate process steps
  const processStepsHTML = data.process.map((step, index) => `
  <div class="relative z-20 pl-14 pb-8">
    <div class="absolute left-0 top-0 rounded-full w-12 h-12 bg-irrigation-blue text-white flex items-center justify-center font-bold text-xl">${index + 1}</div>
    <h4 class="text-xl font-semibold text-irrigation-blue mb-2">${step.title}</h4>
    <p class="text-gray-700">${step.content}</p>
    ${index === data.process.length - 1 ? 
    `<div class="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-irrigation-blue mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
        </svg>
        <span class="text-gray-700"><span class="font-medium">Project Timeline:</span> ${data.timeline}</span>
      </div>
    </div>` : ''}
  </div>
  `).join('');

  // Generate stars for testimonial
  const starsHTML = Array(data.testimonial.stars).fill(0).map(() => `
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
  `).join('');

  // Final HTML template
  return `
<div class="prose prose-lg max-w-none prose-headings:text-irrigation-blue prose-h3:mt-8 prose-h3:text-xl prose-h3:font-semibold prose-h4:text-lg prose-h4:font-medium prose-p:text-gray-700 prose-li:text-gray-700">
  <h3 class="text-2xl font-bold mb-6">Tailored Irrigation Solutions for ${data.location} Properties</h3>

<div class="mb-8 p-4 border-l-4 border-irrigation-blue bg-blue-50 rounded-r-lg">
  <p class="text-gray-800">${data.introduction}</p>
</div>

<h3 class="text-2xl font-bold mt-10 mb-6">${data.location}'s Unique Irrigation Challenges</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
  ${challengesHTML}
</div>

<h3 class="text-2xl font-bold mt-10 mb-6">Benefits for ${data.location} Property Owners</h3>

<div class="bg-blue-50 rounded-xl p-6 mb-10 border border-irrigation-blue border-opacity-20">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    ${benefitsHTML}
  </div>
</div>

<h3 class="text-2xl font-bold mt-10 mb-6">Our Installation Process</h3>

<div class="relative overflow-hidden mb-10">
  <div class="absolute top-0 bottom-0 left-6 w-0.5 bg-irrigation-blue bg-opacity-30 z-10"></div>
  
  ${processStepsHTML}
</div>

<h3 class="text-2xl font-bold mt-10 mb-6">Why Choose Texas Best Sprinklers in ${data.location}</h3>

<div class="bg-blue-50 p-6 rounded-xl mb-8 border border-irrigation-blue border-opacity-20">
  <div class="flex flex-col md:flex-row">
    <div class="flex-1">
      <p class="text-gray-700 mb-4">${data.conclusion}</p>
    </div>
    
    <div class="md:w-96 mt-6 md:mt-0 md:ml-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 rounded-full overflow-hidden bg-irrigation-blue bg-opacity-10 flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-irrigation-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h4 class="text-lg font-semibold">${data.testimonial.name}</h4>
          <p class="text-gray-500 text-sm">${data.testimonial.location}</p>
        </div>
      </div>
      
      <blockquote class="italic text-gray-700 border-l-4 border-irrigation-blue border-opacity-30 pl-4">
        "${data.testimonial.quote}"
      </blockquote>
      
      <div class="mt-4 flex">
        ${starsHTML}
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-center">
  <a href="/contact" class="inline-block bg-irrigation-blue hover:bg-irrigation-darkBlue text-white font-bold py-3 px-8 rounded-lg transition-colors">
    Get Your Free ${data.location} Sprinkler System Quote
  </a>
</div>

</div>
  `;
};
