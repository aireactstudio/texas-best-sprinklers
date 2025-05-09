import { ArticleData } from '../../../types/ArticleTypes';

// Interface for maintenance article data
export interface MaintenanceArticleData {
  location: string;
  introduction: string;
  maintenanceServices: {
    title: string;
    content: string;
    benefits: string[];
  }[];
  applicationAreas: {
    title: string;
    icon: string;
    content: string;
  }[];
  maintenanceProcess: {
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
  seasonalTips: {
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

// Function to generate HTML for maintenance articles
export const generateMaintenanceArticle = (data: MaintenanceArticleData): ArticleData => {
  const html = `
    <article class="service-article maintenance-article">
      <section class="introduction-section">
        <div class="section-content">
          <h2>Professional Sprinkler Maintenance in ${data.location}</h2>
          <p>${data.introduction}</p>
        </div>
      </section>

      <section class="maintenance-services-section">
        <div class="section-content">
          <h2>Maintenance Services for ${data.location} Properties</h2>
          <div class="maintenance-services-container">
            ${data.maintenanceServices.map((service, index) => `
              <div class="maintenance-service">
                <h3>${service.title}</h3>
                <p>${service.content}</p>
                <ul class="benefits-list">
                  ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="application-areas-section">
        <div class="section-content">
          <h2>Maintenance Solutions for ${data.location} Properties</h2>
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
      
      <section class="maintenance-process-section">
        <div class="section-content">
          <h2>Our Professional Maintenance Process</h2>
          <div class="maintenance-steps">
            ${data.maintenanceProcess.map((step, index) => `
              <div class="maintenance-step">
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
          <h2>Benefits of Professional Sprinkler Maintenance</h2>
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

      <section class="seasonal-tips-section">
        <div class="section-content">
          <h2>Seasonal Maintenance Tips</h2>
          <div class="seasonal-tips">
            ${data.seasonalTips.map((tip, index) => `
              <div class="seasonal-tip">
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
          <h2>Why Choose Texas Best Sprinklers for Your ${data.location} Maintenance Needs</h2>
          <p>${data.conclusion}</p>
          <div class="cta-container">
            <a href="/contact" class="cta-button">Schedule Your Maintenance Service</a>
          </div>
        </div>
      </section>
    </article>
  `;

  return {
    title: `Professional Sprinkler Maintenance Services in ${data.location} | Texas Best Sprinklers`,
    metaDescription: `Keep your ${data.location} irrigation system running efficiently with professional maintenance. Save water, prevent costly repairs, and extend system life.`,
    description: `Keep your ${data.location} irrigation system running efficiently with professional maintenance. Save water, prevent costly repairs, and extend system life.`,
    heading: `Professional Sprinkler Maintenance in ${data.location}`,
    content: html
  };
};
