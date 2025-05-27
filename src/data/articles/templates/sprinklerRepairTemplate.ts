/**
 * Template for generating sprinkler repair location articles
 */

export interface SprinklerRepairArticleData {
  location: string;
  introduction: string;
  commonIssues: {
    title: string;
    icon: string;
    content: string;
  }[];
  diagnosticProcess: {
    title: string;
    content: string;
  }[];
  repairServices: {
    title: string;
    content: string;
  }[];
  benefits: {
    title: string;
    icon: string;
    content: string;
  }[];
  preventativeTips: string[];
  conclusion: string;
}

/**
 * Generate HTML content for sprinkler repair articles
 */
export function generateSprinklerRepairArticle(articleData: SprinklerRepairArticleData): string {
  const {
    location,
    introduction,
    commonIssues,
    diagnosticProcess,
    repairServices,
    benefits,
    preventativeTips,
    conclusion
  } = articleData;

  return `
    <article class="service-article">
      <section class="introduction">
        <h2>Expert Sprinkler Repair Services in ${location}</h2>
        <p>${introduction}</p>
      </section>

      <section class="common-issues">
        <h2>Common Sprinkler System Issues in ${location}</h2>
        <div class="issue-grid">
          ${commonIssues.map(issue => `
            <div class="issue-card">
              <div class="issue-icon">
                <i class="fa fa-${issue.icon}"></i>
              </div>
              <h3>${issue.title}</h3>
              <p>${issue.content}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="diagnostic-process">
        <h2>Our Sprinkler Repair Process</h2>
        <div class="process-steps">
          ${diagnosticProcess.map((step, index) => `
            <div class="process-step">
              <div class="step-number">${index + 1}</div>
              <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.content}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="repair-services">
        <h2>Our Sprinkler Repair Services in ${location}</h2>
        <div class="services-list">
          ${repairServices.map(service => `
            <div class="service-item">
              <h3>${service.title}</h3>
              <p>${service.content}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="benefits">
        <h2>Benefits of Professional Sprinkler Repair</h2>
        <div class="benefits-grid">
          ${benefits.map(benefit => `
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fa fa-${benefit.icon}"></i>
              </div>
              <h3>${benefit.title}</h3>
              <p>${benefit.content}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="preventative-tips">
        <h2>Preventative Maintenance Tips for ${location} Sprinkler Systems</h2>
        <ul class="tips-list">
          ${preventativeTips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </section>

      <section class="conclusion">
        <h2>Trust Texas Best Sprinklers for Your ${location} Sprinkler Repair Needs</h2>
        <p>${conclusion}</p>
        <div class="cta-button">
          <a href="/contact" class="btn btn-primary">Schedule Sprinkler Repair</a>
        </div>
      </section>
    </article>
  `;
}
