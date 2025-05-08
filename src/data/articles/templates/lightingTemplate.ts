import { ArticleData } from '../../../types/ArticleTypes';

// Interface for lighting article data
export interface LightingArticleData {
  location: string;
  introduction: string;
  lightingTypes: {
    title: string;
    content: string;
    benefits: string[];
  }[];
  applicationAreas: {
    title: string;
    icon: string;
    content: string;
  }[];
  installationProcess: {
    title: string;
    content: string;
  }[];
  benefits: {
    title: string;
    icon: string;
    content: string;
    stat: string;
    statLabel: string;
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

// Function to generate HTML for lighting articles
export const generateLightingArticle = (data: LightingArticleData): ArticleData => {
  const html = `
    <article class="service-article lighting-article">
      <section class="introduction-section">
        <div class="section-content">
          <h2>Professional Landscape Lighting in ${data.location}</h2>
          <p>${data.introduction}</p>
        </div>
      </section>

      <section class="lighting-types-section">
        <div class="section-content">
          <h2>Lighting Solutions for ${data.location} Properties</h2>
          <div class="lighting-types-container">
            ${data.lightingTypes.map((type, index) => `
              <div class="lighting-type">
                <h3>${type.title}</h3>
                <p>${type.content}</p>
                <ul class="benefits-list">
                  ${type.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="application-areas-section">
        <div class="section-content">
          <h2>Perfect Lighting Applications for ${data.location} Homes</h2>
          <div class="application-areas-container">
            ${data.applicationAreas.map((area, index) => `
              <div class="application-area">
                <div class="icon-container">
                  <i data-feather="${area.icon}"></i>
                </div>
                <h3>${area.title}</h3>
                <p>${area.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      
      <section class="installation-section">
        <div class="section-content">
          <h2>Our Professional Lighting Installation Process</h2>
          <div class="installation-steps">
            ${data.installationProcess.map((step, index) => `
              <div class="installation-step">
                <div class="step-number">${index + 1}</div>
                <h3>${step.title}</h3>
                <p>${step.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="benefits-section">
        <div class="section-content">
          <h2>Benefits of Professional Landscape Lighting</h2>
          <div class="benefits-container">
            ${data.benefits.map(benefit => `
              <div class="benefit-card">
                <div class="icon-container">
                  <i data-feather="${benefit.icon}"></i>
                </div>
                <h3>${benefit.title}</h3>
                <p>${benefit.content}</p>
                <div class="stat-container">
                  <span class="stat">${benefit.stat}</span>
                  <span class="stat-label">${benefit.statLabel}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="maintenance-section">
        <div class="section-content">
          <h2>Lighting System Maintenance Tips</h2>
          <div class="maintenance-tips">
            ${data.maintenanceTips.map((tip, index) => `
              <div class="maintenance-tip">
                <h3>${tip.title}</h3>
                <p>${tip.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="testimonial-section">
        <div class="section-content">
          <h2>What Our ${data.location} Clients Say</h2>
          <div class="testimonial-card">
            <div class="quote-mark">"</div>
            <p class="testimonial-text">${data.testimonial.quote}</p>
            <div class="testimonial-author">
              <p class="author-name">${data.testimonial.name}</p>
              <p class="author-location">${data.testimonial.location}, ${data.location}</p>
              <div class="star-rating">
                ${'<i data-feather="star"></i>'.repeat(data.testimonial.stars)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="conclusion-section">
        <div class="section-content">
          <h2>Why Choose Texas Best Sprinklers for Your ${data.location} Lighting Needs</h2>
          <p>${data.conclusion}</p>
          <div class="cta-container">
            <a href="/contact" class="cta-button">Schedule Your Free Consultation</a>
          </div>
        </div>
      </section>
    </article>
  `;

  return {
    title: `Professional Landscape Lighting Solutions in ${data.location} | Texas Best Sprinklers`,
    metaDescription: `Enhance your ${data.location} property with custom landscape lighting. Improve security, aesthetics, and usability with professional design and installation.`,
    description: `Enhance your ${data.location} property with custom landscape lighting. Improve security, aesthetics, and usability with professional design and installation.`,
    heading: `Professional Landscape Lighting in ${data.location}`,
    content: html
  };
};
