import React from 'react';

export interface DrainageSolutionsArticleData {
  location: string;
  introduction: string;
  commonIssues: {
    title: string;
    icon: 'clipboard' | 'map' | 'sun' | 'check' | 'flag' | 'droplet' | 'home';
    content: string;
  }[];
  solutionTypes: {
    title: string;
    content: string;
    benefits: string[];
  }[];
  installationProcess: {
    title: string;
    content: string;
  }[];
  benefits: {
    title: string;
    icon: 'water' | 'home' | 'sun' | 'shield' | 'trending-up';
    content: string;
    stat?: string;
    statLabel?: string;
  }[];
  maintenanceTips: {
    title: string;
    content: string;
  }[];
  testimonial: {
    name: string;
    location: string;
    quote: string;
    stars: number;
  };
  conclusion: string;
}

export const generateDrainageSolutionsArticle = (data: DrainageSolutionsArticleData) => {
  const { 
    location, 
    introduction, 
    commonIssues, 
    solutionTypes, 
    installationProcess, 
    benefits, 
    maintenanceTips,
    testimonial, 
    conclusion 
  } = data;

  return `
    <div class="service-article">
      <h1>Professional Drainage Solutions for ${location}</h1>
      
      <section class="article-introduction">
        <p>${introduction}</p>
      </section>
      
      <!-- Two-column grid layout for common issues -->
      <h2>Common Drainage Issues in ${location}</h2>
      <div class="grid-container grid-cols-2 gap-4">
        ${commonIssues.map(issue => `
          <div class="grid-box">
            <h3>${issue.title}</h3>
            <p>${issue.content}</p>
          </div>
        `).join('')}
      </div>
      
      <!-- Solution Types with checkboxes -->
      <h2>Our Solutions</h2>
      <div class="grid-container grid-cols-2 gap-4">
        ${solutionTypes.map((solution) => `
          <div class="grid-box">
            <h3>${solution.title}</h3>
            <p>${solution.content}</p>
            <ul class="checkbox-list">
              ${solution.benefits.map(benefit => `
                <li>
                  <span class="checkbox">✓</span>
                  <span>${benefit}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      
      <!-- Installation Process in 2-column grid -->
      <h2>Installation Process</h2>
      <div class="grid-container grid-cols-2 gap-4">
        ${installationProcess.map((step) => `
          <div class="grid-box">
            <h3>${step.title}</h3>
            <p>${step.content}</p>
          </div>
        `).join('')}
      </div>
      
      <!-- Benefits in 2-column grid -->
      <h2>Benefits</h2>
      <div class="grid-container grid-cols-2 gap-4">
        ${benefits.map(benefit => `
          <div class="grid-box">
            <h3>${benefit.title}</h3>
            <p>${benefit.content}</p>
            ${benefit.stat ? `<div class="benefit-stat">${benefit.stat} ${benefit.statLabel}</div>` : ''}
          </div>
        `).join('')}
      </div>
      
      <!-- Maintenance Tips in 2-column grid -->
      <h2>Maintenance Tips</h2>
      <div class="grid-container grid-cols-2 gap-4">
        ${maintenanceTips.map(tip => `
          <div class="grid-box">
            <h3>${tip.title}</h3>
            <p>${tip.content}</p>
          </div>
        `).join('')}
      </div>
      
      <!-- Testimonial -->
      <div class="testimonial-box">
        <p class="quote-text">${testimonial.quote}</p>
        <div class="testimonial-author">
          <strong>${testimonial.name}</strong> | ${testimonial.location}
          <div class="testimonial-stars">
            ${'★'.repeat(testimonial.stars)}
          </div>
        </div>
      </div>
      
      <p class="conclusion">${conclusion}</p>
    </div>
  `;
};
