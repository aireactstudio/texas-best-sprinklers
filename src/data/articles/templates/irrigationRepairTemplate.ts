import React from 'react';

export interface IrrigationRepairArticleData {
  location: string;
  introduction: string;
  commonIssues: {
    title: string;
    icon: 'clipboard' | 'map' | 'sun' | 'check' | 'flag';
    content: string;
  }[];
  diagnosticProcess: {
    title: string;
    content: string;
  }[];
  benefits: {
    title: string;
    icon: 'water' | 'home' | 'sun';
    content: string;
    stat: string;
    statLabel: string;
  }[];
  repairTimeline: string;
  preventativeMaintenance: {
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

export const generateIrrigationRepairArticle = (data: IrrigationRepairArticleData) => {
  const { 
    location, 
    introduction, 
    commonIssues, 
    diagnosticProcess, 
    benefits, 
    repairTimeline, 
    preventativeMaintenance,
    testimonial, 
    conclusion 
  } = data;

  return `
    <div class="service-article">
      <h1>Irrigation Repair Services in ${location}</h1>
      
      <section class="article-introduction">
        <p>${introduction}</p>
      </section>
      
      <!-- Common Issues in 2-column grid -->
      <h2>Common Irrigation Issues in ${location}</h2>
      <div class="grid-container grid-cols-2 gap-4">
        ${commonIssues.map(issue => `
          <div class="grid-box">
            <h3>${issue.title}</h3>
            <p>${issue.content}</p>
          </div>
        `).join('')}
      </div>
      
      <!-- Diagnostic Process in 2-column grid -->
      <h2>Our Diagnostic & Repair Process</h2>
      <div class="grid-container grid-cols-2 gap-4">
        ${diagnosticProcess.map((step) => `
          <div class="grid-box">
            <h3>${step.title}</h3>
            <p>${step.content}</p>
          </div>
        `).join('')}
      </div>
      <p><strong>Typical Repair Timeline:</strong> ${repairTimeline}</p>
      
      <!-- Benefits in 2-column grid -->
      <h2>Benefits of Professional Irrigation Repair</h2>
      <div class="grid-container grid-cols-2 gap-4">
        ${benefits.map(benefit => `
          <div class="grid-box">
            <h3>${benefit.title}</h3>
            <p>${benefit.content}</p>
            <div class="benefit-stat">${benefit.stat} ${benefit.statLabel}</div>
          </div>
        `).join('')}
      </div>
      
      <!-- Maintenance Tips with checkboxes -->
      <h2>Maintenance Tips</h2>
      <div class="grid-container grid-cols-2 gap-4">
        ${preventativeMaintenance.map(tip => `
          <div class="grid-box">
            <h3>${tip.title}</h3>
            <ul class="checkbox-list">
              ${tip.content.split('. ').filter(sentence => sentence.trim() !== '').map(sentence => `
                <li>
                  <span class="checkbox">✓</span>
                  <span>${sentence.trim()}${!sentence.trim().endsWith('.') ? '.' : ''}</span>
                </li>
              `).join('')}
            </ul>
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
      <div class="cta-container">
        <a href="/contact" class="cta-button">Get Your Free Repair Estimate</a>
      </div>
    </div>
  `;
};
